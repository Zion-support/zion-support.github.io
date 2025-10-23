'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiFinancialAnalyzerPage: React.FC = () => {
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
      <Helmet><>
</Helmet>
<title>Ai Financial Analyzer - Zion Tech Group</title><>
<//title>
<meta name="description" content="Advanced AI-powered ai financial analyzer solution for modern businesses." /><>
</meta name="description" content="Advanced AI-powered ai financial analyzer solution for modern businesses." />
<meta name="keywords" content="AI ai financial analyzer, artificial intelligence, ai financial analyzer, AI solutions, intelligent automation" /><>
</meta name="keywords" content="AI ai financial analyzer, artificial intelligence, ai financial analyzer, AI solutions, intelligent automation" />
</Helmet><>
<//Helmet>
<Navigation /><>
</Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900"></div><//div>
        {/* Hero Section */}</div><>
<//div>
<section className="relative py-20 px-4 overflow-hidden"><>
</section className="relative py-20 px-4 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div><>
<//div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div><>
<//div>
<div className="relative max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1><//h1>
              Ai Financial Analyzer</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p><//p>
              Advanced AI-powered ai financial analyzer solution for modern businesses.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button><//button>
                Get Started</button><>
<//button>
</h1><>
<//h1>
<button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
                View Demo</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Features Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1><//h1>
                Key Features</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
                Advanced AI technology that drives results</p><>
<//p>
</h1><>
<//h1>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
              {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div><>
<//div>
<feature.icon className="w-8 h-8 text-white" /><>
</feature.icon className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{feature.description}</p><//p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400"><>
</li key={idx} className="flex items-center text-sm text-gray-400">
<CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li><//li>
                      ))}
                    </ul><//ul>
                  )}
                </div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Benefits Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1><//h1>
                Why Choose Our Solution?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
                Proven results that drive business growth and efficiency</p><>
<//p>
</h1><>
<//h1>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
              {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-white" /><>
</CheckCircle className="w-8 h-8 text-white" />
</div><>
<//div>
<p className="text-lg text-white font-medium">{benefit}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div><>
<//div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1><//h1>
                Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
                Contact our experts to discuss your requirements and get started today.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button><//button>
                  Contact Us</button><>
<//button>
</h1><>
<//h1>
<button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
                  Learn More</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
<Footer /><>
</Footer />
</><//>
  )
}
export default AiFinancialAnalyzerPage
