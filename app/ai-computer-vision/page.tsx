import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiComputerVisionPage() {
  return (
    <><Helmet>
        <title>AiComputerVision - Zion Tech Group</title>
        <meta name="description" content="Professional ai computer vision solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiComputerVision</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai computer vision solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
  );
}

export default AiComputerVisionPage;
'use client';

const AiComputerVisionPage: React.FC = () => {
  return (
    <></>
      <Helmet></Helmet>
        <title>Ai Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Ai Computer Vision services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="ai-computer-vision, AI solutions, IT services" /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2" /></h1>
              <span className="w-5h-5ml-2" />Ai Computer Vision;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional ai computer vision services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive ai computer vision solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div></>
  );
};
      </div></>
  );
}
