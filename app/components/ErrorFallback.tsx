<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
=======


import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';

interface ErrorfallbackProps {
  className?: string;
  children?: React.ReactNode;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
}

<<<<<<< HEAD
export default function ErrorFallback({ className = '', children }: ErrorFallbackProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function ErrorFallback({ className = '', children, ...props }: ErrorFallbackProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
