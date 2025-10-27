'use client'
import React from 'react';
import { ArrowRight, Brain, Cpu, Zap } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MachineLearningPage() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models for accurate predictions and insights.'
    },
    {
      icon: <Cpu className="h-8 w-8 text-green-600" />,
      title: 'Deep Learning',
      description: 'Neural networks and deep learning algorithms for complex problem solving.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Real-time Processing',
      description: 'High-speed ML processing for immediate decision making.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional machine learning services and solutions for modern businesses.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
