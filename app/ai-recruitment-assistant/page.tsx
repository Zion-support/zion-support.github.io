import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AirecruitmentassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Ai Recruitment Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai recruitment assistant services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4 xl font-bold text-white mb-6">Ai Recruitment Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai recruitment assistant services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}