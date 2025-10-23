'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
Shield,
Search,
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
Eye;}
} from 'lucide-react'
const PenetrationTestingPage: React.FC = () => {
const features = [
{
icon: Search,
title: 'Comprehensive Vulnerability Assessment',
description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.'
},
{
icon: Target,
title: 'Simulated Attack Scenarios',
description: 'Real-world attack simulations to test your defenses and response capabilities.'
},
{
icon: BarChart,
title: 'Detailed Security Reports',
description: 'Comprehensive reports with prioritized recommendations and remediation guidance.'
},
{
icon: Zap,
title: 'Expert Security Analysis',
description: 'Professional security experts conduct thorough testing using industry-standard methodologies.'
}
]
const benefits = [
'Identify security vulnerabilities before attackers do',
'Comply with industry regulations and standards',
'Improve your security posture and defenses',
'Receive detailed remediation recommendations',
'Test incident response procedures',
'Validate security controls effectiveness',
'Expert analysis and reporting',
'Ongoing security improvement guidance'
]
return (
<>
<Head>
        <title>Penetration Testing Services - Zion Tech Group | Security Assessment</title>
<meta name="description" content="Professional penetration testing services by Zion Tech Group. Comprehensive security assessments, vulnerability testing, and expert security analysis." />
</Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Hero Section */}
<section className="pt-20 pb-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1>Penetration Testing Services
</h1>
<p>Identify and fix security vulnerabilities before attackers exploit them.
Our expert penetration testing services help secure your systems and protect your business.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
<Shield>Schedule Assessment
</Shield>h1>
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
<h2>Our Penetration Testing Approach
</h2>
<p>We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.
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
<p>Strengthen your security defenses with our comprehensive penetration testing services.
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
<h2>Ready to Test Your Security?
</h2>
<p>Contact our security experts to schedule a comprehensive penetration test for your systems.
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
export default PenetrationTestingPage
</button>
</button>
</h2>
</h2>
</button>
</button>
</h1>