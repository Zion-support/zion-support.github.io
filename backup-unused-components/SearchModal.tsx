import React from 'react';
import React from "react";
interface SearchModalProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchModal({ className = '', children }: SearchModalProps) {
const SearchModal: React.FC<SearchModalProps> = (
  children,
  className = "",
  title,
  description,
) =>
const SearchModal: React.FC<SearchModalProps> = ({
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