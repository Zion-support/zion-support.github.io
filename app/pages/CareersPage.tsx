import React from "react";
import { Helmet } from 'react-helmet-async';
import { Icon, MapPin } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [
    // ... features
  ];

  const openPositions = [
  const features = [
    {
      title: "Senior AI Engineer",
        type: "Full-time",
        location: "Remote",
        description: "Lead the development of machine learning models and AI solutions.",
        requirements: ["5+ years ML experience", "Python, TensorFlow", "PhD preferred"]
      },
  ];

  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
        <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions.
            Work on cutting-edge projects and make a real impact.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
  
  );
}
}}