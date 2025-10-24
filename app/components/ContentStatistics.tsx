<<<<<<< HEAD
'use client'
import React from 'react'
import, React, { useState, useEffect } from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, Users, Globe, Database, Settings, Shield, Zap } from from 'lucide-react'
import React from 'react'
import { Helmet } from from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from from 'lucide-react'
import React from 'react'
import Helmet  from 'react-helmet-async'
import ArrowRight Brain BarChart Target TrendingUp  from 'lucide-react'
import Navigation from '/components/Navigation'
import Footer from '../components/Footer'
import CheckCircle ArrowRight Star Clock Zap Shield Brain BarChart Target TrendingUp Globe Database Users, Settings     } from 'lucide-react'
const ContentStatistics ReactFC = =>     const steps = 60 const stepDuration = duration / steps const interval = setInterval =>;
const steps = 60 const stepDuration = duration / steps const interval = setInterval =>;
return newCounters stepDuration return  => clearIntervalinterval const statistics="icon" Users label "Happy Clients""
value Mathroundcountersclients suffix """
color "from-blue-500 to-cyan-500""
const ContentStatistics: "React.FC = () => {"
const [counters",setCounters] = useState({"
clients: "0",projects: "0");"
    satisfactio",n: "0",years: "0)"
    countrie",s: "0",)"
uptime: "0"});"
const targetCounters={"
clients: "1000",projects: "500;"
    satisfactio",n: "99",years: "10;"
    countrie",s: "25",uptime: "99.9"};useEffect(() => {;
const duration = 2000;
const steps = 60;
    const stepDuration = duration / steps;
const interval = setInterval(() => {;
setCounters(prev => {);
const newCounters = { ...prev };let allComplete = true);
Object.keys(targetCounters).forEach(key => {;
const target = targetCounters[key as keyof, typeof, targetCounters]);
const current = prev[key as keyof, typeof, prev]);
const increment = target / steps);
if(current < target) {;
newCounters[key as keyof, typeof, newCounters] = Math.min(current + increment, target);
allComplete = false);
});
if(allComplete) {;
clearInterval(interval);
return, newCounters;
      });
    }, stepDuration);
return(<div />);
  ) => clearInterval(interval);
  }, [];
    </section>
  );
}"
 ContentStatisticsPage"
clients: "0",projects: "0"
satisfactio",n: "0",years: "0"
countrie",s: "0",uptime: "0"})"
consttargetCounters={clients: "1000 0",projects: "500 0;"
satisfactio",n: "9 9",years: "1 5;"
countrie",s: "5 0",uptime: "99"};conststatistics = ["
{icon: "Users",value: "counters.clients";'"
labe",l: "'Happy Clients'",suffix: "'+'",color: "'text-blue-40 0'",description: "'Businesses trust our solutions'"}"
  {"
icon: "Award",value: "counters.projects";'"
labe",l: "'Projects Completed'",suffix: "'+'",color: "'text-purple-40 0'",description: "'Successful implementations'"}"
  {"
icon: "TrendingUp",value: "counters.satisfaction";'"
labe",l: "'Client Satisfaction'",suffix: "'%'",color: "'text-green-40 0'",description: "'Customer satisfaction rate'"}"
  {"
icon: "Clock",value: "counters.years";'"
labe",l: "'Years Experience'",suffix: "'+'",color: "'text-yellow-40 0'",description: "'Industry expertise'"}"
  {"
icon: "Globe",value: "counters.countries";'"
labe",l: "'Countries Served'",suffix: "'+'",color: "'text-cyan-40 0'",description: "'Global presence'"}"
  {"
icon: "BarChart3",value: "counters.uptime";'"
labe",l: "'Uptime Guarantee'",suffix: "'%'",color: "'text-red-40 0'",description: "'Service reliability'"}
];"
constachievements= [";'"
{icon: "Brain",title: "'AI Innovation'",description: "'Leading the industry in AI-powered solutions'"}"
  {";'"
icon: "Shield",title: "'Security Excellence'",description: "'Bank-level security for all our solutions'"}"
  {";'"
icon: "Globe",title: "'Global Reach'",description: "'Worldwide deployment and support for international businesses'",stats: "['5 0+ Countries'",'1 5+ Languages', '2 4/7 Support']}
];
constbenefits= [;
  'Advanced AI technology integration'
'Real-time processing and analytics'
'Enterprise-grade security and compliance'
'Scalable and flexible solutions'
'2 4/7 technical support'
'Easy integration with existing systems'
'Cost-effective pricing plans'
    'Proven track record of success'
  ];"
constachievements= [";'"
{icon: "Star",title: "'Industry Recognition'",description: "'Awarded Best AI Solutions Provider2024'",value: "'2 5+'"}"
  {";'"
icon: "Target",title: "'Success Rate'",description: "'Projects delivered on time and within budget'",value: "'9 8%'"}"
  {";'"
icon: "Rocket",title: "'Growth Rate'",description: "'Year-over-year business growth'",value: "'30 0%'"}
];
useEffect(() => {constduration= 300 0; // 3 secondsconststeps = 60 conststepDuration= duration / steps;
consttimers= Object.keys(targetCounters).map((key) => {;
consttarget= targetCounters[key as keyof type, of, targetCounters];
constduration=2000; // 2 secondsconstincrement = target / (duration /16) //60 fps;
return setInterva l(() => {;
setCounters(prev => {);
);
constcurrent= prev[key as keyof type, of, prev]);
if(current< target) {;
return{...prev;
=======
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;

import React from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import, React, { useState, useEffect } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
import { ArrowRight, Brain, BarChart, Target, TrendingUp, Users, Globe, Database, Settings, Shield, Zap  } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import React from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import { Helmet  } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import { ArrowRight, Brain, BarChart, Target, TrendingUp  } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import { Navigation   } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import Footer } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings  } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import { React from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import Helmet  from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import ArrowRight Brain BarChart Target TrendingUp } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import Navigation } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
import Footer } from app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx;
import CheckCircle ArrowRight Star Clock Zap Shield Brain BarChart Target TrendingUp Globe Database Users, Settings     ;} from app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
const ContentStatistics ReactFC = =>     const steps = 60 const stepDuration = duration / steps const interval = setInterval =>
const steps = 60 const stepDuration = duration / steps const interval = setInterval =>
return newCounters stepDuration return  => clearIntervalinterval const statistics=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx Users label app/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
value Mathroundcountersclients suffix app/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
color app/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
const ContentStatistics: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,setCounters,] = useState({
clients: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,projects: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,n: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,years: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,s: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,)
uptime: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,;})
const targetCounters={
clients: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,projects: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,n: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,years: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,s: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,uptime: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,};useEffect(() => {
const duration = app/components/ContentStatistics.tsx;
const steps = app/components/ContentStatistics.tsx;
    const stepDuration = duration / app/components/ContentStatistics.tsx;
const interval = setInterval(() => {
setCounters(prev => {
;)
const newCounters = { ...app/components/ContentStatistics.tsx;
,};let allComplete = true)
Object.keys(targetCounters).forEach(key => {

const target = targetCounters[key as keyof, typeof, targetCounters,]
const current = prev[key as keyof, typeof, prev,])
const increment = target / steps)
if(current < target) {
newCounters[key as keyof, typeof, newCounters,] = Math.min(current + increment, target)
allComplete = false)
        
,})
if(allComplete) {
clearInterval(interval)
return, app/components/ContentStatistics.tsx;
      })
    }, stepDuration)
return (
    <div />)
  ) => clearInterval(interval)

  ;}, []

    </$1>
  );
;}
 app/components/ContentStatistics.tsx;
clients: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,projects: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,n: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,years: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,s: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,uptime: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,;})
consttargetCounters={clients: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,projects: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,n: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,years: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,s: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,uptime: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,};conststatistics = [
{icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,l: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxHappy Clientsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,suffix: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx+app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,color: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-blue-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxBusinesses trust our solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,l: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxProjects Completedapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,suffix: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx+app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,color: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-purple-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxSuccessful implementationsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,l: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxClient Satisfactionapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,suffix: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx%app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,color: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-green-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxCustomer satisfaction rateapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,l: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxYears Experienceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,suffix: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx+app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,color: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-yellow-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxIndustry expertiseapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,l: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxCountries Servedapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,suffix: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx+app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,color: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-cyan-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxGlobal presenceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,l: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxUptime Guaranteeapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,suffix: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx%app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,color: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-red-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxService reliabilityapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
]
constachievements= [
{icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,title: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxAI Innovationapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxLeading the industry in AI-powered solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,title: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxSecurity Excellenceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxBank-level security for all our solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,title: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxGlobal Reachapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxWorldwide deployment and support for international businessesapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,stats: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx5 0+ Countriesapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx, app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx]}
]
constbenefits= [
  app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
    app/components/ContentStatistics.tsx'app/components/ContentStatistics.app/components/ContentStatistics.tsx;
  ]
constachievements= [
{icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,title: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxIndustry Recognitionapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxAwarded Best AI Solutions Provider2024app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx2 5+app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,;}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,title: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxSuccess Rateapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxProjects delivered on time and within budgetapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx9 8%app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,;}
  {
icon: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,title: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxGrowth Rateapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,description: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxYear-over-year business growthapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,value: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx30 0%app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx,;}

]
useEffect(() => {constduration= 300 0; // 3 secondsconststeps = 60 conststepDuration= duration / app/components/ContentStatistics.tsx;
consttimers= Object.keys(targetCounters).map((key) => {
consttarget= targetCounters[key as keyof type, of, targetCounters,]
constduration=2000; // 2 secondsconstincrement = target / (duration /16) //60 app/components/ContentStatistics.tsx;
return setInterva l(() => {
setCounters(prev => {
)
constcurrent= prev[key as keyof type, of, prev,])
if(current< target) {
return{...app/components/ContentStatistics.tsx;
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
}
[key]: Math.min(current + increment, target)}
}
<<<<<<< HEAD
return pre, v;
});
}, 1, 6);
});"
return(,"
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm: px-6 lg:px-8" />,<div className="max-w-7 xl mx-auto" />,"
    <div className="text-center mb-16" />,"
    <h1 className="text-3, xl, m,""
d: text-4 xl font-bold text-white mb-4" /></h2>
Our Impact in Numbers"
<p className="text-xl text-gray-300 max-w-3 xl mx-auto" / />";'"
See how we've transformed businesses and delivered exceptional results.,<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4" />,"
    <div className="max-w-7 xl mx-auto" />{/* Header */},"
    <div className="text-center mb-16" />,"
    <h1 className="text-3 xl md: text-4 xl font-bold text-white mb-6" /></h2>
Our <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400 to-purple-400">Impact</span> in Numbers;"
</h2>
<p className="text-xltext-gray-300 max-w-3 xlmx-auto"  />
See how we've helped businesses transform with our AI and IT solutions.;"
          </p>p>,{/* Statistics Grid */},");"
    <div className="grid grid-cols-1 md: "grid-cols-2 l",");"
g: grid-cols-4 gap-8 mb-16" />{statistics.map((stat,index) => (;"
<divkey = {index};className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center" />,"
    <div className="flex justify-center mb-4" />,"
    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center" />"
<stat.icon className="h-8 w-8 text-white" / />,);"
    <div className={`text-3 xl font-bold ${stat.color};mb-2`} />{Math.floor(stat.value)}{stat.suffix}div>,"
    <div className="text-gray-300" />{stat.label}
))}
  </div>
{/* Achievements */},"
    <div className="grid grid-cols-1 md: "grid-cols-2 l","
g: grid-cols-4 gap-8">{achievements.map((achievement,index) => (;"
      <divkey = {index};className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300" / />"
    </div>,<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4" / />"
            <achievement .icon className="h-6 w-6 text-white" /  />"
  </>"
    <h1 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
<p className="text-gray-300 text-sm">{achievement.description}</p>
  </div>);"
))},"
    <div className="grid grid-cols-1 md: "grid-cols-2 l","
g: grid-cols-3 gap-8 mb-16">{statistics.map((stat,index) => (;"
      <divkey = {index};className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300" / />"
    </div>,<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4" / />"
            <stat.icon className="w-8 h-8 text-slate-900" / />;
  </div>,;`"
    <div className={`text-4 xl font-bold ${stat.color};mb-2`}>{stat.value}{stat.suffix}</div>div>,"
    <div className="text-lgfont-semiboldtext-whitemb-2">{stat.label}  </>"
    <div className="text-gray-400 text-sm">{stat.description}  </div>
  </div>);
))}
  </div>
{/* Features Section */},"
    <div className="mb-16" / />,"
    <div className="text-center mb-12" / />,"
    <h1 className="text-2 xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2 xl mx-auto">Discover the powerful features that make our solutions stand out.</p>p>;"
  </>"
    <div className="grid grid-cols-1 md: "grid-cols-2 l","
g: grid-cols-4 gap-8">{features.map((feature,index) => (;"
      <divkey = {index};className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300" / />"
    </div>,<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4" / />"
            <feature .icon className="w-6 h-6 text-white" /  />;"
  </>"
    <h1 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>"
<p className="text-gray-300 text-sm mb-4">{feature.description}</p>,;");"
    <div className="space-y-2">{feature.stats.map((stat, statIndex) => (;"
      <divkey = {statIndex}className="flex items-center text-gray-300 text-sm" /  />"
    </div>
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /  />;
<span>{stat}</span>
  </div>);
))}
  </div>
  </div>
))}
  </div>
  </div>
{/* Achievements Section */},"
    <div className="mb-16" / />,"
    <div className="text-center mb-12" / />,"
    <h1 className="text-2 xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2 xl mx-auto">Recognition and milestones that showcase our commitment to excellence.</p>p>;"
  </div>,;"
    <div className="grid grid-cols-1 md: grid-cols-3 gap-8">{achievements.map((achievement,index) => (;"
      <divkey = {index};className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300" / />"
    </div>,<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4" / />"
            <achievement .icon className="w-8 h-8 text-white" /  />"
  </>"
    <div className="text-3 xl font-bold text-white mb-2">{achievement.value}  </>"
    <h1 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>"
<p className="text-gray-300 text-sm">{achievement.description}</p>
  </div>);
))}
  </div>
  </div>
{/* Benefits Section */},"
    <div className="mb-16" / />,"
    <div className="text-center mb-12" / />,"
    <h1 className="text-2 xl font-bold text-white mb-4">Why Choose Us?</h3>
<p className="text-gray-300 max-w-2 xl mx-auto">Discover the advantages that make our solutions the preferred choice.</p>p>;"
  </>"
    <div className="grid grid-cols-1 md: "grid-cols-2 l","
g: grid-cols-4 gap-6">{benefits.map((benefit,index) => (;"
      <divkey = {index}className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover: bg-white/10 transition-all duration-300" /  />"
    </div>
<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" / />,<span className="text-gray-300">{benefit}</span>
  </div>);
))}
  </div>
  </div>
{/* CTA Section */},"
    <div className="text-center" / />,"
    <div className="bg-white/5 backdrop-blur-sm rounded-2 xl p-12" / />,"
    <h1 className="text-3 xl font-bold text-white mb-4">Ready to Get Started?</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>p>,"
    <div className="flex flex-col sm: flex-row gap-4 justify-center" / />"
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" />"
<Zap className="w-5 h-5" /  />;
Get Started Today</Zap>;"
</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold, hove,""
r: bg-white/10 transition-colors duration-200"  />
View Case Studies;
  </div>
  </div>
  </div>
  </div>
  </div>
);
  );"
}"
        <><div className="mt-16 text-center" / />,"
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2 xl p-8 border border-cyan-500/20" / /><h3 className="text-2 xl font-bold text-white mb-4"  />"
Ready to Join Our Success Stories</h3>
            <p className="text-gray-300 mb-6"  />"
Let us help you achieve similar results with our proven expertise and innovative solutions</p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hoverfrom-cyan-600 hoverto-purple-600 transition-all duration-300">
Get Started Today  <ArrowRight className="w-5 h-5 ml-2"  />;
            </button>            </div>
        </section>
        / CTA Section /"
        <section className="py-20 px-4" /><div className="max-w-4 xl mx-auto text-center" / /><h2 className="text-4 xl font-bold text-white mb-6">Ready to Transform Your Business</h2>
            <pJoin thousands of businesses already using our AI solutions</p / /><div className="flex flex-col sm flex-row gap-4 justify-center" / /><button className="bg-emerald-600 hover bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Contact Sales</>;
              </>;
export default ContentStatistics;</>;
export default ContentStatisticsPage; clients 0 projects 0 satisfaction 0 years 0 countries 0 uptime 0 consttargetCounters = clients 1000 0 projects 500 0 satisfaction 9 9 years 1 5 countries 5 0 uptime99 conststatistics=;
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
constachievements=;
icon Brain title 'AI Innovation'
description 'Leading the industry in AI-powered solutions'
icon Shield title 'Security Excellence'
description 'Bank-level security for all our solutions'
icon Globe title 'Global Reach'
description 'Worldwide deployment and support for international businesses'
stats '5 0 Countries' '1 5 Languages' '2 4/7 Support'
constbenefits=;
  'Advanced AI technology integration'
'Real-time processing and analytics'
'Enterprise-grade security and compliance'
'Scalable and flexible solutions'
'2 4/7 technical support'
'Easy integration with existing systems'
'Cost-effective pricing plans'
    'Proven track record of success'
constachievements=;
icon Star title 'Industry Recognition'
description 'Awarded Best AI Solutions Provider2024'
value '2 5'
icon Target title 'Success Rate'
description 'Projects delivered on time and within budget'
value '9 8'
icon Rocket title 'Growth Rate'
description 'Year-over-year business growth'
value '30 0'
useEffect => constduration= 300 0 // 3 secondsconststeps= 60 conststepDuration= duration / steps consttimers= ObjectkeystargetCountersmapkey =>;
consttarget= targetCounterskey as keyof type of targetCounters constduration=2000 // 2 secondsconstincrement= target / duration /16 //60 fps return setInterva l =>;"
setCountersprev=>"
constcurrent="prevkey" as keyof type of prev ifcurrent< target return(prev key Mathmincurrent  increment target return pre v 1 6 return (<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm px-6 lgpx-8" / />,"
    <div className="max-w-7 xl mx-auto" / />,"
    <div className="text-center mb-16" / /><h2 className="text-3 xl md text-4 xl font-bold text-white mb-4" />";'"
Our Impact in Numbers</h2><p className="text-xl text-gray-300 max-w-3 xl mx-auto">See how we've transformed businesses and delivered exceptional results</p><div/ Header /  </div />,"
    <div className="text-center mb-16" / /><h2 className="text-3 xl md text-4 xl font-bold text-white mb-6" />"
Our </h2><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers</h2>";'"
<p className="text-xl text-gray-300 max-w-3 xl mx-auto">See how we've helped businesses transform with our AI and IT solutions</p>p>;
  </div>
/ Statistics Grid /"
<><div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8 mb-16">statisticsmapstat index =>   "
      <divkey =index className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center" /  />"
    </>"
    <div className="flex justify-center mb-4" / /><><div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center" / /><staticon className="h-8 w-8 text-white"  />;
  </div>
  </>;"
    <div className=text-3 xl font-bold statcolor mb-2>Mathfloorstatvaluestatsuffix</div>div>"
<><div className="text-gray-300">statlabel  </div>
  </div>
  </div>
/ Achievements /,"
    <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8">achievementsmapachievement index =>   "
      <divkey=index className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover bg-white/10 transition-all duration-300" / />"
    </div><><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4" / /><achievementicon className="h-6 w-6 text-white"  />"
  </>"
    <h1 className="text-xl font-semibold text-white mb-2">achievementtitle</h3>
<p className="text-gray-300 text-sm">achievementdescription</p>
  </>"
    <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-3 gap-8 mb-16">statisticsmapstat index =>   "
      <divkey=index className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover bg-white/10 transition-all duration-300" / />"
    </div><><div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4" / /><staticon className="w-8 h-8 text-slate-900"  />;
  </>;"
    <div className=text-4 xl font-bold statcolor mb-2>statvaluestatsuffix</div>div>"
<><div className="text-lg font-semibold text-white mb-2">statlabel  </>"
    <div className="text-gray-400 text-sm">statdescription  </div>
  </div>
  </div>
/ Features Section /"
<><div className="mb-16" / />,"
    <div className="text-center mb-12" / /><h3 className="text-2 xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2 xl mx-auto">Discover the powerful features that make our solutions stand out</p>p>;"
  </>"
    <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8">featuresmapfeature index =>   </div>
<><divkey=index className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover bg-white/10 transition-all duration-300" / />,"
    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4" / /><featureicon className="w-6 h-6 text-white"  />;"
  </>"
    <h1 className="text-lg font-semibold text-white mb-3">featuretitle</h4>"
<p className="text-gray-300 text-sm mb-4">featuredescription</p>
<><div className="space-y-2">featurestatsmapstat statIndex =>   "
      <divkey=statIndex className="flex items-center text-gray-300 text-sm" / />"
    </div><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" / /><span>stat</span>
  </div>
  </div>
  </div>
  </div>
  </div>
/ Achievements Section /"
<><div className="mb-16" / />,"
    <div className="text-center mb-12" / /><h3 className="text-2 xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2 xl mx-auto">Recognition and milestones that showcase our commitment to excellence</p>p>;"
  </>"
    <div className="grid grid-cols-1 mdgrid-cols-3 gap-8">achievementsmapachievement index =>   </div>
<><divkey=index className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover bg-white/10 transition-all duration-300" / />,"
    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4" / /><achievementicon className="w-8 h-8 text-white"  />"
  </div>
<><div className="text-3 xl font-bold text-white mb-2">achievementvalue  </>"
    <h1 className="text-lg font-semibold text-white mb-2">achievementtitle</h4>"
<p className="text-gray-300 text-sm">achievementdescription</p>
  </div>
  </div>
  </div>
/ Benefits Section /,"
    <div className="mb-16" / />,"
    <div className="text-center mb-12" / /><h3 className="text-2 xl font-bold text-white mb-4">Why Choose Us</h3>
<p className="text-gray-300 max-w-2 xl mx-auto">Discover the advantages that make our solutions the preferred choice</p>p>;"
  </>"
    <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6">benefitsmapbenefit index =>   "
      <divkey=index className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover bg-white/10 transition-all duration-300" / />"
    </div><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" / /><span className="text-gray-300">benefit</span>
  </div>
  </div>
  </div>
/ CTA Section /,"
    <div className="text-center" / />,"
    <div className="bg-white/5 backdrop-blur-sm rounded-2 xl p-12" / /><h3 className="text-3 xl font-bold text-white mb-4">Ready to Get Started</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">Join thousands of satisfied customers and transform your business today</p>p>,"
    <div className="flex flex-col sm flex-row gap-4 justify-center" / /><button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover from-cyan-600 hoverto-blue-700 transition-all duration-300 transform hoverscale-105 flex items-center justify-center gap-2" /><Zap className="w-5 h-5" />Get Started Today</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover bg-white/10 transition-colors duration-200">
View Case Studies  </div>
  </div>
  </>;
  </>;
  </>;
export default ContentStatistics}
=======
return pre, app/components/ContentStatistics.tsx;
})
}, 1, 6)
})
return (
    <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />,<div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </div>
    <h1 className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
d: text-4 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-xl text-gray-300 max-w-3 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxve transformed businesses and delivered exceptional results.,<div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />{/* Header */,;} <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <h1 className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /></h2>
Our <span className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>Impact</span> in app/components/ContentStatistics.tsx;
</h2> <p className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </p>
See how weapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxgrid grid-cols-1 md: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />{statistics.map((stat,index) => (
<divkey = {index,};className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </div>
<stat.icon className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </stat>
    <divclassName = {app/components/ContentStatistics.tsx`app/components/ContentStatistics.tsx} />{Math.floor(stat.value)}{stat.suffix}div> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />{stat.label,}

))}
  </div>
{/* Achievements */}

    <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid-cols-2 lapp/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
g: grid-cols-4 gap-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxh-6 w-6 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-xl font-semibold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 md: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>{statistics.map((stat,index) => (  
      <divkey = {index,};className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </divkey>
    </div>,<div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </div>
            <stat.icon className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </stat>
  </div>
    <div className={app/components/ContentStatistics.tsx`app/components/ContentStatistics.tsx}>{stat.value}{stat.suffix}</div>div>
    <div className = app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>{stat.label,}  </div>
    <div className = app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>{stat.description,}  </div>
  </div>
))}
  </div>
{/* Features Section */} <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </div>
    <h1 className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>Key Features</h3>
<p className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>Discover the powerful features that make our solutions stand out.</p>p>
  </div>
    <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid-cols-2 lapp/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
g: grid-cols-4 gap-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-6 h-6 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-lg font-semibold text-white mb-3app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 text-sm mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxspace-y-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex items-center text-gray-300 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-4 h-4 text-green-400 mr-2 flex-shrink-0app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-center mb-12app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-2 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 max-w-2 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 md: grid-cols-3 gap-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover: bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-8 h-8 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-3 xl font-bold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-lg font-semibold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-center mb-12app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-2 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 max-w-2 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 md: app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx,app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>{benefits.map((benefit,index) => (  
      <divkey = {index,};className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </divkey>
    </div> <CheckCircle className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />,<span className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>{benefit,}</span>
  </div>
))}
  </div>
  </div>
{/* CTA Section */} <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </div>
    <h1 className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>Ready to Get Started?</h3>
<p className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>Join thousands of satisfied customers and transform your business today.</p>p> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <button className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /> <Zap className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </Zap>
Get Started Today</Zap>
</button>
<button className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.app/components/ContentStatistics.tsx;
r: bg-white/10 transition-colors duration-200app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmt-16 text-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2 xl p-8 border border-cyan-500/20app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-2 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 mb-6app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxinline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hoverfrom-cyan-600 hoverto-purple-600 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-5 h-5 ml-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxpy-20 px-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmax-w-4 xl mx-auto text-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-4 xl font-bold text-white mb-6app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex flex-col sm flex-row gap-4 justify-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-emerald-600 hover bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxborder border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxHappy Clientsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxtext-blue-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxBusinesses trust our solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxProjects Completedapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxtext-purple-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxSuccessful implementationsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxClient Satisfactionapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxtext-green-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxCustomer satisfaction rateapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxYears Experienceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxtext-yellow-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxIndustry expertiseapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxCountries Servedapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxtext-cyan-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxGlobal presenceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxUptime Guaranteeapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxtext-red-40 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxService reliabilityapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxAI Innovationapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxLeading the industry in AI-powered solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxSecurity Excellenceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxBank-level security for all our solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxGlobal Reachapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxWorldwide deployment and support for international businessesapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx5 0 Countriesapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx1 5 Languagesapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx2 4/7 Supportapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxAdvanced AI technology integrationapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxReal-time processing and analyticsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxEnterprise-grade security and complianceapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxScalable and flexible solutionsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx2 4/7 technical supportapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxEasy integration with existing systemsapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxCost-effective pricing plansapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxProven track record of successapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxIndustry Recognitionapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxAwarded Best AI Solutions Provider2024app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx2 5app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxSuccess Rateapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxProjects delivered on time and within budgetapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx9 8app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxGrowth Rateapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxYear-over-year business growthapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsx30 0app/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxprevkeyapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm px-6 lgpx-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmax-w-7 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-center mb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-3 xl md text-4 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-xl text-gray-300 max-w-3 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxve transformed businesses and delivered exceptional results</p><div/ Header /  </div /> <div className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx /><h2 className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx />
    </h2>
Our </h2><span className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>Impact</span> in Numbers</h2>
<p className=app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsx>See how weapp/components/ContentStatistics.tsx'app/components/ContentStatistics.tsxgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8 mb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex justify-center mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxh-8 w-8 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxh-6 w-6 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-xl font-semibold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-3 gap-8 mb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-8 h-8 text-slate-900app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-lg font-semibold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-400 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-center mb-12app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-2 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 max-w-2 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-sm rounded-xl p-6 hover bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-6 h-6 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-lg font-semibold text-white mb-3app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 text-sm mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxspace-y-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex items-center text-gray-300 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-4 h-4 text-green-400 mr-2 flex-shrink-0app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-center mb-12app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-2 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 max-w-2 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 mdgrid-cols-3 gap-8app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-8 h-8 text-whiteapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-3 xl font-bold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-lg font-semibold text-white mb-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 text-smapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxmb-16app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-center mb-12app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-2 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300 max-w-2 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover bg-white/10 transition-all duration-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-5 h-5 text-green-400 flex-shrink-0app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-gray-300app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-white/5 backdrop-blur-sm rounded-2 xl p-12app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-3 xl font-bold text-white mb-4app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxtext-xl text-gray-300 mb-8 max-w-2 xl mx-autoapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxflex flex-col sm flex-row gap-4 justify-centerapp/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxbg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover from-cyan-600 hoverto-blue-700 transition-all duration-300 transform hoverscale-105 flex items-center justify-center gap-2app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxw-5 h-5app/components/ContentStatistics.tsx"app/components/ContentStatistics.tsxborder-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover bg-white/10 transition-colors duration-200">
View Case Studies  </div>
  </div>
  </div>
  </div>
  </div>
export default ContentStatistics; ,}
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
</button>
});"
)";`'"