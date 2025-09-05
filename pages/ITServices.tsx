import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ITServices() {
  const itServices = [
    {
      name: "Cloud Migration Services",
      description: "Complete cloud infrastructure migration with zero downtime, enhanced security, and optimized performance for your business.",
      price: "$2,999/project",
      features: [
        "Zero-downtime migration strategy",
        "Security assessment and hardening",
        "Performance optimization",
        "24/7 migration support",
        "Data backup and recovery",
        "Cost optimization analysis",
        "Training and documentation",
        "Post-migration monitoring"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve system reliability by 99.9%",
        "Enhance security posture",
        "Enable remote work capabilities"
      ],
      marketPrice: "$5,000-10,000/project",
      savings: "Save up to $7,000/project"
    }
  ];

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, data analytics, and infrastructure management."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern businesses
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}