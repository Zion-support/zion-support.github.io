


const _formSchema = z.object({_projectName: z.string().min(1, _"Project name is required"), _scopeSummary: z.string().min(10, _"Scope summary should be at least 10 characters"), _startDate: z.date({
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  additionalClauses: z.array(z.string()).optional()});

export type ContractFormValues = z.infer<typeof formSchema>;

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
    }
  }, [initialValues, form]);
  
  // Track form values for template saving
  useEffect__(() => {_if (onFormValuesChange) {
      const _subscription = form.watch(_(value) => {
        onFormValuesChange(value as ContractFormValues);});
      
      return () => subscription.unsubscribe();
    }
    return undefined;
  }, [form, onFormValuesChange]);
  
  const _handleMilestonesGenerated = (_milestones: GeneratedMilestone[]) => {_setGeneratedMilestones(milestones);
    
    // If payment terms isn't already set to milestone, _update it
    if (form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", _"milestone");}
    
    toast({_title: "Milestones Generated", _description: `${milestones.length} milestones have been generated and will be included in the contract.`});
  };
  
  const _onSubmit = async (_values: ContractFormValues) => {_setIsGenerating(true);
    try {
      const _contract = await generateContract(
        values, _talent, _clientName, _generatedMilestones
      );
      
      onContractGenerated(contract);} catch (error) {_logErrorToProduction('Error generating contract:', _{ data: error});
      toast({_title: "Contract Generation Failed", _description: error instanceof Error ? error.message : "Something went wrong. Please try again.", _variant: "destructive"});
    } finally {_setIsGenerating(false);}
  };
  
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {_talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
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
            type="submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={_isGenerating}
          >
            {_isGenerating ? (
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
          onClick={_() => form.reset()}
          disabled={_isGenerating}
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  );
}
