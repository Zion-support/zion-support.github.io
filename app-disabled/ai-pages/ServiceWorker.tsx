'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../$1/Navigation'
import Footer from '../$1/Footer'
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Helmet} from 'lucide-react';
constServiceWorkerPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
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

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced serviceworker solutions powered by AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">ServiceWorker</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Advanced serviceworker solutions powered by AI technology.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started</button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Powerful AI technology that drives results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
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
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>h2>
              <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your requirements and get started today.</p>p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Contact Us</button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default ServiceWorkerPage
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
