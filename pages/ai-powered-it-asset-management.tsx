import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function AIPoweredITAssetManagement() {
  const features = [
    "Hardware devices (servers, workstations, mobile devices)",
    "Software licenses and applications",
    "Network infrastructure and equipment",
    "Cloud resources and virtual machines",
    "Security devices and appliances",
    "Peripheral devices and accessories"
  ];

  return (
    <Layout>
      <Head>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered IT asset management solutions for modern enterprises." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered IT Asset Management</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive AI-powered IT asset management solutions for modern enterprises.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}