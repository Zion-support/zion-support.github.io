"use client"
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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
    const animateCounters = () => {
      Object.keys(targetCounters).forEach(key => {
        const target = targetCounters[key as keyof typeof targetCounters]
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }))
        }, 16)
      })
    }

    animateCounters()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Content Statistics - Zion Tech Group</title>
        <meta name="description" content="View our content statistics and performance metrics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Numbers that tell the story of our success and growth
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  {counters.clients}+
                </div>
                <div className="text-gray-300 text-lg">Happy Clients</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {counters.projects}+
                </div>
                <div className="text-gray-300 text-lg">Projects Completed</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-300 text-lg">Client Satisfaction</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {counters.years}+
                </div>
                <div className="text-gray-300 text-lg">Years Experience</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  {counters.countries}+
                </div>
                <div className="text-gray-300 text-lg">Countries Served</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {counters.uptime}%
                </div>
                <div className="text-gray-300 text-lg">Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default ContentStatistics