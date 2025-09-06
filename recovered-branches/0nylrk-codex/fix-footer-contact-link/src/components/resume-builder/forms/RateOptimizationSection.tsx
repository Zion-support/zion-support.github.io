
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
<<<<<<< HEAD
import { Control } from "react-hook-form";
=======
=======


>>>>>>> main
import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { Control } from "react-hook-form",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
import React, { useState } from "react",
import { Control } from "react-hook-form",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
<<<<<<< HEAD
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {

  control: Control<any>
  setValue: (name: string, value: any) => void
  skills: string[]
  yearsExperience: number

  location?: string;
=======
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";

=======

import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",


>>>>>>> main
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
  location?: string,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  rateType: "hourly" | "fixed"
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  control;
  setValue;
  skills;
  yearsExperience;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
<<<<<<< HEAD
  control;
  setValue;
  skills;
  yearsExperience;

  location
=======
  control,
  setValue,
  skills,
  yearsExperience,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  location,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  rateType: "hourly" | "fixed"
}



>>>>>>> main
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  },


>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
interface RateOptimizationSectionProps {;
  control: Control<any>,;
  setValue: (name: string, value: any) => void,;
  skills: string[],;
  yearsExperience: number,;
<<<<<<< HEAD
  location?: string,;
  rateType: "hourly" | "fixed";
}
;
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  control,;
  setValue,;
  skills,;
  yearsExperience,;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  location?: string;
  rateType: "hourly" | "fixed";
}


export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;

=======
import React, { useState } from './react';
import { Control } from './react - hook - form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { TalentRateRecommender } from '@/components / pricing / TalentRateRecommender';
import { Card, CardContent } from '@/components / ui / card';
interface RateOptimizationSectionProps {
  control: Control < any>,
  set_value: (name: string, value: any) => void,
  skills: string[],
  years_experience: number,
  location?: string;
  rate_type: "hourly" | "fixed";
}
export const RateOptimizationSection: React.FC < RateOptimizationSectionProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  control;
  set_value;
  skills;

>>>>>>> main
  location,;
  rateType;
}) => {;
  const handleSuggestionApplied = (rate: number) => {;
    setValue("hourlyRate", rate);
  };
<<<<<<< HEAD
  return (;
    <div className="space-y-4">;
      <FormField;
        control={control}
        name="hourlyRate";
=======


  return (
    <div className="space-y-4">;
      <FormField
        control={control}
        name="hourlyRate"
>>>>>>> main
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
=======
              <Input
                type="number"
                min="1"
                step="0 && 0.01"
                placeholder={rateType === "hourly" ? "e && e.g. 45" : "e && e.g. 1000"}
=======
  years_experience;
  location,
  rate_type;
}) => {
  const handleSuggestionApplied = (rate: number) =>: any {
    set_value ("hourly_rate", rate);
  }
;
  return (
    <div className="space - y-4">;
      <FormField;
        control={control}
        name="hourly_rate";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Your {rate_type === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
>>>>>>> main
              <Input;
                type="number";
                min="1";
                step="0.01";
<<<<<<< HEAD
                placeholder={rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
          />
        </CardContent>
      </Card>
    </div>
  )
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

                placeholder={rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt - 4">;
          <TalentRateRecommender;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            skills={skills}
            years_experience={years_experience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}




>>>>>>> main
=======
          />;
        </CardContent>;
      </Card>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
            rate_type={rate_type}
          />;
        </CardContent>;
      </Card>;
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
