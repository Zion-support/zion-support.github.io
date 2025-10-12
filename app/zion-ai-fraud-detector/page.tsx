import React from 'react';
<<<<<<< HEAD
'use client';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

export default function ZionAiFraudDetector() {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Zion Ai Fraud Detector - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Fraud Detector services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="zion-ai-fraud-detector, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />Zion Ai Fraud Detector
              </span>
            </h1>
            <p className="w-5 h-5ml-2">Professional zion ai fraud detector services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-boldtext-white mb-4"  >Coming Soon</h2>
            <p className="w-5 h-5ml-2">We're working on bringing you comprehensive zion ai fraud detector solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5 h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default ZionAiFraudDetectorPage;
=======
        <title>ZionAiFraudDetector - Zion Tech Group</title>
        <meta name="description" content="Professional zionaifrauddetector services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">ZionAiFraudDetector</h1>
            <p className="text-lg text-gray-300 mb-8">Professional zionaifrauddetector services coming soon.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
