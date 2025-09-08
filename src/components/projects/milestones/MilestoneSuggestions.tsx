

  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;


  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button



          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}

        >
          {isGenerating ? (
            <>

              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>

            <div className='space-y-3'>
              {generatedMilestones.map((milestone, index) => (

                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>



                  <p className="text-sm text-muted-foreground">{milestone.description}</p>

                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}


              </div>
            </div>
          </CardContent>
        </Card>
      )}


