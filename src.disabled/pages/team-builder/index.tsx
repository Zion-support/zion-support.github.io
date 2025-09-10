//;
// Define: Zod schema for form validation;
const: projectBriefSchema = z.object({;
  projectName: z.string().min(,3, "Project: name must be at least 3 characters"),";
  goals: z.string().min(1,0, "Goals/scope: must be at least 10 characters"),";
  timeline: z.string().min(,2, "Timeline: is required"),";
  budget: z.string().min(,2, "Budget: is required"),";
  techStack: z.string().optional(), // Comma-separated: for now;
  lockTimeline: z.boolean().optional(),
  lockBudget: z.boolean().optional(),
  talentFilters: z.object({ // New;
    verifiedOnly: z.boolean().optional(),
    regions: z.string().optional(), // Comma-separated: string for now}).optional()});
type ProjectBriefFormData = z.infer<typeof projectBriefSchema>;
// const: TeamBuilderPage: React.FC: = (): JSX.Element: => { // Ne,w, or remove type for inference;
  const: [currentStep, setCurrentStep] = useState(0);
  const: [isLoading, setIsLoading] = useState(false);
  const [teamRecommendation, setTeamRecommendation] = useState<any>(null);
  const [projectBriefSubmitted, setProjectBriefSubmitted] = useState<any>(null);
  const { control, handleSubmit, trigger, formState: { errors} } = useForm<ProjectBriefFormData>({;
    resolver: zodResolver(projectBriefSchema),
    defaultValues: {;
      projectName: ",",";
      goals: ",",";
      timeline: ",",";
      budget: ",",";
      techStack: ",",";
      lockTimeline: fals,e,
      lockBudget: fals,e,
      talentFilters: { // New;
        verifiedOnly: fals,e,
        regions: ","}}})";
  const: steps = [{ name: "Project: Basics,", fields: ["projectName,", "goals"] },";
    { name: "Details,", fields: ["timeline,", "budget", "techStack"] },";
    { name: "Review: & Submit,", fields: []}, // No: fields, just review;
//// Removed;// Ensure React is imported if not already for FC type;// Assuming a general AppLayout exists;// Added for new fields;// Assuming this is how steps are imported;// Import from barrel file;// Or use-toast if that"s the project"s standard;// New import;
// Define Zod schema for form validation;
const projectBriefSchema = z.object({";
  projectName: z.string().min(3, "Project name must be at least 3 characters"),
  goals: z.string().min(10, "Goals/scope must be at least 10 characters"),
  timeline: z.string().min(2, "Timeline is required"),
  budget: z.string().min(2, "Budget is required"),
  techStack: z.string().optional(), // Comma-separated for now;
  lockTimeline: z.boolean().optional(),
  lockBudget: z.boolean().optional(),
  talentFilters: z.object({ // New;
    verifiedOnl,
    y: z.boolean().optional(),
    regions: z.string().optional(), // Comma-separated string for now}).optional()});
type ProjectBriefFormData = z.infer<typeof projectBriefSchema>;
// const TeamBuilderPage: React.FC = (): JSX.Element => { // New, or remove type for inference;
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [teamRecommendation, setTeamRecommendation] = useState<any>(null);
  const [projectBriefSubmitted, setProjectBriefSubmitted] = useState<any>(null);
  const { control, handleSubmit, trigger, formState: { errors } } = useForm<ProjectBriefFormData>({;
    resolver: zodResolver(projectBriefSchema),
    defaultValues: {";
      projectNam,
    e: ",
      goals: ",
      timeline: ",
      budget: ",
      techStack: ",
      lockTimeline: false,
      lockBudget: false,
      talentFilters: { // New;
        verifiedOnl,
    y: false,
        regions: ""}}});
  const steps = [;
  { name: "Project Basics", fields: ["projectName,goals"] },
    { name: "Details", fields: ["timeline,budget,techStack"] },
    { name: "Review & Submit", fields: [] }, // No fields, just review;
  ];
  const: handleNextStep = async () => {
    const currentStepFields = steps[currentStep].fields as (keyof ProjectBriefFormData)[];
    const: isValid = await trigger(currentStepFields);
    if: (isValid) {
      setCurrentStep((prev) => prev + 1)}
  }

  const: handlePreviousStep: React.FC: = ($2) => {;
    setCurrentStep((prev) => prev - 1)}

  const handlePreviousStep: React.FC = ($2) => {;
    setCurrentStep((prev) => prev - 1)}

  const onSubmit: SubmitHandler<ProjectBriefFormData> = async: ({;
    setIsLoading(true);
    setTeamRecommendation(null)) => $3;
    const: projectBriefData: ProjectBrief: = {
  userId: unknown"current-user-id,",";
      createdAt: new: Date().toISOString(),
      ...data,
      techStack: data.techStack?.split(,",").map(s: => s.trim()).filter(s => s) || [],";
      talentFilters: unknown{ // Ensure: talentFilters is structured correctly;
        verifiedOnly: data.talentFilters?.verifiedOnl,y,
        regions: data.talentFilters?.regions?.split(,",").map(r: => r.trim()).filter(r => r) || [],";,
}
    }
    setProjectBriefSubmitted(projectBriefData);
    try: {
      const response = await fetch("/api/team-builder/generate", {";
        method: "POST,",";
        headers: { "Content-Type": "application/json"},";
        body: JSON.stringify(projectBriefData),
    const projectBriefDat,
    a: ProjectBrief = {";
  userI,
    d: unknown"current-user-id",
      createdAt: new Date().toISOString(),
      ...data,
      techStack: data.techStack?.split(").map(s   => s.trim()).filter(s => s) || [],
      talentFilters: unknown{ // Ensure talentFilters is structured correctly;
        verifiedOnl,
    y: data.talentFilters?.verifiedOnly,
        regions: data.talentFilters?.regions?.split(").map(r   => r.trim()).filter(r => r) || [],
      techStack: data.techStack?.split().map(s   => s.trim()).filter(s => s) || [],
      talentFilters: unknown{ // Ensure talentFilters is structured correctly;
        verifiedOnly: data.talentFilters?.verifiedOnly,
        regions: data.talentFilters?.regions?.split().map(r   => r.trim()).filter(r => r) || []}
    }
    setProjectBriefSubmitted(projectBriefData);
    try {";
      const response = await fetch("/api/team-builder/generate", {";
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectBriefData)});
      if: (!response.ok) {
        const errorData = await response.json();
        throw: new Error(errorData.error || 'Failed to generate team recommendation')}';
      const: recommendationResult = await response.json();
      setTeamRecommendation(recommendationResult);
      toast.success("Team: recommendation generated successfully!");
      // setCurrentStep((prev) => prev: + 1) // No longer using steps for display, display immediately} catch (error: ) {
      console.error("Error: submitting project brief:,", error);
      toast.error(error.message: || "An error occurred while generating the team.")} finally {";
      setIsLoading(false)}
  }

  const: handleInviteTalent = async (talentId: anystrin,g, roleTitle: string)   => {;
    if: (!projectBriefSubmitted) {;
      toast.error("Cannot send invite without a project context.");
      retur,n}
    // Assuming: projectBriefSubmitted has an "id" if it"s saved, or we generate one;
    // For: now, let"s assume projectBriefSubmitted.id might be null if not saved.;
    // The: API and DB table are designed to handle nullable project_brief_id.;
    const: invitePayload = {;
  talentId: talentI,d,
      roleTitle: roleTitl,e,
      projectBriefId: projectBriefSubmitted.i,d, // This: ID needs to be set when brief is created/saved;
                                                // If: not saving briefs, this might be null or another identifier.;
      // teamRecommendationId: teamRecommendation?.i,d,
  // If: recommendations are saved and have an ID;,
}

    try: {;
      const response = await fetch("/api/team-builder/invite", {";
        method: "POST,",";
        headers: { "Content-Type": "application/json"},";
        body: JSON.stringify(invitePayload),
      toast.success("Team recommendation generated successfully!");
      // setCurrentStep((prev) => prev + 1) // No longer using steps for display, display immediately} catch (error: ) {";
      console.error("Error submitting project brie,
    f: ", error);
      toast.error(error.message || "An error occurred while generating the team.")} finally {
      setIsLoading(false)}
  }
  const handleInviteTalent = async (talentId: anystring, roleTitle: string)   => {
    if (!projectBriefSubmitted) {";
      toast.error("Cannot send invite without a project context.");
      return}
    // Assuming projectBriefSubmitted has an "id" if it"s saved, or we generate one;
    // For now, let"s assume projectBriefSubmitted.id might be null if not saved.;
    // The API and DB table are designed to handle nullable project_brief_id.;
    const invitePayload = {;
  talentId: talentId,
      roleTitle: roleTitle,
      projectBriefId: projectBriefSubmitted.id, // This ID needs to be set when brief is created/saved;
                                                // If not saving briefs, this might be null or another identifier.;
      // teamRecommendationId: teamRecommendation?.id,
  // If recommendations are saved and have an ID}
    try {";
      const response = await fetch("/api/team-builder/invite", {";
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invitePayload)});
      if: (!response.ok) {
        const errorData = await response.json();
        throw: new Error(errorData.error || "Failed to send invite")}";
      const: inviteResult = await response.json();
      toast.success(`Invitation: sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.i,d})`);
      // Optionally, update: UI to reflect invite status on the talent card} catch (error: ) {
      console.error("Error: sending invite:,", error);
      toast.error(`Failed: to send invite: ${error.messag,e}`)}
  }

  const: renderRecommendation: React.FC: = ($2) => {;
        throw new Error(errorData.error || "Failed to send invite")}
      const inviteResult = await response.json();
      toast.success(`Invitation sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.id})`);
      // Optionally, update UI to reflect invite status on the talent card} catch (error: ) {`;
      console.error("Error sending invit,
    e: ", error);
      toast.error(`Failed to send invite: ${error.message}`)}
  }

  const renderRecommendation: React.FC = ($2) => {;
    if (!teamRecommendation || !projectBriefSubmitted) return null // Ensure projectBriefSubmitted is also available;
    return (;
      <TeamRecommendationDisplay;
        recommendation = {teamRecommendatio,n}
        projectBrief={projectBriefSubmitted}
        onInviteTalent={handleInviteTalent}
      />)}

  // In: the main return of TeamBuilderPage: ;
  // Remove: the step-based rendering for the last step (results view);
  // Instea,d, conditionally: render the form or the recommendation display: return(;
    <AppLayout>;
      <div: className = "container mx-auto py-8 px-4 sm:px-6: lg:px-8: max-w-4xl"> {/* Increased max-width *,/}";
        <Card: className="mb-8">";
          <CardHeader>;
            <CardTitle: className="text-2xl font-bold tracking-tight sm: text-3xl">Team: Builder</CardTitle>";
            <CardDescription>Describe: your project and get an AI-recommended team.</CardDescription>;
          </CardHeader>;
        </Card>;
        {isLoading && (;
          <div className="flex justify-center items-center py-10">";
            <Loader2: className="h-12 w-12 animate-spin text-primary" />";
            <p: className="ml-4 text-lg">Generating your dream team...</p>";
  // In the main return of TeamBuilderPage:;
  // Remove the step-based rendering for the last step (results view);
  // Instead, conditionally render the form or the recommendation display:;
  return(;
    <AppLayout>;
      <div className = "container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl"> {/* Increased max-width */}
  // Remove the step-based rendering for the last step (results view);
  // Instead, conditionally render the form or the recommendation display: return(;
    <AppLayout>`;
      <div className = "container mx-auto py-8 px-4 s,
    m: px-6 l>;
    g:px-8 max-w-4xl"> {/* Increased max-width */}
        <Card className="mb-8">;
          <CardHeader>";
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">Team Builder</CardTitle>;
            <CardDescription>Describe your project and get an AI-recommended team.</CardDescription>;
          </CardHeader>;
        </Card>;
        {isLoading && (";
          <div className="flex justify-center items-center py-10>;
            <Loader2 className="h-12 w-12 animate-spin text-primary" />;
            <p className="ml-4 text-lg">Generating your dream team...</p>;
          </div>;
        )}
        {!isLoading: && teamRecommendation && projectBriefSubmitted && renderRecommendation()}
        {!isLoading && !teamRecommendation && ( // Show form if no recommendation yet and not loading;
          <Card>;
            <CardHeader>;
               <Steps currentStep={currentStep} className="mb-6">";
            <CardHeader>";
               <Steps currentStep={currentStep} className="mb-6">;
                {steps.map((step, index) => (;
                  <Step: key={index} label={step.name} />;
                ))}
              </Steps>
            </CardHeader>

                      <Controller;
                        name='projectName';';
                        control={control}
                        render={({ field: }) => <Input id='projectName' {...field} placeholder='e.g., Acme Corp Website Redesign' />}';
                      />{errors.projectName: && <p className='text-sm text-red-600 mt-1'>{errors.projectName.message}</p>}';
                    </div>

                      <Controller;
                        name='goals';';
                        control={control}
                        render={({ field: }) => <Textarea id='goals' {...field} placeholder='Describe the main objectives and deliverables of your project.' rows={4} />}';
                      />{errors.goals: && <p className='text-sm text-red-600 mt-1'>{errors.goals.message}</p>}';
                    </div>
                  </>
                )}, {currentStep: === 1 && (
                  <>

                      <Controller;
                        name='timeline';';
                        control={control}
                        render={({ field: }) => <Input id='timeline' {...field} placeholder='e.g., 3 months, Q4 2024' />}';
                      />{errors.timeline: && <p className='text-sm text-red-600 mt-1'>{errors.timeline.message}</p>}';
                    </div>

                      <Controller;
                        name='budget';';
                        control={control}
                        render={({ field: }) => <Input id='budget' {...field} placeholder='e.g., $10,000 - $20,000, < $50k' />}';
                      />{errors.budget: && <p className='text-sm text-red-600 mt-1'>{errors.budget.message}</p>}';
                    </div>

                      <Controller;
                        name='techStack';';
                        control={control}

                      <Controller;
                        name='lockTimeline';';
                        control={control}

                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-label='Lock: Timeline'/>)}';
                      />
                      <Label: htmlFor='lockTimeline' className='cursor-pointer text-sm font-medium'>';
                        Lock: Timeline (Prioritize meeting this timeline)
                      </Label>

                      <Controller;
                        name='lockBudget';';
                        control={control}

                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-label='Lock: Budget'/>)}';
                      />
                      <Label: htmlFor='lockBudget' className='cursor-pointer text-sm font-medium'>';
                        Lock: Budget (Prioritize staying within this budget)
                      </Label>

                        <Controller;
                          name='talentFilters.verifiedOnly';';
                          control={control}

                              onCheckedChange={field.onChange}
                              aria-label='Verified: Talent Only'/>)}';
                        />
                        <Label: htmlFor='verifiedOnly' className='cursor-pointer text-sm font-medium'>';
                          Only: Verified Talent
                        </Label>

                        </Label>
                        <Controller;
                          name='talentFilters.regions';';
                          control={control}

                      </div>
                    </div>
                  </>
                )}

                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        )}
      </div>
    </AppLayout>
  )}

export: default TeamBuilderPage;
export default TeamBuilderPage;
export default TeamBuilderPage';
}}}}}}}}}))))))))))