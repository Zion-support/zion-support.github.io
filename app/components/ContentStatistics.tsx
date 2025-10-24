'use client';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ContentStatistics: React.FC = () => {
  const [counter, s, setCounters] = useState({
    clients:  ,0,
    projects:  ,0,
    satisfaction:  ,0,
    years:  ,0,
    countries:  ,0,
    uptime: 0
 ,
})

  const targetCounters={clients: 100,
      0,
    projects: 50,
      0,
    satisfaction: 9,
      9,
    years: 1,
      0,
    countries: 2,
      5,
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
    <>
      
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
;
export default ContentStatisticsPage;
clients: 0,
projects: 0,
satisfaction: 0,
years: 0,
countries: 0,
uptime: 0});"
consttargetCounters="{clients: " 1000 0,
projects: 500 0,
satisfaction: 9 9,
years: 1 5,}
countries: 5 0,}
uptime:99}
conststatistics="["
{icon: Users,
value: counters.clients,
label: 'Happy Clients',
suffix: '+',}
color: 'text-blue-40 0',}
description: 'Businesses trust our solutions'},
{icon: Award,
value: counters.projects,
label: 'Projects Completed',
suffix: '+',}
color: 'text-purple-40 0',}
description: 'Successful implementations'},
{icon: TrendingUp,
value: counters.satisfaction,
label: 'Client Satisfaction',
suffix: '%',}
color: 'text-green-40 0',}
description: 'Customer satisfaction rate'},
{icon: Clock,
value: counters.years,
label: 'Years Experience',
suffix: '+',}
color: 'text-yellow-40 0',}
description: 'Industry expertise'},
{icon: Globe,
value: counters.countries,
label: 'Countries Served',
suffix: '+',}
color: 'text-cyan-40 0',}
description: 'Global presence'},
{icon: BarChart3,
value: counters.uptime,
label: 'Uptime Guarantee',
suffix: '%',}
color: 'text-red-40 0',}
description: 'Service reliability'}
];"
constachievements="["
{icon: Brain,}
title: 'AI Innovation',}
description: 'Leading the industry in AI-powered solutions'},
{icon: Shield,}
title: 'Security Excellence',}
description: 'Bank-level security for all our solutions'},
{icon: Globe,
title: 'Global Reach',}
description: 'Worldwide deployment and support for international businesses',}
stats: ['5 0+ Countries', '1 5+ Languages', '2 4/7 Support']}
];"
constbenefits="["
'Advanced AI technology integration',
'Real-time processing and analytics',
'Enterprise-grade security and compliance',
'Scalable and flexible solutions',
'2 4/7 technical support',
'Easy integration with existing systems',
'Cost-effective pricing plans',
'Proven track record of success'
];"
constachievements="["
{icon: Star,
title: 'Industry Recognition',}
description: 'Awarded Best AI Solutions Provider2024',}
value: '2 5+'},
{icon: Target,
title: 'Success Rate',}
description: 'Projects delivered on time and within budget',}
value: '9 8%'},
{icon: Rocket,
title: 'Growth Rate',}
description: 'Year-over-year business growth',}
value: '30 0%'}
];"
useEffect(() => {constduration="300" 0; // 3secondsconststeps="60conststepDuration=" duration / steps;"
consttimers="Object.keys(targetCounters).map((key)" => {
;  "
consttarget="targetCounters[key" as keyof type of targetCounters];"
constduration="2000;" // 2secondsconstincrement="target" / (duration /16); //60fps;
return setInterva l(() => {
;  
setCounters(prev=> {
;  "
constcurrent="prev[key" as keyof type of prev]);}
if(current< target) {}
return {...prev,
[key]: Math.min(current + increment, target)}
}
return pre v
})
}, 1 6)
});
return () =>{timers.forEach(timer=> clearInterval(timer))}
}, [])
return (
<div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8&quot;></div>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;></h2>
Our Impact in Numbers
<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;></p>
See how we've transformed businesses and delivered exceptional results.
<div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
<div className=&quot;max-w-7xl mx-auto&quot;>{/* Header */}</div>
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;></h2>
Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Impact</span> in Numbers
</h2>
<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>See how we've helped businesses transform with our AI and IT solutions.</p>p>
</div>
{/* Statistics Grid */}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16&quot;>{statistics.map((stat, index) => (</div>
<div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center&quot;></div>
<div className=&quot;flex justify-center mb-4&quot;></div>
<div className=&quot;bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center&quot;></div>
<stat.icon className=&quot;h-8 w-8 text-white&quot; />
</div>
</div>
<div className={`text-3xl font-bold ${stat.color} mb-2`}>{Math.floor(stat.value)}{stat.suffix}</div>div>
<div className=&quot;text-gray-300&quot;>{stat.label}</div>
</div>
))}
</div>
{/* Achievements */}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>{achievements.map((achievement, index) => (</div>
<div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4&quot;></div>
<achievement.icon className=&quot;h-6 w-6 text-white&quot; />
</div>
<h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{achievement.title}</h3>
<p className=&quot;text-gray-300 text-sm&quot;>{achievement.description}</p>
</div>
))}
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>{statistics.map((stat, index) => (</div>
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
<stat.icon className=&quot;w-8 h-8 text-slate-900&quot; />
</div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}{stat.suffix}</div>div>
<div className=&quot;text-lg font-semibold text-white mb-2&quot;>{stat.label}</div>
<div className=&quot;text-gray-400 text-sm&quot;>{stat.description}</div>
</div>
))}
</div>
{/* Features Section */}
<div className=&quot;mb-16&quot;></div>
<div className=&quot;text-center mb-12&quot;></div>
<h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Key Features</h3>
<p className=&quot;text-gray-300 max-w-2xl mx-auto&quot;>Discover the powerful features that make our solutions stand out.</p>p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>{features.map((feature, index) => (</div>
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300&quot;></div>
<div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4&quot;></div>
<feature.icon className=&quot;w-6 h-6 text-white&quot; />
</div>
<h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>{feature.title}</h4>
<p className=&quot;text-gray-300 text-sm mb-4&quot;>{feature.description}</p>
<div className=&quot;space-y-2&quot;>{feature.stats.map((stat, statIndex) => (</div>
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
<p className=&quot;text-gray-300 max-w-2xl mx-auto&quot;>Recognition and milestones that showcase our commitment to excellence.</p>p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>{achievements.map((achievement, index) => (</div>
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
<p className=&quot;text-gray-300 max-w-2xl mx-auto&quot;>Discover the advantages that make our solutions the preferred choice.</p>p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>{benefits.map((benefit, index) => (</div>
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
<p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>Join thousands of satisfied customers and transform your business today.</p>p>
<div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
<button className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;></button>
<Zap className=&quot;w-5 h-5&quot; />
Get Started Today
</button>
<button className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200&quot;></button>
View Case Studies
</div>
</div>
</div>
</div>
</div>
),
}
export default ContentStatistics"
