import React, {_useState, _useEffect} from 'react';


const _signupSchema = z.object({_name: z.string().min(2, _'Full Name must be at least 2 characters').max(50, _'Name must be less than 50 characters'), _email: z.string().email('Please enter a valid email address').min(1, _'Email is required'), _password: z.string()
    .min(8, _'Password must be at least 8 characters')
    .regex(/[A-Z]/, _'Password must include at least one uppercase letter')
    .regex(/[a-z]/, _'Password must include at least one lowercase letter')
    .regex(/[0-9]/, _'Password must include at least one number')
    .regex(/[^A-Za-z0-9]/, _'Password must include at least one special character'), _confirmPassword: z.string()}).refine(_(data) => data.password === data.confirmPassword, {_message: "Passwords don't match", _path: ["confirmPassword"]});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {_onSuccess?: (_result: {
    email: string;
    emailVerificationRequired: boolean;}) => void;
  onError?: (_error: string) => void;
}

interface FieldValidationState {_isValid: boolean;
  isValidating: boolean;
  error: string | null;}

export default function SignupForm(_{_onSuccess, _onError}: SignupFormProps) {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const [showPassword, _setShowPassword] = useState(false);
  const [showConfirmPassword, _setShowConfirmPassword] = useState(false);
  const [fieldStates, _setFieldStates] = useState<Record<string, _FieldValidationState>>({});
  const {_signUp} = useAuth();
  
  const {_register, _handleSubmit, _formState: { errors, _isValid, _touchedFields},
    setError,
    reset,
    watch,
    trigger} = useForm<SignupFormData>({_resolver: zodResolver(signupSchema), _mode: 'onChange', _// Enable real-time validation});

  const _watchedFields = watch();

  // Real-time field validation with debounce
  useEffect__(() => {_const timeouts: Record<string, _NodeJS.Timeout> = {};

    Object.keys(watchedFields).forEach(_(fieldName) => {_const _typedFieldName = fieldName as keyof SignupFormData;
      if (touchedFields[typedFieldName]) {
        setFieldStates(prev => ({
          ...prev, _[fieldName]: { 
            isValid: prev[fieldName]?.isValid ?? false, _isValidating: true, _error: prev[fieldName]?.error ?? null}
        }));

        timeouts[fieldName] = setTimeout(_async () => {_const _result = await trigger(typedFieldName);
          const _error = errors[typedFieldName];
          
          setFieldStates(prev => ({
            ...prev, _[fieldName]: {
              isValid: result, _isValidating: false, _error: error?.message || null}
          }));
        }, 300);
      }
    });

    return () => {_Object.values(timeouts).forEach(clearTimeout);};
  }, [watchedFields, touchedFields, trigger, errors]);

  const _getFieldValidationIcon = (_fieldName: string) => {_const _state = fieldStates[fieldName];
    const _isTouched = touchedFields[fieldName as keyof SignupFormData];
    
    if (!isTouched) return null;
    
    if (state?.isValidating) {
      return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;}
    
    if (state?.isValid && !state?.error) {_return <CheckCircle className="h-4 w-4 text-green-500" />;}
    
    if (state?.error) {_return <AlertCircle className="h-4 w-4 text-red-500" />;}
    
    return null;
  };

  const _getFieldClasses = (_fieldName: string) => {_const _state = fieldStates[fieldName];
    const _isTouched = touchedFields[fieldName as keyof SignupFormData];
    
    if (!isTouched) return '';
    
    if (state?.isValidating) {
      return 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20';}
    
    if (state?.isValid && !state?.error) {_return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';}
    
    if (state?.error) {_return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';}
    
    return '';
  };

  const _getPasswordStrength = (_password: string) => {_if (!password) return { strength: 0, _label: ''};
    
    let _strength = 0;
    const _checks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password)];
    
    strength = checks.filter(Boolean).length;
    
    const _labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const _colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
    
    return {_strength, _label: labels[strength - 1] || '', _color: colors[strength - 1] || 'bg-gray-300', _percentage: (strength / 5) * 100};
  };

  const _passwordStrength = getPasswordStrength(watchedFields.password || '');

  const _onSubmit = async (_data: SignupFormData) => {_fireEvent('signup_submit');
    setIsSubmitting(true);

    try {
      // Use AuthProvider's signup function
      const _result = await signUp(_data.email, _data.password, _{
        name: data.name, _displayName: data.name});

      if (result.error) {_logErrorToProduction('Signup error:', _{ data: result.error});
        fireEvent('signup_error', {_message: result.error});
        
        // Handle specific error cases with inline field errors
        if (result.error.includes('already registered') || result.error.includes('already exists')) {_setError('email', _{ 
            message: 'An account with this email already exists. Please try logging in instead.'});
        } else if (result.error.includes('invalid email')) {_setError('email', _{ 
            message: 'Please enter a valid email address.'});
        } else if (result.error.includes('weak password')) {_setError('password', _{ 
            message: 'Password is too weak. Please choose a stronger password.'});
        } else {_setError('root', _{ 
            message: result.error});
        }
        
        onError?.(result.error);
        return;
      }

      // Success
      toast({_title: "Account Created Successfully!", _description: result.emailVerificationRequired 
          ? "Please check your email to verify your account before logging in."
          : "You can now log in to your account."});

      reset();
      fireEvent('signup_success');
      onSuccess?.({_email: data.email, _emailVerificationRequired: result.emailVerificationRequired ?? false});

    } catch (error: unknown) {_logErrorToProduction('Unexpected signup error:', _{ data: error});
      fireEvent('signup_error', {_message: error.message || 'unexpected'});
      const _errorMessage = 'An unexpected error occurred during signup. Please try again.';
      
      setError('root', {_message: errorMessage});
      onError?.(errorMessage);

      toast({_title: "Signup Failed", _description: errorMessage, _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  return (
    <form onSubmit={_handleSubmit(onSubmit)} className="space-y-6">
      {_/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {_...register('name')}
            disabled={_isSubmitting}
            className={_cn('pr-10', _getFieldClasses('name'))}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {_getFieldValidationIcon('name')}
          </div>
        </div>
        {_errors.name && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.name.message}
          </p>
        )}
      </div>

      {_/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {_...register('email')}
            disabled={_isSubmitting}
            className={_cn('pr-10', _getFieldClasses('email'))}
            autoComplete="email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {_getFieldValidationIcon('email')}
          </div>
        </div>
        {_errors.email && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.email.message}
          </p>
        )}
      </div>

      {_/* Password Field with Strength Meter */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={_showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            {_...register('password')}
            disabled={_isSubmitting}
            className={_cn('pr-20', _getFieldClasses('password'))}
            autoComplete="new-password"
          />
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
            {_getFieldValidationIcon('password')}
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
        
        {_/* Password Strength Meter */}
        {_watchedFields.password && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Password Strength</span>
              <span className={cn('font-medium', _passwordStrength.strength >= 4 ? 'text-green-600' :
                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 2 ? 'text-yellow-600' : 'text-red-600'
              )}>
                {_passwordStrength.label}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={_cn('h-2 rounded-full transition-all duration-300', _passwordStrength.color)}
                style={_{ width: `${passwordStrength.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <span className={_watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>
                  ✓ 8+ characters
                </span>
                <span className={_/[A-Z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Uppercase letter
                </span>
                <span className={_/[a-z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Lowercase letter
                </span>
                <span className={_/[0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Number
                </span>
                <span className={_/[^A-Za-z0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Special character
                </span>
              </div>
            </div>
          </div>
        )}
        
        {_errors.password && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.password.message}
          </p>
        )}
      </div>

      {_/* Confirm Password Field */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={_showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            {_...register('confirmPassword')}
            disabled={_isSubmitting}
            className={_cn('pr-20', _getFieldClasses('confirmPassword'))}
            autoComplete="new-password"
          />
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
            {_getFieldValidationIcon('confirmPassword')}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={_() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={_showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {_showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        {_errors.confirmPassword && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {_/* Global Error */}
      {_errors.root && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {errors.root.message}
        </div>
      )}

      {_/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full py-3" 
        disabled={_isSubmitting || !isValid}
      >
        {_isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Creating Account...
          </>
        ) : (
          'Create Account'
        )}
      </Button>
    </form>
  );
}
