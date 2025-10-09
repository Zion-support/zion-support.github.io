'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Target, Zap, Shield, BarChart, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development aligned with business objectives',
      icon: Target,
      features: ['Technology Assessment', 'Roadmap Development', 'Budget Planning', 'Vendor Evaluation'],
      benefits: ['Align IT with Business Goals', 'Optimize Technology Investments', 'Reduce IT Costs by 30%', 'Improve ROI'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: ['Process Analysis', 'Technology Selection', 'Change Management', 'Implementation Support'],
      benefits: ['Accelerate Digital Adoption', 'Improve Operational Efficiency', 'Enhance Customer Experience', 'Future-proof Business'],
      price: 'Starting at $3,500/month'
    },
    {
      title: 'Cloud Strategy & Migration',
      description: 'Strategic cloud planning and seamless migration services',
      icon: BarChart,
      features: ['Cloud Assessment', 'Migration Planning', 'Cost Optimization', 'Security Implementation'],
      benefits: ['Reduce Infrastructure Costs by 40%', 'Improve Scalability', 'Enhance Security', 'Increase Agility'],
      price: 'Starting at $2,800/month'
    },
    {
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessment and strategy development',
      icon: Shield,
      features: ['Security Audit', 'Risk Assessment', 'Compliance Review', 'Security Training'],
      benefits: ['Protect Business Assets', 'Meet Compliance Requirements', 'Reduce Security Risks', 'Build Security Culture'],
      price: 'Starting at $2,200/month'
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
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
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
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our experts for a free consultation and discover how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Us
                </button>
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITConsultingPage;