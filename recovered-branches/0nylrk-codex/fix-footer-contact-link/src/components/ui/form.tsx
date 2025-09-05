<<<<<<< HEAD
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
;
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
;
const Form = FormProvider;
;
type FormFieldContextValue = {;
  name:string;
}
;
const FormFieldContext = React.createContext<FormFieldContextValue>({;
  name:""});
;
const FormField = ({ ...props } any) => {;
  return (;
    <FormFieldContext.Provider value={{ name:props.name }}>;
      <Controller {...props} />;
    </FormFieldContext.Provider>;
  );
}
;
const useFormField = () => {;
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue;
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();
;
  const fieldState = getFieldState(fieldContext.name, formState);
;
  if (!fieldContext) {;
    throw new Error("useFormField should be used within <FormField>");
  }
;
  if (!itemContext) {;
    throw new Error("useFormField should be used within <FormItem>");
  }
;
  const { id } = itemContext as FormItemContextValue;
;
  return {;
    id,;
    name:fieldContext.name,;
    formItemId:`${id}-form-item`,;
    formDescriptionId:`${id}-form-item-description`,;
    formMessageId:`${id}-form-item-message`,;
    ...fieldState}
}
;
type FormItemContextValue = {;
  id:string;
}
;
const FormItemContext = React.createContext<FormItemContextValue | null>(null);
;
const FormItem = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
  const id = useReactId();
;
  return (;
    <FormItemContext.Provider value={{ id }}>;
      <div ref={ref} className={cn("space-y-2", className)} {...props} />;
    </FormItemContext.Provider>;
  );
});
FormItem.displayName = "FormItem";
;
const FormLabel = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  const { error, formItemId } = useFormField();
;
  return (;
    <Label;
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />;
  );
});
FormLabel.displayName = "FormLabel";
;
const FormControl = React.forwardRef<;
  React.ElementRef<typeof Slot>,;
  React.ComponentPropsWithoutRef<typeof Slot>;
>(({ ...props }, ref) => {;
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
;
  return (;
    <Slot;
      ref={ref}
      id={formItemId}
      aria-describedby={;
        !error;
          ? `${formDescriptionId}`;
          :`${formDescriptionId} ${formMessageId}`;
      }
      aria-invalid={!!error}
      {...props}
    />;
  );
});
FormControl.displayName = "FormControl";
;
const FormDescription = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => {;
  const { formDescriptionId } = useFormField();
;
  return (;
    <p;
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />;
  );
});
FormDescription.displayName = "FormDescription";
;
const FormMessage = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, children, ...props }, ref) => {;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) :children;
;
  if (!body) {;
    return null;
  }
;
  return (;
    <p;
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >;
      {body}
    </p>;
  );
});
FormMessage.displayName = "FormMessage";
;
export {;
  useFormField,;
  Form,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
  FormField}
=======
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
const Form = FormProvider,
type FormFieldContextValue = {name: string}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  name: "&quot})
const FormField = (_{_...props}: unknown) => {return (
    <FormFieldContext.Provider value={{ name: props.name}}>
      <Controller {_...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue,
const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null,
const { getFieldState, formState} = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error(&quot;useFormField should be used within <FormField>&quot;)
  }

  if (!itemContext) {
    throw new Error(&quot;useFormField should be used within <FormItem>")
  }
  const {id} = itemContext as FormItemContextValue,
return {id, name: fieldContext.name, formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState}
}

type FormItemContextValue = {id: string}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({className, _...props}, ref) => {const id = useReactId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2&quot;, className)} {...props} />    </FormItemContext.Provider>
  )
})
FormItem.displayName = &quot;FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(_({className, _...props}, ref) => {const { error, formItemId} = useFormField()

  return (
    <Label,
ref={ref}
      className={cn(error && "text-destructive&quot;, className)}
      htmlFor={formItemId}
      {...props}    />
  )
})
FormLabel.displayName = &quot;FormLabel&quot;

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(_({_...props}, ref) => {const { error, formItemId, formDescriptionId, formMessageId} = useFormField()

  return (
    <Slot,
ref={ref}
      id={formItemId}
      aria-describedby={_!error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={_!!error}
      {_...props}
    />
  )
})
FormControl.displayName = &quot;FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({className, _...props}, ref) => {const { formDescriptionId} = useFormField()

  return (
    <p,
ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground&quot;, className)}
      {...props}    />
  )
})
FormDescription.displayName = &quot;FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({className, children, _...props}, ref) => {const { error, formMessageId} = useFormField()
  const body = error ? String(error?.message) : children,
if (!body) {return null}

  return (
    <p,
ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive&quot;, className)}
      {...props}    >
      {body}
    </p>
  )
})
FormMessage.displayName = &quot;FormMessage"

export {useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
