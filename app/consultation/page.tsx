'use client';
import React, { useState } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { Calendar Clock Users CheckCircle ArrowRight Phone Mail MapPin Zap Target Award } from "lucide-react";
interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: '',
    urgency: 'medium'

  const consultationTypes: ConsultationType[] = [
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2 hours',
      price: 'Free',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Resource planning'
      ],
      popular: true;
      id: 'technical',
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and solution architecture design',
      duration: '3 hours',
      price: '$500',
      features: [
        'Technical architecture review',
        'Integration planning',
        'Security assessment',
        'Performance optimization',
        'Scalability planning'
      ],
      popular: false;
      id: 'security',
      name: 'Security & Compliance',
      description: 'Cybersecurity assessment and compliance strategy development',
      duration: '2 hours',
      price: 'Free',
      features: [
        'Security vulnerability assessment',
        'Compliance gap analysis',
        'Security framework implementation',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false;
  ];

  const services = [
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and data-driven insights'
      icon: Target,
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with secure, reliable cloud computing solutions'
      icon: Award,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and compliance'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data;
    alert('Thank you for your interest! We will contact you within 24 hours.');
  return (</HTMLInputElement>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your AI, cloud, and digital transformation needs with Zion Tech Group." />
        <meta name="keywords" content="free consultation, technology consulting, AI consultation, cloud consulting, digital transformation" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Free</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Consultation;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Get expert advice on your technology needs. Our consultants will help you identify opportunities and create a roadmap for success.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              <span>Schedule Now</span>
              <Calendar className="w-5 h-5" />
            <Link;
              to="/services"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              <span>Our Services</span>
              <ArrowRight className="w-5 h-5" />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">What We Consult On</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our experts provide strategic guidance across all areas of technology and digital transformation.
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-300, text-cente, r"></di, v>
                <div className="flex justify-center mb-6"></div>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center"></div>
                    <service.icon className="w-8 h-8 text-cyan-400" />
                <h3, className="tex, t-xl, font-semibold, text-white, mb-4">{servic, e.titl, e}</h, 3>
                <p, className="tex, t-gra, y-30, 0">{servic, e.descriptio, n}</p>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Consultation Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the consultation type that best fits your needs and schedule.
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div, key={typ, e.i, d} classNam, e={`relative, bg-slat, e-80, 0/50, rounded-2xl, p-8, border transitio, n-all, duration-30, 0 ${
                type.popular ? 'border-cyan-500' : 'border-cyan-500/20 hover:border-cyan-500/40'
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold"></div>
                      Most Popular;
                )}
                
                <div className="text-center mb-6"></div>
                  <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{typ, e.nam, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-4">{typ, e.descriptio, n}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400"></div>
                    <span className="flex items-center"></span>
                      <Clock className="w-4 h-4 mr-1" />
                  <div, className="tex, t-3xl, font-bold, text-cya, n-400, mt-4">{typ, e.pric, e}</di, v>
                
                <ul className="space-y-3 mb-8"></ul>
                    <li, key={inde, x} classNam, e="flex, items-star, t"></l, i>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span, className="tex, t-gra, y-30, 0">{featur, e}</spa, n>
                  ))}
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"></button>
                  Book Consultation;
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Request a Consultation</h2>
            <p className="text-xl text-gray-300"></p>
              Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20"></div>
            <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *</label>
                  <input;
                    type="text"
                    id="name"
                    name="name"
                    valu, e={formDat, a.nam, e}
                    onChang, e={handleInputChang, e}
                    required;
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your full name"
                  />
                <div></div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *</label>
                  <input;
                    type="email"
                    id="email"
                    name="email"
                    valu, e={formDat, a.emai, l}
                    onChang, e={handleInputChang, e}
                    required;
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="your@email.com"
                  />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company</label>
                  <input;
                    type="text"
                    id="company"
                    name="company"
                    valu, e={formDat, a.compan, y}
                    onChang, e={handleInputChang, e}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your company name"
                  />
                <div></div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number</label>
                  <input;
                    type="tel"
                    id="phone"
                    name="phone"
                    valu, e={formDat, a.phon, e}
                    onChang, e={handleInputChang, e}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="+1 (555) 123-4567"
                  />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2">
                    Consultation Type</label>
                  <select;
                    id="consultationType"
                    name="consultationType"
                    valu, e={formDat, a.consultationTyp, e}
                    onChang, e={handleInputChang, e}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    <option value="">Select consultation type</option>
                    <option value="strategy">AI Strategy Consultation</option>
                    <option value="technical">Technical Deep Dive</option>
                    <option value="security">Security & Compliance</option>
                <div></div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">
                    Urgency</label>
                  <select;
                    id="urgency"
                    name="urgency"
                    valu, e={formDat, a.urgenc, y}
                    onChang, e={handleInputChang, e}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    <option value="low">Low - Within 2 weeks</option>
                    <option value="medium">Medium - Within 1 week</option>
                    <option value="high">High - Within 2-3 days</option>
              
              <div></div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message</label>
                <textarea;
                  id="message"
                  name="message"
                  valu, e={formDat, a.messag, e}
                  onChang, e={handleInputChang, e}
                  row, s={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Tell us about your project and what you'd like to discuss..."
                />
              
              <button;
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Request Consultation</span>
                <ArrowRight className="w-5 h-5" />

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Business?
            <p className="text-xl text-gray-300 mb-8"></p>
              Don't wait to start your digital transformation journey. Schedule your free consultation today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <Phone className="w-5 h-5" />
              <Link;
                to="/services"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>View Services</span>
                <ArrowRight className="w-5 h-5" />
  );

export default ConsultationPage;