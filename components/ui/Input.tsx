import React from "react";
<<<<<<< HEAD
interface InputProps {
=======

interface InputProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}
<<<<<<< HEAD
const Input: React.FC<InputProps> = ({
  type = "text"
  placeholder
  value
  onChange
  className = ""
  disabled = false
  required = false
  ...props
}) => {
  const baseClasses =
=======

const Input: React.FC<InputProps> = ({;
  type = "text",;
  placeholder,;
  value,;
  onChange,;
  className = "",;
  disabled = false,;
  required = false,;
  ...props;
}) => {;
  const baseClasses =;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${className}`}
      disabled={disabled}
      required={required}
      {...props}
    />;
  );
}
export { Input }