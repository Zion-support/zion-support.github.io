import React from 'react';

interface FormProps extends React.PropsWithChildren<{}> {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

export function Form({ children, onSubmit }: FormProps): JSX.Element {
  return <form onSubmit={onSubmit}>{children}</form>;
}

interface FormControlProps extends React.PropsWithChildren<{}> {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps): JSX.Element {
  return <div>{children}</div>;
}

interface FormItemProps extends React.PropsWithChildren<{}> {
  children: React.ReactNode;
}

export function FormItem({ children }: FormItemProps): JSX.Element {
  return <div className="space-y-2">{children}</div>;
}

interface FormLabelProps extends React.PropsWithChildren<{}> {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className }: FormLabelProps): JSX.Element {
  return <label className={`block text-sm font-medium ${className ?? ''}`}>{children}</label>;
}

interface FormFieldProps {
  control?: unknown;
  name: string;
  render: (props: { field: { name: string; value: unknown; onChange: (v: unknown) => void } }) => React.ReactNode;
}

export function FormField({ name, render }: FormFieldProps): JSX.Element {
  const field = { name, value: '', onChange: (_v: unknown) => {} };
  return <>{render({ field })}</>;
}

interface FormMessageProps extends React.PropsWithChildren<{}> {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className }: FormMessageProps): JSX.Element | null {
  if (!children) return null;
  return <p className={`text-sm ${className ?? ''}`}>{children}</p>;
}