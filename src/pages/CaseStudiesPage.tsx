import React from 'react';
import SEO from '../components/SEO';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Success stories and case studies showcasing how Zion Tech Group has helped businesses transform with AI and IT solutions."
        keywords="case studies, success stories, AI implementation, business transformation"
      />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Case Studies</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">Manufacturing AI Platform</h2>
                <p className="text-gray-600 mb-4">
                  Implemented an AI-powered manufacturing platform that increased efficiency by 40% and reduced costs by 25%.
                </p>
                <div className="text-sm text-gray-500">Industry: Manufacturing | ROI: 300%</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">Supply Chain Intelligence</h2>
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive supply chain optimization solution that improved delivery times by 35%.
                </p>
                <div className="text-sm text-gray-500">Industry: Logistics | ROI: 250%</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">Autonomous Operations</h2>
                <p className="text-gray-600 mb-4">
                  Created an autonomous operations system that reduced manual intervention by 80% and improved reliability.
                </p>
                <div className="text-sm text-gray-500">Industry: Technology | ROI: 400%</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">AI Customer Support</h2>
                <p className="text-gray-600 mb-4">
                  Implemented AI-powered customer support automation that improved response times by 90%.
                </p>
                <div className="text-sm text-gray-500">Industry: Services | ROI: 200%</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CaseStudiesPage;