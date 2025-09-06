<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export type SkeletonProps = {
  className?: string
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-gray-200/60 dark:bg-white/10 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark: via-white/10 to-transparent" />
      <style jsx global>{`
        @keyframes shimmer {
<<<<<<< HEAD
          100% {
            transform: translateX(100%);
          }
=======
import React from 'react'

export type SkeletonProps = {
  className?: string
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-gray-200/60 dark:bg-white/10 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark: via-white/10 to-transparent" />
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%) }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          100% { transform: translateX(100%) }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      `}</style>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
