'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.client} - {study.industry}</p>
                  <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More <ArrowRight className="inline w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
