'use client';
import React from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle, Star, Award, Globe, Brain, Cloud, Shield, Zap, BarChart, Target, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing 15% defect rate and $2M annual losses',
      solution: 'AI-powered computer vision system for real-time quality inspection',
      results: [
        '95% reduction in defect rate',
        '$3.2M annual savings',
        '300% increase in inspection speed',
        '99.8% accuracy in defect detection'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'IoT Sensors', 'Real-time Analytics'],
      duration: '6 months',
      teamSize: '8 engineers',
      image: '/images/case-studies/manufacturing.jpg',
      testimonial: {
        quote: 'Zion Tech Group transformed our manufacturing process. The AI system not only reduced defects but also gave us insights we never had before.',
        author: 'Sarah Johnson',
        role: 'VP of Operations',
        company: 'Global Manufacturing Corp'
      }
    },
    {
      id: 2,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Patient data scattered across 50+ systems, causing treatment delays and errors',
      solution: 'AI-powered data integration and predictive analytics platform',
      results: [
        '60% reduction in patient wait times',
        '40% improvement in diagnosis accuracy',
        '$1.8M saved in operational costs',
        '98% patient satisfaction score'
      ],
      technologies: ['AI/ML', 'Data Integration', 'Predictive Analytics', 'HIPAA Compliance'],
      duration: '8 months',
      teamSize: '12 engineers',
      image: '/images/case-studies/healthcare.jpg',
      testimonial: {
        quote: 'The AI platform revolutionized our patient care. We can now predict health issues before they become critical.',
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        company: 'Regional Health Network'
      }
    },
    {
      id: 3,
      title: 'Financial Services Firm',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection missing 30% of fraudulent transactions',
      solution: 'Real-time AI fraud detection and risk assessment system',
      results: [
        '99.5% fraud detection accuracy',
        '80% reduction in false positives',
        '$5M prevented in fraud losses',
        '50% faster transaction processing'
      ],
      technologies: ['Machine Learning', 'Real-time Processing', 'Risk Analytics', 'Blockchain'],
      duration: '4 months',
      teamSize: '6 engineers',
      image: '/images/case-studies/finance.jpg',
      testimonial: {
        quote: 'The AI system caught fraud attempts we never would have detected manually. It\'s like having a superhuman analyst working 24/7.',
        author: 'Jennifer Martinez',
        role: 'Head of Security',
        company: 'Premier Financial Group'
      }
    },
    {
      id: 4,
      title: 'E-commerce Retailer',
      industry: 'Retail',
      challenge: 'Poor customer experience leading to 25% cart abandonment rate',
      solution: 'AI-powered personalization and recommendation engine',
      results: [
        '45% increase in conversion rate',
        '60% reduction in cart abandonment',
        '35% increase in average order value',
        '200% improvement in customer engagement'
      ],
      technologies: ['Recommendation Engine', 'Personalization AI', 'Customer Analytics', 'A/B Testing'],
      duration: '5 months',
      teamSize: '10 engineers',
      image: '/images/case-studies/retail.jpg',
      testimonial: {
        quote: 'Our sales skyrocketed after implementing the AI recommendations. Customers love the personalized experience.',
        author: 'David Kim',
        role: 'CEO',
        company: 'TechStyle Retail'
      }
    },
    {
      id: 5,
      title: 'Logistics & Supply Chain',
      industry: 'Logistics',
      challenge: 'Inefficient route planning causing 20% fuel waste and delivery delays',
      solution: 'AI-powered route optimization and predictive maintenance system',
      results: [
        '30% reduction in fuel costs',
        '25% improvement in delivery times',
        '40% reduction in vehicle maintenance costs',
        '95% on-time delivery rate'
      ],
      technologies: ['Route Optimization', 'Predictive Maintenance', 'IoT Sensors', 'Fleet Management'],
      duration: '7 months',
      teamSize: '9 engineers',
      image: '/images/case-studies/logistics.jpg',
      testimonial: {
        quote: 'The AI system optimized our entire supply chain. We\'re saving millions while improving customer satisfaction.',
        author: 'Lisa Thompson',
        role: 'Operations Director',
        company: 'Global Logistics Inc'
      }
    },
    {
      id: 6,
      title: 'Real Estate Management',
      industry: 'Real Estate',
      challenge: 'Manual property valuation leading to 15% pricing errors and lost revenue',
      solution: 'AI-powered property valuation and market analysis platform',
      results: [
        '90% improvement in valuation accuracy',
        '25% increase in property sales',
        '50% reduction in time to market',
        '$2.5M additional revenue generated'
      ],
      technologies: ['Computer Vision', 'Market Analysis', 'Predictive Modeling', 'Geospatial AI'],
      duration: '6 months',
      teamSize: '7 engineers',
      image: '/images/case-studies/real-estate.jpg',
      testimonial: {
        quote: 'The AI valuations are incredibly accurate. We\'re closing deals faster and at better prices than ever before.',
        author: 'Robert Wilson',
        role: 'Managing Partner',
        company: 'Elite Properties Group'
      }
    }
  ];

  const stats = [
    { icon: TrendingUp, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: DollarSign, number: '$50M+', label: 'Client Savings' },
    { icon: Clock, number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Financial Services',
    'Retail',
    'Logistics',
    'Real Estate',
    'Education',
    'Government',
    'Technology',
    'Energy'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Real Results from Real Clients
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              and achieve unprecedented growth with our AI and IT solutions.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Featured Case Studies
            </h2>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="cyber-card p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-400 text-slate-900 rounded-full text-sm font-bold">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.duration}</span>
                        <span className="text-gray-400 text-sm">{study.teamSize}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">{study.testimonial.author}</h5>
                          <p className="text-cyan-400 text-sm">{study.testimonial.role}</p>
                          <p className="text-gray-400 text-sm">{study.testimonial.company}</p>
                        </div>
                      </div>
                      <blockquote className="text-gray-300 italic">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the companies that have transformed their business with our AI and IT solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;