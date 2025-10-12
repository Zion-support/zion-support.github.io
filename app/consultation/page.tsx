import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Transform your business today." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert advice on how AI and IT solutions can transform your business. No obligation, just results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Free Consultation</h2>
              <p className="text-gray-300 mb-8">
                Our experts will analyze your current setup and provide actionable recommendations for improvement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What You'll Get:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Current system analysis</li>
                    <li>• AI implementation roadmap</li>
                    <li>• Cost optimization strategies</li>
                    <li>• Security assessment</li>
                    <li>• Performance recommendations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Us:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-cyan-400 font-semibold">Phone:</p>
                      <p className="text-white">(302) 464-0950</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-semibold">Email:</p>
                      <p className="text-white">kleber@ziontechgroup.com</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-semibold">Address:</p>
                      <p className="text-white">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;