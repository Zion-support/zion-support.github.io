
import React, { useState } from "react";
import { Control; UseFormSetValue } from "react-hook-form";
import { FormField;
, FormItem;
, FormLabel;
, FormControl;
, FormDescription;
, FormMessage } from "@/components/ui/form";,
import { Input } from "@/components/ui/input";,
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card";
import { ControlUseFormSetValue } from "react-hook-form";
import { FormField;, FormItem;, FormLabel;, FormControl;, FormDescription;
FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",;
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { CardCardContent } from "@/components/ui/card";
=======
import { Card; CardContent } from "@/components/ui/card";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
interface RateOptimizationSectionProps {
rateType: "hourly" | "fixed"}
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
)