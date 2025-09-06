<<<<<<< HEAD
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {useReactId} from '@/hooks/useReactId';
import {Slot} from '@radix-ui/react-slot';
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext,} from 'react-hook-form';
import {cn} from '@/lib/utils';
import {Label} from '@/components/ui/label';
const Form = FormProvider;
type FormFieldContextValue = {
  name: string
}
const FormFieldContext = React.createContext<FormFieldContextValue>({
  name: ''
});
const FormField = ({ ...props }: any) =></FormFieldContextValue> {
=======
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { useReactId } from "@/hooks/useReactId"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue = {
  name: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  name: ""})

const FormField = ({ ...props }: any) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
<<<<<<< HEAD
  );
}
const useFormField = () => {
  const fieldContext = React.useContext(
    FormFieldContext
  ) as FormFieldContextValue;
  const itemContext = React.useContext(
    FormItemContext
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
=======
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  if (!itemContext) {
<<<<<<< HEAD
    throw new Error('useFormField should be used within <FormItem>');
  }
  const { id } = itemContext as FormItemContextValue;
  return {
    id
    name: fieldContext.name
    formItemId: `${id}-form-item`
    formDescriptionId: `${id}-form-item-description`
    formMessageId: `${id}-form-item-message`
    ...fieldState
  }
}
type FormItemContextValue = {
  id: string
}
const FormItemContext = React.createContext<FormItemContextValue | null>(null);
const FormItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useReactId();
=======
    throw new Error("useFormField should be used within <FormItem>")
  }

  const { id } = itemContext as FormItemContextValue;
  return {;
    id,;
    name: fieldContext.name,;
    formItemId: `${id}-form-item`,;
    formDescriptionId: `${id}-form-item-description`,;
    formMessageId: `${id}-form-item-message`,;
    ...fieldState}
}
;
type FormItemContextValue = {;
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useReactId()

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
<<<<<<< HEAD
  );
});
FormItem.displayName = 'FormItem';
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>
  React.ComponentProp</typeof>sWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
    />
  );
});
FormLabel.displayName = 'FormLabel';
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot</typeof>>
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
    />
  );
});
FormControl.displayName = 'FormControl';
const FormDescription = React.forwardRef<
  HTMLParag</HTMLParagraphElement>raphElement
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
    />
  );
});
FormDescription.displayName = 'FormDescription';
const FormMessage = React.</HTMLParagraphElement>forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
=======
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={;
        !error;
          ? `${formDescriptionId}`;
          : `${formDescriptionId} ${formMessageId}`;
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
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
    >
      {body}
    </p>
<<<<<<< HEAD
  );
});
FormMessage.displayName = 'FormMessage';
export {
  useFormField
  Form
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
  FormField
}
=======
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
  FormField}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
