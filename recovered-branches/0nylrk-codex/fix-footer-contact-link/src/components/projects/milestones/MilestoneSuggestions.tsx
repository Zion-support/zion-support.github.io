import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check  } from 'lucide-react';
import { Badge  } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
interface MilestoneSuggestionsProps {


  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
pr-12325
}

export function MilestoneSuggestions({;
import React, { useState } from 'react';
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}


export function MilestoneSuggestions({;
import React, { useState } from 'react';'

  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;import React, { useState } from 'react',;
  projectType;

  return (
    <div className="space-y-4">;
      {!showSuggestions && (;
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}

          disabled={isGenerating || !scopeSummary || !startDate}
          className="w-full">;
}
  },

  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating milestones...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Suggest Project Milestones with AI
            </>
          )}
        </Button>
      )}

          disabled={isGenerating || !scopeSummary || !startDate}
          className="w-full">;

import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Loader2, Sparkles, Check } from 'lucide-react',;
import { Badge } from '@/components/ui/badge',;
import { format, parseISO } from 'date-fns',;
;
interface MilestoneSuggestionsProps {;
  projectName:string,;
  scopeSummary:string,;
  startDate:Date,;
  endDate?:Date,;
  projectType:string,;
  onMilestonesGenerated?:(milestones:GeneratedMilestone[]) => void;
}
;
export function MilestoneSuggestions({;
  projectName,;
  scopeSummary,;
  startDate,;
  endDate,;
  projectType,;
  onMilestonesGenerated;
} MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),;
  const [showSuggestions, setShowSuggestions] = useState(false),;
;
  const handleGenerateMilestones = async () => {;
    const input:MilestoneInput = {;
      scope:`${projectName} ${scopeSummary}`,;
      startDate:startDate.toISOString(),;
      endDate:endDate ? endDate.toISOString() :null,;
      projectType:projectType || "Other";
    },;
;
    const milestones = await generateMilestones(input),;
    ;
    if (milestones.length > 0) {;
      setShowSuggestions(true),;
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones),;
      }
    }
  },;
;
  const formatDate = (dateString:string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy'),;
    } catch (error) {;
      return dateString,;
    }
  },;
;
  return (;
    <div className="space-y-4">;
      {!showSuggestions && (;
        <Button;
          variant="outline";
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
          className="w-full";
        >;
          {isGenerating ? (;
          )}
        </Button>
      )}          {isGenerating ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;
          ) : (;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Suggest Project Milestones with AI;
            </>;

          )}
        </Button>;
      )}

          )}
        </Button>
      )}
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
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
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract
  }

  }

  return ('
    <div className="space-y-4">;"
</div>
        <Button;"
          variant="outline""
          onClick={handleGenerateMilestones}

          disabled={isGenerating || !scopeSummary || !startDate}"
          className="w-full">;"
</Button>
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
            </>;)
          ) : (;
            <>;"
              <Sparkles className="mr-2 h-4 w-4" />;"
</Sparkles>
            </>;
)
          )}
        </Button>;
        </Button>
        <Card>
</Card>"
          <CardHeader className="pb-3">"
</CardHeader>"
            <CardTitle className="text-lg flex items-center">"
</CardTitle>"
              <Sparkles className="h-5 w-5 mr-2 text-primary" />"
</Sparkles>
            </CardTitle>
          </CardHeader>
          <CardContent>
</CardContent>"
            <div className="space-y-3">"
</div>"
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
</div>"
                  <div className="flex items-center justify-between mb-1">"
</div>"
                    <div className="font-medium flex items-center">"
</div>"
                      <Badge variant="secondary" className="ml-2 text-xs">"
</Badge>

                      </Badge>
                    </div>"
                    <div className="text-sm text-muted-foreground">"
</div>
                    </div>

                  </div>"
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>""
                  <div className="flex justify-between items-center mt-2 text-sm">"
</div>
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>"
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">"
</div>"
                <Check className="h-4 w-4 mr-1 text-green-500" />"
</Check>

              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
)}
        </Button>;
      )}
      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
          ) :(;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Suggest Project Milestones with AI;
            </>;          )}
        </Button>;
      )}
;
      {showSuggestions && generatedMilestones.length > 0 && (;
        <Card>;
      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;        <Card>;
          <CardHeader className="pb-3">;
            <CardTitle className="text-lg flex items-center">;
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;
              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-3">;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;
                  <div className="flex items-center justify-between mb-1">;
                    <div className="font-medium flex items-center">;
                      {milestone && milestone.title}
{generatedMilestones.map((milestone, index) => (;
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;
                  <div className="flex items-center justify-between mb-1">;
                    <div className="font-medium flex items-center">;
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">;
                      {milestone && milestone.title}                      <Badge variant="secondary" className="ml-2 text-xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;
                    <div className="text-sm text-muted-foreground">;
                      Due: {formatDate(milestone && milestone.dueDate)}
                    </div>;
                  </div>;
                  <p className="text-sm text-muted-foreground">{milestone && milestone.description}</p>;
                  <div className="flex justify-between items-center mt-2 text-sm">;
                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;
                  </div>;
                </div>;
              ))}

              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;
                <Check className="h-4 w-4 mr-1 text-green-500" />;
return date_string;
    }
  }
;
  return (
    <div className="space - y-4">;
      {!show_suggestions && (
        <Button;
          variant="outline";
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope_summary || !start_date}
          className="w - full";
        >;
          {is_generating ? (
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Generating milestones...;
            </>) : (
            <>;
              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Suggest Project Milestones with AI;
            </>)}
        </Button>)}
      {show_suggestions && generated_milestones.length > 0 && (
        <Card>;
          <CardHeader className="pb - 3">;
            <CardTitle className="text - lg flex items - center">;
              <Sparkles className="h - 5 w - 5 mr - 2 text - primary" />;
              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="space - y-3">;
              {generated_milestones.map ((milestone, index) => (
                <div key={index} className="p - 3 border rounded - lg bg - muted / 10">;
                  <div className="flex items - center justify - between mb - 1">;
                    <div className="font - medium flex items - center">;
                      {milestone.title}
                      <Badge variant="secondary" className="ml - 2 text - xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;
                    <div className="text - sm text - muted - foreground">;
                      Due: {format_date (milestone.due_date)}
                    </div>;
                  </div>;
                  <p className="text - sm text - muted - foreground">{milestone.description}</p>;
                  <div className="flex justify - between items - center mt - 2 text - sm">;
                    <span > Estimated: {milestone.estimated_hours} hours</span>;
                  </div>;
                </div>))}
              <div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground">;
                <Check className="h - 4 w - 4 mr - 1 text - green - 500" />;

                      Due:{formatDate(milestone.dueDate)}
                    </div>;
                  </div>;
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>;
                  <div className="flex justify-between items-center mt-2 text-sm">;
                    <span>Estimated:{milestone.estimatedHours} hours</span>;
                  </div>;
                </div>;
              ))}
;
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;
                <Check className="h-4 w-4 mr-1 text-green-500" />;
                These milestones will be added to your contract;
                <Check className="h-4 w-4 mr-1 text-green-500" />;                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;

        </Card>)}
    </div>);
}

</div>
  )
}
    </div>;
  );
}
;

        </Card>;
      )}









  return (
    <div className="space-y-4">;"
</div>
        <Button;"
          variant="outline""
          onClick={handleGenerateMilestones}

          disabled={isGenerating || !scopeSummary || !startDate}"
          className="w-full">;"

            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
            </>;)
          ) : (;
              <Sparkles className="mr-2 h-4 w-4" />;"

            </>;
)
          )}
        <Card>
          <CardHeader className="pb-3">"
            <CardTitle className="text-lg flex items-center">"
              <Sparkles className="h-5 w-5 mr-2 text-primary" />"

          <CardContent>
            <div className="space-y-3">"
</div>"
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
                  <div className="flex items-center justify-between mb-1">"
                    <div className="font-medium flex items-center">"
                      <Badge variant="secondary" className="ml-2 text-xs">"

                    <div className="text-sm text-muted-foreground">"
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>""
                  <div className="flex justify-between items-center mt-2 text-sm">"
                    <span>Estimated: {milestone.estimatedHours} hours</span>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">"
                <Check className="h-4 w-4 mr-1 text-green-500" />"


        <Card>;
          <CardHeader className="pb-3">;"
            <CardTitle className="text-lg flex items-center">;"
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;"

          <CardContent>;
            <div className="space-y-3">;"
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;"
                  <div className="flex items-center justify-between mb-1">;"
                    <div className="font-medium flex items-center">;"
                      <Badge variant="secondary" className="ml-2 text-xs">;"

</Badge>

                      </Badge>;
                    </div>;"
                    <div className="text-sm text-muted-foreground">;"
                    </div>;

                  </div>;"
                  <p className="text-sm text-muted-foreground">{milestone && milestone.description}</p>;""
                  <div className="flex justify-between items-center mt-2 text-sm">;"
                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;"
                <Check className="h-4 w-4 mr-1 text-green-500" />;"

    </div>);
</Check>

              </div>;
            </div>;
          </CardContent>;
        </Card>)}
    </div>);

    </div>;
        </Card>;
    </div>;"
<Button variant="outline" onClick= {"
  handleGenerateMilestones;
}> {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>)"
}) 
}AI-Suggested Milestones   <CardContent> </div> </div>) ) 
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div>  )"
}</div>) "`;
pr-12325
</Loader2>
}</Button>) 
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) 
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) 
}
</CardContent>"
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>)"
}</div>) "

