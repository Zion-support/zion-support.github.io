  additionalClauses: z && z.array(z && z.string()).default([])}),;  talent;
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
