import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
      description: 'How a Fortune 500 company transformed their operations with AI',
      content: 'This case study demonstrates the successful implementation of AI solutions...'
    }
  };

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Case Study Not Found</h1>
        <p>The requested case study could not be found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{caseStudy.title}</h1>
      <p className="text-gray-600 mb-6">{caseStudy.description}</p>
      <div className="prose max-w-none">
        <p>{caseStudy.content}</p>
      </div>
    </div>
  );
};

export default CaseStudyPage;

