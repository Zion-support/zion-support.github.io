'use client'
import React from 'react'

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div>

    <div>
  
      <div>
  
        <div className="w-8 h-8 bg-slate-700 rounded mr-3"></div>
        <div className="h-4 bg-slate-700 rounded w-20"></div>
      </div>
      
      <div className="h-6 bg-slate-700 rounded mb-3"></div>
      <div className="h-4 bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-slate-700 rounded mb-4 w-3/4"></div>
      
      <div>
  
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded w-2/3"></div>
      </div>
      
      <div>
  
        <div className="h-6 bg-slate-700 rounded w-24"></div>
        <div className="h-8 bg-slate-700 rounded w-20"></div>
      </div>
    </div>
  )
}

export default ServiceCardSkeleton
