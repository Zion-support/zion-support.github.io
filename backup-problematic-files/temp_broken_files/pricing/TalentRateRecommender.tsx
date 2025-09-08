

import { ;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;


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

    setIsLoading(true),;
    try {;
      const params:TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;

      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result),;

    } finally {;
      setIsLoading(false),;
  },;

  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;

      // Track this suggestion application;

      if (user && user.id) {;
        trackPricingSuggestion({;


          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          actualValue:suggestedRate,;
          accepted:true;


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


          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;


      </div>;


},; import {;
  getTalentRateSuggestion;
PricingSuggestion;
TalentRateParams;
trackPricingSuggestion interface TalentRateRecommenderProps {;
  skills: string[];
yearsExperience: number;
location?: string;
const handleApplySuggestion = () => {;
  if (suggestion) {;
  //We'll use the middle of the range as the suggested rate //Track this suggestion application if (user && user.id) {;
  trackPricingSuggestion ({;
  ;
}
}
};
return (<div className="space-y-4" > <div> {";"  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={;"  generateSuggestion ";"}> <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI </Button>) : (<PricingSuggestionBox suggestion= {;
  suggestion ;
}isLoading= {;
  isLoading ;
}onApplySuggestion= {;
  handleApplySuggestion ;
}rateType= {;
  rateType ;
}/>) ;
}</div> </div>) ;



