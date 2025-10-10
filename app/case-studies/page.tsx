'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Automation',
      client: 'TechCorp',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automation that reduced customer service costs by 60% and improved response times by 80%.',
      results: ['60% cost reduction', '80% faster response times', '95% customer satisfaction']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Successfully migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs.',
      results: ['40% cost savings', '99.9% uptime', '50% faster processing']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Enhanced security infrastructure to protect sensitive patient data and ensure HIPAA compliance.',
      results: ['100% HIPAA compliance', 'Zero security breaches', '24/7 monitoring']
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
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Case Study Image</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 mb-2">{study.client} • {study.industry}</p>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {result}
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mt-4 font-medium"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
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
