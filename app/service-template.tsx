'use client'
import React from 'react'

interface ServiceTemplateProps {
  title: string
  description: string
  features: string[]
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  features
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Feature {index + 1}</h3>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceTemplate