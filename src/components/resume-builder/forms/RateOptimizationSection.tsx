
import React, { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
import {
import React from 'react';import {;
 import {
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage
 from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {

  control: Control<any>
  setValue: UseFormSetValue<any>
  skills: string[]
  yearsExperience: number
  location?: string

  rateType: "hourly" | "fixed"

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({

  control
  setValue
  skills
  yearsExperience
  location
  rateType
,) => {
  const handleSuggestionApplied = (rate: number,) => {
    setValue("hourlyRate", rate)
  }
  FormMessage;
 from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {;
  control: Control<any>,;
  setValue: UseFormSetValue<any>,;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
  rateType: "hourly" | "fixed";

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  control;
  setValue;
  skills;
  yearsExperience;
  location,;
  rateType;
,) => {;
  const handleSuggestionApplied = (rate: number,) => {;
    setValue("hourlyRate", rate);
  };

  return (
    <div className="space-y-4">;
      <FormField
        control = {control,}
        name="hourlyRate"
        render={({ field }: { field: any },) => (;
          <FormItem>;
            <FormLabel>Your {rateType = = "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
              <Input
                type="number"
                min="1"
                step="0 && 0.01"
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Set a competitive rate based on your skills and experience;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />
      <Card>
        <CardContent className="pt-4">
          <TalentRateRecommender
            skills = {skills,}
            yearsExperience = {yearsExperience,}
            location = {location,}
            onSuggestionApplied = {handleSuggestionApplied,}
            rateType = {rateType,}
          />
        </CardContent>
      </Card>
    </div>
  )

}

          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt - 4">;
          <TalentRateRecommender;
            skills = {skills, }
            years_experience = {years_experience, }
            location = {location, }
            onSuggestionApplied = {handleSuggestionApplied, }
            rate_type = {rate_type, }
          />;
        </CardContent>;
      </Card>;
    </div>);

},
