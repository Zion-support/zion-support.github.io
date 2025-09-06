<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
import React, { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React, { useState } from "react",
import { Control, UseFormSetValue } from "react-hook-form",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
<<<<<<< HEAD

interface RateOptimizationSectionProps {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {

  control: Control<any>
  setValue: UseFormSetValue<any>
  skills: string[]
  yearsExperience: number
  location?: string

<<<<<<< HEAD
>>>>>>> interface RateOptimizationSectionProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface RateOptimizationSectionProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  location?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  location?: string
=======
  location?: string,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  rateType: "hourly" | "fixed"
=======
  location?: string,
  location?: string
>>>>>>>   rateType: "hourly" | "fixed"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  control
  setValue
  skills
  yearsExperience
<<<<<<< HEAD
<<<<<<< HEAD

=======
  location
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  location
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  control,
  setValue,
  skills,
  yearsExperience,
<<<<<<< HEAD
<<<<<<< HEAD

  location,

  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)

  return (
    <div className="space-y-4">
=======
>>>>>>>   location,
>>>>>>>   rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  }
>>>>>>>   return (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  rateType
},) => {
  const handleSuggestionApplied = (rate: number,) => {
    setValue("hourlyRate", rate)

  FormMessage;
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { TalentRateRecommender  } from '@/components / pricing / TalentRateRecommender';
import { Card, CardContent  } from '@/components / ui / card';
interface RateOptimizationSectionProps {
  control: Control < any>,
  set_value: UseFormSetValue < any>,
  skills: string[],
  years_experience: number,
  location?: string;
  rate_type: "hourly" | "fixed";
}
export const RateOptimizationSection: React.FC < RateOptimizationSectionProps> = ({
  control;
  set_value;
  skills;
  years_experience;
  location,
  rate_type;
}, ) => {
  const handleSuggestionApplied = (rate: number, ) =>: any {
    set_value ("hourly_rate", rate);

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  location,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  },


>>>>>>>   return (
>>>>>>>     <div className="space-y-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

                {...field}
=======
<<<<<<< HEAD
>>>>>>>                 {...field}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

            skills={skills}
=======
  )
}
"}
}

ursor/fix-website-loading-errors-and-merge-6662
=======
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
import React, { useState } from "react",;
import { Control, UseFormSetValue } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

    <div className="space - y-4">;
      <FormField;
        control = {control, }
        name="hourly_rate";
        render={({ field }: { field: any }, ) => (
          <FormItem>;
            <FormLabel > Your {rate_type === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
=======
  return (;
    <div className="space-y-4">;
      <FormField;
        control={control}
        name="hourlyRate";
        render={({ field }: { field: any }) => (;
          <FormItem>;
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FormControl>;
              <Input;
                type="number";
                min="1";
                step="0.01";
<<<<<<< HEAD

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
            skills = {skills,}
            yearsExperience = {yearsExperience,}
            location = {location,}
            onSuggestionApplied = {handleSuggestionApplied,}
            rateType = {rateType,}
          />
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
  )
}
"}
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
};
"};
};
<<<<<<< HEAD

>>>>>>>             skills={skills}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            skills={skills}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            yearsExperience={yearsExperience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
            rateType={rateType}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />;
        </CardContent>;
      </Card>;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
