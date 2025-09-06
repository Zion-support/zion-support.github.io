
import React, { useState } from "react";
import { Control } from "react-hook-form";
import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";
=======

import { 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {

=======
import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";

=======
  location?: string;
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  control;
  setValue;
  skills;
  yearsExperience;
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
  control;
  setValue;
  skills;
  yearsExperience;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  location
  control,
  setValue,
  skills,
  yearsExperience,
  location,
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="hourlyRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="1"
                step="0.01"
                placeholder={rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}

import React, { useState } from "react",;
import { Control } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",;
import { Card, CardContent } from "@/components/ui/card",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface RateOptimizationSectionProps {;
  control: Control<any>,;
  setValue: (name: string, value: any) => void,;
  skills: string[],;
  yearsExperience: number,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  location?: string;
  rateType: "hourly" | "fixed";
}


export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;

  control;
  set_value;
  skills;

  location,;
  rateType;
}) => {;
  const handleSuggestionApplied = (rate: number) => {;
    setValue("hourlyRate", rate);
  };


  return (
    <div className="space-y-4">;
      <FormField
        control={control}
        name="hourlyRate"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
              <Input
                type="number"
                min="1"
                step="0 && 0.01"
                placeholder={rateType === "hourly" ? "e && e.g. 45" : "e && e.g. 1000"}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Set a competitive rate based on your skills and experience;
            </FormDescription>;
            <FormMessage />;

      />;

      <Card>;
        <CardContent className="pt-4">;

          <TalentRateRecommender
            skills={skills}
            years_experience={years_experience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
            rateType={rateType}

};
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
