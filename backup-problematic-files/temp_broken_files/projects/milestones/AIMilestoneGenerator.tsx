
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-medium flex items-center">;
          <Sparkles className="w-5 h-5 mr-2 text-primary" />;
          AI Milestone Generator;
        </h3>;
{isGenerating ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating...;
            </>;

            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;

        <Card>;
          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;

                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className="mr-2 w-4 h-4 rounded text-primary";
                      />;
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">;
                        <div className="flex items-center">;

                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;

                      }}
                      className="mr-2";
                    >;
                      <Plus className="h-4 w-4" />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className="pl-6 space-y-2">;

            </Accordion>;
          </CardContent>;
        </Card>;
      )}
    </div>;
