import { useState, useCallback } from "react";

interface FormState<T /> {
<<<<<<< HEAD
  data: T;,
  isSubmitting: boolean;,
  submitStatus: "idle" | "success" | "error";,
  errors: Partial<Record<keyof T, string />>;
}

interface UseFormOptions<T /> {
  initialData: T;,
  onSubmit: (data: T) => Promise<void />,
  validate?: (data: T) => Partial<Record<keyof T, string />>;
}

export function useForm<T extends Record<string, any />>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T />) {
=======
  data: T;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  error,</T>
  s: Partial<Record<keyof T, string />>;
}
</Record>
interface UseFormOptions<T /> {
  initialData: T;</T>
  onSubmit: (data: T) => Promise<void />
  validate?: (dat,</void>
  a: T) => Partial<Record<keyof T, string />>;
}
</Record>
export function useForm<T extends Record<string, any />>({
  initialData,
  onSubmit,
  validate,</T>
}: UseFormOptions<T />) {</T>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  const [formState, setFormState] = useState<FormState<T />>({
    data: initialData,
    isSubmitting: false,
    submitStatus: "idle",
    errors: {},
  });
<<<<<<< HEAD

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement />) => {,
=======
</FormState>
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement />) => {;
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      data: {,
        ...prev.data,
        [name]: value,
      },
      errors: {,
        ...prev.errors,
        [name]: "", // Clear error when user starts typing
<<<<<<< HEAD
      },
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {,
    e.preventDefault();
    
    // Validate form;

const validationErrors = validate ? validate(formState.data) : {};
    if (Object.keys(validationErrors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors: validationErrors,
=======
      },)
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {;
    e.preventDefault();
    ,
    // Validate form,
    const validationErrors = validate ? validate(formState.data) : {};
    if (Object.keys(validationErrors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors: validationErrors,)
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: "idle",
<<<<<<< HEAD
      errors: {},
=======
      errors: {},)
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    }));

    try {
      await onSubmit(formState.data);
      setFormState(prev => ({
        ...prev,
        submitStatus: "success",
<<<<<<< HEAD
        data: initialData, // Reset form
=======
        data: initialData, // Reset form)
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      }));
    } catch (error) {
      // Log error in development, send to error service in production
      if (process.env.NODE_ENV === "development") {
        console.error("Form submission error:", error);
      }
      // In production, you would send this to your error monitoring service
      // Example: sendToErrorService(error, "FormSubmission");
      
      setFormState(prev => ({
        ...prev,
<<<<<<< HEAD
        submitStatus: "error",
=======
        submitStatus: "error",)
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      }));
    } finally {
      setFormState(prev => ({
        ...prev,
<<<<<<< HEAD
        isSubmitting: false,
=======
        isSubmitting: false,)
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      }));
    }
  }, [formState.data, onSubmit, validate, initialData]);

  const resetForm = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: "idle",
<<<<<<< HEAD
      errors: {},
=======
      errors: {},);
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    });
  }, [initialData]);

  return {
    ...formState,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
<<<<<<< HEAD
=======
}</HTMLInputElement>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
}