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

=======
import React from 'react'

interface SkeletonProps {
  className?: string
}

const Skeleton = ({ className = "" }: SkeletonProps) => (
  <div
    className={`animate-pulse rounded-md bg-zion-slate-100 dark:bg-zion-slate-800 ${className}`}
  />
)

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
export { Skeleton }