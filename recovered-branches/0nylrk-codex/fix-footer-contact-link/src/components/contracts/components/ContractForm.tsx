


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required");
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z.date({
<<<<<<< HEAD

  onDeployOptionsChange?: (options: DeploymentOptions) => void
}
=======
<<<<<<< HEAD

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

    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).default([])}),


export type ContractFormValues = z && z.infer<typeof formSchema>;



export function ContractForm(): any ({;

=======


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

const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),
  startDate: z.date({
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
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).default([])}),

export type ContractFormValues = z && z.infer<typeof formSchema>;
interface ContractFormProps {;
  talent: TalentProfile,;
  clientName: string,;
  initialValues?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void,;
  onContractGenerated: (contractContent: string) => void,;
  deployOptions?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
}
export function ContractForm(): any ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
export type ContractFormValues = z.infer<typeof formSchema>,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

interface ContractFormProps {
  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void,
  deployOptions?: DeploymentOptions,
<<<<<<< HEAD

  onDeployOptionsChange?: (options: DeploymentOptions) => void
}



  onDeployOptionsChange
}: ContractFormProps) {

=======
  onDeployOptionsChange?: (options: DeploymentOptions) => void
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function ContractForm({;
  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;
export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
  deployOptions,
  onDeployOptionsChange
}: ContractFormProps) {
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })

<<<<<<< HEAD
=======
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const form = useForm<ContractFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: initialValues || {;
      projectName: "",;
      scopeSummary: "",;
      startDate: new Date(),;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  


<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true)
    try {
      const contract = await generateContract(
        values
        talent
        clientName
        generatedMilestones
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      ),
      


      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error);
<<<<<<< HEAD
=======
=======
      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      );
      ),
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
        title: "Contract Generation Failed"
        description: error instanceof Error ? error.message : "Something went wrong. Please try again."
        variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } finally {
      setIsGenerating(false)

  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
      form.setValue("paymentTerms", "milestone");
        const typedKey = key as keyof ContractFormValues;
        form && form.setValue(typedKey, initialValues[typedKey]);
      });
    }
    }
  }
<<<<<<< HEAD

=======
  return (
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
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
  const onSubmit = async (values: ContractFormValues) => {;
    setIsGenerating(true),;
    try {;
      const contract = await generateContract(;
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
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };
  return (
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields
            form={form}
          />
<<<<<<< HEAD
    } finally {

=======
<<<<<<< HEAD
      paymentTerms: talent && talent.hourly_rate ? "hourly" : "fixed",;
      paymentAmount: talent && talent.hourly_rate ? `$${talent && talent.hourly_rate}/hour` : "",;
      additionalClauses: ["nda", "ip"]}});
  // Update form when initialValues change;
  useEffect(() => {;
    if (initialValues) {;
      Object && Object.keys(initialValues).forEach((key) => {;
        const typedKey = key as keyof ContractFormValues;
        form && form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setIsGenerating(false)

  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
      form.setValue("paymentTerms", "milestone");
    }

<<<<<<< HEAD
=======
      setIsGenerating (false);
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <>;
      <DialogHeader>;
        <DialogTitle className="text - xl">Contract Builder</DialogTitle>;
        <DialogDescription>;



          Create a professional contract for your project with {talent.full_name}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const onSubmit = async (values: ContractFormValues) => {;
    setIsGenerating(true),;
    try {;
      const contract = await generateContract(;
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
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
<<<<<<< HEAD
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields
            form={form}
          />
=======
          Create a professional contract for your project with {talent && talent.full_name}
        </DialogDescription>;
      </DialogHeader>;

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
          <ProjectDetailsFields
            form={form} 
          />;
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <PaymentTermsFields
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
<<<<<<< HEAD

          />;

          <AdditionalClausesFields
            form={form}
          />;

          <Button
            type="submit" 

=======
=======
          <PaymentTermsFields

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
;
const formSchema = z.object({;
  projectName:z.string().min(1, "Project name is required"),;
  scopeSummary:z.string().min(10, "Scope summary should be at least 10 characters"),;
  startDate:z.date({;
    required_error:"Start date is required"}),;
  endDate:z.date().optional(),;
  paymentTerms:z.enum(["hourly", "fixed", "milestone"]),;
  paymentAmount:z.string().min(1, "Payment amount is required"),;
  additionalClauses:z.array(z.string()).default([])}),;
;
export type ContractFormValues = z.infer<typeof formSchema>,;
;
interface ContractFormProps {;
  talent:TalentProfile,;
  clientName:string,;
  initialValues?:ContractFormValues,;
  onFormValuesChange?:(values:ContractFormValues) => void,;
  onContractGenerated:(contractContent:string) => void,;
  deployOptions?:DeploymentOptions,;
  onDeployOptionsChange?:(options:DeploymentOptions) => void;
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
} ContractFormProps) {;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),;
  const { toast } = useToast(),;
;
  const form = useForm<ContractFormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:initialValues || {;
      projectName:"",;
      scopeSummary:"",;
      startDate:new Date(),;
      paymentTerms:talent.hourly_rate ? "hourly" :"fixed",;
      paymentAmount:talent.hourly_rate ? `$${talent.hourly_rate}/hour` :"",;
      additionalClauses:["nda", "ip"]}}),;
  ;
  // Update form when initialValues change;
  useEffect(() => {;
    if (initialValues) {;
      Object.keys(initialValues).forEach((key) => {;
        const typedKey = key as keyof ContractFormValues,;
        form.setValue(typedKey, initialValues[typedKey]),;
      }),;
    }
  }, [initialValues, form]),;
  ;
  // Track form values for template saving;
  useEffect(() => {;
    if (onFormValuesChange) {;
      const subscription = form.watch((value) => {;
        onFormValuesChange(value as ContractFormValues),;
      }),;
      ;
      return () => subscription.unsubscribe(),;
    }
  }, [form, onFormValuesChange]),;
  ;
  const handleMilestonesGenerated = (milestones:GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;
    ;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
      form.setValue("paymentTerms", "milestone"),;
    }
    ;
    toast({;
      title:"Milestones Generated",;
      description:`${milestones.length} milestones have been generated and will be included in the contract.`}),;
  },;
  ;
  const onSubmit = async (values:ContractFormValues) => {;
    setIsGenerating(true),;
    try {;
      const contract = await generateContract(;
        values, ;
        talent, ;
        clientName, ;
        generatedMilestones;
      ),;
      ;
      onContractGenerated(contract),;
    } catch (error) {;
      console.error("Error generating contract:", error),;
      toast({;
        title:"Contract Generation Failed",;
        description:error instanceof Error ? error.message :"Something went wrong. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsGenerating(false),;
    }
  },;
  ;
  return (;
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>;
      </DialogHeader>;
    ;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <ProjectDetailsFields ;
            form={form} ;
          />;
          ;
          <PaymentTermsFields ;
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          

<<<<<<< HEAD
=======
          <PaymentTermsFields
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
<<<<<<< HEAD

=======
          
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <PaymentTermsFields 
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          />
          <AdditionalClausesFields 
            form={form}
          />
          <Button 
            type="submit" 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

          </Button>;
        </form>;
      </Form>;

      <DialogFooter className="gap-2 flex-wrap mt-4">;
        <Button
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />;
          <AdditionalClausesFields;
            form={form}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          />
          <AdditionalClausesFields
            form={form}
          />
          <Button
            type="submit"
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          />;
          <AdditionalClausesFields;
            form={form}
          />
          <AdditionalClausesFields 
            form={form}
          />
          <Button 
            type="submit" 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}>;
          ;
          <AdditionalClausesFields ;
            form={form}
          />;
          ;
          <Button ;
            type="submit" ;
            className="w-full bg-zion-purple hover:bg-zion-purple-dark";
            disabled={isGenerating}
          >;
            {isGenerating ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Generating Contract...;
              </>;
            ) :(;
              "Generate Contract";
            )}
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
=======

          </Button>;
        </form>;
      </Form>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      ;
      <DialogFooter className="gap-2 flex-wrap mt-4">;
        <Button ;
          variant="outline" ;
          onClick={() => form.reset()}
          disabled={isGenerating}
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
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        >;
          Reset Form;
        </Button>;
      </DialogFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </>;
  ),; const formSchema = z.object ({
  projectName: z.string () .min (1, "Project name is required");
scopeSummary: z.string () .min (10, "Scope summary should be at least 10 characters");
startDate: z.date ({
  required error: "Start date is required" 
});
export type ContractFormValues = z.infer<typeof formSchema>;
//Update form when initialValues change useEffect ( () => {
  if (initialValues) {
  Object.keys (initialValues) .forEach ( (key) => {
  const typedKey = key as keyof ContractFormValues;
form.setValue (typedKey, initialValues[typedKey]) 
}) 
}
;

}, [initialValues, form]);
//Track form values for template saving return () => subscription.unsubscribe () 
}
}, [form, onFormValuesChange]);
};
}finally {
  setIsGenerating (false) 
}
};
talent.full name 
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {
  form 
}/> <PaymentTermsFields form= {
  form 
}talent= {
  talent 
}handleMilestonesGenerated= {
  handleMilestonesGenerated 
}/> <AdditionalClausesFields form= {
  form 
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {
  isGenerating 
}> {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") 
}</Button> </form> </Form> <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form </Button> </DialogFooter> </>) 
}
    </>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
