import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import {_Controller, _type FieldPath, _type FieldValues, _FormProvider, _useFormContext} from "react-hook-form"


const _Form = FormProvider

type FormFieldContextValue = {_name: string}

const _FormFieldContext = React.createContext<FormFieldContextValue>({_name: ""})

const _FormField = (_{_...props}: unknown) => {_return (
    <FormFieldContext.Provider value={{ name: props.name}}>
      <Controller {_...props} />
    </FormFieldContext.Provider>
  )
}

const _useFormField = () => {_const _fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue
  const _itemContext = React.useContext(FormItemContext) as FormItemContextValue | null
  const { getFieldState, _formState} = useFormContext()

  const _fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {_throw new Error("useFormField should be used within <FormField>")}

  if (!itemContext) {_throw new Error("useFormField should be used within <FormItem>")}

  const {_id} = itemContext as FormItemContextValue

  return {_id, _name: fieldContext.name, _formItemId: `${id}-form-item`,
    formDescriptionId: `${_id}-form-item-description`,
    formMessageId: `${_id}-form-item-message`,
    ...fieldState}
}

type FormItemContextValue = {_id: string}

const _FormItemContext = React.createContext<FormItemContextValue | null>(null)

const _FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => {_const _id = useReactId()

  return (
    <FormItemContext.Provider value={{ id}}>
      <div ref={_ref} className={_cn("space-y-2", _className)} {_...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const _FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(_({_className, _...props}, _ref) => {_const { error, _formItemId} = useFormField()

  return (
    <Label
      ref={_ref}
      className={_cn(error && "text-destructive", _className)}
      htmlFor={_formItemId}
      {_...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const _FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(_({_...props}, _ref) => {_const { error, _formItemId, _formDescriptionId, _formMessageId} = useFormField()

  return (
    <Slot
      ref={_ref}
      id={_formItemId}
      aria-describedby={_!error
          ? `${formDescriptionId}`
          : `${_formDescriptionId} ${_formMessageId}`
      }
      aria-invalid={_!!error}
      {_...props}
    />
  )
})
FormControl.displayName = "FormControl"

const _FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({_className, _...props}, _ref) => {_const { formDescriptionId} = useFormField()

  return (
    <p
      ref={_ref}
      id={_formDescriptionId}
      className={_cn("text-sm text-muted-foreground", _className)}
      {_...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const _FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({_className, _children, _...props}, _ref) => {_const { error, _formMessageId} = useFormField()
  const _body = error ? String(error?.message) : children

  if (!body) {_return null}

  return (
    <p
      ref={_ref}
      id={_formMessageId}
      className={_cn("text-sm font-medium text-destructive", _className)}
      {_...props}
    >
      {_body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {_useFormField, _Form, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage, _FormField}
