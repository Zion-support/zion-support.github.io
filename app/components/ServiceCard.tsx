'use client'
import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const ServiceCardPage: React.FC = () => {
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
        <title>ServiceCard</title>
        <meta name="description" content="Advanced ServiceCard solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ServiceCard, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ServiceCard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ServiceCard solution for modern businesses.
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

export default ServiceCardPage;
=======
import { ArrowRight, CheckCircle } from 'lucide-react'
import { CheckCircle } from 'lucide-react'

interface ServiceCardProps {
title: string
description: string
features: string[]
=======
import {ArrowRightCheckCircle} from 'lucide-react'
interface ServiceCardProp s {title: stringdescription: stringfeatures: string[]
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
price?: string
popular?: boolean
onSelect?: () =>void
class Nam e?: string}constServiceCard:React.FC<ServiceCardProp s>= ({title,
description,
features,
price,
popular= false,
onSelect,
<<<<<<< HEAD
className = ''
}) => {
return (
<div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${
popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
}`}>{popular && (</div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="text-purple-400 text-sm font-semibold">Most Popular</span>
</div>
)}
<div className="mb-4">
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>h3>
<p className="text-gray-300 text-sm">{description}</p>
</div>
<div className="space-y-2 mb-6">{features.map((feature, index) => (</div>
<div key={index} className="flex items-center gap-2">
<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
<span className="text-gray-300 text-sm">{feature}</span>
</div>
))}
</div>
{price && (
<div className="mb-6">
<div className="text-3xl font-bold text-white mb-1">{price}</div>
<div className="text-gray-400 text-sm">per month</div>
</div>
)}
{onSelect && (
<button
onClick={onSelect}
<<<<<<< HEAD
className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"></button>
Get Started
=======
className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">Get Started</button>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
)}
</div>
)
}
export default ServiceCard
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
=======
className= ''}) => {return(<divclassName={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/1 0 transition-all duration-300group ${class Name} ${popular ? 'border-purple-400shado w-2 xl shado w-purple-50 0/2 5' :''}`}>{popular &&(<divclassName="flexitems-centergap-2mb-4"><divclassName="w-2 h-2bg-purple-400rounded-full"></di><spanclassName="text-purple-400text-smfont-semibold">MostPopular</spa></di>)}<divclassName="mb-4"><spanclassName="text-xl font-bold text-white mb-2 group-hover:text-purple-400transition-colors"></className="text-xl font-bold text-white mb-2 group-hover:text-purple-400transition-colors">{title}</h><pclassName="text-gray-300text-sm">{description}</p></di><divclassName="space-y-2mb-6">{features.map((featureindex)=>(<divkey={index}className="flexitems-centergap-2"><CheckCircleclassName="w-4 h-4 text-green-400flex-shrink-0" /><spanclassName="text-gray-300text-sm">{feature}</spa></di>))}</di>{price &&(<divclassName="mb-6"><divclassName="text-3 xlfont-boldtext-whitemb-1">{price}</di><divclassName="text-gray-400text-sm">permonth</di></di>)}
{onSelect &&(<onClick={onSelect}className="w-full bg-gradient-to-r from-purple-50 0 to-blue-500text-white py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-all duration-300flex items-center justify-centergap-2group"></
onClick={onSelect}className="w-full bg-gradient-to-r from-purple-50 0 to-blue-500text-white py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-all duration-300flex items-center justify-centergap-2group">GetStarted<ArrowRightclassName="w-4 h-4group-hover:translate-x-1transition-transform" /></butto>)}</di>)
}
export defaultServiceCard</ServiceCardProp>
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
