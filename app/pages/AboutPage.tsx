'use client';
import React from 'react';

import Link from 'next/link';


export default function AboutPage() {
  const values = [
    {
      icon: Target
    title: 'Mission-Driven'
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'}
  {
    icon: Users
    title: 'Client-Focused'
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'}
  {
    icon: Award
    title: 'Excellence'
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'}
  {
    icon: Lightbulb
    title: 'Innovation'
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'}
  {
    icon: Shield
    title: 'Integrity'
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
}
  {
    icon: Zap
    title: 'Agility'
    description: 'We adapt quickly to changing market conditions and client needs to deliver optimal solutions.'}
  ]
  const team = [
    {
      name: 'Kleber Santos'
    role: 'CEO & Founder'
      description: 'Visionary leader with 15+ years in AI and technology innovation.'}
    {
      name: 'Sarah Johnson'
    role: 'CTO'
      description: 'Technical expert specializing in cloud architecture and AI implementation.'}
    {
      name: 'Michael Chen'
    role: 'Head of Security'
      description: 'Cybersecurity specialist with expertise in enterprise security solutions.'}
    {
      name: 'Emily Rodriguez'
    role: 'Lead AI Engineer'
    description: 'Machine learning expert focused on developing cutting-edge AI solutions.'}
  ]
  return (
    <div />
      <Helmet />
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group&apos;s mission, values, and expertise in AI and IT solutions. Discover our team and company culture." /></meta>
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" /></meta>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></section>
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"></h1>
              About Zion Tech Group</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
              Empowering businesses through innovative technology solutions and cutting-edge AI applications</p>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we&apos;ve been at the forefront of digital transformation, </p>
              helping companies leverage the power of artificial intelligence, cybersecurity, </p>
              and cloud technologies to achieve unprecedented growth.            </p>
          
          {/* Company Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="grid md: grid-cols-2 gap-8">
        <div />
                <p className="text-lg text-gray-300 mb-8">
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced technology
                  and make AI and IT solutions accessible to businesses of all sizes. Our journey began when</p>
                  our founder, Kleber Santos, recognized the growing gap between cutting-edge technology</p>
                  and practical business implementation.</p>
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Today, we&apos;ve grown into a trusted partner for organizations worldwide, helping them ;</p>
                  navigate the complex landscape of digital transformation while maintaining focus on </p>
                  security, scalability, and innovation.</p>
                </p>
              
              <div />
                <p className="text-lg text-gray-300 mb-8">
                  Our team combines deep technical expertise with real-world business understanding</p>
                  ensuring that every solution we deliver not only meets technical requirements but</p>
                  also drives tangible business value.</p>
                </p>
                <p className="text-gray-300">
                  We believe in the power of technology to solve complex problems and create opportunities</p>
                  for growth, efficiency, and innovation across all industries.</p>
                </p>

          {/* Values Section */}
          <div className="mb-16"></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md: grid-cols-2 l
  g:grid-cols-3 gap-8"></div>
              {values.map((value, index) => {
                const Icon = value.icon
                return (
    <div>
      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    <h3 className="text-xlfont-semiboldtext-whitemb-3">{value.title}
                    <p className="text-lg text-gray-300 mb-8">
            {value.description}
          
  );
              })}
            
          
          {/* Team Section */}</p>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md: grid-cols-2 l
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <span className="text-2xl font-bold text-white"></span>
                      {member.name.split(' ').map(n => n[0]).join('')}</span>
                  
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{member.name}</h3>
                  <p className="text-lg text-gray-300 mb-8">
            {member.role}</p>
                  <p className="text-lg text-gray-300 mb-8">
            {member.description}

          {/* Stats Section */}</p>
            <h2 className="text-3xl font-bold text-white text-center mb-8">By the Numbers</h2>
            <div className="grid md: grid-cols-4 gap-8">
        <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">500+
                <div className="text-gray-300">Projects Delivered,
              ;
              <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">50+
                <div className="text-gray-300">Happy Clients,
              ;
              <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">15+
                <div className="text-gray-300">Years Experience,
              ;
              <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">99.9%
                <div className="text-gray-300">Client Satisfaction
              
            
          ,
        ;
      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900"></section>
        <div className="container mx-auto px-4">
        <div className="grid md: grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <RocketLaunchIcon className="w-8 h-8 text-white" /></RocketLaunchIcon>
              
              <h2 className="text-3xlfont-boldtext-whitemb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8">
            
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes</p>
                to compete in the digital economy through innovative technology, exceptional service</p>
                and transformative digital strategies.</p>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <LightBulbIcon className="w-8 h-8 text-white" /></LightBulbIcon>
              
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-8">
                To be the global leader in AI-powered business solutions, creating a world where</p>
                technology seamlessly integrates with human potential to solve complex challenges</p>
                and drive sustainable growth.</p>
            
          
        
      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2>
              Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              The principles that guide everything we do and shape our company culture</p>
          <div className="grid md: grid-cols-2 l
  g:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
                <HeartIcon className="w-10 h-10 text-white" /></HeartIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
              <p className="text-gray-300">;</p>
                We&apos;re passionate about technology and its potential to transform businesses and improve lives.</p>
            <div className="text-center">
                <ShieldCheckIcon className="w-10 h-10 text-white" /></ShieldCheckIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300"></p>
                We maintain the highest ethical standards in all our business practices and client relationships.</p>
            <div className="text-center">
                <LightBulbIcon className="w-10 h-10 text-white" /></LightBulbIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300"></p>
                We continuously push the boundaries of what&apos;s possible with cutting-edge technology solutions.</p>
            <div className="text-center">
                <UserGroupIcon className="w-10 h-10 text-white" /></UserGroupIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300"></p>
                We believe in the power of teamwork and work closely with our clients as partners.</p>
            <div className="text-center">
                <StarIcon className="w-10 h-10 text-white" /></StarIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300"></p>
                We strive for excellence in every project, delivering solutions that exceed expectations.</p>
            <div className="text-center">
                <RocketLaunchIcon className="w-10 h-10 text-white" /></RocketLaunchIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300"></p>
                We&apos;re committed to continuous learning and helping our clients achieve sustainable growth.</p>
      {/* Team Section */}
      <section className="py-20 bg-slate-900"></section>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2>
              Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              A diverse group of talented professionals passionate about technology and innovation</p>
          <div className="grid md: grid-cols-2 l
  g:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center">
                <span className="text-white font-bold text-2xl">K</span>
              <h3 className="text-2xlfont-boldtext-whitemb-2">Kleber</h3>
              <p className="text-lg text-gray-300 mb-8">
            CEO & Founder</p>
              <p className="text-gray-300">
                Visionary leader with over 4 years of experience in AI and technology solutions.</p>
                Passionate about digital transformation and business growth.</p>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center">
                <span className="text-white font-bold text-2xl">A</span>
              <h3 className="text-2xlfont-boldtext-whitemb-2">AI Team</h3>
              <p className="text-lg text-gray-300 mb-8">
            Machine Learning Engineers</p>
              <p className="text-gray-300">
                Expert team specializing in artificial intelligence, machine learning</p>
                and data science solutions for complex business challenges.</p>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 text-center">
                <span className="text-white font-bold text-2xl">D</span>
              <h3 className="text-2xlfont-boldtext-whitemb-2">DevOps Team</h3>
              <p className="text-lg text-gray-300 mb-8">
            Cloud & Infrastructure</p>
              <p className="text-gray-300">
                Specialists in cloud infrastructure, cybersecurity, and DevOps practices</p>
                ensuring scalable and secure technology solutions.</p>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2>
              Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Numbers that reflect our commitment to excellence and client success</p>
          <div className="grid md: grid-cols-2 l
  g:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
            <div className="text-center">
            <div className="text-center">
            <div className="text-center">
      {/* CTA Section */}
      <section className="py-20 bg-slate-900"></section>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-8"></h2>
              Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-12"></p>
              Let&apos;s discuss how we can help transform your business with our technology solutions</p>
            
              <Link ;
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              ></Link>
                Get In Touch</Link>
                <ArrowRightIcon className="w-5 h-5" /></ArrowRightIcon>
              <Link ;
                href="/services" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hove
  r:text-white transition-all duration-300 flex items-center justify-center gap-2"
              ></Link>
                View Our Services</Link>
                <ArrowRightIcon className="w-5 h-5" /></ArrowRightIcon>
  );
}
}))