'use client'
import React from 'react'
import { ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

interface FuturisticHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Cutting-edge artificial intelligence solutions that revolutionize how you work, think, and grow.",
  ctaText = "Get Started",}
  ctaLink = "/contact"}
}) => {
  const features = [,
    {
      icon: Brain,
      title: 'AI-Powered Solutions',}
      description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    },
    {
      icon: Zap,
      title: 'High Performance',}
      description: 'Lightning-fast processing and real-time analytics for optimal results'}
    },
    {
      icon: Shield,
      title: 'Enterprise Security',}
      description: 'Bank-level security with encryption and compliance standards'}
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
  ]

  return();
    <div className="accessibility-enhanced"></div>
      {/* Animated background */
      <div className="accessibility-enhanced"></div>
        <div className="accessibility-enhanced"></div>
        <div className="accessibility-enhanced"></div>
      </div>
      <div className="accessibility-enhanced"></div>
        <div className="accessibility-enhanced"></div>
          {/* Main content */
          <div className="accessibility-enhanced"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {title
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {subtitle
            </p>
            <div className="accessibility-enhanced"></div>
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
          <div className="accessibility-enhanced"></div>
            {features.map((feature, index) => (
              <div
                key={index
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              ></div>
                <div className="accessibility-enhanced"></div>
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
    </div>}
  )}
}

}

export default FuturisticHero
}