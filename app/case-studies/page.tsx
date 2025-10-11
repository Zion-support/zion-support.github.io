'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = const caseStudies = const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbots and automated ticket routing',
      results: [
        '60% reduction in response time',
        '40% cost savings on customer service',
        '95% customer satisfaction rate',
        '24/7 availability'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues',
      solution: 'Migrated to cloud infrastructure with enhanced security',
      results: [
        '50% improvement in system performance',
        '99.9% uptime achieved',
        '30% reduction in operational costs',
        'Enhanced security compliance'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cybersecurity Implementation for Healthcare',
      client: 'MedCare Systems',
      industry: 'Healthcare',
<<<<<<< HEAD
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
        results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%'];
      };
    ];
  return ()
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" / /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} / /></div>
        <div className="relative max-w-7xl mx-auto text-center" /></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /></h1>
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" /></p>
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {caseStudies.map((study, index) => ()
                      {study.results.map((result, resultIndex) => ()
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center" /></button>
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" / /></ArrowRight>
                  </button>
                </div>
              </div>
            ))}
=======
      challenge: 'Protecting sensitive patient data from cyber threats',
      solution: 'Comprehensive security framework and monitoring system',
      results: [
        'Zero security breaches',
        '100% compliance with HIPAA',
        'Real-time threat detection',
        'Automated incident response'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Data Analytics for Manufacturing',
      client: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control',
      solution: 'Advanced analytics and predictive maintenance',
      results: [
        '25% increase in production efficiency',
        '30% reduction in downtime',
        '20% improvement in quality',
        'Predictive maintenance capabilities'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Industries Served' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI solutions, cloud services, and cybersecurity." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, business transformation" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform with our innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        </section>

<<<<<<< HEAD
      <section className="py-20 px-4 bg-white/5" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <h2 className="text-3xl font-bold text-white mb-8" /></h2>
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <Link to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300" /></Link>
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" / /></ArrowRight>
            </Link>
            <Link to="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" /></Link>
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" / /></ExternalLink>
            </Link>
=======
        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients. See how we've delivered value across different industries.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Client:</h4>
                        <p className="text-gray-600">{study.client}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg p-8 text-white">
                      <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <TrendingUp className="w-6 h-6 mr-3" />
                          <span>Significant performance improvements</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-6 h-6 mr-3" />
                          <span>Enhanced user experience</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-6 h-6 mr-3" />
                          <span>Reduced operational time</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;