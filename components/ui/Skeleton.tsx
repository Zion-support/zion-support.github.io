import React from 'react'

export type SkeletonProps = {_className?: string}

export default function Skeleton(_{_className = ''}: SkeletonProps) {_return (
    <div className={`relative overflow-hidden rounded-md bg-gray-200/60 dark:bg-white/10 ${className}`}>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark: via-white/10 to-transparent" />
=======
      <div className=&quot;absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%) }
=======
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
      <style jsx global>{_`
        @keyframes shimmer {
          100% { transform: translateX(100%);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      `}</style>
    </div>
  )
}