'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, Calendar, User, Building } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbot and automated ticket routing',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      image: '/api/placeholder/600/400',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Banking',
      challenge: 'Legacy systems causing operational inefficiencies',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '99.9% uptime achieved',
        '50% faster processing times',
        'Enhanced security compliance'
      ],
      image: '/api/placeholder/600/400',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement Project',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Zero security incidents',
        '100% compliance achieved',
        '24/7 monitoring established'
      ],
      image: '/api/placeholder/600/400',
      date: '2024-01-05'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses transform their operations with cutting-edge technology." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation, client results" />
      </Helmet>

      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with our 
              AI and IT solutions. Real results from real clients.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">📊</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                        <Building className="w-3 h-3 mr-1" />
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(study.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h2>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-1">Client</h3>
                      <p className="text-gray-300 text-sm">{study.client}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-1">Challenge</h3>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-1">Solution</h3>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">Results</h3>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Call (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
