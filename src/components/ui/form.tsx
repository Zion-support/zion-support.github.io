import React from 'react';

<<<<<<< HEAD
export const Form = ({ children, ...props }: any) => {
  return <form {...props}>{children}</form>;
};

export const FormField = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export const FormItem = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export const FormLabel = ({ children, ...props }: any) => {
  return <label {...props}>{children}</label>;
};

export const FormControl = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export const FormMessage = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};
=======
interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export function Form({ children, onSubmit, className = '' }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

interface FormFieldProps {
  children: React.ReactNode;
  name: string;
  control?: any;
  render?: (props: any) => React.ReactNode;
}

export function FormField({ children, name, control, render }: FormFieldProps) {
  if (render) {
    return render({ field: { name } });
  }
  return <>{children}</>;
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <>{children}</>;
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FormItem({ children, className = '' }: FormItemProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  return (
    <label className={className}>
      {children}
    </label>
  );
}

interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  if (!children) return null;
  return (
    <p className={className}>
      {children}
    </p>
  );
}
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144
