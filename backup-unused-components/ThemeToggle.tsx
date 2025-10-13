import React from 'react';
import React from "react";
interface ThemeToggleProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ThemeToggle({ className = '', children }: ThemeToggleProps) {
const ThemeToggle: React.FC<ThemeToggleProps> = (
  children,
  className = "",
  title,
  description,
) =>
const ThemeToggle: React.FC<ThemeToggleProps> = ({
//   children,
  className = "",
//   title,
//   description,
}) => {
  return (
    <div className={`${className}`}>
      {children}
  </div>
</div>
  );
}