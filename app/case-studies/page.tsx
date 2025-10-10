'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Phone, Mail, MapPin, Clock, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbots and voice assistants',
      results: '60% cost reduction, 80% faster response times',
      image: '/api/placeholder/600/400',
      testimonial: 'Zion Tech Group transformed our customer service with AI. The results exceeded our expectations.',
      author: 'Sarah Johnson, CTO'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing security and scalability issues',
      solution: 'Complete cloud migration with enhanced security',
      results: '99.9% uptime, 50% cost savings, enhanced security',
      image: '/api/placeholder/600/400',
      testimonial: 'The cloud migration was seamless and our security posture improved dramatically.',
      author: 'Michael Chen, CIO'
    },
    {
      title: 'AI Predictive Maintenance for Manufacturing',
      client: 'ManufacturingPlus',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures causing production delays',
      solution: 'AI-powered predictive maintenance system',
      results: '40% reduction in maintenance costs, 25% increase in uptime',
      image: '/api/placeholder/600/400',
      testimonial: 'Predictive maintenance has revolutionized our operations and saved us millions.',
      author: 'David Rodriguez, Operations Director'
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive cybersecurity suite with AI monitoring',
      results: 'Zero security incidents, 100% compliance, 30% cost reduction',
      image: '/api/placeholder/600/400',
      testimonial: 'Our security posture is now industry-leading thanks to Zion Tech Group.',
      author: 'Dr. Lisa Wang, CISO'
    },
    {
      title: 'AI Data Analytics for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      challenge: 'Poor data insights and low conversion rates',
      solution: 'AI-powered analytics and personalization engine',
      results: '35% increase in conversions, 50% better customer insights',
      image: '/api/placeholder/600/400',
      testimonial: 'The AI analytics platform transformed our business intelligence capabilities.',
      author: 'Alex Thompson, CEO'
    },
    {
      title: 'Digital Transformation for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Outdated systems and poor customer experience',
      solution: 'Complete digital transformation with AI integration',
      results: '45% increase in sales, 60% improvement in customer satisfaction',
      image: '/api/placeholder/600/400',
      testimonial: 'The digital transformation exceeded all our goals and expectations.',
      author: 'Jennifer Lee, VP of Technology'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with AI and IT solutions. 
              Real results from real clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Your Success Story
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="text-cyan-400 text-sm font-semibold mb-2">{study.industry}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="text-gray-300 text-sm mb-4">
                      <strong>Client:</strong> {study.client}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Results:</h4>
                    <p className="text-cyan-400 text-sm font-semibold mb-4">{study.results}</p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <blockquote className="text-gray-300 text-sm italic mb-2">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="text-cyan-400 text-sm font-semibold">
                      — {study.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your business challenges and create a custom solution that delivers real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+1 (302) 464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div>Mon-Fri: 9AM-6PM EST<br />24/7 Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
