<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { useForm } from 'react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod',
import { z } from 'zod',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Label } from '@/components/ui/label',
import { useAuth } from '@/hooks/useAuth',
import { toast } from '@/hooks/use-toast',
import { CheckCircle, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils',
import { fireEvent } from '@/lib/analytics',
import {logErrorToProduction} from '@/utils/productionLogger',
const signupSchema = z.object({
  name: z.string().min(2, 'Full Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
    .regex(/[a-z]/, 'Password must include at least one lowercase letter')
    .regex(/[0-9]/, 'Password must include at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must include at least one special character'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
<<<<<<< HEAD
  message: "Passwords don't match",
  path: ["confirmPassword"]}),
=======
  message: &quot;Passwords don't match&quot;,
  path: [&quot;confirmPassword&quot;]});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, {_useState, _useEffect} from 'react';


const _signupSchema = z.object({_name: z.string().min(2, _'Full Name must be at least 2 characters').max(50, _'Name must be less than 50 characters'), _email: z.string().email('Please enter a valid email address').min(1, _'Email is required'), _password: z.string()
    .min(8, _'Password must be at least 8 characters')
    .regex(/[A-Z]/, _'Password must include at least one uppercase letter')
    .regex(/[a-z]/, _'Password must include at least one lowercase letter')
    .regex(/[0-9]/, _'Password must include at least one number')
    .regex(/[^A-Za-z0-9]/, _'Password must include at least one special character'), _confirmPassword: z.string()}).refine(_(data) => data.password === data.confirmPassword, {_message: "Passwords don't match", _path: ["confirmPassword"]});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type SignupFormData = z.infer<typeof signupSchema>,

<<<<<<< HEAD
interface SignupFormProps {
  onSuccess?: (result: {
    email: string,
    emailVerificationRequired: boolean
  }) => void,
  onError?: (error: string) => void
}

interface FieldValidationState {
  isValid: boolean,
  isValidating: boolean,
  error: string | null
}

export default function SignupForm({ onSuccess, onError }: SignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [showPassword, setShowPassword] = useState(false),
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),
  const [fieldStates, setFieldStates] = useState<Record<string FieldValidationState>>({}),
  const { signUp } = useAuth(),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const {_register, _handleSubmit, _formState: { errors, _isValid, _touchedFields},
    setError,
    reset,
    watch,
<<<<<<< HEAD
    trigger} = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange', // Enable real-time validation
  }),

  const watchedFields = watch(),

  // Real-time field validation with debounce
  useEffect(() => {
    const timeouts: Record<string NodeJS.Timeout> = {},

    Object.keys(watchedFields).forEach((fieldName) => {
      const typedFieldName = fieldName as keyof SignupFormData,
      if (touchedFields[typedFieldName]) {
        setFieldStates(prev => ({
          ...prev,
          [fieldName]: { 
            isValid: prev[fieldName]?.isValid ?? false,
            isValidating: true,
            error: prev[fieldName]?.error ?? null
          }
        })),

        timeouts[fieldName] = setTimeout(async () => {
          const result = await trigger(typedFieldName),
          const error = errors[typedFieldName],
          
          setFieldStates(prev => ({
            ...prev,
            [fieldName]: {
              isValid: result,
              isValidating: false,
              error: error?.message || null
            }
          }))
        }, 300)
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }),

<<<<<<< HEAD
    return () => {
      Object.values(timeouts).forEach(clearTimeout)
    }
  }, [watchedFields, touchedFields, trigger, errors]),

  const getFieldValidationIcon = (fieldName: string) => {
    const state = fieldStates[fieldName],
    const isTouched = touchedFields[fieldName as keyof SignupFormData],
=======
    return () => {_Object.values(timeouts).forEach(clearTimeout);};
  }, [watchedFields, touchedFields, trigger, errors]);

  const _getFieldValidationIcon = (_fieldName: string) => {_const _state = fieldStates[fieldName];
    const _isTouched = touchedFields[fieldName as keyof SignupFormData];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (!isTouched) return null,
    
    if (state?.isValidating) {
<<<<<<< HEAD
<<<<<<< HEAD
      return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
    }
    
    if (state?.isValid && !state?.error) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    
    if (state?.error) {
      return <AlertCircle className="h-4 w-4 text-red-500" />
=======
      return <Loader2 className=&quot;h-4 w-4 animate-spin text-blue-500&quot; />;
    }
=======
      return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;}
    
    if (state?.isValid && !state?.error) {_return <CheckCircle className="h-4 w-4 text-green-500" />;}
    
    if (state?.error) {_return <AlertCircle className="h-4 w-4 text-red-500" />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (state?.isValid && !state?.error) {
      return <CheckCircle className=&quot;h-4 w-4 text-green-500&quot; />;
    }
    
    if (state?.error) {
      return <AlertCircle className=&quot;h-4 w-4 text-red-500&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    return null
  },

<<<<<<< HEAD
  const getFieldClasses = (fieldName: string) => {
    const state = fieldStates[fieldName],
    const isTouched = touchedFields[fieldName as keyof SignupFormData],
=======
  const _getFieldClasses = (_fieldName: string) => {_const _state = fieldStates[fieldName];
    const _isTouched = touchedFields[fieldName as keyof SignupFormData];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (!isTouched) return '',
    
    if (state?.isValidating) {
<<<<<<< HEAD
      return 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20'
    }
    
    if (state?.isValid && !state?.error) {
      return 'border-green-500 focus: border-green-500 focus:ring-green-500/20'
    }
    
    if (state?.error) {
      return 'border-red-500 focus: border-red-500 focus:ring-red-500/20'
    }
=======
      return 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20';}
    
    if (state?.isValid && !state?.error) {_return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';}
    
    if (state?.error) {_return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return ''
  },

<<<<<<< HEAD
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '' },
    
    let strength = 0,
    const checks = [
=======
  const _getPasswordStrength = (_password: string) => {_if (!password) return { strength: 0, _label: ''};
    
    let _strength = 0;
    const _checks = [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password)],
    
    strength = checks.filter(Boolean).length,
    
<<<<<<< HEAD
    const labels = ['Very WeakWeakFairGoodStrong'],
    const colors = ['bg-red-500bg-orange-500bg-yellow-500bg-blue-500bg-green-500'],
    
    return {
      strength,
      label: labels[strength - 1] || '',
      color: colors[strength - 1] || 'bg-gray-300',
      percentage: (strength / 5) * 100
    }
  },

  const passwordStrength = getPasswordStrength(watchedFields.password || ''),

  const onSubmit = async (data: SignupFormData) => {
    fireEvent('signup_submit'),
    setIsSubmitting(true),

    try {
      // Use AuthProvider's signup function
      const result = await signUp(data.email, data.password, {
        name: data.name,
        displayName: data.name
      }),

      if (result.error) {
        logErrorToProduction('Signup error:', { data: result.error }),
        fireEvent('signup_error', { message: result.error }),
        
        // Handle specific error cases with inline field errors
        if (result.error.includes('already registered') || result.error.includes('already exists')) {
          setError('email', { 
            message: 'An account with this email already exists. Please try logging in instead.' 
          })
        } else if (result.error.includes('invalid email')) {
          setError('email', { 
            message: 'Please enter a valid email address.' 
          })
        } else if (result.error.includes('weak password')) {
          setError('password', { 
            message: 'Password is too weak. Please choose a stronger password.' 
          })
        } else {
          setError('root', { 
            message: result.error 
          })
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        
        onError?.(result.error),
        return
      }

      // Success
<<<<<<< HEAD
      toast({
        title: &quot;Account Created Successfully!&quot;,
        description: result.emailVerificationRequired 
<<<<<<< HEAD
=======
      toast({_title: "Account Created Successfully!", _description: result.emailVerificationRequired 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ? "Please check your email to verify your account before logging in."
          : "You can now log in to your account."}),
=======
          ? &quot;Please check your email to verify your account before logging in.&quot;
          : &quot;You can now log in to your account.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
      reset(),
      fireEvent('signup_success'),
      onSuccess?.({
        email: data.email,
        emailVerificationRequired: result.emailVerificationRequired ?? false})

    } catch (error: any) {
      logErrorToProduction('Unexpected signup error:', { data: error }),
      fireEvent('signup_error', { message: error.message || 'unexpected' }),
      const errorMessage = 'An unexpected error occurred during signup. Please try again.',
      
      setError('root', { message: errorMessage }),
      onError?.(errorMessage),

      toast({
        title: &quot;Signup Failed&quot;,
        description: errorMessage,
<<<<<<< HEAD
        variant: "destructive"})
=======
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
      {/* Name Field */}
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;name&quot; className=&quot;text-sm font-medium&quot;>
          Full Name <span className=&quot;text-red-500&quot;>*</span>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Label>
        <div className=&quot;relative&quot;>
          <Input
<<<<<<< HEAD
            id=&quot;name&quot;
            type=&quot;text&quot;
            placeholder=&quot;Enter your full name&quot;
            {...register('name')}
            disabled={isSubmitting}
            className={cn('pr-10', getFieldClasses('name'))}
          />
          <div className=&quot;absolute inset-y-0 right-0 flex items-center pr-3&quot;>
            {getFieldValidationIcon('name')}
          </div>
        </div>
        {errors.name && (
          <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
            <AlertCircle className=&quot;h-3 w-3&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {errors.name.message}
          </p>
        )}
      </div>

<<<<<<< HEAD
      {/* Email Field */}
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;email&quot; className=&quot;text-sm font-medium&quot;>
          Email Address <span className=&quot;text-red-500&quot;>*</span>
=======
      {_/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Label>
        <div className=&quot;relative&quot;>
          <Input
<<<<<<< HEAD
            id=&quot;email&quot;
            type=&quot;email&quot;
            placeholder=&quot;Enter your email address&quot;
            {...register('email')}
            disabled={isSubmitting}
            className={cn('pr-10', getFieldClasses('email'))}
            autoComplete=&quot;email&quot;
          />
          <div className=&quot;absolute inset-y-0 right-0 flex items-center pr-3&quot;>
            {getFieldValidationIcon('email')}
          </div>
        </div>
        {errors.email && (
          <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
            <AlertCircle className=&quot;h-3 w-3&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {errors.email.message}
          </p>
        )}
      </div>

<<<<<<< HEAD
      {/* Password Field with Strength Meter */}
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;password&quot; className=&quot;text-sm font-medium&quot;>
          Password <span className=&quot;text-red-500&quot;>*</span>
=======
      {_/* Password Field with Strength Meter */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password <span className="text-red-500">*</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Label>
        <div className=&quot;relative&quot;>
          <Input
<<<<<<< HEAD
            id=&quot;password&quot;
            type={showPassword ? 'text' : 'password'}
            placeholder=&quot;Create a strong password&quot;
            {...register('password')}
            disabled={isSubmitting}
            className={cn('pr-20', getFieldClasses('password'))}
            autoComplete=&quot;new-password&quot;
          />
          <div className=&quot;absolute inset-y-0 right-0 flex items-center gap-1 pr-3&quot;>
            {getFieldValidationIcon('password')}
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <Eye className=&quot;h-4 w-4&quot; />
              )}
            </Button>
          </div>
        </div>
        
<<<<<<< HEAD
        {/* Password Strength Meter */}
        {watchedFields.password && (
          <div className=&quot;space-y-2&quot;>
            <div className=&quot;flex justify-between text-xs&quot;>
=======
        {_/* Password Strength Meter */}
        {_watchedFields.password && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span>Password Strength</span>
              <span className={cn('font-medium', _passwordStrength.strength >= 4 ? 'text-green-600' :
                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 2 ? 'text-yellow-600' : 'text-red-600'
              )}>
                {_passwordStrength.label}
              </span>
            </div>
            <div className=&quot;w-full bg-gray-200 rounded-full h-2&quot;>
              <div 
                className={_cn('h-2 rounded-full transition-all duration-300', _passwordStrength.color)}
                style={_{ width: `${passwordStrength.percentage}%` }}
              />
            </div>
<<<<<<< HEAD
            <div className=&quot;text-xs text-gray-600 space-y-1&quot;>
              <div className=&quot;grid grid-cols-2 gap-1&quot;>
                <span className={watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>
=======
            <div className="text-xs text-gray-600 space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <span className={_watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
        
<<<<<<< HEAD
        {errors.password && (
          <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
            <AlertCircle className=&quot;h-3 w-3&quot; />
=======
        {_errors.password && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {errors.password.message}
          </p>
        )}
      </div>

<<<<<<< HEAD
      {/* Confirm Password Field */}
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;confirmPassword&quot; className=&quot;text-sm font-medium&quot;>
          Confirm Password <span className=&quot;text-red-500&quot;>*</span>
=======
      {_/* Confirm Password Field */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password <span className="text-red-500">*</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Label>
        <div className=&quot;relative&quot;>
          <Input
<<<<<<< HEAD
            id=&quot;confirmPassword&quot;
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder=&quot;Confirm your password&quot;
            {...register('confirmPassword')}
            disabled={isSubmitting}
            className={cn('pr-20', getFieldClasses('confirmPassword'))}
            autoComplete=&quot;new-password&quot;
          />
          <div className=&quot;absolute inset-y-0 right-0 flex items-center gap-1 pr-3&quot;>
            {getFieldValidationIcon('confirmPassword')}
            <Button
              type=&quot;button&quot;
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              className=&quot;h-7 w-7 p-0&quot;
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? (
                <EyeOff className=&quot;h-4 w-4&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <Eye className=&quot;h-4 w-4&quot; />
              )}
            </Button>
          </div>
        </div>
<<<<<<< HEAD
        {errors.confirmPassword && (
          <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
            <AlertCircle className=&quot;h-3 w-3&quot; />
=======
        {_errors.confirmPassword && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

<<<<<<< HEAD
      {/* Global Error */}
      {errors.root && (
        <div className=&quot;p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2&quot;>
          <AlertCircle className=&quot;h-4 w-4 flex-shrink-0&quot; />
=======
      {_/* Global Error */}
      {_errors.root && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {errors.root.message}
        </div>
      )}

      {_/* Submit Button */}
      <Button 
<<<<<<< HEAD
        type=&quot;submit&quot; 
        className=&quot;w-full py-3&quot; 
        disabled={isSubmitting || !isValid}
=======
        type="submit" 
        className="w-full py-3" 
        disabled={_isSubmitting || !isValid}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        {_isSubmitting ? (
          <>
            <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
            Creating Account...
          </>
        ) : (
          'Create Account'
        )}
      </Button>
    </form>
  )
}
