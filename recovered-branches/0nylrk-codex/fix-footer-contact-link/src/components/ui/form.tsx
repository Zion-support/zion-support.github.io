
<<<<<<< HEAD
=======


=======
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

type FormFieldContextValue = {;
  name: string,;
};

const FormFieldContext = React && React.createContext<FormFieldContextValue>({;
  name: '',;
});

const FormField = ({ ...props }: any) =></FormFieldContextValue> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

};

const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;

=======
  return (
    <FormFieldContext && FormFieldContext.Provider value={{ name: props && props.name }}>;
      <Controller {...props} />;
    </FormFieldContext && FormFieldContext.Provider>;
  );
};
const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ) as FormFieldContextValue;
  const itemContext = React && React.useContext(;
    FormItemContext;
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();

<<<<<<< HEAD
=======
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue = {
  name: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  name: ""})

const FormField = ({ ...props }: any) => {
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)


<<<<<<< HEAD

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }
  if (!itemContext) {


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const fieldState = getFieldState(fieldContext && fieldContext.name, formState);

  if (!fieldContext) {;
    throw new Error('useFormField should be used within <FormField>');
  }
<<<<<<< HEAD

  if (!itemContext) {;

    throw new Error('useFormField should be used within <FormItem>');
  }
  const { id } = itemContext as FormItemContextValue;

=======


=======
=======
  if (!itemContext) {;
    throw new Error('useFormField should be used within <FormItem>');
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


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    throw new Error("useFormField should be used within <FormItem>")
  }


<<<<<<< HEAD
  return {;
    id,;
    name: fieldContext && fieldContext.name,;
    formItemId: `${id}-form-item`,;
    formDescriptionId: `${id}-form-item-description`,;
    formMessageId: `${id}-form-item-message`,;
    ...fieldState,;
  };
};

type FormItemContextValue = {;
  id: string,;
};


const FormItemContext = React.createContext<FormItemContextValue | null>(null)



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======


const FormItemContext = React && React.createContext<FormItemContextValue | null>(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const FormItem = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const id = useReactId();
  return (
<<<<<<< HEAD

=======
    <FormItemContext && FormItemContext.Provider value={{ id }}>;
      <div ref={ref} className={cn('space-y-2', className)} {...props} />;
    </FormItemContext && FormItemContext.Provider>;
  );
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
FormItem && FormItem.displayName = 'FormItem';

const FormLabel = React && React.forwardRef<;
  React && React.ElementRef<typeof LabelPrimitive && LabelPrimitive.Root>,;
  React && React.ComponentProp</typeof>sWithoutRef<typeof LabelPrimitive && LabelPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  const { error, formItemId } = useFormField();


    />;
  );
});
FormLabel && FormLabel.displayName = 'FormLabel';

const FormControl = React && React.forwardRef<;
  React && React.ElementRef<typeof Slot</typeof>>,;
  React && React.ComponentPropsWithoutRef<typeof Slot>;
>(({ ...props }, ref) => {;
  const { error, formItemId, formDescriptionId, formMessageId } =;
    useFormField();


    />;
  );
});
FormControl && FormControl.displayName = 'FormControl';

const FormDescription = React && React.forwardRef<;
  HTMLParag</HTMLParagraphElement>raphElement,;
  React && React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => {;
  const { formDescriptionId } = useFormField();


    />;
  );
});
FormDescription && FormDescription.displayName = 'FormDescription';

const FormMessage = React.</HTMLParagraphElement>forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, children, ...props }, ref) => {;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {;
    return null;
  }
<<<<<<< HEAD


    >;

      {body}
    </p>;
  );
});

FormMessage && FormMessage.displayName = 'FormMessage';
=======
=======
;
  return {;
    id,;
    name:fieldContext.name,;
    formItemId:`${id}-form-item`,;
    formDescriptionId:`${id}-form-item-description`,;
    formMessageId:`${id}-form-item-message`,;
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  if (!itemContext) {
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
      {body}
    </p>;
  );
});
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useReactId()

  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

<<<<<<< HEAD

=======
  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

<<<<<<< HEAD
=======
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


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

<<<<<<< HEAD

=======
    return null
    return null;
    return null
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
    >
      {body}
    </p>

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )
})
FormMessage.displayName = "FormMessage"

<<<<<<< HEAD

=======
FormMessage.displayName = "FormMessage";
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {;
  useFormField,;
  Form,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
<<<<<<< HEAD
  FormField,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import * as LabelPrimitive from '@radix - ui / react - label';
import {useReactId} from '@/hooks / useReactId';
import {Slot} from '@radix - ui / react - slot';
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext, } from 'react - hook - form';
;
import {cn} from '@/lib / utils';
import {Label} from '@/components / ui / label';
;
const Form = FormProvider;
;
type FormFieldContextValue = {
  name: string,
}
;
const FormFieldContext = React.create_context < FormFieldContextValue>({
  name: '',
});
;
const FormField = ({ ...props }: any) =>: any</FormFieldContextValue> {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>;
      <Controller {...props} />;
    </FormFieldContext.Provider>);
}
;
const useFormField = () =>: any {
  const field_context = React.useContext (
    FormFieldContext) as FormFieldContextValue;
  const item_context = React.useContext (
    FormItemContext) as FormItemContextValue | null;
  const { getFieldState, form_state } = useFormContext ();
;
  const field_state = getFieldState (field_context.name, form_state);
;
  // Check condition
if ( {) {
  $2
}
    throw new Error ('useFormField should be used within <FormField>');
  }
  // Check condition
if ( {) {
  $2
}
    throw new Error ('useFormField should be used within <FormItem>');
  }
  const { id } = item_context as FormItemContextValue;
;
  return {
    id,
    name: field_context.name,
    formItemId: `${id}-form - item`,
    formDescriptionId: `${id}-form - item - description`,
    formMessageId: `${id}-form - item - message`,
    ...field_state,
  }
}
;
type FormItemContextValue = {
  id: string,
}
;
const FormItemContext = React.create_context < FormItemContextValue | null>(null);
;
const FormItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttr</HTMLDivElement > ibutes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const id = useReactId ();
;
  return (
    <FormItemContext.Provider value={{ id }}>;
      <div ref={ref} className={cn ('space - y-2', class_name)} {...props} />;
    </FormItemContext.Provider>);
});
FormItem.display_name = 'FormItem';
;
const FormLabel = React.forward_ref<;
  React.ElementRef < typeof LabelPrimitive.Root>,
  React.ComponentProp</typeof > sWithoutRef < typeof LabelPrimitive.Root>;
>(({ class_name, ...props }, ref) => {
  const { error, formItemId } = useFormField ();
;
    />);
});
FormLabel.display_name = 'FormLabel';
;
const FormControl = React.forward_ref<;
  React.ElementRef < typeof Slot</typeof>>,
  React.ComponentPropsWithoutRef < typeof Slot>;
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =;
    useFormField ();
;
    />);
});
FormControl.display_name = 'FormControl';
;
const FormDescription = React.forward_ref<;
  HTMLParag</HTMLParagraphElement > raph_element,
  React.HTMLAttributes < HTMLParagraphElement>;
>(({ class_name, ...props }, ref) => {
  const { formDescriptionId } = useFormField ();
;
    />);
});
FormDescription.display_name = 'FormDescription';
;
const FormMessage = React.</HTMLParagraphElement > forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttributes < HTMLParagraphElement>;
>(({ class_name, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField ();
  const body = error ? String (error?.message) : children;
;
  // Check condition
if ( {) {
  $2
}
    return null;
  }
    >;
      {body}
    </p>);
});
FormMessage.display_name = 'FormMessage';
;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
<<<<<<< HEAD



=======
  FormField,
}
;
  FormField} const Form = FormProvider type FormFieldContextValue = {
  name: string 
}const FormField = ({
  ...props 
}: unknown) => {
  return (<FormFieldContext.Provider value= {
  {
  name: props.name 
}
}> <Controller {
  ...props 
}/> </FormFieldContext.Provider>) 
}const useFormField = () => {
  const fieldContext = React.useContext (FormFieldContext) as FormFieldContextValue const itemContext = React.useContext (FormItemContext) as FormItemContextValue | null const {
  getFieldState, formState 
}= useFormContext () const fieldState = getFieldState (fieldContext.name, formState) const {
  id 
}= itemContext as FormItemContextValue return {
  id, name: fieldContext.name, formItemId: `$ {
  id 
}-form-item`;
formDescriptionId: `$ {
  id 
}-form-item-description`;
formMessageId: `$ {
  id 
}-form-item-message`;
...fieldState 
}
}type FormItemContextValue = {
  id: string 
}const FormItemContext = React.createContext<FormItemContextValue | null> (null) const FormItem = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => {
  const id = useReactId () return (</FormItemContext.Provider>) 
}) FormItem.displayName = "FormItem" const FormLabel = React.forwardRef< React.ElementRef<typeof LabelPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> > ( ({
  className, ...props 
}, ref) => {
  const {
  error, formItemId 
}= useFormField () return (<Label />) 
}) FormLabel.displayName = "FormLabel" const FormControl = React.forwardRef< React.ElementRef<typeof Slot>;
React.ComponentPropsWithoutRef<typeof Slot> > ( ({
  ...props 
}, ref) => {
  const {
  error, formItemId, formDescriptionId, formMessageId 
}= useFormField () return (<Slot ref= {
  ref 
}id= {
  formItemId 
}aria-describedby= {
  !error ? `$ {
  formDescriptionId 
}` : `$ {
  formDescriptionId 
}$ {
  formMessageId 
}` 
}aria-invalid= {
  !!error 
}{
  ...props 
}/>) 
}) FormControl.displayName = "FormControl" const FormDescription = React.forwardRef< HTMLParagraphElement;
React.HTMLAttributes<HTMLParagraphElement> > ( ({
  className, ...props 
}, ref) => {
  const {
  formDescriptionId 
}= useFormField () return (<p />) 
}) FormDescription.displayName = "FormDescription" const FormMessage = React.forwardRef< HTMLParagraphElement;
React.HTMLAttributes<HTMLParagraphElement> > ( ({
  className, children, ...props 
}, ref) => {
  const {
  error, formMessageId 
}= useFormField () const body = error ? String (error?.message) : children if (!body) {
  return null;
}return (<p > {
  body 
}</p>) 
}) FormMessage.displayName = "FormMessage" export {
  useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField 
}
  FormField}
;
  FormField,;
};
  FormField}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
