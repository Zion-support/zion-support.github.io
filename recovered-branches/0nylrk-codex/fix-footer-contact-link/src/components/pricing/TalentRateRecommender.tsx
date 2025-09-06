




import React, { useState } from "react",
import { Button } from "@/components/ui/button",

import { 
  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",

import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface TalentRateRecommenderProps {

import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;


  skills;
  years_experience;
  location;

  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;

    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;

        yearsExperience,;
        location};


      const result = await getTalentRateSuggestion(params);


interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"


import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from "lucide-react",;
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";


}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;

  skills;
  yearsExperience;
  location;
  onSuggestionApplied,
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
  skills,;
  yearsExperience,;
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
  const generateSuggestion = async () => {;
    if (skills.length === 0 || yearsExperience <= 0) {;
      return;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



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
      console.error("Error generating rate suggestion:", error)
    } finally {
      setIsLoading(false)








;
    setIsLoading(true),;
    try {;
      const params: TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result);
    } catch (error) {;
      console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
  },;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);

      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
          actualValue: suggestedRate,;
          accepted: true;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }


  },






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}


            disabled={skills.length === 0 |yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


            suggestion={suggestion}
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

};

