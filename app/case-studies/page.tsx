import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies and client success stories." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">E-commerce AI Optimization</h3>
                  <p className="text-sm text-gray-500">Retail & E-commerce</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Helped a major e-commerce platform increase conversion rates by 40% using AI-powered recommendation systems and personalized shopping experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-sm text-gray-600">Conversion Increase</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">$2M+</div>
                  <div className="text-sm text-gray-600">Revenue Impact</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read full case study →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Healthcare Data Analytics</h3>
                  <p className="text-sm text-gray-500">Healthcare & Life Sciences</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Implemented advanced analytics solutions for a healthcare provider, reducing operational costs by 25% and improving patient outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">25%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">60%</div>
                  <div className="text-sm text-gray-600">Faster Diagnosis</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read full case study →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Manufacturing Process Automation</h3>
                  <p className="text-sm text-gray-500">Manufacturing & Industrial</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Deployed AI-powered automation solutions for a manufacturing company, increasing production efficiency by 35% and reducing defects by 50%.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">35%</div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">50%</div>
                  <div className="text-sm text-gray-600">Defect Reduction</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read full case study →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Financial Services AI</h3>
                  <p className="text-sm text-gray-500">Financial Services</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Developed fraud detection and risk assessment systems for a financial institution, reducing false positives by 60% and improving detection accuracy.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600">False Positive Reduction</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Detection Accuracy</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read full case study →</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let us help you achieve similar results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </a>
              <a href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;