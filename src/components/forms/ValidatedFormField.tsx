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

  // Debounced validation
  useEffect__(() => {
    if (!fieldValue || !isTouched) {
      setValidationState('idle');
      return;}

    if (debounceTimer) {_clearTimeout(debounceTimer);}

    setValidationState('validating');

    const _timer = setTimeout__(() => {_const _error = validateField(fieldValue);
      setValidationState(error ? 'invalid' : 'valid');}, debounceMs);

    setDebounceTimer(timer);

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

    return null;
  };

  const _getValidationIcon = () => {_if (!showValidIcon || !isTouched || validationState === 'idle') return null;

    switch (validationState) {
      case 'validating':
        return <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />;
      case 'valid':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'invalid':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;}
  };

  const _getFieldClasses = () => {_if (!isTouched) return '';
    
    switch (validationState) {
      case 'valid':
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';
      case 'invalid':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';
      default:
        return '';}
  };

  const _renderField = () => {_const _baseClasses = cn(getFieldClasses(), _className);

    switch (type) {
      case 'textarea':
        return (
          <div className="relative">
            <Textarea
              disabled={disabled}
              className={_baseClasses}
              rows={_4}
              {_...form.register(name)}
            />
            <div className="absolute top-2 right-2">
              {_getValidationIcon()}
            </div>
          </div>
        );

      case 'select':
        return (_<div className="relative">
            <Select onValueChange={_(value) => form.setValue(name, _value)} disabled={_disabled}>
              <SelectTrigger className={_baseClasses}>
                <SelectValue placeholder={_placeholder} />
              </SelectTrigger>
              <SelectContent>
                {_options.map(_(option) => (
                  <SelectItem key={option.value} value={_option.value}>
                    {_option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="absolute top-2 right-8">
              {_getValidationIcon()}
            </div>
          </div>
        );

      case 'checkbox':
        return (_<div className="flex items-center space-x-2">
            <Checkbox
              id={_name}
              checked={_fieldValue}
              onCheckedChange={_(checked) => form.setValue(name, _checked)}
              disabled={_disabled}
            />
            <label
              htmlFor={_name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {_label}
            </label>
            {_getValidationIcon()}
          </div>
        );

      case 'password':
        return (
          <div className="relative">
            <Input
              type={_showPassword ? 'text' : 'password'}
              disabled={_disabled}
              className={_cn(baseClasses, _'pr-20')}
              {_...form.register(name)}
            />
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
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative">
            <Input
              type={_type}
              disabled={_disabled}
              className={_baseClasses}
              {_...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {_getValidationIcon()}
            </div>
          </div>
        );
    }
  };

  if (type === 'checkbox') {_return (_<FormField
        control={form.control}
        name={_name}
        render={_() => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              {renderField()}
            </FormControl>
            {_(fieldError || description) && (
              <div className="space-y-1">
                {fieldError && (
                  <FormMessage className="text-sm text-red-500">
                    {fieldError.message}
                  </FormMessage>
                )}
                {_description && !fieldError && (
                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
            )}
          </FormItem>
        )}
      />
    );
  }

  return (_<FormField
      control={_form.control}
      name={_name}
      render={_() => (
        <FormItem>
          <FormLabel className="text-sm font-medium">
            {label}
            {_validation.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            {_renderField()}
          </FormControl>
          {_(fieldError || description) && (
            <div className="space-y-1">
              {fieldError && (
                <FormMessage className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {fieldError.message}
                </FormMessage>
              )}
              {_description && !fieldError && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          )}
        </FormItem>
      )}
    />
  );
}

// Validation helpers for common patterns
export const _validationPatterns = {_email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/,
  phone: /^[\+]?[1-9][\d]{_0, _15}$/,
  url: /^https?:\/\/.+/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{_8}$/};

// Pre-configured validation rules
export const _commonValidations = {_required: { required: true},
  email: {_required: true, _pattern: validationPatterns.email, _custom: (_value: string) => {
      if (value && !validationPatterns.email.test(value)) {
        return 'Please enter a valid email address';}
      return null;
    }
  },
  password: {_required: true, _minLength: 8, _custom: (_value: string) => {
      if (value && !validationPatterns.strongPassword.test(value)) {
        return 'Password must contain at least 8 characters with uppercase, _lowercase, _number, _and special character';}
      return null;
    }
  },
  phone: {_pattern: validationPatterns.phone, _custom: (_value: string) => {
      if (value && !validationPatterns.phone.test(value)) {
        return 'Please enter a valid phone number';}
      return null;
    }
  }}; 