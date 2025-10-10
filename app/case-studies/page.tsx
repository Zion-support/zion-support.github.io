import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Optimization',
      client: 'TechRetail Inc.',
      challenge: 'Slow loading times and poor user experience affecting sales',
      solution: 'Implemented AI-powered recommendations and cloud infrastructure optimization',
      results: '40% increase in page load speed, 25% boost in conversion rates'
    },
    {
      title: 'Healthcare Data Analytics',
      client: 'MediCare Solutions',
      challenge: 'Manual data processing causing delays in patient care',
      solution: 'Developed AI-powered data analysis system with real-time insights',
      results: '60% reduction in processing time, improved patient outcomes'
    },
    {
      title: 'Financial Services Automation',
      client: 'FinanceFlow Corp',
      challenge: 'Manual loan processing taking weeks to complete',
      solution: 'Built automated loan approval system using machine learning',
      results: '80% faster loan processing, 90% accuracy in risk assessment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with AI and cloud solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses transform their operations with our technology solutions.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h2>
                <p className="text-lg text-blue-600 mb-6">{study.client}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                    <p className="text-gray-600">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;