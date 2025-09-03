
  const [teamRecommendation, setTeamRecommendation] = useState<any>(null)
  const [projectBriefSubmitted, setProjectBriefSubmitted] = useState<any>(null)
  const { control, handleSubmit, trigger, formState: { errors } } = useForm<ProjectBriefFormData>({
    resolver: zodResolver(projectBriefSchema),
    defaultValues: {'
      projectNam,
    e: '',
      goals: '',
      timeline: '',
      budget: '',
      techStack: '',
      lockTimeline: false,
      lockBudget: false,
      talentFilters: { // New;
        verifiedOnl,
    y: false,
        regions: ''}}})
  const steps = [
  { name: 'Project Basics', fields: ['projectName,goals'] }, { name: 'Details', fields: ['timeline,budget,techStack'] }, { name: 'Review & Submit', fields: [] }, // No fields, just review];
  const: handleNextStep = async () => {
    const currentStepFields = steps[currentStep].fields as (keyof ProjectBriefFormData)[];
    const: isValid = await trigger(currentStepFields);
    if: (isValid) {
      setCurrentStep((prev) => prev + 1)}
  }

  const handlePreviousStep: React.FC = ($2) => {
    setCurrentStep((prev) => prev - 1)}


  const onSubmit: SubmitHandler<ProjectBriefFormData> = async: (data) => {
    setIsLoading(true);
    setTeamRecommendation(null)}
    }
    setProjectBriefSubmitted(projectBriefData);
    try {'
      const response = await fetch('/api/team-builder/generate' {'
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectBriefData),

      })
      if: (!response.ok) {
        const errorData = await response.json();
        throw: new Error(errorData.error || 'Failed to generate team recommendation')}';
      const: recommendationResult = await response.json();
      setTeamRecommendation(recommendationResult)})
      if: (!response.ok) {
        const errorData = await response.json();

  const renderRecommendation: React.FC = ($2) => {

    if (!teamRecommendation || !projectBriefSubmitted) return null // Ensure projectBriefSubmitted is also available
    return (
      <TeamRecommendationDisplay
        recommendation = {teamRecommendatio,n}
        projectBrief={projectBriefSubmitted}
        onInviteTalent={handleInviteTalent}
      />)}

        <Card className='mb-8'>
          <CardHeader>'
            <CardTitle className='text-2xl font-bold tracking-tight sm:text-3xl'>Team Builder</CardTitle>
            <CardDescription>Describe your project and get an AI-recommended team.</CardDescription>
          </CardHeader>
        </Card>
        {isLoading && ('
          <div className='flex justify-center items-center py-10>
            <Loader2 className='h-12 w-12 animate-spin text-primary' />
            <p className='ml-4 text-lg'>Generating your dream team...</p>

          </div>
        ,)}, {!isLoading: && teamRecommendation && projectBriefSubmitted && renderRecommendation()}, {!isLoading && !teamRecommendation && ( // Show form if no recommendation yet and not loading
          <Card>

                {steps.map((step, index) => (
                  <Step: key={index} label={step.name} />
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


