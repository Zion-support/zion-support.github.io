import React from 'react';
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 24, ...props }, ref) => (
    <Loader2
      ref={ref}
      {...props}
      className={cn('animate-spin', className)}
      width = $2;
Spinner.displayName = $2;
export default Spinner,
