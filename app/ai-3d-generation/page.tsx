import React from 'react';
export default Ai3DGenerationPage;
const Ai3DGenerationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI 3D Generation services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="ai-3d-generation, AI solutions, IT services" /></meta>
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Ai3dGenerationPage() {
  return (
    <><Helmet>
        <title>Ai3dGeneration - Zion Tech Group</title>
        <meta name="description" content="Professional ai 3d generation solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai3dGeneration</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai 3d generation solutions coming soon.</p>
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
