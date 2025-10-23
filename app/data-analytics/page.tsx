'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
BarChart,
TrendingUp,
Database,
CheckCircle,
Brain,
Clock,
Users,
Zap,
Phone,
Mail,
MapPin,
ArrowRight,
Globe,
Lock,
Activity,
Settings,
Target,
Eye,
PieChart,
LineChart;}
} from 'lucide-react'
const features = [
{
icon: BarChart,
title: 'Advanced Data Visualization',
description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports.'
},
{
icon: Brain,
title: 'AI-Powered Analytics',
description: 'Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.'
},
{
icon: Database,
title: 'Data Integration',
description: 'Connect and analyze data from multiple sources to get a complete picture of your business.'
},
{
icon: TrendingUp,
title: 'Predictive Analytics',
description: 'Forecast future trends and make data-driven decisions with predictive modeling.'
}
]
const benefits = [
'Make data-driven business decisions',
'Identify new opportunities and trends',
'Improve operational efficiency',
'Reduce costs through optimization',
'Enhance customer experience',
'Comply with data regulations',
'Real-time insights and reporting',
'Custom analytics solutions'
]
return (
<>
<Helmet>
<title>Data Analytics Services - Zion Tech Group | Business Intelligence</title>
<meta name="description" content="Professional data analytics services by Zion Tech Group. Advanced business intelligence, data visualization, and AI-powered insights for your business." />
<meta name="keywords" content="data analytics, business intelligence, data visualization, AI analytics, Zion Tech Group" />
</Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="pt-20 pb-16 px-4" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<div className="text-center mb-16" loading="lazy">
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6" loading="lazy">Data Analytics Services</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your data into actionable insights with our advanced analytics solutions.</p>
Make smarter decisions and drive business growth with AI-powered data analysis.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<BarChart className="mr-2 h-5 w-5" loading="lazy" />
Get Analytics Now
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
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Our Analytics Solutions</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">We provide comprehensive data analytics services to help you unlock the power of your data.</p>
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
<p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Drive business success with our comprehensive data analytics services.</p>
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
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Unlock Your Data?</h2>
<p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our analytics experts to discuss your data needs and get a customized solution.</p>
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
export default DataAnalyticsPage
