'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react'
interface SEOEnhancerProps {
className?: string
}
const features = [
{
icon: Brain,
title: "AI-Powered SEO",
description: "Advanced AI algorithms optimize your content for search engines",
benefits: ["Keyword optimization", "Content analysis", "Rank tracking"]
},
{
icon: Zap,
title: "Performance Boost",
description: "Dramatically improve your website's search engine rankings",
benefits: ["Faster indexing", "Better visibility", "Increased traffic"]
},
{
icon: Shield,
title: "Secure & Reliable",
description: "Enterprise-grade security with 99.9% uptime guarantee",
benefits: ["Data protection", "Secure hosting", "Regular backups"]
},
{
icon: Globe,
title: "Global Reach",
description: "Optimize for international markets and multiple languages",
benefits: ["Multi-language support", "Local SEO", "Global analytics"]
}
]
const benefits = [
"Increase organic traffic by up to 300%",
"Improve search rankings within 30 days",
"Comprehensive SEO audit and reporting",
"24/7 monitoring and optimization",
"Dedicated SEO specialist support",
"Custom SEO strategy development"
]
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {
return (
<>
<Helmet>
<title>SEOEnhancer | Zion Tech Group</title>
<meta name="description" content="Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="AI, artificial intelligence, SEOEnhancer, AI solutions, intelligent automation" />
</Helmet>
<Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
{/* Hero Section */}
<section className="relative py-20 px-4 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
<div className="relative max-w-7xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
SEOEnhancer
</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
Get Started
<ArrowRight className="ml-2 h-5 w-5" />
</button>
<button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Learn More
</button>
</div>
</div>
</section>
{/* Features Section */}
<section className="py-20 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
Powerful AI-driven features designed to transform your business operations
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{features.map((feature, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
<feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
<p className="text-gray-300 mb-4">{feature.description}</p>
<ul className="space-y-2">
{feature.benefits.map((benefit, idx) => (
<li key={idx} className="flex items-center text-sm text-gray-300">
<CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
{benefit}
</li>
))}
</ul>
</div>
))}
</div>
</div>
</section>
{/* Benefits Section */}
<section className="py-20 px-4 bg-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
Experience the benefits of cutting-edge AI technology
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{benefits.map((benefit, index) => (
<div key={index} className="flex items-start space-x-4">
<CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
<p className="text-gray-300 text-lg">{benefit}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
<p className="text-xl text-gray-300 mb-8">
Join thousands of businesses already using our AI solutions
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
<Phone className="mr-2 h-5 w-5" />
Call Now
</button>
<button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
<Mail className="mr-2 h-5 w-5" />
Email Us
</button>
</div>
</div>
</section>
</div>
<Footer />
</>
)
}
export default SEOEnhancer