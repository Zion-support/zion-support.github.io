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
      challenge: 'Inefficient production processes and high error rates',
      solution: 'Deployed AI-driven automation system with predictive maintenance',
      results: [
        { metric: 'Production Efficiency', value: '+35%', icon: TrendingUp },
        { metric: 'Error Reduction', value: '-80%', icon: TrendingUp },
        { metric: 'Cost Savings', value: '$2.5M', icon: DollarSign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'Our AI automation solution revolutionized AutoParts Manufacturing\'s production line, dramatically improving efficiency and reducing costs.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Built comprehensive AI-powered analytics platform for patient data integration',
      results: [
        { metric: 'Diagnosis Accuracy', value: '+40%', icon: TrendingUp },
        { metric: 'Processing Time', value: '-50%', icon: Clock },
        { metric: 'Patient Outcomes', value: '+25%', icon: Users },
        { metric: 'Implementation Time', value: '8 months', icon: Clock }
      ],
      description: 'MediCare Systems now benefits from our AI-driven healthcare analytics platform, improving patient care and operational efficiency.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that have transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real results from real businesses transformed by our solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped companies across various industries achieve their goals 
              through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {study.industry}
                        </div>
                        <div className="text-gray-400 text-sm">
                          Client: {study.client}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Description</h4>
                          <p className="text-gray-300">{study.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="lg:w-80">
                      <h4 className="text-xl font-bold text-white mb-6">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-slate-800 p-4 rounded-lg text-center">
                            <result.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;