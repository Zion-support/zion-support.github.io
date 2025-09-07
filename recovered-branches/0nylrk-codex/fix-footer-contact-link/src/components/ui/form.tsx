<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {useReactId} from '@/hooks/useReactId';
import {Slot} from '@radix-ui/react-slot';
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext,} from 'react-hook-form';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======


=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {useReactId} from '@/hooks/useReactId';
import {Slot} from '@radix-ui/react-slot';
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext,} from 'react-hook-form';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {cn} from '@/lib/utils';
=======

import {cn} from '@/lib/utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Label} from '@/components/ui/label';
const Form = FormProvider;
type FormFieldContextValue = {}
  name: string;
}
const FormFieldContext = React.createContext<FormFieldContextValue>({'
  name: ''
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const FormField = ({ ...props }: any) =></FormFieldContextValue> {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { useReactId } from "@/hooks/useReactId"
=======
const FormField = ({ ...props }: any) =></FormFieldContextValue> {}
import * as React from "react""
import * as LabelPrimitive from "@radix-ui/react-label""
import { useReactId } from "@/hooks/useReactId""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Slot } from "@radix-ui/react-slot"
import {}
  Controller,
  type FieldPath,
  type FieldValues,
  FormProvider,"
  useFormContext} from "react-hook-form"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


;
=======
const FormField = ({ ...props }: any) =></FormFieldContextValue> {
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



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type FormFieldContextValue = {;
  name: string,;
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const FormField = ({ ...props }: any) => {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
const FormFieldContext = React && React.createContext<FormFieldContextValue>({;
  name: '',;
});
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return (
=======
const FormField = ({ ...props }: any) =></FormFieldContextValue> {  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const FormField = ({ ...props }: any) =></FormFieldContextValue> {  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <FormFieldContext && FormFieldContext.Provider value={{ name: props && props.name }}>;
      <Controller {...props} />;
    </FormFieldContext && FormFieldContext.Provider>;
<<<<<<< HEAD
  )
=======
const FormFieldContext = React && React.createContext<FormFieldContextValue>({;
  name: '',;
});

const FormField = ({ ...props }: any) =></FormFieldContextValue> {;
  return (

};

const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;

  return (
    <FormFieldContext && FormFieldContext.Provider value={{ name: props && props.name }}>;
      <Controller {...props} />;
    </FormFieldContext && FormFieldContext.Provider>;
  );
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const FormField = ({ ...props }: any) =></FormFieldContextValue> {  return (
    <FormFieldContext && FormFieldContext.Provider value={{ name: props && props.name }}>;
      <Controller {...props} />;
    </FormFieldContext && FormFieldContext.Provider>;
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;
  ) as FormFieldContextValue;
  const itemContext = React && React.useContext(;
    FormItemContext;
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();

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
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>

<<<<<<< HEAD
<<<<<<< HEAD
=======
);
      <Controller {...props} />
    </FormFieldContext.Provider>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
  );

  ) as FormFieldContextValue;
  const itemContext = React && React.useContext(;
    FormItemContext;
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();

    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  )
}

const useFormField = () => {}
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue;
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null;
=======
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null
  name: string;
}
const FormFieldContext = React.createContext<FormFieldContextValue>({
)
const FormField = ({ ...props }: any) => {
const FormFieldContext = React && React.createContext<FormFieldContextValue>({;
const FormField = ({ ...props }: any) => {;
    <FormFieldContext && FormFieldContext.Provider value={{ name: props && props.name }}>;

      <Controller {...props} />;

    </FormFieldContext && FormFieldContext.Provider>;
  );
};
const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;)
  ) as FormFieldContextValue;
  const itemContext = React && React.useContext(;
    FormItemContext;)
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();

    <FormFieldContext.Provider value={{ name: props.name }}>

      <Controller {...props} />

    </FormFieldContext.Provider>


const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue;
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }
  if (!itemContext) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const fieldState = getFieldState(fieldContext && fieldContext.name, formState);

  if (!fieldContext) {;'
    throw new Error('useFormField should be used within <FormField>');
<<<<<<< HEAD
=======

  const fieldState = getFieldState(fieldContext && fieldContext.name, formState);

  if (!fieldContext) {;
    throw new Error('useFormField should be used within <FormField>');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

  if (!itemContext) {;

<<<<<<< HEAD

const FormItem = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const id = useReactId();
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  }


const FormItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const id = useReactId();
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    throw new Error('useFormField should be used within <FormItem>');
  }
  const { id } = itemContext as FormItemContextValue;

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
const FormItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useReactId();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    throw new Error("useFormField should be used within <FormItem>")
  }

<<<<<<< HEAD

<<<<<<< HEAD

  return {;
    id,;
    name: fieldContext && fieldContext.name,;
    formItemId: `${id}-form-item`,;`
    formDescriptionId: `${id}-form-item-description`,;`
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return {;
    id,;
    name: fieldContext && fieldContext.name,;
    formItemId: `${id}-form-item`,;
    formDescriptionId: `${id}-form-item-description`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    formMessageId: `${id}-form-item-message`,;
    ...fieldState,;
  };
};

type FormItemContextValue = {;
  id: string,;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



=======

const FormItemContext = React && React.createContext<FormItemContextValue | null>(null);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const FormItem = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const id = useReactId();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const id = useReactId();
  return (

    <FormItemContext && FormItemContext.Provider value={{ id }}>;'
=======
  const id = useReactId();
  return (

throw new Error('useFormField should be used within <FormItem>');
  }
  const { id } = itemContext as FormItemContextValue;
  const id = useReactId();
  return (
    <FormItemContext && FormItemContext.Provider value={{ id }}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div ref={ref} className={cn('space-y-2', className)} {...props} />;
    </FormItemContext && FormItemContext.Provider>;
  );
});
<<<<<<< HEAD

<<<<<<< HEAD
=======
    throw new Error("useFormField should be used within <FormItem>")
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    throw new Error("useFormField should be used within <FormItem>")
  }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
FormItem && FormItem.displayName = 'FormItem';

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    throw new Error("useFormField should be used within <FormItem>")
  }

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    >;

      {body}
    </p>;
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
FormMessage && FormMessage.displayName = 'FormMessage';
=======
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
    <FormItemContext.Provider value={{ id }}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>


  const { error, formItemId } = useFormField();
    />
  );
});'
FormLabel.displayName = 'FormLabel';
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot</typeof>>
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {}
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
    />
  );
});'
FormControl.displayName = 'FormControl';
const FormDescription = React.forwardRef<
  HTMLParag</HTMLParagraphElement>raphElement;
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {}
  const { formDescriptionId } = useFormField();
    />
  );
});'
FormDescription.displayName = 'FormDescription';
const FormMessage = React.</HTMLParagraphElement>forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {}
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {}
    return null;

  return (
    <Label;
      ref={ref}"
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    />
=======
FormMessage && FormMessage.displayName = 'FormMessage';    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
FormMessage && FormMessage.displayName = 'FormMessage';    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
FormMessage && FormMessage.displayName = 'FormMessage';
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
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>

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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
FormMessage && FormMessage.displayName = 'FormMessage';    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  )
})"
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {}
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Slot;
      ref={ref}
      id={formItemId}
      aria-describedby={;
        !error;`
          ? `${formDescriptionId}`;`
          : `${formDescriptionId} ${formMessageId}`;
      }
      aria-invalid={!!error}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    />
  )
})"
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {}
  const { formDescriptionId } = useFormField()

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <p;
      ref={ref}
      id={formDescriptionId}"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    />
  )
})"
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {}
  const { error, formMessageId } = useFormField()
<<<<<<< HEAD
  const body = error ? String(error?.message) : children

  if (!body) {
<<<<<<< HEAD
    return null
    return null;
    return null
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    return null
    return null;
    return null
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const body = error ? String(error?.message) : children;
  if (!body) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
return null
    return null;
    return null
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
    >
      {body}
    </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  )
})"
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
  )
})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
FormMessage.displayName = "FormMessage"

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
<<<<<<< HEAD
'
import * as LabelPrimitive from '@radix - ui / react - label';'
import {useReactId} from '@/hooks / useReactId';'
import {Slot} from '@radix - ui / react - slot';'
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext, } from 'react - hook - form';
;'
import {cn} from '@/lib / utils';'
=======
  FormField,;
};
import * as LabelPrimitive from '@radix - ui / react - label';
import {useReactId} from '@/hooks / useReactId';
import {Slot} from '@radix - ui / react - slot';
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext, } from 'react - hook - form';
;
import {cn} from '@/lib / utils';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Label} from '@/components / ui / label';
;
const Form = FormProvider;
;
<<<<<<< HEAD
type FormFieldContextValue = {}
  name: string,
}
;
const FormFieldContext = React.create_context < FormFieldContextValue>({'
  name: '',
});
;
const FormField = ({ ...props }: any) =>: any</FormFieldContextValue> {}
=======
type FormFieldContextValue = {
  name: string,
}
;
const FormFieldContext = React.create_context < FormFieldContextValue>({
  name: '',
});
;
const FormField = ({ ...props }: any) =>: any</FormFieldContextValue> {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');


    throw new Error('useFormField should be used within <FormItem>');

const FormItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>

    throw new Error("useFormField should be used within <FormItem>")"

const FormItemContext = React.createContext<FormItemContextValue | null>(null)







const FormItemContext = React && React.createContext<FormItemContextValue | null>(null);

const FormItem = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;

    <FormItemContext && FormItemContext.Provider value={{ id }}>;
"
      <div ref={ref} className={cn('space-y-2', className)} {...props} />;
</div>
    </FormItemContext && FormItemContext.Provider>;
});
FormItem && FormItem.displayName = 'FormItem';
const FormLabel = React && React.forwardRef<;
  React && React.ElementRef<typeof LabelPrimitive && LabelPrimitive.Root>,;
</typeof>
  React && React.ComponentProp</typeof>sWithoutRef<typeof LabelPrimitive && LabelPrimitive.Root>;
const FormControl = React && React.forwardRef<;
  React && React.ElementRef<typeof Slot</typeof>>,;
  React && React.ComponentPropsWithoutRef<typeof Slot>;
const FormDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLParagraphElement>;

const FormMessage = React.forwardRef<;

    </p>;
    <FormItemContext.Provider value={{ id }}>

      <div ref={ref} className={cn("space-y-2", className)} {...props} />"
    </FormItemContext.Provider>

  const { error, formItemId } = useFormField();
    />
});"
FormLabel.displayName = 'FormLabel';
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot</typeof>>
  React.ComponentPropsWithoutRef<typeof Slot>
const FormDescription = React.forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLParagraphElement>

const FormMessage = React.forwardRef<

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
    <Label;
      ref={ref}
      className={cn(error && "text-destructive", className)}"
      htmlFor={formItemId}
      {...props}

  React.ElementRef<typeof Slot>,
    <Slot;
      id={formItemId}
      aria-describedby={;
        !error;
          ? `${formDescriptionId}`;`;
          : `${formDescriptionId} ${formMessageId}`;
      aria-invalid={!!error}



  HTMLParagraphElement,

    <p;
      id={formDescriptionId}"
      className={cn("text-sm text-muted-foreground", className)}"


</p>

const FormFieldContext = React.create_context < FormFieldContextValue>({"
  name: ,')
;
<<<<<<< HEAD
<<<<<<< HEAD
const useFormField = () =>: any {}
=======
const useFormField = () =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const field_context = React.useContext (
=======
const FormField = ({ ...props }: any) =>: any {
    <FormFieldContext.Provider value={{ name: props.name }}>;


    </FormFieldContext.Provider>);
const useFormField = () =>: any {
  // TODO: Implement
  const field_context = React.useContext ()
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    FormFieldContext) as FormFieldContextValue;
  const item_context = React.useContext ()
    FormItemContext) as FormItemContextValue | null;
  const { getFieldState, form_state } = useFormContext ();
  const field_state = getFieldState (field_context.name, form_state);
<<<<<<< HEAD
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}'
    throw new Error ('useFormField should be used within <FormField>');
  }
  // Check condition;
if ( {) {}
  $2;
}'
=======
  // Check condition
=======
  // Check condition;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
if ( {) {
  $2;
    throw new Error ('useFormField should be used within <FormField>');
<<<<<<< HEAD
  }
  // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    throw new Error ('useFormField should be used within <FormItem>');
  }
  const { id } = item_context as FormItemContextValue;
;
<<<<<<< HEAD
  return {}
    id,
    name: field_context.name,`
    formItemId: `${id}-form - item`,`
    formDescriptionId: `${id}-form - item - description`,`
=======
  return {
    id,
    name: field_context.name,
    formItemId: `${id}-form - item`,
    formDescriptionId: `${id}-form - item - description`,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    formMessageId: `${id}-form - item - message`,
    ...field_state,
  }
}
;
<<<<<<< HEAD
type FormItemContextValue = {}
=======
type FormItemContextValue = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string,
}
;
=======

    throw new Error ('useFormField should be used within <FormItem>');

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const FormItemContext = React.create_context < FormItemContextValue | null>(null);
const FormItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttr</HTMLDivElement > ibutes < HTMLDivElement>;
<<<<<<< HEAD
>(({ class_name, ...props }, ref) => {}
  const id = useReactId ();
;
  return (
    <FormItemContext.Provider value={{ id }}>;'
      <div ref={ref} className={cn ('space - y-2', class_name)} {...props} />;
    </FormItemContext.Provider>);
});'
=======
>(({ class_name, ...props }, ref) => {
  const id = useReactId ();
  return (
    <FormItemContext.Provider value={{ id }}>;
      <div ref={ref} className={cn ('space - y-2', class_name)} {...props} />;
    </FormItemContext.Provider>);
<<<<<<< HEAD
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
FormItem.display_name = 'FormItem';
const FormLabel = React.forward_ref<;
  React.ElementRef < typeof LabelPrimitive.Root>,
  React.ComponentProp</typeof > sWithoutRef < typeof LabelPrimitive.Root>;
<<<<<<< HEAD
<<<<<<< HEAD
>(({ class_name, ...props }, ref) => {}
  const { error, formItemId } = useFormField ();
;
    />);
});'
=======
>(({ class_name, ...props }, ref) => {
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { error, formItemId } = useFormField ();
    />);
<<<<<<< HEAD
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
FormLabel.display_name = 'FormLabel';
const FormControl = React.forward_ref<;
  React.ElementRef < typeof Slot</typeof>>,
  React.ComponentPropsWithoutRef < typeof Slot>;
<<<<<<< HEAD
>(({ ...props }, ref) => {}
=======
>(({ ...props }, ref) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { error, formItemId, formDescriptionId, formMessageId } =;
    useFormField ();
<<<<<<< HEAD
;
    />);
<<<<<<< HEAD
});'
=======
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
FormControl.display_name = 'FormControl';
const FormDescription = React.forward_ref<;
  HTMLParag</HTMLParagraphElement > raph_element,
  React.HTMLAttributes < HTMLParagraphElement>;
<<<<<<< HEAD
<<<<<<< HEAD
>(({ class_name, ...props }, ref) => {}
  const { formDescriptionId } = useFormField ();
;
    />);
});'
=======
>(({ class_name, ...props }, ref) => {
  const { formDescriptionId } = useFormField ();
;
    />);
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const { formDescriptionId } = useFormField ();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
FormDescription.display_name = 'FormDescription';
const FormMessage = React.</HTMLParagraphElement > forward_ref<;
<<<<<<< HEAD
  HTMLParagraphElement,
  React.HTMLAttributes < HTMLParagraphElement>;
<<<<<<< HEAD
>(({ class_name, children, ...props }, ref) => {}
  const { error, formMessageId } = useFormField ();
  const body = error ? String (error?.message) : children;
;
  // Check condition;
if ( {) {}
  $2;
=======
>(({ class_name, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField ();
  const body = error ? String (error?.message) : children;
;
  // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======
>(({ class_name, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField ();
  const body = error ? String (error?.message) : children;
  // Check condition;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return null;
    >;
      {body}
    </p>);
<<<<<<< HEAD
});'
FormMessage.display_name = 'FormMessage';
;



export {}
=======
});
FormMessage.display_name = 'FormMessage';
;
export {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
<<<<<<< HEAD
;
=======

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  FormField,;
};
  FormField}
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  FormField,
}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
    >
      {body}
    </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
    >
      {body}
    </p>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  FormField,
}
;
    </p>);`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
