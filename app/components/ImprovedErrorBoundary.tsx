<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Hand } from 'lucide-react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface ImprovederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
  return (
    <div className={`improvederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
