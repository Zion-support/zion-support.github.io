'use client'
import React from 'react'
import { ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

interface FuturisticHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Cutting-edge artificial intelligence solutions that revolutionize how you work, think, and grow.",
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process data at unprecedented speeds"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced machine learning algorithms"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere in the world"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuturisticHero