<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  GeneratedMilestone,
  MilestoneInput,
  useMilestoneGenerator,;
} from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
<<<<<<< HEAD
import { Loader2, Sparkles, Check } from 'lucide-react';import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: Date;
=======
<<<<<<< HEAD
import { Loader2, Sparkles, Check } from 'lucide-react';
=======

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Loader2, Sparkles, Check } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

interface MilestoneSuggestionsProps {
<<<<<<< HEAD
<<<<<<< HEAD
  projectName: string;
  scopeSummary: string;
  startDate: Date;
=======
  projectName: string,
  scopeSummary: string,
  startDate: Date,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;

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
<<<<<<< HEAD
=======
    
    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
<<<<<<< HEAD
        onMilestonesGenerated(milestones);
=======
      startDate: startDate.toISOString(), endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
<<<<<<< HEAD
        onMilestonesGenerated(milestones);      }
=======
        onMilestonesGenerated(milestones)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        onMilestonesGenerated(milestones)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  };

  const formatDate = (dateString: string) => {
    try {
<<<<<<< HEAD
      return format(parseISO(dateString), 'MMM dd, yyyy');
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return format(parseISO(dateString), 'MMM dd, yyyy');
=======
      return format(parseISO(dateString), 'MMM dd, yyyy')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className='space-y-4'>
      {!showSuggestions && (
        <Button
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
          className='w-full'
        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />              Generating milestones...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />              Suggest Project Milestones with AI
=======
<<<<<<< HEAD
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  };


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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Generating milestones...
            </>
          ) : (
            <>
<<<<<<< HEAD
<<<<<<< HEAD
              <Sparkles className='mr-2 h-4 w-4' />
=======
              <Sparkles className="mr-2 h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Sparkles className="mr-2 h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Suggest Project Milestones with AI
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </>
          )}
        </Button>
      )}

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
<<<<<<< HEAD
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />
=======
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='space-y-3'>
=======
            <div className="space-y-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>
                  <div className='flex items-center justify-between mb-1'>
                    <div className='font-medium flex items-center'>
                      {milestone.title}
                      <Badge variant='secondary' className='ml-2 text-xs'>
                        AI Suggested
                      </Badge>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
<<<<<<< HEAD
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone.estimatedHours} hours</span>
=======
<<<<<<< HEAD
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-sm'>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <span>Estimated: {milestone.estimatedHours} hours</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>
              ))}

<<<<<<< HEAD
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />
=======
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                These milestones will be added to your contract
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

};
<Button variant="outline" onClick={;
  handleGenerateMilestones ;
}> {";
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating milestones... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Suggest Project Milestones with AI </>) ;
}</Button>) ;
}AI-Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) ;
}</div>) ;
<<<<<<< HEAD
}"
=======
}"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
