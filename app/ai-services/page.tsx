import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route } from 'react-router-dom';
import { ArrowRight, IconComponent, Star, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // ... features
  ];

  const benefits = [
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. Enterprise-grade AI solutions starting at $800/month." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, ai consulting, automation, artificial intelligence" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto text-center">
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Services</span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
  
  );
}
}}