  path: ["confirmPassword"]}),

type SignupFormData = z.infer<typeof signupSchema>;

        setFieldStates(prev => ({
          ...prev;

        timeouts[fieldName] = setTimeout(async () => {
          const result = await trigger(typedFieldName);
          const error = errors[typedFieldName];
          
          setFieldStates(prev => ({
            ...prev;
    const state = fieldStates[fieldName];
    const isTouched = touchedFields[fieldName as keyof SignupFormData];
    
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
    
    return null
  };

  const getFieldClasses = (fieldName: string) => {
    const state = fieldStates[fieldName];
    const isTouched = touchedFields[fieldName as keyof SignupFormData];
    
    
    let strength = 0;
    
    const labels = ['Very WeakWeakFairGoodStrong'];
    const colors = ['bg-red-500bg-orange-500bg-yellow-500bg-blue-500bg-green-500'];
    



      logErrorToProduction('Unexpected signup error:', { data: error }),
      fireEvent('signup_error', { message: error.message || 'unexpected' }),
      const errorMessage = 'An unexpected error occurred during signup. Please try again.';
      
      setError('root', { message: errorMessage }),
              <span className={cn('font-medium', passwordStrength.strength >= 4 ? 'text-green-600' :
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
