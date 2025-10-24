<<<<<<< HEAD
'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Target, CheckCircle, Home, TrendingUp, Users, Settings } from 'lucide-react';

const Page: React.FC = () => {
  // Set document title for SEO
  React.useEffect(() => {
    document.title = 'Property Management AI - Zion Tech Group';
  }, []);

  const features = [
    {
      icon: 'home',
      title: 'Smart Property Management',
      description: 'AI-powered property management solutions for modern real estate operations.',
      benefits: ['Automated rent collection', 'Maintenance scheduling', 'Tenant screening', 'Property analytics']
    },
    {
      icon: 'trending-up',
      title: 'Predictive Analytics',
      description: 'Advanced analytics to optimize property performance and maximize ROI.',
      benefits: ['Market analysis', 'Rent optimization', 'Occupancy forecasting', 'Investment insights']
    },
    {
      icon: 'users',
      title: 'Tenant Experience',
      description: 'Enhanced tenant experience through AI-driven communication and services.',
      benefits: ['Chatbot support', 'Maintenance requests', 'Payment processing', 'Community features']
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'trending-up':
        return <TrendingUp className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'users':
        return <Users className="w-12 h-12 text-emerald-400 mb-4" />;
      default:
        return <Home className="w-12 h-12 text-emerald-400 mb-4" />;
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Property Management AI
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Revolutionary AI-powered property management solutions for modern real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                {renderIcon(feature.icon)}
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Automation</h3>
                <p className="text-gray-300 text-sm">Automated workflows and processes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
                <p className="text-gray-300 text-sm">Real-time property performance data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3>
                <p className="text-gray-300 text-sm">Smart recommendations and predictions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Maximize property value and returns</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
=======
'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Property Management Ai - Zion Tech Group</title>
        <meta name="description" content="Professional property management ai services and solutions by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Property Management Ai
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional property management ai services and solutions by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our property management ai services are currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
>>>>>>> 6cb44e76a25e5b2f4f623775c504882c3c96c14e
        </div>
        <Footer />
      </div>
<<<<<<< HEAD
      <Footer />
    </>
  );
};

export default Page;
=======
    </div>
  )
}
>>>>>>> 6cb44e76a25e5b2f4f623775c504882c3c96c14e
