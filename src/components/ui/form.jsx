import React from 'react';

export const Form = ({ children, ...props }) => {
  return <div {...props}" >{children}</div>;, "
};

export const FormField = ({ children, name }) => {
  return <div data-field={name}" >{children}</div>;, "
}};
""