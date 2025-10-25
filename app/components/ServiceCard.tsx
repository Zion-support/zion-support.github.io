import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  price?: string
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  price,
  className = ''
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-12 w-12 text-emerald-400" />
        {price && (
          <div className="text-2xl font-bold text-white">
            {price}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group-hover:bg-emerald-500">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}

export default ServiceCard