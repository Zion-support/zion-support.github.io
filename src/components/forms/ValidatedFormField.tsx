import { CheckCircle,,, AlertCircle,,, Eye,,, EyeOff,,  } from 'lucide-react'
import import { Button,,  } from '@/components/ui/button';
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null,
interface ValidatedFormFieldProps {
  name: string;,
label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string label: string }[],
  form: any; // React Hook Form control,
className?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounceMs?: number,
export function ValidatedFormField({
