'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

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
    }
  ]

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters]
      const increment = target / steps
      let current = 0
let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps;
      
setCounters({
        clients: Math.floor(targetValues.clients * progress),
        projects: Math.floor(targetValues.projects * progress),
        countries: Math.floor(targetValues.countries * progress),
        years: Math.floor(targetValues.years * progress)
      })

      if (currentStep >= steps) {clearInterval(timer);
        setCounters(targetValues)}
    }, stepDuration);

    return () => clearInterval(timer)
  }, []);
return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target;
          clearInterval(timers[0])
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        })
      }, stepDuration)
    })

    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])
const ContentStatisticsPage: React.FC = () => {
  return (
<></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ContentStatistics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>

              </div>
<div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
<div className="text-gray-300 text-lg">{stat.label}</div>
</div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
<Footer />
    </>

  )
};

export default ContentStatisticsPage;

)
}

export default ContentStatistics;