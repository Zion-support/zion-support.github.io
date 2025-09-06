<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
<<<<<<< HEAD
  GeneratedMilestone
  MilestoneInput
  useMilestoneGenerator
} from '@/hooks/useMilestoneGenerator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
=======
  GeneratedMilestone,
  MilestoneInput,
  useMilestoneGenerator,
} from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Loader2, Sparkles, Check } from 'lucide-react'; import { Badge } from '@/components/ui/badge'
import { format, parseISO } from 'date-fns'
interface MilestoneSuggestionsProps {
  project_name: string;
  scope_summary: string;
  start_date: Date; import React, { useState } from 'react';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks / useMilestoneGenerator';
import { Loader2, Sparkles, Check } from 'lucide-react';
import { Badge } from '@/components / ui / badge';
interface MilestoneSuggestionsProps {
  projectName: string
  scopeSummary: string
  startDate: Date
<<<<<<< HEAD
  endDate?: Date
  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void
}
=======
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export function MilestoneSuggestions({
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {;
  GeneratedMilestone,;
  MilestoneInput,;
  useMilestoneGenerator,;
} from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react';import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

interface MilestoneSuggestionsProps {;
  projectName: string;
  scopeSummary: string;
  startDate: Date;import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


}

export function MilestoneSuggestions(): any ({;
  projectName,;
  scopeSummary,;
  startDate,;
  endDate,;
  projectType,;
  onMilestonesGenerated,;
}: MilestoneSuggestionsProps) {;
  const { generateMilestones, generatedMilestones, isGenerating } =;
    useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleGenerateMilestones = async () => {;
    const input: MilestoneInput = {;
      scope: `${projectName}: ${scopeSummary}`,;
      startDate: startDate && startDate.toISOString(),;
      endDate: endDate ? endDate && endDate.toISOString() : null,;
      projectType: projectType || 'Other',;
    };

    const milestones = await generateMilestones(input);

    if (milestones && milestones.length > 0) {;
      setShowSuggestions(true);
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);      }  projectName: string,;
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

}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator(),
  const [ showSuggestions, setShowSuggestions ] = useState(false),


      }
    }
  };



=======
      return format (parseISO (date_string), 'MMM dd, yyyy');
      return date_string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  }

  return (

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  };


=======
import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Loader2, Sparkles, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge',;
import { format, parseISO } from 'date-fns',;
interface MilestoneSuggestionsProps {;
  projectName: string,;
  scopeSummary: string,;
  startDate: Date,;
  endDate?: Date,;
  projectType: string,;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
<<<<<<< HEAD
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

=======
<<<<<<< HEAD
  const { generateMilestones, generatedMilestones, isGenerating } =
    useMilestoneGenerator()
  const [showSuggestions, setShowSuggestions] = useState(false)
=======
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      projectType: projectType || 'Other',
    }
    const milestones = await generateMilestones(input)
    if (milestones.length > 0) {
      setShowSuggestions(true)
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones) }  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}



  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
        onMilestonesGenerated(milestones)
      }
    }
  }
  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
      return dateString
    }
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      projectType: projectType || "Other"
    },

    const milestones = await generateMilestones(input),
    
    if (milestones.length > 0) {
      setShowSuggestions(true),
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)
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
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);
      }
    }
  };
  const formatDate = (dateString: string) => {;
    try {;
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button


          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}

          className="w-full"
        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating milestones...
            </>
          ) : (
            <>

              <Sparkles className="mr-2 h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              Suggest Project Milestones with AI
            </>
          )}
        </Button>
      )}
<<<<<<< HEAD
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>          <CardHeader className="pb-3">
=======
<<<<<<< HEAD

          <CardHeader className="pb-3">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
          <CardHeader className="pb-3">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        AI Suggested
                      </Badge>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>

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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
<<<<<<< HEAD
=======





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
=======
<<<<<<< HEAD

              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
    </div>
  )
}
<Button variant="outline" onClick={
  handleGenerateMilestones
}> {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>)
}</Button>)
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) "
<<<<<<< HEAD
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>)
}</div>)
}"}
=======
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) 
}"};
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
