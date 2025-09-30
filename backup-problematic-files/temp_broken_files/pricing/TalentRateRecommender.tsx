



import { Sparkles } from 'lucide-react';

;
interface TalentRateRecommenderProps {;
  skills: string[];,;
  yearsExperience: number;,;
  location?:string,;
  onSuggestionApplied: (value:number) => void;,;
  rateType:"hourly" | "fixed";"
}
export const TalentRateRecommender:React.FC<TalentRateRecommenderProps> = ({;
)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;

    if (skills.length === 0 || yearsExperience <= 0) {;
      return,;


      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result),;

    } finally {;
      setIsLoading(false),;
  },;


      // Track this suggestion application;

      if (user && user.id) {;
        trackPricingSuggestion({;




        }),;
  return (;"
    <div className="space-y-4">;"
</div>
      <div>;
          <Button;"
            type="button";""
            variant="outline";"
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}"
            className="w-full";"
          >;
"
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;"




      </div>;





