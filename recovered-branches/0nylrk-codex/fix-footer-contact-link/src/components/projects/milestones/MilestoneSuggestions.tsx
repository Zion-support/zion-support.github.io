<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check  } from 'lucide-react';
import { Badge  } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
interface MilestoneSuggestionsProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
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
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',;
=======
  projectType;import React, { useState } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  projectType;import React, { useState } from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




  projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
export function MilestoneSuggestions() { return null; }
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);





  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
<<<<<<< HEAD

=======
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {}
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleGenerateMilestones = async () => {}
    const input: MilestoneInput = {}
      scope: `${projectName}: ${scopeSummary}`
      startDate: startDate.toISOString()
      endDate: endDate ? endDate.toISOString() : null;
      projectType: projectType |"Other"
    }
    const milestones = await generateMilestones(input);

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,"
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones(input),
<<<<<<< HEAD
<<<<<<< HEAD
    
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (milestones.length > 0) {
=======
        if (milestones.length > 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        if (milestones.length > 0) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);
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



    if (milestones.length > 0) {}
      setShowSuggestions(true),
      if (onMilestonesGenerated) {}
        onMilestonesGenerated(milestones)


  }
  };

  };


;
export function MilestoneSuggestions() { return null; }
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),;
  const [showSuggestions, setShowSuggestions] = useState(false),;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;`
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate && startDate.toISOString(),;
<<<<<<< HEAD
      endDate: endDate ? endDate && endDate.toISOString() : null,;
      projectType: projectType || "Other"
};
=======
      endDate: endDate ? endDate && endDate.toISOString() : null,;"
      projectType: projectType || "Other";
    };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setShowSuggestions(true);
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);
      }
    }
<<<<<<< HEAD
  }import {Button} from '@/components / ui / button';
import {GeneratedMilestone, MilestoneInput, useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Loader2, Sparkles, Check} from 'lucide-react';
import {Badge} from '@/components / ui / badge';
=======
'
import {Button} from '@/components / ui / button';'
import {GeneratedMilestone, MilestoneInput, useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';'
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';'
import {Loader2, Sparkles, Check} from 'lucide-react';'
import {Badge} from '@/components / ui / badge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  const format_date = (date_string: string) =>: any {

    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {
=======
  const format_date = (date_string: string) =>: any {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };

  const formatDate = (dateString: string) => {;
    try {;'
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;

<<<<<<< HEAD
    }

  },
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======



    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }

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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;
                  <div className="flex items-center justify-between mb-1">;
                    <div className="font-medium flex items-center">;
                      {milestone && milestone.title}                      <Badge variant="secondary" className="ml-2 text-xs">;
=======
"
                      <Badge variant="secondary" className="ml-2 text-xs">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        AI Suggested;
                      </Badge>;
                    </div>;"
                    <div className="text-sm text-muted-foreground">;
<<<<<<< HEAD
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
=======

                These milestones will be added to your contract;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </div>;
            </div>;
          </CardContent>;

<<<<<<< HEAD
        </Card>)}
    </div>);
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>;
  );
}
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        </Card>;
      )}
    </div>;
  ),; const handleGenerateMilestones = async () => {
  const input: MilestoneInput = {
  scope: `$ {
  projectName 
}: $ {
  scopeSummary 
}`;
startDate: startDate.toISOString ();
endDate: endDate ? endDate.toISOString () : null;
}
};
<Button variant="outline" onClick= {
  handleGenerateMilestones 
}> {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>) 
}</Button>) 
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) 
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
