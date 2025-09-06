
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />;
  );
}
;
<<<<<<< HEAD
export { Skeleton };
=======
export { Skeleton }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;