import React from 'react';
import { motion } from 'framer-motion';
interface SkeletonProps {
  className?: string,
  height?: string,
  width?: string,
  rounded?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = $2;
  height = $2;
  width = $2;
  rounded = 'rounded' 
}) => {
  return (
    <motion.div
      className={`bg-white/10 animate-pulse ${height} ${width} ${rounded} ${className}`}
      animate={{
        opacity: [0.3, 0.6, 0.3]}}
      transition = $2;
        repeat: Infinity,
        ease: "easeInOut"}}
    />
  )
},

interface ServiceCardSkeletonProps {
  className?: string
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = $2;
interface HeroSkeletonProps {
  className?: string
}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className = $2;
interface StatsSkeletonProps {
  className?: string
}

export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key = $2;
export default Skeleton,