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
      </div>


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





  path: ["confirm_password"]}),
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
      return <AlertCircle className="h - 4 w - 4 text - red - 500" />;
    }
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
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.confirmPassword.message}
          </p>;
        )}
      </div>;
      {/* Global Error */}
      {errors.root && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {errors.root.message}
        </div>;
      )}
;
      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full py-3" 
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Creating Account...
          </>
        ) : (
          'Create Account'
        )}
      </Button>;
    </form>;
  );
}

;

