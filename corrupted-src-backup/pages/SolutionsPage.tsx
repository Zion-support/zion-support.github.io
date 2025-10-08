import React from "react";
import SEO from "../components/SEO";

const SolutionsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Solutions - Zion Tech Group"
        description="Comprehensive AI solutions for every business need."
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions for every business need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">AI Platform</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive AI platform with advanced machine learning
                capabilities.
              </p>
              <a
                href="/solutions/ai-platform"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">AI Security</h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions powered by AI to protect your
                business.
              </p>
              <a
                href="/solutions/ai-security"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">AI Performance</h3>
              <p className="text-gray-600 mb-4">
                Optimize your AI systems for maximum performance and efficiency.
              </p>
              <a
                href="/solutions/ai-performance"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
