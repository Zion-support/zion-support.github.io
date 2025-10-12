'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, Zap, Shield, Globe, CheckCircle } from 'lucide-react';

import { Brain } from 'lucide-react';

  const features = [
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced AI technology to optimize your website for search engines',
    },
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Lightning-fast SEO analysis and optimization with instant recommendations',
    },
      icon: Shield,
      title: 'White-Hat Techniques',
      description: 'Ethical SEO practices with long-term sustainable results and compliance',
    },
      icon: Globe,

      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'

  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success',
  ];

  return (
        <title>SEO Enhancer | Zion Tech Group</title>

      {/* Hero Section */}
                SEO
              <span className="text-white">Enhancer</span>
              Transform your website's search engine visibility with our advanced SEO enhancement solutions.
              Powered by cutting-edge AI technology and industry expertise.
                Get Started
                Learn More

      {/* Features Section */}
              Our Features
              Discover the powerful features that make our SEO enhancer solutions stand out.

 (
                  {feature.title}
                  {feature.description}
            ))}

      {/* Benefits Section */}
              Why Choose Our Solutions?
              Experience the benefits of working with our cutting-edge SEO enhancer solutions.

 (
                  {benefit}
            ))}

      {/* Contact Section */}
              Ready to Get Started?
              Contact us today to learn more about our SEO enhancement solutions and how they can benefit your business.
                Contact Us
                Schedule Demo
  );
};

export default SEOEnhancer;