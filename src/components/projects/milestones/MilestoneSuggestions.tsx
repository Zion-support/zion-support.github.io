<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge  } from '@/components/ui/badge';
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  GeneratedMilestone,
  MilestoneInput,
  useMilestoneGenerator,;
} from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import { format, parseISO } from 'date-fns';
interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
<<<<<<< HEAD
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}

=======
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  GeneratedMilestone
  MilestoneInput
  useMilestoneGenerator
} from '@/hooks/useMilestoneGenerator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Sparkles, Check } from 'lucide-react'; import { Badge } from '@/components/ui/badge'
import { format, parseISO } from 'date-fns'
interface MilestoneSuggestionsProps {
  projectName: string
  scopeSummary: string
  startDate: Date; import React, { useState } from 'react'
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator'
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
interface MilestoneSuggestionsProps {
  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date
  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export function MilestoneSuggestions({
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
<<<<<<< HEAD
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleGenerateMilestones = null;
=======
  const { generateMilestones, generatedMilestones, isGenerating } =
    useMilestoneGenerator()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`
      startDate: startDate.toISOString()
      endDate: endDate ? endDate.toISOString() : null
      projectType: projectType |'Other'
    }
    const milestones = await generateMilestones(input)
    if (milestones.length > 0) {
      setShowSuggestions(true)
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones) }  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date
  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}
export function MilestoneSuggestions({
  projectName
  scopeSummary
  startDate
  endDate
  projectType
  onMilestonesGenerated
}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator()
  const [ showSuggestions, setShowSuggestions ] = useState(false)
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`
        onMilestonesGenerated(milestones)
=======
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}

export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated,
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } =
    useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || 'Other',
    };

    const milestones = await generateMilestones(input);

    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }
  }
  const formatDate = (dateString: string,) => {
    try {
<<<<<<< HEAD
      return format(parseISO(dateString), 'MMM dd, yyyy')
      return dateString
=======
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='space-y-4'>
      {!showSuggestions && (
        <Button
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
          className='w-full'        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />              Generating milestones...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />              Suggest Project Milestones with AI
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
=======
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              Generating milestones...
            </>
          ) : (
            <>
<<<<<<< HEAD
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />
=======
              <Sparkles className='mr-2 h-4 w-4' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              Suggest Project Milestones with AI
            </>
          )}
        </Button>
      )}
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
<<<<<<< HEAD
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
=======
              <Sparkles className='h-5 w-5 mr-2 text-primary' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>
                  <div className='flex items-center justify-between mb-1'>
                    <div className='font-medium flex items-center'>                      {milestone.title}
                      <Badge variant='secondary' className='ml-2 text-xs'>
                        AI Suggested
                      </Badge>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
<<<<<<< HEAD
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
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
=======
                  <div className='flex justify-between items-center mt-2 text-sm'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
<<<<<<< HEAD
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
=======

              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                These milestones will be added to your contract
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
<<<<<<< HEAD
  )
}
<Button variant="outline" onClick={
  handleGenerateMilestones
}> {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>)
}</Button>)
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) "
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>)
}</div>)
}"}
=======
  );

};
<Button variant="outline" onClick={;
  handleGenerateMilestones ;
}> {";
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>) ;
}</Button>) ;
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) ;
}</div>) ;
}"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
