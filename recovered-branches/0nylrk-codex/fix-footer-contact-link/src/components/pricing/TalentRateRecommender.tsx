
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
=======
} from &quot;@/services/pricingSuggestionService&quot;;
import { PricingSuggestionBox } from &quot;./PricingSuggestionBox&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Sparkles } from &quot;lucide-react&quot;;

interface TalentRateRecommenderProps {
  skills: string[];
  yearsExperience: number;
  location?: string;
  onSuggestionApplied: (value: number) => void;
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({
  skills,
  yearsExperience,
  location,
  onSuggestionApplied,
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false),
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth(),

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
    }

    setIsLoading(true),
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location},

      const result = await getTalentRateSuggestion(params),
      setSuggestion(result)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating rate suggestion:", error)
=======
      console.error(&quot;Error generating rate suggestion:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
      
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: 'talent',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          actualValue: suggestedRate,
          accepted: true
        })
      }
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
            className=&quot;w-full&quot;
          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />
        )}
      </div>
    </div>
  )
},
