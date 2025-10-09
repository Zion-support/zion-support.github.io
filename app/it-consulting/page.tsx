'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      icon: Brain,
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Optimization', 'Change Management'],
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],
      benefits: ['Scalability', 'Cost Savings', 'Enhanced Security', 'Improved Performance'],
      price: 'Starting at $3,500/month'
    }
  ];
  return (
    <>
      <Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." />
        <meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                IT Consulting Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Star className="w-5 h-5 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITConsultingPage;