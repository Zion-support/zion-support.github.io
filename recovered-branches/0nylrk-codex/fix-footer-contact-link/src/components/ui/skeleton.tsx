
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function Skeleton({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />;
  );
}
<<<<<<< HEAD
export { Skeleton }
=======
;
export { Skeleton }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
