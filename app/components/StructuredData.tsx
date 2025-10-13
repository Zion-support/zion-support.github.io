import React from 'react';
import { Search, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Search } from 'lucide-react';
import { Code } from 'lucide-react';

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
  return (
    <div className={`structureddata-component ${className}`} {...props}>
      {children}
    </div>
  );
}
