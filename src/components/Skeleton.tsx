import { cn } from &apos;@/lib/utils';

interface SkeletonProps {
  className?: string;
  lines?: number}&apos;&apos;

export default function Skeleton({ className, lines = 1 }: SkeletonProps) {
  if (lines === 1) {
    return (}}
      <div
        className=;{cn(
          &apos;animate-pulse bg-gray-200 rounded&apos;,
          className
        )}
      />
    )}

  return (&apos;
    <div className=&quot;space-y-2&quot;>
      {Array.from({ length: lines }).map((_, i) => (&quot;
        <div
          key={i}
          className={cn(
            &apos;animate-pulse bg-gray-200 rounded h-4&apos;,
            i === lines - 1 ? &apos;w-3/4&apos; : &apos;w-full&apos;
          )}
        />
      ))}&apos;
    </div>
  )}