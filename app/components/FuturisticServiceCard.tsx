'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star } from 'lucide-react'

interface FuturisticServiceCardProps {
  title: string
  description: string
  features: string[]
  pricing: string
  popular?: boolean
  icon: React.ComponentType<{ className?: string }>
  onClick?: () => void
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  features,
  pricing,
  popular = false,
  icon: Icon,
  onClick
}) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer" onClick={onClick}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-12 h-12 text-purple-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 text-sm">
        {description}
      </p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-bold text-white">{pricing}</div>
        <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
      </div>
      
      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg">
        Get Started
      </button>
    </div>
  )
}

export default FuturisticServiceCard