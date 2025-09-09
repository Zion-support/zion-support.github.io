import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function FormField({ name, render }) {
  const { control, formState: { errors } } = useFormContext();
  
  return render({
    field: {
      name,
      onChange: (e) => {
        const value = e?.target?.value ?? e;
        control._fields[name]?.onChange(value);
      },
      onBlur: () => control._fields[name]?.onBlur(),
      value: control._fields[name]?.value ?? '',
    },
    fieldState: {
      error: errors[name],
      invalid: !!errors[name],
      isTouched: control._fields[name]?.isTouched,
      isDirty: control._fields[name]?.isDirty,
    },
    formState: {
      errors,
      isSubmitting: control._formState?.isSubmitting,
    }
  });
}