'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiAnalyticsPage: React.FC = () => {
const features = [
{
icon: Brain,
title: 'AI-Powered Intelligence',
description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
{
icon: BarChart,
title: 'Real-Time Dashboards',
description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
},
{
icon: TrendingUp,
title: 'Performance Optimization',
description: 'Optimize your business performance with AI-driven recommendations and insights.',
benefits: ['Performance tracking', 'Optimization suggestions', 'ROI analysis', 'Growth strategies']
},
{
icon: Zap,
title: 'Fast Processing',
description: 'Process large datasets in seconds with our optimized AI analytics engine.',
benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
},
{
icon: Eye,
title: 'Visual Analytics',
description: 'Transform complex data into intuitive visualizations and interactive charts.',
benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export capabilities']
},
{
icon: Shield,
title: 'Data Security',
description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
}
]
const benefits = [
'Increase efficiency by up to 50%',
'Reduce costs by 30% with automation',
'Improve decision-making with AI insights',
'Scale operations without proportional staff increases',
'Gain competitive advantage with advanced technology'
]
const useCases = [
{
title: 'Business Intelligence',
description: 'Transform raw data into actionable business insights',
icon: '📊'
},
{
title: 'Marketing Analytics',
description: 'Optimize marketing campaigns with AI-powered insights',
icon: '📈'
},
{
title: 'Financial Analysis',
description: 'Monitor financial performance and identify trends',
icon: '💰'
},
{
title: 'Customer Analytics',
description: 'Understand customer behavior and preferences',
icon: '👥'
},
{
title: 'Operations Monitoring',
description: 'Track operational metrics and optimize processes',
icon: '⚙️'
},
{
title: 'Risk Management',
description: 'Identify and mitigate business risks proactively',
icon: '🛡️'
}
]
return (
<>
<Helmet><>
</Helmet>
<title>AI Analytics - Zion Tech Group</title><>
<//title>
<meta name="description" content="Advanced AI-powered analytics solution for modern businesses." /><>
</meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />
<meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" /><>
</meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />
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
AI Analytics</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"></p><//p>
Transform your business with intelligent analytics powered by cutting-edge AI technology.</p><>
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
Powerful AI Analytics Features</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto"></p><//p>
Discover how our AI analytics platform can revolutionize your business intelligence.</p><>
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
Ready to Transform Your Analytics?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-blue-100 mb-8"></p><//p>
Join thousands of businesses already using our AI analytics platform.</p><>
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
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</><//>
)
}
export default AiAnalyticsPage
