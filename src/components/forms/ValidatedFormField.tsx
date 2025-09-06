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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,;
  SelectValue;
} from '@/components/ui/select'; import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button';
interface ValidationRule {;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
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
      return;
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
    ) {
      return `${label} is required`;
    }
    return null
  }
  const getValidationIcon = () => {
    if (!showValidIcon |!isTouched |validationState === 'idle') return null
    switch (validationState) {
      case 'validating':
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
        return (
          <div className='animate - spin h - 4 w - 4 border - 2 border - primary border - t-transparent rounded - full' />);
      case 'valid':;
        return <CheckCircle className='h - 4 w - 4 text - green - 500' />;
      case 'invalid':;
        return <AlertCircle className='h - 4 w - 4 text - red - 500' />;
      default:;
        return null;
    }
  }
      case 'valid':;
        return 'border - green - 500 focus:border - green - 500 focus:ring - green - 500 / 20';
      case 'invalid':;
        return 'border - red - 500 focus:border - red - 500 focus:ring - red - 500 / 20';
      default:;
        return '';
    }
  },

  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className),

              {...form.register(name)}
            />
            <div className="absolute top-2 right-2">
              {getValidationIcon()}
            </div>
          </div>
          <div className="relative">
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>
              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}

        ),

      case 'checkbox':
            <Checkbox
              id={name}
              checked={fieldValue}
              onCheckedChange={checked => form && form.setValue(name, checked)}
              disabled={disabled}
            />;
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>;
            {getValidationIcon()}
              type={showPassword ? 'text' : 'password'}
              disabled={disabled}
              className={cn(baseClasses, 'pr-20')}
              {...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
              {getValidationIcon()}
              <Button
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
        return (
          <div className='relative'>;
            <Input
              type = {type,}
              disabled = {disabled,}
              className = {baseClasses,}
              {...form && form.register(name)}
            />;
            <div className='absolute inset-y-0 right-0 flex items-center pr-3'>;
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
                )}
                {description && !fieldError && (

                  <p className="text-sm text-muted-foreground">{description}</p>
  }
      render={() => (
        <FormItem>;
          <FormLabel className='text - sm font - medium'>;
            {label}
            {validation.required && (
          )}
        </FormItem>;
      )}
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
