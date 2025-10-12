'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Star } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onClick?: () => void
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  popular = false,
  onClick
}) => {
  return (
    <div 
      className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group ${
        popular ? 'ring-2 ring-purple-500' : ''
      }`}
      onClick={onClick}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      {price && (
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
        </div>
      )}
      
      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}

export default FuturisticServiceCard