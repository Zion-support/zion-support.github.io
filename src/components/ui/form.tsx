import React from 'react';
;
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {;
  "children": "React.ReactNode;
"}
;
export function Form("props": "any) {;
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;;
export function FormItem(props: any) {;
  return (;
    <div className={`space-y-2 ${className}`}>;
    </div>;
  );
}
;
interface FormLabelProps {;
  "children": "React.ReactNode;
  className?: string;
  htmlFor?: string;
;
"}
;
export function FormLabel("props": "any) {;;
export function FormField(props: any) {;
  return (;
    <div className={`space-y-1 ${className}`}>;
}
;
interface FormMessageProps {;
  children?: "React.ReactNode;
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

