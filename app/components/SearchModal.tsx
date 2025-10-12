import React from 'react';

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchModal({ className, children }: SearchModalProps) {
  return (
    <div className={}>
      {children || 'SearchModal Component'}
    </div>
  );
}
