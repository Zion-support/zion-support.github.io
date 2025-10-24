'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">Numbers that speak for our success and reliability</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentStatistics
