'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react'
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
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      stats: ['95% Accuracy', '10x Faster', '24/7 Learning']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      stats: ['< 100ms Response', '99.9% Uptime', '10M+ Requests']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']
    },
    {
      icon: Globe,
      title: 'Global Reach',
description: 'Worldwide deployment and support for international businesses',
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
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60
    const stepDuration = duration / steps
    const timers = Object.keys(targetCounters).map((key) => {
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
          return prev
        })
      }, 16)
      const increment = target / steps
      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
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
  return (
    <div> </div><div> </div><div> </div><h2>Our Impact in Numbers>
          </h2><p>See how we've transformed businesses and delivered exceptional results.
    </p><div> </div><div>{/* Header */}
        </div><div> </div><h2>Our </h2><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p>See how we've helped businesses transform with our AI and IT solutions.
          </p></p>
        </div>
        {/* Statistics Grid */}
<div>{statistics.map((stat, index) => (
            </div><div> </div><div> </div><div> </div><stat> </stat></div>
              </div>
              <div>{Math.floor(stat.value)}{stat.suffix}
              </div></div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Achievements */}
        <div>{achievements.map((achievement, index) => (
            </div><div> </div><div> </div><achievement> </achievement></div>
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        <div>{statistics.map((stat, index) => (
            </div><div> </div><div> </div><stat> </stat></div>
              <div>{stat.value}{stat.suffix}
              </div></div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
        {/* Features Section */}
        <div> </div><div> </div><h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <p>Discover the powerful features that make our solutions stand out.
            </p></p>
          </div>
          <div> </div><div>{features.map((feature, index) => (
              </div><div> </div><div> </div><feature> </feature></div>
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div>{feature.stats.map((stat, statIndex) => (
                    </div><div> </div><CheckCircle> </CheckCircle><span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements Section */}
        <div> </div><div> </div><h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p>Recognition and milestones that showcase our commitment to excellence.
            </p></p>
          </div>
          <div> </div><div>{achievements.map((achievement, index) => (
              </div><div> </div><div> </div><achievement> </achievement></div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Benefits Section */}
        <div> </div><div> </div><h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <p>Discover the advantages that make our solutions the preferred choice.
            </p></p>
          </div>
          <div> </div><div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div> </div><div> </div><h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p>Join thousands of satisfied customers and transform your business today.
            </p></p>
            <div> </div><button> </button><Zap>Get Started Today
              </Zap></button>
              <button>View Case Studies>
              </button><button> </button><ArrowRight>Learn More
              </ArrowRight></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentStatistics
  </button>
  </h2>
  </div>