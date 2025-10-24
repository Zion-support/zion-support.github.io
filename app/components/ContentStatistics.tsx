'use client'
import React, { useState, useEffect } from 'react'
import { Users, Globe, Database, Settings, Shield, Zap } from 'lucide-react'

interface Statistic {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: number
  suffix: string
}

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    dataProcessed: 0,
    uptime: 0,
    security: 0
  })

  const statistics: Statistic[] = [
    {
      icon: Users,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+"
    },
    {
      icon: Database,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+"
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: counters.countries,
      suffix: ""
    },
    {
      icon: Database,
      label: "Data Processed",
      value: counters.dataProcessed,
      suffix: "TB"
    },
    {
      icon: Settings,
      label: "Uptime",
      value: counters.uptime,
      suffix: "%"
    },
    {
      icon: Shield,
      label: "Security Score",
      value: counters.security,
      suffix: "%"
    }
  ]

  useEffect(() => {
    const targetValues = {
      clients: 500,
      projects: 1000,
      countries: 25,
      dataProcessed: 50,
      uptime: 99,
      security: 100
    }

    const animateCounters = () => {
      const steps = 60
      const stepDuration = 2000 / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          clients: Math.round(targetValues.clients * progress),
          projects: Math.round(targetValues.projects * progress),
          countries: Math.round(targetValues.countries * progress),
          dataProcessed: Math.round(targetValues.dataProcessed * progress),
          uptime: Math.round(targetValues.uptime * progress),
          security: Math.round(targetValues.security * progress)
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)
    }

    animateCounters()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. See the numbers that make us the preferred choice for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentStatistics