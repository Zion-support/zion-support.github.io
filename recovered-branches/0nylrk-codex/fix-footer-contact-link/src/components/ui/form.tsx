import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { useReactId } from "@/hooks/useReactId"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  type FieldPath,
  type FieldValues,
  FormProvider,
<<<<<<< HEAD
  useFormContext,
} from "react-hook-form"
=======
  useFormContext} from "react-hook-form"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue = {
  name: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
<<<<<<< HEAD
  name: "",
})
=======
  name: ""})
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

const FormField = ({ ...props }: any) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null
<<<<<<< HEAD
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)
=======
  const { getFieldStateformState } = useFormContext()

  const fieldState = getFieldState(fieldContext.nameformState)
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const { id } = itemContext as FormItemContextValue

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
<<<<<<< HEAD
    ...fieldState,
  }
=======
    ...fieldState}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => {
=======
>(({ className...props }ref) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const id = useReactId()

  return (
    <FormItemContext.Provider value={{ id }}>
<<<<<<< HEAD
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
=======
      <div ref={ref} className={cn("space-y-2"className)} {...props} />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
<<<<<<< HEAD
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()
=======
>(({ className...props }ref) => {
  const { errorformItemId } = useFormField()
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <Label
      ref={ref}
<<<<<<< HEAD
      className={cn(error && "text-destructive", className)}
=======
      className={cn(error && "text-destructive"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
<<<<<<< HEAD
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
=======
>(({ ...props }ref) => {
  const { errorformItemIdformDescriptionIdformMessageId } = useFormField()
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => {
=======
>(({ className...props }ref) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
<<<<<<< HEAD
      className={cn("text-sm text-muted-foreground", className)}
=======
      className={cn("text-sm text-muted-foreground"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
=======
>(({ classNamechildren...props }ref) => {
  const { errorformMessageId } = useFormField()
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
<<<<<<< HEAD
      className={cn("text-sm font-medium text-destructive", className)}
=======
      className={cn("text-sm font-medium text-destructive"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
<<<<<<< HEAD
  FormField,
}
=======
  FormField}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
