'use client'
import React from 'react'
import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react'
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  return (
    <div> </div><Loader2>{text && (
        </Loader2><p className="mt-2 text-sm text-gray-500">{text}</p>
      )}
    </div>
  )
}
export const PageLoader: React.FC = () => (
  <div> </div><div> </div><div> </div><Brain> </Brain></div>
      <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading amazing content...</p>
    </div>
  </div>
)
export const ServiceCardSkeleton: React.FC = () => (
  <div> </div><div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div>
    <div className="h-6 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div> </div><div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
)
export const StatsSkeleton: React.FC = () => (
  <div>{Array.from({ length: 4 }).map((_, index) => (
      </div><div> </div><div className="h-8 bg-gray-600 rounded mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
      </div>
    ))}
  </div>
)
export const ContentSkeleton: React.FC = () => (
  <div> </div><div className="h-8 bg-gray-600 rounded w-3/4"></div>
    <div> </div><div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
    </div>
  </div>
)