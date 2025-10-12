'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Star } from 'lucide-react'

interface FuturisticServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  price?: string
  className?: string
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  price,
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
        {price && (
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">
              {price}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
        Get Started
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  )
}

export default FuturisticServiceCard