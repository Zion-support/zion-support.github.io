<<<<<<< HEAD
import { CheckCircle, AlertCircle, EyeEyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
=======
import { CheckCircle, AlertCircle, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
interface ValidationRule {
required?: boolean;
minLength?: number;
maxLength?: number;
pattern?: RegExp;
custom?: (value: any) => string | null,
interface ValidatedFormFieldProps {
<<<<<<< HEAD
name: string;,
label: string;
type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
placeholder?: string;
description?: string;
validation?: ValidationRule;
options?: { value: string label: string }[],
form: any; // React Hook Form control,
=======
  name: string;
label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  description?: string;
}
  validation?: ValidationRule;}
  options?: { value: string label: string }[],
  form: any; // React Hook Form control,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
className?: string;
disabled?: boolean;
showValidIcon?: boolean;
debounceMs?: number,
export function ValidatedFormField({
}}})