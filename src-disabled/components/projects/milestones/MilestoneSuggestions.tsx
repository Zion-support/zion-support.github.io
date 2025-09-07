<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface MilestoneSuggestionsProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======
interface MilestoneSuggestionsProps {

interface MilestoneSuggestionsProps {

  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void

<<<<<<< HEAD
=======


=======
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge  } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
<<<<<<< HEAD
interface MilestoneSuggestionsProps {
projectName: string;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  scopeSummary: string;
  startDate: Date;
  endDate?: Date;
  projectType: string;
<<<<<<< HEAD
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

    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function MilestoneSuggestions({
import React, { useState } from 'react';
=======
interface MilestoneSuggestionsProps {}
  projectName: string;
  scopeSummary: string;
  startDate: Date; import React, { useState } from 'react''
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator''
import { Loader2, Sparkles, Check } from 'lucide-react''
import { Badge } from '@/components/ui/badge'
interface MilestoneSuggestionsProps {};
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void;
export function MilestoneSuggestions({';
import React, { useState } from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from '@/components/ui/button';
import {;
  GeneratedMilestone,;
  MilestoneInput,;
  useMilestoneGenerator,;'
} from '@/hooks/useMilestoneGenerator';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';'
import { Loader2, Sparkles, Check } from 'lucide-react';import { Badge } from '@/components/ui/badge';'
import { format, parseISO } from 'date-fns';

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Loader2, Sparkles, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge',;
import { format, parseISO } from 'date-fns',;
interface MilestoneSuggestionsProps {;
  projectName: string,;
=======
interface MilestoneSuggestionsProps {;
  projectName: string;
  scopeSummary: string;'
  startDate: Date;import React, { useState } from 'react';'
import { Button } from '@/components/ui/button';'
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator';'
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
      endDate: endDate ? endDate && endDate.toISOString() : null,;'
      projectType: projectType || 'Other',;
    };

    const milestones = await generateMilestones(input);

    if (milestones && milestones.length > 0) {;
      setShowSuggestions(true);
      if (onMilestonesGenerated) {;
        onMilestonesGenerated(milestones);      }  projectName: string,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  scopeSummary: string,;
  startDate: Date,;
  endDate?: Date,;
  projectType: string,;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;
}

<<<<<<< HEAD
=======
export function MilestoneSuggestions(): any ({;
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
<<<<<<< HEAD

}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator(),
  const [ showSuggestions, setShowSuggestions ] = useState(false),

<<<<<<< HEAD
=======

=======
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleGenerateMilestones = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
    }
  };

<<<<<<< HEAD
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return format (parseISO (date_string), 'MMM dd, yyyy');
      return date_string;
    }

  return (

<<<<<<< HEAD
  const formatDate = (dateString: string) => {
    try {
<<<<<<< HEAD
=======
  const formatDate = (dateString: string) => {}
    try {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {}
      return dateString;
    }
  };

}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function MilestoneSuggestions({
=======
export function MilestoneSuggestions({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectName,
  scopeSummary,
  startDate,
  endDate,
<<<<<<< HEAD
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
<<<<<<< HEAD
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
=======
  projectType,;
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {}
  const handleGenerateMilestones = async () => {}
    const input: MilestoneInput = {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    },

=======
return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="space-y-4">
      {!showSuggestions && (
<<<<<<< HEAD
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
=======
        <Button;
"
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          className="w-full"
        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
=======
=======
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
          className='w-full'        >
          {isGenerating ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Generating milestones...
            </>
          ) : (
            <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Sparkles className="mr-2 h-4 w-4" />
<<<<<<< HEAD
              Suggest Project Milestones with AI
            </>
=======

<<<<<<< HEAD
=======
<Sparkles className='mr-2 h-4 w-4' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              Suggest Project Milestones with AI
=======


              Suggest Project Milestones with AI;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </>
          disabled={isGenerating || !scopeSummary || !startDate}'
          className='w-full'>;
          {isGenerating ? (;
            <>;'
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />              Generating milestones...;
            </>;
          ) : (;
            <>;'
              <Sparkles className='mr-2 h-4 w-4' />              Suggest Project Milestones with AI;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
          variant="outline";
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}"
          className="w-full";
        >;
          {isGenerating ? (;
            <>;"
=======
              <Sparkles className="mr-2 h-4 w-4" />"

              <Sparkles className="mr-2 h-4 w-4" />



<Sparkles className='mr-2 h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
              Suggest Project Milestones with AI
            </>
          disabled={isGenerating || !scopeSummary || !startDate}
          className='w-full'>;
          {isGenerating ? (;
            <>;
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />              Generating milestones...;
            </>;
          ) : (;
            <>;
              <Sparkles className='mr-2 h-4 w-4' />              Suggest Project Milestones with AI;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
          variant="outline";
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
          className="w-full";
        >;
          {isGenerating ? (;
            <>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;
          ) : (;
<<<<<<< HEAD
            <>;'"
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />;
              Suggest Project Milestones with AI;
            </>;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          )}
        </Button>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardHeader className="pb-3">

<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
=======
=======
            <>;
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />;
              Suggest Project Milestones with AI;
            </>;
          )}
        </Button>
      )}
          <CardHeader className="pb-3">"
            <CardTitle className="text-lg flex items-center">"
              <Sparkles className="h-5 w-5 mr-2 text-primary" />"
              <Sparkles className="mr-2 h-4 w-4" />
              Suggest Project Milestones with AI
            </>
          )}
        </Button>;
      )}

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
<CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              AI-Suggested Milestones
=======
"
            <CardTitle className="text-lg flex items-center">"
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              AI-Suggested Milestones;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <div className="space-y-3">
=======
<div className='space-y-3'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
=======
"
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => ("
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
                  <div className="flex items-center justify-between mb-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <div className="font-medium flex items-center">
                      {milestone.title}"
                      <Badge variant="secondary" className="ml-2 text-xs">
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                        AI Suggested
=======
                        AI Suggested;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      </Badge>
                    </div>"
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
<<<<<<< HEAD
                    <div className='text-sm text-muted-foreground'>
=======
                  </div>
"
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
            <div className="space-y-3">

=======
origin/cursor/automate-test-improve-and-merge-code-2533
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">"


            <div className="space-y-3">
<div className='space-y-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
                  <div className="flex items-center justify-between mb-1">"
                    <div className="font-medium flex items-center">"
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">"
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">"
                    <div className='text-sm text-muted-foreground'>
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
            <div className="space-y-3">"
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
                  <div className="flex items-center justify-between mb-1">"
                    <div className="font-medium flex items-center">"
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">"
                        AI Suggested
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">"
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>"
                  <div className="flex justify-between items-center mt-2 text-sm">"
            <div className="space-y-3">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
=======
"
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="flex justify-between items-center mt-2 text-sm">
=======
=======
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-sm'>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <Check className="h-4 w-4 mr-1 text-green-500" />
=======
<div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                These milestones will be added to your contract
=======




"
                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">"
                <Check className="h-4 w-4 mr-1 text-green-500" />"

              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
<div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />
origin/cursor/automate-test-improve-and-merge-code-2533
                These milestones will be added to your contract
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
        <Card>;'
          <CardHeader className='pb-3'>;'
            <CardTitle className='text-lg flex items-center'>;'
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;'"
            <div className='space-y-3'>          <CardHeader className="pb-3">;"
            <CardTitle className="text-lg flex items-center">;"
=======
      {showSuggestions && generatedMilestones && generatedMilestones.length > 0 && (;
        <Card>;
          <CardHeader className='pb-3'>;
            <CardTitle className='text-lg flex items-center'>;
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='space-y-3'>          <CardHeader className="pb-3">;
            <CardTitle className="text-lg flex items-center">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;
              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
<<<<<<< HEAD
          <CardContent>;'
            <div className='space-y-3'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;'
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>;'
                  <div className='flex items-center justify-between mb-1'>;'
=======
          <CardContent>;
            <div className='space-y-3'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>;
                  <div className='flex items-center justify-between mb-1'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <div className='font-medium flex items-center'>                      {milestone && milestone.title}'
                      <Badge variant='secondary' className='ml-2 text-xs'>;
                        AI Suggested;
                      </Badge>;
<<<<<<< HEAD
                    </div>;'
                    <div className='text-sm text-muted-foreground'>;
                      Due: {formatDate(milestone && milestone.dueDate)}
                    </div>;
                  </div>;'
                  <p className='text-sm text-muted-foreground'>;
                    {milestone && milestone.description}
                  </p>;'
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;"
                  <p className="text-sm text-muted-foreground">{milestone && milestone.description}</p>;"
                  <div className="flex justify-between items-center mt-2 text-sm">;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;"
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;"
                  <div className="flex items-center justify-between mb-1">;"
                    <div className="font-medium flex items-center">;
                      {milestone && milestone.title}"
                      <Badge variant="secondary" className="ml-2 text-xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;"
                    <div className="text-sm text-muted-foreground">;
                      Due: {formatDate(milestone && milestone.dueDate)}
                    </div>;
                  </div>;"
                  <p className="text-sm text-muted-foreground">{milestone && milestone.description}</p>;"
=======
                    </div>;
                    <div className='text-sm text-muted-foreground'>;
                      Due: {formatDate(milestone && milestone.dueDate)}
                    </div>;
                  </div>;
                  <p className='text-sm text-muted-foreground'>;
                    {milestone && milestone.description}
                  </p>;
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;
                  <p className="text-sm text-muted-foreground">{milestone && milestone.description}</p>;
                  <div className="flex justify-between items-center mt-2 text-sm">;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <div key={index} className="p-3 border rounded-lg bg-muted/10">;
                  <div className="flex items-center justify-between mb-1">;
                    <div className="font-medium flex items-center">;
                      {milestone && milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;
                    <div className="text-sm text-muted-foreground">;
                      Due: {formatDate(milestone && milestone.dueDate)}
                    </div>;
                  </div>;
                  <p className="text-sm text-muted-foreground">{milestone && milestone.description}</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <div className="flex justify-between items-center mt-2 text-sm">;
                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;
                  </div>;
                </div>;
              ))}
<<<<<<< HEAD
'
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>;'"
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;"
=======
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>;
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Check className="h-4 w-4 mr-1 text-green-500" />;
                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      )}
    </div>;
  );
<<<<<<< HEAD
'
    <div className='space - y-4'>;
      {!show_suggestions && (
        <Button;'
          variant='outline';
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope_summary || !start_date}'
          className='w - full'        >;
          {is_generating ? (
            <>;'
              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />              Generating milestones...;
            </>) : (
            <>;'
              <Sparkles className='mr - 2 h - 4 w - 4' />              Suggest Project Milestones with AI;"
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
          variant="outline";
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope_summary || !start_date}"
          className="w - full";
        >;
          {is_generating ? (
            <>;"
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Generating milestones...;
            </>) : (
            <>;'"
=======
    <div className='space - y-4'>;
      {!show_suggestions && (
        <Button;
          variant='outline';
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope_summary || !start_date}
          className='w - full'        >;
          {is_generating ? (
            <>;
              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />              Generating milestones...;
            </>) : (
            <>;
              <Sparkles className='mr - 2 h - 4 w - 4' />              Suggest Project Milestones with AI;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Sparkles className='mr - 2 h - 4 w - 4' />              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Suggest Project Milestones with AI;
            </>)}
        </Button>)}
      {show_suggestions && generated_milestones.length > 0 && (
<<<<<<< HEAD
        <Card>;'
          <CardHeader className='pb - 3'>;'
            <CardTitle className='text - lg flex items - center'>;'
              <Sparkles className='h - 5 w - 5 mr - 2 text - primary' />              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;'"
            <div className='space - y-3'>          <CardHeader className="pb - 3">;"
            <CardTitle className="text - lg flex items - center">;"
=======
        <Card>;
          <CardHeader className='pb - 3'>;
            <CardTitle className='text - lg flex items - center'>;
              <Sparkles className='h - 5 w - 5 mr - 2 text - primary' />              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='space - y-3'>          <CardHeader className="pb - 3">;
            <CardTitle className="text - lg flex items - center">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Sparkles className="h - 5 w - 5 mr - 2 text - primary" />;
              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
<<<<<<< HEAD
          <CardContent>;'
            <div className='space - y-3'>;
              {generated_milestones.map ((milestone, index) => ('
                <div key={index} className='p - 3 border rounded - lg bg - muted / 10'>;'
                  <div className='flex items - center justify - between mb - 1'>;'
=======
          <CardContent>;
            <div className='space - y-3'>;
              {generated_milestones.map ((milestone, index) => (
                <div key={index} className='p - 3 border rounded - lg bg - muted / 10'>;
                  <div className='flex items - center justify - between mb - 1'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <div className='font - medium flex items - center'>                      {milestone.title}'
                      <Badge variant='secondary' className='ml - 2 text - xs'>;
                        AI Suggested;
                      </Badge>;
<<<<<<< HEAD
                    </div>;'
                    <div className='text - sm text - muted - foreground'>;
                      Due: {format_date (milestone.due_date)}
                    </div>;
                  </div>;'
                  <p className='text - sm text - muted - foreground'>;
                    {milestone.description}
                  </p>;'
                  <div className='flex justify - between items - center mt - 2 text - sm'>                    <span > Estimated: {milestone.estimated_hours} hours</span>;"
                  <p className="text - sm text - muted - foreground">{milestone.description}</p>;"
                  <div className="flex justify - between items - center mt - 2 text - sm">;
              {generated_milestones.map ((milestone, index) => ("
                <div key={index} className="p - 3 border rounded - lg bg - muted / 10">;"
                  <div className="flex items - center justify - between mb - 1">;"
                    <div className="font - medium flex items - center">;
                      {milestone.title}"
                      <Badge variant="secondary" className="ml - 2 text - xs">;
                        AI Suggested;
                      </Badge>;
                    </div>;"
                    <div className="text - sm text - muted - foreground">;
                      Due: {format_date (milestone.due_date)}
                    </div>;
                  </div>;"
                  <p className="text - sm text - muted - foreground">{milestone.description}</p>;"
                  <div className="flex justify - between items - center mt - 2 text - sm">;
                    <span > Estimated: {milestone.estimated_hours} hours</span>;
                  </div>;
                </div>))}'
              <div className='flex items - center justify - center mt - 4 text - sm text - muted - foreground'>;'"
                <Check className='h - 4 w - 4 mr - 1 text - green - 500' />                These milestones will be added to your contract              <div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground">;"
=======
                    </div>;
                    <div className='text - sm text - muted - foreground'>;
                      Due: {format_date (milestone.due_date)}
                    </div>;
                  </div>;
                  <p className='text - sm text - muted - foreground'>;
                    {milestone.description}
                  </p>;
                  <div className='flex justify - between items - center mt - 2 text - sm'>                    <span > Estimated: {milestone.estimated_hours} hours</span>;
                  <p className="text - sm text - muted - foreground">{milestone.description}</p>;
                  <div className="flex justify - between items - center mt - 2 text - sm">;
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
              <div className='flex items - center justify - center mt - 4 text - sm text - muted - foreground'>;
                <Check className='h - 4 w - 4 mr - 1 text - green - 500' />                These milestones will be added to your contract              <div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Check className="h - 4 w - 4 mr - 1 text - green - 500" />;
                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;
        </Card>)}
    </div>);
<<<<<<< HEAD
}"
<Button variant="outline" on_click={}
  handleGenerateMilestones;"
}> {";"
  is_generating ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Generating milestones... </>) : (<> <Sparkles className="mr - 2 h - 4 w - 4" /> Suggest Project Milestones with AI </>);
}</Button>);"
}AI - Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";"
}<div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground" > <Check className="h - 4 w - 4 mr - 1 text - green - 500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>);
}</div>);"
}"}
"
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) "
}"};
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>;
  );
}
<<<<<<< HEAD
;
=======
=======
}
<Button variant="outline" on_click={"
  handleGenerateMilestones;
}> {";
  is_generating ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Generating milestones... </>) : (<> <Sparkles className="mr - 2 h - 4 w - 4" /> Suggest Project Milestones with AI </>);
}</Button>);
}AI - Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground" > <Check className="h - 4 w - 4 mr - 1 text - green - 500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>);
}</div>);
}"}"
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) "
}</div>)
}"};
;
    </div>;
  );
}
;)
    </div>;
  );
}
;
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </div>
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
