import React from 'react';

// Simple form components to replace the missing ones
export const Form = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const FormField = ({ children, name }) => {
  return <div data-field={name}" >{children}</div>;, "
}};
""