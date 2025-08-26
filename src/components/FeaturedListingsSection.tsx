import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    title: 'AI-Powered Business Intelligence',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    category: 'AI Solutions',
    rating: 4.9,
    reviews: 127,
    price: 'From $2,500',
    image: '🤖',
    link: '/services/ai',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
  },
  {
    title: 'Cloud Migration & Optimization',
    description: 'Seamlessly migrate to the cloud with our proven methodology and expert guidance.',
    category: 'Cloud & DevOps',
    rating: 4.8,
    reviews: 89,
    price: 'From $5,000',
    image: '☁️',
    link: '/services/cloud',
    features: ['Zero-downtime Migration', 'Cost Optimization', 'Security Compliance']
  },
  {
    title: 'Cybersecurity Assessment & Implementation',
    description: 'Comprehensive security evaluation and implementation for enterprise-level protection.',
    category: 'Cybersecurity',
    rating: 4.9,
    reviews: 156,
    price: 'From $3,500',
    image: '🔒',
    link: '/services/cybersecurity',
    features: ['Security Audits', 'Threat Detection', 'Incident Response']
  }
];

export function FeaturedListingsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {renderStars(service.rating)}
                    <span className="text-sm text-gray-600 ml-1">({service.reviews})</span>
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to={service.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Link
                  to={service.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block group-hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}