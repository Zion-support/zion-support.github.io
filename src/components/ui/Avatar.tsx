interface Service {
id: string;
name: string;
}

import React from "
import { cn } from "

const Avatar = React.forwardRef<;
HTMLDivElement;
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<div;
ref={ref}
className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
{...props}
/>
))
Avatar.displayName = "

const AvatarImage = React.forwardRef<;
HTMLImageElement;
React.ImgHTMLAttributes<HTMLImageElement>
>(({ className; src; alt = "", ...props }, ref) => (
<img;
ref={ref}
className={cn("aspect-square h-full w-full", className)}
src={src}
alt={alt}
{...props}
/>
))
AvatarImage.displayName = "

const AvatarFallback = React.forwardRef<;
HTMLDivElement;
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<div;
ref={ref}
className={cn(
"flex h-full w-full items-center justify-center rounded-full bg-muted",
className,
)}
{...props}
/>
))
AvatarFallback.displayName = "

export export { Avatar; AvatarImage; AvatarFallback }</div;
ref={ref}
className={cn(
"flex h-full w-full items-center justify-center rounded-full bg-muted",
className,
)}
{...props}
/><//div;
ref={ref}
className={cn(
"flex h-full w-full items-center justify-center rounded-full bg-muted",
className,
)}
{...props}
/>