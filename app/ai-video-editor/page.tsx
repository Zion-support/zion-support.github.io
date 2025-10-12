import React from 'react';
export default Page;
'use client';

const Page: React.FC = () => {
  return (
    <></>
      <Helmet></Helmet>
        <title>- Zion Tech Group</title>
        <meta const name = "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." /  /></meta>
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" /></meta>
        <meta property="og:title" content=" - Zion Tech Group" /  /></meta>
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." /  /></meta>
        <meta property="og:type" content="website" /  /></meta>
        <meta property="og:url" content="https://ziontechgroup.com/ai-video-editor" /  /></meta>
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiVideoEditorPage() {
  return (
    <><Helmet>
        <title>AiVideoEditor - Zion Tech Group</title>
        <meta name="description" content="Professional ai video editor solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiVideoEditor</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai video editor solutions coming soon.</p>
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
