
import React, { useState } from "
import { Control,,, UseFormSetValue,,  } from "
import import { FormField;
,, ,, FormItem;
,, ,, FormLabel;
,, ,, FormControl;
,, ,, FormDescription;
,, ,, FormMessage,
 } from "@/components/ui/form",
import { Input,,  } from "@/components/ui/input",
import { TalentRateRecommender,,  } from "
import { Card,,, CardContent,,  } from "
interface RateOptimizationSectionProps {
rateType: "hourly" | "fixed"
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
