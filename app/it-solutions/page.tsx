import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Server, Cloud } from 'lucide-react'

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItSolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'Expert It Solutions Solutions',
      description: 'Professional it solutions services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored it solutions implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your it solutions needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>It Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional it solutions solutions and services" />
        <meta name="keywords" content="it, solutions" />
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud solutions, and system integration services." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud solutions, system integration, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">IT Solutions</h1>
            <div className="text-gray-400">
              <p>IT solutions content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITSolutionsPage;
