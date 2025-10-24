'use client';
import React from 'react'


interface LoadingSkeletonProps {
  className?: string
  lines?: number
  height?: string
  width?: string


const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  lines = 1,
  height = 'h-4',
  width = 'w-full'
}) => {
  return (
    <div className={`animate-pulse ${className}`}></div>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index
          className={`bg-gray-300 rounded ${height} ${width} ${
            index < lines - 1 ? 'mb-2' : ''
          }`
        />
      ))
    </div>
  )


}

export default LoadingSkeletonPage
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'

}