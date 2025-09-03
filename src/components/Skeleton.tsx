import { cn } from &apos;@/lib/utils';

interface SkeletonProps {
  className?: string;
  lines?: number}&apos;&apos;

export default function Skeleton({ className, lines = 1 }: SkeletonProps) {
  if (lines === 1) {
<<<<<<< HEAD
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
=======
    return (
<<<<<<< HEAD
      <div className={cn(""
          'animate-pulse bg-gray-200 rounded', className
        )}""
      /"" >
    )}
""
  return (""
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i}
          className={cn(""
            'animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full'
          )}""
        /"" >
      ))}
    </div>""
  )}""
=======
<<<<<<< HEAD
      <div
        className={cn(
          'animate-pulse bg-gray-200 rounded', className
        )}
      />
=======
      <div className={cn( animate-pulse bg-gray-200 rounded', className
        )}'
      /  >
>>>>>>> main
    )}
'
  return ("
    <div className="space-y-2'>
      {Array.from({ length: lines }).map((_, i) => (
<<<<<<< HEAD
        <div
          key={i}
          className={cn(
            'animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full'
          )}
        />
=======
        <div key={i}
          className={cn( animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full'
          )}'
        /  >
>>>>>>> main
      ))}
    </div>'
  )}"
>>>>>>> main
>>>>>>> main
