<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Phone, Mail } from 'lucide-react'
const FuturisticHeroPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
    title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
    {
  icon: BarChart,
    title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
},
    {
  icon: Target,
    title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
},
    {
  icon: TrendingUp,
    title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
}
  ]
  const benefits = [
    "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases"
    'Gain competitive advantage with advanced technology'
=======
<<<<<<< HEAD
'use client';
import React from 'react';
import { ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';
=======
'use client'
import React from 'react'
<<<<<<< HEAD
import { ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'
>>>>>>> 1c3bcb5bf864

interface FuturisticHeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string


const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Cutting-edge artificial intelligence solutions that revolutionize how you work, think, and grow.",
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  const features = [,
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"></div>
      {/* Animated background */
      <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20"></div>
        <div className="max-w-6xl mx-auto"></div>
          {/* Main content */
          <div className="text-center mb-16"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {title
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {subtitle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href={ctaLink
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
              >
                {ctaText
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Features grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {features.map((feature, index) => (
              <div
                key={index
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              ></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description
                </p>
              </div>
            ))
          </div>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default FuturisticHero;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
=======
}

export default FuturisticHero
}
=======
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Phone, Mail } from 'lucide-react'
const FuturisticHeroPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
    title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
    {
  icon: BarChart,
    title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
},
    {
  icon: Target,
    title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
},
    {
  icon: TrendingUp,
    title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
}
  ]
  const benefits = [
    "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases"
    'Gain competitive advantage with advanced technology'
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
