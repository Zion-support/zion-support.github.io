'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react'
const FiveGImplementationPage: React.FC = () => {
const features = [
{
icon: Wifi,
title: '5G Network Design',
description: 'Complete 5G network design and implementation with optimal coverage and performance.',
benefits: ['Network planning', 'Coverage optimization', 'Performance tuning']
},
{
icon: Zap,
title: 'Ultra-Low Latency',
description: 'Ultra-low latency 5G networks for real-time applications and mission-critical operations.',
benefits: ['< 1 ms latency', 'Real-time apps', 'Mission critical']
},
{
icon: Clock,
title: '24/7 Network Monitoring',
description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
},
{
icon: Users,
title: 'Scalable Infrastructure',
description: 'Scalable 5G infrastructure that grows with your business needs and user demands.',
benefits: ['Auto-scaling', 'Capacity planning', 'Future-proof design']
},
{
icon: Shield,
title: 'Enhanced Security',
description: 'Advanced encryption and security protocols for enterprise-grade protection',
benefits: ['End-to-end encryption', 'Security protocols', 'Threat detection']
},
{
icon: BarChart,
title: 'Performance Analytics',
description: 'Advanced analytics and reporting for 5G network performance and optimization.',
benefits: ['Performance insights', 'Usage analytics', 'Optimization recommendations']
}
]
return (
<>
<Helmet>
<title>5G Network Implementation - Zion Tech Group | Zion Tech Group - AI & IT Solutions</title>
<meta name=&quot;description&quot; content=&quot;Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.&quot; />
<meta name=&quot;keywords&quot; content=&quot;5G implementation, network infrastructure, IoT connectivity, edge computing, Zion Tech Group&quot; />
</Helmet>
<div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
{/* Hero Section */}
<section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
<div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse&quot; /></div>
<div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse&quot; style={{ animationDelay: '1s' }} /></div>
<div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
<h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
5G Network
<span className=&quot;block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
Implementation
</span>
</h1>
<p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
Complete 5G network implementation services with ultra-low latency, high-speed connectivity,
and advanced features for modern applications and IoT ecosystems.
</p>
<div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
<button className=&quot;bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
Get Started
</button>
<button className=&quot;border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300&quot;>
Schedule Demo
</button>
</div>
</div>
</section>
{/* Features Section */}
<section className=&quot;py-20 px-4&quot;>
<div className=&quot;container mx-auto&quot;></div>
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
Advanced 5G Features
</h2>
<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
Cutting-edge 5G technology for the next generation of connectivity
</p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
{features.map((feature, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform&quot;></div>
<feature.icon className=&quot;w-8 h-8 text-white&quot; />
</div>
<h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{feature.title}</h3>
<p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
{feature.benefits && (
<ul className=&quot;space-y-2&quot;>
{feature.benefits.map((benefit, idx) => (
<li key={idx} className=&quot;flex items-center text-sm text-gray-400&quot;>
<CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
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
{/* CTA Section */}
<section className=&quot;py-20 px-4&quot;>
<div className=&quot;container mx-auto text-center&quot;></div>
<h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
Ready to Implement 5G?
</h2>
<p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
Contact our experts to discuss your 5G implementation needs and get started with the next generation of connectivity.
</p>
<div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
<button className=&quot;bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
Contact Us
</button>
<button className=&quot;border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300&quot;>
Learn More
</button>
</div>
</div>
</section>
</div>
</>
)
}
export default FiveGImplementationPage