

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
  additionalClauses: z && z.array(z && z.string()).default([])}),;  talent;


import {useState, useEffect} from "react";""
import {useForm} from "react-hook-form";""
import {zodResolver} from "@hookform/resolvers/zod";""
import {z} from "zod";""
import {Loader2} from "lucide-react";""
import {Button} from "@/components/ui/button";""
import {Form} from "@/components/ui/form";""
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";""
import {useToast} from "@/hooks/use-toast";""
import {TalentProfile} from "@/types/talent";""
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";""
import {generateContract} from "../utils/contractUtils";""
import {ProjectDetailsFields} from "./ProjectDetailsFields";""
import {PaymentTermsFields} from "./PaymentTermsFields";""
import {AdditionalClausesFields} from "./AdditionalClausesFields";""
import {DeploymentOptions} from "@/types/smart-contracts";""
import { useState, useEffect } from "react",""
import { useForm } from "react-hook-form",""
import { zodResolver } from "@hookform/resolvers/zod",""
import { z } from "zod",""
import { Loader2 } from "lucide-react",""
import { Button } from "@/components/ui/button",""
import { Form } from "@/components/ui/form",""
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",""
import { useToast } from "@/hooks/use-toast",""
import { TalentProfile } from "@/types/talent",""
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",""
import { generateContract } from "../utils/contractUtils",""
import { ProjectDetailsFields } from "./ProjectDetailsFields",""
import { PaymentTermsFields } from "./PaymentTermsFields",""
import { AdditionalClausesFields } from "./AdditionalClausesFields",""
import { DeploymentOptions } from "@/types/smart-contracts","
const formSchema = z.object({)"
  projectName: z.string().min(1, "Project name is required");""
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");"
  startDate: z.date({

const formSchema = z && z.object({;)"
  projectName: z && z.string().min(1, "Project name is required");""
  scopeSummary: z && z.string().min(10, "Scope summary should be at least 10 characters");"
  startDate: z && z.date({;,)"
  required_error: "Start date is required"}),;"
  endDate: z && z.date().optional(),;"
  paymentTerms: z && z.enum(["hourly", "fixed", "milestone"]);""
  paymentAmount: z && z.string().min(1, "Payment amount is required");"
  additionalClauses: z && z.array(z && z.string()).default([])}),;
  talent;
pr-12325
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
  

  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {

          const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey])
      })
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true)
    try {
      const contract = await generateContract(
        values
        talent
        clientName
        generatedMilestones      );
      ),
      
      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error),            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}

            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}>;
            {isGenerating ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Generating Contract...;
              </>;
            ) : (;
              "Generate Contract";
            )}        >;
          Reset Form;
        </Button>;
      </DialogFooter>;

    </>);
}


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
}/> <PaymentTermsFields form= {

}/> <AdditionalClausesFields form= {
  form;"
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract")"
</Loader2>"
} </form>  <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form   </>)"
  );
"`;
pr-12325
