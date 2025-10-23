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
Database;}
} from 'lucide-react'
const SecurityMonitoringPage: React.FC = () => {
const features = [
{
icon: Eye,
title: '24/7 Real-time Monitoring',
description: 'Continuous surveillance of your entire IT infrastructure with instant threat detection and response.'
},
{
icon: AlertTriangle,
title: 'Advanced Threat Detection',
description: 'AI-powered analysis to identify sophisticated cyber threats before they impact your business.'
},
{
icon: BarChart,
title: 'Comprehensive Analytics',
description: 'Detailed security reports and insights to help you understand and improve your security posture.'
},
{
icon: Zap,
title: 'Instant Response',
description: 'Automated incident response and immediate notification systems to minimize security breaches.'
}
]
const benefits = [
'24/7 continuous security monitoring',
'AI-powered threat detection and analysis',
'Real-time alerts and notifications',
'Comprehensive security reporting',
'Automated incident response',
'Compliance monitoring and reporting',
'Expert security team support',
'Customizable monitoring rules'
]
return (
<>
<Head>
        <title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>
<meta name="description" content="Professional 24/7 security monitoring services by Zion Tech Group. Advanced threat detection, real-time alerts, and comprehensive cybersecurity protection." />
</Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Hero Section */}
<section className="pt-20 pb-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1>Security Monitoring Services
</h1>
<p>Protect your business with our advanced 24/7 security monitoring solutions.
Real-time threat detection, instant alerts, and expert response to keep your data safe.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
<Shield>Get Protected Now
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
<h2>Why Choose Our Security Monitoring?
</h2>
<p>Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.
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
<p>Experience comprehensive security protection with our advanced monitoring services.
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
<p>Contact our security experts to discuss your monitoring needs and get a customized protection plan.
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
export default SecurityMonitoringPage
</button>
</button>
</h2>
</button>
</button>
</h1>