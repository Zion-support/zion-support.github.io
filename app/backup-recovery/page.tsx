'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Clock, ShieldCheck } from 'lucide-react'
const BackupRecoveryPage: React.FC = () => {
const features = [
{
icon: Shield,
title: 'Secure Backup Solutions',
description: 'Advanced encryption and secure storage for your critical business data'
},
{
icon: Zap,
title: 'Fast Recovery',
description: 'Lightning-fast data recovery with minimal downtime for your business'
},
{
icon: Brain,
title: 'AI-Powered Monitoring',
description: 'Intelligent monitoring and automated backup scheduling'
},
{
icon: Globe,
title: 'Global Redundancy',
description: 'Worldwide backup storage with multiple redundancy layers'
}
]
const benefits = [
'Advanced data protection and encryption',
'Real-time backup monitoring and alerts',
'Enterprise-grade security and compliance',
'Scalable and flexible backup solutions',
'24/7 technical support',
'Easy integration with existing systems',
'Cost-effective pricing plans',
'Proven track record of success'
]
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<Head>
        <title>Backup & Recovery | Zion Tech Group</title>
<meta name="description" content="Professional Backup & Recovery services by Zion Tech Group. Advanced AI and IT solutions for your business." />
</Head>
<div className="container mx-auto px-4 py-16">
<div className="text-center mb-16">
<h1>Backup & Recovery
</h1>
<p>Transform your business with our advanced backup and recovery solutions.
Powered by cutting-edge AI technology and industry expertise.
</p>
</div>
</section>
{/* Features Section */}
<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2>Why Choose Our Backup & Recovery?
</h2>
<p>Our backup and recovery solutions deliver unmatched performance, security, and scalability.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{features.map((feature, index) => (
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
<feature.icon className="w-12 h-12 text-purple-400 mb-4" />
<h3>{feature.title}</h3>
<p>{feature.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Benefits Section */}
<section className="py-16 px-4 bg-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2>Key Benefits
</h2>
<p>Experience the power of our backup and recovery solutions for your business.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{benefits.map((benefit, index) => (
<div key={index} className="flex items-center space-x-3">
<CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
<span>{benefit}</span>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-16 px-4">
<div className="max-w-4xl mx-auto text-center">
<h2>Ready to Get Started?
</h2>
<p>Contact our experts to discuss your backup and recovery needs and get a customized solution.
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
<div className="text-center">
<h2>Ready to Get Started?
</h2>
<p>Contact our experts to discuss your backup and recovery needs and get a customized solution.
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
export default BackupRecoveryPage
</button>
</button>
</button>
</button>
</section>
</h2>
</h1>