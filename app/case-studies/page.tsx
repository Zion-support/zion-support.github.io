'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time.',
<<<<<<< HEAD
      results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction'],
=======
        results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction']
>>>>>>> main
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '50% cost savings', 'Enhanced security compliance'],
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
<<<<<<< HEAD
      results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%'],
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        </section></section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
=======
        results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%']
      }
    ];
  return ()
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" / /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} / /></div>
        <div className="relative max-w-7xl mx-auto text-center" /></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /></h1>
>>>>>>> main
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" /></p>
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-20 px-4">
        </section><div className="
          </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              </div><div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                </div><div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  </div><div className="text-white text-center">
                    </div><Building className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-sm opacity-80">{study.industry}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  </div><h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    </div><Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    </div><h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        </ul><li key={resultIndex} className="flex items-center space-x-2">
                          </li><TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
                        </li>
=======
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {caseStudies.map((study, index) => ()
                      {study.results.map((result, resultIndex) => ()
>>>>>>> main
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center" /></button>
                    Read Full Case Study
<<<<<<< HEAD
                    </button><ArrowRight className="w-4 h-4 ml-2" />
=======
                    <ArrowRight className="w-4 h-4 ml-2" / /></ArrowRight>
>>>>>>> main
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-20 px-4 bg-white/5">
        </section><div className="
          </div><h2 className="text-3xl font-bold text-white mb-8">
=======
      <section className="py-20 px-4 bg-white/5" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <h2 className="text-3xl font-bold text-white mb-8" /></h2>
>>>>>>> main
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
              </Link><ArrowRight className="w-5 h-5 ml-2" />
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <Link to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300" /></Link>
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" / /></ArrowRight>
>>>>>>> main
            </Link>
            <Link to="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" /></Link>
              View Our Services
<<<<<<< HEAD
              </Link><ExternalLink className="w-5 h-5 ml-2" />
=======
              <ExternalLink className="w-5 h-5 ml-2" / /></ExternalLink>
>>>>>>> main
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
