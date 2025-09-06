<<<<<<< HEAD
<<<<<<< HEAD

import React from './react';
;

=======
import React from './react';
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface InputProps {
=======
=======
interface InputProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface InputProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  type?: string;
  placeholder?: string;
  value?: string;
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
=======
  on_change?: (e: React.ChangeEvent < HTMLInputElement>) => void;
  class_name?: string;
  disabled?: boolean;
  required?: boolean;
}
const Input: React.FC < InputProps> = ({
  type = "text",
  placeholder,
  value,
  on_change,
  class_name = "",
  disabled = false,
  required = false,
  ...props;
}) => {
  const base_classes =;
    "flex h - 10 w - full rounded - md border border - gray - 300 bg - white px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - gray - 500 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - blue - 500 focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50";
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <input;
      type={type}
      placeholder={placeholder}
      value={value}
      on_change={on_change}
      className={`${base_classes} ${class_name}`}
      disabled={disabled}
      required={required}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    />);
}
;
export { Input }
;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
