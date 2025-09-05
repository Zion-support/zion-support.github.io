
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Loader2 } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { useToast } from "@/hooks/use-toast",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { generateContract } from "../utils/contractUtils",
import { ProjectDetailsFields } from "./ProjectDetailsFields",
import { PaymentTermsFields } from "./PaymentTermsFields",
import { AdditionalClausesFields } from "./AdditionalClausesFields",
import { DeploymentOptions } from "@/types/smart-contracts",
=======
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const formSchema = z.object({
  projectName: z.string().min(1, &quot;Project name is required&quot;),
  scopeSummary: z.string().min(10, &quot;Scope summary should be at least 10 characters&quot;),
  startDate: z.date({
    required_error: &quot;Start date is required&quot;}),
  endDate: z.date().optional(),
<<<<<<< HEAD
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).default([])}),
=======
  paymentTerms: z.enum([&quot;hourly&quot;, &quot;fixed&quot;, &quot;milestone&quot;]),
  paymentAmount: z.string().min(1, &quot;Payment amount is required&quot;),
  additionalClauses: z.array(z.string()).default([])});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export type ContractFormValues = z.infer<typeof formSchema>,

interface ContractFormProps {
  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void,
  deployOptions?: DeploymentOptions,
  onDeployOptionsChange?: (options: DeploymentOptions) => void
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
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
  const { toast } = useToast(),

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectName: "&quot;,
      scopeSummary: "&quot;,
      startDate: new Date(),
<<<<<<< HEAD
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
      additionalClauses: ["nda", "ip"]}}),
=======
      paymentTerms: talent.hourly_rate ? &quot;hourly&quot; : &quot;fixed&quot;,
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "&quot;,
      additionalClauses: [&quot;nda&quot;, &quot;ip&quot;]}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })
=======
import { useState, useEffect } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Loader2 } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Form } from "@/components/ui/form",;
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { useToast } from "@/hooks/use-toast",;
import { TalentProfile } from "@/types/talent",;
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;
import { generateContract } from "../utils/contractUtils",;
import { ProjectDetailsFields } from "./ProjectDetailsFields",;
import { PaymentTermsFields } from "./PaymentTermsFields",;
import { AdditionalClausesFields } from "./AdditionalClausesFields",;
import { DeploymentOptions } from "@/types/smart-contracts",;
const formSchema = z.object({;
  projectName: z.string().min(1, "Project name is required"),;
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),;
  startDate: z.date({;
    required_error: "Start date is required"}),;
  endDate: z.date().optional(),;
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),;
  paymentAmount: z.string().min(1, "Payment amount is required"),;
  additionalClauses: z.array(z.string()).default([])}),;
export type ContractFormValues = z.infer<typeof formSchema>,;
interface ContractFormProps {;
  talent: TalentProfile,;
  clientName: string,;
  initialValues?: ContractFormValues,;
  onFormValuesChange?: (values: ContractFormValues) => void,;
  onContractGenerated: (contractContent: string) => void,;
  deployOptions?: DeploymentOptions,;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
}
;
export function ContractForm({;
  talent,;
  clientName,;
  initialValues,;
  onFormValuesChange,;
  onContractGenerated,;
  deployOptions,;
  onDeployOptionsChange;
}: ContractFormProps) {;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),;
  const { toast } = useToast(),;
  const form = useForm<ContractFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: initialValues || {;
      projectName: "",;
      scopeSummary: "",;
      startDate: new Date(),;
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",;
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",;
      additionalClauses: ["nda", "ip"]}}),;
  // Update form when initialValues change;
  useEffect(() => {;
    if (initialValues) {;
      Object.keys(initialValues).forEach((key) => {;
        const typedKey = key as keyof ContractFormValues,;
        form.setValue(typedKey, initialValues[typedKey]);
      });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }, [initialValues, form]),;
  // Track form values for template saving;
  useEffect(() => {;
    if (onFormValuesChange) {;
      const subscription = form.watch((value) => {;
        onFormValuesChange(value as ContractFormValues);
      }),;
      return () => subscription.unsubscribe();
    }
<<<<<<< HEAD
  }, [form, onFormValuesChange]),
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones),
    
    // If payment terms isn't already set to milestone, update it
<<<<<<< HEAD
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")
    }
    
    toast({
      title: "Milestones Generated",
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})
  },
=======
    if (form.getValues(&quot;paymentTerms&quot;) !== &quot;milestone&quot;) {
      form.setValue(&quot;paymentTerms&quot;, &quot;milestone&quot;);
    }
    
    toast({
      title: &quot;Milestones Generated&quot;,
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true),
    try {
      const contract = await generateContract(
        values, 
        talent, 
        clientName, 
        generatedMilestones
      ),
      
      onContractGenerated(contract)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating contract:", error),
      toast({
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"})
=======
      console.error(&quot;Error generating contract:&quot;, error);
      toast({
        title: &quot;Contract Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Something went wrong. Please try again.&quot;,
        variant: &quot;destructive"});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsGenerating(false)
=======
  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
      form.setValue("paymentTerms", "milestone");
    }
;
    toast({;
      title: "Milestones Generated",;
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  },;
  const onSubmit = async (values: ContractFormValues) => {;
    setIsGenerating(true),;
    try {;
      const contract = await generateContract(;
        values,;
        talent,;
        clientName,;
        generatedMilestones;
      ),;
      onContractGenerated(contract);
    } catch (error) {;
      console.error("Error generating contract:", error),;
      toast({;
        title: "Contract Generation Failed",;
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.";
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  return (;
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
          Create a professional contract for your project with {talent.full_name}
<<<<<<< HEAD
        </DialogDescription>
      </DialogHeader>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6&quot;>
          <ProjectDetailsFields 
            form={form} 
          />
          
          <PaymentTermsFields 
=======
        </DialogDescription>;
      </DialogHeader>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <ProjectDetailsFields;
            form={form} ;
          />;
          <PaymentTermsFields;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />;
          <AdditionalClausesFields;
            form={form}
<<<<<<< HEAD
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
=======
          />;
          <Button;
            type="submit";
            className="w-full bg-zion-purple hover:bg-zion-purple-dark";
            disabled={isGenerating}
          >;
            {isGenerating ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Generating Contract...;
              </>;
            ) : (;
              "Generate Contract";
            )}
          </Button>;
        </form>;
      </Form>;
      <DialogFooter className="gap-2 flex-wrap mt-4">;
        <Button;
          variant="outline";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          onClick={() => form.reset()}
          disabled={isGenerating}
        >;
          Reset Form;
        </Button>;
      </DialogFooter>;
    </>;
  );
}
;