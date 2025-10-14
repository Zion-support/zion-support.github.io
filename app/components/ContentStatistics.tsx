import React, { use State, use Effect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react'

'use client'


const Content Statistics: React.FC = () => {
  const  = use State({
    clients: 0
    projects: 0
    satisfaction: 0
    years: 0
    countries: 0
    uptime: 0
  })
  const target Counters = {
    clients: 10000
    projects: 5000
    satisfaction: 99
    years: 15
    countries: 50
    uptime: 99
  }
  )
  const statistics = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const features = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
    }
    {
      icon: Zap
      title: 'High Performance'
      description: 'Lightning-fast processing and real-time analytics for optimal results'
      stats: 
    }
    {
      icon: Shield
      title: 'Enterprise Security'
      description: 'Bank-level security with encryption and compliance standards'
      stats: 
    }
    {
      icon: Globe
      title: 'Global Reach'
      description: 'Worldwide deployment and support for international businesses'
      stats: 
    }]
  const benefits = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const achievements = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  use Effect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60
    const step Duration = duration / steps
    const timers = Object.keys(target Counters).map((key) => {
      const target = target Counters
      const increment = target / steps
      let current = 0
      return set Interval(() => {
        current += increment
        if (current >= target) {
          current = target
        }
  )
        set Counters(prev => ({
          ...prev
          : Math.floor(current)
        }))
      }, step Duration)
    })
    return () => {
      timers.for Each(timer => clear Interval(timer))
    }
  )
  }, )
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
        
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
  )
        <div className="text-center mb-16">
        
          <h2>
          
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p>
          
            Discover the measurable impact we&apos;ve made for businesses worldwide through our innovative A I and I T solutions.
          </p>
        </div>

        {/* Statistics Grid */}
  )
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group">
              <div class Name={`w-16 h-16 ${stat.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div class Name={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.to Locale String()}{stat.suffix}
  )
              </div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
          ))}
  )
        </div>

        {/* Features Section */}
  )
        <div className="mb-16">
        
          <div className="text-center mb-12">
        
            <h3 className="text-2xl font-bold text-white mb-4">Why We&apos;re the Right Choice</h3>
            <p>
          
              Our comprehensive solutions deliver measurable results across all key business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
  )
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
        
                  {feature.stats.map((stat, stat Index) => (
                    <div key={stat Index} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {stat}
  )
                    </div>
                  ))}
  )
                </div>
            ))}
  )
          </div>

        {/* Achievements Section */}
  )
        <div className="mb-16">
        
          <div className="text-center mb-12">
        
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
            <p>
          
              Recognition and awards that validate our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
        
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
            ))}
  )
          </div>

        {/* Benefits Section */}
  )
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
        
          <div className="text-center mb-8">
        
            <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Benefits</h3>
            <p>
          
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
  )
          </div>

        {/* CT A Section */}
  )
        <div className="text-center">
        
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
        
            <h3>
          
              Ready to Join Our Success Stories?
            </h3>
            <p>
          
              Be part of our growing community of successful businesses. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                View Case Studies
              </button>
            </div>
        </div>
    </div>
  )
}
  )
export default Content;; Statistics