import React from 'react';

export const Form = ({ children, ...props }) => {
<<<<<<< HEAD
  return <div {...props}" >{children}</div>;, ";
};

export const FormField = ({ children, name }) => {
  return <div data-field={name}" >{children}</div>;, ";
};
""
export const FormItem = ({ children, className = '' }) => {
  return <div className={className}" >{children}</div>;, ";
=======
  return <div {...props}" >{children}</div>;, 
};

export const FormField = ({ children, name }) => {
  return <div data-field={name} >{children}</div>;, "
};
"export const FormItem = ({ children, className = '' }) => {
  return <div className="{className}" >{children}</div>;, "
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
};
"
export const FormControl = ({ children, className = '' }) => {
<<<<<<< HEAD
  return <div className={className}" >{children}</div>;, ";
=======
  return <div className="{className}" >{children}</div>;, "
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
};
"
export const FormLabel = ({ children, className = '' }) => {
<<<<<<< HEAD
  return <label className={className}" >{children}</label>;, ";
=======
  return <label className="{className}" >{children}</label>;, "
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
};
"
export const FormMessage = ({ className = '' }) => {
  return <div className="{className}" > <//div>;, "
};""