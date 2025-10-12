import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default AiAutonomousSystemsPage;
const AiAutonomousSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Professional AI autonomous systems services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
export default function AiAutonomousSystemsPage() {
  return (
    <><Helmet>
        <title>AiAutonomousSystems - Zion Tech Group</title>
        <meta name="description" content="Professional ai autonomous systems solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiAutonomousSystems</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai autonomous systems solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div></>
  );
}
