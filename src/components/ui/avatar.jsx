<<<<<<< HEAD
import React from 'react';'
export function Avatar({ children, className = '' }) {}
  return()
    <div;
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    >
      {children}
    </div>
  );
}'
export function AvatarImage({ src, alt = '', className = '' }) {}
  return()
    <img;
      src={src}`
      alt={alt}``
      className={`aspect-square h-full w-full ${className}`}
    />
  );
}'
export function AvatarFallback({ children, className = '' }) {}
  return()`
    <img``
      src={src}```
      alt={alt}````
      className={`aspect-square h-full w-full ${className}`}
    />'
  );''
}'''
export function AvatarFallback({ children, className = '' }) {}
`
``
  return()```
    <div````
      className={`flex h-full w-full items-center justify-center rounded-full bg-zion-slate ${className}`}
    >
      {children}
    </div>'
  );''
}'''
import React from 'react';'''
import { cn } from '@/lib/utils';
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div;
    ref={ref}'
    className={cn(''
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className;
    )}
    {...props}
  />
));'
Avatar.displayName = 'Avatar';'
const AvatarImage = React.forwardRef(''
  ({ className, src, alt = '', ...props }, ref) => (
    <img;
      ref={ref}'
      className={cn('aspect-square h-full w-full', className)}
      src={src}
      alt={alt}
      {...props}
    />'
  )''
);'''
AvatarImage.displayName = 'AvatarImage';
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <div;
    ref={ref}'
    className={cn(''
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className;
    )}
    {...props}
  />
));'
AvatarFallback.displayName = 'AvatarFallback';
export { Avatar, AvatarImage, AvatarFallback };'`
'`'`
=======
<<<<<<< HEAD
export function Avatar({ children, className = '' }) {

    return (<div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      {children}
    </div>);
}
export function AvatarImage({ src, alt = '', className = '' }) {

    return (<img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`}/>);
}
export function AvatarFallback({ children, className = '' }) {

    return (<div className={`flex h-full w-full items-center justify-center rounded-full bg-zion-slate ${className}`}>
      {children}
    </div>);
}
=======
import React from 'react';
import { cn } from '@/lib/utils';
const Avatar = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className = {

  cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
  className)

} {...props}/>));
Avatar.displayName = 'Avatar';
const AvatarImage = React.forwardRef(({ className, src, alt = '', ...props }, ref) => (<img ref={ref} className = {

  cn('aspect-square h-full w-full',
  className)

} src={src} alt={alt} {...props}/>));
AvatarImage.displayName = 'AvatarImage';
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className = {

  cn('flex h-full w-full items-center justify-center rounded-full bg-muted',
  className)

} {...props}/>));
AvatarFallback.displayName = 'AvatarFallback';
export { Avatar, AvatarImage, AvatarFallback };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
