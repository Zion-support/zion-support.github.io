'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface GenericServicePageProps {
  title?: string
  description?: string
  features?: string[]
  ctaText?: string
  ctaLink?: string
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title = "Our Service",
  description = "Professional services designed to meet your business needs.",
  features = [
    "Expert consultation",
    "Custom solutions",
    "24/7 support",
    "Proven results"
  ],
  ctaText = "Contact Us",
  ctaLink = "/contact"
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          
          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          )}
          
          <Link
            href={ctaLink}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GenericServicePage