'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign, CheckCircle, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Diagnostic System',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Reduce diagnostic time and improve accuracy in medical imaging analysis',
      solution: 'Developed an AI-powered diagnostic system using deep learning and computer vision',
      results: {
        accuracy: '95%',
        timeReduction: '70%',
        costSavings: '$2.5M',
        roi: '340%'
      },
      technologies: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Cloud Computing'],
      duration: '6 months',
      team: '8 experts',
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Fraud Detection Platform',
      client: 'SecureBank International',
      industry: 'Finance',
      challenge: 'Detect fraudulent transactions in real-time across multiple channels',
      solution: 'Built a comprehensive fraud detection system with real-time analytics',
      results: {
        accuracy: '98%',
        timeReduction: '85%',
        costSavings: '$5.2M',
        roi: '420%'
      },
      technologies: ['Machine Learning', 'Real-time Analytics', 'Big Data', 'API Integration'],
      duration: '4 months',
      team: '6 experts',
      image: '/images/case-studies/fraud-detection.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Manufacturing Quality Control AI',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Improve product quality and reduce defects in production line',
      solution: 'Implemented AI-powered quality control system with predictive maintenance',
      results: {
        accuracy: '92%',
        timeReduction: '60%',
        costSavings: '$3.8M',
        roi: '280%'
      },
      technologies: ['Computer Vision', 'IoT Integration', 'Predictive Analytics', 'Edge Computing'],
      duration: '5 months',
      team: '7 experts',
      image: '/images/case-studies/manufacturing-ai.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Retail Customer Analytics Platform',
      client: 'MegaRetail Chain',
      industry: 'Retail',
      challenge: 'Understand customer behavior and optimize inventory management',
      solution: 'Created advanced analytics platform with personalized recommendations',
      results: {
        accuracy: '89%',
        timeReduction: '50%',
        costSavings: '$4.1M',
        roi: '310%'
      },
      technologies: ['Data Analytics', 'Machine Learning', 'Personalization', 'Cloud Computing'],
      duration: '3 months',
      team: '5 experts',
      image: '/images/case-studies/retail-analytics.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Educational AI Tutoring System',
      client: 'EduTech University',
      industry: 'Education',
      challenge: 'Provide personalized learning experiences for students',
      solution: 'Developed AI-powered tutoring system with adaptive learning algorithms',
      results: {
        accuracy: '91%',
        timeReduction: '45%',
        costSavings: '$1.8M',
        roi: '250%'
      },
      technologies: ['Natural Language Processing', 'Machine Learning', 'Adaptive Learning', 'Web Development'],
      duration: '4 months',
      team: '6 experts',
      image: '/images/case-studies/education-ai.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Supply Chain Optimization AI',
      client: 'Logistics Pro',
      industry: 'Logistics',
      challenge: 'Optimize supply chain operations and reduce delivery times',
      solution: 'Built comprehensive supply chain optimization system with route planning',
      results: {
        accuracy: '94%',
        timeReduction: '65%',
        costSavings: '$6.2M',
        roi: '380%'
      },
      technologies: ['Optimization Algorithms', 'Machine Learning', 'Route Planning', 'Real-time Tracking'],
      duration: '7 months',
      team: '9 experts',
      image: '/images/case-studies/supply-chain.jpg',
      featured: true
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how our clients achieved remarkable results with our AI and IT solutions. Real case studies with measurable ROI and business impact." />
        <meta name="keywords" content="case studies, success stories, AI ROI, client results, business transformation, technology solutions" />
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
            Discover how our clients achieved remarkable results with our AI and IT solutions. 
            Real case studies with measurable ROI and business impact.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful projects that showcase the power of AI and technology transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-purple-400" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">Featured</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.results.accuracy}</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.results.timeReduction}</div>
                      <div className="text-sm text-gray-400">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.results.costSavings}</div>
                      <div className="text-sm text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{study.results.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful AI and technology implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-purple-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-cyan-400 font-medium text-sm mb-3">{study.client}</p>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-green-400">{study.results.accuracy}</div>
                      <div className="text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-400">{study.results.timeReduction}</div>
                      <div className="text-gray-400">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-400">{study.results.costSavings}</div>
                      <div className="text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-yellow-400">{study.results.roi}</div>
                      <div className="text-gray-400">ROI</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{study.duration}</span>
                    <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business achieve similar results with our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
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