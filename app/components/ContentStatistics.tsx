'use client'
import React, { useState, useEffect } from 'react'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  })

  useEffect(() => {
    const targetCounters = {
      clients: 500,
      projects: 1000,
      satisfaction: 99,
      years: 10
    }

    const duration = 2000; // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const animateCounters = () => {
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        
        setCounters({
          clients: Math.floor(targetCounters.clients * progress),
          projects: Math.floor(targetCounters.projects * progress),
          satisfaction: Math.floor(targetCounters.satisfaction * progress),
          years: Math.floor(targetCounters.years * progress)
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targetCounters)
        }
      }, stepDuration)
    }

    animateCounters()
  }, [])

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+'
    },
    {
      icon: TrendingUp,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+'
    },
    {
      icon: Award,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional results through innovative AI solutions and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;