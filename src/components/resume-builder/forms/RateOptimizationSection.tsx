} import {
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;


import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,



import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",

interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,
  location?: string,
  rateType: "hourly" | "fixed"
}
