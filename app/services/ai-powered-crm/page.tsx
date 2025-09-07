import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI-Powered CRM | Zion Tech Group',
  description: 'Intelligent customer relationship management powered by AI for better customer engagement and sales automation.',
  keywords: 'AI CRM, customer relationship management, sales automation, AI-powered CRM, customer engagement',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI-Powered CRM | Zion Tech Group',
    description: 'Intelligent customer relationship management powered by AI for better customer engagement and sales automation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function AiPoweredCrmPage() {
  const features = [
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring and qualification using machine learning algorithms.',
      icon: '🎯'
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI-powered automated follow-up sequences for better customer engagement.',
      icon: '🤖'
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict customer behavior and optimize sales strategies with AI insights.',
      icon: '📊'
    },
    {
      title: 'Smart Segmentation',
      description: 'Automatically segment customers based on behavior and preferences.',
      icon: '👥'
    },
    {
      title: 'Sales Forecasting',
      description: 'Accurate sales forecasting powered by AI and historical data.',
      icon: '📈'
    },
    {
      title: 'Customer Insights',
      description: 'Deep customer insights and analytics for better decision making.',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered CRM
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Intelligent customer relationship management powered by AI for better customer engagement and sales automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-blue-300 text-blue-100 hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us today to learn more about our AI-powered CRM solutions
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}