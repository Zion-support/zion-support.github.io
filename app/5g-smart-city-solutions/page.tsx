'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Smart Traffic Management',
    description: 'Real-time traffic monitoring and optimization using 5G connectivity and AI algorithms.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'IoT Integration',
    description: 'Seamless integration of IoT devices for comprehensive city monitoring and management.',
    icon: <Wifi className="w-8 h-8" />,
  },
  {
    title: 'Public Safety',
    description: 'Advanced surveillance and emergency response systems powered by 5G technology.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'Citizen Services',
    description: 'Mobile-first citizen services and digital government solutions.',
    icon: <Smartphone className="w-8 h-8" />,
  },
];

export default function SmartCitySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEOOptimizer
        title="5G Smart City Solutions - ZionTechGroup"
        description="Transform your city with cutting-edge 5G smart city solutions. IoT integration, traffic management, and citizen services."
        keywords="5G smart city, IoT solutions, smart traffic, public safety, citizen services"
      />
      <Navigation />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            5G Smart City Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your city with cutting-edge 5G technology and smart infrastructure solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}