'use client'

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const ContentStatistics: React.FC = () => ,{,
  const [counters, setCounters] = useState(
  {
)
    clients:  ,0,
    projects:  ,0,
    satisfaction:  ,0,
    years: 0;
  },)
    clients: 100,0,
    projects: 50,0;
    satisfactio,
  n: 9,9,
    years: 1,0;
    countrie,
  s: 2,5,
    uptime: 99.9};useEffect(() => {
    const duration = 2000;
    const duration = 2000; // 2 seconds;
    const steps = 60;
    const stepDuration = duration / steps;
const steps = 60;
const stepDuration = duration / steps;
const interval = setInterval(() => {
      setCounters(
  prev => {
)
        const newCounters={ ...prev };let allComplete = true)
        Object.keys(targetCounters).forEach(
  key => {
)
  const target = targetCounters[key as keyof typeof targetCounters]
          const current = prev[key as keyof typeof prev]
          const increment = target / steps)
          if(current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
  
)
              current + increment,
              target;
            allComplete = false)
        })
        if(allComplete) {
          clearInterval(interval)
        }

}

        <><div className="mt-16 text-center" />
    </di>
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20" />
    </di><h3 className="text-2xl font-bold text-white mb-4">
    </h>
              Ready to Join Our Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Let us help you achieve similar results with our proven expertise and innovative solutions</p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hoverfrom-cyan-600 hoverto-purple-600 transition-all duration-300">
    </butto>
              Get Started Today  <ArrowRight className="w-5 h-5 ml-2" />
    </ArrowRight>
            </button>            </div>
        </section>
        / CTA Section /
        <section className="py-20 px-4" />
    </section><div className="max-w-4xl mx-auto text-center" />
    </di><h2 className="text-4xl font-bold text-white mb-6">
    </h>Ready to Transform Your Business</h2>
            <pJoin thousands of businesses already using our AI solutions</p />
    </pJoin><div className="flex flex-col sm flex-row gap-4 justify-center" />
    </di><button className="bg-emerald-600 hover bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>
                Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>
                Contact Sales</button>
              </div>
export default ContentStatistics</>
export default ContentStatisticsPage clients 0 projects 0 satisfaction 0 years 0 countries 0 uptime 0 consttargetCounters= clients 1000 0 projects 500 0 satisfaction 9 9 years 1 5 countries 5 0 uptime99 conststatistics= 
icon Users value countersclients label 'Happy Clients'
    suffix ''
color 'text-blue-40 0'
    description 'Businesses trust our solutions'
    icon Award value countersprojects label 'Projects Completed'
    suffix ''
color 'text-purple-40 0'
    description 'Successful implementations'
    icon TrendingUp value counterssatisfaction label 'Client Satisfaction'
    suffix ''
color 'text-green-40 0'
    description 'Customer satisfaction rate'
    icon Clock value countersyears label 'Years Experience'
    suffix ''
color 'text-yellow-40 0'
    description 'Industry expertise'
    icon Globe value counterscountries label 'Countries Served'
    suffix ''
color 'text-cyan-40 0'
    description 'Global presence'
    icon BarChart3 value countersuptime label 'Uptime Guarantee'
    suffix ''
color 'text-red-40 0'
    description 'Service reliability'
constachievements= 
icon Brain title 'AI Innovation'
      description 'Leading the industry in AI-powered solutions'
    icon Shield title 'Security Excellence'
      description 'Bank-level security for all our solutions'
    icon Globe title 'Global Reach'
      description 'Worldwide deployment and support for international businesses'
    stats '5 0 Countries' '1 5 Languages' '2 4/7 Support'
constbenefits= 
  'Advanced AI technology integration'
'Real-time processing and analytics'
'Enterprise-grade security and compliance'
'Scalable and flexible solutions'
'2 4/7 technical support'
'Easy integration with existing systems'
'Cost-effective pricing plans'
    'Proven track record of success'
constachievements= 
icon Star title 'Industry Recognition'
      description 'Awarded Best AI Solutions Provider2024'
    value '2 5'
    icon Target title 'Success Rate'
      description 'Projects delivered on time and within budget'
    value '9 8'
    icon Rocket title 'Growth Rate'
      description 'Year-over-year business growth'
    value '30 0'
consttimers= Object.keys(targetCounters).map((key) => {
consttarget= targetCounters[key as keyof type of targetCounters]
constduration=2000; // 2secondsconstincrement= target / (duration /16) //60fps;
return setInterva l(() => {
setCounters(
  prev=> {
)
constcurrent= prev[key as keyof type of prev]
if(current< target) {
return {
...prev;
[key]: Math.min(current + increment, target)}

}

return pre v;
})
}, 1 6)
})
return (
  <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm: px-6 lg:px-8">
    </di>
            <div className="max-w-7xl mx-auto">
    </di>
        <div className="text-center mb-16">
    </di> </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
    </h>,,
)
Our Impact in Numbers;
</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've transformed businesses and delivered exceptional results.
</p><div{/* Header */}</div>
    </di>
<div className="text-center mb-16">
    </di> </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
    </h>,,
Our </h2><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
    </spa>Impact</span> in Numbers;
</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've helped businesses transform with our AI and IT solutions.</p>p>
</div>
{/* Statistics Grid */}

<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
    </di>{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
    </di>
        <div className="flex justify-center mb-4">
    </di> </div><div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
    </di>
</div><stat.icon className="h-8 w-8 text-white" />
    </sta>
</stat></div>
</div>
<div className={`text-3xl font-bold ${stat.color} mb-2`}>
    </di>{Math.floor(stat.value)}{stat.suffix}</div>div>
<div className="text-gray-300">
    </di>{stat.label}</div>
</div>
))}

</div>
{/* Achievements */}

<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
    </di>{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300">
    </di>
</div><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
    </di> </div><achievement.icon className="h-6 w-6 text-white" />
    </achievemen>
</achievement></div>
<h3 className="text-xl font-semibold text-white mb-2">
    </h>{achievement.title}</h3>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}

<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    </di>{statistics.map((stat, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300">
    </di>
</div><div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
    </di> </div><stat.icon className="w-8 h-8 text-slate-900" />
    </sta>
</stat></div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}>
    </di>{stat.value}{stat.suffix}</div>div>
<div className="text-lg font-semibold text-white mb-2">
    </di>{stat.label}</div>
<div className="text-gray-400 text-sm">
    </di>{stat.description}</div>
</div>
))}

</div>
{/* Features Section */}

<div className="mb-16">
    </di>
        <div className="text-center mb-12">
    </di>
</div><h3 className="text-2xl font-bold text-white mb-4">
    </h>Key Features</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the powerful features that make our solutions stand out.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
    </di>{features.map((feature, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300">
    </di>
</div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
    </di> </div><feature.icon className="w-6 h-6 text-white" />
    </featur>
</feature></div>
<h4 className="text-lg font-semibold text-white mb-3">
    </h>{feature.title}</h4>
<p className="text-gray-300 text-sm mb-4">{feature.description}</p>
<div className="space-y-2">
    </di>{feature.stats.map((stat, statIndex) => (</div>
<div key={statIndex} className="flex items-center text-gray-300 text-sm">
    </di>
</div><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
    </CheckCircl>
</CheckCircle><span>
    </spa>{stat}</span>
</div>
))}

</div>
</div>
))}

</div>
</div>
{/* Achievements Section */}

<div className="mb-16">
    </di>
        <div className="text-center mb-12">
    </di>
</div><h3 className="text-2xl font-bold text-white mb-4">
    </h>Our Achievements</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Recognition and milestones that showcase our commitment to excellence.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">
    </di>{achievements.map((achievement, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300">
    </di>
</div><div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
    </di> </div><achievement.icon className="w-8 h-8 text-white" />
    </achievemen>
</achievement></div>
<div className="text-3xl font-bold text-white mb-2">
    </di>{achievement.value}</div>
<h4 className="text-lg font-semibold text-white mb-2">
    </h>{achievement.title}</h4>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}

</div>
</div>
{/* Benefits Section */}

<div className="mb-16">
    </di>
        <div className="text-center mb-12">
    </di>
</div><h3 className="text-2xl font-bold text-white mb-4">
    </h>Why Choose Us?</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the advantages that make our solutions the preferred choice.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
    </di>{benefits.map((benefit, index) => (</div>
<div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover: bg-white/10 transition-all duration-300">
    </di>
</div><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
    </CheckCircl>
</CheckCircle><span className="text-gray-300">
    </spa>{benefit}</span>
</div>
))}

</div>
</div>
{/* CTA Section */}

<div className="text-center">
    </di>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
    </di>
</div><h3 className="text-3xl font-bold text-white mb-4">
    </h>Ready to Get Started?</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>p>
<div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover: scale-105 flex items-center justify-center gap-2">
    </butto>
</button><Zap className="w-5 h-5" />
    </Za>Get Started Today;
</Zap></button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white/10 transition-colors duration-200">
    </butto>,,
View Case Studies;
</button></div>
</div>
</div>
</div>
</div>
)
}

export default ContentStatistics;