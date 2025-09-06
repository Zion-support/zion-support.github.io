export const ClientBudgetRecommender: React.FC<
  ClientBudgetRecommenderProps
> = ({
  jobTitle,
  category,
  timeline,
  scope,
  experienceLevel,

  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return;
    }

    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
        jobTitle,
        category,
      };

      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;

      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {
      logErrorToProduction('Error generating budget suggestion:', {
        data: error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate);

      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: 'client',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true,
        });
      }
    }
  };

  return (
    <div className='space-y-4'>
      <div>
        {!suggestion && !isLoading ? (
          <Button

          >
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox

          />
        )}
      </div>
    </div>