import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
      description: 'How we helped a Fortune 500 company implement AI solutions',
      content: 'This case study details the successful implementation of AI solutions...'
    },
    'blockchain-implementation': {
      title: 'Blockchain Implementation Success',
      description: 'Enterprise blockchain solution deployment',
      content: 'This case study covers the blockchain implementation...'
    },
    'cloud-migration': {
      title: 'Cloud Migration Success',
      description: 'Legacy system migration to cloud infrastructure',
      content: 'This case study details the cloud migration process...'
    }
  };

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
        <p className="text-xl text-gray-600">The requested case study does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{caseStudy.description}</p>
      <div className="prose max-w-none">
        <p>{caseStudy.content}</p>
      </div>
    </div>
  );
};

export default CaseStudyPage;