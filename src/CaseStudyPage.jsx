import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
      company: 'Fortune 500 Company',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented autonomous AI agents',
      results: '40% cost reduction, 300% productivity increase'
    },
    'blockchain-implementation': {
      title: 'Blockchain Implementation',
      company: 'Global Supply Chain Company',
      challenge: 'Supply chain transparency and traceability',
      solution: 'Enterprise blockchain solution',
      results: '$2M annual savings, streamlined operations'
    },
    'cloud-migration': {
      title: 'Cloud Migration Success',
      company: 'Technology Startup',
      challenge: 'Legacy system limitations',
      solution: 'Cloud infrastructure migration',
      results: '99.9% uptime, 60% faster performance'
    }
  };

  const caseStudy = caseStudies[slug] || {
    title: 'Case Study Not Found',
    company: 'Unknown',
    challenge: 'This case study does not exist',
    solution: 'Please check the URL',
    results: 'No results available'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{caseStudy.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company</h2>
                <p className="text-gray-600 mb-6">{caseStudy.company}</p>
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenge</h2>
                <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Solution</h2>
                <p className="text-gray-600 mb-6">{caseStudy.solution}</p>
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Results</h2>
                <p className="text-gray-600 mb-6">{caseStudy.results}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;