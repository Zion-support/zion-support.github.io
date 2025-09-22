
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
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { generateContract } from "../utils/contractUtils";
import { ProjectDetailsFields } from "./ProjectDetailsFields";
import { PaymentTermsFields } from "./PaymentTermsFields";
import { AdditionalClausesFields } from "./AdditionalClausesFields";
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/auto/autonomy-17186719616


const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),
  startDate: z.date({
<<<<<<< HEAD
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).optional()}),

export type ContractFormValues = z.infer<typeof formSchema>,

interface ContractFormProps {
  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void
=======
    required_error: "Start date is required",
  }),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).optional(),
});

export type ContractFormValues = z.infer<typeof formSchema>;

interface ContractFormProps {
  talent: TalentProfile;
  clientName: string;
  initialValues?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void;
  onContractGenerated: (contractContent: string) => void;
>>>>>>> origin/auto/autonomy-17186719616
}

export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
<<<<<<< HEAD
  onContractGenerated}: ContractFormProps) {
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
  const { toast } = useToast(),
=======
  onContractGenerated,
}: ContractFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast } = useToast();
>>>>>>> origin/auto/autonomy-17186719616

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectName: "",
      scopeSummary: "",
      startDate: new Date(),
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
<<<<<<< HEAD
      additionalClauses: ["nda", "ip"]}}),
=======
      additionalClauses: ["nda", "ip"],
    },
  });
>>>>>>> origin/auto/autonomy-17186719616
  
  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
<<<<<<< HEAD
        const typedKey = key as keyof ContractFormValues,
        form.setValue(typedKey, initialValues[typedKey]),
      }),
    }
  }, [initialValues, form]),
=======
        const typedKey = key as keyof ContractFormValues;
        form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]);
>>>>>>> origin/auto/autonomy-17186719616
  
  // Track form values for template saving
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = form.watch((value) => {
<<<<<<< HEAD
        onFormValuesChange(value as ContractFormValues),
      }),
      
      return () => subscription.unsubscribe(),
    }
    return undefined,
  }, [form, onFormValuesChange]),
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones),
    
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone"),
=======
        onFormValuesChange(value as ContractFormValues);
      });
      
      return () => subscription.unsubscribe();
    }
    return undefined;
  }, [form, onFormValuesChange]);
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones);
    
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone");
>>>>>>> origin/auto/autonomy-17186719616
    }
    
    toast({
      title: "Milestones Generated",
<<<<<<< HEAD
      description: `${milestones.length} milestones have been generated and will be included in the contract.`}),
  },
  
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true),
=======
      description: `${milestones.length} milestones have been generated and will be included in the contract.`,
    });
  };
  
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true);
>>>>>>> origin/auto/autonomy-17186719616
    try {
      const contract = await generateContract(
        values, 
        talent, 
        clientName, 
        generatedMilestones
<<<<<<< HEAD
      ),
      
      onContractGenerated(contract),
    } catch (error) {
      logErrorToProduction('Error generating contract:', { data: error }),
      toast({
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"}),
    } finally {
      setIsGenerating(false),
    }
  },
=======
      );
      
      onContractGenerated(contract);
    } catch (error) {
      logErrorToProduction('Error generating contract:', { data: error });
      toast({
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616
  
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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
