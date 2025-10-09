import React from 'react';
import { Brain, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const _team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
    },
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Technical expert specializing in machine learning and cloud architecture.',
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and developer with expertise in deep learning and NLP.',
import { Users, Target, Brain, Shield } from 'lucide-react';

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable business outcomes and ROI.',
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic technology partners.',

    { number: '150+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
      title: 'Excellence',
      description: 'We deliver solutions that exceed expectations and drive real business value.'
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.'
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.'
    }

  const team = [
      bio: 'Visionary leader with 15+ years in AI and technology innovation.'
      bio: 'Technical expert specializing in machine learning and cloud architecture.'
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating scalable solutions.'

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            About Zion Tech Group
          </h1>
          <p className='text-xl text-gray-600'>
            Leading the future of AI and IT solutions

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">50+ skilled professionals</p>
            <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Focused Solutions</h3>
            <p className="text-gray-300">Tailored to your needs</p>
            <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology</p>
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-300">Enterprise-grade security</p>

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
              ))}
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced AI technology and empower businesses of all sizes 
                  to achieve their full potential through innovative digital solutions.
                <p className="text-lg text-gray-600 mb-8">
                  We believe that every business deserves access to cutting-edge technology that can 
                  transform their operations, improve efficiency, and drive growth.
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </Link>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the world's leading provider of AI-powered business solutions, 
                  helping organizations across all industries achieve digital transformation 
                  and sustainable growth in the age of artificial intelligence.

        {/* Values Section */}
        <section className="py-20 bg-white">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                    {value.description}

        {/* Team Section */}
                Meet Our Team
                The experts behind our innovative solutions
            
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
                      {member.bio}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI-powered solutions.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                Start a Project
                to="/careers"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                Join Our Team

      <Footer />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">About</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced about solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
  );
};

export default AboutPage;