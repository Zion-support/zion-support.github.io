import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiServicesPage() {
=======
import { Brain, BarChart, Shield, Zap } from 'lucide-react';
export default function AIServicesPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by AI',
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: 'AI Security',
      description: 'AI-powered cybersecurity solutions',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation',
      icon: <Zap className="w-8 h-8" />
    };
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  return (
    <div>Content</div>
  );
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Ai Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced Ai Services solutions powered by AI." />
=======
        <meta name="description" content="Professional ai services services by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
      <Helmet >
        <title>AI Services - Zion Tech Group</title>
        <meta name = "description" content="Comprehensive AI solutions for modern businesses." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Services</h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">Advanced Ai Services solutions powered by AI.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
          <p className="text-lg text-gray-300 mb-8">Professional ai services services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>;
  );
}