import { Loader2, Sparkles, Check } from 'lucide-react'; import { Badge } from '@/components/ui/badge'
import { format, parseISO } from 'date-fns'
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  endDate?: Date;
  projectType: string;
  onMilestonesGenerated?: (milestones: GeneratedMilestone[]) => void;  projectType: string,
  onMilestonesGenerated?: (milestones: GeneratedMilestone[],) => void


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  projectName: string
  scopeSummary: string
  startDate: Date
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

export function MilestoneSuggestions({
  projectName;
  scopeSummary;
  startDate;
  endDate;
  projectType;
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
<<<<<<< HEAD
  };





<<<<<<< HEAD
=======
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

  const { generateMilestones, generatedMilestones, isGenerating } =
    useMilestoneGenerator()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { generateMilestones, generatedMilestones, isGenerating } = useMilestoneGenerator(),
  const [showSuggestions, setShowSuggestions] = useState(false),

=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
<<<<<<< HEAD
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
=======
      projectType: projectType || "Other"
    },
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="space-y-4">
      {!showSuggestions && (
        <Button
<<<<<<< HEAD
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

          className="w-full"
        >
          {isGenerating ? (
            <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating milestones...
            </>
          ) : (
            <>
<<<<<<< HEAD
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />
              <Sparkles className="mr-2 h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              Suggest Project Milestones with AI
            </>
          )}
        </Button>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>          <CardHeader className="pb-3">
<<<<<<< HEAD

          <CardHeader className="pb-3">
<<<<<<< HEAD
=======

          <CardHeader className="pb-3">
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
=======
          <CardHeader className="pb-3">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <div className='space-y-3'>
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>
                  <div className='flex items-center justify-between mb-1'>
                    <div className='font-medium flex items-center'>                      {milestone.title}
                      <Badge variant='secondary' className='ml-2 text-xs'>
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium flex items-center">
                      {milestone.title}
                      <Badge variant="secondary" className="ml-2 text-xs">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<Button variant="outline" on_click={
  handleGenerateMilestones;
}> {";
  is_generating ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Generating milestones... </>) : (<> <Sparkles className="mr - 2 h - 4 w - 4" /> Suggest Project Milestones with AI </>);
}</Button>);
}AI - Suggested Milestones </CardTitle> </CardHeader> <CardContent> </div> </div>) ) ";
}<div className="flex items - center justify - center mt - 4 text - sm text - muted - foreground" > <Check className="h - 4 w - 4 mr - 1 text - green - 500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>);
}</div>);
}"}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground" > <Check className="h-4 w-4 mr-1 text-green-500" /> These milestones will be added to your contract </div> </div> </CardContent> </Card>) 
}</div>) 
}"};
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    </div>;
  );
}
;
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
