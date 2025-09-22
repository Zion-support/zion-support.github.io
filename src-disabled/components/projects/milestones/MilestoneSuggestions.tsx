
import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { GeneratedMilestone, MilestoneInput, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Loader2, Sparkles, Check } from 'lucide-react'
import { Badge  } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
interface MilestoneSuggestionsProps {
projectName: string;
  scopeSummary: string;
  startDate: Date;
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

    if (milestones.length > 0) {
      setShowSuggestions(true);
      if (onMilestonesGenerated) {
        onMilestonesGenerated(milestones);
export function MilestoneSuggestions({
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {;
  GeneratedMilestone,;
  MilestoneInput,;
  useMilestoneGenerator,;'
} from '@/hooks/useMilestoneGenerator';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';'
import { Loader2, Sparkles, Check } from 'lucide-react';import { Badge } from '@/components/ui/badge';'
import { format, parseISO } from 'date-fns';


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

      }
    }
  };

      return format (parseISO (date_string), 'MMM dd, yyyy');
      return date_string;
    }

  return (

const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {}
      return dateString;
    }
  };

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
  const handleGenerateMilestones = async () => {
    const input: MilestoneInput = {
  projectType,;
  onMilestonesGenerated;
}: MilestoneSuggestionsProps) {}
  const handleGenerateMilestones = async () => {}
    const input: MilestoneInput = {}`
      scope: `${projectName}: ${scopeSummary}`,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
      projectType: projectType || "Other"
    },

return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  }
  return (
    <div className="space-y-4">
      {!showSuggestions && (
<Button

          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scopeSummary || !startDate}

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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          variant='outline'
          onClick={handleGenerateMilestones}
          disabled={isGenerating |!scopeSummary |!startDate}
          className='w-full'        >
          {isGenerating ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Generating milestones...
            </>
          ) : (
            <>

              <Sparkles className="mr-2 h-4 w-4" />
Suggest Project Milestones with AI
            </>
              Suggest Project Milestones with AI

              Suggest Project Milestones with AI;
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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating milestones...;
            </>;
          ) : (;
<>;'"
              <Sparkles className='mr-2 h-4 w-4' />              <Sparkles className="mr-2 h-4 w-4" />;
              Suggest Project Milestones with AI;
            </>;

          )}
        </Button>;
      )}

      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
          <CardHeader className="pb-3">


            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
      {showSuggestions && generatedMilestones.length > 0 && (
        <Card>
<CardHeader className='pb-3'>
            <CardTitle className='text-lg flex items-center'>
              <Sparkles className='h-5 w-5 mr-2 text-primary' />
              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>

            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/10">
                  <div className="flex items-center justify-between mb-1">
"
            <div className="space-y-3">
              {generatedMilestones.map((milestone, index) => ("
                <div key={index} className="p-3 border rounded-lg bg-muted/10">"
                  <div className="flex items-center justify-between mb-1">"
                    <div className="font-medium flex items-center">
                      {milestone.title}"
                      <Badge variant="secondary" className="ml-2 text-xs">

                        AI Suggested
                        AI Suggested;
                      </Badge>
                    </div>"
                    <div className="text-sm text-muted-foreground">
                      Due: {formatDate(milestone.dueDate)}
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

                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                  <p className='text-sm text-muted-foreground'>
                    {milestone.description}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-sm'>
                    <span>Estimated: {milestone.estimatedHours} hours</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">

                <Check className="h-4 w-4 mr-1 text-green-500" />
<div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />
                These milestones will be added to your contract

"
                <Check className="h-4 w-4 mr-1 text-green-500" />
                These milestones will be added to your contract;
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">"
                <Check className="h-4 w-4 mr-1 text-green-500" />"

              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1 text-green-500" />
<div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />
origin/cursor/automate-test-improve-and-merge-code-2533
                These milestones will be added to your contract
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
              <Sparkles className="h-5 w-5 mr-2 text-primary" />;
              AI-Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
<CardContent>;'
            <div className='space-y-3'>;
              {generatedMilestones && generatedMilestones.map((milestone, index) => (;'
                <div key={index} className='p-3 border rounded-lg bg-muted/10'>;'
                  <div className='flex items-center justify-between mb-1'>;'
                    <div className='font-medium flex items-center'>                      {milestone && milestone.title}'
                      <Badge variant='secondary' className='ml-2 text-xs'>;
                        AI Suggested;
                      </Badge>;
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
                  <div className="flex justify-between items-center mt-2 text-sm">;
                    <span>Estimated: {milestone && milestone.estimatedHours} hours</span>;
                  </div>;
                </div>;
              ))}
'
              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>;'"
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">;"
                <Check className="h-4 w-4 mr-1 text-green-500" />;
                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      )}
    </div>;
  );
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
              <Sparkles className='mr - 2 h - 4 w - 4' />              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Suggest Project Milestones with AI;
            </>)}
        </Button>)}
      {show_suggestions && generated_milestones.length > 0 && (
<Card>;'
          <CardHeader className='pb - 3'>;'
            <CardTitle className='text - lg flex items - center'>;'
              <Sparkles className='h - 5 w - 5 mr - 2 text - primary' />              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;'"
            <div className='space - y-3'>          <CardHeader className="pb - 3">;"
            <CardTitle className="text - lg flex items - center">;"
              <Sparkles className="h - 5 w - 5 mr - 2 text - primary" />;
              AI - Suggested Milestones;
            </CardTitle>;
          </CardHeader>;
<CardContent>;'
            <div className='space - y-3'>;
              {generated_milestones.map ((milestone, index) => ('
                <div key={index} className='p - 3 border rounded - lg bg - muted / 10'>;'
                  <div className='flex items - center justify - between mb - 1'>;'
                    <div className='font - medium flex items - center'>                      {milestone.title}'
                      <Badge variant='secondary' className='ml - 2 text - xs'>;
                        AI Suggested;
                      </Badge>;
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
                <Check className="h - 4 w - 4 mr - 1 text - green - 500" />;
                These milestones will be added to your contract;
              </div>;
            </div>;
          </CardContent>;
        </Card>)}
    </div>);
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

    </div>;
  );
}
;
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
