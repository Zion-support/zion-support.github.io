<<<<<<< HEAD
import React from 'react';
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

=======
      className={cn('animate-spin', className)}
      width={size}
      height={size}
    />;
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
