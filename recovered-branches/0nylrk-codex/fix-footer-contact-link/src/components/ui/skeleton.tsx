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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
