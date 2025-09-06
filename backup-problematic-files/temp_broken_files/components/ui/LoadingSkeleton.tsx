import React from 'react',
import { motion } from 'framer-motion',
interface SkeletonProps {
  className?: string,
  height?: string,
  width?: string,
  rounded?: string

const Skeleton:React.FC<SkeletonProps> = ({ ;
  className = '',;
  height = 'h-4', ;
  width = 'w-full', ;
  rounded = 'rounded' ;
) => {;
  return (;
    <motion.div;
      className={`bg-white/10 animate-pulse ${height} ${width} ${rounded} ${className}`}
      animate={
        opacity: [0.3, 0.6, 0.3]}
      transition={
        duration: 1.5,
        repeat: Infinity,
        ease: &quot;easeInOut&quot;}    />
  )
,

interface ServiceCardSkeletonProps {
  className?: string

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
,

interface HeroSkeletonProps {
  className?: string

export const HeroSkeleton: React.FC<HeroSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <div className="flex flex-col sm: flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />        </div>
      </div>
    </div>
  )
,

interface StatsSkeletonProps {
  className?: string

export const StatsSkeleton: React.FC<StatsSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`py-20 px-6 ${className}`}>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
          {[...Array(4)].map(_, index) => (
            <div key={index} className=&quot;text-center&quot;>
              <Skeleton className=&quot;w-16 h-16 rounded-full mx-auto mb-4&quot; />
              <Skeleton className=&quot;h-10 w-20 mx-auto mb-2&quot; />
              <Skeleton className=&quot;h-5 w-24 mx-auto&quot; />            </div>
          )}
        </div>
      </div>
    </div>
  )
,

export default Skeleton,