'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
Cloud,
Settings,
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
Target,
Eye,
Database,
Server,
Monitor;}
} from 'lucide-react'
const features = [
{
icon: Cloud,
title: 'Multi-Cloud Management',
description: 'Manage and monitor your infrastructure across AWS, Azure, Google Cloud, and other platforms from a single dashboard.'
},
{
icon: Settings,
title: 'Automated Scaling',
description: 'Intelligent auto-scaling based on demand to optimize costs and performance automatically.'
},
{
icon: BarChart,
title: 'Cost Optimization',
description: 'Advanced analytics and recommendations to reduce cloud costs while maintaining performance.'
},
{
icon: Zap,
title: 'DevOps Integration',
description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'
}
]
const benefits = [
'Centralized cloud infrastructure management',
'Automated scaling and optimization',
'Cost reduction and optimization',
'Enhanced security and compliance',
'Real-time monitoring and alerts',
'Easy deployment and configuration',
'Multi-cloud support',
'Expert technical support'
]
return (
<>
<Helmet>
<title>Cloud Infrastructure Manager - Zion Tech Group | Cloud Management Platform</title>
<meta name="description" content="Comprehensive cloud infrastructure management platform by Zion Tech Group. Manage, monitor, and optimize your cloud resources across multiple providers." />
<meta name="keywords" content="cloud infrastructure manager, cloud management, multi-cloud, cloud optimization, Zion Tech Group" />
</Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="pt-20 pb-16 px-4" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<div className="text-center mb-16" loading="lazy">
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6" loading="lazy">Cloud Infrastructure Manager</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Streamline your cloud operations with our comprehensive infrastructure management platform.</p>
Monitor, optimize, and scale your cloud resources across multiple providers.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Cloud className="mr-2 h-5 w-5" loading="lazy" />
Start Free Trial
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
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Platform Features</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our cloud infrastructure manager provides everything you need to optimize your cloud operations.</p>
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
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Optimize your cloud infrastructure with our comprehensive management platform.</p>
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
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Optimize Your Cloud?</h2>
<p className="text-xl text-purple-100 mb-8" loading="lazy">Start your free trial today and experience the power of our cloud infrastructure manager.</p>
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
export default CloudInfrastructureManagerPage
