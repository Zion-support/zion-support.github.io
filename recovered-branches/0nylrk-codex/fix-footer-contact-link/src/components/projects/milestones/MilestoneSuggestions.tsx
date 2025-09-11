


<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check  } from 'lucide-react';
import { Badge  } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
interface MilestoneSuggestionsProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}

export function MilestoneSuggestions({;
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date;
  projectType: string

  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}
export function MilestoneSuggestions({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      scope: `${projectName}: ${scopeSummary}`
      startDate: startDate.toISOString()
      endDate: endDate ? endDate.toISOString() : null
      projectType: projectType |"Other"
    }
    const milestones = await generateMilestones(input);
<<<<<<< HEAD
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
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}

export function MilestoneSuggestions(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones(input),
    
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (milestones.length > 0) {
      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate && startDate.toISOString(),;
      endDate: endDate ? endDate && endDate.toISOString() : null,;
      projectType: projectType || "Other";
    };
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const milestones = await generateMilestones(input);

    if (milestones && milestones.length > 0) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setShowSuggestions(true);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Button} from '@/components / ui / button';
import {GeneratedMilestone, MilestoneInput, useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Loader2, Sparkles, Check} from 'lucide-react';
import {Badge} from '@/components / ui / badge';
import {format, parseISO} from 'date - fns';
interface MilestoneSuggestionsProps {
  project_name: string,
  scope_summary: string,
  start_date: Date,
  end_date?: Date;
  project_type: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}
export /**
 * MilestoneSuggestions - Function description
 */
function MilestoneSuggestions() {
  const { generate_milestones, generated_milestones, is_generating } = useMilestoneGenerator ();
  const [show_suggestions, setShowSuggestions] = useState (false);
;
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${project_name}: ${scope_summary}`,
      start_date: start_date.toISOString (),
      end_date: end_date ? end_date.toISOString () : null,
      project_type: project_type || "Other";
    }
;
    const milestones = await generate_milestones (input);
;
    // Check condition
if ( {) {
  $2
}
      setShowSuggestions (true);
      // Check condition
if ( {) {
  $2
}
        onMilestonesGenerated (milestones);
      }
    }
  }
;
  const format_date = (date_string: string) =>: any {
<<<<<<< HEAD
    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    try {
      return format (parseISO (date_string), 'MMM dd, yyyy');
    } catch (error) {

  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const formatDate = (dateString: string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;

<<<<<<< HEAD
<<<<<<< HEAD



    }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4">;
      {!showSuggestions && (;
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
<<<<<<< HEAD
<<<<<<< HEAD
    }
  },

  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;


<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
          <CardHeader className="pb-3">;
            <CardTitle className="text-lg flex items-center">;
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;
              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-3">;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>
  )
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
}
;
<<<<<<< HEAD
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
