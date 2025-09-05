
import { useState, useEffect } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Loader2 } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Form } from &quot;@/components/ui/form&quot;;
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { GeneratedMilestone } from &quot;@/hooks/useMilestoneGenerator&quot;;
import { generateContract } from &quot;../utils/contractUtils&quot;;
import { ProjectDetailsFields } from &quot;./ProjectDetailsFields&quot;;
import { PaymentTermsFields } from &quot;./PaymentTermsFields&quot;;
import { AdditionalClausesFields } from &quot;./AdditionalClausesFields&quot;;
import { DeploymentOptions } from &quot;@/types/smart-contracts&quot;;

const formSchema = z.object({
  projectName: z.string().min(1, &quot;Project name is required&quot;),
  scopeSummary: z.string().min(10, &quot;Scope summary should be at least 10 characters&quot;),
  startDate: z.date({
    required_error: &quot;Start date is required&quot;}),
  endDate: z.date().optional(),
  paymentTerms: z.enum([&quot;hourly&quot;, &quot;fixed&quot;, &quot;milestone&quot;]),
  paymentAmount: z.string().min(1, &quot;Payment amount is required&quot;),
  additionalClauses: z.array(z.string()).default([])});

export type ContractFormValues = z.infer<typeof formSchema>;

interface ContractFormProps {
  talent: TalentProfile;
  clientName: string;
  initialValues?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void;
  onContractGenerated: (contractContent: string) => void;
  deployOptions?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
}

export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
  deployOptions,
  onDeployOptionsChange
}: ContractFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast } = useToast();

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectName: "&quot;,
      scopeSummary: "&quot;,
      startDate: new Date(),
      paymentTerms: talent.hourly_rate ? &quot;hourly&quot; : &quot;fixed&quot;,
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "&quot;,
      additionalClauses: [&quot;nda&quot;, &quot;ip&quot;]}});
  
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        const typedKey = key as keyof ContractFormValues;
        form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]);
  
  // Track form values for template saving
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = form.watch((value) => {
        onFormValuesChange(value as ContractFormValues);
      });
      
      return () => subscription.unsubscribe();
    }
  }, [form, onFormValuesChange]);
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones);
    
    // If payment terms isn't already set to milestone, update it
    if (form.getValues(&quot;paymentTerms&quot;) !== &quot;milestone&quot;) {
      form.setValue(&quot;paymentTerms&quot;, &quot;milestone&quot;);
    }
    
    toast({
      title: &quot;Milestones Generated&quot;,
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  };
  
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true);
    try {
      const contract = await generateContract(
        values, 
        talent, 
        clientName, 
        generatedMilestones
      );
      
      onContractGenerated(contract);
    } catch (error) {
      console.error(&quot;Error generating contract:&quot;, error);
      toast({
        title: &quot;Contract Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Something went wrong. Please try again.&quot;,
        variant: &quot;destructive"});
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6&quot;>
          <ProjectDetailsFields 
            form={form} 
          />
          
          <PaymentTermsFields 
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />
          
          <AdditionalClausesFields 
            form={form}
          />
          
          <Button 
            type=&quot;submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin&quot; />
                Generating Contract...
              </>
            ) : (
              &quot;Generate Contract"
            )}
          </Button>
        </form>
      </Form>
      
      <DialogFooter className="gap-2 flex-wrap mt-4&quot;>
        <Button 
          variant=&quot;outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  );
}
