'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Award, Rocket } from 'lucide-react'

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  })

  const targetCounters = {
    clients: 1000,
    projects: 500,
    satisfaction: 99,
    years: 10,
    countries: 25,
    uptime: 99.9
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev }
        let allComplete = true

        Object.keys(targetCounters).forEach(key => {
          const target = targetCounters[key as keyof typeof targetCounters]
          const current = prev[key as keyof typeof prev]
          const increment = target / steps

          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment,
              target
            )
            allComplete = false
          }
        })

        if (allComplete) {
          clearInterval(interval)
        }

        return newCounters
      })
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: Math.round(counters.clients),
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      value: Math.round(counters.projects),
      label: "Projects Completed",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      value: `${Math.round(counters.satisfaction)}%`,
      label: "Client Satisfaction",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: Math.round(counters.years),
      label: "Years Experience",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: Math.round(counters.countries),
      label: "Countries Served",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: `${Math.round(counters.uptime * 10) / 10}%`,
      label: "Uptime Guarantee",
      color: "from-red-500 to-pink-500"
    }
  ]

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      stats: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      stats: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      stats: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      stats: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const achievements = [
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider 2024',
      value: '25+'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      value: '98%'
    },
    {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform with our AI and IT solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the powerful features that make our solutions stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that make our solutions the preferred choice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentStatistics