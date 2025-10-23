'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react'
const BusinessAppsPage: React.FC = () => {
const features = [
{
icon: Smartphone,
title: 'Mobile Apps',
description: 'Custom mobile applications for iOS and Android platforms'
},
{
icon: Monitor,
title: 'Web Applications',
description: 'Responsive web applications with modern UI/UX design'
},
{
icon: Cloud,
title: 'Cloud Integration',
description: 'Seamless cloud integration and deployment solutions'
},
{
icon: Brain,
title: 'AI-Powered Business Apps',
description: 'Advanced AI technology to transform your business applications and improve efficiency'
},
{
icon: Zap,
title: 'High Performance',
description: 'Lightning-fast processing and real-time analytics for optimal business results'
},
{
icon: Shield,
title: 'Enterprise Security',
description: 'Bank-level security with encryption and compliance standards for your business data'
},
{
icon: Globe,
title: 'Global Reach',
description: 'Worldwide deployment and support for international business applications'
}
]
const benefits = [
'Advanced AI technology integration',
'Real-time processing and analytics',
'Enterprise-grade security and compliance',
'Scalable and flexible business solutions',
'24/7 technical support',
'Easy integration with existing systems',
'Cost-effective pricing plans',
'Proven track record of success'
]
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Business Apps | Zion Tech Group</title><>
<//title>
<meta name="description" content="Professional Business Apps development by Zion Tech Group. Advanced AI and IT solutions for your business." /><>
</meta name="description" content="Professional Business Apps development by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="business apps, mobile apps, web apps, AI solutions, IT services, Zion Tech Group" /><>
</meta name="keywords" content="business apps, mobile apps, web apps, AI solutions, IT services, Zion Tech Group" />
</Helmet><//Helmet>
{/* Hero Section */}
<section className="relative py-20 px-4"><>
</section className="relative py-20 px-4">
<div className="max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
Business Apps</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Transform your business with our advanced business app solutions.</p><//p>
Powered by cutting-edge AI technology and industry expertise.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</section><//section>
{/* Features Section */}
<section className="py-16 px-4"><>
</section className="py-16 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Why Choose Our Business Apps?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Our business app solutions deliver unmatched performance, security, and scalability.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
{features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div><>
<//div>
<feature.icon className="w-12 h-12 text-purple-400 mb-4" /><>
</feature.icon className="w-12 h-12 text-purple-400 mb-4" />
<h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><>
<//h3>
<p className="text-gray-300">{feature.description}</p><>
<//p>
</div><//div>
))}
</div><>
<//div>
</div><//div>
{/* Benefits Section */}
<section className="py-16 px-4 bg-white/5"><>
</section className="py-16 px-4 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Key Benefits</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Experience the power of our business app solutions for your business.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div><//div>
{benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="flex items-center space-x-3"></div><>
<//div>
<CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /><>
</CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
<span className="text-gray-300">{benefit}</span><>
<//span>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
</section><//section>
{/* CTA Section */}
<section className="py-16 px-4"><>
</section className="py-16 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
Contact our experts to discuss your business app needs and get a customized solution.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
Call Now
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
<div className="text-center"></div><>
<//div>
<h2 className="text-3xl font-bold text-white mb-6"></h1><//h1>
Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
Contact our experts to discuss your business app needs and get a customized solution.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
Call Now
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
</div><//div>
)
}
export default BusinessAppsPage
