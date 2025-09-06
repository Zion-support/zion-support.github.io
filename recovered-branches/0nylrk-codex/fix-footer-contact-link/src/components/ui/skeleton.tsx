
import { cn } from &quot;@/lib/utils&quot;
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
export { Skeleton }
export { Skeleton };
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export { Skeleton };
=======
export { Skeleton }
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
