'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const BlockchainIntegrationServicesPage: React.FC = () => {
const features = [
{
icon: Shield,
title: 'Secure Blockchain Integration',
description: 'Advanced blockchain technology integration with enterprise-grade security'
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
title: 'Multi-Chain Support',
description: 'Support for multiple blockchain networks and protocols'
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
        <title>Blockchain Integration Services | Zion Tech Group</title>
<meta name="description" content="Professional Blockchain Integration Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
</Head>
<div className="container mx-auto px-4 py-16">
<div className="text-center mb-16">
<h1>Blockchain Integration Services
</h1>
<p>Transform your business with our advanced blockchain integration solutions.
Powered by cutting-edge AI technology and industry expertise.
</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
<h2>Why Choose Our Blockchain Integration Services?
</h2>
<div className="grid md:grid-cols-2 gap-6">
{/* Features Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2>Why Choose Our Blockchain Integration Services?
</h2>
<p>Our blockchain integration solutions deliver unmatched performance, security, and scalability.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{features.map((feature, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
<feature>
</feature>
<h3>{feature.title}</h3>
<p>{feature.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Benefits Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2>Key Benefits
</h2>
<p>Experience the power of our blockchain integration solutions for your business.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{benefits.map((benefit, index) => (
<div key={index} className="flex items-center space-x-3">
<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
<span>{benefit}</span>
</div>
))}
</div>
</div>
<div className="text-center">
<h2>Ready to Get Started?
</h2>
<p>Contact our experts to discuss your blockchain integration needs and get a customized solution.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
<Phone>Call Now
</Phone>h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
<Mail>Email Us
</Mail>h1>
</div>
</div>
</div>
</div>
)
}
export default BlockchainIntegrationServicesPage
</button>
</button>
</h2>
</section>
</h1>
</div>
</div>