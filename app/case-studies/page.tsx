'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'ai',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: '40% reduction in inventory costs, 60% improvement in delivery times',
      image: '/api/placeholder/600/400',
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'SecureBank International',
      industry: 'Financial Services',
      category: 'cloud',
      challenge: 'Legacy systems causing security vulnerabilities and compliance issues',
      solution: 'Complete cloud migration with enhanced security and compliance framework',
      results: '99.9% uptime, 50% reduction in operational costs, full compliance',
      image: '/api/placeholder/600/400',
      duration: '8 months',
      team: '12 developers'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      category: 'security',
      challenge: 'Increasing cyber threats targeting patient data and medical records',
      solution: 'Comprehensive cybersecurity framework with real-time threat detection',
      results: 'Zero security breaches, 95% faster threat response, HIPAA compliance',
      image: '/api/placeholder/600/400',
      duration: '4 months',
      team: '6 developers'
    }]
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Development']];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform with cutting-edge technology." />
        <meta name="keywords" content="case studies, AI success stories, IT solutions, business transformation, technology implementation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div><div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses transform with AI and IT solutions. Real results, real impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                </div><div key={study.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  </div><div className="mb-6">
                    </div><div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">{study.title.charAt(0)}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                        {study.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    </div><div>
                      </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-sm text-gray-300">{study.solution}</p>
                    </div>
                    <div>
                      </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                      <p className="text-sm text-gray-300">{study.results}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>

                  <button className="w-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;