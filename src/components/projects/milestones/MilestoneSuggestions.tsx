<<<<<<< HEAD
=======
interface MilestoneSuggestionsProps {
  project_name: string;
  scope_summary: string;
  start_date: Date; import React, { useState } from 'react';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks / useMilestoneGenerator';
import { Loader2, Sparkles, Check } from 'lucide-react';
import { Badge } from '@/components / ui / badge';
interface MilestoneSuggestionsProps {


  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  GeneratedMilestone
  MilestoneInput
  useMilestoneGenerator
} from '@/hooks/useMilestoneGenerator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  GeneratedMilestone,
  MilestoneInput,
  useMilestoneGenerator,
} from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react'; import { Badge } from '@/components/ui/badge'
import { format, parseISO } from 'date-fns'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface MilestoneSuggestionsProps {
  project_name: string;
  scope_summary: string;
  start_date: Date; import React, { useState } from 'react';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks / useMilestoneGenerator';
import { Loader2, Sparkles, Check } from 'lucide-react';
import { Badge } from '@/components / ui / badge';
interface MilestoneSuggestionsProps {
<<<<<<< HEAD


  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void



export function MilestoneSuggestions({
=======
  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date
  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void

export function MilestoneSuggestions({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
<<<<<<< HEAD

}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator(),
  const [ showSuggestions, setShowSuggestions ] = useState(false),


      }
    }
  };



      return format (parseISO (date_string), 'MMM dd, yyyy');
      return date_string;
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

export function MilestoneSuggestions({
  projectName,
  scopeSummary,
  startDate,
  endDate,
  projectType,
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

  const { generateMilestones, generatedMilestones, isGenerating } =
    useMilestoneGenerator()
  const [showSuggestions, setShowSuggestions] = useState(false)
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
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
    <div className="space-y-4">
      {!showSuggestions && (
  onMilestonesGenerated
}: MilestoneSuggestionsProps) {

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
      }
    }
  }
  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
      return dateString
    }
  }
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

  const { generateMilestones, generatedMilestones, isGenerating } =
    useMilestoneGenerator()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
<<<<<<< HEAD




=======
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

export function MilestoneSuggestions({
  projectName
  scopeSummary
  startDate
  endDate
  projectType
  onMilestonesGenerated

}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator(),
  const [ showSuggestions, setShowSuggestions ] = useState(false),

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button


          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}

<<<<<<< HEAD
=======
        >
          {isGenerating ? (
            <>
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="w-full"
        >
          {isGenerating ? (
            <>



              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
              Generating milestones...
            </>
          ) : (
            <>

              <Sparkles className="mr-2 h-4 w-4" />


=======
            </>
          ) : (
            <>
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>          <CardHeader className="pb-3">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;
          ) : (;
            <>;
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />;
              Suggest Project Milestones with AI;
            </>;


<<<<<<< HEAD
          )}
        </Button>;
      )}

=======
          )}
        </Button>;
      )}
          <CardHeader className="pb-3">
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />
              <Sparkles className="mr-2 h-4 w-4" />
              Suggest Project Milestones with AI
            </>
          )}
        </Button>
      )}
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>          <CardHeader className="pb-3">

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <CardHeader className="pb-3">



            <CardTitle className="text-lg flex items-center">
<<<<<<< HEAD
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD


=======
            <div className='space-y-3'>
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>
                  <div className='flex items-center justify-between mb-1'>
                    <div className='font-medium flex items-center'>                      {milestone.title}
                      <Badge variant='secondary' className='ml-2 text-xs'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">


                        AI Suggested
<<<<<<< HEAD
                      </Badge>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
<<<<<<< HEAD

            <div className="space-y-3">

=======
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
                  <div className="flex justify-between items-center mt-2 text-sm">
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
<<<<<<< HEAD


              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">



=======
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">

              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">

              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



                <Check className="h-4 w-4 mr-1 text-green-500" />
<<<<<<< HEAD
                These milestones will be added to your contract
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD


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
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;
              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='space-y-3'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>;
                  <div className='flex items-center justify-between mb-1'>;
                    <div className='font-medium flex items-center'>                      {milestone && milestone.title}
                      <Badge variant='secondary' className='ml-2 text-xs'>;
                        AI Suggested;
                      </Badge>;
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
                  <div className="flex justify-between items-center mt-2 text-sm">;
                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;
                  </div>;
                </div>;
              ))}

              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>;
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;
                <Check className="h-4 w-4 mr-1 text-green-500" />;
                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      )}
    </div>;
  );
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
              <Sparkles className='mr - 2 h - 4 w - 4' />              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Suggest Project Milestones with AI;
            </>)}
        </Button>)}
      {show_suggestions && generated_milestones.length > 0 && (
        <Card>;
          <CardHeader className='pb - 3'>;
            <CardTitle className='text - lg flex items - center'>;
              <Sparkles className='h - 5 w - 5 mr - 2 text - primary' />              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='space - y-3'>          <CardHeader className="pb - 3">;
            <CardTitle className="text - lg flex items - center">;
              <Sparkles className="h - 5 w - 5 mr - 2 text - primary" />;
              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='space - y-3'>;
              {generated_milestones.map ((milestone, index) => (
                <div key={index} className='p - 3 border rounded - lg bg - muted / 10'>;
                  <div className='flex items - center justify - between mb - 1'>;
                    <div className='font - medium flex items - center'>                      {milestone.title}
                      <Badge variant='secondary' className='ml - 2 text - xs'>;
                        AI Suggested;
                      </Badge>;
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
                <Check className="h - 4 w - 4 mr - 1 text - green - 500" />;
                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;
        </Card>)}
    </div>);
}
<Button variant="outline" on_click={
  handleGenerateMilestones;
}> {";
  is_generating ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Generating milestones... </>) : (<> <Sparkles className="mr - 2 h - 4 w - 4" /> Suggest Project Milestones with AI </>);
}</Button>);
}AI - Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground" > <Check className="h - 4 w - 4 mr - 1 text - green - 500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>);
}</div>);
<<<<<<< HEAD
}"}

=======
}"}

}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>)
}</div>)
}"}
    </div>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) 
}"};
;
<<<<<<< HEAD

    </div>;
  );
}
;
=======
    </div>;
  );
}
;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
