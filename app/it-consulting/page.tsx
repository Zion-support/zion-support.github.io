'use client';
import React from 'react';
import { Lightbulb, Target, Users, BarChart, ArrowRight, CheckCircle, Star, Shield, Clock, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development aligned with your business goals and objectives.',
      benefits: ['Technology roadmap', 'Budget planning', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives for improved efficiency and competitiveness.',
      benefits: ['Process optimization', 'Technology adoption', 'Change management']
    },
    {
      icon: Users,
      title: 'Team Training & Development',
      description: 'Comprehensive training programs to upskill your IT team and maximize technology investments.',
      benefits: ['Technical training', 'Certification programs', 'Best practices']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Analyze and optimize your IT infrastructure for maximum performance and cost efficiency.',
      benefits: ['Performance analysis', 'Cost optimization', 'Scalability planning']
    }
  ];

  const consultingAreas = [
    {
      title: 'Cloud Strategy',
      description: 'Cloud migration planning and multi-cloud architecture design.',
      icon: Shield
    },
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audits and compliance consulting.',
      icon: Shield
    },
    {
      title: 'Data Analytics',
      description: 'Data strategy development and analytics implementation.',
      icon: BarChart
    },
    {
      title: 'IT Governance',
      description: 'IT governance framework development and implementation.',
      icon: Users
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50%', label: 'Average Cost Savings' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              IT Consulting Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Strategic IT consulting to transform your technology landscape. Our expert consultants help you 
              make informed decisions, optimize costs, and align technology with business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Strategic IT Consulting</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our IT consulting services help you navigate complex technology decisions and implement 
              solutions that drive business growth and operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Consulting Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized consulting services across key technology areas to address your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingAreas.map((area, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your IT Strategy</h2>
          <p className="text-xl mb-8 text-purple-100">
            Partner with our expert consultants to develop and implement technology strategies that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITConsultingPage;