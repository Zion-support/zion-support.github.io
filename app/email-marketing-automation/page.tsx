'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
Mail,
Target,
CheckCircle,
BarChart,
Clock,
Users,
Zap,
Phone,
MapPin,
ArrowRight,
Brain,
Globe,
Lock,
Activity,
TrendingUp,
Settings,
Database,
Send,
PieChart;}
} from 'lucide-react'
const features = [
{
icon: Mail,
title: 'Automated Campaigns',
description: 'Create and manage sophisticated email marketing campaigns with AI-powered automation.'
},
{
icon: Target,
title: 'Advanced Segmentation',
description: 'Intelligent audience segmentation and personalization for maximum engagement and conversion.'
},
{
icon: BarChart,
title: 'Analytics & Insights',
description: 'Comprehensive analytics and reporting to track performance and optimize your campaigns.'
},
{
icon: Zap,
title: 'Smart Triggers',
description: 'Behavior-based triggers and workflows to send the right message at the right time.'
}
]
const benefits = [
'Increase email engagement rates',
'Automate repetitive marketing tasks',
'Personalize customer experiences',
'Track and optimize campaign performance',
'Scale your email marketing efforts',
'Improve customer retention',
'Generate more qualified leads',
'Save time and resources'
]
return (
<>
<Helmet>
<title>Email Marketing Automation - Zion Tech Group | Marketing Platform</title>
<meta name="description" content="Advanced email marketing automation platform by Zion Tech Group. Create, manage, and optimize email campaigns with AI-powered automation." />
<meta name="keywords" content="email marketing automation, marketing platform, email campaigns, marketing automation, Zion Tech Group" />
</Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>{/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Email Marketing Automation</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your email marketing with our AI-powered automation platform.</p>
Create engaging campaigns, automate workflows, and drive better results.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
<Mail className="mr-2 h-5 w-5" />
Start Free Trial
</
<button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
<Phone className="mr-2 h-5 w-5" />
Call (302) 464-0950
</
</div>
</div>
</div>
</section>
{/* Features Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platform Features</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our email marketing automation platform provides everything you need to succeed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
<feature.icon className="h-6 w-6 text-white" />
</div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
<p className="text-gray-300">{feature.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Benefits Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">Drive better results with our comprehensive email marketing automation platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (
<div key={index} className="flex items-start space-x-3">
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
<p className="text-gray-300 text-lg">{benefit}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Automate Your Marketing?</h2>h2>
<p className="text-xl text-purple-100 mb-8">Start your free trial today and transform your email marketing with automation.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
<Phone className="mr-2 h-5 w-5" />
Call (302) 464-0950
</
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
<Mail className="mr-2 h-5 w-5" />
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
export default EmailMarketingAutomationPage
