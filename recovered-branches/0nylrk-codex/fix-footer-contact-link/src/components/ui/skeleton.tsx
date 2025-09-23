
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
<<<<<<< HEAD
      className={cn("animate-pulse rounded-md bg-muted", className)}
=======
      className={cn("animate-pulse rounded-md bg-muted"className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {...props}
    />
  )
}

export { Skeleton }
