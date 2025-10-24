'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Users, Star, Clock, Globe, Zap } from 'lucide-react';;
import Navigation from './Navigation'
import Footer from './Footer'

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

  return (
    <>
      <Helmet>
        <title>Content Statistics</title>
        <meta name="description" content="Advanced Content Statistics solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentStatistics, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Content Statistics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced Content Statistics solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak for themselves
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ContentStatistics