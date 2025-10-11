<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { Users, Award, Globe, Zap } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react'
import { Users, Award, TrendingUp, Clock, Brain, Globe, Zap, Shield } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
<<<<<<< HEAD
    countries: 0,
    years: 0
  });

=======
    satisfaction: 0,
    years: 0
  })

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
<<<<<<< HEAD
      suffix: '+'
=======
      suffix: '+',
      color: 'text-cyan-400'
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
<<<<<<< HEAD
      suffix: '+'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+'
    },
    {
      icon: Zap,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+'
=======
      suffix: '+',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400'
    }
  ]

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions and cutting-edge technology'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Enterprise-grade security with 100% compliance record'
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
    }
  ]

  useEffect(() => {
<<<<<<< HEAD
    const targetValues = {
      clients: 1000,
      projects: 5000,
      countries: 50,
      years: 10
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        clients: Math.floor(targetValues.clients * progress),
        projects: Math.floor(targetValues.projects * progress),
        countries: Math.floor(targetValues.countries * progress),
        years: Math.floor(targetValues.years * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);
=======
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters]
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timers[0])
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }))
      }, stepDuration)
    })

    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm py-16 px-4">
      <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
=======
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            Our numbers speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
=======

        {/* Achievements Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default ContentStatistics;
=======
export default ContentStatistics
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
