import { useState, useCallback } from 'react'
interface FormState<T> {
  data: T
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  errors: Partial<Record<keyof T, string>>
}
interface UseFormOptions<T> {
  initialData: T
  onSubmit: (data: T) => Promise<void>
  validate?: (data: T) => Partial<Record<keyof T, string>>
}
export function useForm<T extends Record<string, any>>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: {},
  })
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setFormState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: type === 'checkbox' ? checked : value,
      },
      errors: {
        ...prev.errors,
        [name]: '', // Clear error when user starts typing
      },
    }))
  }, [])
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    // Validate form
    const validationErrors = validate ? validate(formState.data) : {}
    if (Object.keys(validationErrors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors: validationErrors,
      }))
      return
    }
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: 'idle',
      errors: {},
    }))
    try {
      await onSubmit(formState.data)
      setFormState(prev => ({
        ...prev,
        submitStatus: 'success',
        data: initialData, // Reset form
      }))
    } catch {
      setFormState(prev => ({
        ...prev,
        submitStatus: 'error',
      }))
    } finally {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
      }))
    }
  }, [formState.data, onSubmit, validate, initialData])
  const resetForm = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: 'idle',
      errors: {},
    })
  }, [initialData])
  return {
    ...formState,
    handleInputChange,
    handleSubmit,
    resetForm,
  }
}