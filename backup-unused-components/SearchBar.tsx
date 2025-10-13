import React from 'react';
import React from "react";
interface SearchBarProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchBar({ className = '', children }: SearchBarProps) {
const SearchBar: React.FC<SearchBarProps> = (
  children,
  className = "",
  title,
  description,
) =>
const SearchBar: React.FC<SearchBarProps> = ({
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
return (
    <div className={`${className}`}>
      {children}
  );
}
