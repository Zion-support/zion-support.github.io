

import { cn } from "@/lib/utils"


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

;

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
