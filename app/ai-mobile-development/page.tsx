'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiMobileDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Mobile Development - Zion Tech Group</title>
        <meta name="description" content="AI-powered mobile app development services. Create intelligent, responsive mobile applications with cutting-edge AI integration." />
        <meta name="keywords" content="AI mobile development, mobile app development, AI integration, mobile solutions, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Mobile Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build intelligent mobile applications that leverage AI to deliver personalized experiences, 
              smart automation, and advanced functionality across iOS and Android platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">AI-Powered Features</h2>
              <p className="text-gray-300 mb-6">
                Integrate advanced AI capabilities into your mobile applications including natural language 
                processing, computer vision, and machine learning models.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Natural language processing and chatbots</li>
                <li>• Computer vision and image recognition</li>
                <li>• Predictive analytics and recommendations</li>
                <li>• Voice recognition and synthesis</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Cross-Platform Development</h2>
              <p className="text-gray-300 mb-6">
                Develop once, deploy everywhere with our cross-platform mobile development solutions 
                that ensure consistent AI functionality across all devices.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• React Native and Flutter development</li>
                <li>• Native iOS and Android apps</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Cloud integration and synchronization</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Start Your AI Mobile Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiMobileDevelopmentPage;