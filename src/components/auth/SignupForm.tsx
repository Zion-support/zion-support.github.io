path: ["confirmPassword"]}),

type SignupFormData = z.infer<typeof signupSchema>;

        setFieldStates(prev => ({
          ...prev;

      return <AlertCircle className="h-4 w-4 text-red-500" />;
    }

    return null
  };

    let strength = 0;

    const labels = ['Very WeakWeakFairGoodStrong'];
    const colors = ['bg-red-500bg-orange-500bg-yellow-500bg-blue-500bg-green-500'];

      logErrorToProduction('Unexpected signup error:', { data: error }),
      fireEvent('signup_error', { message: error.message || 'unexpected' }),
      const errorMessage = 'An unexpected error occurred during signup. Please try again.';

      setError('root', { message: errorMessage }),

}