import React from 'react';
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
import React from 'react',;
import { Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React && React.SVGProps<SVGSVGElement> {;
  size?: number | string;
>>>>>>> }
ursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> 
const Spinner = React && React.forwardRef<SVGSVGElement, SpinnerProps>(;
  ({ className, size = 24, ...props }, ref,) => (;
    <Loader2
      ref = {ref,}
      {...props}
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />
  )
)
Spinner.displayName = 'Spinner'
export default Spinner;

  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 
>>>>>>> 