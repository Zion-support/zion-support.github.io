'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Optimize production efficiency and reduce operational costs',
      solution: 'AI-powered predictive maintenance and supply chain optimization',
      results: [
        '40% reduction in downtime',
        '25% decrease in operational costs',
        '$2.5M annual savings',
        '95% improvement in maintenance accuracy'
      ],
      image: '/images/case-studies/manufacturing.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Improve patient care and streamline administrative processes',
      solution: 'AI-driven patient analytics and automated administrative workflows',
      results: [
        '60% faster patient processing',
        '30% reduction in administrative costs',
        '90% improvement in patient satisfaction',
        '50% decrease in wait times'
      ],
      image: '/images/case-studies/healthcare.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Services Firm',
      industry: 'Financial Services',
      challenge: 'Enhance fraud detection and improve customer experience',
      solution: 'Advanced AI fraud detection and personalized customer service',
      results: [
        '99.5% fraud detection accuracy',
        '70% reduction in false positives',
        '45% improvement in customer satisfaction',
        '$1.8M saved in prevented fraud'
      ],
      image: '/images/case-studies/finance.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Increase conversion rates and optimize inventory management',
      solution: 'AI-powered recommendation engine and demand forecasting',
      results: [
        '35% increase in conversion rates',
        '50% reduction in inventory costs',
        '80% improvement in recommendation accuracy',
        '25% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Educational Institution',
      industry: 'Education',
      challenge: 'Improve student outcomes and administrative efficiency',
      solution: 'AI-powered learning analytics and automated administrative systems',
      results: [
        '40% improvement in student performance',
        '60% reduction in administrative workload',
        '85% increase in student engagement',
        '30% decrease in dropout rates'
      ],
      image: '/images/case-studies/education.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Optimize supply chain and improve customer experience',
      solution: 'AI-driven inventory management and customer analytics',
      results: [
        '45% reduction in stockouts',
        '30% decrease in inventory costs',
        '55% improvement in customer satisfaction',
        '20% increase in sales'
      ],
      image: '/images/case-studies/retail.jpg',
      featured: false
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered worldwide'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Highly rated by our clients'
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Cost Savings',
      description: 'Generated for our clients'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Based on client feedback'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses achieve remarkable results with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI implementation, IT solutions, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real businesses across various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border transition-all duration-300 group ${
                    study.featured 
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {study.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{study.industry.charAt(0)}</div>
                        <div className="text-sm text-gray-300">{study.industry}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-3">
                        {study.industry}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                      
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                        {study.results.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{study.results.length - 3} more results
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 text-sm">
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help your business achieve similar results with our AI and IT solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;