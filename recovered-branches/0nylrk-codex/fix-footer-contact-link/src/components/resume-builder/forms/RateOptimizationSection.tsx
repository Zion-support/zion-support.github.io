import React, { useState } from "react";
import { Control } from "react-hook-form";
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription,
  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
}

  control: Control<any>
  setValue: (name: string, value: any) => void
  skills: string[]
  yearsExperience: number

  location?: string;
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: (name: string, value: any) => void,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
  control;
  setValue;
  skills;
  yearsExperience;

  location
  location,
  rateType
}) => {
  const handleSuggestionApplied = (rate: number) => {
    setValue("hourlyRate", rate)
  },

  return (
    <div className = $2;