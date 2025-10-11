'use client';
<<<<<<< HEAD
import {Helmet} from 'react-helmet-async';
import { Wifi, BarChart, Brain, Target, Zap, Shield, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FiveGImplementationPage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Ultra-Fast Connectivity',
      description: 'Experience lightning-fast 5G speeds with ultra-low latency for seamless connectivity.',
      benefits: ['10x Faster Speeds', 'Ultra-Low Latency', 'Massive Device Capacity', 'Enhanced Reliability']
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Real-time data analytics and insights powered by 5G infrastructure.',
      benefits: ['Real-Time Processing', 'Predictive Analytics', 'Smart Insights', 'Data Optimization']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Seamless integration with AI technologies for intelligent automation.',
      benefits: ['Machine Learning', 'Smart Automation', 'Predictive Maintenance', 'Intelligent Routing']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Targeting',
      description: 'Targeted solutions for specific industry needs and use cases.',
      benefits: ['Industry Focus', 'Custom Solutions', 'Scalable Architecture', 'Future-Proof Design']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Performance',
      description: 'Optimized performance for mission-critical applications.',
      benefits: ['High Performance', 'Low Latency', 'Reliable Connectivity', 'Scalable Solutions']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and compliance for 5G networks.',
      benefits: ['Advanced Security', 'Compliance Ready', 'Data Protection', 'Network Security']
    }
<<<<<<< HEAD
  ];

<<<<<<< HEAD
const FiveGImplementationPage: React.FC = () => {
=======
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-6202
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {

>>>>>>> cursor/fix-errors-and-merge-to-main-710b
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services and solutions." />
        <meta name="keywords" content="5g implementation, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Professional 5G implementation services to help your business succeed and grow.
=======
              Professional 5G implementation services delivered by experienced professionals.
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our 5G implementation services.
=======
              <p className="text-gray-300 mb-4">
                Professional 5G implementation services delivered by experienced professionals.
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
