'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
        '40% reduction in inventory costs',
        '60% improvement in delivery times',
        '25% increase in customer satisfaction',
        '$2.5M annual savings'
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'The AI solution transformed our entire supply chain. We now have real-time visibility and predictive capabilities that were impossible before.',
      author: 'Sarah Johnson',
      position: 'COO, Global Manufacturing Corp'
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation for Financial Services',
      client: 'MetroBank Financial',
      industry: 'Financial Services',
      category: 'security',
      challenge: 'Legacy security systems vulnerable to modern cyber threats and compliance requirements',
      solution: 'Deployed comprehensive cybersecurity suite with AI-powered threat detection and automated response',
      results: [
        '99.9% threat detection accuracy',
        'Zero security breaches in 18 months',
        '50% reduction in security incidents',
        'Full compliance with industry standards'
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'Our security posture has never been stronger. The AI-powered system catches threats we never knew existed.',
      author: 'Michael Chen',
      position: 'CISO, MetroBank Financial'
    },
    {
      id: 3,
      title: 'Cloud Migration and Digital Transformation',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      category: 'cloud',
      challenge: 'On-premise infrastructure limiting scalability and increasing operational costs',
      solution: 'Complete cloud migration with microservices architecture and automated scaling',
      results: [
        '70% reduction in infrastructure costs',
        '300% improvement in system performance',
        '99.9% uptime achieved',
        '50% faster time-to-market for new features'
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'The cloud transformation enabled us to scale during peak seasons and reduce costs significantly.',
      author: 'Emily Rodriguez',
      position: 'CTO, RetailMax Corporation'
    },
    {
      id: 4,
      title: 'AI Customer Service Automation',
      client: 'TechStart Solutions',
      industry: 'Technology',
      category: 'ai',
      challenge: 'High customer service costs and inconsistent support quality across channels',
      solution: 'Implemented AI-powered chatbot and automated ticket routing system',
      results: [
        '80% reduction in support tickets',
        '90% customer satisfaction rate',
        '60% reduction in support costs',
        '24/7 customer support availability'
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'Our customers love the instant responses and our team can focus on complex issues that require human expertise.',
      author: 'David Kim',
      position: 'Head of Customer Success, TechStart Solutions'
    },
    {
      id: 5,
      title: 'Data Analytics and Business Intelligence',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      category: 'analytics',
      challenge: 'Fragmented data systems preventing effective patient care and operational insights',
      solution: 'Integrated data platform with real-time analytics and predictive modeling',
      results: [
        '35% improvement in patient outcomes',
        '45% reduction in readmission rates',
        '30% increase in operational efficiency',
        'Real-time insights for decision making'
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'The analytics platform has revolutionized how we deliver care and manage our operations.',
      author: 'Dr. Lisa Thompson',
      position: 'Chief Medical Officer, HealthCare Plus'
    },
    {
      id: 6,
      title: 'Mobile App Development and Digital Experience',
      client: 'FitnessFirst Gym Chain',
      industry: 'Fitness',
      category: 'mobile',
      challenge: 'Outdated member management system and lack of digital engagement tools',
      solution: 'Custom mobile app with AI-powered workout recommendations and member management',
      results: [
        '200% increase in member engagement',
        '40% reduction in churn rate',
        '85% member satisfaction score',
        '50% increase in membership sales'
      ],
      image: '/api/placeholder/600/400',
      testimonial: 'The mobile app has transformed our member experience and significantly improved retention.',
      author: 'James Wilson',
      position: 'CEO, FitnessFirst Gym Chain'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'ai', name: 'AI Solutions', count: caseStudies.filter(cs => cs.category === 'ai').length },
    { id: 'security', name: 'Cybersecurity', count: caseStudies.filter(cs => cs.category === 'security').length },
    { id: 'cloud', name: 'Cloud Migration', count: caseStudies.filter(cs => cs.category === 'cloud').length },
    { id: 'analytics', name: 'Data Analytics', count: caseStudies.filter(cs => cs.category === 'analytics').length },
    { id: 'mobile', name: 'Mobile Development', count: caseStudies.filter(cs => cs.category === 'mobile').length }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const stats = [
    { icon: Building, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Industry Awards', value: '15+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group results, client testimonials" />
      </Helmet>
      
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
            Discover how we've helped businesses achieve remarkable results with our 
            AI and IT solutions. Real projects, real results, real impact.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                      {study.industry}
                    </span>
                    <span className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {study.client}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <blockquote className="text-gray-300 italic mb-3">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-white">{study.author}</div>
                      <div className="text-gray-400">{study.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business achieve similar results. 
            Contact us for a free consultation and project assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
