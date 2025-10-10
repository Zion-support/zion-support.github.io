'use client';
import React, { useState } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { ArrowRight ExternalLink CheckCircle TrendingUp Users Award Building2 Shield Zap } from "lucide-react";
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight TrendingUp Users DollarSign Clock CheckCircle } from "lucide-react";
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and inconsistent response times across multiple channels.',
      solution: 'Implemented AI-powered chatbot system with natural language processing and automated ticket routing.',
      results: [
        '60% reduction in customer service costs',
        '85% improvement in response time',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '4 specialists'
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Complete migration to AWS cloud with microservices architecture and automated CI/CD pipelines.',
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain operations leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and inventory optimization system',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '$2.5M annual savings',
        '99.5% forecast accuracy'
      ],
      duration: '6 months',
      team: '8 specialists'
      id: 2,
      title: 'Cloud Migration & Security Enhancement',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Migrated to secure cloud infrastructure with advanced threat detection',
      results: [
        '99.9% uptime achieved',
        '50% faster deployment times',
        'Enhanced security and compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 specialists'
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'MediCare Health Systems',
      industry: 'Healthcare',
      challenge: 'Need to strengthen security posture and achieve HIPAA compliance for patient data protection.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and staff training programs.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents in 12 months',
        '40% reduction in security vulnerabilities',
        'Enhanced patient data protection'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into customer behavior and inventory management.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and predictive analytics.',
      results: [
        '35% increase in sales through better insights',
        '25% reduction in inventory costs',
        'Real-time business intelligence',
        'Improved customer targeting'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '5 specialists'
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics'];
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies;
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Success</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Stories;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Discover how we've helped businesses transform and achieve their goals through innovative technology solutions.

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
            ))}

      <section className="py-10 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-4"></div>
              <button;
                ke, y={industr, y}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedIndustry === industry;
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
            ))}</button>
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div, key={stud, y.i, d} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, overflow-hidden, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-30, 0"></di, v>
                <div className="aspect-video bg-slate-700"></div>
                  <img, src={stud, y.imag, e} al, t={stud, y.titl, e} classNam, e="w-full, h-full, object-cove, r" />
                <div className="p-8"></div>
                  <div className="flex items-center justify-between mb-4"></div>
                    <span, className="tex, t-sm, text-cya, n-400, font-mediu, m">{stud, y.industr, y}</spa, n>
                    <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                      <spa, n>{stud, y.duratio, n}</spa, n>
                      <span>•</span>
                      <spa, n>{stud, y.tea, m}</spa, n>
                  
                  <h3, className="tex, t-2xl, font-bold, text-white, mb-4">{stud, y.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-4"><stron, g>Clien, t:</stron, g> {stud, y.clien, t}</p>
                  
                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p, className="tex, t-gra, y-300, text-s, m">{stud, y.challeng, e}</p>
        '60% reduction in security incidents',
        '50% faster application deployment',
        '100% compliance with regulations'
      ],
      duration: '4 months',
      team: '12 specialists'
      id: 3,
      title: 'AI Customer Service Automation',
      client: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Deployed AI-powered chatbots and automated ticket routing system',
      results: [
        '70% reduction in support costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '24/7 multilingual support'
      ],
      duration: '3 months',
      team: '6 specialists'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, customer service automation, business transformation" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              Case Studies</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Discover how we've helped businesses transform their operations with;
              cutting-edge AI and IT solutions.

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="space-y-16"></div>
                <div, key={stud, y.i, d} classNam, e={`grid, grid-col, s-1, lg:gri, d-col, s-2, gap-12, items-cente, r ${inde, x % 2 === 1 ? 'l, g:gri, d-flo, w-co, l-dens, e' : ''}`}></di, v>
                  <div, className={inde, x % 2 === 1 ? 'l, g:co, l-star, t-2' : ''}></di, v>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                      <div className="flex items-center justify-between mb-6"></div>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                        <div className="flex items-center text-gray-400 text-sm"></div>
                          <Clock className="w-4 h-4 mr-2" />
                      <h2, className="tex, t-2xl, font-bold, text-white, mb-4">{stud, y.titl, e}</h, 2>
                      <p className="text-gray-300 mb-6"></p>
                        <stron, g>Clien, t:</stron, g> {stud, y.clien, t}
                      <div className="space-y-4"></div>
                        <div></div>
                          <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                          <p, className="tex, t-gra, y-30, 0">{stud, y.challeng, e}</p>
                        <div></div>
                          <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                          <p, className="tex, t-gra, y-30, 0">{stud, y.solutio, n}</p>
                  
                  <div, className={inde, x % 2 === 1 ? 'l, g:co, l-star, t-1' : ''}></di, v>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                      <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
                      <div className="space-y-4"></div>
                          <div, key={resultInde, x} classNam, e="flex, items-cente, r"></di, v>
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span, className="tex, t-gra, y-30, 0">{resul, t}</spa, n>
                        ))}
                      <div className="mt-8 pt-6 border-t border-white/10"></div>
                        <div className="flex items-center justify-between text-sm text-gray-400"></div>
                          <div className="flex items-center"></div>
                            <Users className="w-4 h-4 mr-2" />
                          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"></button>
                            Read Full Case Study;
                            <ArrowRight className="w-4 h-4 ml-2" />
                  
                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p, className="tex, t-gra, y-300, text-s, m">{stud, y.solutio, n}</p>
                  
                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2"></ul>
                        <li, key={inde, x} classNam, e="flex, items-star, t"></l, i>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span, className="tex, t-gra, y-300, text-s, m">{resul, t}</spa, n>
                      ))}
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"></button>
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
            ))}
              ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6"></h2>
              Ready to Start Your Success Story?
            <p className="text-xl text-gray-300 mb-8"></p>
              Let's discuss how we can help transform your business with innovative technology solutions.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              <Link;
                to="/services"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>View Our Services</span>
                <ExternalLink className="w-5 h-5" />
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Our Impact;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Numbers that speak to our success in transforming businesses;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4"></div>
                  <DollarSign className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4"></div>
                  <Users className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Start Your Success Story?
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss how we can help transform your business with our proven solutions.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Get Free Consultation;
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  View Our Services;
      <Footer />
  );

export default CaseStudiesPage;