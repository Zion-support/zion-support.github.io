'use client'
import React from 'react'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price?: string
  features: string[]
  popular?: boolean
  icon?: React.ComponentType<{ className?: string }>
  onSelect?: () => void
  className?: string
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  features,
  popular = false,
  icon: Icon,
  onSelect,
  className = ''
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${popular ? 'ring-2 ring-purple-500' : ''} ${className}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Popular
          </span>
        </div>
      )}

      {Icon && (
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
      <p className="text-gray-300 mb-6 text-center">{description}</p>

      {price && (
        <div className="text-center mb-6">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-gray-400 text-sm ml-1">/month</span>
        </div>
      )}

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
      >
        Select Plan
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  )
}

export default FuturisticServiceCard