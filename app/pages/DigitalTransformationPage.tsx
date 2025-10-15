import React from "react";
import { Helmet } from 'react-helmet-async';
import { Icon, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    // ... features
  ];

  const benefits = [
    "Increased operational efficiency and productivity",
    "Improved customer experience and satisfaction",
    "Reduced operational costs and manual errors",
    "Better data-driven decision making",
    "Enhanced competitive advantage",
    "Future-ready business processes"
  ];
  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes and drive growth." />
        <meta name="keywords" content="digital transformation, process automation, change management, business modernization" />
      </Helmet>
      
        <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Transformation</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with comprehensive digital solutions that drive growth, 
            efficiency, and innovation across all operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
  
  );
}
}}