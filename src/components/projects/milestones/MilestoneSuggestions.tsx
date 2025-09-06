<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}

export function MilestoneSuggestions({
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);
=======
  projectName: string,
  scopeSummary: string,
  startDate: Date,
  endDate?: Date;
  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void
}

export function MilestoneSuggestions({
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
  onMilestonesGenerated

}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator(),
  const [ showSuggestions, setShowSuggestions ] = useState(false),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
<<<<<<< HEAD
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    };

    const milestones = await generateMilestones(input);
    
    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
<<<<<<< HEAD
        onMilestonesGenerated(milestones);
=======
      startDate: startDate.toISOString(), endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    };

    const milestones = await generateMilestones(input);
    
    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        onMilestonesGenerated(milestones)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }
  };

  const formatDate = (dateString: string) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      return format(parseISO(dateString), 'MMM dd, yyyy');
=======
      return format(parseISO(dateString), 'MMM dd, yyyy')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
            </>
          )}
        </Button>
      )}

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
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
                  </div>
                </div>
              ))}

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
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
