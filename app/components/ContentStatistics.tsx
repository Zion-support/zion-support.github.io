'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react'
const ContentStatistics: React.FC = () =>{
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  })
  const targetCounters = {
    clients: 10000,
    projects: 5000,
    satisfaction: 99,
    years: 15,
    countries: 50,
    uptime: 99
  }
  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-blue-400',
      description: 'Businesses trust our solutions'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
      description: 'Successful implementations'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customer satisfaction rate'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',
      description: 'Industry expertise'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Global presence'
    },
    {
      icon: BarChart3,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-red-400',
      description: 'Service reliability'
    }
  ]
  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
description: 'Worldwide deployment and support for international businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']
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
  useEffect(() =>{
    const duration = 3000; // 3 seconds
    const steps = 60
    const stepDuration = duration / steps
    const timers = Object.keys(targetCounters).map((key) =>{
      const target = targetCounters[key as keyof typeof targetCounters]
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      return setInterval(() =>{
setCounters(prev =>{
          const current = prev[key as keyof typeof prev]
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            }
          }
          return prev
        })
      }, 16)
    })
    return () =>{
      timers.forEach(timer =>clearInterval(timer))
    }
  }, [])
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers></p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've transformed businesses and delivered exceptional results.
          </p&gt; </div>{/* Statistics Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{statistics.map((stat, index) =>(
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div&gt; </div&gt; <div className={`text-3xl font-bold ${stat.color} mb-2`}>{Math.floor(stat.value)}{stat.suffix}
              </div&gt; <div className="text-gray-300">{stat.label}</div&gt; </div>))}
        </div>{/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{achievements.map((achievement, index) =>(
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <achievement.icon className="h-6 w-6 text-white" />
              </div&gt; <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3&gt; <p className="text-gray-300 text-sm">{achievement.description}</p&gt; </div>))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">{statistics.map((stat, index) =>(
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group">
              <div className={`w-16 h-16 ${stat.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div&gt; <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value.toLocaleString()}{stat.suffix}
              </div&gt; <div className="text-lg font-semibold text-white mb-2">{stat.label}</div&gt; <div className="text-gray-400 text-sm">{stat.description}</div&gt; </div>))}
        </div>{/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We're the Right Choice</h3&gt; <p className="text-gray-300 max-w-3xl mx-auto">Our comprehensive solutions deliver measurable results across all key business metrics.
            </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) =>(
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div&gt; <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{feature.title}
                </h4&gt; <p className="text-gray-300 text-sm mb-4">{feature.description}</p&gt; <div className="space-y-2">{feature.stats.map((stat, statIndex) =>(
                    <div key={statIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />{stat}
                    </div>))}
                </div&gt; </div>))}
          </div&gt; </div>{/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3&gt; <p className="text-gray-300 max-w-3xl mx-auto">Recognition and awards that validate our commitment to excellence and innovation.
            </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{achievements.map((achievement, index) =>(
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div&gt; <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div&gt; <div className="text-lg font-semibold text-white mb-2">{achievement.title}</div&gt; <div className="text-gray-400 text-sm">{achievement.description}</div&gt; </div>))}
          </div&gt; </div>{/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Benefits</h3&gt; <p className="text-gray-300 max-w-3xl mx-auto">Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) =>(
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span&gt; </div>))}
          </div&gt; </div>{/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?
            </h3&gt; <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Be part of our growing community of successful businesses. Start your transformation journey today.
            </p&gt; <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span&gt;Get Started</span&gt; </button&gt; <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">View Case Studies><//div&gt; </div&gt; </div&gt; </div&gt; </div>)
}
export default ContentStatistics></button&gt; </h2&gt; </div>