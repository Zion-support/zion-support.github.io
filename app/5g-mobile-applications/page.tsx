'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud } from 'lucide-react';

const 5gMobileApplications: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5gMobileApplications | Zion Tech Group</title>
        <meta name="description" content="Professional 5gMobileApplications services and solutions for your business needs." />
        <meta name="keywords" content="AI, IT solutions, 5gmobileapplications, technology, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              5gMobileApplications
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Professional 5gMobileApplications services and solutions for your business needs.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced AI Solutions</h3>
                <p className="text-gray-300">
                  Cutting-edge artificial intelligence technologies to transform your business operations.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  Robust security measures to protect your data and ensure compliance.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-300">
                  Optimize your systems for maximum efficiency and scalability.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default 5gMobileApplications;
