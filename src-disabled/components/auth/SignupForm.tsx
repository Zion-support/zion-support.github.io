:src_backup/components/auth/SignupForm.tsx
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
  path: ["confirmPassword"]}),
                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 4 ? 'text-green-600' :                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 2 ? 'text-yellow-600' : 'text-red-600'
              )}>
                {passwordStrength.label}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={cn('h-2 rounded-full transition-all duration-300', passwordStrength.color)}
                style={{ width: `${passwordStrength.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <span className={watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>
:src/components/auth/SignupForm.tsx
8+ characters
                </span>
                <span className={/[A-Z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Uppercase letter
                </span>
                <span className={/[a-z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Lowercase letter
                </span>
                <span className={/[0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Number
                </span>
                <span className={/[^A-Za-z0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Special character                </span>

                </span>
              </div>
            </div>
          </div>
        )}

        {errors.password && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.password.message}
          </p>
        )}
:src/components/auth/SignupForm.tsx

  path: ["confirmPassword"]}),;

type SignupFormData = z && z.infer<typeof signupSchema>;

        setFieldStates(prev => ({;
          ...prev;

        timeouts[fieldName] = setTimeout(async () => {;
          const result = await trigger(typedFieldName);
          const error = errors[typedFieldName];

          setFieldStates(prev => ({;
            ...prev;
    const state = fieldStates[fieldName];
    const isTouched = touchedFields[fieldName as keyof SignupFormData];    ;
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    }

    return null;
  };
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
        )}
      </div>;
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register('email')}
            disabled={isSubmitting}
            className={cn('pr-10', getFieldClasses('email'))}
            autoComplete="email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {getFieldValidationIcon('email')}
          </div>
        </div>
        {errors.email && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.email.message}
          </p>;
        )}
      </div>;
      {/* Password Field with Strength Meter */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            {...register('password')}
            disabled={isSubmitting}
            className={cn('pr-20', getFieldClasses('password'))}
            autoComplete="new-password"
          />
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
            {getFieldValidationIcon('password')}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>;
          </div>;
        </div>;
        {/* Password Strength Meter */}
        {watchedFields.password && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Password Strength</span>
              <span className={cn('font-medium', 
                passwordStrength.strength >= 4 ? 'text-green-600' :
                passwordStrength.strength >= 3 ? 'text-blue-600' :
                passwordStrength.strength >= 2 ? 'text-yellow-600' : 'text-red-600'
              )}>
                {passwordStrength.label}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={cn('h-2 rounded-full transition-all duration-300', passwordStrength.color)}
                style={{ width: `${passwordStrength.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <span className={watchedFields.password?.length >= 8 ? 'text-green-600' : 'text-gray-400'}>
                   8+ characters
                </span>
                <span className={/[A-Z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Uppercase letter
                </span>
                <span className={/[a-z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Lowercase letter
                </span>
                <span className={/[0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Number
                </span>
                <span className={/[^A-Za-z0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                   Special character
                  ✓ 8+ characters
                </span>
                <span className={/[A-Z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Uppercase letter
                </span>
                <span className={/[a-z]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Lowercase letter
                </span>
                <span className={/[0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Number
                </span>
                <span className={/[^A-Za-z0-9]/.test(watchedFields.password || '') ? 'text-green-600' : 'text-gray-400'}>
                  ✓ Special character
                </span>
              </div>
            </div>
          </div>
        )}
        {errors.password && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.password.message}
          </p>;
        )}
:src_backup/components/auth/SignupForm.tsx

  const getFieldClasses = (fieldName: string) => {;
    const state = fieldStates[fieldName];
    const isTouched = touchedFields[fieldName as keyof SignupFormData];    ;

    let strength = 0;

    const labels = ['Very WeakWeakFairGoodStrong'];
    const colors = ['bg-red-500bg-orange-500bg-yellow-500bg-blue-500bg-green-500'];

      logErrorToProduction('Unexpected signup error:', { data: error }),;
      fireEvent('signup_error', { message: error && error.message || 'unexpected' }),;
      const errorMessage = 'An unexpected error occurred during signup. Please try again.';

      setError('root', { message: errorMessage }),;
              <span className={cn('font-medium', passwordStrength && passwordStrength.strength >= 4 ? 'text-green-600' :}
}

:src/components/auth/SignupForm.tsx

:src_backup/components/auth/SignupForm.tsx

  path: ["confirm_password"]}),
      </div>  path: ["confirm_password"]}),
type SignupFormData = z.infer < typeof signup_schema>;
        setFieldStates (prev => ({
          ...prev;
        timeouts[field_name] = set_timeout (async () => {
          const result = await trigger (typedFieldName);
          const error = errors[typedFieldName];
          setFieldStates (prev => ({
            ...prev;
    const state = field_states[field_name];
    const is_touched = touched_fields[field_name as keyof SignupFormData];
      return <AlertCircle className="h - 4 w - 4 text - red-500" />;
    }
:src_backup/components/auth/SignupForm.tsx
    return null
  }
  const getFieldClasses = (fieldName: string) => {
    const state = fieldStates[fieldName]
    const isTouched = touchedFields[fieldName as keyof SignupFormData]
    let strength = 0
    const labels = ['Very WeakWeakFairGoodStrong']
    const colors = ['bg-red-500bg-orange-500bg-yellow-500bg-blue-500bg-green-500']
      logErrorToProduction('Unexpected signup error:', { data: error })
      fireEvent('signup_error', { message: error.message |'unexpected' })
      const errorMessage = 'An unexpected error occurred during signup. Please try again.'
      setError('root', { message: errorMessage })
:src_backup/components/auth/SignupForm.tsx
              <span className={cn('font-medium', passwordStrength.strength >= 4 ? 'text-green-600' :}}
    return null;
  }
  const getFieldClasses = (field_name: string) =>: any {
    const state = field_states[field_name];
    const is_touched = touched_fields[field_name as keyof SignupFormData];
    let strength = 0;
    const labels = ['Very WeakWeakFairGoodStrong'];
    const colors = ['bg - red - 500bg - orange - 500bg - yellow - 500bg - blue - 500bg - green - 500'];
      logErrorToProduction ('Unexpected signup error:', { data: error }),
      fire_event ('signup_error', { message: error.message || 'unexpected' }),
      const error_message = 'An unexpected error occurred during signup. Please try again.';
      set_error ('root', { message: error_message }),
              <span className={cn ('font - medium', password_strength.strength >= 4 ? 'text - green - 600' :}
}

}

      </div>;
      {/* Confirm Password Field */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            {...register('confirmPassword')}
            disabled={isSubmitting}
            className={cn('pr-20', getFieldClasses('confirmPassword'))}
            autoComplete="new-password"
          />
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
            {getFieldValidationIcon('confirmPassword')}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-600 flex items-center gap-1">"
            <AlertCircle className="h-3 w-3" />"
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.confirmPassword.message}
          </p>;
        )}
      </div>;
      {/* Global Error */}
      {errors.root && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">"
          <AlertCircle className="h-4 w-4 flex-shrink-0" />"
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {errors.root.message}
        </div>;
      )}
;
      {/* Submit Button */}
      <Button
        type="submit" "
        className="w-full py-3" "
      <Button 
        type="submit" 
        className="w-full py-3" 
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />"
            Creating Account...
          </>
        ) : (
          'Create Account''
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Creating Account...
          </>
        ) : (
          'Create Account'
        )}
:src_backup/components/auth/SignupForm.tsx
      </Button>;
    </form>;
  );
}
;
;


}
;)))))))
;
;
  );

}/> </div> ✓ 8+ characters </span> <span className= {';
  /[A-Z]/.test (watchedFields.password || '') ? 'text-green-600': 'text-gray-400' ;
}> ✓ Uppercase letter </span> <span className= {';
  /[a-z]/.test (watchedFields.password || '') ? 'text-green-600': 'text-gray-400' ;
}> ✓ Lowercase letter </span> <span className= {';
  /[0-9]/.test (watchedFields.password || '') ? 'text-green-600': 'text-gray-400' ;
}> ✓ Number </span> <span className= {';
  /[^A-Za-z0-9]/.test (watchedFields.password || '') ? 'text-green-600': 'text-gray-400' ;
}> ✓ Special character </span> </div> </div> </div>) ;
}{;
  errors.password.message ;
}</p>) ";
}</div> </Label> <div className=" relative"> <Input) : (<Eye className=" h-4 w-4"/>) ;
}</Button> </div> </div> {;
  errors.confirmPassword.message ;
}</p>) ;
}</div> {;
  errors.root.message ;
}</div>) ;
}{;
  /* Submit Button */ ;
}<Button > {'";
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Creating Account... </>) : ('Create Account') ;
}</Button> </form>) ;
}'"
:src/components/auth/SignupForm.tsx
