
<<<<<<< HEAD
import React{ useState } from "react";
import { Control } from "react-hook-form";
import { 
  FormField
  FormItem
  FormLabel
  FormControl
=======
import React, { useState } from "react";
import { Control } from "react-hook-form";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
>>>>>>> origin/auto/autonomy-17186719616
  FormDescription,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
<<<<<<< HEAD
import { CardContent } from "@/components/ui/card";

interface RateOptimizationSectionProps {
  control: Control<any>;
  setValue: (name: stringvalue: any) => void;
=======
import { Card, CardContent } from "@/components/ui/card";

interface RateOptimizationSectionProps {
  control: Control<any>;
  setValue: (name: string, value: any) => void;
>>>>>>> origin/auto/autonomy-17186719616
  skills: string[];
  yearsExperience: number;
  location?: string;
  rateType: "hourly" | "fixed";
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
    setValue("hourlyRate"rate);
=======
    setValue("hourlyRate", rate);
>>>>>>> origin/auto/autonomy-17186719616
  };

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
            skills={skills}
            yearsExperience={yearsExperience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
            rateType={rateType}
          />
        </CardContent>
      </Card>
    </div>
  );
};
