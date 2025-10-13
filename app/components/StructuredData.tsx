import React from 'react';
<<<<<<< HEAD
import { Search, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { Code } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
  return (
    <div className={`structureddata-component ${className}`} {...props}>
      {children}
    </div>
  );
}
