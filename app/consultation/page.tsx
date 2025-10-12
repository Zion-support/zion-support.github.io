import React from 'react';
<<<<<<< HEAD
'use client';

const ConsultationPage: React.FC = () => {
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Consultation() {
>>>>>>> origin/main
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Consultation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="consultation, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Consultation
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional consultation services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive consultation solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default ConsultationPage;
=======
        <meta name="description" content="Professional consultation services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Consultation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional consultation services coming soon.</p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/main
