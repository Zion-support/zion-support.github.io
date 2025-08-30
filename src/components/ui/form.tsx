import React from 'react';

interface FormProps extends React.PropsWithChildren<{}> {

  children: anyReact.ReactNode;
  onSubmit?: (e: React.FormEvent)    => void;

}

export function Form(...args: any[]): any {
  return <form onSubmit={onSubmit}>{children}</form>;
}

interface FormControlProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;

}

export function FormControl(...args: any[]): any {
  return <div>{children}</div>;
}

interface FormItemProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;

}

export function FormItem(...args: any[]): any {
  return <div className="space-y-2">{children}</div>;
}

interface FormLabelProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;

}

export function FormLabel(...args: any[]): any {
  return <label className={`block text-sm font-medium ${className}`}>{children}</label>;
}

interface FormFieldProps extends React.PropsWithChildren<{}> {

  control: anyany;
  name: string;
  render: (props: any)    => React.ReactNode;

}

export function FormField(...args: anyany[]): any {
  return render({ field: any{ name, value: '', onChange: ()    => {} } });
}

interface FormMessageProps extends React.PropsWithChildren<{}> {

  children?: React.ReactNode;
  className?: string;

}

export function FormMessage(...args: any[]): any {
  if (!children) return null;
  return <p className={`text-sm ${className}`}>{children}</p>;
}