import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
      description: 'How we helped a Fortune 500 company transform their operations with AI',
      content: 'This case study demonstrates the successful implementation of AI solutions...'
    }
  };

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{caseStudy.description}</p>
        <div className="prose max-w-none">
          <p>{caseStudy.content}</p>
        </div>
      </div>
    </div>
  );
};

