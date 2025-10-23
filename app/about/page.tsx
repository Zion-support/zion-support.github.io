
"use client";
import React from "react";
import Head from "next/head";
import { Target, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<Helmet>
<title>About Us - Zion Tech Group</title>
<meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission, values, and expert team." />
<meta name="keywords" content="about, company, team, AI solutions, IT consulting, mission, values" />
</Helmet>
<main className="pt-20">
{/* Hero Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
About Zion Tech Group
</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
We are a team of passionate technologists dedicated to transforming businesses
through innovative AI and IT solutions.
</p>
</div>
</section>
{/* Stats Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
{stats.map((stat, index) => (
<div key={index} className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
<div className="text-gray-300">{stat.label}</div>
</div>
))}
</div>
</div>
</section>
{/* Mission Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
<p className="text-lg text-gray-300 mb-6">
To empower businesses with cutting-edge AI and IT solutions that drive growth,
efficiency, and innovation. We believe technology should be accessible,
powerful, and transformative.
</p>
<p className="text-lg text-gray-300">
Our team of experts combines deep technical knowledge with business acumen
to deliver solutions that not only meet your current needs but also prepare
you for the future.
</p>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
<div className="grid grid-cols-2 gap-6">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<Target className="w-8 h-8 text-white" />
</div>
<h3 className="text-lg font-bold text-white mb-2">Mission-Driven</h3>
<p className="text-sm text-gray-300">Focused on delivering value</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<Zap className="w-8 h-8 text-white" />
</div>
<h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
<p className="text-sm text-gray-300">Cutting-edge technology</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<Users className="w-8 h-8 text-white" />
</div>
<h3 className="text-lg font-bold text-white mb-2">Collaborative</h3>
<p className="text-sm text-gray-300">Partnership approach</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<Shield className="w-8 h-8 text-white" />
</div>
<h3 className="text-lg font-bold text-white mb-2">Secure</h3>
<p className="text-sm text-gray-300">Enterprise-grade security</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Values Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
The principles that guide everything we do
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{values.map((value, index) => (
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<value.icon className="w-8 h-8 text-white" />
</div>
<h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
<p className="text-gray-300">{value.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Team Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
The brilliant minds behind our innovative solutions
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{team.map((member, index) => (
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
<div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
<User className="w-12 h-12 text-white" />
</div>
<h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
<p className="text-purple-400 mb-4">{member.role}</p>
<p className="text-gray-300 text-sm">{member.bio}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
Ready to Work With Us?
</h2>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Let's discuss how we can help transform your business with our AI and IT solutions.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
Get Started
</button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
