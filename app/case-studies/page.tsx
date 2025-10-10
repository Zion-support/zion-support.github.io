'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      challenge: 'Reduce equipment downtime by 40% and optimize maintenance schedules',
      solution: 'Implemented AI-powered predictive maintenance system with IoT sensors',
      results: [
        'Reduced downtime by 45%',
        'Saved $2.3M annually in maintenance costs',
        'Improved equipment efficiency by 30%',
        'Zero unplanned outages in 6 months'
      ],
      industry: 'Manufacturing',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Global Healthcare Provider',
      challenge: 'Streamline patient data processing and improve diagnostic accuracy',
      solution: 'Deployed AI-powered medical imaging and document processing system',
      results: [
        '50% faster diagnosis times',
        '95% accuracy in image analysis',
        'Reduced administrative workload by 60%',
        'Improved patient satisfaction scores'
      ],
      industry: 'Healthcare',
      duration: '4 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'E-commerce Retail Giant',
      challenge: 'Optimize supply chain and reduce inventory costs',
      solution: 'AI-driven demand forecasting and inventory optimization platform',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in demand accuracy',
        '40% faster order fulfillment',
        '$5M annual cost savings'
      ],
      industry: 'Retail',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 4,
      title: 'Financial Services Corporation',
      challenge: 'Enhance fraud detection and improve customer experience',
      solution: 'Advanced AI fraud detection system with real-time monitoring',
      results: [
        '99.8% fraud detection accuracy',
        '60% reduction in false positives',
        'Real-time threat response',
        'Enhanced customer trust and satisfaction'
      ],
      industry: 'Financial Services',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Smart City Initiative',
      challenge: 'Implement 5G infrastructure and IoT solutions for urban management',
      solution: 'Complete 5G network deployment with smart city applications',
      results: [
        '10x faster internet speeds',
        'Connected 50,000+ devices',
        'Real-time traffic optimization',
        'Improved public safety response'
      ],
      industry: 'Government',
      duration: '12 months',
      team: '25 specialists'
    },
    {
      id: 6,
      title: 'Automotive Manufacturer',
      challenge: 'Implement AI voice assistants for customer support',
      solution: 'Custom AI voice assistant platform with multi-language support',
      results: [
        '24/7 customer support availability',
        '80% reduction in support tickets',
        'Multi-language support for 15 languages',
        '95% customer satisfaction rate'
      ],
      industry: 'Automotive',
      duration: '3 months',
      team: '6 specialists'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', description: 'Successful implementations across industries' },
    { value: '98%', label: 'Client Satisfaction', description: 'Highly rated by our clients' },
    { value: '$50M+', label: 'Cost Savings', description: 'Generated for our clients' },
    { value: '24/7', label: 'Support', description: 'Round-the-clock assistance' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful AI and IT implementations across various industries. See how we've helped clients achieve remarkable results and cost savings." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, client results, project portfolio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.team}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {study.duration}
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {study.industry}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help your business achieve similar results with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;