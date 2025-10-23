'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react'
const BlockchainPage: React.FC = () => {
const features = [
{
icon: Shield,
title: 'Secure Blockchain Solutions',
description: 'Advanced blockchain technology with enterprise-grade security and compliance'
},
{
icon: Zap,
title: 'High Performance',
description: 'Lightning-fast blockchain transactions and smart contract execution'
},
{
icon: Brain,
title: 'AI-Powered Solutions',
description: 'Intelligent blockchain solutions powered by advanced AI technology'
},
{
icon: Globe,
title: 'Global Reach',
description: 'Worldwide blockchain deployment and support for international businesses'
}
]
const benefits = [
'Advanced blockchain technology integration',
'Real-time transaction processing',
'Enterprise-grade security and compliance',
'Scalable and flexible blockchain solutions',
'24/7 technical support',
'Easy integration with existing systems',
'Cost-effective pricing plans',
'Proven track record of success'
]
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<Head>
        <title>Blockchain Solutions | Zion Tech Group</title>
<meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
</Head>
<div className="container mx-auto px-4 py-16">
<div className="text-center mb-16">
<h1>Blockchain Solutions
</h1>
<p>Transform your business with cutting-edge blockchain technology and decentralized solutions.
Powered by advanced AI and industry expertise.
</p>
<p>Our blockchain solutions deliver unmatched performance, security, and scalability.
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
{features.map((feature, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
<feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
<h3>{feature.title}</h3>
<p>{feature.description}</p>
</div>
))}
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
<h2>Why Choose Our Blockchain Solutions?
</h2>
<div className="grid md:grid-cols-2 gap-6">
{benefits.map((benefit, index) => (
<div key={index} className="flex items-center space-x-3">
<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
<span>{benefit}</span>
</div>
))}
</div>
</div>
{/* Key Benefits */}
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2>Why Choose Our Blockchain Services?
</h2>
<p>Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
<Link>
</Link>div>
<h3>Blockchain Experts</h3>
<p>Certified blockchain developers and architects</p>
</div>
<div className="text-center">
<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
<Shield>
</Shield>div>
<h3>Security First</h3>
<p>Comprehensive security audits and best practices</p>
</div>
<div className="text-center">
<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
<Zap>
</Zap>div>
<h3>Rapid Development</h3>
<p>Fast delivery with proven development frameworks</p>
</div>
<div className="text-center">
<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
<Target>
</Target>div>
<h3>Custom Solutions</h3>
<p>Tailored blockchain solutions for your specific needs</p>
</div>
</div>
</div>
</section>
{/* Services by Category */}
{categories.map(category => (
<section key={category} className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2>{category} Services
</h2>
<p>Professional {category.toLowerCase()} solutions powered by blockchain technology
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{blockchainServices
.filter(service => service.category === category)
.map((service, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
<div>{service.icon}</div>
<h3>{service.title}</h3>
<p>{service.description}</p>
<div className="mb-4">
<div className="flex items-center justify-between mb-2">
<span>{service.price}</span>
<span>Market: {service.marketPrice}</span>
</div>
<div>Save up to 50% vs market rates
</div>h1>
</div>
<div className="mb-4">
<h4>Key Features:</h4>
<ul className="space-y-1">
{service.features.map((feature, featureIndex) => (
<li key={featureIndex} className="flex items-center text-sm text-gray-600">
<CheckCircle>{feature}
</CheckCircle>li>
))}
</ul>
</div>
<div className="mb-4">
<h4>Technologies:</h4>
<div className="flex flex-wrap gap-2">
{service.technologies.map((tech, techIndex) => (
<span>{tech}
</span>
))}
</div>
</div>
<div className="mb-6">
<h4>Business Benefits:</h4>
<ul className="space-y-1">
{service.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-center text-sm text-gray-600">
<Star>{benefit}
</Star>li>
))}
</ul>
</div>
<button>Get Blockchain Quote
</button>
</div>
))}
</div>
</div>
</section>
))}
{/* Blockchain Capabilities Showcase */}
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2>Our Blockchain Capabilities
</h2>
<p>Comprehensive blockchain technologies and methodologies for modern business applications
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
<Link className="w-12 h-12 text-blue-600 mx-auto mb-4" />
<h3>Smart Contracts</h3>
<p>Automated contract execution with transparency and security</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
<Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
<h3>DeFi Protocols</h3>
<p>Decentralized finance solutions for modern financial services</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
<Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
<h3>NFT Marketplaces</h3>
<p>Digital asset trading and ownership verification platforms</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
<Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
<h3>Enterprise Solutions</h3>
<p>Private and consortium blockchains for business applications</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
<Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
<h3>Web3 Applications</h3>
<p>Decentralized applications with user-friendly interfaces</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
<BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
<h3>Blockchain Analytics</h3>
<p>Comprehensive data analysis and visualization tools</p>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2>Ready to Transform with Blockchain?
</h2>
<p>Contact our blockchain experts for a free consultation and custom blockchain strategy development
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a>📞 +1 302 464 0950
</a>h1>
<a>✉️ kleber@ziontechgroup.com
</a>h1>
</div>
<div className="mt-8 text-sm text-blue-200">
<p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
</div>
</div>
</section>
</div>
</div>
)
}
export default BlockchainPage
