<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface SearchBarProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

<<<<<<< HEAD
interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchBar({ className = '', children }: SearchBarProps) {
=======
<<<<<<< HEAD
const SearchBar: React.FC<SearchBarProps> = (
  children,
  className = "",
  title,
  description,
) => 
=======
const SearchBar: React.FC<SearchBarProps> = ({
//   children,
  className = "",
//   title,
//   description,
}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  return (
    <div className={`${className}`}>
      {children}
<<<<<<< HEAD
  </div>
=======
</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}