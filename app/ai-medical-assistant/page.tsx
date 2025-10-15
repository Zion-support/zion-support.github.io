import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIMedicalAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Medical Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI Medical Assistant for healthcare professionals. AI-powered diagnosis support, medical research, and patient care optimization." />
        <meta name="keywords" content="AI medical assistant, healthcare AI, medical diagnosis, medical research, patient care, medical automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-medical-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI Medical Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered medical assistance for healthcare professionals and patient care optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Diagnosis Support</h2>
                <p className="text-gray-300 mb-4">
                  AI-powered diagnostic assistance to help healthcare professionals make more accurate and timely diagnoses.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Symptom analysis</li>
                  <li>• Differential diagnosis</li>
                  <li>• Treatment recommendations</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Medical Research</h2>
                <p className="text-gray-300 mb-4">
                  Access to the latest medical research and AI-powered analysis of medical literature and studies.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Literature review</li>
                  <li>• Drug interaction analysis</li>
                  <li>• Clinical trial matching</li>
                  <li>• Medical guideline updates</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Patient Records</h3>
                  <p className="text-gray-300 text-sm">Intelligent patient record analysis and management</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Medical Imaging</h3>
                  <p className="text-gray-300 text-sm">AI-powered medical image analysis and interpretation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                  <p className="text-gray-300 text-sm">Rapid emergency response and critical care assistance</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI Medical Assistant
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;