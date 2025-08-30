import React from 'react';

export const FormField = ({ children, name }) => {
  return <div data-field={name}>{children}</div>};

export const FormLabel = ({ children, className = '' }) => {
  return <label className={className}>{children}</label>};

export const FormMessage = ({ className = '' }) => {
  return <div className={className}></div>};
