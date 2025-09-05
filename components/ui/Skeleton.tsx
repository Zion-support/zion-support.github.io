<<<<<<< HEAD
import React from 'react';
;
export type SkeletonProps = {;
  className?:string;
}
;
export default function Skeleton({ className = '' } SkeletonProps) {;
  return (;
    <div className={`relative overflow-hidden rounded-md bg-gray-200/60 dark:bg-white/10 ${className}`}>;
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />;
      <style jsx global>{`;
        @keyframes shimmer {;
          100% { transform:translateX(100%) }
=======
import React from 'react'

export type SkeletonProps = {_className?: string}

export default function Skeleton(_{_className = ''}: SkeletonProps) {_return (
    <div className={`relative overflow-hidden rounded-md bg-gray-200/60 dark:bg-white/10 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark: via-white/10 to-transparent" />      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%) }
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
      <style jsx global>{_`
        @keyframes shimmer {
          100% { transform: translateX(100%);}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        }
      `}</style>;
    </div>;
  );
}