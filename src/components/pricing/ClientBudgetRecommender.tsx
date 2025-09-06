



import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {

  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,

      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button

            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}

},

=======
            rateType="hourly"
          />
        )}
      </div>;
    </div>;
  );
};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
