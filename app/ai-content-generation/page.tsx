'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiContentGenerationPage: React.FC = () => {
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
return (
<>
<Helmet><>
</Helmet>
<title>AI Content Generation - Zion Tech Group</title><>
<//title>
<meta name="description" content="Advanced content generation powered by AI technology." /><>
</meta name="description" content="Advanced content generation powered by AI technology." />
<meta name="keywords" content="AI content generation, artificial intelligence, content creation, AI solutions, intelligent writing" /><>
</meta name="keywords" content="AI content generation, artificial intelligence, content creation, AI solutions, intelligent writing" />
</Helmet><>
<//Helmet>
<Navigation /><>
</Navigation />
<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
{/* Hero Section */}
<section className="relative py-20 px-4 sm:px-6 lg:px-8"><>
</section className="relative py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"></h1><//h1>
AI Content Generation</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"></p><//p>
Transform your business with intelligent solutions powered by cutting-edge AI technology.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"></button><//button>
Get Started</button><>
<//button>
</h1><>
<//h1>
<button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"></button><//button>
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
</section><//section>
{/* Features Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h1><//h1>
Powerful AI Features</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto"></p><//p>
Discover how our AI platform can revolutionize your business operations.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
{features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"></div><>
<//div>
<div className="flex items-center mb-4"></div><>
<//div>
<feature.icon className="h-8 w-8 text-blue-600 mr-3" /><>
</feature.icon className="h-8 w-8 text-blue-600 mr-3" />
<h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3><>
<//h3>
</div><>
<//div>
<p className="text-gray-600 mb-4">{feature.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
{feature.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-center text-sm text-gray-600"><>
</li key={benefitIndex} className="flex items-center text-sm text-gray-600">
<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" /></CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
{benefit}
</li><//li>
))}
</ul><>
<//ul>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
</section><//section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
Ready to Transform Your Business?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-blue-100 mb-8"></p><//p>
Join thousands of businesses already using our AI platform.</p><>
<//p>
</p><>
<//p>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"></button><//button>
Start Your Free Trial</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
{features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"></div><>
<//div>
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div><>
<//div>
<CheckCircle className="w-6 h-6 text-white" /><>
</CheckCircle className="w-6 h-6 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{feature.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
{feature.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-center text-sm text-gray-400"><>
</li key={benefitIndex} className="flex items-center text-sm text-gray-400">
<CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
{benefit}
</li><//li>
))}
</ul><>
<//ul>
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
<h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Page?</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Experience the benefits of our proven solutions</p><>
<//p>
</h1><>
<//h1>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div><//div>
{benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-white" /><>
</CheckCircle className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-lg font-semibold text-white">{benefit}</h3><>
<//h3>
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
<h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
Transform your business with our page solutions today</p><>
<//p>
</h1><>
<//h1>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button><//button>
Start Free Trial</button><>
<//button>
</h1><>
<//h1>
<button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
Contact Sales</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<Footer /><>
</Footer />
</><//>
)
}
export default AiContentGenerationPage
