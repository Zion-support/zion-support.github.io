<<<<<<< HEAD
=======
<<<<<<< HEAD
projectName: string,
=======



<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check  } from 'lucide-react';
import { Badge  } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
interface MilestoneSuggestionsProps {
<<<<<<< HEAD
  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date,
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}

  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date;
  projectType: string

  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}
export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator($2);
  const [showSuggestions, setShowSuggestions] = useState($2);
  const handleGenerateMilestones = $2;
      startDate: startDate.toISOString($2);
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones($2);
    if (milestones.length > 0) {
      setShowSuggestions($2);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)
      }
    }
  },

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  projectName: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  scopeSummary: string,
  startDate: Date,
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;

}

export function MilestoneSuggestions({;
<<<<<<< HEAD
import React, { useState } from 'react';

=======
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from 'react',;

import { Button } from '@/components/ui/button',;
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Loader2, Sparkles, Check } from 'lucide-react',;
import { Badge } from '@/components/ui/badge',;

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
  projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date;
  projectType: string

  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}
export function MilestoneSuggestions({
<<<<<<< HEAD
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {

      scope: `${projectName}: ${scopeSummary}`
      startDate: startDate.toISOString()
      endDate: endDate ? endDate.toISOString() : null
      projectType: projectType |"Other"
    }
    const milestones = await generateMilestones(input);
=======
=======
import {Button} from '@/components/ui/button';
import {GeneratedMilestone, MilestoneInput, useMilestoneGenerator} from '@/hooks/useMilestoneGenerator';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Loader2, Sparkles, Check} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {format, parseISO} from 'date-fns';

interface MilestoneSuggestionsProps {;
  projectName: string,;
  scopeSummary: string,;
  startDate: Date,;
  endDate?: Date;
  projectType: string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
export function MilestoneSuggestions() { return null; }

      projectType: projectType |"Other"
    }
    const milestones = await generateMilestones(input);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,"
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones(input),
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (milestones.length > 0) {

      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)
<<<<<<< HEAD
  };

      }
    }
  }
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  }
  };
=======

  };

<<<<<<< HEAD
  }
  };

  };

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;`
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate && startDate.toISOString(),;
<<<<<<< HEAD
=======
      endDate: endDate ? endDate && endDate.toISOString() : null,;
      projectType: projectType || "Other";
    };
<<<<<<< HEAD
    const milestones = await generateMilestones(input);
    if (milestones && milestones.length > 0) {;
      setShowSuggestions(true);
  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate.toISOString(),;
      endDate: endDate ? endDate.toISOString() : null,;
      projectType: projectType || "Other";
    },;
    const milestones = await generateMilestones(input),;
    if (milestones.length > 0) {;
      setShowSuggestions(true),;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

      setShowSuggestions(true);
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);
      }
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Button} from '@/components / ui / button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
  const format_date = (date_string: string) =>: any {
    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const formatDate = (dateString: string) => {;
    try {;'
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;

<<<<<<< HEAD



    }
  }
=======
    }
  }

  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (

    <div className="space-y-4">;
      {!showSuggestions && (;
        <Button"
          variant="outline"
          onClick={handleGenerateMilestones}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;
<<<<<<< HEAD
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


<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {showSuggestions && generatedMilestones.length > 0 && (
<<<<<<< HEAD
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
=======
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
>>>>>>> merged-prs-20250907-203621
                      </Badge>
                    </div>"
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
<<<<<<< HEAD
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
=======
                  </div>"
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>"
>>>>>>> merged-prs-20250907-203621
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
<<<<<<< HEAD
              ))}
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract
=======
              ))}"
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">"
                <Check className="h-4 w-4 mr-1 text-green-500" />

>>>>>>> merged-prs-20250907-203621
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
    </div>
  )
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
)}
        </Button>;
      )}
      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          )}
        </Button>;
      )}
      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          <CardContent>;"
            <div className="space-y-3">;
<<<<<<< HEAD
=======
              {generatedMilestones.map((milestone, index) => (;
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;
                  <div className="flex items-center justify-between mb-1">;
                    <div className="font-medium flex items-center">;
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;
                    <div className="text-sm text-muted-foreground">;
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
              </div>;
            </div>;
          </CardContent>;

    </div>
  )
}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  );
}
;
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
=======

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
