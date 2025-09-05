
import React, { useState } from &quot;react&quot;;
import { Control } from &quot;react-hook-form&quot;;
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription,
  FormMessage
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { TalentRateRecommender } from &quot;@/components/pricing/TalentRateRecommender&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;

interface RateOptimizationSectionProps {
  control: Control<any>;
  setValue: (name: string, value: any) => void;
  skills: string[];
  yearsExperience: number;
  location?: string;
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
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
    setValue(&quot;hourlyRate&quot;, rate);
  };

  return (
    <div className=&quot;space-y-4&quot;>
      <FormField
        control={control}
        name=&quot;hourlyRate&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your {rateType === &quot;hourly&quot; ? &quot;Hourly Rate&quot; : &quot;Fixed Rate&quot;} ($USD)</FormLabel>
            <FormControl>
              <Input
                type=&quot;number&quot;
                min=&quot;1&quot;
                step=&quot;0.01&quot;
                placeholder={rateType === &quot;hourly&quot; ? &quot;e.g. 45&quot; : &quot;e.g. 1000&quot;}
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
        <CardContent className=&quot;pt-4&quot;>
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
