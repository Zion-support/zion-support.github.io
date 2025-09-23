
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
import { 
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from 'lucide-react'

interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import { 
  getTalentRateSuggestion, 
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService";
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from 'lucide-react'

interface TalentRateRecommenderProps {
  skills: string[];
  yearsExperience: number;
  location?: string;
  onSuggestionApplied: (value: number) => void;
  rateType: "hourly" | "fixed";
>>>>>>> origin/auto/autonomy-17186719616
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({
  skills,
  yearsExperience,
  location,
  onSuggestionApplied,
<<<<<<< HEAD
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false),
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth(),

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return,
    }

    setIsLoading(true),
=======
  rateType,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return;
    }

    setIsLoading(true);
>>>>>>> origin/auto/autonomy-17186719616
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
<<<<<<< HEAD
        location},

      const result = await getTalentRateSuggestion(params),
      setSuggestion(result),
    } catch (error) {
      logErrorToProduction('Error generating rate suggestion:', { data: error }),
    } finally {
      setIsLoading(false),
    }
  },
=======
        location,
      };

      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {
      logErrorToProduction('Error generating rate suggestion:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
<<<<<<< HEAD
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
=======
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
>>>>>>> origin/auto/autonomy-17186719616
      
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "talent",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          actualValue: suggestedRate,
          accepted: true
<<<<<<< HEAD
        }),
      }
    }
  },
=======
        });
      }
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
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
<<<<<<< HEAD
  ),
},
=======
  );
};
>>>>>>> origin/auto/autonomy-17186719616
