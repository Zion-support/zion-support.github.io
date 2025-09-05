
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Control } from "react-hook-form",
=======
import React, { useState } from &quot;react&quot;;
import { Control } from &quot;react-hook-form&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription,
  FormMessage
<<<<<<< HEAD
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
=======
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { TalentRateRecommender } from &quot;@/components/pricing/TalentRateRecommender&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
=======
import React, {_useState} from "react";
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage} from "@/components/ui/form";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface RateOptimizationSectionProps {_control: Control<any>;
  setValue: (_name: string, _value: unknown) => void;
  skills: string[];
  yearsExperience: number;
  location?: string;
<<<<<<< HEAD
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
  control,
  setValue,
  skills,
  yearsExperience,
  location,
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
<<<<<<< HEAD
    setValue("hourlyRate", rate)
  },
=======
    setValue(&quot;hourlyRate&quot;, rate);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;space-y-4&quot;>
      <FormField
        control={control}
        name=&quot;hourlyRate&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your {rateType === &quot;hourly&quot; ? &quot;Hourly Rate&quot; : &quot;Fixed Rate&quot;} ($USD)</FormLabel>
            <FormControl>
              <Input
                type=&quot;number&quot;
                min=&quot;1&quot;
                step=&quot;0.01&quot;
                placeholder={rateType === &quot;hourly&quot; ? &quot;e.g. 45&quot; : &quot;e.g. 1000&quot;}
                {...field}
=======
  rateType: "hourly" | "fixed";}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = (_{_control, _setValue, _skills, _yearsExperience, _location, _rateType}) => {_const _handleSuggestionApplied = (_rate: number) => {
    setValue("hourlyRate", _rate);};

  return (_<div className="space-y-4">
      <FormField
        control={_control}
        name="hourlyRate"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Your {_rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="1"
                step="0.01"
                placeholder={_rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </FormControl>
            <FormDescription>
              Set a competitive rate based on your skills and experience
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <Card>
        <CardContent className=&quot;pt-4&quot;>
          <TalentRateRecommender
            skills={_skills}
            yearsExperience={_yearsExperience}
            location={_location}
            onSuggestionApplied={_handleSuggestionApplied}
            rateType={_rateType}
          />
        </CardContent>
      </Card>
    </div>
  )
},
