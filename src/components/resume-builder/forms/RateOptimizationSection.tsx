<<<<<<< HEAD
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';
=======

import React, { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import {
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";

interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
  location?: string;
  rateType: "hourly" | "fixed"
}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
  control;
  setValue;
  skills;
  yearsExperience;
  location;
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  };

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
  )
};
<<<<<<< HEAD
"
=======

<<<<<<< HEAD

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
