'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../$1/Navigation'
import Footer from '../$1/Footer'
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Helmet} from 'lucide-react';
constServiceWorkerPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
   },
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
   },
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
   },
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
   }
  ]
  return (
  <><Helme t><titl e>ServiceWorker - ZionTechGroup</titl><metaname="description"content="Advanced serviceworker solutions powered by AItechnology." /></Helme><Navigation /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900">{/* HeroSection */}
      <sectionclassName="relativepy-20px-4overflow-hidden"><divclassName="absolute inset-0 bg-[radial-gradient(circle_at_2 0%_8 0%,rgba(14 7,5 1,23 4,0.3)_0%,transparent_50%)]animate-pulse" /><divclassName="absolute inset-0 bg-[radial-gradient(circle_at_8 0%_2 0%,rgba(5 9,13 0,24 6,0.3)_0%,transparent_50%)]animate-pulse" style={{ animationDelay: '1 s'}} /><divclassName="relative max-w-7 xlmx-autotext-center"><spanclassName="text-5 xlmd:text-7 xl font-bold text-whitemb-6leading-tight"></spa></className="text-5 xlmd:text-7 xl font-bold text-whitemb-6leading-tight">ServiceWorker

          <spanclassName="text-xl text-gray-300mb-8 max-w-3 xlmx-autoleading-relaxed"></spa></className="text-xl text-gray-300mb-8 max-w-3 xlmx-autoleading-relaxed">Advanced serviceworker solutions powered by AI technology.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105">Get Started
            </butto><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105">Learn More
            </butto></di></di></sectio>{/* FeaturesSection */}
      <sectionclassName="py-20px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-5 xl font-boldtext-whitemb-6"></spa></className="text-4 xlmd:text-5 xl font-boldtext-whitemb-6">Key Features

            <spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></spa></className="text-xl text-gray-300max-w-3xlmx-auto">Powerful AI technology that drives results

          </di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
             <divkey={index}className="bg-white/5 backdrop-blur-sm rounded-2 xl p-8 hover:bg-white/10transition-all duration-300group"><divclassName="w-1 6 h-16bg-gradient-to-br from-purple-500to-blue-600rounded-2 xl flex items-center justify-center mb-6 group-hover:scale-110transition-transform"><feature.iconclassName="w-8h-8text-white" /></di><h3className="text-xl font-boldtext-whitemb-4">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p>{feature.benefits && (
                  <ulclassName="space-y-2">{feature.benefits.map((benefitidx) => (
                     <likey={idx}className="flex items-center text-smtext-gray-400"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />{benefit}
                      </l>))}
                  </u>)}
              </di>))}
          </di></di></sectio>{/* CTASection */}
      <sectionclassName="py-20px-4"><divclassName="max-w-4 xlmx-autotext-center"><divclassName="bg-white/5 backdrop-blur-sm rounded-3 xlp-12"><spanclassName="text-4 xlmd:text-5 xl font-boldtext-whitemb-6"></spa></className="text-4 xlmd:text-5 xl font-boldtext-whitemb-6">Ready to Get Started?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Contact our experts to discuss your requirements and get started today.
            </spa></p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-gradient-to-r from-purple-500to-blue-600 hover:from-purple-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-purple-500to-blue-600 hover:from-purple-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105">Contact Us

              <spanclassName="border border-purple-400text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-allduration-300"></spa></className="border border-purple-400text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-allduration-300">Learn More

            </di></di></di></sectio></di><Footer /></>)
}
export defaultServiceWorkerPage</butto></butto></p></h></butto></butto></h>
import {useEffect} from 'react'
constServiceWorker: React.FC= () => {useEffect(() => {
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
  
         })
        .catch((registrationError) => {})
    }
  }, [])
  return nul l
}
export default ServiceWorker