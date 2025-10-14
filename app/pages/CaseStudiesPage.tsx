import React from 'react',
import { Helmet } from 'react-helmet-async',
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react',

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
      solution: 'Deployed computer vision AI for automated quality inspection and predictive maintenance',
      results: [
        { metric: 'Defect Detection', value: '+85%', icon: TrendingUp },
        { metric: 'Production Speed', value: '+40%', icon: Clock },
        { metric: 'Cost Reduction', value: '-25%', icon: DollarSign },
        { metric: 'Implementation Time', value: '4 months', icon: Clock }
      ],
      description: 'Our AI automation solution revolutionized AutoParts Manufacturing\'s quality control, dramatically improving efficiency and reducing costs.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Built comprehensive AI-powered analytics platform for patient data integration and predictive diagnostics',
      results: [
        { metric: 'Diagnosis Accuracy', value: '+70%', icon: TrendingUp },
        { metric: 'Processing Time', value: '-60%', icon: Clock },
        { metric: 'Patient Outcomes', value: '+50%', icon: Users },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'MediCare Systems now leverages AI to provide faster, more accurate diagnoses and improved patient care outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies across various industries including e-commerce, manufacturing, and healthcare." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Real-world success stories showcasing how our AI and IT solutions have transformed businesses across various industries.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.client}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
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
                        
                        <div>
                          <h4 className="text-lg font-semibold text-green-400 mb-2">Description</h4>
                          <p className="text-gray-300">{study.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-6">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => {
                          const IconComponent = result.icon;
                          return (
                            <div key={resultIndex} className="bg-slate-700 rounded-lg p-4 text-center">
                              <IconComponent className="w-6 h-6 text-purple-400 mx-auto mb-2" />
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
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;