
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
<<<<<<< HEAD
      className={cn("animate-pulse rounded-md bg-muted"className)}
=======
      className={cn("animate-pulse rounded-md bg-muted", className)}
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    />
  )
}

export { Skeleton }
