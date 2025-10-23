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
<Helmet>
<title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>
<meta name="description" content="Professional 24/7 security monitoring services by Zion Tech Group. Advanced threat detection, real-time alerts, and comprehensive cybersecurity protection." />
<meta name="keywords" content="security monitoring, cybersecurity, threat detection, 24/7 monitoring, security alerts, Zion Tech Group" />
</Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="pt-20 pb-16 px-4" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<div className="text-center mb-16" loading="lazy">
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6" loading="lazy">Security Monitoring Services</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Protect your business with our advanced 24/7 security monitoring solutions.</p>
Real-time threat detection, instant alerts, and expert response to keep your data safe.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Shield className="mr-2 h-5 w-5" loading="lazy" />
Get Protected Now
</
<button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Phone className="mr-2 h-5 w-5" loading="lazy" />
Call (302) 464-0950
</
</div>
</div>
</div>
</section>
{/* Features Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<div className="text-center mb-16" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our Security Monitoring?</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" loading="lazy">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4" loading="lazy">
<feature.icon className="h-6 w-6 text-white" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
<p className="text-gray-300" loading="lazy">{feature.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Benefits Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<div className="text-center mb-16" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Key Benefits</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience comprehensive security protection with our advanced monitoring services.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">{benefits.map((benefit, index) => (
<div key={index} className="flex items-start space-x-3" loading="lazy">
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" loading="lazy" />
<p className="text-gray-300 text-lg" loading="lazy">{benefit}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
<div className="max-w-4xl mx-auto text-center" loading="lazy">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" loading="lazy">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Secure Your Business?</h2>
<p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our security experts to discuss your monitoring needs and get a customized protection plan.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Phone className="mr-2 h-5 w-5" loading="lazy" />
Call (302) 464-0950
</
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Mail className="mr-2 h-5 w-5" loading="lazy" />
Email Us
</
</div>
</div>
</div>
</section>
</div>
</>
)
}
export default SecurityMonitoringPage
