'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Users, Globe, Zap } from 'lucide-react'

interface GenericServicePageProps {
  title?: string
  description?: string
  features?: string[]
  benefits?: string[]
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title = "Our Service",
  description = "Professional service solution for modern businesses.",
  features = [
    "Advanced technology integration",
    "24/7 customer support",
    "Scalable solutions",
    "Cost-effective pricing"
  ],
  benefits = [
    "Increased efficiency",
    "Reduced costs",
    "Better performance",
    "Enhanced security"
  ]
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Star className="w-5 h-5 text-yellow-400 mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenericServicePage