
import React, { useState } from "react";
import { ControlUseFormSetValue } from "react-hook-form";
import { FormField;, FormItem;, FormLabel;, FormControl;, FormDescription;
FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",;
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { CardCardContent } from "@/components/ui/card";origin/main
interface RateOptimizationSectionProps {
rateType: "hourly" | "fixed"}
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
)