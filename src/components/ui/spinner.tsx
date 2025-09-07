<<<<<<< HEAD
import React from 'react';
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'


import { Loader2 } from 'lucide-react'

import React from 'react',;
import { Loader2 } from 'lucide-react';
import React from 'react';
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
=======
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'


import { Loader2 } from 'lucide-react'

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
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',;
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;
  size?: number | string;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662



}
const Spinner = React && React.forwardRef<SVGSVGElement, SpinnerProps>(;
  ({ className, size = 24, ...props }, ref,) => (;
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 24, ...props }, ref,) => (
    <Loader2
      ref = {ref,}
      {...props}
<<<<<<< HEAD
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />
  )
)
Spinner.displayName = 'Spinner'
export default Spinner;

      className={cn('animate-spin', className)}
      width={size}
      height={size}
    />;
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
=======

    />;
  );
),;
Spinner && Spinner.displayName = 'Spinner',;
export default Spinner,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
