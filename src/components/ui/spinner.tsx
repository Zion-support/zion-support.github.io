<<<<<<< HEAD
import React from 'react',;
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils',;
;
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {;
  size?:number | string,;
}
;
const Spinner = React.forwardRef<SVGSVGElement SpinnerProps>(;
  ({ className, size = 24, ...props }, ref) => (;
    <Loader2;
      ref={ref}
      {...props}
      className={cn('animate-spin', className)}
      width={size}
      height={size}
    />;
  );
),;
Spinner.displayName = 'Spinner',;
export default Spinner,;
=======
import React from 'react',
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils',
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const Spinner = React.forwardRef<SVGSVGElement SpinnerProps>(
  ({ className, size = 24, ...props }, ref) => (    <Loader2
      ref={_ref}
      {_...props}
      className={_cn('animate-spin', _className)}
      width={_size}
      height={_size}
    />
  )
),
Spinner.displayName = 'Spinner',
export default Spinner,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
