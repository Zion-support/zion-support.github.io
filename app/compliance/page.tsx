'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, ArrowRight, Target, Users, Globe } from 'lucide-react';

const CompliancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Compliance solutions by Zion Tech Group. Ensure your business meets regulatory requirements with our compliance services." />
        <meta name="keywords" content="compliance, regulatory compliance, data protection, GDPR, HIPAA, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ensure your business meets regulatory requirements with our compliance solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Shield className="mr-2 h-5 w-5" />
                Get Compliant
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;