

export type ContractFormValues = z.infer<typeof formSchema>;

interface ContractFormProps {
  talent: TalentProfile;
  clientName: string;
  initialValues?: ContractFormValues;
  onFormValuesChange?: (values: ContractFormValues) => void;
  onContractGenerated: (contractContent: string) => void;
  deployOptions?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void}

export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
  deployOptions,
  onDeployOptionsChange
}: ContractFormProps) {
  // const [isGenerating, setIsGenerating] = useState(false); // Removed
  const { toast } = useToast();

  // Update form when initialValues change
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    if(initialValues) {
      Object.keys(initialValues).forEach((key) => {
        
        form.setValue(typedKey, initialValues[typedKey])})}
  }, [initialValues, form]);
  
  // Track form values for template saving
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    if(onFormValuesChange) {
      
      });
      
      return () => subscription.unsubscribe()}
  }, [form, onFormValuesChange]);

    form.setValue("manualMilestones", transformedAIMilestones);
    
    // If payment terms isn't already set to milestone, update it
    if(form.getValues("paymentTerms") !== "milestone") {
      form.setValue("paymentTerms", "milestone")}
    
    toast({
      title: "Milestones Generated",
      description: `${milestones.length} milestones have been suggested and added to the form.Please review and adjust payment amounts.`,
    })};
  
  // const onSubmit = async(values: ContractFormValues) => { // Removed onSubmit
  //   // setIsGenerating(true); // Removed
  //   // try {
  //   //   
  //   //   onContractGenerated(contract);
  //   // } catch(error) {
  //   //   console.error("Error generating contract:", error);
  //   //   toast({
  //   //     title: "Contract Generation Failed",
  //   //     description: error instanceof Error ? error.message : "Something went wrong.Please try again.",
  //   //     variant: "destructive",
  //   //   });
  //   // } finally {
  //   //   // setIsGenerating(false); // Removed
  //   // }
  // };
  
  return (<>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
      <Form {...form}>
        {/* Removed form.handleSubmit(onSubmit) from here, form submission will be handled by parent */}
        <form className="space-y-6">
          <ProjectDetailsFields form={form} 
           />
          
          <PaymentTermsFields form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
           />
          
          <AdditionalClausesFields form={form}
           />
          
          {/* Removed internal submit button */}
          {/* <Button
            type="submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            // disabled={isGenerating} // Removed
          >
            {isGenerating ? ( // Removed
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Contract...
              </>
            ) : (
              "Generate Contract"
            )}
          </Button> */}
        </form>
      </Form>
      
      <DialogFooter className="gap-2 flex-wrap mt-4">
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          // disabled={isGenerating} // Removed
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  )}
