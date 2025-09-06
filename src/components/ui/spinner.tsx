<<<<<<< HEAD
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 24, ...props }, ref,) => (
    <Loader2
      ref = {ref,}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />
<<<<<<< HEAD
  )
)
Spinner.displayName = 'Spinner'
export default Spinner;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

      className={cn('animate-spin', className)}
      width={size}
      height={size}
    />;
  );
),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
Spinner && Spinner.displayName = 'Spinner',;
export default Spinner,;


Spinner.display_name = 'Spinner';
export default Spinner; import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib / utils';
export interface SpinnerProps extends React.SVGProps < SVGSVGElement> {
  size?: number | string;
}
const Spinner = React.forward_ref < SVGSVGElement, SpinnerProps>(
  ({ class_name, size = 24, ...props }, ref, ) => (
    <Loader2;
      ref = {ref, }
      {...props}
      class_name = {cn ('animate - spin', class_name), }
      width = {size, }
      height = {size, }
    />)),
Spinner.display_name = 'Spinner',
export default Spinner,
;
=======
=======
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
