'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'
export const PageLoader: React.FC = () => {
  return (
    <div> </div><div> </div><div> </div><Loader2> </Loader2></div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the page</p>
      </div>
    </div>
  )
}
export const ComponentLoader: React.FC = () => {
  return (
    <div> </div><div> </div><Loader2> </Loader2><span>Loading component...</span>
      </div>
    </div>
  )
}
export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div> </div><div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
      <div className="h-6 bg-slate-700 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto"></div>
    </div>
  )
}
export const ContentSkeleton: React.FC = () => {
  return (
    <div> </div><div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
    </div>
  )
}
export const LoadingSpinner: React.FC = () => (
  <div> </div><div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
)
export const StatsSkeleton: React.FC = () => {
  return (
    <div> </div><div>{[...Array(4)].map((_, i) => (
          </div><div> </div><div className="h-8 bg-slate-700 rounded mb-2"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  )
}