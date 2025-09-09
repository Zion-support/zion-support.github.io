  FormField,

  FormField,
FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./useHireRequestForm";
interface PersonalInfoFieldsProps {}
  form: UseFormReturn<FormValues>;

}

import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {UseFormReturn} from "react-hook-form";
import {FormValues} from "./useHireRequestForm";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",

interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { UseFormReturn } from "react-hook-form",;  return (
    <>;
      <FormField;
        control={form && form.control}"
        name="requesterName"
  );
};