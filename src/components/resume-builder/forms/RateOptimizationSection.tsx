
import React, { useState } from "react",
import { Control, UseFormSetValue } from "react-hook-form",import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
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
interface RateOptimizationSectionProps {control: Control<any>;
  setValue: UseFormSetValue<any>;
  skills: string[];
  yearsExperience: number,
  location?: string;
  rateType: &quot;hourly&quot; | &quot;fixed&quot
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
    setValue("hourlyRate", rate)
  },
  return (
    <div className=&quot;space-y-4&quot;>
      <FormField,
control={control}
        name=&quot;hourlyRate&quot;
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Your {rateType === &quot;hourly&quot; ? &quot;Hourly Rate&quot; : &quot;Fixed Rate&quot} ($USD)</FormLabel>
            <FormControl>
              <Input,
type=&quot;number&quot;
                min=&quot;1&quot;
                step=&quot;0.01&quot;
                {...field}
  rateType: "hourly" | "fixed"}

export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = (_{control, setValue, skills, yearsExperience, location, rateType}) => {const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)};

  return (_<div className="space-y-4">
      <FormField,
control={control}
        name="hourlyRate"
        render={_({ field}: {field: unknown}) => (
          <FormItem>
            <FormLabel>Your {rateType === "hourly" ? "Hourly Rate" : "Fixed Rate"} ($USD)</FormLabel>
            <FormControl>
              <Input,
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
        <CardContent className=&quot;pt-4&quot;>
          <TalentRateRecommender,
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
},
