import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const SpecializedServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Specialized services - Zion Tech Group</title>
        <meta name="description" content="Professional Specialized services solutions and services" />
        <meta name="keywords" content="specialized, services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Specialized services</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Expert Solutions</h3>
                <p className="text-gray-600">Our team of experts delivers cutting-edge solutions.</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
    </>
  );
}
export default SpecializedServicesPage;