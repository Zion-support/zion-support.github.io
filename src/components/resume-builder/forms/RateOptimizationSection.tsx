}; import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender"
import { Card, CardContent } from "@/components/ui/card"
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React, { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {

  control: Control<any>
  setValue: UseFormSetValue<any>
  skills: string[]
  yearsExperience: number
  location?: string

import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
  location?: string,
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  location?: string
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  rateType: "hourly" | "fixed"
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({

>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  control
  setValue
  skills
  yearsExperience
  location
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  control,
  setValue,
  skills,
  yearsExperience,
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  location,
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  }
  },

>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="hourlyRate"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="1"
                step="0.01"
import React, { useState } from "react",;
import { Control, UseFormSetValue } from "react-hook-form",;
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
interface RateOptimizationSectionProps {;
  control: Control<any>,;
  setValue: UseFormSetValue<any>,;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
  rateType: "hourly" | "fixed";
}
;
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  control,;
  setValue,;
  skills,;
  yearsExperience,;
  location,;
  rateType;
}) => {;
  const handleSuggestionApplied = (rate: number) => {;
    setValue("hourlyRate", rate);
  };
  return (;
    <div className="space-y-4">;
      <FormField;
        control={control}
        name="hourlyRate";
        render={({ field }: { field: any }) => (;
          <FormItem>;
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
              <Input;
                type="number";
                min="1";
                step="0.01";
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                {...field}
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
"}
}

>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            skills={skills}
            yearsExperience={yearsExperience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
            rateType={rateType}
          />;
        </CardContent>;
      </Card>;
    </div>;
  );
};
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
