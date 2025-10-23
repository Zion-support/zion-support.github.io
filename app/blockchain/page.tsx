'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react'
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
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
<Helmet>
<title>Blockchain Solutions | Zion Tech Group</title>
<meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" />
</Helmet>
<div className="container mx-auto px-4 py-16" loading="lazy">
<div className="text-center mb-16" loading="lazy">
<h1 className="text-5xl font-bold text-white mb-6" loading="lazy">Blockchain Solutions</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your business with cutting-edge blockchain technology and decentralized solutions.</p>
Powered by advanced AI and industry expertise.
</p>
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our blockchain solutions deliver unmatched performance, security, and scalability.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" loading="lazy">{features.map((feature, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300" loading="lazy">
<feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
<p className="text-gray-300" loading="lazy">{feature.description}</p>
</div>
))}
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16" loading="lazy">
<h2 className="text-3xl font-bold text-white text-center mb-8" loading="lazy">Why Choose Our Blockchain Solutions?</h2>h2>
<div className="grid md:grid-cols-2 gap-6" loading="lazy">{benefits.map((benefit, index) => (
<div key={index} className="flex items-center space-x-3" loading="lazy">
<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" loading="lazy" />
<span className="text-gray-300" loading="lazy">{benefit}</span>
</div>
))}
</div>
</div>
{/* Key Benefits */}
<section className="py-16 bg-white" loading="lazy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy">
<div className="text-center mb-12" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" loading="lazy">Why Choose Our Blockchain Services?</h2>h2>
<p className="text-xl text-gray-600" loading="lazy">Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">
<div className="text-center" loading="lazy">
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
<Link className="w-8 h-8 text-blue-600" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Blockchain Experts</h3>
<p className="text-gray-600" loading="lazy">Certified blockchain developers and architects</p>
</div>
<div className="text-center" loading="lazy">
<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
<Shield className="w-8 h-8 text-green-600" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Security First</h3>
<p className="text-gray-600" loading="lazy">Comprehensive security audits and best practices</p>
</div>
<div className="text-center" loading="lazy">
<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
<Zap className="w-8 h-8 text-purple-600" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Rapid Development</h3>
<p className="text-gray-600" loading="lazy">Fast delivery with proven development frameworks</p>
</div>
<div className="text-center" loading="lazy">
<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
<Target className="w-8 h-8 text-orange-600" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Custom Solutions</h3>
<p className="text-gray-600" loading="lazy">Tailored blockchain solutions for your specific needs</p>
</div>
</div>
</div>
</section>
{/* Services by Category */}
{categories.map(category => (
<section key={category} className="py-16 bg-gray-50" loading="lazy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy">
<div className="text-center mb-12" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" loading="lazy">{category} Services</h2>
<p className="text-xl text-gray-600" loading="lazy">Professional {category.toLowerCase()} solutions powered by blockchain technology</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">{blockchainServices</div>
.filter(service => service.category === category)
.map((service, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" loading="lazy">
<div className="text-4xl mb-4" loading="lazy">{service.icon}</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3" loading="lazy">{service.title}</h3>
<p className="text-gray-600 mb-4" loading="lazy">{service.description}</p>
<div className="mb-4" loading="lazy">
<div className="flex items-center justify-between mb-2" loading="lazy">
<span className="text-2xl font-bold text-blue-600" loading="lazy">{service.price}</span>
<span className="text-sm text-gray-500" loading="lazy">Market: {service.marketPrice}</span>
</div>
<div className="text-sm text-green-600 font-semibold" loading="lazy">Save up to 50% vs market rates</div>
</div>
<div className="mb-4" loading="lazy">
<h4 className="font-semibold text-gray-900 mb-2" loading="lazy">Key Features:</h4>
<ul className="space-y-1" loading="lazy">
{service.features.map((feature, featureIndex) => (
<li key={featureIndex} className="flex items-center text-sm text-gray-600" loading="lazy">
<CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" loading="lazy" />
{feature}
</li>
))}
</ul>
</div>
<div className="mb-4" loading="lazy">
<h4 className="font-semibold text-gray-900 mb-2" loading="lazy">Technologies:</h4>
<div className="flex flex-wrap gap-2" loading="lazy">{service.technologies.map((tech, techIndex) => (</div>
<span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded" loading="lazy">{tech}</span>
))}
</div>
</div>
<div className="mb-6" loading="lazy">
<h4 className="font-semibold text-gray-900 mb-2" loading="lazy">Business Benefits:</h4>
<ul className="space-y-1" loading="lazy">
{service.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-center text-sm text-gray-600" loading="lazy">
<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" loading="lazy" />
{benefit}
</li>
))}
</ul>
</div>
<button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors" loading="lazy" aria-label="Action button">Get Blockchain Quote</button>
</div>
))}
</div>
</div>
</section>
))}
{/* Blockchain Capabilities Showcase */}
<section className="py-16 bg-white" loading="lazy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy">
<div className="text-center mb-12" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" loading="lazy">Our Blockchain Capabilities</h2>
<p className="text-xl text-gray-600" loading="lazy">Comprehensive blockchain technologies and methodologies for modern business applications</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">
<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg" loading="lazy">
<Link className="w-12 h-12 text-blue-600 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Smart Contracts</h3>
<p className="text-gray-600" loading="lazy">Automated contract execution with transparency and security</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg" loading="lazy">
<Shield className="w-12 h-12 text-green-600 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">DeFi Protocols</h3>
<p className="text-gray-600" loading="lazy">Decentralized finance solutions for modern financial services</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg" loading="lazy">
<Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">NFT Marketplaces</h3>
<p className="text-gray-600" loading="lazy">Digital asset trading and ownership verification platforms</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg" loading="lazy">
<Target className="w-12 h-12 text-orange-600 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Enterprise Solutions</h3>
<p className="text-gray-600" loading="lazy">Private and consortium blockchains for business applications</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg" loading="lazy">
<Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Web3 Applications</h3>
<p className="text-gray-600" loading="lazy">Decentralized applications with user-friendly interfaces</p>
</div>
<div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg" loading="lazy">
<BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" loading="lazy" />
<h3 className="text-xl font-semibold text-gray-900 mb-2" loading="lazy">Blockchain Analytics</h3>
<p className="text-gray-600" loading="lazy">Comprehensive data analysis and visualization tools</p>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white" loading="lazy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold mb-4" loading="lazy">Ready to Transform with Blockchain?</h2>h2>
<p className="text-xl mb-8 text-blue-100" loading="lazy">Contact our blockchain experts for a free consultation and custom blockchain strategy development</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<a
href="tel:+13024640950"
className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center" loading="lazy">📞 +1 302 464 0950</a>
<a
href="mailto:kleber@ziontechgroup.com"
className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" loading="lazy">✉️ kleber@ziontechgroup.com</a>
</div>
<div className="mt-8 text-sm text-blue-200" loading="lazy">
<p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
</div>
</div>
</section>
</div>
</div>
)
}
export default BlockchainPage
