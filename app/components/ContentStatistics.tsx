'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, Users, Globe, Database, Settings, Shield, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0
    satisfactio,
  n: 0,
    years: 0
    countrie,
  s: 0,)
    uptime: 0})
  const targetCounters = {

    clients: 1000,
    projects: 500
    satisfactio,
  n: 99,
    years: 10
    countrie,
  s: 25,
    uptime: 99.9}
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev }
        let allComplete = true)
        Object.keys(targetCounters).forEach(key => {
  const target = targetCounters[key as keyof typeof targetCounters]
          const current = prev[key as keyof typeof prev]
          const increment = target / steps)
          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment,
              target
            allComplete = false)
        })
        if (allComplete) {
          clearInterval(interval);
        return newCounters
      })
    }, stepDuration)
    return (
    <div>
    ) => clearInterval(interval)
  
  }, []
    
<<<<<<< HEAD
  )
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
    value: Math.round(counters.clients)
      labe,
  l: "Happy Clients",
    color: "from-blue-500 to-cyan-500"},</Users>
  {</Users>
    icon: <Target className="h-8 w-8" />,
    value: Math.round(counters.projects)
      labe,
  l: "Projects Completed",
    color: "from-green-500 to-emerald-500"},</Target>
  {</Target>
    icon: <Star className="h-8 w-8" />,
    value: `${Math.round(counters.satisfaction)}%`
      label: "Client Satisfaction",
    color: "from-yellow-500 to-orange-500"},</Star>
  {</Star>
    icon: <Clock className="h-8 w-8" />,
    value: Math.round(counters.years)
      labe,
  l: "Years Experience",
    color: "from-purple-500 to-pink-500"},</Clock>
  {</Clock>
    icon: <Globe className="h-8 w-8" />,
    value: Math.round(counters.countries)
      labe,
  l: "Countries Served",
    color: "from-indigo-500 to-blue-500"},</Globe>
  {</Globe>
    icon: <Zap className="h-8 w-8" />,
    value: `${Math.round(counters.uptime * 10) / 10}%`
      label: "Uptime Guarantee",
    color: "from-red-500 to-pink-500"}
  ]</Zap>
  return (</Zap>
    <>
    
  
      <Helmet></Helmet>
        <title>ContentStatistics</title>
        <meta name="description" content="Advanced ContentStatistics solution for modern businesses." /></meta>
        <meta name="keywords" content="AI, artificial intelligence, ContentStatistics, AI solutions, intelligent automation" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
            {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              ContentStatistics</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced ContentStatistics solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
              </button>
            
          ,
        </section>,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}</CheckCircle>
                      </li>
                    ))}
                  </ul>
                
              ))}
            
          
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                
                <div className="text-gray-300 text-lg">
                  {stat.label}
                
              
            
          
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Start Free Trial</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Contact Sales</button>
              </button>
            
          
        
      
    </section>,
  ),
}
 ContentStatisticsPage
clients: 0,
    projects: 0
satisfactio,
  n: 0,
    years: 0
countrie,
  s: 0,
    uptime: 0})
consttargetCounters= {clients: 1000 0,
    projects: 500 0
satisfactio,
  n: 9 9,
    years: 1 5
countrie,
  s: 5 0,
    uptime:99}
conststatistics= [
{icon: Users,
    value: counters.clients
labe,
  l: 'Happy Clients',
    suffix: '+',
color: 'text-blue-40 0',
    description: 'Businesses trust our solutions'},
  {
    icon: Award,
    value: counters.projects
labe,
  l: 'Projects Completed',
    suffix: '+',
color: 'text-purple-40 0',
    description: 'Successful implementations'},
  {
    icon: TrendingUp,
    value: counters.satisfaction
labe,
  l: 'Client Satisfaction',
    suffix: '%',
color: 'text-green-40 0',
    description: 'Customer satisfaction rate'},
  {
    icon: Clock,
    value: counters.years
labe,
  l: 'Years Experience',
    suffix: '+',
color: 'text-yellow-40 0',
    description: 'Industry expertise'},
  {
    icon: Globe,
    value: counters.countries
labe,
  l: 'Countries Served',
    suffix: '+',
color: 'text-cyan-40 0',
    description: 'Global presence'},
  {
    icon: BarChart3,
    value: counters.uptime
labe,
  l: 'Uptime Guarantee',
    suffix: '%',
color: 'text-red-40 0',
    description: 'Service reliability'}
]
constachievements= [
{icon: Brain,
    title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions'},
  {
    icon: Shield,
    title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'},
  {
    icon: Globe,
    title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    stats: ['5 0+ Countries', '1 5+ Languages', '2 4/7 Support']}
]
constbenefits= [
  'Advanced AI technology integration',
'Real-time processing and analytics',
'Enterprise-grade security and compliance',
'Scalable and flexible solutions',
'2 4/7 technical support',
'Easy integration with existing systems',
'Cost-effective pricing plans',
    'Proven track record of success'
  ]
constachievements= [
{icon: Star,
    title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider2024',
    value: '2 5+'},
  {
    icon: Target,
    title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
    value: '9 8%'},
  {
    icon: Rocket,
    title: 'Growth Rate',
      description: 'Year-over-year business growth',
    value: '30 0%'}
];
useEffect(() => {constduration= 300 0; // 3secondsconststeps= 60conststepDuration= duration / steps
consttimers= Object.keys(targetCounters).map((key) => {
consttarget= targetCounters[key as keyof type of targetCounters]
constduration=2000; // 2secondsconstincrement= target / (duration /16) //60fps
return setInterva l(() => {
setCounters(prev=> {
constcurrent= prev[key as keyof type of prev])
if(current< target) {
return {
...prev
[key]: Math.min(current + increment, target)}
}
return pre v
})
}, 1 6)
})
return (
<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
            <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-4"></h2>
Our Impact in Numbers
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
See how we've transformed businesses and delivered exceptional results.
<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">{/* Header */}
<div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
Our <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400to-purple-400">Impact</span> in Numbers
</h2>
<p className="text-xltext-gray-300max-w-3xlmx-auto">
            See how we've helped businesses transform with our AI and IT solutions.
          </p>p>,
,
{/* Statistics Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 l,
  g:grid-cols-4 gap-8 mb-16">{statistics.map((stat, index) => (
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
<div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
<stat.icon className="h-8 w-8 text-white" /></stat>


<div className={`text-3xl font-bold ${stat.color} mb-2`}>{Math.floor(stat.value)}{stat.suffix}div>
<div className="text-gray-300">{stat.label}

))}
</div>
{/* Achievements */}
<div className="grid grid-cols-1 md:grid-cols-2 l,
  g:grid-cols-4 gap-8">{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4"></div>
            <achievement.icon className="h-6 w-6 text-white" /></achievement>
</div>
<h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
<div className="grid grid-cols-1 md:grid-cols-2 l,
  g:grid-cols-3 gap-8 mb-16">{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300"></div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
            <stat.icon className="w-8 h-8 text-slate-900" /></stat>
</div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}{stat.suffix}</div>div>
<div className="text-lgfont-semiboldtext-whitemb-2">{stat.label}</div>
<div className="text-gray-400text-sm">{stat.description}</div>
</div>
))}
</div>
{/* Features Section */}
<div className="mb-16"></div>
            <div className="text-center mb-12"></div>
<h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the powerful features that make our solutions stand out.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 l,
  g:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"></div>
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
            <feature.icon className="w-6 h-6 text-white" /></feature>
</div>
<h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
<p className="text-gray-300 text-sm mb-4">{feature.description}</p>
<div className="space-y-2">{feature.stats.map((stat, statIndex) => (</div>
<div key={statIndex} className="flex items-center text-gray-300 text-sm"></div>
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
<span>{stat}</span>
</div>
))}
</div>
</div>
))}
</div>
</div>
{/* Achievements Section */}
<div className="mb-16"></div>
            <div className="text-center mb-12"></div>
<h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Recognition and milestones that showcase our commitment to excellence.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300"></div>
<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
            <achievement.icon className="w-8 h-8 text-white" /></achievement>
</div>
<div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
<h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
</div>
</div>
{/* Benefits Section */}
<div className="mb-16"></div>
            <div className="text-center mb-12"></div>
<h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the advantages that make our solutions the preferred choice.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 l,
  g:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
<div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300"></div>
<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircle>
<span className="text-gray-300">{benefit}</span>
</div>
))}
</div>
</div>
{/* CTA Section */}
<div className="text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"></div>
<h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></button>
<Zap className="w-5 h-5" /></Zap>
Get Started Today</Zap>
</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
  r:bg-white/10 transition-colors duration-200"></button>
View Case Studies
</div>
</div>
</div>
</div>
</div>
)
=======
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-996d
};

export default ContentStatistics;