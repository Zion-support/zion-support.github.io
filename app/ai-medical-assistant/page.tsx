import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AIMedicalAssistantPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>AI Medical Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered medical assistant for healthcare professionals. Streamline patient care, medical documentation, and clinical decision support with cutting-edge AI technology." />
        <meta name="keywords" content="AI medical assistant, healthcare AI, medical documentation, clinical decision support, medical automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-medical-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Medical Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance patient care with our advanced AI-powered medical assistant. 
              Streamline clinical workflows, improve diagnosis accuracy, and optimize healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-white mb-4">Clinical Decision Support</h3>
              <p className="text-gray-300">
                Get AI-powered clinical insights and recommendations to support medical decision-making.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">Medical Documentation</h3>
              <p className="text-gray-300">
                Automatically generate and organize patient records, notes, and medical reports.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Diagnostic Assistance</h3>
              <p className="text-gray-300">
                Analyze symptoms, medical images, and lab results to assist with accurate diagnoses.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Drug Interaction Checker</h3>
              <p className="text-gray-300">
                Identify potential drug interactions and contraindications for safer prescribing.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Patient Monitoring</h3>
              <p className="text-gray-300">
                Track patient vitals and health metrics with intelligent monitoring and alerts.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-4">Medical Research</h3>
              <p className="text-gray-300">
                Access latest medical research and clinical guidelines with AI-powered search.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Enhance Healthcare Delivery?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
=======
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;