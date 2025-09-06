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
import React from 'react',;
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;
  size?: number | string;
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
