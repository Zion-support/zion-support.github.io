<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function MilestoneSuggestions({;
import React, { useState } from 'react';
projectName;
  scopeSummary;
  startDate;
  endDate;
<<<<<<< HEAD
<<<<<<< HEAD
  projectType;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',;
=======
  projectType;import React, { useState } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  projectType;import React, { useState } from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  projectType;

import React, { useState } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from '@/components/ui/button',;
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Loader2, Sparkles, Check } from 'lucide-react',;
import { Badge } from '@/components/ui/badge',;
=======

'
import React, { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
import { Loader2, Sparkles, Check } from 'lucide-react',;'
import { Badge } from '@/components/ui/badge',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { format, parseISO } from 'date-fns',;
interface MilestoneSuggestionsProps {;
  projectName: string,;
  scopeSummary: string,;
  startDate: Date,;
  endDate?: Date,;
  projectType: string,;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
export function MilestoneSuggestions() { return null; }
=======

projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date;
  projectType: string

  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}
export function MilestoneSuggestions({
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
<<<<<<< HEAD

  const handleGenerateMilestones = async () => {}
    const input: MilestoneInput = {}
      scope: `${projectName}: ${scopeSummary}`
      startDate: startDate.toISOString()
      endDate: endDate ? endDate.toISOString() : null;
      projectType: projectType |"Other"
    }
    const milestones = await generateMilestones(input);

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,"
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones(input),
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (milestones.length > 0) {
=======
        if (milestones.length > 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        if (milestones.length > 0) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    if (milestones.length > 0) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)

  };

  }
  };

  };

;
export function MilestoneSuggestions({;
  projectName,;
  scopeSummary,;
  startDate,;
  endDate,;
  projectType,;
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),;
  const [showSuggestions, setShowSuggestions] = useState(false),;

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;`
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate && startDate.toISOString(),;
endDate: endDate ? endDate && endDate.toISOString() : null,;
projectType: projectType || "Other"
};
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setShowSuggestions(true);

      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);
      }
    }
}import {Button} from '@/components / ui / button';
import {GeneratedMilestone, MilestoneInput, useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Loader2, Sparkles, Check} from 'lucide-react';
import {Badge} from '@/components / ui / badge';
import {format, parseISO} from 'date - fns';
interface MilestoneSuggestionsProps {}
  project_name: string,
  scope_summary: string,
  start_date: Date,
  end_date?: Date;
  project_type: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
export /**;
 * MilestoneSuggestions - Function description;
 */
function MilestoneSuggestions() {}
  const { generate_milestones, generated_milestones, is_generating } = useMilestoneGenerator ();
  const [show_suggestions, setShowSuggestions] = useState (false);
;
  const handleGenerateMilestones = async () => {}
    const input: MilestoneInput = {}`
      scope: `${project_name}: ${scope_summary}`,
      start_date: start_date.toISOString (),
      end_date: end_date ? end_date.toISOString () : null,"
      project_type: project_type || "Other";
    }
;
    const milestones = await generate_milestones (input);
;
    // Check condition;
if ( {) {}
  $2;
}
      setShowSuggestions (true);
      // Check condition;
if ( {) {}
  $2;
}
        onMilestonesGenerated (milestones);
      }
    }
  }
;
const format_date = (date_string: string) =>: any {

    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {

  };

  const formatDate = (dateString: string) => {;
    try {;'
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;

}

  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
=======
export function MilestoneSuggestions({;
import React, { useState } from 'react';'

  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;import React, { useState } from 'react',;
  projectType;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
=======
  }

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="space-y-4">;
      {!showSuggestions && (;
        <Button"
          variant="outline"
          onClick={handleGenerateMilestones}
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
=======

          {isGenerating ? (;
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;

          )}
        </Button>
      )}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>"
          <CardHeader className="pb-3">"
            <CardTitle className="text-lg flex items-center">"
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              AI-Suggested Milestones;
            </CardTitle>
          </CardHeader>
          <CardContent>"
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => ("
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
                  <div className="flex items-center justify-between mb-1">"
                    <div className="font-medium flex items-center">
                      {milestone.title}"
                      <Badge variant="secondary" className="ml-2 text-xs">
                        AI Suggested;
                      </Badge>
                    </div>"
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>"
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>"
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}"
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">"
                <Check className="h-4 w-4 mr-1 text-green-500" />
These milestones will be added to your contract;
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======

        <Card>;"
          <CardHeader className="pb-3">;"
            <CardTitle className="text-lg flex items-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;
              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;
{generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;
                  <div className="flex items-center justify-between mb-1">;
                    <div className="font-medium flex items-center">;
{milestone && milestone.title}                      <Badge variant="secondary" className="ml-2 text-xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;"
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
<Check className="h-4 w-4 mr-1 text-green-500" />;                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;

</Card>)}
    </div>);
}

=======
</div>
  )
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </div>;
  );
}
;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</CardContent>"
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>)"
}</div>) "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
