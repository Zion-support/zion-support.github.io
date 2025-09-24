import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Case Study: {slug}
        </h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            This case study showcases our innovative solutions and their impact.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              Our team successfully implemented cutting-edge technology solutions 
              that delivered exceptional results for our client.
            </p>
            <h3 className="text-xl font-semibold mb-3">Key Results</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>50% improvement in efficiency</li>
              <li>30% reduction in costs</li>
              <li>99.9% uptime achieved</li>
              <li>Client satisfaction score: 9.8/10</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;