<<<<<<< HEAD
'use client';;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const FuturisticServiceCardPage: React.FC = () => {
  const features = [
    {
      icon: Brain
      ,
      title: 'AI-Powered Solutions'
      ,
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    }
    ,
    { icon: Zap
      ,
      title: 'High Performance'
      ,
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    }
    ,
    { icon: Shield
      ,
      title: 'Enterprise Security'
      ,
      description: 'Bank-level security with encryption and compliance standards'
    }
    ,
    { icon: Globe
      ,
      title: 'Global Reach'
      ,
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
'use client';;
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';
=======
'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

interface FuturisticServiceCardProps {
  title: string;
  ,
      description: string;
  features: string[];
<<<<<<< HEAD
  price: string;
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  onSelect: () => void;
'use client';;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const benefits = [
    'Advanced AI technology integration'
    'Real-time processing and analytics'
    'Enterprise-grade security and compliance'
    'Scalable and flexible solutions'
    '24/7 technical support'
    'Easy integration with existing systems'
    'Cost-effective pricing plans'
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
        <title>FuturisticServiceCard | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
    'Proven track record of success'
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        </Helmet><title>FuturisticServiceCard | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
        </div>
      </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
              <span>FuturisticServiceCard;</span>
              </span>
              <br>
              <span className="text-white">Solutions</span>
            </h1>
            <p>Transform your business with our advanced futuristicservicecard solutions.;</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>Get Started;</button>
                <ArrowRight>
              </button>
              <button>Learn More;</button>
              </button>
            </div>
          </div>
        </div>
  )
=======
  price?: string;
  priceDescription?: string;
  icon?: React.ReactNode;
  gradient?: string;
  onClick?: () => void;
  isPopular?: boolean;
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title
  description
  features
  price
  priceDescription
  icon
  gradient = 'from-purple-500 to-blue-600'
  onClick
  isPopular = false
}) => {
  return (
    <div className={`relative group ${isPopular ? 'scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          ,
    { icon && (
            <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {icon}
            </div>
          )}
          
          ,
    { /* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Price */}
          ,
    { price && (
            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-1">
                {price}
              </div>
              {priceDescription && (
                <div className="text-gray-400 text-sm">
                  {priceDescription}
                </div>
              )}
            </div>
          )}
          
          ,
    { /* Button */}
          <button
            onClick={onClick}
            className={`w-full bg-gradient-to-r ${gradient} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group`}
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuturisticServiceCard;