'use client'
import React from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  price?: string
  isPopular?: boolean
  onSelect?: () => void
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  isPopular = false,
  onSelect
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
      isPopular ? 'border-purple-400 ring-2 ring-purple-400/50' : 'border-white/20'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {price && (
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-white mb-2">{price}</div>
          <div className="text-gray-400">per month</div>
        </div>
      )}

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          isPopular
            ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
            : 'border border-white text-white hover:bg-white hover:text-gray-900'
        }`}
      >
        {price ? 'Get Started' : 'Learn More'}
        <ArrowRight className="inline-block ml-2 w-4 h-4" />
      </button>
    </div>
  )
}

export default FuturisticServiceCard