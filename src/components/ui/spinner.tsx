import React from 'react';

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {_size?: number | string;}

const _Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(_({_className, _size = 24, _...props}, _ref) => (
    <Loader2
      ref={_ref}
      {_...props}
      className={_cn('animate-spin', _className)}
      width={_size}
      height={_size}
    />
  )
);
Spinner.displayName = 'Spinner';
export default Spinner;
