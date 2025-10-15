import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIMedicalAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Medical Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered medical assistant for healthcare professionals. Diagnostic support, patient monitoring, medical image analysis, and clinical decision support." />
        <meta name="keywords" content="AI medical assistant, healthcare AI, medical diagnosis, clinical support, medical imaging" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Medical Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered medical assistant for healthcare professionals. 
              Diagnostic support, patient monitoring, and clinical decision support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Healthcare Support
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Medical Assistant provides healthcare professionals with 
                intelligent diagnostic support, patient monitoring capabilities, 
                and clinical decision assistance. Built with medical expertise and AI technology.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Diagnostic assistance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Medical image analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Patient monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Clinical decision support
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Medical Analysis</h3>
              <div className="space-y-4">
                <select className="w-full p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-red-500 focus:outline-none">
                  <option>Select Analysis Type</option>
                  <option>Medical Image Analysis</option>
                  <option>Symptom Assessment</option>
                  <option>Lab Result Analysis</option>
                  <option>Treatment Recommendation</option>
                </select>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Start Analysis
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Diagnostic Imaging</h3>
              <p className="text-gray-300">
                AI-powered analysis of X-rays, MRIs, CT scans, and other medical images.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Patient Monitoring</h3>
              <p className="text-gray-300">
                Continuous monitoring of patient vitals and health indicators.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Clinical Support</h3>
              <p className="text-gray-300">
                Evidence-based treatment recommendations and clinical decision support.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Enhance Healthcare Delivery
            </h2>
            <p className="text-gray-300 mb-8">
              Join healthcare professionals using our AI Medical Assistant for better patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Request Demo
              </button>
              <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;