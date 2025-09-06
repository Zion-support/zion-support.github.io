<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/components/ContractForm.tsx


=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from 'lucide-react'import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { TalentProfile } from "@/types/talent"
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator"
import { generateContract } from "../utils/contractUtils"
import { ProjectDetailsFields } from "./ProjectDetailsFields"
import { PaymentTermsFields } from "./PaymentTermsFields"
import { AdditionalClausesFields } from "./AdditionalClausesFields"
import {logErrorToProduction} from '@/utils/productionLogger'
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required")
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters")
  startDate: z.date({
    required_error: "Start date is required"})
  endDate: z.date().optional()
  paymentTerms: z.enum(["hourly", "fixed", "milestone"])
  paymentAmount: z.string().min(1, "Payment amount is required")
  additionalClauses: z.array(z.string()).optional()})
export type ContractFormValues = z.infer<typeof formSchema>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        values
        talent
        clientName
}

  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Button } from "@/components/ui/button";
========
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from 'lucide-react'import { Button } from "@/components/ui/button";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ContractForm.tsx
=======
=======
        values, 
        talent, 
        clientName, 
  ;
};
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
const formSchema = z && z.object({;
  projectName: z && z.string().min(1, "Project name is required");
  scopeSummary: z && z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z && z.date({;
    required_error: "Start date is required"}),;
  endDate: z && z.date().optional(),;
  paymentTerms: z && z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z && z.string().min(1, "Payment amount is required");
  additionalClauses: z && z.array(z && z.string()).optional()}),;
export type ContractFormValues = z && z.infer<typeof formSchema>;
        values, ;
        talent, ;
        clientName, ;
}
  );
}
<<<<<<<< HEAD:src/components/contracts/components/ContractForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ContractForm.tsx
  )
}
import { useState, useEffect  } from './react';
import { use_form  } from './react - hook - form';
import { zod_resolver  } from '@hookform / resolvers / zod';
import { z  } from './zod';
import { Loader2 } from 'lucide-react'import { Button  } from '@/components / ui / button';
import { Form  } from '@/components / ui / form';
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle  } from '@/components / ui / dialog';
import { use_toast  } from '@/hooks / use - toast';
import { TalentProfile  } from '@/types / talent';
import { GeneratedMilestone  } from '@/hooks / useMilestoneGenerator';
import { generate_contract  } from '../utils / contract_utils';
import { ProjectDetailsFields  } from './ProjectDetailsFields';
import { PaymentTermsFields  } from './PaymentTermsFields';
import { AdditionalClausesFields  } from './AdditionalClausesFields';
import {logErrorToProduction} from '@/utils / production_logger';
const form_schema = z.object ({
  project_name: z.string ().min (1, "Project name is required");
  scope_summary: z.string ().min (10, "Scope summary should be at least 10 characters");
  start_date: z.date ({
    required_error: "Start date is required"}),
  end_date: z.date ().optional (),
  payment_terms: z.enum (["hourly", "fixed", "milestone"]);
  payment_amount: z.string ().min (1, "Payment amount is required");
  additional_clauses: z.array (z.string ()).optional ()}),
export type ContractFormValues = z.infer < typeof form_schema>;
        values,
        talent,
        client_name,
}
  );
}
<<<<<<<< HEAD:src/components/contracts/components/ContractForm.tsx

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

=======
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required");
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z.date({
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z.string().min(1, "Payment amount is required");

  additionalClauses: z.array(z.string()).optional()}),

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
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),
  startDate: z.date({
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Loader2 } from 'lucide-react';
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
import {logErrorToProduction} from '@/utils/productionLogger',;
const formSchema = z.object({;
<<<<<<< HEAD
  projectName:z.string().min(1, "Project name is required"),;
  scopeSummary:z.string().min(10, "Scope summary should be at least 10 characters"),;
  startDate:z.date({;
    required_error:"Start date is required"}),;
  endDate:z.date().optional(),;
  paymentTerms:z.enum(["hourly", "fixed", "milestone"]),;
  paymentAmount:z.string().min(1, "Payment amount is required"),;
  additionalClauses:z.array(z.string()).optional()}),;
;
export type ContractFormValues = z.infer<typeof formSchema>,;
;
interface ContractFormProps {;
  talent:TalentProfile,;
  clientName:string,;
  initialValues?:ContractFormValues,;
  onFormValuesChange?:(values:ContractFormValues) => void,;
  onContractGenerated:(contractContent:string) => void;
=======
  projectName: z.string().min(1, "Project name is required"),;
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters"),;
  startDate: z.date({;
    required_error: "Start date is required"}),;
  endDate: z.date().optional(),;
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),;
  paymentAmount: z.string().min(1, "Payment amount is required"),;
  additionalClauses: z.array(z.string()).optional()}),;
export type ContractFormValues = z.infer<typeof formSchema>,;
interface ContractFormProps {;
  talent: TalentProfile,;
  clientName: string,;
  initialValues?: ContractFormValues,;
  onFormValuesChange?: (values: ContractFormValues) => void,;
  onContractGenerated: (contractContent: string) => void;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function ContractForm({;
  talent,;
  clientName,;
  initialValues,;
  onFormValuesChange,;
<<<<<<< HEAD
  onContractGenerated} ContractFormProps) {;
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
=======
  onContractGenerated}: ContractFormProps) {;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Update form when initialValues change;
  useEffect(() => {;
    if (initialValues) {;
      Object.keys(initialValues).forEach((key) => {;
        const typedKey = key as keyof ContractFormValues,;
<<<<<<< HEAD
        form.setValue(typedKey, initialValues[typedKey]),;
      }),;
    }
  }, [initialValues, form]),;
  ;
=======
        form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Track form values for template saving;
  useEffect(() => {;
    if (onFormValuesChange) {;
      const subscription = form.watch((value) => {;
<<<<<<< HEAD
        onFormValuesChange(value as ContractFormValues),;
      }),;
      ;
      return () => subscription.unsubscribe(),;
    }
    return undefined,;
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
      logErrorToProduction('Error generating contract:', { data:error }),;
      toast({;
        title:"Contract Generation Failed",;
        description:error instanceof Error ? error.message :"Something went wrong. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsGenerating(false),;
    }
  },;
  ;
=======
        onFormValuesChange(value as ContractFormValues);
      }),;
      return () => subscription.unsubscribe();
    }
    return undefined
  }, [form, onFormValuesChange]),
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones(milestones),
    
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")
    }
    
    toast({
      title: "Milestones Generated",
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})
  },
  
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
        title: "Contract Generation Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"})
    } finally {
      setIsGenerating(false)
    return undefined;
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
      logErrorToProduction('Error generating contract:', { data: error }),;
      toast({;
        title: "Contract Generation Failed",;
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.";
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <>;
      <DialogHeader>;
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
          Create a professional contract for your project with {talent.full_name}
<<<<<<< HEAD
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
            handleMilestonesGenerated={handleMilestonesGenerated}
          />;
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
          </Button>;
        </form>;
      </Form>;
      ;
      <DialogFooter className="gap-2 flex-wrap mt-4">;
        <Button ;
          variant="outline" ;
=======
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
          />;
          <AdditionalClausesFields;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onClick={() => form.reset()}
          disabled={isGenerating}
        >;
          Reset Form;
        </Button>;
      </DialogFooter>;
    </>;
<<<<<<< HEAD
  ),; const formSchema = z.object ({;
  projectName: z.string () .min (1,  "Project name is required");";
scopeSummary: z.string () .min (10, "Scope summary should be at least 10 characters");
startDate: z.date ({";
  required error: "Start date is required" ;
});
export type ContractFormValues = z.infer<typeof formSchema>;
//Update form when initialValues change useEffect ( () => {;
  if (initialValues) {;
  Object.keys (initialValues) .forEach ( (key) => {;
  const typedKey = key as keyof ContractFormValues;
form.setValue (typedKey, initialValues[typedKey]) ;
}) ;
}
}, [initialValues, form]);
//Track form values for template saving return () => subscription.unsubscribe () ;
}return undefined;
}, [form, onFormValuesChange]);
};
}finally {;
  setIsGenerating (false) ;
}
};
talent.full name ;
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {;
  form ;
}/> <PaymentTermsFields form= {;
  form ;
}handleMilestonesGenerated= {;
  handleMilestonesGenerated ;
}/> <AdditionalClausesFields form= {;
  form ";
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {;
  isGenerating ;
}> {";
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") ";
}</Button> </form> </Form> <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form </Button> </DialogFooter> </>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ContractForm.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
