import React from "react";
import { Mic } from 'lucide-react';
import React from 'react';
interface MicrosaasservicesProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Microsaasservices({ className = '', children, ...props }: MicrosaasservicesProps) {
  return (
    <div className={`microsaasservices-component ${className}`} {...props}>
      {children}
    </div>
  );
}