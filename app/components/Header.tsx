'use client';
import React from 'react';
import Navigation from './Navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: "CheckCircle",
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence solutions",
    benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: "CheckCircle",
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions",
    benefits: ["Auto-scaling", "High Availability", "Security"]
  },
  {
    icon: "CheckCircle",
    title: "Data Analytics",
    description: "Powerful data analysis and visualization",
    benefits: ["Real-time Analytics", "Predictive Modeling", "Business Intelligence"]
  },
  {
    icon: "CheckCircle",
    title: "Automation",
    description: "Streamline your business processes",
    benefits: ["Workflow Automation", "Process Optimization", "Efficiency Gains"]
  }
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase productivity with AI automation",
  "Scale your business with cloud solutions",
  "Make data-driven decisions with analytics",
  "Enhance security with advanced monitoring",
  "Improve customer experience with AI"
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading provider of AI-powered solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful features that make Zion Tech Group the perfect solution for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Zion Tech Group to transform their operations.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
