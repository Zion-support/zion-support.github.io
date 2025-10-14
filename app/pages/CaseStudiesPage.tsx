import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon
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
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform
              their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
          
          {/* Case Studies Grid */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-violet-500 transition-all duration-300 hover-lift">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div>
                    <div className="flex items-center mb-4">
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
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => {
                        const Icon = result.icon;
                        return (
                          <div key={resultIndex} className="bg-slate-800/50 rounded-lg p-4 text-center group-hover:scale-105 transition-transform">
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
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve similar results with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  View More Cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;