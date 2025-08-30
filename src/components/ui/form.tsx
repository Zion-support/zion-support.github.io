import React from 'react';

interface FormProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent)  => void}

export function Form(...args[]):  {
  return <form onSubmit={onSubmit}>{children}</form>}

interface FormControlProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode}

export function FormControl(...args[]):  {
  return <div>{children}</div>}

interface FormItemProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode}

export function FormItem(...args[]):  {
  return <div className="space-y-2">{children}</div>}

interface FormLabelProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string}

export function FormLabel(...args[]):  {
  return <label className={`block text-sm font-medium ${className}`}>{children}</label>}

interface FormFieldProps extends React.PropsWithChildren<{}> {

  control;name: string;
  render: (props)  => React.ReactNode}

export function FormField(...args[]):  {
  return render({ field: { name, value: '', onChange: ()  => {} } })}

interface FormMessageProps extends React.PropsWithChildren<{}> {

  children?: React.ReactNode;
  className?: string}

export function FormMessage(...args[]):  {
  if (!children) return null;
  return <p className={`text-sm ${className}`}>{children}</p>}