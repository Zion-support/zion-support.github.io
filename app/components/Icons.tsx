import React from 'react';

export const Icon = ({ name, className = '', ...props }: { name: string; className?: string; [key: string]: unknown }) => {
  return <span className={`icon ${className}`} {...props}>{name}</span>;
};

export default Icon;
