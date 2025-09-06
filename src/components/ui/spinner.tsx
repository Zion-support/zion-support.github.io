<<<<<<< HEAD
Spinner.displayName = 'Spinner';
export default Spinner;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
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
  )
),
Spinner.displayName = 'Spinner',
export default Spinner,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
