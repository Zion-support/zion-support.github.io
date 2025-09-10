import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function AIServices() {
  const aiServices = [
    {
      name: "AI Content Creation Studio",
      description: "Revolutionary AI-powered content creation platform that generates high-quality, brand-consistent content across multiple channels.",
      price: "$299/month",
      features: [
        "Automated blog post generation",
        "Social media content creation",
        "Email marketing campaigns",
        "SEO-optimized content",
        "Multi-language support",
        "Brand voice customization",
        "Content calendar management",
        "Performance analytics"
      ],
      benefits: [
        "Reduce content creation time by 80%",
        "Maintain consistent brand voice",
        "Scale content production effortlessly",
        "Improve SEO rankings"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    }
  ];

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI services including content creation, automation, machine learning, and intelligent solutions."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}