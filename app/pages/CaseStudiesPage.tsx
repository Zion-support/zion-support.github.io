import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

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
        { metric: 'Quality Defects', value: '-75%', icon: TrendingUp },
        { metric: 'Processing Speed', value: '+200%', icon: TrendingUp },
        { metric: 'Cost Savings', value: '$2.5M/year', icon: DollarSign },
        { metric: 'Implementation Time', value: '4 months', icon: Clock }
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
        { metric: 'Treatment Accuracy', value: '+40%', icon: TrendingUp },
        { metric: 'Patient Outcomes', value: '+35%', icon: Users },
        { metric: 'Cost Reduction', value: '$1.8M/year', icon: DollarSign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
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
        { metric: 'System Performance', value: '+300%', icon: TrendingUp },
        { metric: 'Scalability', value: '10x', icon: TrendingUp },
        { metric: 'Operational Costs', value: '-40%', icon: DollarSign },
        { metric: 'Implementation Time', value: '8 months', icon: Clock }
      ],
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Success stories and case studies from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          <p className="text-lg text-gray-300 mb-12">
            Discover how we've helped businesses transform with our AI and IT solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{study.client} • {study.industry}</p>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{result.value}</div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;