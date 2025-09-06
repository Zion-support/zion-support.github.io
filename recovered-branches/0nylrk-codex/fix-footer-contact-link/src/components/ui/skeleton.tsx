<<<<<<< HEAD
import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

export { Skeleton };
=======
 function Skeleton ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (<div />) 
}export {
  Skeleton 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
