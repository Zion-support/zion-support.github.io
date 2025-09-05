<<<<<<< HEAD
import React, { useState, useEffect } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from '@/hooks/use-toast',;
import { CheckCircle, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { fireEvent } from '@/lib/analytics',;
import {logErrorToProduction} from '@/utils/productionLogger',;
;
;
const signupSchema = z.object({;
  name:z.string().min(2, 'Full Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),;
  email:z.string().email('Please enter a valid email address').min(1, 'Email is required'),;
  password:z.string();
    .min(8, 'Password must be at least 8 characters');
    .regex(/[A-Z]/, 'Password must include at least one uppercase letter');
    .regex(/[a-z]/, 'Password must include at least one lowercase letter');
    .regex(/[0-9]/, 'Password must include at least one number');
    .regex(/[^A-Za-z0-9]/, 'Password must include at least one special character'),;
  confirmPassword:z.string();
}).refine((data) => data.password === data.confirmPassword, {;
  message:"Passwords don't match",;
  path:["confirmPassword"]}),;
;
type SignupFormData = z.infer<typeof signupSchema>,;
;
interface SignupFormProps {;
  onSuccess?:(result:{;
    email:string,;
    emailVerificationRequired:boolean;
  }) => void,;
  onError?:(error:string) => void;
=======
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
  message: "Passwords don't match",
  path: ["confirmPassword"]}),import React, {useState, useEffect} from 'react';

const signupSchema = z.object({name: z.string().min(2, _'Full Name must be at least 2 characters').max(50, _'Name must be less than 50 characters'), email: z.string().email('Please enter a valid email address').min(1, _'Email is required'), password: z.string()
    .min(8, _'Password must be at least 8 characters')
    .regex(/[A-Z]/, _'Password must include at least one uppercase letter')
    .regex(/[a-z]/, _'Password must include at least one lowercase letter')
    .regex(/[0-9]/, _'Password must include at least one number')
    .regex(/[^A-Za-z0-9]/, _'Password must include at least one special character'), confirmPassword: z.string()}).refine(_(data) => data.password === data.confirmPassword, {message: "Passwords don't match", path: ["confirmPassword"]});

type SignupFormData = z.infer<typeof signupSchema>,

interface SignupFormProps {
  onSuccess?: (result: {
    email: string,
    emailVerificationRequired: boolean
  }) => void,
  onError?: (error: string) => void
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
interface FieldValidationState {;
  isValid:boolean,;
  isValidating:boolean,;
  error:string | null;
}
<<<<<<< HEAD
;
export default function SignupForm({ onSuccess, onError } SignupFormProps) {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [showPassword, setShowPassword] = useState(false),;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),;
  const [fieldStates, setFieldStates] = useState<Record<string FieldValidationState>>({}),;
  const { signUp } = useAuth(),;
  ;
  const {;
    register,;
    handleSubmit,;
    formState:{ errors, isValid, touchedFields },;
    setError,;
    reset,;
    watch,;
    trigger} = useForm<SignupFormData>({;
    resolver:zodResolver(signupSchema),;
    mode:'onChange', // Enable real-time validation;
  }),;
;
  const watchedFields = watch(),;
;
  // Real-time field validation with debounce;
  useEffect(() => {;
    const timeouts:Record<string NodeJS.Timeout> = {},;
;
    Object.keys(watchedFields).forEach((fieldName) => {;
      const typedFieldName = fieldName as keyof SignupFormData,;
      if (touchedFields[typedFieldName]) {;
        setFieldStates(prev => ({;
          ...prev,;
          [fieldName]:{ ;
            isValid:prev[fieldName]?.isValid ?? false,;
            isValidating:true,;
            error:prev[fieldName]?.error ?? null;
=======

export default function SignupForm({ onSuccess, onError }: SignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [showPassword, setShowPassword] = useState(false),
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),
  const [fieldStates, setFieldStates] = useState<Record<string FieldValidationState>>({}),
  const { signUp } = useAuth(),  
  const {register, handleSubmit, formState: { errors, isValid, touchedFields},
    setError,
    reset,
    watch,
    trigger} = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange', // Enable real-time validation
  }),

  const watchedFields = watch(),

  // Real-time field validation with debounce,
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          }
        })),;
;
        timeouts[fieldName] = setTimeout(async () => {;
          const result = await trigger(typedFieldName),;
          const error = errors[typedFieldName],;
          ;
          setFieldStates(prev => ({;
            ...prev,;
            [fieldName]:{;
              isValid:result,;
              isValidating:false,;
              error:error?.message || null;
            }
<<<<<<< HEAD
          })),;
        }, 300),;
      }
    }),;
;
    return () => {;
      Object.values(timeouts).forEach(clearTimeout),;
    },;
  }, [watchedFields, touchedFields, trigger, errors]),;
;
  const getFieldValidationIcon = (fieldName:string) => {;
    const state = fieldStates[fieldName],;
    const isTouched = touchedFields[fieldName as keyof SignupFormData],;
    ;
    if (!isTouched) return null,;
    ;
    if (state?.isValidating) {;
      return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;
    }
    ;
    if (state?.isValid && !state?.error) {;
      return <CheckCircle className="h-4 w-4 text-green-500" />,;
    }
    ;
    if (state?.error) {;
      return <AlertCircle className="h-4 w-4 text-red-500" />,;
    }
    ;
    return null,;
  },;
;
  const getFieldClasses = (fieldName:string) => {;
    const state = fieldStates[fieldName],;
    const isTouched = touchedFields[fieldName as keyof SignupFormData],;
    ;
    if (!isTouched) return '',;
    ;
    if (state?.isValidating) {;
      return 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20';
=======
          }))
        }, 300)      }
    }),

    return () => {
      Object.values(timeouts).forEach(clearTimeout)
    }
  }, [watchedFields, touchedFields, trigger, errors]),

  const getFieldValidationIcon = (fieldName: string) => {
    const state = fieldStates[fieldName],
    const isTouched = touchedFields[fieldName as keyof SignupFormData],    
    if (!isTouched) return null,
    
    if (state?.isValidating) {
      return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
    }
    
    if (state?.isValid && !state?.error) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    
    if (state?.error) {
      return <AlertCircle className="h-4 w-4 text-red-500" />    
    if (state?.isValid && !state?.error) {
      return <CheckCircle className=&quot;h-4 w-4 text-green-500&quot; />
    }
    
    if (state?.error) {
      return <AlertCircle className=&quot;h-4 w-4 text-red-500&quot; />
    }
    
    return null
  },

  const getFieldClasses = (fieldName: string) => {
    const state = fieldStates[fieldName],
    const isTouched = touchedFields[fieldName as keyof SignupFormData],    
    if (!isTouched) return '',
    
    if (state?.isValidating) {
      return 'border-blue-300 focus:border-blue-500 focus:ring-blue-500/20'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
    ;
    if (state?.isValid && !state?.error) {;
      return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';
    }
<<<<<<< HEAD
    ;
    if (state?.error) {;
      return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';
    }
    ;
    return '',;
  },;
;
  const getPasswordStrength = (password:string) => {;
    if (!password) return { strength:0, label:'' },;
    ;
    let strength = 0,;
    const checks = [;
      password.length >= 8,;
      /[A-Z]/.test(password),;
      /[a-z]/.test(password),;
      /[0-9]/.test(password),;
      /[^A-Za-z0-9]/.test(password)],;
    ;
    strength = checks.filter(Boolean).length,;
    ;
    const labels = ['Very WeakWeak', 'FairGood', 'Strong'],;
    const colors = ['bg-red-500bg-orange-500', 'bg-yellow-500bg-blue-500', 'bg-green-500'],;
    ;
    return {;
      strength,;
      label:labels[strength - 1] || '',;
      color:colors[strength - 1] || 'bg-gray-300',;
      percentage:(strength / 5) * 100;
    },;
  },;
;
  const passwordStrength = getPasswordStrength(watchedFields.password || ''),;
;
  const onSubmit = async (data:SignupFormData) => {;
    fireEvent('signup_submit'),;
    setIsSubmitting(true),;
;
    try {;
      // Use AuthProvider's signup function;
      const result = await signUp(data.email, data.password, {;
        name:data.name,;
        displayName:data.name;
      }),;
;
      if (result.error) {;
        logErrorToProduction('Signup error:', { data:result.error }),;
        fireEvent('signup_error', { message:result.error }),;
        ;
        // Handle specific error cases with inline field errors;
        if (result.error.includes('already registered') || result.error.includes('already exists')) {;
          setError('email', { ;
            message:'An account with this email already exists. Please try logging in instead.' ;
          }),;
        } else if (result.error.includes('invalid email')) {;
          setError('email', { ;
            message:'Please enter a valid email address.' ;
          }),;
        } else if (result.error.includes('weak password')) {;
          setError('password', { ;
            message:'Password is too weak. Please choose a stronger password.' ;
          }),;
        } else {;
          setError('root', { ;
            message:result.error ;
          }),;
        }
        ;
        onError?.(result.error),;
        return,;
      }
;
      // Success;
      toast({;
        title:"Account Created Successfully!",;
        description:result.emailVerificationRequired ;
          ? "Please check your email to verify your account before logging in.";
          :"You can now log in to your account."}),;
;
      reset(),;
      fireEvent('signup_success'),;
      onSuccess?.({;
        email:data.email,;
        emailVerificationRequired:result.emailVerificationRequired ?? false}),;
;
    } catch (error:any) {;
      logErrorToProduction('Unexpected signup error:', { data:error }),;
      fireEvent('signup_error', { message:error.message || 'unexpected' }),;
      const errorMessage = 'An unexpected error occurred during signup. Please try again.',;
      ;
      setError('root', { message:errorMessage }),;
      onError?.(errorMessage),;
;
      toast({;
        title:"Signup Failed",;
        description:errorMessage,;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
      {/* Name Field */}
      <div className="space-y-2">;
        <Label htmlFor="name" className="text-sm font-medium">;
          Full Name <span className="text-red-500">*</span>;
        </Label>;
        <div className="relative">;
          <Input;
            id="name";
            type="text";
            placeholder="Enter your full name";
            {...register('name')}
            disabled={isSubmitting}
            className={cn('pr-10', getFieldClasses('name'))}
          />;
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">;
            {getFieldValidationIcon('name')}
          </div>;
        </div>;
        {errors.name && (;
          <p className="text-sm text-red-600 flex items-center gap-1">;
            <AlertCircle className="h-3 w-3" />;
            {errors.name.message}
          </p>;
=======
    
    if (state?.error) {
      return 'border-red-500 focus: border-red-500 focus:ring-red-500/20'
    }    
    return ''
  },

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '' },
    
    let strength = 0,
    const checks = [      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password)],
    
    strength = checks.filter(Boolean).length,
    
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
    fireEvent('signupsubmit'),
    setIsSubmitting(true),

    try {
      // Use AuthProvider's signup function,
const result = await signUp(data.email, data.password, {
        name: data.name,
        displayName: data.name
      }),

      if (result.error) {
        logErrorToProduction('Signup error:', { data: result.error }),
        fireEvent('signuperror', { message: result.error }),
        
        // Handle specific error cases with inline field errors,
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
          })        }
        
        onError?.(result.error),
        return
      }

      // Success,
toast({
        title: &quot;Account Created Successfully!&quot;,
        description: result.emailVerificationRequired 
          ? "Please check your email to verify your account before logging in."
          : "You can now log in to your account."}),
          ? &quot;Please check your email to verify your account before logging in.&quot;
          : &quot;You can now log in to your account.&quot});

      reset(),
      fireEvent('signupsuccess'),
      onSuccess?.({
        email: data.email,
        emailVerificationRequired: result.emailVerificationRequired ?? false})

    } catch (error: any) {
      logErrorToProduction('Unexpected signup error:', { data: error }),
      fireEvent('signuperror', { message: error.message || 'unexpected' }),
      const errorMessage = 'An unexpected error occurred during signup. Please try again.',
      
      setError('root', { message: errorMessage }),
      onError?.(errorMessage),

      toast({
        title: &quot;Signup Failed&quot;,
        description: errorMessage,
        variant: "destructive"})    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
      {/* Name Field */}
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;name&quot; className=&quot;text-sm font-medium&quot;>
          Full Name <span className=&quot;text-red-500&quot;>*</span>
      reset();
      fireEvent('signupsuccess');
      onSuccess?.({email: data.email, emailVerificationRequired: result.emailVerificationRequired ?? false})

    } catch (error: unknown) {logErrorToProduction('Unexpected signup error:', _{ data: error});
      fireEvent('signuperror', {message: error.message || 'unexpected'});
      const errorMessage = 'An unexpected error occurred during signup. Please try again.';
      
      setError('root', {message: errorMessage});
      onError?.(errorMessage);

      toast({title: "Signup Failed", description: errorMessage, variant: "destructive"})
    } finally {setIsSubmitting(false)}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {_/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <div className=&quot;relative&quot;>
          <Input,
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
            <AlertCircle className=&quot;h-3 w-3&quot; />            {errors.name.message}
          </p>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      </div>;
;
      {/* Email Field */}
<<<<<<< HEAD
      <div className="space-y-2">;
        <Label htmlFor="email" className="text-sm font-medium">;
          Email Address <span className="text-red-500">*</span>;
        </Label>;
        <div className="relative">;
          <Input;
            id="email";
            type="email";
            placeholder="Enter your email address";
            {...register('email')}
            disabled={isSubmitting}
            className={cn('pr-10', getFieldClasses('email'))}
            autoComplete="email";
          />;
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">;
            {getFieldValidationIcon('email')}
          </div>;
        </div>;
        {errors.email && (;
          <p className="text-sm text-red-600 flex items-center gap-1">;
            <AlertCircle className="h-3 w-3" />;
            {errors.email.message}
          </p>;
=======
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;email&quot; className=&quot;text-sm font-medium&quot;>
          Email Address <span className=&quot;text-red-500&quot;>*</span>        </Label>
        <div className=&quot;relative&quot;>
          <Input,
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
            <AlertCircle className=&quot;h-3 w-3&quot; />            {errors.email.message}
          </p>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      </div>;
;
      {/* Password Field with Strength Meter */}
<<<<<<< HEAD
      <div className="space-y-2">;
        <Label htmlFor="password" className="text-sm font-medium">;
          Password <span className="text-red-500">*</span>;
        </Label>;
        <div className="relative">;
          <Input;
            id="password";
            type={showPassword ? 'text' :'password'}
            placeholder="Create a strong password";
            {...register('password')}
            disabled={isSubmitting}
            className={cn('pr-20', getFieldClasses('password'))}
            autoComplete="new-password";
          />;
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">;
            {getFieldValidationIcon('password')}
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
=======
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;password&quot; className=&quot;text-sm font-medium&quot;>
          Password <span className=&quot;text-red-500&quot;>*</span>        </Label>
        <div className=&quot;relative&quot;>
          <Input,
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
            <Button,
type=&quot;button&quot;
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              className=&quot;h-7 w-7 p-0&quot;
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className=&quot;h-4 w-4&quot; />              ) : (
                <Eye className=&quot;h-4 w-4&quot; />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            </Button>;
          </div>;
        </div>;
        ;
        {/* Password Strength Meter */}
<<<<<<< HEAD
        {watchedFields.password && (;
          <div className="space-y-2">;
            <div className="flex justify-between text-xs">;
              <span>Password Strength</span>;
              <span className={cn('font-medium', ;
                passwordStrength.strength >= 4 ? 'text-green-600' :;
                passwordStrength.strength >= 3 ? 'text-blue-600' :;
                passwordStrength.strength >= 2 ? 'text-yellow-600' :'text-red-600';
              )}>;
                {passwordStrength.label}
              </span>;
            </div>;
            <div className="w-full bg-gray-200 rounded-full h-2">;
              <div ;
                className={cn('h-2 rounded-full transition-all duration-300', passwordStrength.color)}
                style={{ width:`${passwordStrength.percentage}%` }}
              />;
            </div>;
            <div className="text-xs text-gray-600 space-y-1">;
              <div className="grid grid-cols-2 gap-1">;
                <span className={watchedFields.password?.length >= 8 ? 'text-green-600' :'text-gray-400'}>;
                  ✓ 8+ characters;
                </span>;
                <span className={/[A-Z]/.test(watchedFields.password || '') ? 'text-green-600' :'text-gray-400'}>;
                  ✓ Uppercase letter;
                </span>;
                <span className={/[a-z]/.test(watchedFields.password || '') ? 'text-green-600' :'text-gray-400'}>;
                  ✓ Lowercase letter;
                </span>;
                <span className={/[0-9]/.test(watchedFields.password || '') ? 'text-green-600' :'text-gray-400'}>;
                  ✓ Number;
                </span>;
                <span className={/[^A-Za-z0-9]/.test(watchedFields.password || '') ? 'text-green-600' :'text-gray-400'}>;
                  ✓ Special character;
                </span>;
              </div>;
            </div>;
          </div>;
        )}
        ;
        {errors.password && (;
          <p className="text-sm text-red-600 flex items-center gap-1">;
            <AlertCircle className="h-3 w-3" />;
            {errors.password.message}
          </p>;
=======
        {watchedFields.password && (
          <div className=&quot;space-y-2&quot;>
            <div className=&quot;flex justify-between text-xs&quot;>              <span>Password Strength</span>
              <span className={cn('font-medium', passwordStrength.strength >= 4 ? 'text-green-600' :
                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 2 ? 'text-yellow-600' : 'text-red-600'
              )}>
                {passwordStrength.label}
              </span>
            </div>
            <div className=&quot;w-full bg-gray-200 rounded-full h-2&quot;>
              <div,
className={cn('h-2 rounded-full transition-all duration-300', passwordStrength.color)}
                style={_{ width: `${passwordStrength.percentage}%` }}
              />
            </div>
            <div className=&quot;text-xs text-gray-600 space-y-1&quot;>
              <div className=&quot;grid grid-cols-2 gap-1&quot;>
                <span className={watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>                  ✓ 8+ characters
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
        
        {errors.password && (
          <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
            <AlertCircle className=&quot;h-3 w-3&quot; />            {errors.password.message}
          </p>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      </div>;
;
      {/* Confirm Password Field */}
<<<<<<< HEAD
      <div className="space-y-2">;
        <Label htmlFor="confirmPassword" className="text-sm font-medium">;
          Confirm Password <span className="text-red-500">*</span>;
        </Label>;
        <div className="relative">;
          <Input;
            id="confirmPassword";
            type={showConfirmPassword ? 'text' :'password'}
            placeholder="Confirm your password";
            {...register('confirmPassword')}
            disabled={isSubmitting}
            className={cn('pr-20', getFieldClasses('confirmPassword'))}
            autoComplete="new-password";
          />;
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">;
            {getFieldValidationIcon('confirmPassword')}
            <Button;
              type="button";
              variant="ghost";
              size="sm";
              className="h-7 w-7 p-0";
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide confirm password' :'Show confirm password'}
            >;
              {showConfirmPassword ? (;
                <EyeOff className="h-4 w-4" />;
              ) :(;
                <Eye className="h-4 w-4" />;
              )}
            </Button>;
          </div>;
        </div>;
        {errors.confirmPassword && (;
          <p className="text-sm text-red-600 flex items-center gap-1">;
            <AlertCircle className="h-3 w-3" />;
            {errors.confirmPassword.message}
          </p>;
=======
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;confirmPassword&quot; className=&quot;text-sm font-medium&quot;>
          Confirm Password <span className=&quot;text-red-500&quot;>*</span>        </Label>
        <div className=&quot;relative&quot;>
          <Input,
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
            <Button,
type=&quot;button&quot;
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              className=&quot;h-7 w-7 p-0&quot;
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? (
                <EyeOff className=&quot;h-4 w-4&quot; />              ) : (
                <Eye className=&quot;h-4 w-4&quot; />
              )}
            </Button>
          </div>
        </div>
        {errors.confirmPassword && (
          <p className=&quot;text-sm text-red-600 flex items-center gap-1&quot;>
            <AlertCircle className=&quot;h-3 w-3&quot; />            {errors.confirmPassword.message}
          </p>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      </div>;
;
      {/* Global Error */}
<<<<<<< HEAD
      {errors.root && (;
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">;
          <AlertCircle className="h-4 w-4 flex-shrink-0" />;
          {errors.root.message}
        </div>;
      )}
;
      {/* Submit Button */}
      <Button ;
        type="submit" ;
        className="w-full py-3" ;
        disabled={isSubmitting || !isValid}
      >;
        {isSubmitting ? (;
          <>;
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
            Creating Account...;
          </>;
        ) :(;
          'Create Account';
        )}
      </Button>;
    </form>;
  ),;
=======
      {errors.root && (
        <div className=&quot;p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2&quot;>
          <AlertCircle className=&quot;h-4 w-4 flex-shrink-0&quot; />          {errors.root.message}
        </div>
      )}

      {_/* Submit Button */}
      <Button,
type=&quot;submit&quot; 
        className=&quot;w-full py-3&quot; 
        disabled={isSubmitting || !isValid}      >
        {isSubmitting ? (
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
