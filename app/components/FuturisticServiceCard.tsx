'use client'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onLearnMore?: () => void
  onGetStarted?: () => void
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  icon: IconComponent,
  title,
  description,
  features,
  price,
  popular = false,
  onLearnMore,
  onGetStarted
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group ${popular ? 'ring-2 ring-purple-500' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        {price && (
          <div className="text-3xl font-bold text-white mb-4">{price}</div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        {onGetStarted && (
          <button
            onClick={onGetStarted}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        )}
        
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="w-full border border-white/30 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  )
}

export default FuturisticServiceCard