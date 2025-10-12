
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';

interface GenericServicePageProps {
  title: string;,
  description: string;,
  icon: React.ComponentType<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;

const GenericServicePage: React.FC<GenericServicePageProps /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  const categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';
  return (

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>{title} | Zion Tech Group</title>

          {/* Hero Section */}
    
              <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">{title}
                {description}

              {pricing && (
    
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400font-semiboldmb-8">Starting at {pricing}

              )}

                  Get Started Today

                  Call (302) 464-0950

          {/* Features Section */}
    
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Key Features
                Comprehensive {title.toLowerCase()} solutions designed to drive your business forward

 (
    
                    <h3 className="text-lgfont-semiboldtext-white">{feature}</h3>

              ))}

          {/* Benefits Section */}
    
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Why Choose Our {title}?
                Experience the difference with our proven expertise and cutting-edge technology

 (
    
                    <h3 className="text-lg font-semiboldtext-whitemb-2">{benefit}</h3>
                      Leverage our expertise to maximize your business potential with {title.toLowerCase()}

              ))}

          {/* Stats Section */}
    
                  <div className="text-3 xl font-boldtext-cyan-400mb-2">500+</div>
                  <div className="text-gray-300text-sm">Happy Clients</div>
                  <div className="text-3 xl font-boldtext-purple-400mb-2">99%</div>
                  <div className="text-gray-300text-sm">Success Rate</div>
                  <div className="text-3 xl font-boldtext-pink-400mb-2">24/7</div>
                  <div className="text-gray-300text-sm">Support</div>
                  <div className="text-3 xl font-boldtext-green-400mb-2">10+</div>
                  <div className="text-gray-300text-sm">Years Experience</div>

          {/* CTA Section */}
    
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-6">Ready to Get Started?
                Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 

                Get a free consultation today.

                  Get Free Consultation

                  Email Us

  );
};

export default GenericServicePage;
