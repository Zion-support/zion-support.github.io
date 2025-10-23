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
<div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8&quot;></div>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
Our Impact in Numbers

<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
See how we've transformed businesses and delivered exceptional results.
<div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
{/* Header */}
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Impact</span> in Numbers
</h2>
<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
See how we've helped businesses transform with our AI and IT solutions.
</p>
</div>
{/* Statistics Grid */}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16&quot;></div>
{statistics.map((stat, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center&quot;></div>
<div className=&quot;flex justify-center mb-4&quot;></div>
<div className=&quot;bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center&quot;></div>
<stat.icon className=&quot;h-8 w-8 text-white&quot; />
</div>
</div>
<div className={`text-3xl font-bold ${stat.color} mb-2`}></div>
{Math.floor(stat.value)}{stat.suffix}
</div>
<div className=&quot;text-gray-300&quot;>{stat.label}</div>
</div>
))}
</div>
{/* Achievements */}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
{achievements.map((achievement, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4&quot;></div>
<achievement.icon className=&quot;h-6 w-6 text-white&quot; />
</div>
<h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{achievement.title}</h3>
<p className=&quot;text-gray-300 text-sm&quot;>{achievement.description}</p>
</div>
))}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;></div>
{statistics.map((stat, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
<stat.icon className=&quot;w-8 h-8 text-slate-900&quot; />
</div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}></div>
{stat.value}{stat.suffix}
</div>
<div className=&quot;text-lg font-semibold text-white mb-2&quot;>{stat.label}</div>
<div className=&quot;text-gray-400 text-sm&quot;>{stat.description}</div>
</div>
))}
</div>
{/* Features Section */}
<div className=&quot;mb-16&quot;></div>
<div className=&quot;text-center mb-12&quot;></div>
<h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Key Features</h3>
<p className=&quot;text-gray-300 max-w-2xl mx-auto&quot;>
Discover the powerful features that make our solutions stand out.
</p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
{features.map((feature, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4&quot;></div>
<feature.icon className=&quot;w-6 h-6 text-white&quot; />
</div>
<h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>{feature.title}</h4>
<p className=&quot;text-gray-300 text-sm mb-4&quot;>{feature.description}</p>
<div className=&quot;space-y-2&quot;></div>
{feature.stats.map((stat, statIndex) => (
<div key={statIndex} className=&quot;flex items-center text-gray-300 text-sm&quot;></div>
<CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
<span>{stat}</span>
</div>
))}
</div>
</div>
))}
</div>
</div>
{/* Achievements Section */}
<div className=&quot;mb-16&quot;></div>
<div className=&quot;text-center mb-12&quot;></div>
<h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Our Achievements</h3>
<p className=&quot;text-gray-300 max-w-2xl mx-auto&quot;>
Recognition and milestones that showcase our commitment to excellence.
</p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
{achievements.map((achievement, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
<achievement.icon className=&quot;w-8 h-8 text-white&quot; />
</div>
<div className=&quot;text-3xl font-bold text-white mb-2&quot;>{achievement.value}</div>
<h4 className=&quot;text-lg font-semibold text-white mb-2&quot;>{achievement.title}</h4>
<p className=&quot;text-gray-300 text-sm&quot;>{achievement.description}</p>
</div>
))}
</div>
</div>
{/* Benefits Section */}
<div className=&quot;mb-16&quot;></div>
<div className=&quot;text-center mb-12&quot;></div>
<h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Why Choose Us?</h3>
<p className=&quot;text-gray-300 max-w-2xl mx-auto&quot;>
Discover the advantages that make our solutions the preferred choice.
</p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
{benefits.map((benefit, index) => (
<div key={index} className=&quot;flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300&quot;></div>
<CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
<span className=&quot;text-gray-300&quot;>{benefit}</span>
</div>
))}
</div>
</div>
{/* CTA Section */}
<div className=&quot;text-center&quot;></div>
<div className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-12&quot;></div>
<h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Get Started?</h3>
<p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
Join thousands of satisfied customers and transform your business today.
</p>
<div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
<button className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;>
<Zap className=&quot;w-5 h-5&quot; />
Get Started Today
</button>
<button className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200&quot;>
View Case Studies

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