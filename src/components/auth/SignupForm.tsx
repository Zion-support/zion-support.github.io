<<<<<<< HEAD
  path: ["confirmPassword"]}),

type SignupFormData = z.infer<typeof signupSchema>;

<<<<<<< HEAD
        setFieldStates(prev => ({
          ...prev;
<<<<<<< HEAD

        timeouts[fieldName] = setTimeout(async () => {
          const result = await trigger(typedFieldName);
          const error = errors[typedFieldName];
          
          setFieldStates(prev => ({
            ...prev;
<<<<<<< HEAD
    const state = fieldStates[fieldName];
    const isTouched = touchedFields[fieldName as keyof SignupFormData];
    
<<<<<<< HEAD
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
    
    return null
  };

  const getFieldClasses = (fieldName: string) => {
    const state = fieldStates[fieldName];
    const isTouched = touchedFields[fieldName as keyof SignupFormData];
    
<<<<<<< HEAD
    
    let strength = 0;
<<<<<<< HEAD
    
    const labels = ['Very WeakWeakFairGoodStrong'];
    const colors = ['bg-red-500bg-orange-500bg-yellow-500bg-blue-500bg-green-500'];
    
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
      logErrorToProduction('Unexpected signup error:', { data: error }),
      fireEvent('signup_error', { message: error.message || 'unexpected' }),
      const errorMessage = 'An unexpected error occurred during signup. Please try again.';
      
      setError('root', { message: errorMessage }),
<<<<<<< HEAD
              <span className={cn('font-medium', passwordStrength.strength >= 4 ? 'text-green-600' :
