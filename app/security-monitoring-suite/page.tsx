'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
Shield,
Eye,
AlertTriangle,
CheckCircle,
BarChart,
Clock,
Users,
Zap,
Phone,
Mail,
MapPin,
ArrowRight,
Brain,
Globe,
Lock,
Activity,
TrendingUp,
Settings,
Database,
Target,
Monitor;}
} from 'lucide-react'
const SecurityMonitoringSuitePage: React.FC = () => {
const features = [
{
icon: Monitor,
title: 'Real-time Dashboard',
description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.'
},
{
icon: AlertTriangle,
title: 'Advanced Alerts',
description: 'Intelligent alerting system that notifies you of security threats and anomalies instantly.'
},
{
icon: BarChart,
title: 'Security Analytics',
description: 'Detailed security reports and analytics to help you understand and improve your security posture.'
},
{
icon: Zap,
title: 'Automated Response',
description: 'Automated incident response and threat mitigation to protect your systems 24/7.'
}
]
const benefits = [
'24/7 security monitoring and protection',
'Real-time threat detection and alerts',
'Comprehensive security analytics',
'Automated incident response',
'Compliance monitoring and reporting',
'Easy-to-use dashboard interface',
'Scalable for any business size',
'Expert security team support'
]
return (
<>
<Head>
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
<meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response." />
</Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Hero Section */}
<section className="pt-20 pb-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1>Security Monitoring Suite
</h1>
<p>Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,
and automated response capabilities to protect your business 24/7.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
<Shield>Start Free Trial
</Shield>h1>
<button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
<Phone>Call (302) 464-0950
</Phone>h1>
</div>
</div>
</div>
</section>
{/* Features Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2>Platform Features
</h2>
<p>Our security monitoring suite provides everything you need to protect your business from cyber threats.
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
<h2>Why Choose Our Suite?
</h2>
<p>Experience comprehensive security protection with our all-in-one monitoring platform.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{benefits.map((benefit, index) => (
<div key={index} className="flex items-start space-x-3">
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
<p>{benefit}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
<h2>Ready to Secure Your Business?
</h2>
<p>Start your free trial today and experience the power of our security monitoring suite.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
<Phone>Call (302) 464-0950
</Phone>h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
<Mail>Email Us
</Mail>h1>
</div>
</div>
</div>
</section>
</div>
</>
)
}
export default SecurityMonitoringSuitePage
</button>
</button>
</h2>
</button>
</button>
</h1>