'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'

interface EnhancedHeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  className?: string
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Advanced AI Solutions",
  description = "Leverage cutting-edge artificial intelligence to revolutionize your business operations and drive unprecedented growth.",
  primaryAction = {
    text: "Get Started",
    href: "/contact"
  },
  secondaryAction = {
    text: "Learn More",
    href: "/about"
  },
  className = ""
}) => {
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <section className={`relative py-20 px-4 overflow-hidden ${className}`}>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={primaryAction.href}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
          >
            {primaryAction.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href={secondaryAction.href}
            className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            {secondaryAction.text}
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnhancedHero
