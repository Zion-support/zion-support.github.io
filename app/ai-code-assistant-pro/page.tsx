<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function AICodeAssistantPro() {
  return (

        <title>AI Code Assistant Pro - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AI Code Assistant Pro</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI code assistant pro services coming soon.</p>
            
              Contact Us

  );
=======
export default function AICodeAssistantProPage() {
  return (
    <>
      <Helmet>
        <title>A I Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered code assistant with intelligent generation, debugging, and analysis. Increase development speed by 300%. Starting at $29/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Code Assistant Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
