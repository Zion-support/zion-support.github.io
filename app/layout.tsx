'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const LayoutPage: React.FC = () => {
  const features = [
  },
    {
    icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
  },
    {
    icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
  },
    {
    icon: Globe,
      description: 'Worldwide deployment and support for international businesses'
    }
  ]

    '24/7 technical support',

    'Easy integration with existing systems',

    'Cost-effective pricing plans',

        <meta name="description" content="AI-powered solution" />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
                  <feature />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle>
            <h2>
              Ready to Get Started?
            </h2>
            <p>
  ),