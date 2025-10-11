import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Company',
      industry: 'E-commerce',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '50% increase in first-call resolution'
      ],
      duration: '6 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and innovation',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application deployment',
        '100% compliance with financial regulations'
      ],
      duration: '8 months',
      team: '12 specialists',
      featured: false
    },
    {
      id: 3,
      title: '5G Network Implementation for Manufacturing',
      client: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Need for real-time IoT monitoring and automation',
      solution: 'Deployed 5G network with edge computing capabilities',
      results: [
        '90% improvement in production efficiency',
        'Real-time monitoring of 10,000+ devices',
        '50% reduction in downtime',
        'ROI achieved in 18 months'
      ],
      duration: '12 months',
      team: '15 specialists',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Overhaul for Healthcare',
      client: 'Hospital Network',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security framework with AI-powered threat detection',
      results: [
        'Zero security breaches in 2 years',
        '100% HIPAA compliance',
        '24/7 threat monitoring',
        '50% reduction in security incidents'
      ],
      duration: '4 months',
      team: '6 specialists',
      featured: true
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with AI, cloud computing, and digital solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, digital transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Discover how we've helped businesses across industries transform their operations with cutting-edge technology solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Featured Case Studies</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Real results from real clients across various industries
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                {study.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Featured Project</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Client</h4>
                        <p className="text-gray-300">{study.client} • {study.industry}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                    <div className="space-y-3">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We have experience across multiple industries and understand the unique challenges each sector faces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Healthcare',
              'Financial Services',
              'E-commerce',
              'Manufacturing',
              'Education',
              'Government',
              'Retail',
              'Technology'
            ].map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <h3 className="text-white font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Start Your Success Story?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how we can help transform your business with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
