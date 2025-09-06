
=======


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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

type FormFieldContextValue = {;
  name: string,;
};

const FormField = ({ ...props }: any) => {
  return (

};

const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;

  ) as FormFieldContextValue;
  const itemContext = React && React.useContext(;
    FormItemContext;
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();

    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
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
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue | null
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }
  if (!itemContext) {
    throw new Error('useFormField should be used within <FormItem>');
  }
  const { id } = itemContext as FormItemContextValue;

=======


=======
    throw new Error("useFormField should be used within <FormItem>")
  }


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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


  return (

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


    >;

      {body}
    </p>;
  );
});

FormMessage && FormMessage.displayName = 'FormMessage';
=======
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


    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()



    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()



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


  }
    >
      {body}
    </p>
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
FormMessage.displayName = "FormMessage"


export {;
  useFormField,;
  Form,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
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
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,



