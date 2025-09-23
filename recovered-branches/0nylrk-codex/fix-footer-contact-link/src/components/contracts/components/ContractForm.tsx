
<<<<<<< HEAD
import { useStateuseEffect } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
<<<<<<< HEAD
import { DialogDescriptionDialogFooterDialogHeaderDialogTitle } from "@/components/ui/dialog";
=======
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
>>>>>>> origin/auto/autonomy-17186719616
import { useToast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { generateContract } from "../utils/contractUtils";
import { ProjectDetailsFields } from "./ProjectDetailsFields";
import { PaymentTermsFields } from "./PaymentTermsFields";
import { AdditionalClausesFields } from "./AdditionalClausesFields";
import { DeploymentOptions } from "@/types/smart-contracts";

const formSchema = z.object({
<<<<<<< HEAD
  projectName: z.string().min(1"Project name is required"),
  scopeSummary: z.string().min(10"Scope summary should be at least 10 characters"),
  startDate: z.date({
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly"fixed"milestone"]),
  paymentAmount: z.string().min(1"Payment amount is required"),
  additionalClauses: z.array(z.string()).default([])});
=======
  projectName: z.string().min(1, "Project name is required"),
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).default([]),
});
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
  const [isGeneratingsetIsGenerating] = useState(false);
  const [generatedMilestonesetGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
=======
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
>>>>>>> origin/auto/autonomy-17186719616
  const { toast } = useToast();

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectName: "",
      scopeSummary: "",
      startDate: new Date(),
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
<<<<<<< HEAD
      additionalClauses: ["nda"ip"]}});
=======
      additionalClauses: ["nda", "ip"],
    },
  });
>>>>>>> origin/auto/autonomy-17186719616
  
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        const typedKey = key as keyof ContractFormValues;
<<<<<<< HEAD
        form.setValue(typedKeyinitialValues[typedKey]);
      });
    }
  }[initialValuesform]);
=======
        form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]);
>>>>>>> origin/auto/autonomy-17186719616
  
  // Track form values for template saving
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = form.watch((value) => {
        onFormValuesChange(value as ContractFormValues);
      });
      
      return () => subscription.unsubscribe();
    }
<<<<<<< HEAD
  }[formonFormValuesChange]);
=======
  }, [form, onFormValuesChange]);
>>>>>>> origin/auto/autonomy-17186719616
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones);
    
<<<<<<< HEAD
    // If payment terms isn't already set to milestoneupdate it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms"milestone");
=======
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone");
>>>>>>> origin/auto/autonomy-17186719616
    }
    
    toast({
      title: "Milestones Generated",
<<<<<<< HEAD
      description: `${milestones.length} milestones have been generated and will be included in the contract.`});
=======
      description: `${milestones.length} milestones have been generated and will be included in the contract.`,
    });
>>>>>>> origin/auto/autonomy-17186719616
  };
  
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true);
    try {
      const contract = await generateContract(
<<<<<<< HEAD
        values
        talent
        clientName
=======
        values, 
        talent, 
        clientName, 
>>>>>>> origin/auto/autonomy-17186719616
        generatedMilestones
      );
      
      onContractGenerated(contract);
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating contract:"error);
      toast({
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"});
=======
      console.error("Error generating contract:", error);
      toast({
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            type="submit" 
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
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  );
}
