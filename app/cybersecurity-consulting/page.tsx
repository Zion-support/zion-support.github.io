<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecurityConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Consulting - Zion Tech Group</title>
        <meta name="description" content="Cybersecurity Consulting services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="cybersecurity-consulting, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional cybersecurity consulting services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced cybersecurity consulting solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityConsultingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
=======
export default function CybersecurityConsultingPage() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CybersecurityConsulting() {
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Cybersecurity Consulting - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity consulting solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Consulting
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cybersecurity Consulting
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced cybersecurity consulting solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
