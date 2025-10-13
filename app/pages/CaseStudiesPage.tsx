import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react;
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [{
      title: 'E-commerce Platform AI Optimization',';
      client: 'TechRetail Inc.',';
      industry: 'E-commerce',';
      challenge: 'Low conversion rates and high cart abandonment',';
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',';
      results: [{ metric: 'Conversion Rate', value: '+45%', icon: TrendingUp },';
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUp },';
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users },';
        { metric: 'Implementation Time', value: '3 months', icon: Clock }';
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'';
    },
    {
      title: 'Manufacturing Process Automation',';
      client: 'AutoParts Manufacturing',';
      industry: 'Manufacturing',';
      challenge: 'Manual quality control processes causing delays and errors',';
      solution: 'Deployed computer vision and machine learning for automated quality inspection',';
      results: [{ metric: 'Quality Defects', value: '-75%', icon: TrendingUp },';
        { metric: 'Processing Speed', value: '+200%', icon: TrendingUp },';
        { metric: 'Cost Savings', value: '$2.5M/year', icon: DollarSign },';
        { metric: 'Implementation Time', value: '4 months', icon: Clock }';
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically reducing defects while increasing throughput.'';
    },
    {
      title: 'Healthcare Data Analytics Platform',';
      client: 'MediCare Systems',';
      industry: 'Healthcare',';
      challenge: 'Fragmented patient data and inefficient treatment planning',';
      solution: 'Built comprehensive data analytics platform with predictive modeling',';
      results: [{ metric: 'Treatment Accuracy', value: '+40%', icon: TrendingUp },';
        { metric: 'Patient Outcomes', value: '+35%', icon: Users },';
        { metric: 'Cost Reduction', value: '$1.8M/year', icon: DollarSign },';
        { metric: 'Implementation Time', value: '6 months', icon: Clock }';
      ],
      description: 'MediCare Systems now leverages our advanced analytics platform to provide better patient care through data-driven insights and predictive modeling.'';
    },
    {
      title: 'Financial Services Cloud Migration',';
      client: 'SecureBank Ltd.',';
      industry: 'Financial Services',';
      challenge: 'Legacy systems limiting scalability and innovation',';
      solution: 'Complete cloud migration with modern microservices architecture',';
      results: [{ metric: 'System Performance', value: '+300%', icon: TrendingUp },';
        { metric: 'Scalability', value: '10x', icon: TrendingUp },';
        { metric: 'Operational Costs', value: '-40%', icon: DollarSign },';
        { metric: 'Implementation Time', value: '8 months', icon: Clock }';
      ],
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.'';
    }
  ];
const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries transform';
            their operations with cutting-edge AI and IT solutions.;
          </p>
        </div>
        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, _index) => (
            <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
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
                        <div key={resultIndex} className="bg-white/5 rounded-lg p-4 text-center">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-gray-300 mb-6">
              Let us help you achieve similar results with our proven AI and IT solutions.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Your Project;
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View More Cases;
=======

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how we've helped businesses transform with our AI and IT solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  AI Implementation
                </h3>
                <p className="text-blue-700">
                  How we helped a Fortune 500 company implement AI solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Cloud Migration
                </h3>
                <p className="text-green-700">
                  Successful cloud infrastructure migration for a growing startup.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Cybersecurity
                </h3>
                <p className="text-purple-700">
                  Comprehensive security overhaul for a financial services company.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View All Case Studies
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
              </button>
            </div>
          </div>
=======

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CaseStudiesPage - Zion Tech Group</title>
        <meta name="description" content="CaseStudiesPage - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">CaseStudiesPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
        </div>
      </div>
<<<<<<< HEAD
    </div>;  );
}
export default CaseStudiesPage;
=======
    </>
  );
};

export default CaseStudiesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
