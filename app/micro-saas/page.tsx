'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, IconComponent, Star, CheckCircle, Clock } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    // ... features
  ];

  const categories = ['All', 'Content Creation', 'CRM & Sales', 'Inventory Management', 'Financial Management', 'AI & Automation', 'Development Tools', 'Legal & Compliance', 'Supply Chain', 'Communication', 'Data Management', 'Analytics', 'Marketing', 'Social Media', 'Project Management', 'Customer Experience', 'Document Management', 'Productivity', 'Web Analytics', 'Human Resources', 'Data Protection', 'API Management'];

const benefits = [
  const features = [
    {
      title: 'Quick Setup',
        description: 'Get started in minutes with our intuitive setup process.',
        icon: Zap,
      },
  ];

  return (
    <>
      <Helmet>
        <title>Micro-saas - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Micro-saas page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto text-center">
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SAAS</span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful business tools designed for small to medium businesses. Get enterprise-level functionality at affordable prices.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
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
              Why Choose Our Micro SAAS Solutions?
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
  
  );
};
export default MicroSaasPage;
}}
    </>
  );
}