import React from "react";
import { Helmet } from 'react-helmet-async';
import { Icon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    // ... features
  ];

  const benefits = [
    "Expert IT professionals with industry certifications",
    "24/7 monitoring and support services",
    "Scalable solutions that grow with your business",
    "Proactive maintenance to prevent issues",
    "Cost-effective IT solutions",
    "Compliance with industry standards"
  ];
  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, system integration" />
      </Helmet>
      
        <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to keep your business running smoothly and securely.
            From infrastructure to support, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
  
  );
}
}}