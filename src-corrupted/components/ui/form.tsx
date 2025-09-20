import React from 'react';
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {,
  children: Reac t.ReactNode,}
,
export function Form(props: any) {,
  return (,
    <form {...props,}>,
      {children}
    </form>,
  );
}
,
interface FormItemProps {,
  children: Reac t.ReactNode;
  className?: string,
}
,
export function FormItem(props: any) {,
  return (,
    <div className={`space-y-2 ${className,}`}>,
      {children}
    </div>,
  );
}
,
interface FormLabelProps {,
  children: Reac t.ReactNode;
  className?: string;
  htmlFor?: string,
}
,
export function FormLabel(props: any) {,
  return (,
    <label,
      htmlFor={htmlFor,}
      className={`block text-sm font-medium ${className}`}
    >,
      {children}
    </label>,
  );
}
,
interface FormFieldProps {,
  children: Reac t.ReactNode;
  className?: string,
}
,
export function FormField(props: any) {,
  return (,
    <div className={`space-y-1 ${className,}`}>,
      {children}
    </div>,
  );
}
,
interface FormMessageProps {,
  children?: React.ReactNode;
  className?: string;
}
,
export function FormMessage(props: any) {,
  if (!children) return null;
  return (,
    <p className={`text-sm text-red-600 ${className}`}>,
      {children}
    </p>,
  );
}
</HTMLFormElement>,