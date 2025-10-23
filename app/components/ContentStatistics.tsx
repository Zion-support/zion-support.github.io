'use client'
import React, {useStateuseEffect} from 'react'
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket} from 'lucide-react'
constContentStatistics: React.FC= () =>{const [counterssetCounters] = useState({
clients: 0,
projects: 0,
satisfaction: 0,
years: 0,
countries: 0,
uptime: 0})
consttargetCounters= {clients: 1000 0,
projects: 500 0,
satisfaction: 9 9,
years: 1 5,
countries: 5 0,
uptime:99}
conststatistics= [
{icon: Users,
value: counters.clients,
label: 'Happy Clients',
suffix: '+',
color: 'text-blue-40 0',
description: 'Businesses trust our solutions'},
{icon: Award,
value: counters.projects,
label: 'Projects Completed',
suffix: '+',
color: 'text-purple-40 0',
description: 'Successful implementations'},
{icon: TrendingUp,
value: counters.satisfaction,
label: 'Client Satisfaction',
suffix: '%',
color: 'text-green-40 0',
description: 'Customer satisfaction rate'},
{icon: Clock,
value: counters.years,
label: 'Years Experience',
suffix: '+',
color: 'text-yellow-40 0',
description: 'Industry expertise'},
{icon: Globe,
value: counters.countries,
label: 'Countries Served',
suffix: '+',
color: 'text-cyan-40 0',
description: 'Global presence'},
{icon: BarChart3,
value: counters.uptime,
label: 'Uptime Guarantee',
suffix: '%',
color: 'text-red-40 0',
description: 'Service reliability'}
]
constachievements= [
{icon: Brain,
title: 'AI Innovation',
description: 'Leading the industry in AI-powered solutions'},
{icon: Shield,
title: 'Security Excellence',
description: 'Bank-level security for all our solutions'},
{icon: Globe,
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
{icon: Target,
title: 'Success Rate',
description: 'Projects delivered on time and within budget',
value: '9 8%'},
{icon: Rocket,
title: 'Growth Rate',
description: 'Year-over-year business growth',
value: '30 0%'}
]
useEffect(() => {constduration= 300 0; // 3secondsconststeps= 60conststepDuration= duration / steps
consttimers= Object.keys(targetCounters).map((key) => {
  
consttarget= targetCounters[key as keyof type of targetCounters]
constduration=2000; // 2secondsconstincrement= target / (duration /16); //60fps
return setInterva l(() => {
  
setCounters(prev=> {
  
constcurrent= prev[key as keyof type of prev]
if(current< target) {
return {
...prev,
[key]: Math.min(current + increment, target)}
}
return pre v
})
}, 1 6)
})
return () =>{timers.forEach(timer=> clearInterval(timer))}
}, [])
return(<divclassName="bg-gradient-to-br from-slate-900via-purple-90 0to-slate-900py-20px-4sm:px-6lg:px-8"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-4"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-4">Our Impact in Numbers<spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">See how we've transformed businesses and delivered exceptionalresults.<divclassName="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"><divclassName="max-w-7xlmx-auto">{/* Header*/}<divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Our<spanclassName="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">Impact</spa>inNumbers</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">See how we've helped businesses transform with our AI and ITsolutions.</p></di>{/* StatisticsGrid*/}<divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8mb-16">{statistics.map((statindex)=>(<divkey={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10text-center"><divclassName="flexjustify-centermb-4"><divclassName="bg-gradient-to-r from-purple-60 0 to-cyan-600w-16h-16rounded-full flexitems-centerjustify-center"><stat.iconclassName="h-8w-8text-white" /></di></di><divclassName={`text-3 xl font-bold${stat.color}mb-2`}>{Math.floor(stat.value)}{stat.suffix}</di><divclassName="text-gray-300">{stat.label}</di></di>))}</di>{/* Achievements*/}<divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{achievements.map((achievementindex)=>(<divkey={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10transition-allduration-300"><divclassName="flex items-center justify-center w-12h-12bg-gradient-to-r from-cyan-50 0to-purple-600rounded-lgmb-4"><achievement.iconclassName="h-6w-6text-white" /></di><h3className="text-xl font-semiboldtext-whitemb-2">{achievement.title}</h><pclassName="text-gray-300text-sm">{achievement.description}</p></di>))}<divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8mb-16">{statistics.map((statindex)=>(<divkey={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-centerhover:bg-white/10transition-allduration-300"><divclassName="w-16h-16bg-gradient-to-r from-cyan-400to-purple-400rounded-full flex items-center justify-centermx-automb-4"><stat.iconclassName="w-8 h-8text-slate-900" /></di><divclassName={`text-4 xl font-bold${stat.color}mb-2`}>{stat.value}{stat.suffix}</di><divclassName="text-lg font-semiboldtext-whitemb-2">{stat.label}</di><divclassName="text-gray-400text-sm">{stat.description}</di></di>))}</di>{/* FeaturesSection*/}<divclassName="mb-16"><divclassName="text-centermb-12"><h3className="text-2 xl font-boldtext-whitemb-4">KeyFeatures</h><spanclassName="text-gray-300max-w-2xlmx-auto"></className="text-gray-300max-w-2xlmx-auto">Discover the powerful features that make our solutions standout.</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex)=>(<divkey={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10transition-allduration-300"><divclassName="w-1 2 h-12bg-gradient-to-r from-blue-500to-purple-500rounded-lg flex items-centerjustify-centermb-4"><feature.iconclassName="w-6h-6text-white" /></di><h4className="text-lg font-semiboldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300text-smmb-4">{feature.description}</p><divclassName="space-y-2">{feature.stats.map((statstatIndex)=>(<divkey={statIndex}className="flex items-center text-gray-300text-sm"><CheckCircleclassName="w-4 h-4text-green-400mr-2flex-shrink-0" /><spa n>{stat}</spa></di>))}</di></di>))}</di></di>{/* AchievementsSection*/}<divclassName="mb-16"><divclassName="text-centermb-12"><h3className="text-2 xl font-boldtext-whitemb-4">OurAchievements</h><spanclassName="text-gray-300max-w-2xlmx-auto"></className="text-gray-300max-w-2xlmx-auto">Recognition and milestones that showcase our commitment toexcellence.</p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{achievements.map((achievementindex)=>(<divkey={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-centerhover:bg-white/10transition-allduration-300"><divclassName="w-1 6 h-16bg-gradient-to-r from-yellow-400to-orange-500rounded-full flex items-center justify-centermx-automb-4"><achievement.iconclassName="w-8h-8text-white" /></di><divclassName="text-3 xl font-boldtext-whitemb-2">{achievement.value}</di><h4className="text-lg font-semiboldtext-whitemb-2">{achievement.title}</h><pclassName="text-gray-300text-sm">{achievement.description}</p></di>))}</di></di>{/* BenefitsSection*/}<divclassName="mb-16"><divclassName="text-centermb-12"><h3className="text-2 xl font-boldtext-whitemb-4">WhyChooseUs?</h><spanclassName="text-gray-300max-w-2xlmx-auto"></className="text-gray-300max-w-2xlmx-auto">Discover the advantages that make our solutions the preferredchoice.</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{benefits.map((benefitindex)=>(<divkey={index}className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10transition-allduration-300"><CheckCircleclassName="w-5 h-5 text-green-400flex-shrink-0" /><spanclassName="text-gray-300">{benefit}</spa></di>))}</di></di>{/* CTASection*/}<divclassName="text-center"><divclassName="bg-white/5 backdrop-blur-sm rounded-2 xlp-12"><h3className="text-3 xl font-boldtext-whitemb-4">Ready toGetStarted?</h><spanclassName="text-xl text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of satisfied customers and transform your businesstoday.</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-gradient-to-r from-cyan-50 0 to-blue-60 0 text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-blue-700transition-all duration-300transformhover:scale-105flex items-centerjustify-centergap-2"></spa></className="bg-gradient-to-r from-cyan-50 0 to-blue-60 0 text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-blue-700transition-all duration-300transformhover:scale-105flex items-centerjustify-centergap-2"><ZapclassName="w-5h-5" />Get StartedToday</butto><spanclassName="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colorsduration-200"></spa></className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colorsduration-200">View Case Studies</di></di></di></di></di>)
}
export defaultContentStatistics</butto></h></di>