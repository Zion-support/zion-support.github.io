import React, { useState, useEffect } from 'react',;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Checkbox } from '@/components/ui/checkbox',;
import { cn } from '@/lib/utils',;
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button',;
interface ValidationRule {;
  required?: boolean,;
  minLength?: number,;
  maxLength?: number,;
  pattern?: RegExp,;
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
<<<<<<< HEAD

    return null
  },

  const getValidationIcon = () => {
    if (!showValidIcon || !isTouched || validationState === 'idle') return null,

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
        return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
  },

  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className),

    switch (type) {
      case 'textarea':
        return (
          <div className=&quot;relative&quot;>
            <Textarea
=======
  },;
  const renderField = () => {;
    const baseClasses = cn(getFieldClasses(), className),;
    switch (type) {;
      case 'textarea':;
        return (;
          <div className="relative">;
            <Textarea;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              disabled={disabled}
              className={baseClasses}
              rows={4}
              {...form.register(name)}
<<<<<<< HEAD
            />
            <div className=&quot;absolute top-2 right-2&quot;>
              {getValidationIcon()}
            </div>
          </div>
        ),

      case 'select':
        return (
          <div className=&quot;relative&quot;>
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>
              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
=======
            />;
            <div className="absolute top-2 right-2">;
              {getValidationIcon()}
            </div>;
          </div>;
        ),;
      case 'select':;
        return (;
          <div className="relative">;
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>;
              <SelectTrigger className={baseClasses}>;
                <SelectValue placeholder={placeholder} />;
              </SelectTrigger>;
              <SelectContent>;
                {options.map((option) => (;
                  <SelectItem key={option.value} value={option.value}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {option.label}
                  </SelectItem>;
                ))}
<<<<<<< HEAD
              </SelectContent>
            </Select>
            <div className=&quot;absolute top-2 right-8&quot;>
              {getValidationIcon()}
            </div>
          </div>
        ),

      case 'checkbox':
        return (
          <div className=&quot;flex items-center space-x-2&quot;>
            <Checkbox
=======
              </SelectContent>;
            </Select>;
            <div className="absolute top-2 right-8">;
              {getValidationIcon()}
            </div>;
          </div>;
        ),;
      case 'checkbox':;
        return (;
          <div className="flex items-center space-x-2">;
            <Checkbox;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              id={name}
              checked={fieldValue}
              onCheckedChange={(checked) => form.setValue(name, checked)}
              disabled={disabled}
            />;
            <label;
              htmlFor={name}
<<<<<<< HEAD
              className=&quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70&quot;
            >
=======
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
            >;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              {label}
            </label>;
            {getValidationIcon()}
<<<<<<< HEAD
          </div>
        ),

      case 'password':
        return (
          <div className=&quot;relative&quot;>
            <Input
=======
          </div>;
        ),;
      case 'password':;
        return (;
          <div className="relative">;
            <Input;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              type={showPassword ? 'text' : 'password'}
              disabled={disabled}
              className={cn(baseClasses, 'pr-20')}
              {...form.register(name)}
<<<<<<< HEAD
            />
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
=======
            />;
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">;
              {getValidationIcon()}
              <Button;
                type="button";
                variant="ghost";
                size="sm";
                className="h-7 w-7 p-0";
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >;
                {showPassword ? (;
                  <EyeOff className="h-4 w-4" />;
                ) : (;
                  <Eye className="h-4 w-4" />;
                )}
              </Button>;
            </div>;
          </div>;
        ),;
      default:;
        return (;
          <div className="relative">;
            <Input;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              type={type}
              disabled={disabled}
              className={baseClasses}
              {...form.register(name)}
<<<<<<< HEAD
            />
            <div className=&quot;absolute inset-y-0 right-0 flex items-center pr-3&quot;>
=======
            />;
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              {getValidationIcon()}
            </div>;
          </div>;
        );
    }
  },;
  if (type === 'checkbox') {;
    return (;
      <FormField;
        control={form.control}
        name={name}
<<<<<<< HEAD
        render={() => (
          <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
            <FormControl>
              {renderField()}
            </FormControl>
            {(fieldError || description) && (
              <div className=&quot;space-y-1&quot;>
                {fieldError && (
                  <FormMessage className=&quot;text-sm text-red-500&quot;>
=======
        render={() => (;
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
            <FormControl>;
              {renderField()}
            </FormControl>;
            {(fieldError || description) && (;
              <div className="space-y-1">;
                {fieldError && (;
                  <FormMessage className="text-sm text-red-500">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {fieldError.message}
                  </FormMessage>;
                )}
<<<<<<< HEAD
                {description && !fieldError && (
                  <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
=======
                {description && !fieldError && (;
                  <p className="text-sm text-muted-foreground">{description}</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </div>;
            )}
          </FormItem>;
        )}
      />;
    );
  }
;
  return (;
    <FormField;
      control={form.control}
      name={name}
<<<<<<< HEAD
      render={() => (
        <FormItem>
          <FormLabel className=&quot;text-sm font-medium&quot;>
            {label}
            {validation.required && <span className=&quot;text-red-500 ml-1&quot;>*</span>}
          </FormLabel>
          <FormControl>
            {renderField()}
          </FormControl>
          {(fieldError || description) && (
            <div className=&quot;space-y-1&quot;>
              {fieldError && (
                <FormMessage className=&quot;text-sm text-red-500 flex items-center gap-1&quot;>
                  <AlertCircle className=&quot;h-3 w-3&quot; />
=======
      render={() => (;
        <FormItem>;
          <FormLabel className="text-sm font-medium">;
            {label}
            {validation.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>;
          <FormControl>;
            {renderField()}
          </FormControl>;
          {(fieldError || description) && (;
            <div className="space-y-1">;
              {fieldError && (;
                <FormMessage className="text-sm text-red-500 flex items-center gap-1">;
                  <AlertCircle className="h-3 w-3" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {fieldError.message}
                </FormMessage>;
              )}
<<<<<<< HEAD
              {description && !fieldError && (
                <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
=======
              {description && !fieldError && (;
                <p className="text-sm text-muted-foreground">{description}</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            </div>;
          )}
        </FormItem>;
      )}
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
// Pre-configured validation rules;
export const commonValidations = {;
  required: { required: true },;
  email: {;
    required: true,;
    pattern: validationPatterns.email,;
    custom: (value: string) => {;
      if (value && !validationPatterns.email.test(value)) {;
        return 'Please enter a valid email address';
      }
      return null;
    }
  },;
  password: {;
    required: true,;
    minLength: 8,;
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