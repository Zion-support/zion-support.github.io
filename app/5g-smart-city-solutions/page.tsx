import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Building, Brain, Users, CheckCircle } from 'lucide-react';

export default function FiveGSmartCitySolutions() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Fast Connectivity',
      description: '5G networks providing 10x faster speeds and ultra-low latency for smart city applications'
    },
    {
      icon: <Building className="w-6 h-6 text-purple-400" />,
      title: 'Smart Infrastructure',
      description: 'Intelligent traffic management, energy optimization, and environmental monitoring systems'
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms analyze city data to optimize services and improve quality of life'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Citizen Engagement',
      description: 'Digital platforms connecting citizens with city services and enabling participatory governance'
    }
  ];

  const smartCityModules = [
    {
      category: 'Transportation',
      items: ['Smart Traffic Lights', 'Autonomous Vehicle Support', 'Public Transit Optimization', 'Parking Management', 'Traffic Analytics', 'Emergency Response']
    },
    {
      category: 'Energy & Environment',
      items: ['Smart Grid Management', 'Air Quality Monitoring', 'Waste Management', 'Water Systems', 'Renewable Energy', 'Carbon Footprint Tracking']
    },
    {
      category: 'Public Safety',
      items: ['Video Surveillance', 'Emergency Alerts', 'Crime Prevention', 'Disaster Response', 'Crowd Management', 'Health Monitoring']
    },
    {
      category: 'Digital Services',
      items: ['Citizen Portal', 'Mobile Apps', 'Digital Payments', 'Service Requests', 'Open Data Platform', 'E-Government']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your city with 5G-powered smart city solutions for transportation, energy, safety, and citizen engagement." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">5G Smart City Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your city with cutting-edge 5G technology, AI-powered analytics, and intelligent infrastructure management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Smart City Modules */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Smart City Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartCityModules.map((module, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{module.category}</h3>
                  <ul className="space-y-2">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Smart City?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create a connected, intelligent, and sustainable urban environment.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Start Your Smart City Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}