
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
      if (clear_timeout (timer)) {
  $2
}
    }

  }, [field_value, is_touched, debounce_ms]);
  const validate_field = (value: any): string | null => {
    if (=== ''))) {
  $2
}

    ) {
      return `${label} is required`;
    }

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

  const getValidationIcon = () => {

    if (!showValidIcon || !isTouched || validationState === 'idle') return null,


  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className),

              {...form.register(name)}
            />
            <div className='absolute top-2 right-2'>{getValidationIcon()}</div>
          </div>

                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="absolute top-2 right-8">
              {getValidationIcon()}
            </div>
          </div>

      case 'checkbox':
              </SelectContent>;
            </Select>;
            <div className='absolute top-2 right-8'>{getValidationIcon()}</div>;
          </div>;
        );

      case 'checkbox':;
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

=======

              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              {label}
            </label>;
            {getValidationIcon()}
          </div>

      case 'password':
          </div>;
        );

      case 'password':;
        return (
          <div className='relative'>;
            <Input

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

      default:
              </Button>;
            </div>;
          </div>;
        );

      default:;
        return (
          <div className='relative'>;
            <Input

                    {fieldError.message}
                  </FormMessage>
                )}
                {description && !fieldError && (

                )}
              </div>;
            )}
          </FormItem>;
        )}

                  {fieldError.message}
                </FormMessage>
              )}
              {description && !fieldError && (

<<<<<<< HEAD
              )}
            </div>
          )}
        </FormItem>
      )}
