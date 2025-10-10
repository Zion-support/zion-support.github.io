'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, TrendingUp, Users, Award, Clock, Target, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Finance', icon: BarChart },
    { id: 'manufacturing', name: 'Manufacturing', icon: Target },
    { id: 'retail', name: 'Retail', icon: Users },
    { id: 'education', name: 'Education', icon: Award }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics',
      company: 'MedTech Solutions',
      industry: 'healthcare',
      challenge: 'Reducing diagnostic errors and improving patient outcomes through AI-powered medical imaging analysis.',
      solution: 'Developed a comprehensive AI system that analyzes medical images with 99.2% accuracy, reducing diagnostic time by 70%.',
      results: {
        accuracy: '99.2%',
        timeReduction: '70%',
        patients: '50,000+',
        costSavings: '$2.5M'
      },
      image: '/images/case-studies/healthcare-ai.jpg',
      duration: '6 months',
      team: '12 experts'
    },
    {
      id: 2,
      title: 'Financial Fraud Detection System',
      company: 'SecureBank Corp',
      industry: 'finance',
      challenge: 'Detecting fraudulent transactions in real-time while minimizing false positives.',
      solution: 'Implemented machine learning algorithms that analyze transaction patterns and detect anomalies with 95% accuracy.',
      results: {
        accuracy: '95%',
        falsePositives: '-80%',
        transactions: '1M+ daily',
        costSavings: '$5.2M'
      },
      image: '/images/case-studies/finance-fraud.jpg',
      duration: '4 months',
      team: '8 experts'
    },
    {
      id: 3,
      title: 'Smart Manufacturing Optimization',
      company: 'AutoParts Inc',
      industry: 'manufacturing',
      challenge: 'Optimizing production lines and reducing waste through predictive maintenance.',
      solution: 'Deployed IoT sensors and AI analytics to predict equipment failures and optimize production schedules.',
      results: {
        efficiency: '+35%',
        downtime: '-60%',
        waste: '-45%',
        costSavings: '$3.8M'
      },
      image: '/images/case-studies/manufacturing-iot.jpg',
      duration: '8 months',
      team: '15 experts'
    },
    {
      id: 4,
      title: 'Personalized E-commerce Platform',
      company: 'ShopSmart Retail',
      industry: 'retail',
      challenge: 'Improving customer experience and increasing sales through personalized recommendations.',
      solution: 'Built a recommendation engine using deep learning that analyzes customer behavior and preferences.',
      results: {
        sales: '+40%',
        engagement: '+65%',
        customers: '+50%',
        revenue: '+$8.5M'
      },
      image: '/images/case-studies/retail-ecommerce.jpg',
      duration: '5 months',
      team: '10 experts'
    },
    {
      id: 5,
      title: 'Intelligent Learning Management System',
      company: 'EduTech University',
      industry: 'education',
      challenge: 'Creating personalized learning paths and improving student outcomes.',
      solution: 'Developed an AI-powered platform that adapts to individual learning styles and tracks progress.',
      results: {
        completion: '+55%',
        grades: '+25%',
        students: '10,000+',
        satisfaction: '94%'
      },
      image: '/images/case-studies/education-lms.jpg',
      duration: '7 months',
      team: '12 experts'
    },
    {
      id: 6,
      title: 'Cloud Migration & Optimization',
      company: 'TechStart Solutions',
      industry: 'all',
      challenge: 'Migrating legacy systems to cloud and optimizing performance.',
      solution: 'Comprehensive cloud migration strategy with automated scaling and cost optimization.',
      results: {
        performance: '+200%',
        costs: '-40%',
        uptime: '99.9%',
        scalability: '+500%'
      },
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '3 months',
      team: '6 experts'
    }
  ];

  const filteredStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Success Rate', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Case Studies - Success Stories & Client Results | Zion Tech Group"
        description="Explore our portfolio of successful AI and technology implementations across various industries. See real results and ROI from our client projects."
        keywords="case studies, success stories, AI projects, client results, ROI, technology implementation, portfolio"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Case
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real success stories from our clients. See how we've transformed businesses 
            across industries with cutting-edge AI and technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <industry.icon className="w-5 h-5" />
                <span>{industry.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {industries.find(ind => ind.id === study.industry)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  
                  <div className="text-cyan-400 font-medium mb-4">{study.company}</div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.team}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-300">Try selecting a different industry filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;