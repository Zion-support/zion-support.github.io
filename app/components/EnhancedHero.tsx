'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';

const EnhancedHero: React.FC = () => {
=======
import { ArrowRight, Brain , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';
import { Phone, Mail } from 'lucide-react',;
    'use client'
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
<<<<<<< HEAD
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Enhanced Hero - Zion Tech Group</title>
        <meta name="description" content="Advanced Enhanced Hero solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, enhanced hero, AI solutions, intelligent automation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enhanced Hero
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced Enhanced Hero solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of our Enhanced Hero solution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Enhanced Hero to transform their operations.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnhancedHero;
=======
    'Gain competitive advantage with advanced technology',
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;>,
            </div></div>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
