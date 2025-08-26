import React from 'react';

export const Form = ({ children, onSubmit, className = '' }) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
};

export const FormField = ({ control, name, render }) => {
    return render({ field: { name, value: '', onChange: () => {} } });
};

export const FormItem = ({ children, className = '' }) => {
    return (
        <div className={`space-y-2 ${className}`}>
            {children}
        </div>
    );
};

export const FormLabel = ({ children, className = '' }) => {
    return (
        <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
            {children}
        </label>
    );
};

export const FormControl = ({ children }) => {
    return children;
};

export const FormMessage = ({ children, className = '' }) => {
    if (!children) return null;
    return (
        <p className={`text-sm font-medium text-destructive ${className}`}>
            {children}
        </p>
    );
};

export const useForm = () => {
    return {
        control: {},
        formState: { errors: {} },
        handleSubmit: (fn) => (e) => {
            e.preventDefault();
            fn({});
        },
        register: () => ({}),
        setValue: () => {},
        watch: () => ({}),
        reset: () => {},
        clearErrors: () => {},
        setError: () => {},
        getValues: () => ({}),
        trigger: () => Promise.resolve(true)
    };
};