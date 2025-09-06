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
import { cn } from &quot;@/lib / utils & quot;
;
/**
 * Skeleton - Function description
 */
function Skeleton() {
  return (
    <div;
      className={cn (&quot;animate - pulse rounded - md bg - muted & quot;, class_name)}
      {...props}
    />);
}
;
