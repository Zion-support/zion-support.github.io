import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

interface MilestoneSuggestionsProps {

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
        onMilestonesGenerated(milestones);      }

      }

    }
  };

  const formatDate = (dateString: string,) => {
    try {
      return format(parseISO(dateString), 'MMM dd, yyyy');

    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className='space-y-4'>
      {!showSuggestions && (
        <Button

        >
          {isGenerating ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />              Generating milestones...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />              Suggest Project Milestones with AI

              Generating milestones...
            </>
          ) : (
            <>

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
            <div className='space-y-3'>

              AI-Suggested Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>

                      {milestone.title}
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
                  <div className='flex justify-between items-center mt-2 text-sm'>                    <span>Estimated: {milestone.estimatedHours} hours</span>

                    <span>Estimated: {milestone.estimatedHours} hours</span>

                  </div>
                </div>
              ))}

              <div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
                <Check className='h-4 w-4 mr-1 text-green-500' />                These milestones will be added to your contract

                These milestones will be added to your contract

              </div>
            </div>
          </CardContent>
        </Card>
      )}
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