'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () => void
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  popular = false,
  onSelect
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:bg-white/20 ${
      popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl mb-4 mx-auto">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        {price && (
          <div className="text-3xl font-bold text-white mb-2">
            {price}
          </div>
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

      {onSelect && (
        <button
          onClick={onSelect}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
              : 'border border-gray-300 text-white hover:bg-white hover:text-gray-900'
          }`}
        >
          Select Plan
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
      )}
    </div>
  )
}

export default FuturisticServiceCard