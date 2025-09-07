
<<<<<<< HEAD
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
=======

>>>>>>> origin/main
import { 
  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
<<<<<<< HEAD
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface TalentRateRecommenderProps {
  skills: string[];
  yearsExperience: number;
  location?: string;
  onSuggestionApplied: (value: number) => void;

  rateType: "hourly" | "fixed"
=======
import { PricingSuggestionBox } from "./PricingSuggestionBox",;

import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";""
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";""
import {PricingSuggestionBox} from "./PricingSuggestionBox";""
import {useAuth} from "@/hooks/useAuth";""
import {Sparkles} from "lucide-react";""
import React, { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Button } from "@/components/ui/button","
import {
  // TODO: Implement
}
  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
  trackPricingSuggestion;"
} from "@/services/pricingSuggestionService",""
import { PricingSuggestionBox } from "./PricingSuggestionBox",""
import {Sparkles} from "lucide-react";"
pr-12325
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";
>>>>>>> origin/main
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;interface TalentRateRecommenderProps {

  skills;
  years_experience;
  location;
<<<<<<< HEAD

  onSuggestionApplied;
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();
  const generateSuggestion = null;

=======

  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;

    }
  onSuggestionApplied: (value: number) => void,;"
  rateType: "hourly" | "fixed";"

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
)
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;

pr-12325
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;

        yearsExperience,;
        location};

      const result = await getTalentRateSuggestion(params);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;
      const result = await getTalentRateSuggestion(params);
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from "lucide-react",;
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"  skills,;
  yearsExperience,;

      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {;"
      console && console.error("Error generating rate suggestion:", error);"
    } finally {;
      setIsLoading(false);

  };

  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),


  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);

    if (skills.length === 0 || yearsExperience <= 0) {
  skills,;
pr-12325
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
  const generateSuggestion = async () => {;
    if (skills.length === 0 || yearsExperience <= 0) {;
      return;    }

    setIsLoading(true),
    try {

    if (skills.length === 0 || yearsExperience <= 0) {;


    setIsLoading(true),
    try {
  // TODO: Implement
pr-12325
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location},

      const result = await getTalentRateSuggestion(params),;
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
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      const result = await getTalentRateSuggestion(params),

      setSuggestion(result)
    } catch (error) {"
      console.error("Error generating rate suggestion:", error)"
    } finally {
  // TODO: Implement
      setIsLoading(false)


;
    setIsLoading(true),;
        location},;
      const result = await getTalentRateSuggestion(params),;
      console.error("Error generating rate suggestion:", error);"
  },;
  const handleApplySuggestion = () => {;
    if (suggestion) {;"
pr-12325
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
          accepted: true;
        });
      }
    }  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}  onSuggestionApplied,
  rate_type}) => {
  const [is_loading, setIsLoading] = useState (false);
  const [suggestion, set_suggestion] = useState < PricingSuggestion | null>(null);
  const { user } = use_auth ();
;
  const generate_suggestion = async () => {
    // Check condition
if ( {) {
  $2
}
      return;
    }
    setIsLoading (true);
    try {
      const params: TalentRateParams = {
        skills;
        years_experience,
        location}
;
      const result = await getTalentRateSuggestion (params);
      set_suggestion (result);
    } catch (error) {
      console.error ("Error generating rate suggestion:", error);
    } finally {
      setIsLoading (false);
    }
  }
;
  const handleApplySuggestion = () =>: any {
    // Check condition
if ( {) {
  $2
}
      // We'll use the middle of the range as the suggested rate;
      const suggested_rate = Math.round ((suggestion.min_rate + suggestion.max_rate) / 2);
      onSuggestionApplied (suggested_rate);
;
      // Track this suggestion application;
      // Check condition
if ( {) {
  $2
}
          actualValue: suggestedRate,;
          accepted: true;)
        });

  },







    } catch (error) {;
  return ("
    <div className="space-y-4">;"
</div>
      <div>;
          <Button;"
            type="button"""
            variant="outline""
            onClick={generateSuggestion}


      </div>;

            disabled={skills && skills.length === 0 || yearsExperience <= 0}"
            className="w-full">;""
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;"

          <PricingSuggestionBox;
  onSuggestionApplied,)
  rate_type}) => {

  const [suggestion, set_suggestion] = useState < PricingSuggestion | null>(null);
  const { user } = use_auth ();
  const generate_suggestion = async () => {
    // Check condition;
if ( {) {
  $2;
    setIsLoading (true);
  // TODO: Implement
        years_experience,
        location}
      const result = await getTalentRateSuggestion (params);
      set_suggestion (result);
      console.error ("Error generating rate suggestion:", error);"
  // TODO: Implement
      setIsLoading (false);
  const handleApplySuggestion = () =>: any {
  // TODO: Implement
    // Check condition;
}"
      // We'll use the middle of the range as the suggested rate;
      const suggested_rate = Math.round ((suggestion.min_rate + suggestion.max_rate) / 2);
      onSuggestionApplied (suggested_rate);
      // Track this suggestion application;
      // Check condition;
pr-12325
        trackPricingSuggestion ({
          user_id: user.id,
          suggestion_type: 'talent',
          suggested_min: suggestion.min_rate,
          suggested_max: suggestion.max_rate,
          actual_value: suggested_rate,
          accepted: true;
        });
      }
    }
  }
;
  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !is_loading ? (
          <Button;
            type="button";
            variant="outline";
            on_click={generate_suggestion}
            disabled={skills.length === 0 || years_experience <= 0}
            className="w-full";
          >;
            <Sparkles className="h - 4 w - 4 mr-2" /> Optimize Rate with AI;
          </Button>) : (
          <PricingSuggestionBox;
  return (
    <div className="space - y-4">;"
            type="button";""
            variant="outline";"
            on_click={generate_suggestion}
            disabled={skills.length === 0 || years_experience <= 0}"
            className="w - full";"
          >;
"
            <Sparkles className="h - 4 w - 4 mr - 2" /> Optimize Rate with AI;"
          ) : (
pr-12325
            suggestion={suggestion}
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}





      </div>;)
    </div>);
export const TalentRateRecommender:React.FC<TalentRateRecommenderProps> = ({;

      return,;
      const params:TalentRateParams = {;
      setSuggestion(result),;
      console.error("Error generating rate suggestion:", error),;"
      setIsLoading(false),;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;
      // Track this suggestion application;
          userId:user.id,;
          suggestionType:'talent',;
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          actualValue:suggestedRate,;
          accepted:true;)
        }),;
  return (;
            disabled={skills.length === 0 || yearsExperience <= 0}"
            className="w-full";"

            isLoading={isLoading}
            rateType={rateType}
          />;

    </div>;"
return (<div className="space-y-4" > <div> {"
</div>"
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick= {"
  generateSuggestion;)"
}> <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI ) : (<PricingSuggestionBox suggestion= {"
  suggestion;
}isLoading= {
  isLoading;
}onApplySuggestion= {
  handleApplySuggestion;
}rateType= {
  rateType;)
}/>) 
}</div> </div>) 
pr-12325
>>>>>>> origin/main
