import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
<<<<<<< HEAD
      description: 'How we helped a Fortune 500 company transform their operations with AI',
      content: 'This case study demonstrates the successful implementation of AI solutions...'
=======
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
>>>>>>> cursor/create-and-deploy-new-content-2a7c
    }
  };

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/create-and-deploy-new-content-2a7c
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default CaseStudyPage;

=======
export default CaseStudyPage;
>>>>>>> cursor/create-and-deploy-new-content-2a7c
