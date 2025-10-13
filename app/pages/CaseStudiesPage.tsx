import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', before: '2.1%', after: '4.8%', improvement: '+128%' },
        { metric: 'Cart Abandonment', before: '68%', after: '42%', improvement: '-38%' },
        { metric: 'Revenue', before: '$2.1M', after: '$4.7M', improvement: '+124%' }
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision AI for automated quality inspection and defect detection',
      results: [
        { metric: 'Inspection Speed', before: '2 min/part', after: '15 sec/part', improvement: '+700%' },
        { metric: 'Defect Detection', before: '85%', after: '98%', improvement: '+15%' },
        { metric: 'Cost Savings', before: '$0', after: '$2.3M', improvement: 'Annual' }
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 3,
      title: 'Financial Services Security Enhancement',
      company: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and fraud attempts',
      solution: 'Implemented AI-powered fraud detection and real-time threat monitoring system',
      results: [
        { metric: 'Fraud Detection', before: '78%', after: '96%', improvement: '+23%' },
        { metric: 'False Positives', before: '12%', after: '3%', improvement: '-75%' },
        { metric: 'Response Time', before: '24 hours', after: '2 minutes', improvement: '+7200%' }
      ],
      duration: '8 months',
      team: '12 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, digital transformation, business results" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how we've helped businesses transform and achieve remarkable results with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our Case Studies</h2>
              <div className="space-y-16">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-slate-900 rounded-lg p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-purple-400 mr-3" />
                            <span className="text-gray-300"><strong>Company:</strong> {study.company}</span>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="w-5 h-5 text-cyan-400 mr-3" />
                            <span className="text-gray-300"><strong>Industry:</strong> {study.industry}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-green-400 mr-3" />
                            <span className="text-gray-300"><strong>Duration:</strong> {study.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-orange-400 mr-3" />
                            <span className="text-gray-300"><strong>Team Size:</strong> {study.team}</span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <div className="space-y-4">
                          {study.results.map((result, index) => (
                            <div key={index} className="bg-slate-800 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300 font-medium">{result.metric}</span>
                                <span className="text-green-400 font-bold">{result.improvement}</span>
                              </div>
                              <div className="flex justify-between text-sm text-gray-400">
                                <span>Before: {result.before}</span>
                                <span>After: {result.after}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how we can help your business achieve similar results.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
