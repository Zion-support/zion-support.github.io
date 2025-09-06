<<<<<<< HEAD
import { cn } from &quot;@/lib / utils & quot;
;
/**
 * Skeleton - Function description
 */
function Skeleton() {
  return (
    <div;
      className={cn (&quot;animate - pulse rounded - md bg - muted & quot;, class_name)}
=======

import { cn } from "@/lib/utils";
;
function Skeleton({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) {;
  return (;
    <div;
      className={cn("animate-pulse rounded-md bg-muted", className)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {...props}
    />);
}
;
export { Skeleton } function Skeleton ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (<div />) 
}export {
  Skeleton 
}
