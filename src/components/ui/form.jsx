import React from 'react';
<<<<<<< HEAD
;
export const Form = ({ children, ...props }) => {}
  return <div {...props}>{children}</div>;
};
;
export const FormField = ({ children, name }) => {}
  return <div data-field={name}>{children}</div>;
};
'
export const FormItem = ({ children, className = '' }) => {}
  return <div className={className}>{children}</div>;
};
'
export const FormLabel = ({ children, className = '' }) => {}
  return <label className={className}>{children}</label>;
};
'
export const FormMessage = ({ children, className = '' }) => {}
  return <div className={className}>{children}</div>;
};
;
export const FormControl = ({ children }) => {}
  return <div>{children}</div>;
};
'
=======

// Form components for building accessible forms
export const Form = ({ children, ...props }) => {

  return <form {...props}>{children}</form>;
};

export const FormField = ({ children, ...props }) => {

  return <div {...props}>{children}</div>;
};

export const FormItem = ({ children, className = '', ...props }) => {

  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const FormLabel = ({ children, className = '', ...props }) => {

  return (
    <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
      {children}
    </label>
  );
};

export const FormControl = ({ children, ...props }) => {

  return <div {...props}>{children}</div>;
};

export const FormMessage = ({ children, className = '', ...props }) => {

  return (
    <p className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </p>
  );
};

export const FormDescription = ({ children, className = '', ...props }) => {

  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
