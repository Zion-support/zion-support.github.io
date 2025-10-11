'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'finance', name: 'Finance' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'retail', name: 'Retail' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'education', name: 'Education' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Fraud Detection for Global Bank',
      industry: 'finance',
      client: 'Global Financial Services',
      challenge: 'High false positive rates in fraud detection leading to customer complaints and operational inefficiency.',
      solution: 'Implemented advanced machine learning models with real-time processing capabilities.',
      results: [
        'Reduced false positives by 85%',
        'Improved detection accuracy by 92%',
        'Saved $2.3M annually in operational costs',
        'Enhanced customer satisfaction by 40%'
      ],
      technologies: ['Machine Learning', 'Real-time Processing', 'Data Analytics'],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      industry: 'healthcare',
      client: 'Regional Medical Center',
      challenge: 'Fragmented patient data across multiple systems preventing effective treatment coordination.',
      solution: 'Developed integrated analytics platform with AI-powered insights and predictive modeling.',
      results: [
        'Reduced patient readmission rates by 35%',
        'Improved treatment outcomes by 28%',
        'Streamlined data access by 90%',
        'Saved 15 hours per week per physician'
      ],
      technologies: ['AI Analytics', 'Data Integration', 'Predictive Modeling'],
      duration: '8 months',
      teamSize: '12 developers',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'E-commerce Personalization Engine',
      industry: 'retail',
      client: 'Online Fashion Retailer',
      challenge: 'Low conversion rates due to generic product recommendations.',
      solution: 'Built AI-driven personalization engine with real-time recommendation system.',
      results: [
        'Increased conversion rates by 45%',
        'Boosted average order value by 32%',
        'Improved customer engagement by 60%',
        'Generated $5.2M additional revenue'
      ],
      technologies: ['Machine Learning', 'Real-time Processing', 'Recommendation Engine'],
      duration: '4 months',
      teamSize: '6 developers',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Smart Manufacturing Optimization',
      industry: 'manufacturing',
      client: 'Automotive Parts Manufacturer',
      challenge: 'Inefficient production scheduling leading to delays and increased costs.',
      solution: 'Implemented AI-powered production optimization system with predictive maintenance.',
      results: [
        'Reduced production delays by 50%',
        'Increased equipment efficiency by 25%',
        'Lowered maintenance costs by 40%',
        'Improved quality control by 35%'
      ],
      technologies: ['AI Optimization', 'Predictive Maintenance', 'IoT Integration'],
      duration: '10 months',
      teamSize: '10 developers',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Educational Content Recommendation System',
      industry: 'education',
      client: 'Online Learning Platform',
      challenge: 'Students struggling with course completion due to poor content matching.',
      solution: 'Developed AI-powered content recommendation and adaptive learning system.',
      results: [
        'Improved course completion rates by 55%',
        'Enhanced student engagement by 70%',
        'Reduced dropout rates by 45%',
        'Increased learning outcomes by 38%'
      ],
      technologies: ['AI Recommendations', 'Adaptive Learning', 'Content Analytics'],
      duration: '7 months',
      teamSize: '9 developers',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Supply Chain Optimization Platform',
      industry: 'manufacturing',
      client: 'Global Logistics Company',
      challenge: 'Complex supply chain operations with frequent disruptions and delays.',
      solution: 'Built comprehensive AI platform for supply chain visibility and optimization.',
      results: [
        'Reduced delivery delays by 60%',
        'Optimized inventory levels by 30%',
        'Lowered operational costs by 25%',
        'Improved customer satisfaction by 50%'
      ],
      technologies: ['Supply Chain AI', 'Predictive Analytics', 'Real-time Monitoring'],
      duration: '12 months',
      teamSize: '15 developers',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementations across various industries." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Success Stories</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`bg-slate-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    study.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover"
                    />
                    {study.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured Case Study
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {industries.find(ind => ind.id === study.industry)?.name}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                    <p className="text-gray-300 mb-4"><strong>Client:</strong> {study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span><strong>Duration:</strong> {study.duration}</span>
                      <span><strong>Team Size:</strong> {study.teamSize}</span>
                    </div>
                    
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
                <p className="text-gray-300">Try selecting a different industry.</p>
              </div>
            )}

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600"
                >
                  Start Your Project
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
