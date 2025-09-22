

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useState, useEffect} from "react";"
import {useForm} from "react-hook-form";"
import {zodResolver} from "@hookform/resolvers/zod";"
import {z} from "zod";"
import {Loader2} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {Form} from "@/components/ui/form";"
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";"
import {useToast} from "@/hooks/use-toast";"
import {TalentProfile} from "@/types/talent";"
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";"
import {generateContract} from "../utils/contractUtils";"
import {ProjectDetailsFields} from "./ProjectDetailsFields";"
import {PaymentTermsFields} from "./PaymentTermsFields";"
import {AdditionalClausesFields} from "./AdditionalClausesFields";"
import {DeploymentOptions} from "@/types/smart-contracts";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import { useState, useEffect } from "react","
import { useForm } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod","
import { z } from "zod","
import { Loader2 } from "lucide-react","
import { Button } from "@/components/ui/button","
import { Form } from "@/components/ui/form","
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog","
import { useToast } from "@/hooks/use-toast","
import { TalentProfile } from "@/types/talent","
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator","
import { generateContract } from "../utils/contractUtils","
import { ProjectDetailsFields } from "./ProjectDetailsFields","
import { PaymentTermsFields } from "./PaymentTermsFields","
import { AdditionalClausesFields } from "./AdditionalClausesFields","
import { DeploymentOptions } from "@/types/smart-contracts",

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required");
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  additionalClauses: z && z.array(z && z.string()).default([])}),;  talent;
=======
const formSchema = z.object({";
  projectName: z.string().min(1, "Project name is required");"
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z.date({}
  talent;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  additionalClauses: z && z.array(z && z.string()).default([])}),;
  talent;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export type ContractFormValues = z.infer<typeof formSchema>,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


interface ContractFormProps {}
=======

interface ContractFormProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void,
  deployOptions?: DeploymentOptions,

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onDeployOptionsChange?: (options: DeploymentOptions) => void
}



  onDeployOptionsChange
}: ContractFormProps) {

<<<<<<< HEAD
=======
  onDeployOptionsChange?: (options: DeploymentOptions) => void
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function ContractForm({;
  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;
<<<<<<< HEAD
export function ContractForm({}
=======
export function ContractForm({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
<<<<<<< HEAD
<<<<<<< HEAD
  deployOptions,
  onDeployOptionsChange
}: ContractFormProps) {
<<<<<<< HEAD

=======
=======
  deployOptions,;
  onDeployOptionsChange;
}: ContractFormProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast } = useToast();
  const form = useForm<ContractFormValues>({}
    resolver: zodResolver(formSchema)
    defaultValues: initialValues |{"
      projectName: """
      scopeSummary: ""
      startDate: new Date()"
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed""
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : """
      additionalClauses: ["nda", "ip"]}});

  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  deployOptions,
  onDeployOptionsChange
}: ContractFormProps) {
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
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { toast } = useToast(),

  const form = useForm<ContractFormValues>({}
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {"
      projectName: "","
      scopeSummary: "",
      startDate: new Date(),"
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed","`
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "","
      additionalClauses: ["nda", "ip"]}}),
  

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

  // Update form when initialValues change;
  useEffect(() => {}
    if (initialValues) {}
      Object.keys(initialValues).forEach((key) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })

"
import { useState, useEffect } from "react",;"
import { useForm } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { z } from "zod",;"
import { Loader2 } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { Form } from "@/components/ui/form",;"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",;"
import { useToast } from "@/hooks/use-toast",;"
import { TalentProfile } from "@/types/talent",;"
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;"
import { generateContract } from "../utils/contractUtils",;"
import { ProjectDetailsFields } from "./ProjectDetailsFields",;"
import { PaymentTermsFields } from "./PaymentTermsFields",;"
import { AdditionalClausesFields } from "./AdditionalClausesFields",;"
import { DeploymentOptions } from "@/types/smart-contracts",;
const formSchema = z.object({;"
  projectName: z.string().min(1, "Project name is required"),;"
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),;
  startDate: z.date({;"
    required_error: "Start date is required"}),;
  endDate: z.date().optional(),;"
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),;"
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
export function ContractForm() { return null; }
  const { toast } = useToast(),;

  const form = useForm<ContractFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: initialValues || {;"
      projectName: "",;"
      scopeSummary: "",;
      startDate: new Date(),;
"
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",;"`
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",;"
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
=======
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setGeneratedMilestones(milestones)
    // If payment terms isn't already set to milestone, update it"
    if (form.getValues("paymentTerms") !== "milestone") {"
      form.setValue("paymentTerms", "milestone")
    }
    toast({"
      title: "Milestones Generated"`
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  


<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

  

  
  

  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones)
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")
    }
    toast({
      title: "Milestones Generated"
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})


  },
  


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const onSubmit = async (values: ContractFormValues) => {
=======



  const onSubmit = async (values: ContractFormValues) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsGenerating(true)
    try {}
      const contract = await generateContract(
<<<<<<< HEAD
        values
        talent
        clientName
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        generatedMilestones
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
        values;
        talent;
        clientName;
        generatedMilestones;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        generatedMilestones


      ),
      


      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error);
      );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ),
      


      onContractGenerated(contract)
    } catch (error) {"
      console.error("Error generating contract:", error);

      );
=======
        generatedMilestones      );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        generatedMilestones      );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ),
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      onContractGenerated(contract)
<<<<<<< HEAD
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } catch (error) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.error("Error generating contract:", error),

      toast({"
        title: "Contract Generation Failed""
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.""
        variant: "destructive"})

    } finally {}
=======
      console.error("Error generating contract:", error),
      toast({
        title: "Contract Generation Failed"
        description: error instanceof Error ? error.message : "Something went wrong. Please try again."
        variant: "destructive"})
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsGenerating(false)

  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
<<<<<<< HEAD
    setGeneratedMilestones(milestones),;'
    // If payment terms isn't already set to milestone, update it;"
    if (form.getValues("paymentTerms") !== "milestone") {;"
=======
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      form.setValue("paymentTerms", "milestone");
        const typedKey = key as keyof ContractFormValues;
        form && form.setValue(typedKey, initialValues[typedKey]);
      });
    }
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
  return (
    <>;
      <DialogHeader>;"
=======
  return (
    <>;
      <DialogHeader>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    setGeneratedMilestones(milestones),;'
    // If payment terms isn't already set to milestone, update it;"
    if (form && form.getValues("paymentTerms") !== "milestone") {;"
      form && form.setValue("paymentTerms", "milestone");
    }
    toast({;"
      title: "Milestones Generated",;`
=======
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form && form.getValues("paymentTerms") !== "milestone") {;
      form && form.setValue("paymentTerms", "milestone");
    }
    toast({;
      title: "Milestones Generated",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    } catch (error) {;"
      console && console.error("Error generating contract:", error);
      toast({;"
        title: "Contract Generation Failed",;"
        description: error instanceof Error ? error && error.message : "Something went wrong. Please try again.",;"
=======
    } catch (error) {;
      console && console.error("Error generating contract:", error);
      toast({;
        title: "Contract Generation Failed",;
        description: error instanceof Error ? error && error.message : "Something went wrong. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };
  return (
    <>;
<<<<<<< HEAD
      <DialogHeader>;"
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>"
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields;
            form={form}
          />
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {

=======
<<<<<<< HEAD
=======
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields
            form={form}
          />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      setIsGenerating(false)

  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
<<<<<<< HEAD
    setGeneratedMilestones(milestones),;'
    // If payment terms isn't already set to milestone, update it;"
    if (form.getValues("paymentTerms") !== "milestone") {;"
      form.setValue("paymentTerms", "milestone");
    }


;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>;
      <DialogHeader>;"
=======
    setGeneratedMilestones(milestones),;
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;
      form.setValue("paymentTerms", "milestone");
    }

;
  return (
    <>;
      <DialogHeader>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <DialogTitle className="text - xl">Contract Builder</DialogTitle>;
        <DialogDescription>;



          Create a professional contract for your project with {talent.full_name}

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
'
    // If payment terms isn't already set to milestone, update it;"
    if (form && form.getValues("paymentTerms") !== "milestone") {;"
      form && form.setValue("paymentTerms", "milestone");
    }

    toast({;"
      title: "Milestones Generated",;`
=======

    // If payment terms isn't already set to milestone, update it;
    if (form && form.getValues("paymentTerms") !== "milestone") {;
      form && form.setValue("paymentTerms", "milestone");
    }

    toast({;
      title: "Milestones Generated",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    } catch (error) {;"
      console && console.error("Error generating contract:", error);
      toast({;"
        title: "Contract Generation Failed",;"
        description: error instanceof Error ? error && error.message : "Something went wrong. Please try again.",;"
=======
    } catch (error) {;
      console && console.error("Error generating contract:", error);
      toast({;
        title: "Contract Generation Failed",;
        description: error instanceof Error ? error && error.message : "Something went wrong. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };

  return (
    <>;
<<<<<<< HEAD
      <DialogHeader>;"
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
=======
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          Create a professional contract for your project with {talent && talent.full_name}
        </DialogDescription>;
      </DialogHeader>;

<<<<<<< HEAD
      <Form {...form}>;"
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
          <ProjectDetailsFields;
            form={form} 
          />;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <PaymentTermsFields
=======
          <PaymentTermsFields;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            form={form}
=======
      console.error("Error generating contract:", error),            form={form}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          




          <PaymentTermsFields;
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console.error("Error generating contract:", error),            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
          <ProjectDetailsFields
            form={form} 
          />;


          <PaymentTermsFields
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}

          />;

          <AdditionalClausesFields
            form={form}
          />;

          <Button
            type="submit" 


          

          <PaymentTermsFields 
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}


          />
          <AdditionalClausesFields 
            form={form}
          />
          <Button 
            type="submit" 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}>;
            {isGenerating ? (;
              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Generating Contract...;
              </>;
            ) : (;"
              "Generate Contract";
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          </Button>;
        </form>;
      </Form>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        <Button 
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        <Button;
"
          variant="outline" 
          onClick={() => form && form.reset()}
          disabled={isGenerating}

        </DialogDescription>;
      </DialogHeader>;
      <Form {...form}>;"
=======

      <DialogFooter className="gap-2 flex-wrap mt-4">;
        <Button
/>;
          <AdditionalClausesFields;
            form={form}
          />
          <AdditionalClausesFields
            form={form}
          />
          <Button
            type="submit"
          />;
          <AdditionalClausesFields;
            form={form}
          />
          <AdditionalClausesFields 
            form={form}
          />
          <Button 
            type="submit" 

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

          </Button>;
        </form>;
      </Form>;

        <Button 

          variant="outline" 
          onClick={() => form && form.reset()}
          disabled={isGenerating}
        </DialogDescription>;
      </DialogHeader>;
      <Form {...form}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
          <Button;"
            type="submit";"
=======
          <Button;
            type="submit";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            className="w - full bg - zion - purple hover:bg - zion - purple - dark";
            disabled={is_generating}
          >;
            {is_generating ? (
<<<<<<< HEAD
              <>;"
                <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                Generating Contract...;
              </>) : ("
              "Generate Contract")}
          </Button>;
        </form>;
      </Form>;"
      <DialogFooter className="gap - 2 flex - wrap mt - 4">;
        <Button;"
          variant="outline";
          on_click={() => form.reset ()}
          disabled={is_generating}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ;
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        >;
<<<<<<< HEAD
=======
            )}        >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            )}        >;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            )}        >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          Reset Form;
        </Button>;
      </DialogFooter>;

<<<<<<< HEAD
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </>;
  ),; const formSchema = z.object ({"
  projectName: z.string () .min (1, "Project name is required");"
scopeSummary: z.string () .min (10, "Scope summary should be at least 10 characters");
startDate: z.date ({"
  required error: "Start date is required" 
});
export type ContractFormValues = z.infer<typeof formSchema>;
//Update form when initialValues change useEffect ( () => {}
  if (initialValues) {}
  Object.keys (initialValues) .forEach ( (key) => {}
=======
}

;
    </>;
  ),; const formSchema = z.object ({
  projectName: z.string () .min (1, "Project name is required");
scopeSummary: z.string () .min (10, "Scope summary should be at least 10 characters");
startDate: z.date ({
  required error: "Start date is required" 
});
<<<<<<< HEAD
export type ContractFormValues = z.infer<typeof formSchema>;
//Update form when initialValues change useEffect ( () => {
  if (initialValues) {
  Object.keys (initialValues) .forEach ( (key) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const typedKey = key as keyof ContractFormValues;
form.setValue (typedKey, initialValues[typedKey]) 
}) 
}
;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  const form = useForm<ContractFormValues>({
)
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),


export type ContractFormValues = z.infer<typeof formSchema>,;
</typeof>)
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),;

  const form = useForm<ContractFormValues>({;

    <>;
      <DialogHeader>;
"
        <DialogTitle className="text-xl">Contract Builder;"
        <DialogDescription>;


      <Form {...form}>
)"
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">"
</form>
          <ProjectDetailsFields;
            form={form}
          />

export type ContractFormValues = z.infer < typeof form_schema>;
;
interface ContractFormProps {
  // TODO: Implement
}
<<<<<<< HEAD
}, [form, onFormValuesChange]);
};
<<<<<<< HEAD
}finally {}
  setIsGenerating (false) 
}
};
talent.full name;
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {}
  form;
}/> <PaymentTermsFields form= {}
  form;
}talent= {}
  talent;
}handleMilestonesGenerated= {}
  handleMilestonesGenerated;
}/> <AdditionalClausesFields form= {}
  form "
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {}
  isGenerating;
}> {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") "
=======
}finally {
  setIsGenerating (false) 
}
};
talent.full name 
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {
  form 
=======
  talent: TalentProfile,
  client_name: string,
  initial_values?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contract_content: string) => void,
  deploy_options?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
export /**
 * ContractForm - Function description;
 */
function ContractForm() {
  const [is_generating, setIsGenerating] = useState (false);
  const [generated_milestones, setGeneratedMilestones] = useState < GeneratedMilestone[]>([]);
  const { toast } = use_toast ();
  const form = use_form < ContractFormValues>({)
    resolver: zod_resolver (form_schema),
    default_values: initial_values || {,"
  project_name: "",""
      scope_summary: "","
      start_date: new Date (),"
      payment_terms: talent.hourly_rate ? "hourly" : "fixed",""
      payment_amount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",""
      additional_clauses: ["nda", "ip"]}});"
  // Update form when initial_values change;
  useEffect (() => {
    // Check condition;
if ( {) {
  $2;
      Object.keys (initial_values).for_each ((key) => {
        const typed_key = key as keyof ContractFormValues;
        form.set_value (typed_key, initial_values[typed_key]);
      });
  }, [initial_values, form]);
  // Track form values for template saving;
    // Check condition;
      const subscription = form.watch ((value) => {
        onFormValuesChange (value as ContractFormValues);
      return () => subscription.unsubscribe ();
  }, [form, onFormValuesChange]);
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) =>: any {
  // TODO: Implement
    setGeneratedMilestones (milestones),"
    // If payment terms isn't already set to milestone, update it;
    // Check condition;
if (!== "milestone") {) {"
}"
      form.set_value ("payment_terms", "milestone");"
    toast ({"
      title: "Milestones Generated",")`;
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  const on_submit = async (values: ContractFormValues) => {
    setIsGenerating (true),
    try {
  // TODO: Implement
      const contract = await generate_contract (
        values,
        talent,
        client_name,)
        generated_milestones);
      onContractGenerated (contract);
    } catch (error) {"
      console.error ("Error generating contract:", error);"
        title: "Contract Generation Failed",""
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",")"
        variant: "destructive"});"
    } finally {
  // TODO: Implement
      setIsGenerating(false)

  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;
    setGeneratedMilestones(milestones),;"
    // If payment terms isn't already set to milestone, update it;
    if (form.getValues("paymentTerms") !== "milestone") {;""
      form.setValue("paymentTerms", "milestone");"

  return (
        <DialogTitle className="text - xl">Contract Builder;"


      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
          />;



          <PaymentTermsFields;
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}



          <AdditionalClausesFields;


          <Button;"
            type="submit""




            type="submit"""
            className="w-full bg-zion-purple hover:bg-zion-purple-dark""
            disabled={isGenerating}>;

              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
              </>;
            ) : (;"
              "Generate Contract";")
            )}

        </form>;
      ;"
      <DialogFooter className="gap-2 flex-wrap mt-4">;"

        <Button;
          variant="outline""
          onClick={() => form && form.reset()}

        <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"



            type="submit";""
            className="w - full bg - zion - purple hover:bg - zion - purple - dark";"
            disabled={is_generating}
          >;

                <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
              </>) : ()"
              "Generate Contract")}"
      <DialogFooter className="gap - 2 flex - wrap mt - 4">;"

          variant="outline";"
          on_click={() => form.reset ()}

        <Button ;"
          variant="outline" ;"
          onClick={() => form.reset()}


    </>

    </>);

  ),; const formSchema = z.object ({)"
  projectName: z.string () .min (1, "Project name is required");""
scopeSummary: z.string () .min (10, "Scope summary should be at least 10 characters");"
startDate: z.date ({"
  required error: "Start date is required"")
export type ContractFormValues = z.infer<typeof formSchema>;
</typeof>
}  <ProjectDetailsFields form= {
  form;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}/> <PaymentTermsFields form= {

}/> <AdditionalClausesFields form= {
<<<<<<< HEAD
  form 
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {
  isGenerating 
}> {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}</Button> </form> </Form> <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form </Button> </DialogFooter> </>) 
}
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  form;"
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract")"
</Loader2>"
} </form>  <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form   </>)"
  );
}
;
"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
