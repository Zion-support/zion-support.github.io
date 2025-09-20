import React from "react";
<<<<<<< HEAD
import { cn  } from "@/lib/utils";

function Skeleton({
className,
...props}: React.HTMLAttributes<HTMLDivElement>) {
return (
<div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/>
)
}

export { Skeleton };</div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/><//div;
className={cn("animate-pulse rounded-md bg-muted, ", className)}
{...props}
/>
=======
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="space-y-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-20 w-full" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
