'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer support',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Quantum Computing Data Processing',
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Complex risk calculations taking hours to complete',
      solution: 'Deployed quantum computing algorithms for real-time risk analysis',
      results: [
        '90% faster risk calculations',
        'Real-time fraud detection',
        '40% improvement in accuracy',
        'Millions in prevented losses'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Digital Transformation for Manufacturing',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Outdated systems and manual processes',
      solution: 'Complete digital transformation with IoT and AI integration',
      results: [
        '50% increase in production efficiency',
        '30% reduction in waste',
        'Real-time quality monitoring',
        'Predictive maintenance implementation'
      ],
      image: '/api/placeholder/600/400',
      duration: '8 months'
    },
    {
      id: 4,
      title: 'Healthcare AI Diagnostics Platform',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Slow and inaccurate diagnostic processes',
      solution: 'AI-powered medical imaging and diagnostic platform',
      results: [
        '85% accuracy in early disease detection',
        '70% faster diagnosis times',
        'Reduced false positives by 40%',
        'Improved patient outcomes'
      ],
      image: '/api/placeholder/600/400',
      duration: '12 months'
    },
    {
      id: 5,
      title: 'Cloud Migration and Optimization',
      company: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Legacy systems and scalability issues',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '10x faster deployment times',
        'Seamless scalability during peak seasons'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months'
    },
    {
      id: 6,
      title: 'Cybersecurity Enhancement Program',
      company: 'SecureData Inc',
      industry: 'Cybersecurity',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security framework with AI threat detection',
      results: [
        'Zero security breaches in 18 months',
        '99.9% threat detection accuracy',
        'Full compliance with industry standards',
        'Proactive threat prevention'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Industries Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;