import React from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      client: 'TechStart Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment and poor user experience',
      solution: 'Implemented AI-powered recommendation engine and modernized the entire platform',
      results: [
        '60% increase in conversion rate',
        '45% reduction in cart abandonment',
        '80% improvement in page load speed',
        '200% increase in customer engagement'
      ],
      duration: '6 months',
      team: '8 developers',
      image: '/api/placeholder/600/400',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Healthcare AI Implementation',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Manual patient data analysis taking 8+ hours per case',
      solution: 'Developed AI-powered diagnostic assistant with 95% accuracy',
      results: [
        '90% reduction in analysis time',
        '95% diagnostic accuracy',
        '50% cost savings',
        'Improved patient outcomes'
      ],
      duration: '12 months',
      team: '12 developers',
      image: '/api/placeholder/600/400',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Financial Services Automation',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection missing 30% of fraudulent transactions',
      solution: 'Implemented AI-powered fraud detection system with real-time monitoring',
      results: [
        '95% fraud detection accuracy',
        '70% reduction in false positives',
        'Real-time transaction monitoring',
        '50% reduction in manual review time'
      ],
      duration: '8 months',
      team: '10 developers',
      image: '/api/placeholder/600/400',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime causing $2M+ in annual losses',
      solution: 'Deployed IoT sensors with AI-powered predictive maintenance',
      results: [
        '75% reduction in unplanned downtime',
        '40% increase in equipment efficiency',
        '60% reduction in maintenance costs',
        'Real-time equipment monitoring'
      ],
      duration: '10 months',
      team: '15 developers',
      image: '/api/placeholder/600/400',
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: <Award className="w-8 h-8" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Industries Served', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Case Studies - Zion Tech Group | Success Stories"
        description="Explore our success stories and case studies. See how we've helped businesses transform with AI and technology solutions."
        keywords="case studies, success stories, AI implementation, business transformation, client results"
        canonical="https://ziontechgroup.com/case-studies"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Success Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform with cutting-edge AI and technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results. See how we've delivered measurable value to our clients.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <p className="text-cyan-400 font-medium">{study.client} • {study.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration: {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Team: {study.team}
                        </div>
                      </div>

                      <FuturisticButton
                        variant="outline"
                        size="md"
                        to="/contact"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </FuturisticButton>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                        {study.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Project Overview</h4>
                      <p className="text-gray-300">Click "Learn More" to see detailed project information and technical implementation.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              variant="primary"
              size="lg"
              to="/contact"
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              variant="outline"
              size="lg"
              to="/demo"
            >
              Schedule a Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;