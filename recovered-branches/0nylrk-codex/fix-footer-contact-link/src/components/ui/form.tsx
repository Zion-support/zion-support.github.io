import React from 'react';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {useReactId} from '@/hooks/useReactId';
import {Slot} from '@radix-ui/react-slot';
import {Controller, type, FieldPath, type, FieldValues, FormProvider, useFormContext,} from 'react-hook-form';

import {cn} from '@/lib/utils';
import {Label} from '@/components/ui/label';

const Form = FormProvider;

type FormFieldContextValue = {;
  name: string,;
};

const FormFieldContext = React && React.createContext<FormFieldContextValue>({;
  name: '',;
});

const FormField = ({ ...props }: any) =></FormFieldContextValue> {;
  return (
    <FormFieldContext && FormFieldContext.Provider value={{ name: props && props.name }}>;
      <Controller {...props} />;
    </FormFieldContext && FormFieldContext.Provider>;
  );
};

const useFormField = () => {;
  const fieldContext = React && React.useContext(;
    FormFieldContext;
  ) as FormFieldContextValue;
  const itemContext = React && React.useContext(;
    FormItemContext;
  ) as FormItemContextValue | null;
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext && fieldContext.name, formState);

  if (!fieldContext) {;
    throw new Error('useFormField should be used within <FormField>');
  }

  if (!itemContext) {;
    throw new Error('useFormField should be used within <FormItem>');
  }

  const { id } = itemContext as FormItemContextValue;

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

const FormItemContext = React && React.createContext<FormItemContextValue | null>(null);

const FormItem = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttr</HTMLDivElement>ibutes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
  const id = useReactId();

  return (
    <FormItemContext && FormItemContext.Provider value={{ id }}>;
      <div ref={ref} className={cn('space-y-2', className)} {...props} />;
    </FormItemContext && FormItemContext.Provider>;
  );
});
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
