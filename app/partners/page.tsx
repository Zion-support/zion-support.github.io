'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { CheckCircle ExternalLink Award Users Handshake TrendingUp Building2 Zap ArrowRight } from "lucide-react";
interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle ExternalLink Award Users Handshake TrendingUp } from "lucide-react";
const PartnersPage: React.FC = () => {
  const partners = [
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership for enterprise solutions',
      category: 'Technology',
      website: 'https://microsoft.com',
      tier: 'strategic'
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for machine learning and data analytics',
      category: 'Cloud',
      website: 'https://cloud.google.com',
      tier: 'preferred'
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'strategic'
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and data analytics solutions',
      category: 'Enterprise',
      website: 'https://ibm.com',
      tier: 'preferred'
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and cloud infrastructure solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
      logo: '🔷',
      description: 'Cloud infrastructure and AI solutions',
      category: 'Technology Partner'
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud computing and machine learning services',
      category: 'Cloud Partner'
      name: 'Google Cloud',
      logo: '🔵',
      description: 'AI and data analytics platform',
      category: 'AI Partner'
      name: 'IBM',
      logo: '🔵',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise Partner'
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling programs',
    'Dedicated partner success manager',
    'Priority support and resources',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
  ];

  const tiers = [
      name: 'Strategic Partners',
      description: 'Our most important technology and business partners',
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      color: 'from-yellow-400 to-orange-500'
      name: 'Preferred Partners',
      description: 'Certified partners with proven track record',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-400 to-purple-500'
      name: 'Certified Partners',
      description: 'Authorized partners with specialized expertise',
      icon: <Handshake className="w-8 h-8 text-green-500" />,
      color: 'from-green-400 to-teal-500'
  ];

  const stats = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partners and ecosystem that help us deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, technology partners, strategic partnerships, ecosystem" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Our</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Partners;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            We work with industry-leading technology partners to deliver comprehensive solutions that drive innovation and business success.

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We collaborate with leading technology companies to provide you with the best solutions and support.
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-30, 0"></di, v>
                <div className="flex items-center mb-6"></div>
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mr-4"></div>
                    <img, src={partne, r.log, o} al, t={partne, r.nam, e} classNam, e="w-12, h-12, object-contai, n" />
                  <div></div>
                    <h3, className="tex, t-xl, font-semibold, text-whit, e">{partne, r.nam, e}</h, 3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      partner.tier === 'strategic' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                
                <p, className="tex, t-gra, y-300, mb-4">{partne, r.descriptio, n}</p>
                <p, className="tex, t-sm, text-cya, n-400, mb-6">{partne, r.categor, y}</p>
                
                  <a;
                    hre, f={partne, r.websit, e}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    Visit Website;
                    <ExternalLink className="w-4 h-4 ml-1" />
                )}
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer different partnership levels to meet the needs of our diverse partner ecosystem.
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, text-cente, r"></di, v>
                <div className="flex justify-center mb-6"></div>
                <h3, className="tex, t-2xl, font-bold, text-white, mb-4">{tie, r.nam, e}</h, 3>
                <p, className="tex, t-gra, y-30, 0">{tie, r.descriptio, n}</p>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Join our partner ecosystem and unlock exclusive benefits and opportunities.
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6"></h2>
              Become a Partner;
            <p className="text-xl text-gray-300 mb-8"></p>
              Join our partner ecosystem and help us deliver innovative solutions to businesses worldwide.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              <Link;
                to="/about"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Expand your reach through our global partner network'
      icon: Award,
      title: 'Certification Programs',
      description: 'Access to exclusive training and certification opportunities'
      icon: Users,
      title: 'Joint Marketing',
      description: 'Co-marketing opportunities and joint go-to-market strategies'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, certifications, and joint opportunities." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, AI partners, business partnerships" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              Partner with Us</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Join our ecosystem of technology partners and unlock new opportunities;
              for growth and innovation.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Become a Partner;
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                View Partner Benefits;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Our Technology Partners;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We work with industry leaders to deliver the best solutions to our clients;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, text-center, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div, className="tex, t-4xl, mb-4">{partne, r.log, o}</di, v>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"></h3>
                  <p, className="tex, t-gra, y-300, mb-4">{partne, r.descriptio, n}</p>
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"></span>
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Partner Benefits;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Discover the advantages of partnering with Zion Tech Group;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                    <benefit.icon className="w-8 h-8 text-white" />
                  <h3, className="tex, t-xl, font-bold, text-white, mb-4">{benefi, t.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-30, 0">{benefi, t.descriptio, n}</p>
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Partnership Types;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the partnership level that best fits your business goals;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Technology Partner</h3>
                <ul className="space-y-3 mb-6"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Access to our technology stack</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Technical support and training</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Co-marketing opportunities</span>
                <button className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"></button>
                  Learn More;
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-2 ring-blue-500"></div>
                <div className="text-center mb-4"></div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                <h3 className="text-2xl font-bold text-white mb-4">Solution Partner</h3>
                <ul className="space-y-3 mb-6"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Technology Partner</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Joint solution development</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Revenue sharing opportunities</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Dedicated partner manager</span>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"></button>
                  Apply Now;
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Partner</h3>
                <ul className="space-y-3 mb-6"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Solution Partner</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Exclusive market access</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Custom partnership agreements</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Priority support and resources</span>
                <button className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"></button>
                  Contact Us;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Partner with Us?
              <p className="text-xl text-gray-300 mb-8"></p>
                Join our ecosystem and unlock new opportunities for growth and innovation.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Become a Partner;
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Download Partner Kit;
      <Footer />
  );

export default PartnersPage;