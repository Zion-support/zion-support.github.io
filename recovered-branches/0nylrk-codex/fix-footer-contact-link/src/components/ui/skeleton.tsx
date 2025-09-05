
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(&quot;animate-pulse rounded-md bg-muted&quot;, className)}
=======
import { cn } from "@/lib/utils";
function Skeleton({;
  className;
  ...props;
}: React.HTMLAttributes<HTMLDivElement>) {;
  return (;
    <div;
      className={cn("animate-pulse rounded-md bg-muted", className)}
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      {...props}
    />;
  );
}
;
export { Skeleton }
;