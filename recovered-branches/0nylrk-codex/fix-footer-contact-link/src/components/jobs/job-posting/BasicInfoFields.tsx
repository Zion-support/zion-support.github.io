import React, { useState } from "react";
import { Control } from "react-hook-form";

import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender",
import { Card, CardContent } from "@/components/ui/card",


interface BasicInfoFieldsProps {
  control: Control<any>;
}


export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [minBudget, setMinBudget] = useState<string>("");
  const [maxBudget, setMaxBudget] = useState<string>("");
  const handleSuggestionApplied = null;

