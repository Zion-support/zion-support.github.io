'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
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
=======
export default function AiMobileBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI mobile builder solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Mobile Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create intelligent mobile applications with our AI-powered development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Smart Development</h3>
            <p className="text-gray-300 mb-6">
              AI-assisted development tools that accelerate your mobile app creation process.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Intelligent UI/UX</h3>
            <p className="text-gray-300 mb-6">
              Create user interfaces that adapt and learn from user behavior patterns.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Performance Optimization</h3>
            <p className="text-gray-300 mb-6">
              AI-powered optimization for better app performance and user experience.
            </p>
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
const AiMobileBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Ai Mobile Builder services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-mobile-builder, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ai Mobile Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional ai mobile builder services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced ai mobile builder solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
      </div>
    </>
  );
};

export default AiMobileBuilderPage;