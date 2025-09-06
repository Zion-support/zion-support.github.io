
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

} from '@/components/ui/select'; import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button';

interface ValidationRule {;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null
interface ValidatedFormFieldProps {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
      return
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
  }, [fieldValue, isTouched, debounceMs])
  const validateField = (value: any): string | null => {
    if (
      validation.required &&
      (!value |(typeof value === 'string' && value.trim() === ''))
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

  const getValidationIcon = () => {

    if (!showValidIcon || !isTouched || validationState === 'idle') return null,


  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className),

    switch (type) {
      case 'textarea':
        return (
          <div className='relative'>;
            <Textarea
              disabled = {disabled,}
              className = {baseClasses,}
              rows = {4,}
              disabled={disabled}
              className={baseClasses}
              rows={4}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="absolute top-2 right-8">
              {getValidationIcon()}
            </div>
          </div>

        return (

              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
<<<<<<< HEAD
              {label}
            </label>;
            {getValidationIcon()}
          </div>
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
              </Button>
            </div>
          </div>
=======
        )
        ),



      default:
              </Button>;
            </div>;
          </div>;
        );

      default:;
        return (
          <div className="relative">
            <Input


              type={type}
              disabled={disabled}
              className={baseClasses}
              {...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {getValidationIcon()}

            </div>;
          </div>;
        );
    }
  };

  if (type === 'checkbox') {;

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
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                    {fieldError.message}
                  </FormMessage>
                )}
                {description && !fieldError && (

                )}
              </div>;
            )}
          </FormItem>;
        )}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  {fieldError.message}
                </FormMessage>
              )}
              {description && !fieldError && (

              )}
            </div>
          )}
        </FormItem>
      )}
<<<<<<< HEAD
