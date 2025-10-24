'use client';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, 
  Star, Users, Shield, Zap, Globe, Clock, Award, Sparkles
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics',
      icon: Brain,
      benefits: ['Machine Learning Implementation',
        "Natural Language Processing",
        "Predictive Analytics",
        "Automated Decision Making"
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses',
      icon: BarChart,
      benefits: ['Cloud Infrastructure Setup',
        "Cybersecurity Solutions",
        "Digital Transformation",
        "24/7 Technical Support"
      ]
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises',
      icon: Target,
      benefits: ['Rapid Deployment',
        "Scalable Architecture",
        "Custom Development",
        "Ongoing Maintenance"
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance',
      icon: TrendingUp,
      benefits: ['Data Visualization',
        "Performance Analytics",
        "Custom Dashboards",
        "Real-time Reporting"
      ]
    }
  ];

  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      <Navigation />
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
        <div className='relative max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600'>Zion Tech Group</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Transform your business with cutting-edge AI and IT solutions. We deliver innovative technology that drives growth, efficiency, and competitive advantage.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link 
              href='/contact' 
              className='bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center'
            >
              Get Started
              <ArrowRight className='w-5 h-5 ml-2' />
            </Link>
            <Link 
              href='/services' 
              className='border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center'
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Solutions</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
                <div className='flex items-center mb-4'>
                  <feature.icon className='w-8 h-8 text-emerald-600 mr-3' />
                  <h3 className='text-xl font-bold text-gray-900'>{feature.title}</h3>
                </div>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <ul className='space-y-2'>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className='flex items-center text-sm text-gray-600'>
                      <CheckCircle className='w-4 h-4 text-emerald-600 mr-2' />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 px-4 bg-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Why Choose Us?</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We deliver measurable results that transform your business operations and drive sustainable growth.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <div key={index} className='bg-white rounded-lg shadow-lg p-6 text-center'>
                <div className='flex justify-center mb-4'>
                  <CheckCircle className='w-8 h-8 text-emerald-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>Ready to Transform Your Business?</h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's discuss how our AI and IT solutions can help your business achieve its goals.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link 
              href='/contact' 
              className='bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center'
            >
              Start Your Project
              <ArrowRight className='w-5 h-5 ml-2' />
            </Link>
            <Link 
              href='/services' 
              className='border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}