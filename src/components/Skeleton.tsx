<<<<<<< HEAD
import { cn } from '@/lib/utils';
;
interface SkeletonProps {;
  className?: string;
  lines?: number}
<<<<<<< HEAD

export default function Skeleton({ className, lines = 1 }: SkeletonProps) {
  if (lines === 1) {
    return (
      <div
        className={cn('
          'animate-pulse bg-gray-200 rounded', className
=======
;
export default function Skeleton({ className, lines = 1 }: SkeletonProps) {;
  if (lines === 1) {;
    return (;
      <div;
        className={cn(;
          'animate-pulse bg-gray-200 rounded',;
          className;
>>>>>>> main
        )}
      />;
    )}
;
  return (;
    <div className="space-y-2">;
      {Array.from({ length: lines }).map((_, i) => (;
        <div;
=======
<<<<<<< HEAD
import {cn } from '@/lib/utils';

interface SkeletonProps {className?: string;
  lines?: number}

export default function Skeleton(  {className, lines = 1 }: SkeletonProps) {if (lines === 1) {
    return (
      <div className={cn( 'animate-pulse bg-gray-200 rounded', className )} /" >
    )}
"
  return (""
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={cn( 'animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full' )} /" >
=======
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

<<<<<<< HEAD
  return (
    <div className="space-y-2">
      {Array.from({ length: lines   }).map((_, i) => (
=======
  return (&apos;
    <div className=&quot;space-y-2&quot;>
      {Array.from({ length: lines }).map((_, i) => (&quot;
>>>>>>> main
        <div
          key={i}
<<<<<<< HEAD
          className={cn("
            'animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full'
=======
          className={cn(
            &apos;animate-pulse bg-gray-200 rounded h-4&apos;,
            i === lines - 1 ? &apos;w-3/4&apos; : &apos;w-full&apos;
>>>>>>> main
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
          'animate-pulse bg-gray-200 rounded',
          className
        )}
      />
<<<<<<< HEAD
    )}

  return (
    <div className="space-y-2">
=======
=======
      <div className={cn( animate-pulse bg-gray-200 rounded', className
        )}'
      /  >
>>>>>>> main
    )}
'
  return ("
    <div className="space-y-2'>
>>>>>>> main
      {Array.from({ length: lines }).map((_, i) => (
<<<<<<< HEAD
        <div
>>>>>>> main
          key={i}
          className={cn(;
            'animate-pulse bg-gray-200 rounded h-4',;
            i === lines - 1 ? 'w-3/4' : 'w-full';
          )}
<<<<<<< HEAD
        />;
      ))}
    </div>;
  )}
=======
        />
<<<<<<< HEAD
>>>>>>> main
      ))}
<<<<<<< HEAD
    </div>"
  )}""
=======
    </div>
  )}
=======
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
>>>>>>> main
>>>>>>> main
>>>>>>> main
