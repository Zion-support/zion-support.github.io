<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx


<<<<<<< HEAD
import React, { useState } from "react",
import { Control } from "react-hook-form",

=======

=======

<<<<<<< HEAD
import React, { useState } from "react";
<<<<<<< HEAD
import { Control } from "react-hook-form";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";
<<<<<<< HEAD

=======
import React, { useState } from "react",
import { Control } from "react-hook-form",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { Control } from "react-hook-form",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
import {Control} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {TalentRateRecommender} from "@/components/pricing/TalentRateRecommender";
import {Card, CardContent} from "@/components/ui/card";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx

=======

import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
  location?: string,
<<<<<<< HEAD

  rateType: "hourly" | "fixed"
}

<<<<<<< HEAD
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({

  location,
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
<<<<<<< HEAD
<<<<<<< HEAD

=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface RateOptimizationSectionProps {;
  control: Control<any>,;
  setValue: (name: string, value: any) => void,;
  skills: string[],;
  yearsExperience: number,;
<<<<<<< HEAD
  location?: string;
  rateType: "hourly" | "fixed";
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx


export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;

=======
========
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
  location,;
  rateType;
}) => {;
  const handleSuggestionApplied = (rate: number) => {;
    setValue("hourlyRate", rate);
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
  return (
    <div className="space-y-4">;
      <FormField
        control={control}
        name="hourlyRate"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
            <FormControl>;
              <Input
                type="number"
                min="1"
                step="0 && 0.01"
                placeholder={rateType === "hourly" ? "e && e.g. 45" : "e && e.g. 1000"}
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
=======

import React, { useState } from "react",;
import { Control } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",;
import { Card, CardContent } from "@/components/ui/card",;
;
interface RateOptimizationSectionProps {;
  control:Control<any>,;
  setValue:(name:string, value:any) => void,;
  skills:string[],;
  yearsExperience:number,;
  location?:string,;
  rateType:"hourly" | "fixed";
}
;
export const RateOptimizationSection:React.FC<RateOptimizationSectionProps> = ({;
=======
  location?: string,;
  rateType: "hourly" | "fixed";
}
;
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  control,;
  setValue,;
  skills,;
  yearsExperience,;
  location,;
  rateType;
}) => {;
<<<<<<< HEAD
  const handleSuggestionApplied = (rate:number) => {;
    setValue("hourlyRate", rate),;
  },;
;
=======
  const handleSuggestionApplied = (rate: number) => {;
    setValue("hourlyRate", rate);
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="space-y-4">;
      <FormField;
        control={control}
        name="hourlyRate";
        render={({ field }) => (;
          <FormItem>;
<<<<<<< HEAD
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" :"Fixed Rate"} ($USD)</FormLabel>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FormControl>;
              <Input;
                type="number";
                min="1";
                step="0.01";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx

                placeholder={rateType === "hourly" ? "e.g. 45" : "e.g. 1000"}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
                placeholder={rate_type === "hourly" ? "e.g. 45" : "e.g. 1000"}
=======
                placeholder={rateType === "hourly" ? "e.g. 45" :"e.g. 1000"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Set a competitive rate based on your skills and experience;
            </FormDescription>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
      />;
      <Card>;
        <CardContent className="pt-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
          <TalentRateRecommender
          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt - 4">;
          <TalentRateRecommender;
            skills={skills}
            years_experience={years_experience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
<<<<<<< HEAD
            rateType={rateType}

=======




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
          </FormItem>;
        )}
      />;
;
      <Card>;
        <CardContent className="pt-4">;
          <TalentRateRecommender;
            skills={skills}            yearsExperience={yearsExperience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
            rateType={rateType}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />;
        </CardContent>;
      </Card>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );

<<<<<<< HEAD
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
            rate_type={rate_type}
          />;
        </CardContent>;
      </Card>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/RateOptimizationSection.tsx
=======
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
