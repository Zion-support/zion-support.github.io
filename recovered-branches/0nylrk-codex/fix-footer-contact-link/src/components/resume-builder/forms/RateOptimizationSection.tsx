

<<<<<<< HEAD

import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";

import React, { useState } from "react",
import { Control } from "react-hook-form",

import React, { useState } from "react",
import { Control } from "react-hook-form",
import React, { useState } from "react",
import { Control } from "react-hook-form",
import React, { useState } from "react",
import { Control } from "react-hook-form",
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
<<<<<<< HEAD
  location?: string,

  rateType: "hourly" | "fixed"
}



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



  location
  control,
  setValue,
  skills,
  yearsExperience,
  location,
  rateType
}) => {
=======
  location?: string,}) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)

  },

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
interface RateOptimizationSectionProps {;
=======
                placeholder={rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}interface RateOptimizationSectionProps {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  control: Control<any>,;
  setValue: (name: string, value: any) => void,;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
  rateType: "hourly" | "fixed";
}

<<<<<<< HEAD

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  location?: string;
  rateType: "hourly" | "fixed";
}
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
=======
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="space-y-4">;
      <FormField
        control={control}
        name="hourlyRate"
<<<<<<< HEAD
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
              <Input
                type="number"
                min="1"
                step="0 && 0.01"
                placeholder={rateType === "hourly" ? "e && e.g. 45" : "e && e.g. 1000"}
            <FormControl>;
=======
            <FormControl>;            <FormControl>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              <Input;
                type="number";
                min="1";
                step="0.01";
<<<<<<< HEAD

                placeholder={rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}


                placeholder={rateType === "hourly" ? "e.g. 45" :"e.g. 1000"}
                placeholder={rate_type === "hourly" ? "e.g. 45" : "e.g. 1000"}
=======
                placeholder={rate_type === "hourly" ? "e.g. 45" : "e.g. 1000"}                placeholder={rateType === "hourly" ? "e.g. 45" :"e.g. 1000"}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD
          <TalentRateRecommender
          <TalentRateRecommender
          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt - 4">;
          <TalentRateRecommender;
            skills={skills}
=======
          <TalentRateRecommender          <TalentRateRecommender
          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt-4">;
          <TalentRateRecommender;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            years_experience={years_experience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}

<<<<<<< HEAD



          />;
        </CardContent>;
      </Card>;
    </div>;
  );




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
            rate_type={rate_type}
          />;
        </CardContent>;
      </Card>;
    </div>);
}
<<<<<<< HEAD
;
  ),;
},; import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface RateOptimizationSectionProps {
  control: Control<any>;
setValue: (name: string, value: unknown) => void;
skills: string[];
yearsExperience: number;
location?: string;
return (<div className="space-y-4" > <FormField control= {
  control 
}name="hourlyRate" render= {
  ({
  field 
}) => (<FormItem> <FormLabel>Your {
  rateType === "hourly" ? "Hourly Rate" : "Fixed Rate" 
}($USD) </FormLabel> <FormControl> <Input type="number" min="1" step="0.01" placeholder= {
  rateType === "hourly" ? "e.g. 45" : "e.g. 1000" 
}{
  ...field 
}
}/> <Card> <CardContent className="pt-4" > <TalentRateRecommender skills= {
  skills 
}yearsExperience= {
  yearsExperience 
}location= {
  location 
}onSuggestionApplied= {
  handleSuggestionApplied 
}rateType= {
  rateType 
}/> </CardContent> </Card> </div>) 
};
  );
};
=======
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
