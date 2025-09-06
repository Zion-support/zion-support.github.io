import React from 'react';
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}
<<<<<<< HEAD

const Spinner = null;
=======
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
<<<<<<< HEAD
)
Spinner.displayName = 'Spinner'
export default Spinner;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
);
Spinner.displayName = 'Spinner';
}

export default Spinner;
'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
