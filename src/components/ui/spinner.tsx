import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
=======
import React from 'react',;
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;
  size?: number | string;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 24, ...props }, ref,) => (
    <Loader2
      ref = {ref,}
      {...props}
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />
=======
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
