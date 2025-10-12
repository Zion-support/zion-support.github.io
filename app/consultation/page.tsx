import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

export default function ConsultationPage() {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert advice for your project." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Free Consultation</h1>
          <p className="text-lg text-gray-300 mb-8">Get expert advice for your project.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Professional consultation services by Zion Tech Group. Transform your business with our expert solutions." />
=======
export default function Consultation() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
        <title>Consultation - Zion Tech Group</title>
export default ConsultationPage;
'use client';
const ConsultationPage: React.FC = () => {
  return (
    <div>Content</div>
  );
        <>
      <title>Consultation - Zion Tech Group</title>
            <h1 className="text-4xl font-bold text-white mb-6">Consultation</h1>
            <p className="text-lg text-gray-300 mb-8">Professional consultation services coming soon.</p>
              Contact Us
      </>;
  );
}
        <meta name = "description" content="Professional consultation by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Consultation</h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">Professional consultation services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          >
=======
          <p className="text-lg text-gray-300 mb-8">Professional consultation coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>;
  );
}