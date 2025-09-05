<<<<<<< HEAD
import React from 'react',
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils',
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const Spinner = React.forwardRef<SVGSVGElement SpinnerProps>(
  ({ className, size = 24, ...props }, ref) => (
=======
import React from 'react';

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {_size?: number | string;}

const _Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(_({_className, _size = 24, _...props}, _ref) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Loader2
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
