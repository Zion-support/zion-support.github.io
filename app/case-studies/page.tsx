'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    improvement: string;
    costSavings: string;
    timeReduction: string;
  };
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-ecommerce-optimization',
      title: 'AI-Powered E-commerce Optimization',
      client: 'TechRetail Corp',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment due to poor user experience and lack of personalization.',
      solution: 'Implemented AI-driven recommendation engine, dynamic pricing, and personalized shopping experience.',
      results: [
        '45% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% increase in average order value',
        '80% improvement in customer satisfaction'
      ],
      metrics: {
        improvement: '45%',
        costSavings: '$2.3M',
        timeReduction: '60%'
      },
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'Zion Tech Group transformed our e-commerce platform. The AI recommendations alone increased our revenue by 40%.',
        author: 'Sarah Johnson',
        position: 'CTO, TechRetail Corp'
      }
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI-Powered Medical Diagnostics',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Manual diagnostic processes were time-consuming and prone to human error, affecting patient outcomes.',
      solution: 'Developed AI-powered diagnostic system with machine learning algorithms for medical image analysis.',
      results: [
        '90% accuracy in early disease detection',
        '70% reduction in diagnostic time',
        '50% decrease in false positives',
        '95% doctor confidence in AI recommendations'
      ],
      metrics: {
        improvement: '90%',
        costSavings: '$5.1M',
        timeReduction: '70%'
      },
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'The AI diagnostic system has revolutionized our practice. We can now detect conditions earlier and more accurately.',
        author: 'Dr. Michael Chen',
        position: 'Chief Medical Officer, MedTech Solutions'
      }
    },
    {
      id: 'financial-fraud-detection',
      title: 'Real-time Fraud Detection System',
      client: 'SecureBank International',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents and false positives were costing millions and damaging customer trust.',
      solution: 'Built advanced ML models for real-time transaction monitoring and fraud detection.',
      results: [
        '99.5% fraud detection accuracy',
        '85% reduction in false positives',
        '60% faster fraud response time',
        '40% reduction in fraud losses'
      ],
      metrics: {
        improvement: '99.5%',
        costSavings: '$12M',
        timeReduction: '60%'
      },
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: 'Our fraud detection system is now industry-leading. We prevented $12M in potential losses last year.',
        author: 'Jennifer Martinez',
        position: 'Head of Security, SecureBank International'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions implementations across various industries." />
        <meta name="keywords" content="case studies, AI solutions, IT implementations, success stories" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Projects Completed
              </span>
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                95% Client Satisfaction
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                Industry Recognition
              </span>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-1">Challenge</h4>
                        <p className="text-sm text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-1">Solution</h4>
                        <p className="text-sm text-gray-400">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.metrics.improvement}</div>
                        <div className="text-xs text-gray-400">Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.metrics.costSavings}</div>
                        <div className="text-xs text-gray-400">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{study.metrics.timeReduction}</div>
                        <div className="text-xs text-gray-400">Time Reduction</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium text-gray-300">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {study.testimonial && (
                      <blockquote className="border-l-4 border-cyan-400 pl-4 mb-6">
                        <p className="text-sm text-gray-300 italic mb-2">"{study.testimonial.quote}"</p>
                        <footer className="text-xs text-gray-400">
                          <strong>{study.testimonial.author}</strong>, {study.testimonial.position}
                        </footer>
                      </blockquote>
                    )}

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                View Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;