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
<Helmet><>
</Helmet>
<title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title><>
<//title>
<meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response." /><>
</meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response." />
<meta name="keywords" content="security monitoring suite, cybersecurity platform, threat detection, security alerts, Zion Tech Group" /><>
</meta name="keywords" content="security monitoring suite, cybersecurity platform, threat detection, security alerts, Zion Tech Group" />
</Helmet><>
<//Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><//div>
{/* Hero Section */}</div><>
<//div>
<section className="pt-20 pb-16 px-4"><>
</section className="pt-20 pb-16 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
Security Monitoring Suite</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,</p><//p>
and automated response capabilities to protect your business 24/7.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Shield className="mr-2 h-5 w-5" /></Shield className="mr-2 h-5 w-5" />
Start Free Trial
</h1><>
<//h1>
<button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
Call (302) 464-0950
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
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Platform Features</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Our security monitoring suite provides everything you need to protect your business from cyber threats.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
{features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div><>
<//div>
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div><>
<//div>
<feature.icon className="h-6 w-6 text-white" /><>
</feature.icon className="h-6 w-6 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300">{feature.description}</p><>
<//p>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
</section><//section>
{/* Benefits Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Why Choose Our Suite?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Experience comprehensive security protection with our all-in-one monitoring platform.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div><//div>
{benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="flex items-start space-x-3"></div><>
<//div>
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" /><>
</CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
<p className="text-gray-300 text-lg">{benefit}</p><>
<//p>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
</section><//section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Ready to Secure Your Business?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
Start your free trial today and experience the power of our security monitoring suite.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
Call (302) 464-0950
</h1><>
<//h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Mail className="mr-2 h-5 w-5" /></Mail className="mr-2 h-5 w-5" />
Email Us
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
</><//>
)
}
export default SecurityMonitoringSuitePage
