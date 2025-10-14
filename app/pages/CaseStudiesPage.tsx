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
      solution: 'Deployed computer vision and AI-powered quality control systems',
      results: [
        { metric: 'Quality Defects', value: '-80%', icon: TrendingUp },
        { metric: 'Production Speed', value: '+35%', icon: TrendingUp },
        { metric: 'Cost Savings', value: '$2.5M', icon: DollarSign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'Our AI-powered quality control system reduced defects by 80% while increasing production speed by 35%, saving the client $2.5M annually.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MedCenter Health System',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive AI analytics platform for patient data integration and predictive treatment recommendations',
      results: [
        { metric: 'Treatment Accuracy', value: '+55%', icon: TrendingUp },
        { metric: 'Patient Outcomes', value: '+40%', icon: Users },
        { metric: 'Cost Reduction', value: '$1.8M', icon: DollarSign },
        { metric: 'Implementation Time', value: '8 months', icon: Clock }
      ],
      description: 'The AI analytics platform improved treatment accuracy by 55% and patient outcomes by 40%, while reducing operational costs by $1.8M.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we&apos;ve helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses across industries achieve remarkable results 
            with our AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="text-sm text-purple-400 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="text-gray-400 text-sm mb-4">Client: {study.client}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-white font-semibold mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-slate-700 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-300 text-xs">{result.metric}</span>
                          <result.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="text-white font-bold text-lg">{result.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6">{study.description}</p>

                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI and IT solutions can transform your business 
            and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;