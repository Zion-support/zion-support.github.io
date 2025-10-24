'use client';
import React from 'react';
import { Users, CheckCircle, Star, Shield, Award, Target, Globe, Brain, Cloud, Code, BarChart, TrendingUp, Phone, Mail, MapPin, Clock, ArrowRight, Zap, Cpu, Database, Lock, Smartphone, Settings, Calendar, FileText, MessageSquare, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.jpg',
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ]
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.',
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.',
    }
  ]
  const achievements = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ]
  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI for enterprises.',
    },
    {
      year: '2019',
      title: 'First AI Platform',
      description: 'Launched our flagship AI automation platform, serving 50+ clients.',
    },
    {
      year: '2020',
      title: 'Quantum Computing Division',
      description: 'Established quantum computing research and development capabilities.',
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.',
    },
    {
      year: '2022',
      title: 'AI Ethics Initiative',
      description: 'Launched comprehensive AI ethics framework and responsible AI practices.',
    },
    {
      year: '2023',
      title: 'Breakthrough Technologies',
      description: 'Introduced cutting-edge solutions in autonomous systems and edge computing.',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Awarded "AI Innovation Leader" by TechCrunch and "Best AI Solutions Provider" by Gartner.',
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Zion Tech Group
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are pioneers in AI and IT solutions, transforming businesses through innovative technology and expert guidance.
        <div className='prose prose-lg max-w-none'>
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission
            <p className='text-gray-600 mb-4'>
              At Zion Tech Group, we are dedicated to transforming
              businesses through cutting-edge AI and IT solutions. Our
              mission is to empower organizations with the technology they
              need to thrive in the digital age.
            <p className='text-gray-600'>
              We combine deep technical expertise with innovative thinking
              to deliver solutions that drive real business value.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team
            <p className="text-gray-300">50+ skilled professionals
          <div className="text-center">
            <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Focused Solutions
            <p className="text-gray-300">Tailored to your needs
          <div className="text-center">
            <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Innovation
            <p className="text-gray-300">Cutting-edge technology
          <div className="text-center">
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable
            <p className="text-gray-300">Enterprise-grade security
        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  <div className="text-gray-600 font-medium">
                    {stat.label}
              ))}
        {/* Mission Section */}
        <section className="py-20 bg-gray-50 rounded-xl mb-16">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission,
  
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced AI technology and empower businesses of all sizes 
                  to achieve their full potential through innovative digital solutions.
                <p className="text-lg text-gray-600 mb-8">
                  We believe that every business deserves access to cutting-edge technology that can 
                  transform their operations, improve efficiency, and drive growth.
                <$2 />
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">
                  Get in Touch,
  
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision
                <p className="text-gray-600">
                  To be the world's leading provider of AI-powered business solutions, 
                  helping organizations across all industries achieve digital transformation 
                  and sustainable growth in the age of artificial intelligence.
        {/* Values Section */}
        <section className="py-20 bg-white rounded-xl mb-16">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
  
              <p className="text-xl text-gray-600">
                The principles that guide everything we do,
  
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  <p className="text-gray-600">
                    {value.description}
              ))}
        {/* Team Section */}
        <section className="py-20 bg-gray-50 rounded-xl mb-16">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
  
              <p className="text-xl text-gray-600">
                The experts behind our innovative solutions,
  
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-600" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    <p className="text-gray-600">
                      {member.bio}
              ))}
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI-powered solutions.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <$2 />
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start a Project
  
              <$2 />
                to="/careers"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                Join Our Team,
  
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              About Zion Tech Group,
  
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Leading the future of AI-powered enterprise solutions with cutting-edge technology, 
              innovative thinking, and unwavering commitment to client success.
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">ISO 27001 Certified
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Reach
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission,
  
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize artificial intelligence and cutting-edge technology for enterprises worldwide, 
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Transform businesses through AI-powered solutions
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Accelerate digital transformation initiatives
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Drive sustainable innovation and growth
            <div>
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
                Our Vision,
  
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To be the world's leading provider of AI and quantum computing solutions, 
                creating a future where technology seamlessly integrates with human potential 
                to solve the world's most complex challenges.
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Core Values
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Innovation & Excellence
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Integrity & Trust
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Collaboration & Respect
      {/* Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Values
  
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture,
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}
            ))}
      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Meet Our Team,
  
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, and enterprise technology
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                <h3 className="text-xl font-bold text-white mb-2">{member.name}
                <p className="text-cyan-400 font-medium mb-3">{member.role}
                <p className="text-gray-300 text-sm mb-4">{member.bio}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {skill}
                  ))}
            ))}
      {/* Achievements */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Achievements
  
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our impact and success,
  
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {achievement.number}
                <div className="text-gray-300 font-medium">
                  {achievement.label}
            ))}
      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Journey
  
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key milestones in our company's growth and innovation,
  
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}
                      <p className="text-gray-300">{item.description}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900">
                  <div className="w-1/2">
              ))}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <$2 />
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
  
            <$2 />
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
  
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
