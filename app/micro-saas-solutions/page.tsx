import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our innovative micro SaaS solutions designed to solve specific business challenges."
        keywords="micro saas, saas solutions, business tools, software as a service"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools that solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Content Generator</h3>
              <p className="text-gray-600 mb-4">
                Generate high-quality content with AI assistance.
              </p>
              <Link to="/ai-content-generator" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Transcriber</h3>
              <p className="text-gray-600 mb-4">
                AI-powered meeting transcription with real-time analysis.
              </p>
              <Link to="/ai-meeting-transcriber" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Reviewer</h3>
              <p className="text-gray-600 mb-4">
                Automated code review with AI-powered analysis.
              </p>
              <Link to="/ai-code-reviewer" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to learn more about our micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
