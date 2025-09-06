import React from "react";
<<<<<<< HEAD
interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}
const Label: React.FC<LabelProps> = ({ children, className = "", htmlFor }) => {
=======

interface LabelProps {;
  children: React && React.ReactNode;
  className?: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ children, className = "", htmlFor }) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>;
      {children}
    </label>;
  );
}
export { Label }