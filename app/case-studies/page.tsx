'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, CheckCircle, Users, DollarSign, Clock } from 'lucide-react';

<<<<<<< HEAD
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Transformation',
      company: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '340%',
        conversion: '+85%',
        costReduction: '-65%',
        revenue: '+$2.3M'
      },
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation',
      company: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Manual patient data processing and diagnosis delays',
      solution: 'AI-powered diagnostic tools and automated patient management',
      results: {
        roi: '280%',
        efficiency: '+90%',
        accuracy: '+95%',
        timeSaved: '60%'
      },
      image: '🏥',
      description: 'Revolutionized patient care with AI-driven diagnostic tools and automated workflows.'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      company: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Manual loan processing and risk assessment inefficiencies',
      solution: 'AI-powered risk assessment and automated loan processing',
      results: {
        roi: '420%',
        processingTime: '-80%',
        accuracy: '+98%',
        customerSatisfaction: '+75%'
      },
      image: '💳',
      description: 'Streamlined financial operations with AI-driven risk assessment and automated processing.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementations. Real case studies showcasing measurable results and business transformations." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation, ROI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Case
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with AI and IT solutions. 
              Real results from real companies.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{study.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 font-semibold">{study.company}</p>
                      <p className="text-gray-400 text-sm">{study.industry}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that have transformed their business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
=======
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
