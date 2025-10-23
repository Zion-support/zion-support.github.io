'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const ContentPromotionBanner: React.FC = () => {
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/30"></div>
          <div className="text-center">
            <p className="text-sm md:text-base">
              Get 30% off your first AI solution implementation
            </p>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/30"></div>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
            <ArrowRight className="inline-block ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentPromotionBanner