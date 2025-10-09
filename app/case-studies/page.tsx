'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Global Telecom: AI-Powered Customer Service Transformation',
      client: 'Global Telecom Inc.',
      industry: 'Telecommunications',
      challenge: 'High customer service costs and long response times',
      solution: 'AI chatbot implementation with natural language processing',
      results: [
        '60% reduction in customer service costs',
        '85% faster response times',
        '90% customer satisfaction rate',
        '$2.5M annual savings'
      ],
      image: '📞',
      duration: '6 months'
    },
    {
      title: 'E-commerce Platform: AI-Driven Personalization Engine',
      client: 'ShopSmart Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement',
      solution: 'AI-powered recommendation engine and personalization system',
      results: [
        '45% increase in conversion rates',
        '70% improvement in customer engagement',
        '35% boost in average order value',
        '300% ROI in first year'
      ],
      image: '🛒',
      duration: '4 months'
    },
    {
      title: 'Manufacturing: Predictive Maintenance with IoT & AI',
      client: 'Precision Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures causing production delays',
      solution: 'AI-powered predictive maintenance system with IoT sensors',
      results: [
        '75% reduction in unplanned downtime',
        '40% decrease in maintenance costs',
        '95% equipment uptime achieved',
        '$1.8M saved in first year'
      ],
      image: '🏭',
      duration: '8 months'
    },
    {
      title: 'Healthcare: AI-Powered Diagnostic Assistant',
      client: 'MedTech Healthcare',
      industry: 'Healthcare',
      challenge: 'Long diagnostic times and high error rates',
      solution: 'AI diagnostic assistant with medical image analysis',
      results: [
        '50% faster diagnostic times',
        '30% reduction in diagnostic errors',
        '95% accuracy rate achieved',
        'Improved patient outcomes'
      ],
      image: '🏥',
      duration: '12 months'
    },
    {
      title: 'Financial Services: Fraud Detection System',
      client: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents and false positives',
      solution: 'Advanced AI fraud detection with real-time monitoring',
      results: [
        '80% reduction in fraud incidents',
        '60% decrease in false positives',
        '99.9% detection accuracy',
        '$5M prevented in fraud losses'
      ],
      image: '🏦',
      duration: '5 months'
    },
    {
      title: 'Education: Personalized Learning Platform',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'One-size-fits-all learning approach',
      solution: 'AI-powered personalized learning platform',
      results: [
        '40% improvement in student performance',
        '60% increase in course completion rates',
        '85% student satisfaction rate',
        '50% reduction in dropout rates'
      ],
      image: '🎓',
      duration: '10 months'
    }
  ];

  const industries = [
    { name: 'All Industries', count: 50 },
    { name: 'Healthcare', count: 12 },
    { name: 'Financial Services', count: 8 },
    { name: 'Manufacturing', count: 10 },
    { name: 'E-commerce', count: 6 },
    { name: 'Education', count: 4 },
    { name: 'Telecommunications', count: 5 },
    { name: 'Government', count: 3 },
    { name: 'Other', count: 2 }
  ];

  return (
    <>
      <SEOOptimizer
        title="Case Studies - AI & IT Success Stories | Zion Tech Group"
        description="Explore real-world success stories of businesses transformed by our AI and IT solutions. See measurable results and ROI from our client implementations."
        keywords={['case studies', 'AI success stories', 'IT solutions results', 'business transformation', 'ROI examples']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Case Studies</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Real-world success stories of businesses transformed by our AI and IT solutions. 
                  See measurable results and ROI from our client implementations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Start Your Success Story
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Filter */}
          <section className="py-8 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      index === 0
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {industry.name} ({industry.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Success Stories</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how our AI and IT solutions have transformed businesses across various industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-4xl">{study.image}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {study.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                          <span>{study.client}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                          <span>•</span>
                          <span>{study.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Track Record</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Numbers that speak to our success and client satisfaction.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Hear directly from our clients about their transformation journey with us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6">
                    "Zion Tech Group transformed our customer service with AI. The results exceeded our expectations, 
                    and the ROI was evident within the first quarter."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">John Smith</div>
                      <div className="text-gray-400 text-sm">CEO, Global Telecom Inc.</div>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6">
                    "The AI-powered personalization engine increased our conversion rates by 45%. 
                    Our customers love the personalized experience."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">MJ</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Maria Johnson</div>
                      <div className="text-gray-400 text-sm">CTO, ShopSmart Solutions</div>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6">
                    "Predictive maintenance with AI saved us millions in downtime costs. 
                    The system is incredibly accurate and reliable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">RB</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Robert Brown</div>
                      <div className="text-gray-400 text-sm">Operations Director, Precision Manufacturing Co.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business. 
                Get a free consultation and discover the possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Start Your Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;