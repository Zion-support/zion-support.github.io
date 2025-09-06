
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useToast} from "@/hooks/use-toast";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {generateContract} from "../utils/contractUtils";
import {ProjectDetailsFields} from "./ProjectDetailsFields";
import {PaymentTermsFields} from "./PaymentTermsFields";
import {AdditionalClausesFields} from "./AdditionalClausesFields";
import {DeploymentOptions} from "@/types/smart-contracts";
<<<<<<< HEAD
=======

>>>>>>> main
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),
  startDate: z.date({
<<<<<<< HEAD
    required_error: "Start date is required"})
  endDate: z.date().optional()
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z.string().min(1, "Payment amount is required");
  additionalClauses: z.array(z.string()).default([])})
export type ContractFormValues = z.infer<typeof formSchema>;
interface ContractFormProps {
  talent: TalentProfile
  clientName: string
  initialValues?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void
  onContractGenerated: (contractContent: string) => void
  deployOptions?: DeploymentOptions;
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required");
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z.date({

const formSchema = z && z.object({;
  projectName: z && z.string().min(1, "Project name is required");
  scopeSummary: z && z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z && z.date({;
    required_error: "Start date is required"}),;
  endDate: z && z.date().optional(),;
  paymentTerms: z && z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z && z.string().min(1, "Payment amount is required");
  additionalClauses: z && z.array(z && z.string()).default([])}),;
=======

>>>>>>> main
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).default([])}),

<<<<<<< HEAD
export type ContractFormValues = z.infer<typeof formSchema>,
=======

export type ContractFormValues = z && z.infer<typeof formSchema>;



export function ContractForm(): any ({;

  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;
  onDeployOptionsChange;
}: ContractFormProps) {;
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast } = useToast();
>>>>>>> main

interface ContractFormProps {
  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void,
  deployOptions?: DeploymentOptions,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onDeployOptionsChange?: (options: DeploymentOptions) => void
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ContractForm({;
  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
  deployOptions,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onDeployOptionsChange
}: ContractFormProps) {
<<<<<<< HEAD
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast } = useToast();
  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: initialValues |{
      projectName: ""
      scopeSummary: ""
      startDate: new Date()
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed"
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : ""
      additionalClauses: ["nda", "ip"]}});
=======
=======

  onDeployOptionsChange?: (options: DeploymentOptions) => void
}



  onDeployOptionsChange
}: ContractFormProps) {

>>>>>>> main
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
  const { toast } = useToast(),

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectName: "",
      scopeSummary: "",
      startDate: new Date(),
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
      additionalClauses: ["nda", "ip"]}}),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
<<<<<<< HEAD
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })
<<<<<<< HEAD
    }
  }, [initialValues, form]);
  // Track form values for template saving
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = form.watch((value) => {
        onFormValuesChange(value as ContractFormValues)
      });
      return () => subscription.unsubscribe()
    }
  }, [form, onFormValuesChange]);
=======
=======


=======
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })

>>>>>>> main
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
<<<<<<< HEAD
=======

>>>>>>> main
  const form = useForm<ContractFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: initialValues || {;
      projectName: "",;
      scopeSummary: "",;
      startDate: new Date(),;
<<<<<<< HEAD
=======

>>>>>>> main
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
  }, [form, onFormValuesChange]),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones)
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")
    }
    toast({
      title: "Milestones Generated"
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


  },
  


>>>>>>> main
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true)
    try {
      const contract = await generateContract(
        values
        talent
        clientName
        generatedMilestones
<<<<<<< HEAD
<<<<<<< HEAD
      );
=======
      ),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error),
=======


      ),
      


      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error);
>>>>>>> main
      toast({
        title: "Contract Generation Failed"
        description: error instanceof Error ? error.message : "Something went wrong. Please try again."
        variant: "destructive"})
<<<<<<< HEAD
    } finally {
      setIsGenerating(false)
<<<<<<< HEAD
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
=======
=======
=======
import { useState, useEffect } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { Loader2 } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Form } from '@/components / ui / form';
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components / ui / dialog';
import { use_toast } from '@/hooks / use - toast';
import { TalentProfile } from '@/types / talent';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
import { generate_contract } from '../utils / contract_utils';
import { ProjectDetailsFields } from './ProjectDetailsFields';
import { PaymentTermsFields } from './PaymentTermsFields';
import { AdditionalClausesFields } from './AdditionalClausesFields';
import { DeploymentOptions } from '@/types / smart - contracts';
const form_schema = z.object ({
  project_name: z.string ().min (1, "Project name is required");
  scope_summary: z.string ().min (10, "Scope summary should be at least 10 characters");
  start_date: z.date ({
    required_error: "Start date is required"}),
  end_date: z.date ().optional (),
  payment_terms: z.enum (["hourly", "fixed", "milestone"]);
  payment_amount: z.string ().min (1, "Payment amount is required");
  additional_clauses: z.array (z.string ()).default ([])}),
export type ContractFormValues = z.infer < typeof form_schema>;
;
interface ContractFormProps {
  talent: TalentProfile,
  client_name: string,
  initial_values?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contract_content: string) => void,
  deploy_options?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
}
export /**
 * ContractForm - Function description
 */
function ContractForm() {
  const [is_generating, setIsGenerating] = useState (false);
  const [generated_milestones, setGeneratedMilestones] = useState < GeneratedMilestone[]>([]);
  const { toast } = use_toast ();
;
  const form = use_form < ContractFormValues>({
    resolver: zod_resolver (form_schema),
    default_values: initial_values || {
      project_name: "",
      scope_summary: "",
      start_date: new Date (),
      payment_terms: talent.hourly_rate ? "hourly" : "fixed",
      payment_amount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
      additional_clauses: ["nda", "ip"]}});
;
  // Update form when initial_values change;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      Object.keys (initial_values).for_each ((key) => {
        const typed_key = key as keyof ContractFormValues;
        form.set_value (typed_key, initial_values[typed_key]);
      });
    }
  }, [initial_values, form]);
;
  // Track form values for template saving;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const subscription = form.watch ((value) => {
        onFormValuesChange (value as ContractFormValues);
      });
;
      return () => subscription.unsubscribe ();
    }
  }, [form, onFormValuesChange]);
;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) =>: any {
    setGeneratedMilestones (milestones),
    // If payment terms isn't already set to milestone, update it;
    // Check condition
if (!== "milestone") {) {
  $2
}
      form.set_value ("payment_terms", "milestone");
    }
    toast ({
      title: "Milestones Generated",
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  }
;
  const on_submit = async (values: ContractFormValues) => {
    setIsGenerating (true),
    try {
      const contract = await generate_contract (
        values,
        talent,
        client_name,
        generated_milestones);
;
      onContractGenerated (contract);
    } catch (error) {
      console.error ("Error generating contract:", error);
      toast ({
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {

=======
      setIsGenerating(false)

>>>>>>> main
  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
      form.setValue("paymentTerms", "milestone");
    }
<<<<<<< HEAD
;
    toast({;
      title: "Milestones Generated",;
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  },;
=======

;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <>;
      <DialogHeader>;
        <DialogTitle className="text - xl">Contract Builder</DialogTitle>;
        <DialogDescription>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          Create a professional contract for your project with {talent.full_name}


  // Track form values for template saving;
  useEffect(() => {;
    if (onFormValuesChange) {;
      const subscription = form && form.watch((value) => {;
        onFormValuesChange(value as ContractFormValues);
      });

      return () => subscription && subscription.unsubscribe();
    }
  }, [form, onFormValuesChange]);

  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;

    // If payment terms isn't already set to milestone, update it;
    if (form && form.getValues("paymentTerms") !== "milestone") {;
      form && form.setValue("paymentTerms", "milestone");
    }

    toast({;
      title: "Milestones Generated",;
      description: `${milestones && milestones.length} milestones have been generated and will be included in the contract.`});
  };

>>>>>>> main
  const onSubmit = async (values: ContractFormValues) => {;
    setIsGenerating(true),;
    try {;
      const contract = await generateContract(;
<<<<<<< HEAD
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
=======
        values, ;
        talent, ;
        clientName, ;
        generatedMilestones;
      );

      onContractGenerated(contract);
    } catch (error) {;
      console && console.error("Error generating contract:", error);
      toast({;
        title: "Contract Generation Failed",;
        description: error instanceof Error ? error && error.message : "Something went wrong. Please try again.",;
>>>>>>> main
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };
<<<<<<< HEAD
  return (;
=======

  return (
>>>>>>> main
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields
            form={form}
          />
<<<<<<< HEAD
<<<<<<< HEAD
=======
          Create a professional contract for your project with {talent && talent.full_name}
        </DialogDescription>;
      </DialogHeader>;

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
          <ProjectDetailsFields
            form={form} 
          />;


>>>>>>> main
          <PaymentTermsFields
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
<<<<<<< HEAD
=======
          
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

          />;

          <AdditionalClausesFields
            form={form}
          />;

          <Button
            type="submit" 

=======

          
=======

>>>>>>> main
          <PaymentTermsFields 
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
<<<<<<< HEAD
<<<<<<< HEAD
          />;
          <AdditionalClausesFields;
            form={form}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          />
          <AdditionalClausesFields
            form={form}
          />
          <Button
            type="submit"
=======
<<<<<<< HEAD
=======
          />;
          <AdditionalClausesFields;
            form={form}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          />
          <AdditionalClausesFields 
            form={form}
          />
          <Button 
            type="submit" 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Contract...
              </>
            ) : (
              "Generate Contract"
            )}
          </Button>
        </form>
      </Form>
      <DialogFooter className="gap-2 flex-wrap mt-4">
<<<<<<< HEAD
        <Button
          variant="outline"
          onClick={() => form.reset()}
          disabled={isGenerating}
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  )
}
=======
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}>;
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
        <Button
=======

        <Button 

          variant="outline" 
          onClick={() => form && form.reset()}
          disabled={isGenerating}
=======
        </DialogDescription>;
      </DialogHeader>;
      <Form {...form}>;
        <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
          <ProjectDetailsFields;
            form={form}
          />;
          <PaymentTermsFields;
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />;
          <AdditionalClausesFields;
            form={form}
          />;
          <Button;
            type="submit";
            className="w - full bg - zion - purple hover:bg - zion - purple - dark";
            disabled={is_generating}
          >;
            {is_generating ? (
              <>;
                <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                Generating Contract...;
              </>) : (
              "Generate Contract")}
          </Button>;
        </form>;
      </Form>;
      <DialogFooter className="gap - 2 flex - wrap mt - 4">;
        <Button;
          variant="outline";
          on_click={() => form.reset ()}
          disabled={is_generating}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
        >;
          Reset Form;
        </Button>;
      </DialogFooter>;
<<<<<<< HEAD
    </>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    </>);
}

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
