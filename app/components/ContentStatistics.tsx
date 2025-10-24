'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, Briefcase, Star, Globe, Shield, Zap } from 'lucide-react'

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
    countries: 50,
    uptime: 99.9
  }

  const animateCounter = (key: keyof typeof targetCounters, duration: number = 2000) => {
    const start = 0
    const end = targetCounters[key]
    const steps = 60
    const stepDuration = duration / steps
    const increment = (end - start) / steps

    let current = start
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(interval)
      }
      setCounters(prev => ({ ...prev, [key]: Math.round(current) }))
    }, stepDuration)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      Object.keys(targetCounters).forEach((key, index) => {
        setTimeout(() => {
          animateCounter(key as keyof typeof targetCounters)
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const statistics = [
    {
      icon: Users,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      label: "Client Satisfaction",
      value: counters.satisfaction,
      suffix: "%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: counters.countries,
      suffix: "+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      label: "Uptime",
      value: counters.uptime,
      suffix: "%",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      label: "Years Experience",
      value: counters.years,
      suffix: "+",
      color: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <div>
      <Helmet>
        <title>Statistics - Zion Tech Group</title>
        <meta name="description" content="Our impressive statistics and achievements." />
      </Helmet>
      
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the impressive statistics that showcase our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentStatistics