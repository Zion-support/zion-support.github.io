<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as LabelPrimitive from &quot;@radix-ui/react-label&quot;
import { useReactId } from &quot;@/hooks/useReactId&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import {
  Controller,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext} from &quot;react-hook-form&quot;

import { cn } from &quot;@/lib/utils&quot;
import { Label } from &quot;@/components/ui/label&quot;

const Form = FormProvider

type FormFieldContextValue = {
  name: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  name: "&quot;})

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
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error(&quot;useFormField should be used within <FormField>&quot;)
  }

  if (!itemContext) {
    throw new Error(&quot;useFormField should be used within <FormItem>")
=======
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useReactId } from "@/hooks/useReactId";
import { Slot } from "@radix-ui/react-slot";
import {;
  Controller,;
  type FieldPath,;
  type FieldValues,;
  FormProvider,;
  useFormContext} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
const Form = FormProvider;
type FormFieldContextValue = {;
  name: string;
}
;
const FormFieldContext = React.createContext<FormFieldContextValue>({;
  name: ""});
const FormField = ({ ...props }: any) => {;
  return (;
    <FormFieldContext.Provider value={{ name: props.name }}>;
      <Controller {...props} />;
    </FormFieldContext.Provider>;
  );
}
;
const useFormField = () => {;
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue;
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {;
    throw new Error("useFormField should be used within <FormField>");
  }
;
  if (!itemContext) {;
    throw new Error("useFormField should be used within <FormItem>");
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
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
<<<<<<< HEAD

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useReactId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2&quot;, className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = &quot;FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
=======
;
const FormItemContext = React.createContext<FormItemContextValue | null>(null);
const FormItem = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
  const id = useReactId();
  return (;
    <FormItemContext.Provider value={{ id }}>;
      <div ref={ref} className={cn("space-y-2", className)} {...props} />;
    </FormItemContext.Provider>;
  );
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  const { error, formItemId } = useFormField();
  return (;
    <Label;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      ref={ref}
      className={cn(error && "text-destructive&quot;, className)}
      htmlFor={formItemId}
      {...props}
<<<<<<< HEAD
    />
  )
})
FormLabel.displayName = &quot;FormLabel&quot;

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
=======
    />;
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef<;
  React.ElementRef<typeof Slot>,;
  React.ComponentPropsWithoutRef<typeof Slot>;
>(({ ...props }, ref) => {;
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return (;
    <Slot;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      ref={ref}
      id={formItemId}
      aria-describedby={;
        !error;
          ? `${formDescriptionId}`;
          : `${formDescriptionId} ${formMessageId}`;
      }
      aria-invalid={!!error}
      {...props}
<<<<<<< HEAD
    />
  )
})
FormControl.displayName = &quot;FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
=======
    />;
  );
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => {;
  const { formDescriptionId } = useFormField();
  return (;
    <p;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground&quot;, className)}
      {...props}
<<<<<<< HEAD
    />
  )
})
FormDescription.displayName = &quot;FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
=======
    />;
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, children, ...props }, ref) => {;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {;
    return null;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  return (;
    <p;
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive&quot;, className)}
      {...props}
    >;
      {body}
<<<<<<< HEAD
    </p>
  )
})
FormMessage.displayName = &quot;FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
=======
    </p>;
  );
});
FormMessage.displayName = "FormMessage";
export {;
  useFormField,;
  Form,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription;
  FormMessage;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  FormField}
;