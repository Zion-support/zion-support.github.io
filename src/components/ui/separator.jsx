<<<<<<< HEAD
export function Separator({}
  className = '','
  orientation = 'horizontal',
  decorative = true,
  ...props;
}) {}
'
''
'''
  const baseClasses =''''
    orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px';'
''
  return()'''
    <div''''
=======
export function Separator({ className = '', orientation = 'horizontal', decorative = true, ...props }) {

  const baseClasses = orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px';

  return (
    <div
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={`${baseClasses} bg-gray-300 ${className}`}
      {...props}
    />
<<<<<<< HEAD
  );
}'`
'`'`
=======
<<<<<<< HEAD
  );
</div>}
=======
  )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
