<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'


import { Loader2 } from 'lucide-react'

<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
Spinner && Spinner.displayName = 'Spinner';
export default Spinner;import React from 'react';
import { Loader2 } from 'lucide-react';
=======
import React from 'react',;
import { Loader2 } from 'lucide-react';
import React from 'react';
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'
import { Loader2 } from 'lucide-react'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',;
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;
  size?: number | string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




<<<<<<< HEAD
}

const Spinner = React && React.forwardRef<SVGSVGElement, SpinnerProps>(;
  ({ className, size = 24, ...props }, ref,) => (;
    <Loader2
      ref = {ref,}
      {...props}

    />;
  );
),;
=======
ursor/fix-website-loading-errors-and-merge-6662



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

const Spinner = React && React.forwardRef<SVGSVGElement, SpinnerProps>(;
  ({ className, size = 24, ...props }, ref,) => (;
<<<<<<< HEAD
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 24, ...props }, ref,) => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Loader2
      ref = {ref,}
      {...props}
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />

      className={cn('animate-spin', className)}
      width={size}
      height={size}
    />;
  );
),;
<<<<<<< HEAD
Spinner.displayName = 'Spinner';
export default Spinner;
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
=======
Spinner && Spinner.displayName = 'Spinner',;
export default Spinner,;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

Spinner.display_name = 'Spinner';
export default Spinner; import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib / utils';
export interface SpinnerProps extends React.SVGProps < SVGSVGElement> {
  size?: number | string;
}
const Spinner = React.forward_ref < SVGSVGElement, SpinnerProps>(
  ({ class_name, size = 24, ...props }, ref, ) => (
    <Loader2;
      ref = {ref, }
      {...props}
      class_name = {cn ('animate - spin', class_name), }
      width = {size, }
      height = {size, }
    />)),
Spinner.display_name = 'Spinner',
export default Spinner,
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
