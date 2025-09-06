import React from 'react';

export type SkeletonProps = {;

=======

export type SkeletonProps = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  className?: string;
};

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function Skeleton({ className = '' }: SkeletonProps) {
    >
      <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent' />
      <style jsx global>{`
        @keyframes shimmer {

          100% {

            transform: translateX(100%);
          }        }
      `}</style>
    </div>
  );
}
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
        }
      `}</style>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
