import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, technology, and digital transformation for your business." />
        <meta name="keywords" content="consultation, technology consulting, AI consulting, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get personalized advice from our technology experts to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Strategy</h3>
              <p className="text-gray-300 mb-6">
                Develop a comprehensive AI strategy tailored to your business needs and goals.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• AI readiness assessment</li>
                <li>• Technology roadmap</li>
                <li>• Implementation planning</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Book Consultation
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-6">
                Plan and execute a seamless migration to the cloud with minimal disruption.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Cloud assessment</li>
                <li>• Migration strategy</li>
                <li>• Security planning</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Book Consultation
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Transform your business processes with cutting-edge technology solutions.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Process analysis</li>
                <li>• Technology selection</li>
                <li>• Change management</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to discuss your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Schedule Free Consultation
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;
