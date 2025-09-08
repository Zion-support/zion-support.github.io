import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TalentProfile } from "@/types/talent";
import { FormValues } from "./useHireRequestForm";
interface BudgetFieldsProps {
  form: UseFormReturn < FormValues>;

  return (
