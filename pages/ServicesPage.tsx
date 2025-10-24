import React from 'react';import { Helmet } from 'react-helmet-async';

const ServicesPage: "React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Zion Tech Group</title>        <meta name="description" content="Comprehensive technology services for your business." />
      </Helmet>      <div className="min-h-screen bg-gray-50">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>          <p className="text-xl text-gray-600">Comprehensive technology services for your business.</p>
        </div>
      </div>
    </>
  );"};

export default ServicesPage;
