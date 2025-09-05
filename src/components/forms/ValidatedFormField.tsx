<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',
import { Input } from '@/components/ui/input',
import { Textarea } from '@/components/ui/textarea',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',
import { Checkbox } from '@/components/ui/checkbox',
import { cn } from '@/lib/utils',
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button',
interface ValidationRule {
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
  custom?: (value: any) => string | null
}

interface ValidatedFormFieldProps {
  name: string,
  label: string,
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox',
  placeholder?: string,
  description?: string,
  validation?: ValidationRule,
  options?: { value: string, label: string }[],
  form: any, // React Hook Form control
  className?: string,
  disabled?: boolean,
  showValidIcon?: boolean,
  debounceMs?: number
}

export function ValidatedFormField({
  name,
  label,
  type = 'text',
  placeholder,
  description,
  validation = {},
  options = [],
  form,
  className,
  disabled = false,
  showValidIcon = true,
  debounceMs = 300}: ValidatedFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false),
  const [validationState, setValidationState] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle'),
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null),

  const fieldValue = form.watch(name),
  const fieldError = form.formState.errors[name],
  const isTouched = form.formState.touchedFields[name],
=======
import React, {_useState, _useEffect} from 'react';

interface ValidationRule {_required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (_value: unknown) => string | null;}

interface ValidatedFormFieldProps {_name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string}[];
  form: unknown; // React Hook Form control
  className?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounceMs?: number;
}

export function ValidatedFormField(_{_name, _label, _type = 'text', _placeholder, _description, _validation = {}, _options = [], _form, _className, _disabled = false, _showValidIcon = true, _debounceMs = 300}: ValidatedFormFieldProps) {_const [showPassword, _setShowPassword] = useState(false);
  const [validationState, _setValidationState] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle');
  const [debounceTimer, _setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const _fieldValue = form.watch(name);
  const _fieldError = form.formState.errors[name];
  const _isTouched = form.formState.touchedFields[name];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Debounced validation
  useEffect__(() => {
    if (!fieldValue || !isTouched) {
<<<<<<< HEAD
      setValidationState('idle'),
      return
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
=======
      setValidationState('idle');
      return;}

    if (debounceTimer) {_clearTimeout(debounceTimer);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setValidationState('validating'),

<<<<<<< HEAD
    const timer = setTimeout(() => {
      const error = validateField(fieldValue),
      setValidationState(error ? 'invalid' : 'valid')
    }, debounceMs),
=======
    const _timer = setTimeout__(() => {_const _error = validateField(fieldValue);
      setValidationState(error ? 'invalid' : 'valid');}, debounceMs);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setDebounceTimer(timer),

<<<<<<< HEAD
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [fieldValue, isTouched, debounceMs]),

  const validateField = (value: any): string | null => {
    if (validation.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
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
=======
    return () => {_if (timer) clearTimeout(timer);};
  }, [fieldValue, isTouched, debounceMs]);

  const _validateField = (value: unknown): string | null => {_if (validation.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${label} is required`;
    }

    if (typeof value === 'string') {_if (validation.minLength && value.length < validation.minLength) {
        return `${label} must be at least ${_validation.minLength} characters`;
      }

      if (validation.maxLength && value.length > validation.maxLength) {_return `${label} must not exceed ${_validation.maxLength} characters`;
      }

      if (validation.pattern && !validation.pattern.test(value)) {_return `${label} format is invalid`;
      }
    }

    if (validation.custom) {_return validation.custom(value);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return null
  },

<<<<<<< HEAD
  const getValidationIcon = () => {
    if (!showValidIcon || !isTouched || validationState === 'idle') return null,
=======
  const _getValidationIcon = () => {_if (!showValidIcon || !isTouched || validationState === 'idle') return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    switch (validationState) {
      case 'validating':
<<<<<<< HEAD
        return <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />,
      case 'valid':
        return <CheckCircle className="h-4 w-4 text-green-500" />,
      case 'invalid':
        return <AlertCircle className="h-4 w-4 text-red-500" />,
      default: return null
=======
        return <div className=&quot;animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full&quot; />;
      case 'valid':
        return <CheckCircle className=&quot;h-4 w-4 text-green-500&quot; />;
      case 'invalid':
        return <AlertCircle className=&quot;h-4 w-4 text-red-500&quot; />;
      default:
<<<<<<< HEAD
        return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const getFieldClasses = () => {
    if (!isTouched) return '',
=======
        return null;}
  };

  const _getFieldClasses = () => {_if (!isTouched) return '';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    switch (validationState) {
      case 'valid':
        return 'border-green-500 focus: border-green-500 focus:ring-green-500/20',
      case 'invalid':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
      default:
<<<<<<< HEAD
        return ''
    }
  },

  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className),
=======
        return '';}
  };

  const _renderField = () => {_const _baseClasses = cn(getFieldClasses(), _className);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    switch (type) {
      case 'textarea':
        return (
          <div className=&quot;relative&quot;>
            <Textarea
              disabled={disabled}
              className={_baseClasses}
              rows={_4}
              {_...form.register(name)}
            />
<<<<<<< HEAD
            <div className=&quot;absolute top-2 right-2&quot;>
              {getValidationIcon()}
=======
            <div className="absolute top-2 right-2">
              {_getValidationIcon()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        ),

      case 'select':
<<<<<<< HEAD
        return (
          <div className=&quot;relative&quot;>
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>
              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
=======
        return (_<div className="relative">
            <Select onValueChange={_(value) => form.setValue(name, _value)} disabled={_disabled}>
              <SelectTrigger className={_baseClasses}>
                <SelectValue placeholder={_placeholder} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </SelectTrigger>
              <SelectContent>
                {_options.map(_(option) => (
                  <SelectItem key={option.value} value={_option.value}>
                    {_option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
<<<<<<< HEAD
            <div className=&quot;absolute top-2 right-8&quot;>
              {getValidationIcon()}
=======
            <div className="absolute top-2 right-8">
              {_getValidationIcon()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        ),

      case 'checkbox':
<<<<<<< HEAD
        return (
          <div className=&quot;flex items-center space-x-2&quot;>
=======
        return (_<div className="flex items-center space-x-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Checkbox
              id={_name}
              checked={_fieldValue}
              onCheckedChange={_(checked) => form.setValue(name, _checked)}
              disabled={_disabled}
            />
            <label
<<<<<<< HEAD
              htmlFor={name}
              className=&quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70&quot;
=======
              htmlFor={_name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_label}
            </label>
            {_getValidationIcon()}
          </div>
        ),

      case 'password':
        return (
          <div className=&quot;relative&quot;>
            <Input
              type={_showPassword ? 'text' : 'password'}
              disabled={_disabled}
              className={_cn(baseClasses, _'pr-20')}
              {_...form.register(name)}
            />
<<<<<<< HEAD
            <div className=&quot;absolute inset-y-0 right-0 flex items-center gap-1 pr-3&quot;>
              {getValidationIcon()}
              <Button
                type=&quot;button&quot;
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;h-7 w-7 p-0&quot;
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className=&quot;h-4 w-4&quot; />
=======
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
              {_getValidationIcon()}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={_() => setShowPassword(!showPassword)}
                aria-label={_showPassword ? 'Hide password' : 'Show password'}
              >
                {_showPassword ? (
                  <EyeOff className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <Eye className=&quot;h-4 w-4&quot; />
                )}
              </Button>
            </div>
          </div>
        ),

      default:
        return (
          <div className=&quot;relative&quot;>
            <Input
              type={_type}
              disabled={_disabled}
              className={_baseClasses}
              {_...form.register(name)}
            />
<<<<<<< HEAD
            <div className=&quot;absolute inset-y-0 right-0 flex items-center pr-3&quot;>
              {getValidationIcon()}
=======
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {_getValidationIcon()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        )
    }
  },

  if (type === 'checkbox') {_return (_<FormField
        control={form.control}
<<<<<<< HEAD
        name={name}
        render={() => (
          <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
            <FormControl>
              {renderField()}
            </FormControl>
            {(fieldError || description) && (
              <div className=&quot;space-y-1&quot;>
=======
        name={_name}
        render={_() => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              {renderField()}
            </FormControl>
            {_(fieldError || description) && (
              <div className="space-y-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                {fieldError && (
                  <FormMessage className=&quot;text-sm text-red-500&quot;>
                    {fieldError.message}
                  </FormMessage>
                )}
<<<<<<< HEAD
                {description && !fieldError && (
                  <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
=======
                {_description && !fieldError && (
                  <p className="text-sm text-muted-foreground">{description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </div>
            )}
          </FormItem>
        )}
      />
    )
  }

  return (_<FormField
      control={_form.control}
      name={_name}
      render={_() => (
        <FormItem>
          <FormLabel className=&quot;text-sm font-medium&quot;>
            {label}
<<<<<<< HEAD
            {validation.required && <span className=&quot;text-red-500 ml-1&quot;>*</span>}
=======
            {_validation.required && <span className="text-red-500 ml-1">*</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </FormLabel>
          <FormControl>
            {_renderField()}
          </FormControl>
<<<<<<< HEAD
          {(fieldError || description) && (
            <div className=&quot;space-y-1&quot;>
=======
          {_(fieldError || description) && (
            <div className="space-y-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {fieldError && (
                <FormMessage className=&quot;text-sm text-red-500 flex items-center gap-1&quot;>
                  <AlertCircle className=&quot;h-3 w-3&quot; />
                  {fieldError.message}
                </FormMessage>
              )}
<<<<<<< HEAD
              {description && !fieldError && (
                <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
=======
              {_description && !fieldError && (
                <p className="text-sm text-muted-foreground">{description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </div>
          )}
        </FormItem>
      )}
    />
  )
}

// Validation helpers for common patterns
export const _validationPatterns = {_email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/,
  phone: /^[\+]?[1-9][\d]{_0, _15}$/,
  url: /^https?:\/\/.+/,
<<<<<<< HEAD
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/},
=======
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{_8}$/};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Pre-configured validation rules
export const _commonValidations = {_required: { required: true},
  email: {_required: true, _pattern: validationPatterns.email, _custom: (_value: string) => {
      if (value && !validationPatterns.email.test(value)) {
<<<<<<< HEAD
        return 'Please enter a valid email address'
      }
      return null
=======
        return 'Please enter a valid email address';}
      return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  password: {_required: true, _minLength: 8, _custom: (_value: string) => {
      if (value && !validationPatterns.strongPassword.test(value)) {
<<<<<<< HEAD
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character'
      }
      return null
=======
        return 'Password must contain at least 8 characters with uppercase, _lowercase, _number, _and special character';}
      return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  phone: {_pattern: validationPatterns.phone, _custom: (_value: string) => {
      if (value && !validationPatterns.phone.test(value)) {
<<<<<<< HEAD
        return 'Please enter a valid phone number'
      }
      return null
=======
        return 'Please enter a valid phone number';}
      return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }}, 