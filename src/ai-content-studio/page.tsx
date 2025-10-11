'use client'
import React from 'react'
import { Palette, Brain, FileText, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIContentStudioPage: React.FC = () => {
  
  const features = [
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'AI-powered content generation and optimization',
      benefits: ['Auto content', 'SEO optimization', 'Multi-format support']

    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Intelligent content planning and strategy',
      benefits: ['Content planning', 'Audience targeting', 'Performance tracking']

    },
    {
      icon: Zap,
      title: 'Automated Publishing',
      description: 'Automated content publishing and distribution',
      benefits: ['Multi-platform publishing', 'Scheduling', 'Distribution']

    },
    {
      icon: Settings,
      title: 'Content Analytics',
      description: 'Comprehensive content performance analytics',
      benefits: ['Performance metrics', 'Engagement tracking', 'ROI analysis']

    }

  ]

  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Content Studio
  
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
            Complete Content Creation Suite,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Create, manage, and optimize content with our comprehensive AI-powered content studio. 
            From ideation to publication, streamline your entire content workflow.
          </p>
          <div>
            <$2 />
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Get Started
  
            <$2 />
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <FileText />
              +1 302 464 0950
  
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Content Studio Features,
  
          <div>
            {features.map((feature, index) => (
              <div>
          <div>
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}

                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle />
                      {benefit}

                  ))}

            ))}

      <Footer />
    </div>
  )
}

export default AIContentStudioPage</h2>
  </a>
  </a>
  </p>
  </h1>
</div></div></div></p></h3></ul></li></main></section>