import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MobilenavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Mobilenavigation({ className = '', children, ...props }: MobilenavigationProps) {
  return (
    <div className={`mobilenavigation-component ${className}`} {...props}>
      {children}
    </div>
  );
}
