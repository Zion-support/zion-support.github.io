<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
interface SkeletonProps {
  className?: string,
  height?: string,
  width?: string,
  rounded?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '',
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => {
  return (
    <motion.div
      className={`bg-white/10 animate-pulse ${height} ${width} ${rounded} ${className}`}
      animate={{
        opacity: [0.3, 0.6, 0.3]}}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: &quot;easeInOut&quot;}}
=======
import React from 'react';

interface SkeletonProps {_className?: string;
  height?: string;
  width?: string;
  rounded?: string;}

const Skeleton: React.FC<SkeletonProps> = (_{_className = '', _height = 'h-4', _width = 'w-full', _rounded = 'rounded'}) => {_return (
    <motion.div
      className={`bg-white/10 animate-pulse ${height} ${_width} ${_rounded} ${_className}`}
      animate={_{
        opacity: [0.3, _0.6, _0.3]}}
      transition={_{
        duration: 1.5, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
},

<<<<<<< HEAD
interface ServiceCardSkeletonProps {
  className?: string
}
=======
interface ServiceCardSkeletonProps {_className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>
      <div className=&quot;flex items-center space-x-4 mb-6&quot;>
        <Skeleton className=&quot;w-16 h-16 rounded-2xl&quot; />
        <div className=&quot;flex-1&quot;>
          <Skeleton className=&quot;h-6 w-3/4 mb-2&quot; />
          <Skeleton className=&quot;h-4 w-1/2&quot; />
        </div>
      </div>
      <Skeleton className=&quot;h-4 w-full mb-2&quot; />
      <Skeleton className=&quot;h-4 w-5/6 mb-2&quot; />
      <Skeleton className=&quot;h-4 w-4/6&quot; />
    </div>
  )
},

<<<<<<< HEAD
interface HeroSkeletonProps {
  className?: string
}
=======
interface HeroSkeletonProps {_className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const HeroSkeleton: React.FC<HeroSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>
<<<<<<< HEAD
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <div className="flex flex-col sm: flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
=======
      <div className=&quot;text-center max-w-6xl mx-auto&quot;>
        <Skeleton className=&quot;h-20 w-96 mx-auto mb-6&quot; />
        <Skeleton className=&quot;h-8 w-2/3 mx-auto mb-8&quot; />
        <Skeleton className=&quot;h-6 w-1/2 mx-auto mb-12&quot; />
        <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
          <Skeleton className=&quot;h-14 w-32&quot; />
          <Skeleton className=&quot;h-14 w-32&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
      </div>
    </div>
  )
},

<<<<<<< HEAD
interface StatsSkeletonProps {
  className?: string
}
=======
interface StatsSkeletonProps {_className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const StatsSkeleton: React.FC<StatsSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`py-20 px-6 ${className}`}>
<<<<<<< HEAD
      <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
          {[...Array(4)].map((_, index) => (
            <div key={index} className=&quot;text-center&quot;>
              <Skeleton className=&quot;w-16 h-16 rounded-full mx-auto mb-4&quot; />
              <Skeleton className=&quot;h-10 w-20 mx-auto mb-2&quot; />
              <Skeleton className=&quot;h-5 w-24 mx-auto&quot; />
=======
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {_[...Array(4)].map(_(_, _index) => (
            <div key={index} className="text-center">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
              <Skeleton className="h-10 w-20 mx-auto mb-2" />
              <Skeleton className="h-5 w-24 mx-auto" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          ))}
        </div>
      </div>
    </div>
  )
},

export default Skeleton,