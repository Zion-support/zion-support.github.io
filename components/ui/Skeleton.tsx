import React from 'react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export type SkeletonProps = {
  className?: string;
};

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
=======
          100% { transform: translateX(100%) }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      `}</style>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
