
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
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required");
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z.date({
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
export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
  deployOptions,



  onDeployOptionsChange
}: ContractFormProps) {
  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: initialValues |{
      projectName: ""
      scopeSummary: ""
      startDate: new Date()
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed"
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : ""
      additionalClauses: ["nda", "ip"]}});
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones)
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")
    }
    toast({
      title: "Milestones Generated"
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true)
    try {
      const contract = await generateContract(
        values
        talent
        clientName
        generatedMilestones
      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error);
      );
      ),
      
      onContractGenerated(contract)
    } catch (error) {
      console.error("Error generating contract:", error),
      toast({
        title: "Contract Generation Failed"
        description: error instanceof Error ? error.message : "Something went wrong. Please try again."
        variant: "destructive"})
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
          <PaymentTermsFields
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
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
          />
          <AdditionalClausesFields 
            form={form}
          />
          <Button 
            type="submit" 
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
        >;
          Reset Form;
        </Button>;
      </DialogFooter>;
