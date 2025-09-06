import React, { useState, useEffect } from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage  } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Checkbox  } from '@/components/ui/checkbox';
import { cn  } from '@/lib/utils';
import React, { useState, useEffect } from 'react'
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'; import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button';
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null
interface ValidatedFormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string, label: string }[],
  form: any, // React Hook Form control
  className?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounceMs?: number
export function ValidatedFormField({
      return null;
    },
  },
};
