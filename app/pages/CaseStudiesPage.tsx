import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUp },
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users },
        { metric: 'Implementation Time', value: '3 months', icon: Clock }
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
        { metric: 'Quality Accuracy', value: '+95%', icon: TrendingUp },
        { metric: 'Processing Time', value: '-70%', icon: Clock },
        { metric: 'Cost Savings', value: '$2M/year', icon: DollarSign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'Our AI-powered quality control system helped AutoParts Manufacturing achieve near-perfect accuracy while significantly reducing processing time and costs.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive data analytics platform with predictive modeling capabilities',
      results: [
        { metric: 'Data Processing Speed', value: '+300%', icon: TrendingUp },
        { metric: 'Treatment Accuracy', value: '+40%', icon: TrendingUp },
        { metric: 'Patient Outcomes', value: '+25%', icon: Users },
        { metric: 'Implementation Time', value: '8 months', icon: Clock }
      ],
      description: 'We developed a comprehensive healthcare analytics platform that improved treatment planning and patient outcomes through data-driven insights.'
    },
    {
      title: 'Financial Services Risk Management',
      client: 'SecureBank',
      industry: 'Finance',
      challenge: 'Manual fraud detection leading to high false positives and missed threats',
      solution: 'Implemented AI-powered fraud detection system with real-time monitoring',
      results: [
        { metric: 'Fraud Detection Rate', value: '+85%', icon: TrendingUp },
        { metric: 'False Positives', value: '-60%', icon: TrendingUp },
        { metric: 'Processing Time', value: '-90%', icon: Clock },
        { metric: 'Cost Savings', value: '$5M/year', icon: DollarSign }
      ],
      description: 'Our AI-powered fraud detection system helped SecureBank significantly improve security while reducing false positives and operational costs.'
    },
    {
      title: 'Supply Chain Optimization',
      client: 'Global Logistics Co.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain management causing delays and increased costs',
      solution: 'Developed AI-powered supply chain optimization platform with predictive analytics',
      results: [
        { metric: 'Delivery Time', value: '-35%', icon: Clock },
        { metric: 'Cost Reduction', value: '+20%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '+50%', icon: Users },
        { metric: 'Implementation Time', value: '4 months', icon: Clock }
      ],
      description: 'Our supply chain optimization solution helped Global Logistics Co. improve efficiency and reduce costs while enhancing customer satisfaction.'
    },
    {
      title: 'Customer Service Automation',
      client: 'ServicePro Solutions',
      industry: 'Services',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Implemented AI-powered chatbot and automated ticket routing system',
      results: [
        { metric: 'Response Time', value: '-80%', icon: Clock },
        { metric: 'Customer Satisfaction', value: '+45%', icon: Users },
        { metric: 'Cost Reduction', value: '+30%', icon: TrendingUp },
        { metric: 'Implementation Time', value: '2 months', icon: Clock }
      ],
      description: 'Our AI-powered customer service automation helped ServicePro Solutions improve response times and customer satisfaction while reducing operational costs.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT solutions, client results" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real results from real clients
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable results with our AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Track Record</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our success and commitment
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses achieve their goals
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{study.industry}</span>
                      <span className="text-gray-400">{study.client}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={resultIndex} className="bg-slate-700/50 rounded-lg p-4 text-center">
                            <IconComponent className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                            <div className="text-gray-400 text-sm">{result.metric}</div>
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;