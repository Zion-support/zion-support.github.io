import React from 'react';
import SEOHead from '../components/SEOHead';

const AIMedicalAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Medical Assistant - Zion Tech Group"
        description="AI-powered medical assistant for healthcare professionals with diagnostic support, patient monitoring, and medical documentation."
        keywords="AI medical assistant, healthcare AI, medical diagnosis, patient monitoring, medical documentation, health tech"
        canonicalUrl="https://ziontechgroup.com/ai-medical-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              AI Medical Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance healthcare delivery with AI-powered diagnostic support, patient monitoring, and medical documentation assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Diagnostic Support</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Symptom analysis and assessment
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Medical image analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Differential diagnosis suggestions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Treatment recommendations
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Drug interaction checking
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">Patient Care</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Patient monitoring and alerts
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Medical record management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Appointment scheduling
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Medication reminders
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Health trend analysis
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Healthcare Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Hospitals</h3>
                <p className="text-gray-300">Support clinical decision-making and patient care management.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Clinics</h3>
                <p className="text-gray-300">Streamline patient consultations and documentation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Telemedicine</h3>
                <p className="text-gray-300">Enable remote patient monitoring and consultations.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-400">Important Notice</h2>
            <p className="text-gray-300 text-center">
              This AI medical assistant is designed to support healthcare professionals and should not replace professional medical judgment. 
              Always consult with qualified medical professionals for medical decisions.
            </p>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-medical-assistant"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;