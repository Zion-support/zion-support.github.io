<<<<<<< HEAD
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <Skeleton className="h-4 w-[250px] mb-2" />
        <Skeleton className="h-4 w-[200px] mb-4" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  )
}

export { Skeleton, SkeletonCard }
=======
import React from "react";
import { cn  } from "@/lib/utils";

function Skeleton({className,
...props}: React.HTMLAttributes<HTMLDivElement>) {;
return (;
function Skeleton({
className,
...props}: React.HTMLAttributes<HTMLDivElement>) {
return (
<div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/>;
)
}

export { Skeleton };</div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/><//div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
