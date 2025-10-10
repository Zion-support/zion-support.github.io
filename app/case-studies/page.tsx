'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Platform',
      client: 'TechStart Inc',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Case Study Image</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-300 mb-4">Client: {study.client}</p>
                <p className="text-gray-400 mb-4">Industry: {study.industry}</p>
                <Link 
                  to={`/case-studies/${index}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
