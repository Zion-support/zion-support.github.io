
              <Link to="/hiring-tracker">;
                <Kanban className="h-4 w-4 mr-2" /> Hiring Pipeline;
              </Link>;
            </Button>;

              <Link to="/post-job">;
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Job;
              </Link>;
            </Button>;
          </div>;
        </div>;

        {/* New Onboarding Steps */}
        <div className="mb-8">;
          <ClientOnboardingSteps />;
        </div>;

              <TabsContent value="all" className="mt-0">;
                <JobsList onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="new" className="mt-0">;
                <JobsList filter="new" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="in_progress" className="mt-0">;
                <JobsList filter="in_progress" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="filled" className="mt-0">;
                <JobsList filter="filled" onSelectJob={handleJobSelect} />;
              </TabsContent>;
              <TabsContent value="closed" className="mt-0">;
                <JobsList filter="closed" onSelectJob={handleJobSelect} />;
              </TabsContent>;
            </Tabs>;
          </div>;

          <div>;
            <div className="sticky top-4 space-y-6">;
              {/* Active Projects Card */}
              <ActiveProjectsCard />;

              {/* AI Talent Suggestions */}
              <div>;
                <h2 className="text-xl font-semibold mb-4 flex items-center">;
                  <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />;
                  AI Talent Suggestions;
                </h2>;

                  <div className="bg-muted/30 border rounded-lg p-6 text-center">;
                    <p className="text-muted-foreground">;
                      Select a job to see AI-matched talent suggestions;
                    </p>;
                  </div>;
                )}

