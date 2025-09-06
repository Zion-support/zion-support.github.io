import React from 'react';

export type SkeletonProps = {
  className?: string;
};
}

export default function Skeleton({ className = '' }: SkeletonProps) {

    >
      <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent' />
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
