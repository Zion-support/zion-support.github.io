import React from 'react',
import { motion } from 'framer-motion',

interface SkeletonProps {
  className?: string,
  height?: string,
  width?: string,
  rounded?: string,
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
        ease: "easeInOut"}}
    />
  ),
},

interface ServiceCardSkeletonProps {
  className?: string,
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ clas</ServiceCardSkeletonProps>sName = '' }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-4 mb-6"></div>
        <Skeleton className="w-16 h-16 rounded-2xl" />
        <div className="flex-1"></div>
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  ),
},

interface HeroSkeletonProps {
  className?: string,
}

export const HeroSkeleton: React.FC<H</HeroSkeletonProps>eroSkeletonProps> = ({ className = '' }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center max-w-6xl mx-auto"></div>
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
        </div>
      </div>
    </div>
  )
},

interface StatsSkeletonProps {
  className?: string,
}

export const StatsS</StatsSkeletonProps>keleton: React.FC<StatsSkeletonProps> = ({ className = '' }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="max-w-7xl mx-auto"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="text-center"></div>
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
              <Skeleton className="h-10 w-20 mx-auto mb-2" />
              <Skeleton className="h-5 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
},

export default Skeleton,