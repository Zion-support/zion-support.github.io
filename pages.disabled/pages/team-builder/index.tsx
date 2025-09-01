// import { NextPage   } from 'next.ts'; // Removed'
// Define Zod schema for form validation}).optional()});
type ProjectBriefFormData = z.infer<typeof projectBriefSchema>;
// const TeamBuilderPage: React.FC = (): JSX.Element => { // New, or remove type for inference;
  const [currentStep, setCurrentStep] = useState<typeof 0>(0);
  const [isLoading, setIsLoading] = useState<typeof false>(false);
  const [teamRecommendation, setTeamRecommendation] = useState<any>(null);
  const [projectBriefSubmitted, setProjectBriefSubmitted] = useState<any>(null);
<<<<<<< HEAD:pages.disabled/pages/team-builder/index.tsx

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/team-builder/index.tsx
  const { control, handleSubmit, trigger, formState: { errors } } = useForm<ProjectBriefFormData>({

    resolver: zodResolver(projectBriefSchema),
    defaultValues: {
'
      projectName: '','
      goals: '','
      timeline: '','
      budget: '','
      techStack: '',
      lockTimeline: false,
      lockBudget: false,
      talentFilters: { // New
        verifiedOnly: false,'
        regions: ''}}});'
    { name: 'Review & Submit', fields: [] }, // No fields, just review;
  ];
    if (isValid) {

      setCurrentStep((prev) => prev + 1)}
  };
    setCurrentStep(prev: unknown prev - 1)};
  const onSubmit: SubmitHandler<ProjectBriefFormData> = async (data) => {

    setIsLoading(true);
    setTeamRecommendation(null);
    const projectBriefData: ProjectBrief = {
'
''
  userId: anycurrent-user-id',;      createdAt: new Date().toISOString(),'
      ...data,''
      techStack: data.techStack?.split(',').map(s   => s.trim()).filter(s => s) || [],
      talentFilters: any{ // Ensure talentFilters is structured correctly;
<<<<<<< HEAD:pages.disabled/pages/team-builder/index.tsx
        verifiedOnly: data.talentFilters?.verifiedOnly,;
<<<<<<<< HEAD:pages.disabled/pages/team-builder/index.tsx
        regions: data.talentFilters?.regions?.split(',').map(r   => r.trim()).filter(r => r) || [],;

;
};
    };
========
        regions: data.talentFilters?.regions?.split(',).map(r   => r.trim()).filter(r => r) || [],}};
>>>>>>>> main:backup-pages/src-pages/team-builder/index.tsx
=======
        verifiedOnly: data.talentFilters?.verifiedOnly,;'
        regions: data.talentFilters?.regions?.split(',).map(r   => r.trim()).filter(r => r) || []}};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ef9f:src/pages/team-builder/index.tsx
    setProjectBriefSubmitted(projectBriefData);
    try {
        body: JSON.stringify(projectBriefData)});
      if (!response.ok) {
'
        throw new Error(errorData.error || 'Failed to generate team recommendation')}'
      setTeamRecommendation(recommendationResult);'      toast.success('Team recommendation generated successfully!');
      // setCurrentStep(prev: unknown prev + 1); // No longer using steps for display, display immediately
    } catch (error: ) {
'
      // console.error('Error submitting project brief:', error);'
      toast.error(error.message || 'An error occurred while generating the team.')} finally {

      setIsLoading(false)}
  };
    if (!projectBriefSubmitted) {;
      toast.error("Cannot send invite without a project context.");
      return}'
    // Assuming projectBriefSubmitted has an 'id' if it's saved, or we generate one''
    // For now, let's assume projectBriefSubmitted.id might be null if not saved.
    // The API and DB table are designed to handle nullable project_brief_id.
    };
    try {
        body: JSON.stringify(invitePayload)});
      if (!response.ok) {
'
        throw new Error(errorData.error || 'Failed to send invite')}
      toast.success(`Invitation sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.id})`);
      // Optionally, update UI to reflect invite status on the talent card
    } catch (error: ) {
'`
      // console.error('Error sending invite:', error);``
      toast.error(`Failed to send invite: ${error.message}`)}
  };
    if (!teamRecommendation || !projectBriefSubmitted) return null; // Ensure projectBriefSubmitted is also available
    return()
      <TeamRecommendationDisplay recommendation = {teamRecommendation}        projectBrief={projectBriefSubmitted}
        onInviteTalent={handleInviteTalent};
        />;
    )};
  // In the main return of TeamBuilderPage:
  // Remove the step-based rendering for the last step (results view)
  // Instead, conditionally render the form or the recommendation display:
  return()"
    <AppLayout>""
      <div className = "container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl"> {/* Increased max-width */}""
        <Card className="mb-8">"
          <CardHeader>""
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">Team Builder</CardTitle>
            <CardDescription>Describe your project and get an AI-recommended team.</CardDescription>
          </CardHeader>
        </Card>"
        {isLoading && (""
          <div className="flex justify-center items-center py-10">""
            <Loader2 className="h-12 w-12 animate-spin text-primary" />""
            <p className="ml-4 text-lg">Generating your dream team...</p>
          </div>
        )}
        {!isLoading && teamRecommendation && projectBriefSubmitted && renderRecommendation()}
        {!isLoading && !teamRecommendation && // Show form if no recommendation yet and not loading
          <Card>"
            <CardHeader>""
               <Steps currentStep={currentStep} className="mb-6">
                {steps.map((step: unknown, index: unknown()
                  <Step key={index} label={step.name}  />                ))}
              </Steps>
            </CardHeader>"
            <form onSubmit={handleSubmit(onSubmit)}>""
              <CardContent className="space-y-6">
                {currentStep === 0 && (
                  <>"
                    <div>""
                      <Label htmlFor="projectName">Project Name</Label>"
                      <Controller""
                        name="projectName""
                        control={control}""
                        render={({ field }) => <Input id="projectName" {...field} placeholder="e.g., Acme Corp Website Redesign"  />}"
                      />"                      {errors.projectName && <p className="text-sm text-red-600 mt-1">{errors.projectName.message}</p>}
                    </div>"
                    <div>""
                      <Label htmlFor="goals">Goals / Scope</Label>"
                      <Controller""
                        name="goals""
                        control={control}""
                        render={({ field }) => <Textarea id="goals" {...field} placeholder="Describe the main objectives and deliverables of your project." rows={4}  />}"
                      />"                      {errors.goals && <p className="text-sm text-red-600 mt-1">{errors.goals.message}</p>}
                    </div>
                  </>
                )}
                {currentStep === 1 && (
                  <>"
                    <div>""
                      <Label htmlFor="timeline">Timeline</Label>"
                      <Controller""
                        name="timeline""
                        control={control}""
                        render={({ field }) => <Input id="timeline" {...field} placeholder="e.g., 3 months, Q4 2024"  />}"
                      />"                      {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>}
                    </div>"
                    <div>""
                      <Label htmlFor="budget">Budget</Label>"
                      <Controller""
                        name="budget""
                        control={control}""
                        render={({ field }) => <Input id="budget" {...field} placeholder="e.g., $10,000 - $20,000, < $50k"  />}"
                      />"                      {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                    </div>"
                    <div>""
                      <Label htmlFor="techStack">Tech Stack or Areas (Optional, comma-separated)</Label>"
                      <Controller""
                        name="techStack""
                        control={control}""
                        render={({ field }) => <Textarea id="techStack" {...field} placeholder="e.g., React, Node.js, Python, AWS, Machine Learning" rows={3}  />}"
                      />"                      {errors.techStack && <p className="text-sm text-red-600 mt-1">{errors.techStack.message}</p>}"
                    </div>""
                    <div className="flex items-center space-x-2 mt-4 pt-2">"
                      <Controller""
                        name="lockTimeline"
                        control={control}
                        render={({ field }) => ("
                          <Switch""
                            id="lockTimeline"                            checked={field.value}"
                            onCheckedChange={field.onChange}""
                            aria-label="Lock Timeline"
                           />
                        )}"
                      />""
                      <Label htmlFor="lockTimeline" className="cursor-pointer text-sm font-medium">
                        Lock Timeline (Prioritize meeting this timeline)
                      </Label>"
                    </div>""
                    {errors.lockTimeline && <p className="text-sm text-red-600 mt-1">{errors.lockTimeline.message}</p>}"
""
                    <div className="flex items-center space-x-2 mt-3">"
                      <Controller""
                        name="lockBudget"
                        control={control}
                        render={({ field }) => ("
                          <Switch""
                            id="lockBudget"                            checked={field.value}"
                            onCheckedChange={field.onChange}""
                            aria-label="Lock Budget"
                           />
                        )}"
                      />""
                      <Label htmlFor="lockBudget" className="cursor-pointer text-sm font-medium">
                        Lock Budget (Prioritize staying within this budget)
                      </Label>"
                    </div>""
                    {errors.lockBudget && <p className="text-sm text-red-600 mt-1">{errors.lockBudget.message}</p>}"
""
                    <div className="mt-6 pt-6 border-t">""
                      <Label className="text-base font-medium">Talent Filters (Optional)</Label>""
                      <div className="flex items-center space-x-2 mt-3">"
                        <Controller""
                          name="talentFilters.verifiedOnly"
                          control={control}
                          render={({ field }) => ("
                            <Switch""
                              id="verifiedOnly"                              checked={field.value || false} // Ensure value is boolean"
                              onCheckedChange={field.onChange}""
                              aria-label="Verified Talent Only"
                             />
                          )}"
                        />""
                        <Label htmlFor="verifiedOnly" className="cursor-pointer text-sm font-medium">
                          Only Verified Talent
                        </Label>"
                      </div>""
                      {errors.talentFilters?.verifiedOnly && <p className="text-sm text-red-600 mt-1">{errors.talentFilters.verifiedOnly.message}</p>}"
""
                      <div className="mt-3">""
                        <Label htmlFor="talentRegions" className="text-sm font-medium">
                          Preferred Regions (Comma-separated, e.g., LATAM, Europe)
                        </Label>"
                        <Controller""
                          name="talentFilters.regions"
                          control={control}
                          render={({ field }) => ("
                            <Input""
                              id="talentRegions"
                              {...field}'"
                              value={field.value || ''} // Ensure value is string""
                              placeholder="e.g., North America, LATAM, Global""                              className="mt-1"
                             />
                          )}"
                        />""
                         {errors.talentFilters?.regions && <p className="text-sm text-red-600 mt-1">{errors.talentFilters.regions.message}</p>}
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 2 && ("
                  <div>""
                    <h3 className="text-lg font-medium">Review Your Project Brief</h3>
                    <p>Review your project details below. If everything looks good, submit to get your team recommendation.</p>
                    {/* Add a summary of the entered data here later if needed */}
                  </div>
                )}"
              </CardContent>""
              <CardFooter className="flex justify-between">"
                {currentStep > 0 && currentStep <= 2 && (""
                  <Button type="button" variant="outline" onClick={handlePreviousStep}>
                    Previous
                  </Button>
                )}"
                {currentStep < 2 && (""
                  <Button type="button" onClick={handleNextStep}>
                    Next
                  </Button>
                )}"
                {currentStep === 2 && (""
                  <Button type="submit" disabled={isLoading}>""
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Get Team Recommendation
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        )}
      </div>;
    </AppLayout>;
  )};
;
export { TeamBuilderPage };export default TeamBuilderPage;'"`
'"`'"`