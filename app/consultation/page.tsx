'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react'
const ConsultationPage: React.FC = () =>{
  const services = [
    {
      icon: Star,
      title: 'AI Strategy',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      benefits: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      benefits: ['Security vulnerability analysis', 'Compliance review', 'Risk assessment', 'Remediation plan']
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation.',
      benefits: ['Process optimization', 'Technology integration', 'Change management', 'Training programs']
    }
  ]
  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current technology landscape and business objectives.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs and goals.'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
interface ConsultationType {
  id: string
  name: string
  description: string
  duration: string
  price: string
  features: string[]
  popular: boolean
}
const ConsultationPage: React.FC = () =>{
  const [selectedType, setSelectedType] = useState<string>('')
  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'ROI analysis and recommendations',
        'Implementation timeline',
        'Follow-up support included'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack recommendations',
        'Implementation strategy',
        'Training and support planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '6-8 hours',
      price: '$1,500',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
    }
  ]
  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Specialist',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Expert',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'
    }
  ]
  const handleBooking = (typeId: string) =>{
    setSelectedType(typeId)
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`)
  }
  return (
    <React.Fragment&gt; <Helmet&gt; <title&gt;Consultation - Zion Tech Group | Expert IT Consulting</title&gt; <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy from Zion Tech Group's experienced professionals." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity audit, technology strategy" />
      </Helmet&gt;
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Expert IT Consultation></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get personalized guidance from our experts to transform your business with cutting-edge AI and IT solutions.
              </p&gt; </div>{/* Consultation Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">{consultationTypes.map((type, index) =>(
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3&gt; <p className="text-gray-300 mb-6">{type.description}</p&gt; <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span&gt;Duration</span&gt; <span className="text-cyan-400 font-medium">{type.duration}</span&gt; </div&gt; <div className="flex items-center justify-between text-sm text-gray-400">
                      <span&gt;Price</span&gt; <span className="text-cyan-400 font-medium">{type.price}</span&gt; </div&gt; </div&gt; <ul className="space-y-2 mb-6">{type.features.map((feature, featureIndex) =>(
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />{feature}
                      </li>))}
                  </ul&gt; <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">Schedule Consultation><//div>))}
            </div>{/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2&gt; <p className="text-gray-300 mb-8">Contact our experts to discuss your specific needs and schedule a consultation.
                </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div&gt; <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3&gt; <p className="text-gray-300 mb-2">(302) 464-0950</p&gt; <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p&gt; </div&gt; <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div&gt; <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3&gt; <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p&gt; <p className="text-sm text-gray-400">We'll respond within 24 hours</p&gt; </div&gt; <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-cyan-400" />
                  </div&gt; <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3&gt; <p className="text-gray-300 mb-2">Book a consultation</p&gt; <p className="text-sm text-gray-400">Available 24/7</p>{/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span&gt; </h1&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-white">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Flexible Scheduling</div&gt; <div className="text-gray-400">Book at your convenience</div&gt; </div&gt; </div&gt; <div className="flex items-center justify-center gap-4 text-white">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Expert Team</div&gt; <div className="text-gray-400">15+ years experience</div&gt; </div&gt; </div&gt; <div className="flex items-center justify-center gap-4 text-white">
                <CheckCircle className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Proven Results</div&gt; <div className="text-gray-400">98% client satisfaction</div&gt; </div&gt; </div&gt; <div className="text-center mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button&gt; </div&gt; </div&gt; </div&gt; </section>{/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation Type</h2&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto">Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
              </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{consultationTypes.map((type) =>(
                <div
                  key={type.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}>{type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular><//div>)}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3&gt; <p className="text-gray-300 text-sm mb-4">{type.description}</p&gt; <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span&gt; </div&gt; <div className="text-3xl font-bold text-white">{type.price}</div&gt; </div&gt; <ul className="space-y-3 mb-8">{type.features.map((feature, index) =>(
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />{feature}
                      </li>))}
                  </ul&gt; <button
                    onClick={() =>handleBooking(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}>Book Consultation><//div>))}
            </div&gt; </div&gt; </section>{/* Expert Team */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Meet Our Experts</h2&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our team of experienced professionals brings deep expertise across all areas of technology.
              </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{experts.map((expert, index) =>(
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div&gt; <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3&gt; <p className="text-purple-400 mb-2">{expert.role}</p&gt; <p className="text-gray-400 text-sm mb-4">{expert.experience} experience</p&gt; <div className="flex flex-wrap justify-center gap-2">{expert.expertise.map((skill, skillIndex) =>(
                      <span key={skillIndex} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">{skill}
                      </span>))}
                  </div&gt; </div>))}
            </div&gt; </div&gt; </section>{/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2&gt; <p className="text-xl text-gray-300">Contact us today to schedule your consultation or learn more about our services.
                </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div&gt; <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3&gt; <p className="text-gray-300">+1 (555) 123-4567</p&gt; </div&gt; <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div&gt; <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3&gt; <p className="text-gray-300">consultation@ziontech.com</p&gt; </div&gt; <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div&gt; <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3&gt; <p className="text-gray-300">123 Tech Street, Silicon Valley</p&gt; </div&gt; </div&gt; <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link&gt; <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">View All Services><//div&gt; </div&gt; </div&gt; </section>{/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2&gt; <p className="text-xl text-gray-300">Comprehensive technology consulting tailored to your business needs</p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{consultationServices.map((service, index) =>(
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div&gt; <h3 className="text-xl font-semibold text-white mb-3">{service}</h3&gt; <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p&gt; </div>))}
          </div&gt; </div&gt; </section>{/* Process Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2&gt; <p className="text-xl text-gray-300">How we deliver exceptional consultation services</p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span&gt; </div&gt; <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3&gt; <p className="text-gray-300">We analyze your current technology landscape and business objectives.</p&gt; </div&gt; <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span&gt; </div&gt; <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3&gt; <p className="text-gray-300">We develop a customized roadmap aligned with your goals.</p&gt; </div&gt; <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span&gt; </div&gt; <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3&gt; <p className="text-gray-300">We guide you through execution and provide ongoing support.</p&gt; </div&gt; </div&gt; </div&gt; </section>{/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?
          </h2&gt; <p className="text-xl text-gray-300 mb-8">Schedule a consultation with our experts and discover how technology can drive your success.
          </p&gt; <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />Schedule Consultation></button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />Contact Us><//div&gt; </div&gt; </section&gt; </div&gt; </React.Fragment>}
export default ConsultationPage></button&gt; </button&gt; </Link&gt; </button&gt; </div&gt; </div&gt; </div&gt; </button&gt; </h1&gt; </div&gt; </section&gt; </div&gt; </string>