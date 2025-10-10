'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, DollarSign, Clock, Target, BarChart, Shield, Cloud, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Target },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: BarChart },
    { id: 'retail', name: 'Retail', icon: Users },
    { id: 'education', name: 'Education', icon: Brain }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Target },
    { id: 'ai-development', name: 'AI Development', icon: Brain },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Platform',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai-development',
      image: '/images/case-studies/healthcare-ai.jpg',
      challenge: 'MedTech Solutions needed to reduce diagnostic time and improve accuracy in medical imaging analysis.',
      solution: 'We developed an AI-powered medical imaging platform that uses deep learning to analyze X-rays, MRIs, and CT scans with 95% accuracy.',
      results: {
        accuracy: '95%',
        timeReduction: '70%',
        costSavings: '$2.5M',
        roi: '340%'
      },
      duration: '6 months',
      team: '8 experts',
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker'],
      testimonial: 'The AI platform has revolutionized our diagnostic process, saving time and improving patient outcomes.',
      author: 'Dr. Sarah Johnson, CTO'
    },
    {
      id: 2,
      title: 'Financial Risk Management System',
      client: 'Global Finance Corp',
      industry: 'finance',
      service: 'ai-development',
      image: '/images/case-studies/finance-ai.jpg',
      challenge: 'Global Finance Corp needed to improve fraud detection and risk assessment in real-time.',
      solution: 'We built a comprehensive AI system that analyzes transaction patterns and identifies fraudulent activities in real-time.',
      results: {
        accuracy: '98%',
        timeReduction: '85%',
        costSavings: '$5.2M',
        roi: '420%'
      },
      duration: '8 months',
      team: '12 experts',
      technologies: ['Python', 'PyTorch', 'Azure', 'Kubernetes'],
      testimonial: 'The AI system has significantly reduced fraud losses and improved our risk management capabilities.',
      author: 'Michael Chen, Head of Risk'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Platform',
      client: 'Industrial Manufacturing Inc',
      industry: 'manufacturing',
      service: 'cloud-solutions',
      image: '/images/case-studies/manufacturing-iot.jpg',
      challenge: 'Industrial Manufacturing Inc needed to optimize production processes and reduce downtime.',
      solution: 'We implemented a cloud-based IoT platform that monitors equipment health and predicts maintenance needs.',
      results: {
        accuracy: '92%',
        timeReduction: '60%',
        costSavings: '$3.8M',
        roi: '280%'
      },
      duration: '5 months',
      team: '10 experts',
      technologies: ['AWS', 'IoT', 'Machine Learning', 'React'],
      testimonial: 'The IoT platform has transformed our manufacturing operations and significantly reduced downtime.',
      author: 'Emily Rodriguez, Operations Director'
    },
    {
      id: 4,
      title: 'Retail Analytics Dashboard',
      client: 'E-Commerce Giant',
      industry: 'retail',
      service: 'data-analytics',
      image: '/images/case-studies/retail-analytics.jpg',
      challenge: 'E-Commerce Giant needed to understand customer behavior and optimize inventory management.',
      solution: 'We created a comprehensive analytics dashboard that provides real-time insights into customer behavior and inventory trends.',
      results: {
        accuracy: '89%',
        timeReduction: '75%',
        costSavings: '$4.1M',
        roi: '310%'
      },
      duration: '4 months',
      team: '6 experts',
      technologies: ['Python', 'Tableau', 'Google Cloud', 'SQL'],
      testimonial: 'The analytics dashboard has helped us make data-driven decisions and improve customer satisfaction.',
      author: 'David Kim, Head of Analytics'
    },
    {
      id: 5,
      title: 'Educational AI Tutor',
      client: 'EduTech University',
      industry: 'education',
      service: 'ai-development',
      image: '/images/case-studies/education-ai.jpg',
      challenge: 'EduTech University wanted to provide personalized learning experiences for students.',
      solution: 'We developed an AI-powered tutoring system that adapts to individual learning styles and provides personalized feedback.',
      results: {
        accuracy: '91%',
        timeReduction: '50%',
        costSavings: '$1.8M',
        roi: '250%'
      },
      duration: '7 months',
      team: '9 experts',
      technologies: ['Python', 'NLP', 'AWS', 'React Native'],
      testimonial: 'The AI tutor has improved student engagement and learning outcomes significantly.',
      author: 'Prof. Lisa Wang, Dean of Technology'
    },
    {
      id: 6,
      title: 'Cybersecurity Threat Detection',
      client: 'SecureBank Corp',
      industry: 'finance',
      service: 'cybersecurity',
      image: '/images/case-studies/cybersecurity.jpg',
      challenge: 'SecureBank Corp needed to enhance their cybersecurity posture and detect advanced threats.',
      solution: 'We implemented a comprehensive cybersecurity solution with AI-powered threat detection and automated response.',
      results: {
        accuracy: '96%',
        timeReduction: '80%',
        costSavings: '$2.9M',
        roi: '380%'
      },
      duration: '6 months',
      team: '11 experts',
      technologies: ['Python', 'Machine Learning', 'Azure', 'SIEM'],
      testimonial: 'The cybersecurity solution has significantly improved our threat detection capabilities.',
      author: 'James Wilson, CISO'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '$25M+', label: 'Client Savings', icon: DollarSign },
    { number: '300%', label: 'Average ROI', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful AI and technology projects. See how we've helped clients achieve their goals with innovative solutions."
        keywords="case studies, success stories, AI projects, technology solutions, client results, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how we've helped businesses across industries achieve their goals with innovative AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              View All Projects
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <industry.icon className="w-4 h-4" />
                    <span>{industry.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Filter by Service</h3>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedService === service.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">4.9</span>
                    </div>
                  </div>
                  
                  <p className="text-purple-400 font-medium mb-4">{study.client}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.results.accuracy}</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.results.timeReduction}</div>
                      <div className="text-sm text-gray-400">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.results.costSavings}</div>
                      <div className="text-sm text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.results.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 text-sm italic mb-2">"{study.testimonial}"</p>
                    <p className="text-purple-400 text-sm font-medium">- {study.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;