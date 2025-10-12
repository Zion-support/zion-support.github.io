import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ArrowRight, Calendar, BarChart3, Users, Zap, CheckCircle, Target, TrendingUp, Smartphone, Shield, Bot, Star, Smartphone as Mobile } from 'lucide-react';

export default function AIProjectManagerPage() {
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiProjectManagerPage() {
  return (
  return (
    <><Helmet>
        <title>A I Project Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Project Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your project management with AI-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
      </>
  );

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title />AI Project Manager - Zion Tech Group | Intelligent Project Management</title>
        <meta name="description" content="Revolutionary AI-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." /></meta>
        <meta name="keywords" content="AI project management, smart task prioritization, predictive analytics, team collaboration, project automation, resource optimization" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-project-manager"  /></link>
    <><Helmet>
        <title>AiProjectManager - Zion Tech Group</title>
        <meta name="description" content="Professional ai project manager solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiProjectManager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai project manager solutions coming soon.</p>
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