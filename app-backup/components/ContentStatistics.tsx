import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
'use client'
const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0
    satisfactio,
  n: 0,
    years: 0
    countrie,
  s: 0,
    uptime: 0})
  const targetCounters = $2;
constachievements= [
{icon: Star,
    title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider2024',
    value: '2 5+'}
{icon: Target,
    title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
    value: '9 8%'}
{icon: Rocket,
    title: 'Growth Rate',
      description: 'Year-over-year business growth',
    value: '30 0%'}
]
useEffect(() => {constduration= 300 0; // 3secondsconststeps= 60conststepDuration= duration / steps
consttimers= Object.keys(targetCounters).map((key) => {
consttarget= targetCounters[key as keyof type of targetCounters]
constduration=2000; // 2secondsconstincrement= target / (duration /16) //60fps
return setInterva l(() => {
setCounters(prev=> {
constcurrent= prev[key as keyof type of prev]
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
    <div>
      ) =>{timers.forEach(timer=> clearInterval(timer))}
}, []
    </>
  )
return (
<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm: px-6 lg:px-8"></div>
<div className="max-w-7xl mx-auto"></div>
<div className="text-center mb-16"></div>
<h2 className="text-3xl m,
  d: text-4xl font-bold text-white mb-4"></h2>
Our Impact in Numbers
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
See how we've transformed businesses and delivered exceptional results.
<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
<div className="max-w-7xl mx-auto">{/* Header */}</div>
<div className="text-center mb-16"></div>
<h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've helped businesses transform with our AI and IT solutions.</p>p>
</div>
{/* Statistics Grid */}
<div className="grid grid-cols-1 md: grid-cols-2 l,
  g:grid-cols-4 gap-8 mb-16">{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"></div>
<div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center"></div>
<stat.icon className="h-8 w-8 text-white" />
</div>
<div className={`text-3xl font-bold ${stat.color} mb-2`}>{Math.floor(stat.value)}{stat.suffix}</div>div>
<div className="text-gray-300">{stat.label}</div>
))}
</div>
{/* Achievements */}
<div className="grid grid-cols-1 md: grid-cols-2 l,
  g:grid-cols-4 gap-8">{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4"></div>
<achievement.icon className="h-6 w-6 text-white" />
</div>
<h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
<div className="grid grid-cols-1 md: grid-cols-2 l,
  g:grid-cols-3 gap-8 mb-16">{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300"></div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
<stat.icon className="w-8 h-8 text-slate-900" />
</div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}{stat.suffix}</div>div>
<div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
<div className="text-gray-400 text-sm">{stat.description}</div>
))}
</div>
{/* Features Section */}
<div className="mb-16">
            <div className="text-center mb-12"></div>
<h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the powerful features that make our solutions stand out.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 l,
  g:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300"></div>
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
<feature.icon className="w-6 h-6 text-white" />
</div>
<h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
<p className="text-gray-300 text-sm mb-4">{feature.description}</p>
<div className="space-y-2">{feature.stats.map((stat, statIndex) => (</div>
<div key={statIndex} className="flex items-center text-gray-300 text-sm"></div>
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
<span>{stat}</span>
</div>
))}
</div>
))}
</div>
{/* Achievements Section */}
<div className="mb-16">
            <div className="text-center mb-12"></div>
<h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Recognition and milestones that showcase our commitment to excellence.</p>p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300"></div>
<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
<achievement.icon className="w-8 h-8 text-white" />
</div>
<div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
<h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
</div>
{/* Benefits Section */}
<div className="mb-16">
            <div className="text-center mb-12"></div>
<h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the advantages that make our solutions the preferred choice.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 l,
  g:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
<div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover: bg-white/10 transition-all duration-300"></div>
<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
<span className="text-gray-300">{benefit}</span>
</div>
))}
</div>
{/* CTA Section */}
<div className="text-center"></div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"></div>
<h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>p>
<div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
<button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></button>
<Zap className="w-5 h-5" />
Get Started Today
</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
  r: bg-white/10 transition-colors duration-200"></button>
View Case Studies
</div>
</div>
)
}
export default ContentStatistics