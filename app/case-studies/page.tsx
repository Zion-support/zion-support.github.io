import React from 'react';
import { 
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'RetailMax',
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
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered document processing and risk assessment automation',
      results: {
        roi: '280%',
        processingTime: '-75%',
        accuracy: '+95%',
        costSavings: '$1.8M'
      },
      image: '🏦',
      description: 'Automated loan processing workflows resulting in faster approvals and improved accuracy.'
    },
    {
      id: 3,
      title: 'Healthcare AI Implementation',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Inefficient patient diagnosis and treatment planning',
      solution: 'AI-powered diagnostic tools and treatment recommendation system',
      results: {
        roi: '420%',
        diagnosisAccuracy: '+92%',
        treatmentTime: '-60%',
        patientSatisfaction: '+88%'
      },
      image: '🏥',
      description: 'Revolutionized patient care with AI-driven diagnostic and treatment planning tools.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies across various industries." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries
              transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{study.image}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-blue-400 font-semibold">{study.company}</p>
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-2 text-center">
                          <div className="text-green-400 font-bold text-lg">{value}</div>
                          <div className="text-gray-300 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm italic">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready toWrite Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with
                our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;