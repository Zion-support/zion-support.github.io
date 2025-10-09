import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions to transform your business operations and drive innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Custom ML models tailored to your specific business needs and data requirements.
              </p>
              <div className="text-cyan-400 font-semibold">Starting at $1,500/month</div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-4">
                Advanced NLP solutions for text analysis, sentiment detection, and language understanding.
              </p>
              <div className="text-cyan-400 font-semibold">Starting at $999/month</div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300 mb-4">
                Image and video analysis solutions for automated visual inspection and recognition.
              </p>
              <div className="text-cyan-400 font-semibold">Starting at $1,299/month</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIServicesPage;
