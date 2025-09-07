
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
export type ContractFormValues = z.infer<typeof formSchema>,

interface ContractFormProps {}

  talent: TalentProfile,
  clientName: string,
  initialValues?: ContractFormValues,
  onFormValuesChange?: (values: ContractFormValues) => void,
  onContractGenerated: (contractContent: string) => void,
  deployOptions?: DeploymentOptions,
  onDeployOptionsChange?: (options: DeploymentOptions) => void
}
export function ContractForm({
export function ContractForm({;
  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;

  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
export function ContractForm({;
  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;

  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,

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

  const { toast } = useToast(),

  const form = useForm<ContractFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      projectName: "",
      scopeSummary: "",
      startDate: new Date(),
  const [isGenerating, setIsGenerating] = useState($2);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
  const { toast } = useToast($2);
  const form = useForm<ContractFormValues>({
    resolver: zodResolver($2);
    defaultValues: initialValues || {
      projectName: "",
      scopeSummary: "",
      startDate: new Date($2);
      paymentTerms: talent.hourly_rate ? "hourly" : "fixed",
      paymentAmount: talent.hourly_rate ? `$${talent.hourly_rate}/hour` : "",
      additionalClauses: ["nda", "ip"]}),
  
      additionalClauses: ["nda", "ip"]}}),


  // Update form when initialValues change
  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        const typedKey = $2;

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
  }, [initialValues, form]),
  
  // Track form values for template saving
  useEffect(() => {
    if (onFormValuesChange) {
      const subscription = $2;
      return () => subscription.unsubscribe()
    }
  }, [form, onFormValuesChange]),
  
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {
    setGeneratedMilestones($2);
    // If payment terms isn't already set to milestone, update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")
    }
    toast({
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
      title: "Milestones Generated",
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})
  },
  
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating($2);
    try {
      const contract = await generateContract($2);
      onContractGenerated(contract)
    } catch (error) {
      console.error($2);
    toast({"
      title: "Milestones Generated"`
      description: `${milestones.length} milestones have been generated and will be included in the contract.`})



    setIsGenerating(true)
    try {}
      const contract = await generateContract(
  const onSubmit = async (values: ContractFormValues) => {
    setIsGenerating(true)
    try {
      const contract = await generateContract(
        values
        talent
        clientName
        generatedMilestones

      ),

      onContractGenerated(contract)
    } catch (error) {"
      console.error("Error generating contract:", error);

      );

      ),

      onContractGenerated(contract)


      console.error("Error generating contract:", error),

      toast({"
        title: "Contract Generation Failed""
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.""
        variant: "destructive"})

    } finally {}

      setIsGenerating(false)

  }, [form, onFormValuesChange]),;
  const handleMilestonesGenerated = (milestones: GeneratedMilestone[]) => {;

      form.setValue("paymentTerms", "milestone");
        const typedKey = key as keyof ContractFormValues;
        form && form.setValue(typedKey, initialValues[typedKey]);
      });
    }
    }
  }

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

      description: `${milestones && milestones.length} milestones have been generated and will be included in the contract.`});
  };

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

      description: `${milestones && milestones.length} milestones have been generated and will be included in the contract.`});
  };


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

        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };

  return (
    <>;

          Create a professional contract for your project with {talent && talent.full_name}
        </DialogDescription>;
      </DialogHeader>;


          <PaymentTermsFields

            form={form}

            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
          
          <PaymentTermsFields 
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
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
          />;
          <AdditionalClausesFields;
            form={form}

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
            {isGenerating ? (;
              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Generating Contract...;
              </>;
            ) : (;"
              "Generate Contract";

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

          </Button>;
        </form>;
      </Form>;


        <Button;
"
          variant="outline" 
          onClick={() => form && form.reset()}
          disabled={isGenerating}


        </DialogDescription>;
      </DialogHeader>;
      <Form {...form}>;"

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

            className="w - full bg - zion - purple hover:bg - zion - purple - dark";
            disabled={is_generating}
          >;
            {is_generating ? (


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
            )}        >;
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}


        >;

          Reset Form;
        </Button>;
      </DialogFooter>;

    </>);
}
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
