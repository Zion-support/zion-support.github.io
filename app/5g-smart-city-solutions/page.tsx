<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
import React from 'react';
import { Metadata } from 'next';

<<<<<<< HEAD
export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Comprehensive page solutions for modern businesses.',
  keywords: 'page, AI solutions, technology services',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Comprehensive page solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/5g-smart-city-solutions',
  },
};

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive page solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
