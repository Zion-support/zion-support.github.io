<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Loader2 } from 'lucide-react'
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React && React.SVGProps<SVGSVGElement> {;
  size?: number | string;
}

const Spinner = React && React.forwardRef<SVGSVGElement, SpinnerProps>(;
  ({ className, size = 24, ...props }, ref,) => (;
    <Loader2
      ref = {ref,}
      {...props}
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
<<<<<<< HEAD
    />
  )
)
Spinner.displayName = 'Spinner'
export default Spinner;

=======
    />;
  );
),;
Spinner && Spinner.displayName = 'Spinner',;
export default Spinner,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
