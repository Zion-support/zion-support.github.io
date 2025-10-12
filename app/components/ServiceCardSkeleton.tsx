'use client'
import React from 'react'

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="cyber-card p-6 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-slate-700 rounded mr-3"></div>
        <div className="h-4 bg-slate-700 rounded w-20"></div>
      </div>
      
      <div className="h-6 bg-slate-700 rounded mb-3"></div>
      <div className="h-4 bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-slate-700 rounded mb-4 w-3/4"></div>
      
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded w-2/3"></div>
      
      <div className="flex items-center justify-between">
        <div className="h-6 bg-slate-700 rounded w-24"></div>
        <div className="h-8 bg-slate-700 rounded w-20"></div>
    </div>
  )
}

export default ServiceCardSkeleton
