<<<<<<< HEAD
<<<<<<< HEAD

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,;
  SelectValue;
} from '@/components/ui/select'; import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react';
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
interface ValidationRule {;
<<<<<<< HEAD
interface ValidationRule {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

interface ValidationRule {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name: string
  label: string
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'number'
    | 'textarea'
    | 'select'
    | 'checkbox'
  placeholder?: string
  description?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[]
  form: any; // React Hook Form control
  className?: string
  disabled?: boolean
  showValidIcon?: boolean
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  debounceMs?: number
export function ValidatedFormField({

  name
  label
  type = 'text'
  placeholder
  description
  validation = {}
  options = []
  form
  className
  disabled = false
  showValidIcon = true
  debounceMs = 300
}: ValidatedFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [validationState, setValidationState] = useState<
    'idle' | 'validating' | 'valid' | 'invalid'
  >('idle')
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  )
  const fieldValue = form.watch(name)
  const fieldError = form.formState.errors[name]
  const isTouched = form.formState.touchedFields[name]
  // Debounced validation
  useEffect((,) => {
    if (!fieldValue |!isTouched) {
      setValidationState('idle')
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      return
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    setValidationState('validating')
    const timer = setTimeout(() => {
      const error = validateField(fieldValue)
      setValidationState(error ? 'invalid' : 'valid')
    }, debounceMs)
    setDebounceTimer(timer)
import React, { useState, useEffect } from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select'; import { Checkbox } from '@/components / ui / checkbox';
import { cn } from '@/lib / utils';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components / ui / button';
interface ValidationRule {
  required?: boolean;
  min_length?: number;
  max_length?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
interface ValidatedFormFieldProps {
  name: string;
  label: string;
  type?:;
    | 'text';
    | 'email';
    | 'password';
    | 'tel';
    | 'url';
    | 'number';
    | 'textarea';
    | 'select';
    | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
  form: any; // React Hook Form control;
  class_name?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounce_ms?: number;
export /**
 * ValidatedFormField - Function description
 */
function ValidatedFormField() {
  const [show_password, setShowPassword] = useState (false);
  const [validation_state, setValidationState] = useState<;
    'idle' | 'validating' | 'valid' | 'invalid';
  >('idle');
  const [debounce_timer, setDebounceTimer] = useState < NodeJS.Timeout | null>(
    null);
  const field_value = form.watch (name);
  const field_error = form.form_state.errors[name];
  const is_touched = form.form_state.touched_fields[name];
  // Debounced validation;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      setValidationState ('idle');
      return;
    }
    // Check condition
if ( {) {
  $2
}
      clear_timeout (debounce_timer);
    }
    setValidationState ('validating');
    const timer = set_timeout (() => {
      const error = validate_field (field_value);
      setValidationState (error ? 'invalid' : 'valid');
    }, debounce_ms);
    setDebounceTimer (timer);
    return () => {
      if (timer) clearTimeout(timer)
    }
<<<<<<< HEAD
    return () => {
      if (timer) clearTimeout(timer)
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [fieldValue, isTouched, debounceMs])
  const validateField = (value: any): string | null => {
    if (
      validation.required &&
      (!value |(typeof value === 'string' && value.trim() === ''))
<<<<<<< HEAD
  }, [field_value, is_touched, debounce_ms]);
  const validate_field = (value: any): string | null => {
    if (=== ''))) {
  $2
}
    ) {
      return `${label} is required`
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ) {
      return `${label} is required`
    }
    if (typeof value === 'string') {
      if (validation.minLength && value.length < validation.minLength) {
        return `${label} must be at least ${validation.minLength} characters`
      }
      if (validation.maxLength && value.length > validation.maxLength) {
        return `${label} must not exceed ${validation.maxLength} characters`
      }
      if (validation.pattern && !validation.pattern.test(value)) {
        return `${label} format is invalid`
      }
    }
    if (validation.custom) {
      return validation.custom(value)
    }
<<<<<<< HEAD
    return null
=======
    return null;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const getValidationIcon = () => {
    if (!showValidIcon |!isTouched |validationState === 'idle') return null
    switch (validationState) {
      case 'validating':
<<<<<<< HEAD
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return `${label} must be at least ${validation.min_length} characters`;
      }
      // Check condition
if ( {) {
  $2
}
        return `${label} must not exceed ${validation.max_length} characters`;
      }
      if () {) {
  $2
}
        return `${label} format is invalid`;
      }
    }
    // Check condition
if ( {) {
  $2
}
      return validation.custom (value);
    }
    return null;
  }
  const getValidationIcon = () =>: any {
    // Check condition
if (return null) {
  $2
}
    switch (validation_state) {
      case 'validating':;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return (
          <div className='animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full' />
        )
      case 'valid':
        return <CheckCircle className='h-4 w-4 text-green-500' />
      case 'invalid':
        return <AlertCircle className='h-4 w-4 text-red-500' />
      default:
        return null
    }
  }
  const getFieldClasses = () => {
    if (!isTouched) return ''
    switch (validationState) {
      case 'valid':
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
      case 'invalid':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      default:
        return ''
    }
  }
<<<<<<< HEAD
  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const render_field = () =>: any {
    const base_classes = cn (getFieldClasses (), class_name);
    switch (type) {



import React, { useState, useEffect } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button',;
interface ValidationRule {;
  required?: boolean,;
  minLength?: number,;
  maxLength?: number,;
  pattern?: RegExp,;
<<<<<<< HEAD
<<<<<<< HEAD
  const render_field = () =>: any {
    const base_classes = cn (getFieldClasses (), class_name);
    switch (type) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  custom?: (value: any) => string | null;
interface ValidatedFormFieldProps {;
  name: string;
  label: string;
  type?:;
    | 'text';
    | 'email';
    | 'password';
    | 'tel';
    | 'url';
    | 'number';
    | 'textarea';
    | 'select';
    | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
  form: any; // React Hook Form control;
  className?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounceMs?: number;
<<<<<<< HEAD
export function ValidatedFormField(): any ({;
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Checkbox } from '@/components/ui/checkbox',;
import { cn } from '@/lib/utils',;
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button',;
;
interface ValidationRule {;
  required?:boolean,;
  minLength?:number,;
  maxLength?:number,;
  pattern?:RegExp,;
  custom?:(value:any) => string | null;
}
;
interface ValidatedFormFieldProps {;
  name:string,;
  label:string,;
  type?:'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox',;
  placeholder?:string,;
  description?:string,;
  validation?:ValidationRule,;
  options?:{ value:string, label:string }[],;
  form:any, // React Hook Form control;
  className?:string,;
  disabled?:boolean,;
  showValidIcon?:boolean,;
  debounceMs?:number;
}
;
export function ValidatedFormField({;
  custom?: (value: any) => string | null;
}
;
interface ValidatedFormFieldProps {;
  name: string,;
  label: string,;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox',;
  placeholder?: string,;
  description?: string,;
  validation?: ValidationRule,;
  options?: { value: string, label: string }[],;
  form: any, // React Hook Form control;
  className?: string,;
  disabled?: boolean,;
  showValidIcon?: boolean,;
  debounceMs?: number;
}
;
export function ValidatedFormField({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function ValidatedFormField(): any ({;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name,;
  label,;
  type = 'text',;
  placeholder,;
  description,;
  validation = {},;
  options = [],;
  form,;
  className,;
  disabled = false,;
  showValidIcon = true,;
<<<<<<< HEAD
<<<<<<< HEAD
  debounceMs = 300}: ValidatedFormFieldProps) {;
  const [showPassword, setShowPassword] = useState(false),;
  const [validationState, setValidationState] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle'),;
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null),;
  const fieldValue = form.watch(name),;
  const fieldError = form.formState.errors[name],;
  const isTouched = form.formState.touchedFields[name],;
  // Debounced validation;
  useEffect(() => {;
    if (!fieldValue || !isTouched) {;
      setValidationState('idle'),;
      return;
    }
;
    if (debounceTimer) {;
      clearTimeout(debounceTimer);
    }
;
    setValidationState('validating'),;
    const timer = setTimeout(() => {;
      const error = validateField(fieldValue),;
      setValidationState(error ? 'invalid' : 'valid');
    }, debounceMs),;
    setDebounceTimer(timer),;
    return () => {;
      if (timer) clearTimeout(timer);
    }
  }, [fieldValue, isTouched, debounceMs]),;
  const validateField = (value: any): string | null => {;
    if (validation.required && (!value || (typeof value === 'string' && value.trim() === ''))) {;
      return `${label} is required`;
    }
;
    if (typeof value === 'string') {;
      if (validation.minLength && value.length < validation.minLength) {;
        return `${label} must be at least ${validation.minLength} characters`;
      }
;
      if (validation.maxLength && value.length > validation.maxLength) {;
        return `${label} must not exceed ${validation.maxLength} characters`;
      }
;
      if (validation.pattern && !validation.pattern.test(value)) {;
        return `${label} format is invalid`;
      }
    }
;
    if (validation.custom) {;
      return validation.custom(value);
    }

    return null
  },
  const getValidationIcon = () => {
    if (!showValidIcon || !isTouched || validationState === 'idle') return null
    switch (validationState) {
      case 'validating':
    return null;
  };
  const getValidationIcon = () => {;
    if (!showValidIcon || !isTouched || validationState === 'idle') return null;
    switch (validationState) {;
      case 'validating':;

  const getValidationIcon = () => {
    if (!showValidIcon || !isTouched || validationState === 'idle') return null
    switch (validationState) {
      case 'validating':
        return (
          <div className='animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full' />
        )
      case 'valid':
        return <CheckCircle className='h-4 w-4 text-green-500' />
      case 'invalid':
        return <AlertCircle className='h-4 w-4 text-red-500' />
      default:
        return null
    }
  }
  const getFieldClasses = () => {
    if (!isTouched) return ''
    switch (validationState) {
      case 'valid':
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
      case 'invalid':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      default:
        return ''
    }
  }
  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className)
    if (!showValidIcon || !isTouched || validationState === 'idle') return null,

    switch (validationState) {
      case 'validating':
        return <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />,
      case 'valid':
        return <CheckCircle className="h-4 w-4 text-green-500" />,
      case 'invalid':
        return <AlertCircle className="h-4 w-4 text-red-500" />,
      default: return null
;
    return null;
  },;
  const getValidationIcon = () => {;
    if (!showValidIcon || !isTouched || validationState === 'idle') return null,;
    switch (validationState) {;
      case 'validating':;
        return <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />,;
      case 'valid':;
        return <CheckCircle className="h-4 w-4 text-green-500" />,;
      case 'invalid':;
        return <AlertCircle className="h-4 w-4 text-red-500" />,;
      default: return null;
    }
  },;
  const getFieldClasses = () => {;
    if (!isTouched) return '',;
    switch (validationState) {;
      case 'valid':;
        return 'border-green-500 focus: border-green-500 focus:ring-green-500/20',;
      case 'invalid':;
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20',;
      default:;
        return '';
    }
  },

  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className),

      case 'textarea':
  };
  const getFieldClasses = () => {;
    if (!isTouched) return '';
    switch (validationState) {;
      case 'valid':;
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';
      case 'invalid':;
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';
      default:;
        return '';
    }
  };
  const renderField = () => {;
    const baseClasses = cn(getFieldClasses(), className);
    switch (type) {;
      case 'textarea':;
        return (
          <div className='relative'>;
            <Textarea
              disabled = {disabled,}
              className = {baseClasses,}
              rows = {4,}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  debounceMs = 300,;
}: ValidatedFormFieldProps) {;
  const [showPassword, setShowPassword] = useState(false);
  const [validationState, setValidationState] = useState<;
    'idle' | 'validating' | 'valid' | 'invalid';
  >('idle');
  const [debounceTimer, setDebounceTimer] = useState<NodeJS && NodeJS.Timeout | null>(;
    null;
  );

  const fieldValue = form && form.watch(name);
  const fieldError = form && form.formState.errors[name];
  const isTouched = form && form.formState.touchedFields[name];

  // Debounced validation;
  useEffect((,) => {;
    if (!fieldValue || !isTouched) {;
      setValidationState('idle');
      return;
    }

    if (debounceTimer) {;
      clearTimeout(debounceTimer);
    }

    setValidationState('validating');

    const timer = setTimeout(() => {;
      const error = validateField(fieldValue);
      setValidationState(error ? 'invalid' : 'valid');
    }, debounceMs);
    setDebounceTimer(timer);

    return () => {;
      if (timer) clearTimeout(timer);
    };
  }, [fieldValue, isTouched, debounceMs]);

  const validateField = (value: any): string | null => {;
    if (;
      validation && validation.required &&;
      (!value || (typeof value === 'string' && value && value.trim() === ''));
    ) {;
      return `${label} is required`;
    }

    if (typeof value === 'string') {;
      if (validation && validation.minLength && value && value.length < validation && validation.minLength) {;
        return `${label} must be at least ${validation && validation.minLength} characters`;
      }

      if (validation && validation.maxLength && value && value.length > validation && validation.maxLength) {;
        return `${label} must not exceed ${validation && validation.maxLength} characters`;
      }

      if (validation && validation.pattern && !validation && validation.pattern.test(value)) {;
        return `${label} format is invalid`;
      }
    }

    if (validation && validation.custom) {;
      return validation && validation.custom(value);
    }


    return null
  },




  const getValidationIcon = () => {


    switch (type) {
      case 'textarea':
        return (
          <div className='relative'>;
            <Textarea
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              disabled={disabled}
              className={baseClasses}
              rows={4}


              {...form.register(name)}
<<<<<<< HEAD
            <div className='absolute top-2 right-2'>{getValidationIcon()}</div>
          </div>
        )
      case 'select':
=======
            />
            <div className='absolute top-2 right-2'>{getValidationIcon()}</div>
          </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {...form && form.register(name)}
            />;
            <div className='absolute top-2 right-2'>{getValidationIcon()}</div>;
          </div>;
        );
<<<<<<< HEAD
    switch (type) {
      case 'textarea':
        return (
          <div className="relative">
            <Textarea
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              disabled = {disabled,}
              className = {baseClasses,}
              rows = {4,}
              disabled={disabled}
              className={baseClasses}
              rows={4}
<<<<<<< HEAD
              {...form.register(name)}
            />
            <div className="absolute top-2 right-2">
              {getValidationIcon()}
            </div>
          </div>
        )
      case 'select':
        return (
          <div className='relative'>
            <Select
              onValueChange={value => form.setValue(name, value)}
              disabled={disabled}
            >              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map(option => (                  <SelectItem key={option.value} value={option.value}>
        ),

      case 'select':
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


              {...form.register(name)}
            />
            <div className='absolute top-2 right-2'>{getValidationIcon()}</div>
          </div>

              {...form && form.register(name)}
            />;
            <div className='absolute top-2 right-2'>{getValidationIcon()}</div>;
          </div>;
        );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        ),


      case 'select':;
        return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="relative">
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>
              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="absolute top-2 right-8">
              {getValidationIcon()}
            </div>
          </div>
        )
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      case 'checkbox':
            >              <SelectTrigger className={baseClasses}>;
                <SelectValue placeholder={placeholder} />;
              </SelectTrigger>;
              <SelectContent>;
                {options && options.map(option => (                  <SelectItem key={option && option.value} value={option && option.value}>;
                    {option && option.label}
  debounceMs = 300} ValidatedFormFieldProps) {;
  const [showPassword, setShowPassword] = useState(false),;
  const [validationState, setValidationState] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle'),;
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null),;
;
  const fieldValue = form.watch(name),;
  const fieldError = form.formState.errors[name],;
  const isTouched = form.formState.touchedFields[name],;
;
  // Debounced validation;
  useEffect(() => {;
    if (!fieldValue || !isTouched) {;
      setValidationState('idle'),;
      return,;
    }
;
    if (debounceTimer) {;
      clearTimeout(debounceTimer),;
    }
;
    setValidationState('validating'),;
;
    const timer = setTimeout(() => {;
      const error = validateField(fieldValue),;
      setValidationState(error ? 'invalid' :'valid'),;
    }, debounceMs),;
;
    setDebounceTimer(timer),;
;
    return () => {;
      if (timer) clearTimeout(timer),;
    },;
  }, [fieldValue, isTouched, debounceMs]),;
;
  const validateField = (value:any):string | null => {;
    if (validation.required && (!value || (typeof value === 'string' && value.trim() === ''))) {;
      return `${label} is required`,;
    }
;
    if (typeof value === 'string') {;
      if (validation.minLength && value.length < validation.minLength) {;
        return `${label} must be at least ${validation.minLength} characters`,;
      }
;
      if (validation.maxLength && value.length > validation.maxLength) {;
        return `${label} must not exceed ${validation.maxLength} characters`,;
      }
;
      if (validation.pattern && !validation.pattern.test(value)) {;
        return `${label} format is invalid`,;
      }
    }
;
    if (validation.custom) {;
      return validation.custom(value),;
    }
;
    return null,;
  },;
;
  const getValidationIcon = () => {;
    if (!showValidIcon || !isTouched || validationState === 'idle') return null,;
;
    switch (validationState) {;
      case 'validating':;
        return <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />,;
      case 'valid':;
        return <CheckCircle className="h-4 w-4 text-green-500" />,;
      case 'invalid':;
        return <AlertCircle className="h-4 w-4 text-red-500" />,;
      default:return null;
    }
  },;
;
  const getFieldClasses = () => {;
    if (!isTouched) return '',;
    ;
    switch (validationState) {;
      case 'valid':;
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20',;
      case 'invalid':;
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20',;
      default:;
        return '';
    }
  },;
;
  const renderField = () => {;
    const baseClasses = cn(getFieldClasses(), className),;
;
    switch (type) {;
      case 'textarea':;
        return (;
          <div className="relative">;
            <Textarea;
              disabled={disabled}
              className={baseClasses}
              rows={4}
              {...form.register(name)}
            />;
            <div className="absolute top-2 right-2">;
              {getValidationIcon()}
            </div>;
          </div>;
        ),;
;
      case 'select':;
        return (;
          <div className="relative">;
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>;
              <SelectTrigger className={baseClasses}>;
                <SelectValue placeholder={placeholder} />;
              </SelectTrigger>;
              <SelectContent>;
                {options.map((option) => (;
                  <SelectItem key={option.value} value={option.value}>;                    {option.label}
                  </SelectItem>;
                ))}
=======


                    {option.label}
                  </SelectItem>
                ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ),



      case 'checkbox':
              </SelectContent>;
            </Select>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='absolute top-2 right-8'>{getValidationIcon()}</div>;
          </div>;
        );

      case 'checkbox':;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return (
          <div className='flex items-center space-x-2'>;
            <Checkbox
              id={name}
              checked={fieldValue}
              onCheckedChange={checked => form && form.setValue(name, checked)}
              disabled={disabled}
            />;
            <label
              htmlFor={name}
<<<<<<< HEAD
<<<<<<< HEAD
        )
        ),

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={name}
              checked={fieldValue}
              onCheckedChange={checked => form.setValue(name, checked)}
              disabled={disabled}
            />
            <label
              htmlFor={name}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'            >
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
            {getValidationIcon()}
          </div>
        )
        ),

      case 'password':
        return (
          <div className="relative">
            <Input
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'            >
            </label>
            {getValidationIcon()}
          </div>
        )
        return (
          <div className="relative">
            <Input
              type = {showPassword ? 'text' : 'password',}
              disabled = {disabled,}
              className = {cn(baseClasses, 'pr-20'),}
ursor/fix-website-loading-errors-and-merge-6662
=======


              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {label}
            </label>;
            {getValidationIcon()}
      case 'password':
          </div>;
        );
      case 'password':;
        return (
          <div className='relative'>;
=======
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'            >
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >


              {label}
            </label>;
            {getValidationIcon()}
          </div>
        )
        ),



      case 'password':
          </div>;
        );

      case 'password':;
        return (
          <div className="relative">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              type = {showPassword ? 'text' : 'password',}
              disabled = {disabled,}
              className = {cn(baseClasses, 'pr-20'),}
              type={showPassword ? 'text' : 'password'}
              disabled={disabled}
              className={cn(baseClasses, 'pr-20')}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
              {getValidationIcon()}
              <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                type='button'
                variant='ghost'
                size='sm'
                className='h-7 w-7 p-0'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}              >
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >

                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
<<<<<<< HEAD
<<<<<<< HEAD
              </Button>
            </div>
          </div>
              type = {showPassword ? 'text' : 'password',}
              disabled = {disabled,}
              className = {cn(baseClasses, 'pr-20'),}
              {...form && form.register(name)}
            />;
            <div className='absolute inset-y-0 right-0 flex items-center gap-1 pr-3'>;
            <div className="absolute top-2 right-8">;
              {getValidationIcon()}
            </div>;
          </div>;
        ),;
;
      case 'checkbox':;
        return (;
          <div className="flex items-center space-x-2">;
            <Checkbox;
              id={name}              checked={fieldValue}
              onCheckedChange={_(checked) => form.setValue(name, checked)}
              disabled={disabled}
            />;
            <label;
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
            >;              {label}
            </label>;
            {getValidationIcon()}
          </div>;
        ),;
;
      case 'password':;
        return (;
          <div className="relative">;
            <Input;
              type={showPassword ? 'text' :'password'}
              disabled={disabled}
              className={cn(baseClasses, 'pr-20')}
              {...form.register(name)}
            />;
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">;
              {getValidationIcon()}
              <Button;
                type="button";
                variant="ghost";
                size="sm";
                className="h-7 w-7 p-0";
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' :'Show password'}
              >;
                {showPassword ? (;
                  <EyeOff className="h-4 w-4" />;
                ) :(;
                  <Eye className="h-4 w-4" />;
                )}
              </Button>;
            </div>;
          </div>;
        )
        return (
          <div className="relative">
            <Input
        )
        ),

              type = {type,}
              disabled = {disabled,}
              className = {baseClasses,}
              {...form.register(name)}
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
              {getValidationIcon()}
            </div>
          </div>
        )
    }
  }
  if (type === 'checkbox') {
        render={() => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
            <FormControl>{renderField()}</FormControl>            {(fieldError |description) && (
              <div className='space-y-1'>
                {fieldError && (
                  <FormMessage className='text-sm text-red-500'>
=======


        ),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </Button>
            </div>
          </div>
        )
        ),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      default:
              </Button>;
            </div>;
          </div>;
        );

      default:;
        return (
<<<<<<< HEAD
          <div className='relative'>;
=======
          <div className="relative">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input


              type={type}
              disabled={disabled}
              className={baseClasses}
              {...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {getValidationIcon()}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        );
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },;
  if (type === 'checkbox') {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  if (type === 'checkbox') {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (;
      <FormField;
        control={form.control}
        name={name}
        render={() => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              {renderField()}
            </FormControl>
            {(fieldError || description) && (
              <div className="space-y-1">
                {fieldError && (
                  <FormMessage className="text-sm text-red-500">
<<<<<<< HEAD
<<<<<<< HEAD
        render={() => (;
          <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
            <FormControl>{renderField()}</FormControl>            {(fieldError || description) && (;
              <div className='space-y-1'>;
                {fieldError && (;
                  <FormMessage className='text-sm text-red-500'>;
                    {fieldError && fieldError.message}
                  </FormMessage>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    {fieldError.message}
                  </FormMessage>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
                {description && !fieldError && (

                  <p className="text-sm text-muted-foreground">{description}</p>

                )}
              </div>;
          </FormItem>;
        )}
      />
    )
      case 'textarea':;
        return (
          <div className='relative'>;
            <Textarea;
              disabled = {disabled, }
              class_name = {base_classes, }
              rows = {4, }
              {...form.register (name)}
            />;
            <div className='absolute top - 2 right - 2'>{getValidationIcon ()}</div>;
          </div>);
      case 'select':;
        return (
          <div className='relative'>;
            <Select;
              onValueChange={value => form.set_value (name, value)}
              disabled={disabled}
            >              <SelectTrigger className={base_classes}>;
                <SelectValue placeholder={placeholder} />;
              </SelectTrigger>;
              <SelectContent>;
                {options.map (option => (                  <SelectItem key={option.value} value={option.value}>;
                    {option.label}
                  </SelectItem>))}
              </SelectContent>;
            </Select>;
            <div className='absolute top - 2 right - 8'>{getValidationIcon ()}</div>;
          </div>);
      case 'checkbox':;
        return (
          <div className='flex items - center space - x-2'>;
            <Checkbox;
              id={name}
              checked={field_value}
              onCheckedChange={checked => form.set_value (name, checked)}
              disabled={disabled}
            />;
            <label;
              html_for={name}
              className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70'            >;
              {label}
            </label>;
            {getValidationIcon ()}
          </div>);
      case 'password':;
        return (
          <div className='relative'>;
            <Input;
              type = {show_password ? 'text' : 'password', }
              disabled = {disabled, }
              class_name = {cn (base_classes, 'pr - 20'), }
              {...form.register (name)}
            />;
            <div className='absolute inset - y-0 right - 0 flex items - center gap - 1 pr - 3'>;
              {getValidationIcon ()}
              <Button;
                type='button';
                variant='ghost';
                size='sm';
                className='h - 7 w - 7 p - 0';
                on_click={() => setShowPassword (!show_password)}
                aria - label={show_password ? 'Hide password' : 'Show password'}              >;
                {show_password ? (
                  <EyeOff className='h - 4 w - 4' />) : (
                  <Eye className='h - 4 w - 4' />)}
              </Button>;
            </div>;
          </div>);
      default:;
        return (
          <div className='relative'>;
            <Input;
              type = {type, }
              disabled = {disabled, }
              class_name = {base_classes, }
              {...form.register (name)}
            />;
            <div className='absolute inset - y-0 right - 0 flex items - center pr - 3'>;
              {getValidationIcon ()}
            </div>;
          </div>);
    }
  }
  // Check condition
if ( {) {
  $2
}
        render={() => (
          <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;
            <FormControl>{render_field ()}</FormControl>            {(field_error || description) && (
              <div className='space - y-1'>;
                {field_error && (
                  <FormMessage className='text - sm text - red - 500'>;
                    {field_error.message}
                  </FormMessage>)}
                {description && !field_error && (
                  <p className='text - sm text - muted - foreground'>{description}</p>)}
              </div>)}
          </FormItem>)}
      />);
  }
      render={() => (
        <FormItem>;
          <FormLabel className='text - sm font - medium'>;
            {label}
            {validation.required && (
                    {fieldError.message}
                  </FormMessage>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
                {description && !fieldError && (
                  <p className='text-sm text-muted-foreground'>{description}</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
<<<<<<< HEAD
                )}
              </div>
            )}
          </FormItem>
=======

                )}
              </div>;
            )}
          </FormItem>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}
      />
    )
  }
      render={() => (
<<<<<<< HEAD
        <FormItem>
          <FormLabel className='text-sm font-medium'>
            {label}
            {validation.required && (
              <span className='text-red-500 ml-1'>*</span>
            )}          </FormLabel>
          <FormControl>{renderField()}</FormControl>
          {(fieldError |description) && (
            <div className='space-y-1'>
              {fieldError && (
                <FormMessage className='text-sm text-red-500 flex items-center gap-1'>
                  <AlertCircle className='h-3 w-3' />
=======
        <FormItem>;
          <FormLabel className='text - sm font - medium'>;
            {label}
            {validation.required && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



      />;
    );
  }
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      render={() => (;
        <FormItem>;
          <FormLabel className='text-sm font-medium'>;
            {label}
<<<<<<< HEAD
<<<<<<< HEAD
            {validation && validation.required && (;
              <span className='text-red-500 ml-1'>*</span>;
            )}          </FormLabel>;
          <FormControl>{renderField()}</FormControl>;
          {(fieldError || description) && (;
            <div className='space-y-1'>;
              {fieldError && (;
                <FormMessage className='text-sm text-red-500 flex items-center gap-1'>;
                  <AlertCircle className='h-3 w-3' />;
                  {fieldError && fieldError.message}
                </FormMessage>;
              )}
              {description && !fieldError && (
                <p className='text-sm text-muted-foreground'>{description}</p>
            </div>
          )}
        </FormItem>
      )}
  }}
    }
  }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            {validation.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            {renderField()}
          </FormControl>
          {(fieldError || description) && (
            <div className="space-y-1">
              {fieldError && (
                <FormMessage className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />


                  {fieldError.message}
                </FormMessage>
              )}
              {description && !fieldError && (
<<<<<<< HEAD

                <p className="text-sm text-muted-foreground">{description}</p>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              )}
            </div>;
          )}
        </FormItem>;
      )}
              <span className='text - red - 500 ml - 1'>*</span>)}          </FormLabel>;
          <FormControl>{render_field ()}</FormControl>;
          {(field_error || description) && (
            <div className='space - y-1'>;
              {field_error && (
                <FormMessage className='text - sm text - red - 500 flex items - center gap - 1'>;
                  <AlertCircle className='h - 3 w - 3' />;
                  {field_error.message}
                </FormMessage>)}
              {description && !field_error && (
                <p className='text - sm text - muted - foreground'>{description}</p>)}
            </div>)}
        </FormItem>)}
    />);
// Validation helpers for common patterns;
export const validation_patterns = {
  email: /^[a - z_a - Z0 - 9._%+-]+@[a - z_a - Z0 - 9.-]+\.[a - z_a - Z]{2}$/,
  phone: /^[\+]?[1 - 9][\d]{0, 15}$/,
  url: /^https?:\/\/.+/,
  strong_password:;
    /^(?=.*[a - z])(?=.*[A - Z])(?=.*\d)(?=.*[@$!%*?&])[A - Za - z\d@$!%*?&]{8}$/,
}
// Pre - configured validation rules;
export const common_validations = {
  required: { required: true },
  email: {
    required: true,
    pattern: validation_patterns.email,
    custom: (value: string, ) => {
      if () {) {
  $2
}
        return 'Please enter a valid email address';
      }
      return null;
    },
  },
  password: {
    required: true,
    min_length: 8,
    custom: (value: string, ) => {
      if () {) {
  $2
}
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character';
      }
      return null;
    },
  },
  phone: {
    pattern: validation_patterns.phone,
    custom: (value: string, ) => {
      if () {) {
  $2
}
        return 'Please enter a valid phone number';
      }
      return null;
    },
  },
}
    }
  }}
    }
    />;
  );
// Validation helpers for common patterns;
export const validationPatterns = {;
  email: /^[a-zA-Z0-9 && 9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/,;
  phone: /^[\+]?[1-9][\d]{0,15}$/,;
  url: /^https?:\/\/.+/,;
  strongPassword:;
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/,;
};
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Pre-configured validation rules;
export const commonValidations = {;
  required: { required: true },;
  email: {;
    required: true,;
    pattern: validationPatterns && validationPatterns.email,;
    custom: (value: string,) => {;
      if (value && !validationPatterns && validationPatterns.email.test(value)) {;
        return 'Please enter a valid email address';
      }
      return null;
    },;
  },;
  password: {;
    required: true,;
    minLength: 8,;
    custom: (value: string,) => {;
      if (value && !validationPatterns && validationPatterns.strongPassword.test(value)) {;
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character';
      }
      return null;
    },;
  },;
  phone: {;
    pattern: validationPatterns && validationPatterns.phone,;
    custom: (value: string,) => {;
      if (value && !validationPatterns && validationPatterns.phone.test(value)) {;
        return 'Please enter a valid phone number';
      }
      return null;
<<<<<<< HEAD
    },;
  },;
};
    };
  }},;
    };
  }},;
  }},
        ),;
;
      default:;
        return (;
          <div className="relative">;
            <Input;
              type={type}
              disabled={disabled}
              className={baseClasses}
              {...form.register(name)}
            />;
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">;
              {getValidationIcon()}
            </div>;
          </div>;
        ),;
    }
  },;
;
  if (type === 'checkbox') {;
    return (;
      <FormField;
        control={form.control}
        name={name}
        render={() => (;
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
            <FormControl>;
              {renderField()}
            </FormControl>;
            {(fieldError || description) && (;
              <div className="space-y-1">;
                {fieldError && (;
                  <FormMessage className="text-sm text-red-500">;                    {fieldError.message}
                  </FormMessage>;
                )}
                {description && !fieldError && (;
                  <p className="text-sm text-muted-foreground">{description}</p>;
                )}
              </div>;            )}
          </FormItem>;
        )}
      />;
    ),;
  }
      />;
    );
  }
;
  return (;
    <FormField;
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className="text-sm font-medium">
            {label}
            {validation.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            {renderField()}
          </FormControl>
          {(fieldError || description) && (
            <div className="space-y-1">
              {fieldError && (
                <FormMessage className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {fieldError.message}
                </FormMessage>
              )}
              {description && !fieldError && (
                <p className='text-sm text-muted-foreground'>{description}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
=======
                <p className='text-sm text-muted-foreground'>{description}</p>
                <p className="text-sm text-muted-foreground">{description}</p>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
            </div>
          )}
        </FormItem>
      )}
    />
  )
// Validation helpers for common patterns
export const validationPatterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/
  phone: /^[\+]?[1-9][\d]{0,15}$/
  url: /^https?:\/\/.+/
  strongPassword:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/
}
// Pre-configured validation rules
export const commonValidations = {
  required: { required: true }
  email: {
    required: true
    pattern: validationPatterns.email
    custom: (value: string,) => {
      if (value && !validationPatterns.email.test(value)) {
        return 'Please enter a valid email address'
      }
      return null
    }
  }
  password: {
    required: true
    minLength: 8
    custom: (value: string,) => {
      if (value && !validationPatterns.strongPassword.test(value)) {
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character'
      }
      return null
    }
  }
  phone: {
    pattern: validationPatterns.phone
    custom: (value: string,) => {
      if (value && !validationPatterns.phone.test(value)) {
        return 'Please enter a valid phone number'
      }
      return null
    }
  }
}
    }
  }}
    }
<<<<<<< HEAD
  }}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }},
    };
  }};
<<<<<<< HEAD
    />;
  );
}
;
// Validation helpers for common patterns;
export const validationPatterns = {;
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/,;
  phone: /^[\+]?[1-9][\d]{0,15}$/,;
  url: /^https?:\/\/.+/,;
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/},;
=======


    />;
  );

// Validation helpers for common patterns;
export const validationPatterns = {;
  email: /^[a-zA-Z0-9 && 9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/,;
  phone: /^[\+]?[1-9][\d]{0,15}$/,;
  url: /^https?:\/\/.+/,;
  strongPassword:;
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/,;
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Pre-configured validation rules;
export const commonValidations = {;
  required: { required: true },;
  email: {;
    required: true,;
<<<<<<< HEAD
    pattern: validationPatterns.email,;
    custom: (value: string) => {;
      if (value && !validationPatterns.email.test(value)) {;
        return 'Please enter a valid email address';
      }
      return null;
    }
=======
    pattern: validationPatterns && validationPatterns.email,;
    custom: (value: string,) => {;
      if (value && !validationPatterns && validationPatterns.email.test(value)) {;
        return 'Please enter a valid email address';
      }
      return null;
    },;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },;
  password: {;
    required: true,;
    minLength: 8,;
<<<<<<< HEAD
    custom: (value: string) => {;
      if (value && !validationPatterns.strongPassword.test(value)) {;
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character';
      }
      return null;
    }
  },;
  phone: {;
    pattern: validationPatterns.phone;
    custom: (value: string) => {;
      if (value && !validationPatterns.phone.test(value)) {;
        return 'Please enter a valid phone number';
      }
      return null;
    }
  }};

  }},
    }
  }};
=======
=======
    custom: (value: string,) => {;
      if (value && !validationPatterns && validationPatterns.strongPassword.test(value)) {;
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character';
      }
      return null;
    },;
  },;
  phone: {;
    pattern: validationPatterns && validationPatterns.phone,;
    custom: (value: string,) => {;
      if (value && !validationPatterns && validationPatterns.phone.test(value)) {;
        return 'Please enter a valid phone number';
      }
      return null;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  }},
    }
<<<<<<< HEAD
  }};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
