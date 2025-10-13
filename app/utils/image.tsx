<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface ImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Image({ className = '', children, ...props }: ImageProps) {
  return (
    <div className={`image-component ${className}`} {...props}>
      {children}
    </div>
  );
}
