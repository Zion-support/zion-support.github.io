<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface MilestoneSuggestionsProps {
  projectName: string;
  scopeSummary: string;
  startDate: Date; import React, { useState } from 'react'
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator'
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
interface MilestoneSuggestionsProps {
<<<<<<< HEAD
<<<<<<< HEAD
  projectName: string
  scopeSummary: string
  startDate: Date
  endDate?: Date
  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void


<<<<<<< HEAD

export function MilestoneSuggestions({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export function MilestoneSuggestions({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void

export function MilestoneSuggestions({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
<<<<<<< HEAD
<<<<<<< HEAD
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
}

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
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

  const handleGenerateMilestones = async () => {
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

export function MilestoneSuggestions({
  projectName
  scopeSummary
  startDate
  endDate
  projectType
  onMilestonesGenerated
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}: MilestoneSuggestionsProps) { const { generateMilestones, generatedMilestones, isGenerating  } = useMilestoneGenerator(),
  const [ showSuggestions, setShowSuggestions ] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      }
    }
  };



      return format (parseISO (date_string), 'MMM dd, yyyy');
      return date_string;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  },

<<<<<<< HEAD
=======
=======
    }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {
      return dateString
    }
  };





<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,




<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button
<<<<<<< HEAD


          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}

        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}
=======
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
          className='w-full'        >
          {isGenerating ? (
            <>
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
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="w-full"
        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
            </>
          ) : (
            <>
<<<<<<< HEAD
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>          <CardHeader className="pb-3">
ursor/fix-website-loading-errors-and-merge-6662
=======

              <Sparkles className="mr-2 h-4 w-4" />


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              Generating milestones...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />
              <Sparkles className="mr-2 h-4 w-4" />


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          )}
        </Button>
      )}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardHeader className="pb-3">



            <CardTitle className="text-lg flex items-center">
<<<<<<< HEAD
=======
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
              {generatedMilestones.map((milestone, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>
                  <div className='flex items-center justify-between mb-1'>
                    <div className='font-medium flex items-center'>                      {milestone.title}
                      <Badge variant='secondary' className='ml-2 text-xs'>
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => (
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">


                        AI Suggested
<<<<<<< HEAD
=======
                      </Badge>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
<<<<<<< HEAD
=======

            <div className="space-y-3">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
                  <div className="flex justify-between items-center mt-2 text-sm">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">

              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">



<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Check className="h-4 w-4 mr-1 text-green-500" />
=======


              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">






                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<Button variant="outline" on_click={
  handleGenerateMilestones;
}> {";
  is_generating ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Generating milestones... </>) : (<> <Sparkles className="mr - 2 h - 4 w - 4" /> Suggest Project Milestones with AI </>);
}</Button>);
}AI - Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground" > <Check className="h - 4 w - 4 mr - 1 text - green - 500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>);
}</div>);
}"}

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) 
}"};
;
<<<<<<< HEAD
    </div>;
  );
}
<<<<<<< HEAD
;
    </div>;
  );
}
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </div>;
  );
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
