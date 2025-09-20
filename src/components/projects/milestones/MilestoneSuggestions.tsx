
import React from "react";

export function MilestoneSuggestions({projectName;
scopeSummary;
startDate;
endDate;
projectType;
onMilestonesGenerated}: MilestoneSuggestionsProps) {
<Button variant="outline" onClick={handleGenerateMilestones}> {"
<Button variant="outline" onClick={
  handleGenerateMilestones}> {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>)
<Button variant="outline" onClick={handleGenerateMilestones}> {";
isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>)
}</Button>)
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>)
}</div>)
}"}

