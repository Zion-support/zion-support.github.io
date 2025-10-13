<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import { Mic } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React from 'react';

>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
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
