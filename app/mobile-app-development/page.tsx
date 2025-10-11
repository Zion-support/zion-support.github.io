<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React from 'react'
import { CheckCircle } from 'lucide-react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
=======
'use client';
import React from 'react';

=======
'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
const MobileAppDevelopmentPage: React.FC = () => {
    {
      title: 'Cross-Platform Development',
      description: 'Build mobile apps that work seamlessly across iOS and Android.',
=======
const MobileAppDevelopmentPage: React.FC = () => {
  const mobileFeatures = [
    {
      title: 'Cross-Platform Development',
      description: 'Build apps that work seamlessly across iOS and Android platforms.',
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
      benefits: ['React Native', 'Flutter', 'Xamarin', 'Progressive Web Apps']
    },
    {
      title: 'Native Performance',
<<<<<<< HEAD
      description: 'Optimize apps for maximum performance and user experience.',
      benefits: ['Native modules', 'Performance optimization', 'Memory management', 'Battery efficiency']
    },
    {
      title: 'User Experience Design',
      description: 'Create intuitive and engaging user interfaces.',
      benefits: ['UI/UX design', 'User testing', 'Accessibility', 'Responsive design']
    }
  ]
  return (
<<<<<<< HEAD
    <>

  return (
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
=======
      description: 'Deliver native-like performance and user experience.',
      benefits: ['Optimized rendering', 'Smooth animations', 'Fast loading', 'Responsive design']
    },
    {
      title: 'App Store Optimization',
      description: 'Optimize your app for better visibility and downloads.',
      benefits: ['ASO strategies', 'Keyword optimization', 'App store listings', 'User acquisition']
    }
  ];

  return (
>>>>>>> cursor/fix-errors-and-merge-to-main-710b
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Mobile App Development - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services and solutions." />
        <meta name="keywords" content="mobile app development, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional mobile app development services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our mobile app development services.
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
  )
}
export default MobileAppDevelopmentPage