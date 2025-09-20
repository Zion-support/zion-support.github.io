import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

interface ValidatedFormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
  form: any; // React Hook Form control
  className?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounceMs?: number;
}

export function ValidatedFormField({
  name,
  label,
  type = 'text',
  placeholder,
  description,
  validation,
  options = [],
  form,
  className = '',
  disabled = false,
  showValidIcon = true,
  debounceMs = 300
}: ValidatedFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const { register, formState: { errors }, watch, setValue } = form;
  const value = watch(name);

  useEffect(() => {
    if (!value || !validation) return;

    const timeoutId = setTimeout(() => {
      setIsValidating(true);
      const error = validateField(value, validation);
      setValidationMessage(error);
      setIsValidating(false);
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [value, validation, debounceMs]);

  const validateField = (value: any, rules: ValidationRule): string | null => {
    if (rules.required && (!value || value.toString().trim() === '')) {
      return `${label} is required`;
    }

    if (value && rules.minLength && value.length < rules.minLength) {
      return `${label} must be at least ${rules.minLength} characters`;
    }

    if (value && rules.maxLength && value.length > rules.maxLength) {
      return `${label} must be no more than ${rules.maxLength} characters`;
    }

    if (value && rules.pattern && !rules.pattern.test(value)) {
      return `${label} format is invalid`;
    }

    if (value && rules.custom) {
      return rules.custom(value);
    }

    return null;
  };

  const hasError = errors[name];
  const isValid = !hasError && value && !validationMessage;
  const isInvalid = hasError || validationMessage;

  const renderInput = () => {
    const commonProps = {
      id: name,
      placeholder,
      disabled,
      className: `w-full ${hasError ? 'border-red-500' : isValid ? 'border-green-500' : ''} ${className}`,
    };

    switch (type) {
      case 'textarea':
        return (
          <Textarea
            {...register(name, validation)}
            {...commonProps}
            rows={4}
          />
        );

      case 'select':
        return (
          <Select onValueChange={(value) => setValue(name, value)}>
            <SelectTrigger className={commonProps.className}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={name}
              checked={value || false}
              onCheckedChange={(checked) => setValue(name, checked)}
              disabled={disabled}
            />
            <Label htmlFor={name} className="text-sm font-medium">
              {label}
            </Label>
          </div>
        );

      case 'password':
        return (
          <div className="relative">
            <Input
              {...register(name, validation)}
              {...commonProps}
              type={showPassword ? 'text' : 'password'}
            />
            <Button
              type="button"
              
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        );

      default:
        return (
          <Input
            {...register(name, validation)}
            {...commonProps}
            type={type}
          />
        );
    }
  };

  if (type === 'checkbox') {
    return (
      <div className="space-y-2">
        {renderInput()}
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
        {isInvalid && (
          <div className="flex items-center text-red-600 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {hasError?.message || validationMessage}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
        {validation?.required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      
      <div className="relative">
        {renderInput()}
        
        {showValidIcon && value && !isValidating && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isValid ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : isInvalid ? (
              <AlertCircle className="h-4 w-4 text-red-500" />
            ) : null}
          </div>
        )}
      </div>

      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}

      {isInvalid && (
        <div className="flex items-center text-red-600 text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          {hasError?.message || validationMessage}
        </div>
      )}

      {isValidating && (
        <div className="flex items-center text-blue-600 text-sm">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
          Validating...
        </div>
      )}
    </div>
  );
}
