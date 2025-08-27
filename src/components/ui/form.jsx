import React from 'react';
=======

export const Form = ({ children, ...props }) => (
    <form {...props}>
        {children}
    </form>
);

export const FormControl = ({ children }) => (
    <div>
        {children}
    </div>
);

export const FormField = ({ control, name, render }) => {
    return render({
        field: {
            name,
            onChange: () => {},
            onBlur: () => {},
            value: '',
        },
    });
};

export const FormItem = ({ children }) => (
    <div className="space-y-2">
        {children}
    </div>
);

export const FormLabel = ({ children, className = '' }) => (
    <label className={`block text-sm font-medium ${className}`}>
        {children}
    </label>
);

export const FormMessage = ({ children, className = '' }) => (
    <p className={`text-sm ${className}`}>
        {children}
    </p>
);
