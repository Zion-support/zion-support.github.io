<<<<<<< HEAD
import React from "react";
import { Mic } from 'lucide-react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

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
