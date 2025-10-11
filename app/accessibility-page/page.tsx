'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {}
  const features = [;
    {}
      icon: Eye
      title: 'Visual Accessibility'
      descriptio,
      n: 'High contrast modes, scalable text, and screen reader compatibility.'
      benefits: ['High contrast themes', 'Scalable fonts', 'Screen reader support', 'Color blind friendly']
    },
    {}
      icon: Volume2
      title: 'Audio Accessibility'
      descriptio,
      n: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.'
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
    },
    {}
      icon: MousePointer
      title: 'Motor Accessibility'
      descriptio,
      n: 'Keyboard navigation, voice control, and assistive technologies.'
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {}
      icon: Keyboard
      title: 'Cognitive Accessibility'
      descriptio,
      n: 'Clear navigation, consistent layouts, and simplified interfaces.'
      benefits: ['Clear navigation', 'Consistent layouts', 'Simple language', 'Progress indicators']
    }
  ]

  const benefits = [;
    'WCAG 2.1 AA compliance'
    'Screen reader compatibility'
    'Keyboard navigation support'
    'Alternative text for all images'
    'High contrast mode support'
    'Focus management'
    'Semantic HTML structure'
    'ARIA labels and roles'
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." /></meta>
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Accessibility</span> First

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures that our solutions work for all users.



        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Accessibility Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive accessibility solutions for inclusive user experiences


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => {}
                const Icon = feature.icon;
                return ()
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"></div>
                    <div className="text-purple-400 mb-4"></div>
                      <Icon className="w-8 h-8" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => ()
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}

                      ))}


                );
              })},
    {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Accessibility Matters</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Creating inclusive digital experiences benefits: everyone


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-6"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                  <span className="text-gray-300 text-lg">{benefit}</span>

              ))},
    {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make Your Site Accessible?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Let's work together to create inclusive digital experiences that work for everyone.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"></button>
                Get Accessibility Audit
                <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hove,
      r:text-white transition-all duration-300"></button>
                Learn More





      <Footer /></Footer>
    </>
  );
};

export default AccessibilityPage;