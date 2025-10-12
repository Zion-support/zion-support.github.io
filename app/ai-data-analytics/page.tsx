<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Target } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-c17c

export default function AiDataAnalyticsPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge artificial intelligence solutions tailored to your specific needs.',
      benefits: ['High accuracy', 'Real-time processing', 'Scalable solutions', 'Custom integration']
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: 'Intelligent Automation',
      description: 'Automate complex processes with intelligent decision-making capabilities.',
      benefits: ['Reduced manual work', 'Improved efficiency', 'Error reduction', 'Cost savings']
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business requirements.',
      benefits: ['Personalized approach', 'Industry expertise', 'Flexible implementation', 'Ongoing support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AiDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
      <Helmet>
<<<<<<< HEAD
        <title>Ai-data-analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai-data-analytics services by Zion Tech Group. Transform your business with our expert solutions." />
=======
        <title>Ai Data Analytics - Zion Tech Group | AI Solutions</title>
        <meta name="description" content="Professional ai data analytics services and solutions powered by advanced AI technology." />
        <meta name="keywords" content="AI solutions, technology, automation, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c17c
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ai Data Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ai data analytics services and solutions powered by advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">{feature.title}</h3>
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
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI solutions transform your business operations and drive growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default PagePage;
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai-data-analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai-data-analytics services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c17c
