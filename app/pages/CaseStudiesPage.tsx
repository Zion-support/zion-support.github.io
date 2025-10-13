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
      solution: 'Deployed computer vision AI for automated quality inspection and defect detection',
      results: [
        { metric: 'Quality Accuracy', value: '+95%', icon: TrendingUp },
        { metric: 'Processing Speed', value: '+300%', icon: Clock },
        { metric: 'Cost Reduction', value: '-40%', icon: DollarSign },
        { metric: 'Implementation Time', value: '4 months', icon: Clock }
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically improving accuracy and efficiency while reducing costs.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive AI analytics platform for patient data integration and predictive treatment recommendations',
      results: [
        { metric: 'Data Processing Speed', value: '+250%', icon: TrendingUp },
        { metric: 'Treatment Accuracy', value: '+35%', icon: TrendingUp },
        { metric: 'Patient Outcomes', value: '+50%', icon: Users },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'MediCare Systems now leverages our AI platform to provide more accurate diagnoses and personalized treatment plans, significantly improving patient outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solution implementations across various industries. See real results and client transformations." />
        <meta name="keywords" content="case studies, AI solutions, IT services, client success, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real results from real clients across various industries
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover how our AI and IT solutions have transformed businesses, 
              improved efficiency, and delivered measurable results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.client}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => {
                        const Icon = result.icon;
                        return (
                          <div key={resultIndex} className="bg-slate-800 p-4 rounded-lg text-center">
                            <Icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.metric}
                            </div>
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
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our proven solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/services" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;