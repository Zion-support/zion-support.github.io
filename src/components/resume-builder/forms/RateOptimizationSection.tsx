
import React, {_useState} from "react";
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage} from "@/components/ui/form";

interface RateOptimizationSectionProps {_control: Control<any>;
  setValue: UseFormSetValue<any>;
  skills: string[];
  yearsExperience: number;
  location?: string;
  rateType: "hourly" | "fixed";}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = (_{_control, _setValue, _skills, _yearsExperience, _location, _rateType}) => {_const _handleSuggestionApplied = (_rate: number) => {
    setValue("hourlyRate", _rate);};

  return (_<div className="space-y-4">
      <FormField
        control={_control}
        name="hourlyRate"
        render={_({ field}: {_field: unknown}) => (
          <FormItem>
            <FormLabel>Your {_rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="1"
                step="0.01"
                {_...field}
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
            skills={_skills}
            yearsExperience={_yearsExperience}
            location={_location}
            onSuggestionApplied={_handleSuggestionApplied}
            rateType={_rateType}
          />
        </CardContent>
      </Card>
    </div>
  );
};
