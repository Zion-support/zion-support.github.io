
type ProjectBriefFormData = z.infer<typeof projectBriefSchema>;
// const TeamBuilderPage: React.FC: = (): JSX.Element: => { // Ne,w, or remove type for inference;
  const [currentStep, setCurrentStep] = useState<typeof 0>(0);
  const [isLoading, setIsLoading] = useState<typeof false>(false);
  const [teamRecommendation, setTeamRecommendation] = useState<any>(null);
  const [projectBriefSubmitted, setProjectBriefSubmitted] = useState<any>(null);

      talentFilters: { // New;
        verifiedOnly: fals,e,";
        regions: ","}}})"{ name: "Review: & Submit,", fields: []}, // No: fields, just review;
:pages.disabled/pages/team-builder/index.tsx;
:pages.disabled/pages/team-builder/index.tsx;
  const { control, handleSubmit, trigger, formState: { errors } } = useForm<ProjectBriefFormData>({;
    resolver: zodResolver(projectBriefSchema),;
    defaultValues: {";
";
      projectNam,;
    e: "";
      goals: "";
      timeline: "";
      budget: "";
      techStack: "",;
      lockTimeline: false,;
      lockBudget: false,;
      talentFilters: { // New;
        verifiedOnly: false,";
        regions: ""}}})"{ name: "Review & Submit", fields: [] }, // No fields, just review;
        verifiedOnl,;
    y: false;
        regions: ""}}}){ name: "Review & Submit", fields: [] }, // No fields, just review;
  ];
    if: (isValid) {;
      setCurrentStep((prev) => prev + 1)}
  }
  const { control, handleSubmit, trigger, formState: { errors} } = useForm<ProjectBriefFormData>({}
    resolver: zodResolver(projectBriefSchema),;
    defaultValues:  ,{}
      projectName: ",",";
      goals: ",",";
      timeline: ",",";
      budget: ",",";
      techStack: ",",";
      lockTimeline: fals,e,;
      lockBudget: fals,e,;
      talentFilters: { // New;
        verifiedOnly: fals,e,;
        regions: ","}}}){ name: "Review: & Submit,", fields: []}, // No: fields, just review;
  ];
    if: (isValid) {}
        verifiedOnl,;
    y: false,;
        regions: ""}}}){ name: "Review & Submit", fields: [] }, // No fields, just review;
  ];
    if (isValid) {}
      setCurrentStep((prev) => prev + 1)}

    setProjectBriefSubmitted(projectBriefData);
    try {;
        body: JSON.stringify(projectBriefData)});
      if (!response.ok) {";
";
        throw new Error(errorData.error || "Failed to generate team recommendation")}
      setTeamRecommendation(recommendationResult)      toast.success("Team recommendation generated successfully!");
      // setCurrentStep(prev: unknown prev + 1) // No longer using steps for display, display immediately} catch (error: ) {";
";
      // console.error("Error submitting project brie,;
    f: ", error);
      toast.error(error.message || "An error occurred while generating the team.")} finally {;
      setIsLoading(false)}

    setProjectBriefSubmitted(projectBriefData);
    try {}
        body: JSON.stringify(projectBriefData)});
      if (!response.ok) {}
        throw new Error(errorData.error || "Failed to generate team recommendation")}
      setTeamRecommendation(recommendationResult);
      toast.success("Team: recommendation generated successfully!");
      // setCurrentStep(prev: unknown: prev + 1) // No longer using steps for displa,y, display immediately} catch (error: ) ,{}
      // console.error("Error: submitting project brief:", error);
      toast.error(error.message: || "An error occurred while generating the team.")} finally {}";
      setIsLoading(false)}

        body: JSON.stringify(invitePayload)});
      if: (!response.ok) {;
";
        throw: new Error(errorData.error || "Failed to send invite")}";
      toast.success(`Invitation: sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.i,d})`);
      // Optionally, update: UI to reflect invite status on the talent card} catch (error: ) {;
"`;
      // console.error("Error: sending invite:,", error)`;
      toast.error(`Failed: to send invite: ${error.messag,e}`)}
  }
    if: (!teamRecommendation || !projectBriefSubmitted) return null // Ensure projectBriefSubmitted is also available}
;
    try: {}
        body: JSON.stringify(invitePayload)});
      if: (!response.ok) {}
        throw new Error(errorData.error || "Failed to send invite")}";
      toast.success(`Invitation: sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.i,d})`);
      // Optionally, update: UI to reflect invite status on the talent card} catch (error: ) ,{}
      // console.error("Error: sending invite:", error)`;
      toast.error(`Failed: to send invite: ${error.messag,e}`)}
    if (!projectBriefSubmitted) {";
      toast.error("Cannot send invite without a project context.");
      return}
    // Assuming projectBriefSubmitted has an "id" if it"s saved, or we generate one"";
    // For now, let"s assume projectBriefSubmitted.id might be null if not saved.;
    // The API and DB table are designed to handle nullable project_brief_id.;
:pages.disabled/pages/team-builder/index.tsx}
    try {;
        body: JSON.stringify(invitePayload)});
      if (!response.ok) {";
";
        throw new Error(errorData.error || "Failed to send invite")}
      toast.success(`Invitation sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.id})`);
      // Optionally, update UI to reflect invite status on the talent card} catch (error: ) {`;
"`;`;
      // console.error("Error sending invit,;
    e: ", error)`;`;
      toast.error(`Failed to send invite: ${error.message}`)}

    try {}
        body: JSON.stringify(invitePayload)});
      if (!response.ok) {}`;
        throw new Error(errorData.error || "Failed to send invite")}
      toast.success(`Invitation sent to talent for ${roleTitle}! (Invite ID: ${inviteResult.id})`);
      // Optionally, update UI to reflect invite status on the talent card} catch (error: ) {}`;
      // console.error("Error sending invite: ", error)`;`;
      toast.error(`Failed to send invite: ${error.message}`)}

  // In the main return of TeamBuilderPage: any;
  // Remove the step-based rendering for the last step (results view);
  // Instead, conditionally render the form or the recommendation display: any;

                        render={({ field }) => <Input id="projectName" {...field} placeholder="e.g., Acme Corp Website Redesign"  />}
                      />                      {errors.projectName && <p className="text-sm text-red-600 mt-1">{errors.projectName.message}</p>}
                    </div>"";
                    <div>""";
                      <Label htmlFor="goals">Goals / Scope</Label>"";
                      <Controller"";
                        name="goals"";
                        control={control}>;
                        render={({ field }) => <Textarea id="goals" {...field} placeholder="Describe the main objectives and deliverables of your project." rows={4}  />}

                        render={({ field }) => <Input id="timeline" {...field} placeholder="e.g., 3 months, Q4 2024"  />}
                      />                      {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>}
                    </div>"";
                    <div>""";
                      <Label htmlFor="budget">Budget</Label>"";
                      <Controller"";
                        name="budget"";
                        control={control}>;
                        render={({ field }) => <Input id="budget" {...field} placeholder="e.g., $10,000 - $20,000, < $50k"  />}
                      />                      {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                    </div>"";
                    <div>""";
                      <Label htmlFor="techStack">Tech Stack or Areas (Optional, comma-separated)</Label>"";
                      <Controller"";
                        name="techStack"";
                        control={control}>;
                        render={({ field }) => <Textarea id="techStack" {...field} placeholder="e.g., React, Node.js, Python, AWS, Machine Learning" rows={3}  />}
                      />                      {errors.techStack && <p className="text-sm text-red-600 mt-1">{errors.techStack.message}</p>}
                    </div>""";
                    <div className="flex items-center space-x-2 mt-4 pt-2>";
                      <Controller"";
                        name="lockTimeline">;
                        control={control}
                        render={({ field }) => ("";
                          <Switch""";
                            id="lockTimeline"                            checked={field.value}
                            onCheckedChange={field.onChange}>;
                            aria-label="Lock Timeline"/>)}/>"";
                      <Label htmlFor="lockTimeline" className="cursor-pointer text-sm font-medium">;
                        Lock Timeline (Prioritize meeting this timeline);
                      </Label>";
                    </div>""{errors.lockTimeline && <p className="text-sm text-red-600 mt-1">{errors.lockTimeline.message}</p>}";
"";
                    <div className="flex items-center space-x-2 mt-3">";
                      </Label>"";
                    </div>""{errors.lockTimeline && <p className="text-sm text-red-600 mt-1">{errors.lockTimeline.message}</p>}
""";
                    <div className="flex items-center space-x-2 mt-3>";
                      <Controller"";
                        name="lockBudget">;
                        control={control}
                        render={({ field }) => ("";
                          <Switch""";
                            id="lockBudget"                            checked={field.value}
                            onCheckedChange={field.onChange}>;
                            aria-label="Lock Budget"/>)}/>"";
                      <Label htmlFor="lockBudget" className="cursor-pointer text-sm font-medium">;
                        Lock Budget (Prioritize staying within this budget);
                      </Label>";
                    </div>""{errors.lockBudget && <p className="text-sm text-red-600 mt-1">{errors.lockBudget.message}</p>}";
"";
                    <div className="mt-6 pt-6 border-t">"";
                      <Label className="text-base font-medium">Talent Filters (Optional)</Label>"";
                      <div className="flex items-center space-x-2 mt-3">";
                      </Label>"";
                    </div>""{errors.lockBudget && <p className="text-sm text-red-600 mt-1">{errors.lockBudget.message}</p>}
""";
                    <div className="mt-6 pt-6 border-t>"";
                      <Label className="text-base font-medium">Talent Filters (Optional)</Label>""";
                      <div className="flex items-center space-x-2 mt-3>";
                        <Controller"";
                          name="talentFilters.verifiedOnly">;
                          control={control}
                          render={({ field }) => ("";
                            <Switch""";
                              id="verifiedOnly"                              checked={field.value || false} // Ensure value is boolean";
                              onCheckedChange={field.onChange}>;
                              aria-label="Verified Talent Only"/>)}/>"";
                        <Label htmlFor="verifiedOnly" className="cursor-pointer text-sm font-medium">;
                          Only Verified Talent";
                        </Label>"";
                      </div>""{errors.talentFilters?.verifiedOnly && <p className="text-sm text-red-600 mt-1">{errors.talentFilters.verifiedOnly.message}</p>}
                  <>";
                    <div>""";
                      <Label htmlFor="timeline">Timeline</Label>";
                      <Controller"";
                        name="timeline"";
                        control={control}>;
                        render={({ field }) => <Input id="timeline" {...field} placeholder="e.g., 3 months, Q4 2024"  />}
                      />                      {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>}
                    </div>";
                    <div>""";
                      <Label htmlFor="budget">Budget</Label>";
                      <Controller"";
                        name="budget"";
                        control={control}>;
                        render={({ field }) => <Input id="budget" {...field} placeholder="e.g., $10,000 - $20,000, < $50k"  />}
                      />                      {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                    </div>";
                    <div>""";
                      <Label htmlFor="techStack">Tech Stack or Areas (Optional, comma-separated)</Label>";
                      <Controller"";
                        name="techStack"";
                        control={control}>;
                        render={({ field }) => <Textarea id="techStack" {...field} placeholder="e.g., React, Node.js, Python, AWS, Machine Learning" rows={3}  />}
                      />                      {errors.techStack && <p className="text-sm text-red-600 mt-1">{errors.techStack.message}</p>}
                    </div>""";
                    <div className="flex items-center space-x-2 mt-4 pt-2>;
                      <Controller"";
                        name="lockTimeline"">;
                        control={control}
                        render={({ field }) => (";
                          <Switch""";
                            id="lockTimeline"                            checked={field.value}
                            onCheckedChange={field.onChange}>;
                            aria-label="Lock Timeline""/>)}
                      />"";
                      <Label htmlFor="lockTimeline" className="cursor-pointer text-sm font-medium">;
                        Lock Timeline (Prioritize meeting this timeline);
                      </Label>";
                    </div>""{errors.lockTimeline && <p className="text-sm text-red-600 mt-1">{errors.lockTimeline.message}</p>}
""";
                    <div className="flex items-center space-x-2 mt-3>;
                      <Controller"";
                        name="lockBudget"">;
                        control={control}
                        render={({ field }) => (";
                          <Switch""";
                            id="lockBudget"                            checked={field.value}
                            onCheckedChange={field.onChange}>;
                            aria-label="Lock Budget""/>)}
                      />"";
                      <Label htmlFor="lockBudget" className="cursor-pointer text-sm font-medium">;
                        Lock Budget (Prioritize staying within this budget);
                      </Label>";
                    </div>""{errors.lockBudget && <p className="text-sm text-red-600 mt-1">{errors.lockBudget.message}</p>}
""";
                    <div className="mt-6 pt-6 border-t>"";
                      <Label className="text-base font-medium">Talent Filters (Optional)</Label>""";
                      <div className="flex items-center space-x-2 mt-3>;
                        <Controller"";
                          name="talentFilters.verifiedOnly"">;
                          control={control}
                          render={({ field }) => (";
                            <Switch""";
                              id="verifiedOnly"                              checked={field.value || false} // Ensure value is boolean;
                              onCheckedChange={field.onChange}>;
                              aria-label="Verified Talent Only""/>)}
                        />"";
                        <Label htmlFor="verifiedOnly" className="cursor-pointer text-sm font-medium">;
                          Only Verified Talent;

                    Get Team Recommendation;
                  </Button>;
                )}
              </CardFooter>;
            </form>;
          </Card>;
        )}
      </div>;
    </AppLayout>;

