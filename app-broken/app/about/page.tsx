'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
Users,
Award,
Target,
Globe,
Shield,
Zap,
Brain,
BarChart,
CheckCircle,
Star,
Quote,
User,
Building,
GraduationCap,
Heart,
ThumbsUp,
MessageCircle,
ArrowRight,
Phone,
Mail,
MapPin
} from 'lucide-react'
const AboutPage: React.FC = () => {
const stats = [
{ number: '500+', label: 'Projects Completed' },
{ number: '99.9%', label: 'Client Satisfaction' },
{ number: '24/7', label: 'Support Available' },
{ number: '50+', label: 'Expert Team Members' }
]
const values = [
{
icon: Brain,
title: 'Innovation',
description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
},
{
icon: Shield,
title: 'Security',
description: 'Your data and systems are protected with enterprise-grade security measures and best practices.'
},
{
icon: Users,
title: 'Collaboration',
description: 'We work closely with our clients as partners, ensuring solutions that truly meet their needs.'
},
{
icon: Target,
title: 'Excellence',
description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
}
]
const team = [
{
name: 'Sarah Johnson',
role: 'CEO & Founder',
image: '/team/sarah.jpg',
bio: '15+ years in AI and technology leadership'
},
{
name: 'Michael Chen',
role: 'CTO',
image: '/team/michael.jpg',
bio: 'Expert in machine learning and cloud architecture'
},
{
name: 'Emily Rodriguez',
role: 'Head of AI Solutions',
image: '/team/emily.jpg',
bio: 'PhD in Computer Science, AI research specialist'
},
{
name: 'David Kim',
role: 'Lead Developer',
image: '/team/david.jpg',
bio: 'Full-stack developer with 10+ years experience'
}
]
return (
<div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
<Helmet>
<title>About Us - Zion Tech Group</title>
<meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission, values, and expert team.&quot; />
<meta name=&quot;keywords&quot; content=&quot;about, company, team, AI solutions, IT consulting, mission, values&quot; />
</Helmet>
<main className=&quot;pt-20&quot;>
{/* Hero Section */}
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
<div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
<h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
About Zion Tech Group
</h1>
<p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
We are a team of passionate technologists dedicated to transforming businesses
through innovative AI and IT solutions.
</p>
</div>
</section>
{/* Stats Section */}
<section className=&quot;py-16 px-4 sm:px-6 lg:px-8 bg-white/5&quot;>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;></div>
{stats.map((stat, index) => (
<div key={index} className=&quot;text-center&quot;></div>
<div className=&quot;text-3xl md:text-4xl font-bold text-white mb-2&quot;>{stat.number}</div>
<div className=&quot;text-gray-300&quot;>{stat.label}</div>
</div>
))}
</div>
</div>
</section>
{/* Mission Section */}
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;></div>
<div></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>Our Mission</h2>
<p className=&quot;text-lg text-gray-300 mb-6&quot;>
To empower businesses with cutting-edge AI and IT solutions that drive growth,
efficiency, and innovation. We believe technology should be accessible,
powerful, and transformative.
</p>
<p className=&quot;text-lg text-gray-300&quot;>
Our team of experts combines deep technical knowledge with business acumen
to deliver solutions that not only meet your current needs but also prepare
you for the future.
</p>
</div>
<div className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-8&quot;></div>
<div className=&quot;grid grid-cols-2 gap-6&quot;></div>
<div className=&quot;text-center&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;></div>
<Target className=&quot;w-8 h-8 text-white&quot; />
</div>
<h3 className=&quot;text-lg font-bold text-white mb-2&quot;>Mission-Driven</h3>
<p className=&quot;text-sm text-gray-300&quot;>Focused on delivering value</p>
</div>
<div className=&quot;text-center&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;></div>
<Zap className=&quot;w-8 h-8 text-white&quot; />
</div>
<h3 className=&quot;text-lg font-bold text-white mb-2&quot;>Innovation</h3>
<p className=&quot;text-sm text-gray-300&quot;>Cutting-edge technology</p>
</div>
<div className=&quot;text-center&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;></div>
<Users className=&quot;w-8 h-8 text-white&quot; />
</div>
<h3 className=&quot;text-lg font-bold text-white mb-2&quot;>Collaborative</h3>
<p className=&quot;text-sm text-gray-300&quot;>Partnership approach</p>
</div>
<div className=&quot;text-center&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;></div>
<Shield className=&quot;w-8 h-8 text-white&quot; />
</div>
<h3 className=&quot;text-lg font-bold text-white mb-2&quot;>Secure</h3>
<p className=&quot;text-sm text-gray-300&quot;>Enterprise-grade security</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Values Section */}
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-white/5&quot;>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>Our Values</h2>
<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
The principles that guide everything we do
</p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
{values.map((value, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform&quot;></div>
<value.icon className=&quot;w-8 h-8 text-white&quot; />
</div>
<h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{value.title}</h3>
<p className=&quot;text-gray-300&quot;>{value.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Team Section */}
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;text-center mb-16&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>Meet Our Team</h2>
<p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
The brilliant minds behind our innovative solutions
</p>
</div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
{team.map((member, index) => (
<div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center&quot;></div>
<div className=&quot;w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform&quot;></div>
<User className=&quot;w-12 h-12 text-white&quot; />
</div>
<h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{member.name}</h3>
<p className=&quot;text-purple-400 mb-4&quot;>{member.role}</p>
<p className=&quot;text-gray-300 text-sm&quot;>{member.bio}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
<div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
<h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
Ready to Work With Us?
</h2>
<p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
Let's discuss how we can help transform your business with our AI and IT solutions.
</p>
<div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
<button className=&quot;bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
Get Started
</button>
<button className=&quot;border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300&quot;>
Contact Us
</button>
</div>
</div>
</section>
</main>
</div>
)
}
export default AboutPage