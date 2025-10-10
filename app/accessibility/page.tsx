'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react'
const AccessibilityPage: React.FC = () => {
const features = [
{
icon: Eye,
title: 'Visual Accessibility',
description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly']
},
{
icon: MousePointer,
title: 'Motor Accessibility',
description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']
},
{
icon: Volume2,
title: 'Audio Accessibility',
description: 'Audio alternatives and visual indicators for users with hearing impairments.',
benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
},
{
icon: Shield,
title: 'Security & Privacy',
description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications']
},
{
icon: Users,
title: 'Inclusive Design',
description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']
},
{
icon: Globe,
title: 'Global Standards',
description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
}
]
const standards = [
{
name: 'WCAG 2.1 AA',
description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
status: 'Fully Compliant'
},
{
name: 'Section 508',
description: 'U.S. federal accessibility requirements',
status: 'Fully Compliant'
},
{
name: 'ADA',
description: 'Americans with Disabilities Act compliance',
status: 'Fully Compliant'
},
{
name: 'EN 301 549',
description: 'European accessibility standard',
status: 'Fully Compliant'
}
]
return (
<React.Fragment>
<Helmet>
<title>Accessibility - Zion Tech Group | Inclusive AI and IT Solutions</title>
<meta name="description" content="Zion Tech Group is committed to accessibility. Learn about our inclusive design principles, compliance standards, and accessible AI and IT solutions." />
<meta name="keywords" content="accessibility, inclusive design, WCAG, ADA compliance, accessible technology, Zion Tech Group" />
</Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Hero Section */}
<section className="relative py-20 px-4 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
<div className="relative max-w-7xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
Accessibility
<span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
First
</span>
</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
We believe technology should be accessible to everyone. Our solutions are designed with
inclusivity at their core, ensuring equal access for users of all abilities.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
Learn More
</button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
Contact Us
</button>
</div>
</div>
</section>
{/* Features Section */}
<section className="py-20 px-4">
<div className="container mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
Accessibility Features
</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
Comprehensive accessibility solutions for inclusive technology
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{features.map((feature, index) => (
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<feature.icon className="w-8 h-8 text-white" />
</div>
<h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
<p className="text-gray-300 mb-4">{feature.description}</p>
{feature.benefits && (
<ul className="space-y-2">
{feature.benefits.map((benefit, idx) => (
<li key={idx} className="flex items-center text-sm text-gray-400">
<CheckCircle className="w-4 h-4 text-green-400 mr-2" />
{benefit}
</li>
))}
</ul>
)}
</div>
))}
</div>
</div>
</section>
{/* Standards Section */}
<section className="py-20 px-4 bg-white/5">
<div className="container mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
Compliance Standards
</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
We meet and exceed international accessibility standards
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{standards.map((standard, index) => (
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<CheckCircle className="w-8 h-8 text-white" />
</div>
<h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
<p className="text-gray-300 mb-4">{standard.description}</p>
<span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
{standard.status}
</span>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4">
<div className="container mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
Ready to Make Technology Accessible?
</h2>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Let's work together to create inclusive solutions that work for everyone.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
Get Started
</button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
Learn More
</button>
</div>
</div>
</section>
</div>
</React.Fragment>
)
}
export default AccessibilityPage