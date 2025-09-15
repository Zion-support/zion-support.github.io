import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study: {slug}</h1>
        <p className="text-xl text-gray-600">Case study content coming soon...</p>
      </div>
    </main>
  );
};

export default CaseStudyPage;