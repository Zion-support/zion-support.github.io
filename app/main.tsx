
import React from 'react';

import { ArrowRight } from 'lucide-react';
'use client'

  const features = [
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (

        <title>5G Data Analytics - Zion Tech Group</title>

        <title>Main | Zion Tech Group</title>

      {/* Hero Section */}
    
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent">Main

              <span className="text-white">Solutions</span>
              Transform your business with our advanced main solutions.
              Powered by cutting-edge AI technology and industry expertise.
    
                Get Started
    
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Learn More

      {/* Features Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Why Choose Our Main?

              Our main solutions deliver unmatched performance, security, and scalability.

 (
    
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>

                <p className="text-gray-300">{feature.description}</p>
            ))}

      {/* Benefits Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Key Benefits

              Experience the power of our main solutions for your business.
    
 (
    
                <p className="text-gray-300text-lg">{benefit}</p>
            ))}

      {/* CTA Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your main needs and get a customized solution.
    
                Call Now
    
                Email Us
    
  )
};
