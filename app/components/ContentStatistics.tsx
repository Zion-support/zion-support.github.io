'use client'
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const ContentStatisticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>ContentStatistics</title>
        <meta name="description" content="Advanced ContentStatistics solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentStatistics, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentStatistics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentStatistics solution for modern businesses.
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

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
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
  );
};

export default ContentStatisticsPage;
=======
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react'
import { Zap } from 'lucide-react'

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
},
{
icon: Globe,
title: 'Global Reach',
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
})
return () => {
timers.forEach(timer => clearInterval(timer))
}
}, [])
return (
<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<<<<<<< HEAD
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
Our Impact in Numbers
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
See how we've transformed businesses and delivered exceptional results.
=======
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've transformed businesses and delivered exceptional results.</p>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
<div className="max-w-7xl mx-auto">{/* Header */}</div>
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've helped businesses transform with our AI and IT solutions.</p>p>
</div>
{/* Statistics Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
<div className="flex justify-center mb-4">
<div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
<stat.icon className="h-8 w-8 text-white" />
</div>
</div>
<div className={`text-3xl font-bold ${stat.color} mb-2`}>{Math.floor(stat.value)}{stat.suffix}</div>div>
<div className="text-gray-300">{stat.label}</div>
</div>
))}
</div>
{/* Achievements */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
<achievement.icon className="h-6 w-6 text-white" />
</div>
<h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
<stat.icon className="w-8 h-8 text-slate-900" />
</div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}{stat.suffix}</div>div>
<div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
<div className="text-gray-400 text-sm">{stat.description}</div>
</div>
))}
</div>
{/* Features Section */}
<div className="mb-16">
<div className="text-center mb-12">
<h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the powerful features that make our solutions stand out.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
<feature.icon className="w-6 h-6 text-white" />
</div>
<h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
<p className="text-gray-300 text-sm mb-4">{feature.description}</p>
<div className="space-y-2">{feature.stats.map((stat, statIndex) => (</div>
<div key={statIndex} className="flex items-center text-gray-300 text-sm">
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
<span>{stat}</span>
</div>
))}
</div>
</div>
))}
</div>
</div>
{/* Achievements Section */}
<div className="mb-16">
<div className="text-center mb-12">
<h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Recognition and milestones that showcase our commitment to excellence.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
<achievement.icon className="w-8 h-8 text-white" />
</div>
<div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
<h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
</div>
</div>
{/* Benefits Section */}
<div className="mb-16">
<div className="text-center mb-12">
<h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the advantages that make our solutions the preferred choice.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
<div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
<span className="text-gray-300">{benefit}</span>
</div>
))}
</div>
</div>
{/* CTA Section */}
<div className="text-center">
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
<h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></button>
<Zap className="w-5 h-5" />
Get Started Today
</button>
<<<<<<< HEAD
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"></button>
View Case Studies
=======
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">View Case Studies</button>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
</div>
</div>
</div>
</div>
</div>
)
}
export default ContentStatistics
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
