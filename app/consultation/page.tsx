import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ConsultationPage() {
  const consultationTypes = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: 'Free Consultation',
      description: '30-minute discovery call to understand your needs',
      duration: '30 minutes',
      price: 'Free'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Strategy Session',
      description: 'Comprehensive analysis and strategic planning',
      duration: '2 hours',
      price: '$500'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Workshop',
      description: 'Interactive workshop for your entire team',
      duration: '4 hours',
      price: '$1,500'
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Customized solutions for your business',
    'Clear roadmap for implementation',
    'Ongoing support and follow-up',
    'Access to our latest tools and technologies'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Schedule a consultation with Zion Tech Group experts to discuss your AI and IT needs." />
        <meta name="keywords" content="consultation, expert advice, AI consulting, IT consulting, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Expert Consultation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Get personalized advice from our experts to transform your business with AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Duration:</span>
                    <span className="text-white font-medium">{type.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price:</span>
                    <span className="text-purple-400 font-bold">{type.price}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experts bring years of experience and industry knowledge to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Schedule your consultation today and take the first step towards transforming your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}