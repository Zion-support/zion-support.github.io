<<<<<<< HEAD

import { cn } from &quot;@/lib/utils&quot;
function Skeleton({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(&quot;animate-pulse rounded-md bg-muted&quot;, className)}
      {...props}
    />;
  );
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export { Skeleton }