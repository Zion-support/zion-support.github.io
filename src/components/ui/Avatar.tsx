import React from 'react';
<<<<<<< HEAD
import { _cn } from '@/lib/utils';
const _Avatar = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)} {...props}/>));
Avatar.displayName = 'Avatar';
const _AvatarImage = React.forwardRef(({ className, src, alt = '', ...props }, ref) => (<img ref={ref} className={cn('aspect-square h-full w-full', className)} src={src} alt={alt} {...props}/>));
AvatarImage.displayName = 'AvatarImage';
const _AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)} {...props}/>));
=======
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
>>>>>>> origin/clean-error-fixing-automation
AvatarFallback.displayName = 'AvatarFallback';
export { Avatar, AvatarImage, AvatarFallback };
