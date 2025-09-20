
import React, { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";
import { FormField;
<<<<<<< HEAD
, , FormItem;
, , FormLabel;
, , FormControl;
, , FormDescription;
, , FormMessage,
} from "@/components/ui/form",
import { Input,  } from "@/components/ui/input",
import { TalentRateRecommender,  } from "@/components/pricing/TalentRateRecommender";
import { Card,, CardContent,  } from "@/components/ui/card";
interface RateOptimizationSectionProps {
rateType: "hourly" | "fixed";
=======
, FormItem;
, FormLabel;
, FormControl;
, FormDescription;
, FormMessage } from "@/components/ui/form";,
import { Input } from "@/components/ui/input";,
import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender";
import { Card, CardContent } from "@/components/ui/card";
interface RateOptimizationSectionProps {
rateType: "hourly" | "fixed"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
export const RateOptimizationSection: React.FC<RateOptimizationSectionProps> = ({
})