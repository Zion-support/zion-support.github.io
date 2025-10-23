'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
CheckSquare,
Users,
CheckCircle,
BarChart,
Clock,
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
Calendar,
FileText;}
} from 'lucide-react'
const ProjectManagementProPage: React.FC = () => {
const features = [
{
icon: CheckSquare,
title: 'Task Management',
description: 'Organize and track tasks with advanced project management tools and AI-powered insights.'
},
{
icon: Users,
title: 'Team Collaboration',
description: 'Seamless team collaboration with real-time updates, comments, and file sharing.'
},
{
icon: BarChart,
title: 'Progress Tracking',
description: 'Comprehensive project analytics and reporting to track progress and performance.'
},
{
icon: Zap,
title: 'Automation',
description: 'Automate repetitive tasks and workflows to improve efficiency and productivity.'
}
]
const benefits = [
'Improve project delivery times',
'Enhance team collaboration',
'Track progress and performance',
'Automate routine tasks',
'Better resource allocation',
'Reduce project risks',
'Increase team productivity',
'Streamline project workflows'
]
return (
<>
<Head>
        <title>Project Management Pro - Zion Tech Group | Project Management Platform</title>
<meta name="description" content="Advanced project management platform by Zion Tech Group. Manage projects, teams, and tasks with AI-powered insights and automation." />
</Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Hero Section */}
<section className="pt-20 pb-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1>Project Management Pro
</h1>
<p>Streamline your projects with our comprehensive management platform.
Organize tasks, collaborate with teams, and deliver projects on time.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
<CheckSquare>Start Free Trial
</CheckSquare>h1>
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
<p>Our project management platform provides everything you need to succeed.
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
<p>Transform your project management with our comprehensive platform.
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
<h2>Ready to Manage Better?
</h2>
<p>Start your free trial today and transform your project management.
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
export default ProjectManagementProPage
</button>
</button>
</h2>
</h2>
</button>
</button>
</h1>