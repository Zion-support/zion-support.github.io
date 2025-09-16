import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
      description: 'How we helped a Fortune 500 company implement AI solutions that increased efficiency by 300%',
      content: 'This case study details our successful AI transformation project...'
    },
    'blockchain-implementation': {
      title: 'Global Blockchain Implementation',
      description: 'Deployed enterprise blockchain solution that streamlined supply chain operations',
      content: 'This case study covers our blockchain implementation...'
    },
    'cloud-migration': {
      title: 'Cloud Migration Success',
      description: 'Migrated legacy systems to cloud infrastructure achieving 99.9% uptime',
      content: 'This case study outlines our cloud migration project...'
    }
  };

  const caseStudy = caseStudies[slug] || {
    title: 'Case Study Not Found',
    description: 'The requested case study could not be found.',
    content: 'Please check the URL and try again.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{caseStudy.description}</p>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-700 leading-relaxed">{caseStudy.content}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage;