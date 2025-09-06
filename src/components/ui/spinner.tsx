<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 24, ...props }, ref,) => (
    <Loader2
      ref = {ref,}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />
<<<<<<< HEAD
  )
<<<<<<< HEAD
)
Spinner.displayName = 'Spinner'
export default Spinner;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
);
Spinner.displayName = 'Spinner';
}

export default Spinner;
'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

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
=======
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
