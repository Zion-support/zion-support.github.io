
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Loader2 } from 'lucide-react'
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
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useState, useEffect } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Loader2 } from 'lucide-react'
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
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const formSchema = z.object({
  projectName: z.string().min(1, &quot;Project name is required&quot;),
  scopeSummary: z.string().min(10, &quot;Scope summary should be at least 10 characters&quot;),
  startDate: z.date({
    required_error: &quot;Start date is required&quot;}),
=======


const _formSchema = z.object({_projectName: z.string().min(1, _"Project name is required"), _scopeSummary: z.string().min(10, _"Scope summary should be at least 10 characters"), _startDate: z.date({
    required_error: "Start date is required"}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  endDate: z.date().optional(),
<<<<<<< HEAD
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).optional()}),
=======
  paymentTerms: z.enum([&quot;hourly&quot;, &quot;fixed&quot;, &quot;milestone&quot;]),
  paymentAmount: z.string().min(1, &quot;Payment amount is required&quot;),
  additionalClauses: z.array(z.string()).optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export type ContractFormValues = z.infer<typeof formSchema>,

<<<<<<< HEAD
interface ContractFormProps {
  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void
}

export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated}: ContractFormProps) {
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
interface ContractFormProps {_talent: TalentProfile;
  clientName: string;
  initialValues?: ContractFormValues;
  onFormValuesChange?: (_values: ContractFormValues) => void;
  onContractGenerated: (_contractContent: string) => void;}

export function ContractForm(_{_talent, _clientName, _initialValues, _onFormValuesChange, _onContractGenerated}: ContractFormProps) {_const [isGenerating, _setIsGenerating] = useState(false);
  const [generatedMilestones, _setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast} = useToast();

  const _form = useForm<ContractFormValues>({_resolver: zodResolver(formSchema), _defaultValues: initialValues || {
      projectName: "", _scopeSummary: "", _startDate: new Date(), _paymentTerms: talent.hourly_rate ? "hourly" : "fixed", _paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
      additionalClauses: ["nda", "ip"]}});
  
  // Update form when initialValues change
  useEffect__(() => {_if (initialValues) {
      Object.keys(initialValues).forEach(_(key) => {
        const _typedKey = key as keyof ContractFormValues;
        form.setValue(typedKey, _initialValues[typedKey]);});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [initialValues, form]),
  
  // Track form values for template saving
<<<<<<< HEAD
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = form.watch((value) => {
        onFormValuesChange(value as ContractFormValues)
      }),
=======
  useEffect__(() => {_if (onFormValuesChange) {
      const _subscription = form.watch(_(value) => {
        onFormValuesChange(value as ContractFormValues);});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return () => subscription.unsubscribe()
    }
    return undefined
  }, [form, onFormValuesChange]),
  
<<<<<<< HEAD
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
=======
  const _handleMilestonesGenerated = (_milestones: GeneratedMilestone[]) => {_setGeneratedMilestones(milestones);
    
    // If payment terms isn't already set to milestone, _update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", _"milestone");}
    
    toast({_title: "Milestones Generated", _description: `${milestones.length} milestones have been generated and will be included in the contract.`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
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
      logErrorToProduction('Error generating contract:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Contract Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Something went wrong. Please try again.&quot;,
        variant: &quot;destructive"});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsGenerating(false)
    }
  },
=======
  const _onSubmit = async (_values: ContractFormValues) => {_setIsGenerating(true);
    try {
      const _contract = await generateContract(
        values, _talent, _clientName, _generatedMilestones
      );
      
      onContractGenerated(contract);} catch (error) {_logErrorToProduction('Error generating contract:', _{ data: error});
      toast({_title: "Contract Generation Failed", _description: error instanceof Error ? error.message : "Something went wrong. Please try again.", _variant: "destructive"});
    } finally {_setIsGenerating(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {_talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6&quot;>
=======
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <ProjectDetailsFields 
            form={_form} 
          />
          
          <PaymentTermsFields 
            form={_form}
            handleMilestonesGenerated={_handleMilestonesGenerated}
          />
          
          <AdditionalClausesFields 
            form={_form}
          />
          
          <Button 
            type=&quot;submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={_isGenerating}
          >
            {_isGenerating ? (
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
<<<<<<< HEAD
          variant=&quot;outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
=======
          variant="outline" 
          onClick={_() => form.reset()}
          disabled={_isGenerating}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  )
}
