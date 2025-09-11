<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} import {
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
<<<<<<< HEAD
<<<<<<< HEAD


import React, { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
import React, { useState } from "react",
import { Control, UseFormSetValue } from "react-hook-form",
import React, { useState } from "react",
import { Control, UseFormSetValue } from "react-hook-form",
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  control: Control<any>
  setValue: UseFormSetValue<any>
  skills: string[]
  yearsExperience: number
  location?: string

<<<<<<< HEAD
=======

interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

=======


import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
<<<<<<< HEAD
  location?: string,
<<<<<<< HEAD
  location?: string
  location?: string,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  rateType: "hourly" | "fixed"
  location?: string,
  location?: string
}
<<<<<<< HEAD
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
=======



import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  control
  setValue
  skills
  yearsExperience
<<<<<<< HEAD
  location
  location
  location
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  control,
  setValue,
  skills,
  yearsExperience,
<<<<<<< HEAD
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  }
=======



  location,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  control: Control < any>,
  set_value: UseFormSetValue < any>,
  skills: string[],
  years_experience: number,
  location?: string;
  rate_type: "hourly" | "fixed";
=======
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
  location,
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  )
}
"}
}

ursor/fix-website-loading-errors-and-merge-6662
  }
  },

=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  },


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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { Control, UseFormSetValue } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage;
<<<<<<< HEAD
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",;
import { Card, CardContent } from "@/components/ui/card",;
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface RateOptimizationSectionProps {;
  control: Control<any>,;
  setValue: UseFormSetValue<any>,;
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
=======
  location?: string;
  rateType: "hourly" | "fixed";
}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({;
  control;
  setValue;
  skills;
  yearsExperience;
  location,;
  rateType;
},) => {;
  const handleSuggestionApplied = (rate: number,) => {;
    setValue("hourlyRate", rate);
  };

  return (

    <div className="space - y-4">;
      <FormField;
        control = {control, }
        name="hourly_rate";
        render={({ field }: { field: any }, ) => (
          <FormItem>;
            <FormLabel > Your {rate_type === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormControl>;
              <Input;
                type="number";
                min="1";
                step="0.01";
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );
};
"};
};
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            skills={skills}
            yearsExperience={yearsExperience}
            location={location}
            onSuggestionApplied={handleSuggestionApplied}
            rateType={rateType}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </CardContent>;
      </Card>;
    </div>;
  );
};


<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt - 4">;
          <TalentRateRecommender;
            skills = {skills, }
            years_experience = {years_experience, }
            location = {location, }
            onSuggestionApplied = {handleSuggestionApplied, }
            rate_type = {rate_type, }
          />;
        </CardContent>;
      </Card>;
    </div>);
}
"},
}
<<<<<<< HEAD
=======
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
