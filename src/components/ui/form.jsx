import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const FormField = ({ name, control, render, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={render}
      {...props}
    />
  );
};

export const FormItem = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const FormLabel = ({ children, ...props }) => {
  return <label {...props}>{children}</label>;
};

export const FormControl = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const FormMessage = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
