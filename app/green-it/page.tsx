'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Zap, Recycle, Globe, TrendingDown, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function GreenITPage() {
  const greenSolutions = [
    {
      icon: Leaf,
      title: 'Energy-Efficient Infrastructure',
      description: 'Optimize your IT infrastructure for maximum energy efficiency and minimal environmental impact.',
      features: ['Server virtualization', 'Energy monitoring', 'Cooling optimization', 'Power management']
    },
    {
      icon: Recycle,
      title: 'Sustainable Hardware',
      description: 'Implement eco-friendly hardware solutions and responsible disposal practices.',
      features: ['Green hardware procurement', 'E-waste management', 'Refurbished equipment', 'Recycling programs']
    },
    {
      icon: Globe,
      title: 'Carbon Footprint Reduction',
      description: 'Measure and reduce your organization\'s carbon footprint through smart IT practices.',
      features: ['Carbon tracking', 'Emission reduction', 'Green certifications', 'Sustainability reporting']
    },
    {
      icon: Zap,
      title: 'Renewable Energy Integration',
      description: 'Power your IT operations with renewable energy sources and smart grid integration.',
      features: ['Solar integration', 'Wind power', 'Smart grids', 'Energy storage']
    }
  ];

  const benefits = [
    'Reduce energy consumption by up to 40%',
    'Lower operational costs significantly',
    'Meet sustainability goals and regulations',
    'Improve brand reputation and ESG scores',
    'Future-proof your IT infrastructure',
    'Access green technology incentives'
  ];

  return (
    <>
      <Helmet>
        <title>Green IT Solutions - Zion Tech Group | Sustainable Technology</title>
        <meta name="description" content="Transform your IT infrastructure with sustainable, energy-efficient solutions. Reduce carbon footprint and operational costs with our Green IT services." />
        <meta name="keywords" content="green IT, sustainable technology, energy efficiency, carbon footprint, eco-friendly IT, environmental IT" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Green IT
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT infrastructure with sustainable, energy-efficient solutions that reduce environmental impact while improving performance and reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center">
                Get Green IT Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Green IT Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive sustainable technology solutions for modern businesses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {greenSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Green IT?</h2>
              <p className="text-xl text-gray-300">Transform your business with sustainable technology solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Go Green?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Start your journey towards sustainable IT infrastructure today. Get a free Green IT assessment and discover how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}