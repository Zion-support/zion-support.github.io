'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'ai',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Saved $2.3M annually in operational costs',
        'Increased customer satisfaction by 35%'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Sensors', 'Cloud Computing'],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/images/case-studies/supply-chain-ai.webp'
    },
    {
      id: 2,
      title: 'Cloud Migration & Digital Transformation',
      client: 'Regional Bank',
      industry: 'Financial Services',
      category: 'cloud',
      challenge: 'Legacy on-premise systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with modern microservices architecture and enhanced security',
      results: [
        '99.9% system uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance',
        '3x faster application deployment'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Microservices', 'DevOps'],
      duration: '8 months',
      teamSize: '12 developers',
      image: '/images/case-studies/cloud-migration.webp'
    },
    {
      id: 3,
      title: 'Mobile Healthcare App Development',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      category: 'mobile',
      challenge: 'Need for a comprehensive mobile platform connecting patients, doctors, and healthcare providers',
      solution: 'Developed cross-platform mobile app with telemedicine capabilities and health monitoring',
      results: [
        '50,000+ active users in first year',
        '95% user satisfaction rating',
        '40% reduction in hospital visits',
        'Streamlined patient-doctor communication'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'Health APIs'],
      duration: '10 months',
      teamSize: '10 developers',
      image: '/images/case-studies/healthcare-mobile.webp'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Mobile', 'Web', 'IoT'];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform with cutting-edge AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-medium">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{study.duration}</span>
                    <span>{study.teamSize}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let us help you transform your business with cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;