import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce AI Optimization',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUp },
        { metric: 'Revenue', value: '+$2.3M', icon: DollarSign },
        { metric: 'Customer Satisfaction', value: '+38%', icon: Users },
        { metric: 'Implementation Time', value: '3 months', icon: Clock }
      ],
      description: 'Transformed an e-commerce platform using AI to deliver personalized product recommendations and optimize the shopping experience.'
    },
    {
      title: 'Cloud Infrastructure Migration',
      client: 'FinanceFlow Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs',
      solution: 'Migrated to cloud-native architecture with automated scaling and monitoring',
      results: [
        { metric: 'Performance', value: '+60%', icon: TrendingUp },
        { metric: 'Cost Reduction', value: '-40%', icon: DollarSign },
        { metric: 'Uptime', value: '99.9%', icon: Clock },
        { metric: 'Scalability', value: '10x', icon: TrendingUp }
      ],
      description: 'Successfully migrated a financial services platform to the cloud, improving performance and reducing operational costs.'
    },
    {
      title: 'AI-Powered Customer Support',
      client: 'ServicePro Corp',
      industry: 'Customer Service',
      challenge: 'High support ticket volume and long response times',
      solution: 'Deployed AI chatbot and automated ticket routing system',
      results: [
        { metric: 'Response Time', value: '-75%', icon: Clock },
        { metric: 'Customer Satisfaction', value: '+52%', icon: Users },
        { metric: 'Cost Savings', value: '-65%', icon: DollarSign },
        { metric: 'Resolution Rate', value: '+80%', icon: TrendingUp }
      ],
      description: 'Revolutionized customer support operations with AI automation, significantly improving response times and customer satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations. See how we've helped businesses achieve their goals." />
        <meta name="keywords" content="case studies, success stories, client projects, AI solutions, cloud migration" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results 
            through innovative technology solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-gray-300">{study.client}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-6">{study.title}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Description</h3>
                      <p className="text-gray-300">{study.description}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => {
                      const Icon = result.icon;
                      return (
                        <div key={resultIndex} className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                          <div className="text-sm text-gray-300">{result.metric}</div>
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
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help transform your business and achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;