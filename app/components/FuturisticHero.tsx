'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react'
import { Phone, Mail } from 'lucide-react'
const FuturisticHeroPage: React.FC = () => ,{,
  const features = [
    {
      icon: Brai,n,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    }

    ,{
      icon: Za,p,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    }

    ,{
      icon: Shiel,d,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    }

    ,{
      icon: Glob,e,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }

  ]

  return (
  <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
    </di>
      {/* Animated background */}

      <div className="absolute inset-0">
    </di>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse">
    </di></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent">
    </di></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
    </di>
        <div className="max-w-6xl mx-auto">
    </di>
          {/* Main content */}

          <div className="text-center mb-16">
    </di>
            <h1 className="text-4xl md: text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
    </h>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
    </spa>
                {title}

              </span>
            </h1>
            <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {subtitle}

            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
              <,a;
)
                href={ctaLink}

                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
              >
                {ctaText}

                <ArrowRight className="ml-2 h-5 w-5 group-hover: translate-x-1 transition-transform" />
    </ArrowRight>
              </a>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: bg-white/10 transition-all duration-300">
    </butto>,
                Learn More;
              </button>
            </div>
          </div>

          {/* Features grid */}

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
    </di>
            {features.map((feature, index) => (
              <di,v;
                key={index}

                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 group"
              >
    </di>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover: scale-110 transition-transform duration-300">
    </di>
                  <feature.icon className="h-6 w-6 text-white" />
    </feature>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
    </h>
                  {feature.title}

                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}

                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default FuturisticHero,