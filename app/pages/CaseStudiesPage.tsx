import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: ChartBarIcon },
        { metric: 'Cart Abandonment', value: '-30%', icon: ChartBarIcon },
        { metric: 'Customer Satisfaction', value: '+60%', icon: UserGroupIcon },
        { metric: 'Implementation Time', value: '3 months', icon: ClockIcon }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and machine learning for automated quality inspection',
      results: [
        { metric: 'Quality Defects', value: '-75%', icon: ChartBarIcon },
        { metric: 'Processing Speed', value: '+200%', icon: ChartBarIcon },
        { metric: 'Cost Savings', value: '$2.5M/year', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '4 months', icon: ClockIcon }
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically reducing defects while increasing throughput.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive data analytics platform with predictive modeling',
      results: [
        { metric: 'Treatment Accuracy', value: '+40%', icon: ChartBarIcon },
        { metric: 'Patient Outcomes', value: '+35%', icon: UserGroupIcon },
        { metric: 'Cost Reduction', value: '$1.8M/year', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '6 months', icon: ClockIcon }
      ],
      description: 'MediCare Systems now leverages our advanced analytics platform to provide better patient care through data-driven insights and predictive modeling.'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and innovation',
      solution: 'Complete cloud migration with modern microservices architecture',
      results: [
        { metric: 'System Performance', value: '+300%', icon: ChartBarIcon },
        { metric: 'Scalability', value: '10x', icon: ChartBarIcon },
        { metric: 'Operational Costs', value: '-40%', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '8 months', icon: ClockIcon }
      ],
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful case studies showcasing AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <SparklesIcon className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Stories</span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Results</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries transform 
              their operations with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your Project
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div>
                      <div className="flex items-center mb-6">
                        <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {study.industry}
                        </span>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Client: {study.client}</h4>
                        <p className="text-gray-300 mb-4">{study.description}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-6">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => {
                          const Icon = result.icon;
                          return (
                            <div key={resultIndex} className="bg-slate-700/50 rounded-lg p-4 text-center group-hover:scale-105 transition-transform">
                              <Icon className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                              <div className="text-sm text-gray-400">{result.metric}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-gray-300 mb-8">
                Let us help you achieve similar results with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/solutions"
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View More Cases
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;