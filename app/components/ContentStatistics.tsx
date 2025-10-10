'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  })

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  }

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
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
  ];
  const achievements = [
    {
      icon: Brain,
    },
    {
      icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response'
    }
  ]

  useEffect(() => {
    const timers = Object.keys(targetCounters).map(key => {
      const target = targetCounters[key as keyof typeof targetCounters]
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      return setInterval(() => {
        setCounters(prev => {
          const current = prev[key as keyof typeof prev]
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            }
          }
          return prev;
        })
      }, 16);
    })

    return () => {
      timers.forEach(timer => clearInterval(timer));
    }
=======
    };

    // Start animations with slight delays
    Object.keys(targetCounters).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });
>>>>>>> cursor/analyze-improve-and-deploy-application-bc7b
  }, []);

  return (
          </p>
        </div>

        {/* Statistics Grid */}
            </div>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;