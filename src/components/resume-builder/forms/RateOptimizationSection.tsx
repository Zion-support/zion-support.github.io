
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Control, UseFormSetValue } from "react-hook-form",
=======
import React, { useState } from &quot;react&quot;;
import { Control, UseFormSetValue } from &quot;react-hook-form&quot;;
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
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
=======
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { TalentRateRecommender } from &quot;@/components/pricing/TalentRateRecommender&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;

interface RateOptimizationSectionProps {
  control: Control<any>;
  setValue: UseFormSetValue<any>;
  skills: string[];
  yearsExperience: number;
  location?: string;
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
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Your {rateType === &quot;hourly&quot; ? &quot;Hourly Rate&quot; : &quot;Fixed Rate&quot;} ($USD)</FormLabel>
            <FormControl>
              <Input
                type=&quot;number&quot;
                min=&quot;1&quot;
                step=&quot;0.01&quot;
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Set a competitive rate based on your skills and experience;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />

      <Card>
        <CardContent className=&quot;pt-4&quot;>
          <TalentRateRecommender
=======
      />;
      <Card>;
        <CardContent className="pt-4">;
          <TalentRateRecommender;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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