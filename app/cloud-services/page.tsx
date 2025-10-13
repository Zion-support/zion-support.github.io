<<<<<<< HEAD
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Performance Optimization']
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Build and manage scalable cloud infrastructure tailored to your business needs.',
      features: ['Auto-scaling', 'Load Balancing', 'Container Orchestration', 'Monitoring & Alerting']
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions with high availability and automated backups.',
      features: ['SQL/NoSQL Databases', 'Data Warehousing', 'Backup & Recovery', 'Performance Tuning']
    },
    {
      icon: Lock,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity & Access Management', 'Encryption', 'Compliance', 'Security Monitoring']
    }
  ];

  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment and time-to-market',
    'Disaster recovery and business continuity'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-0ca7

export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Services</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cloud services services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud migration, infrastructure, and security solutions for your business." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, GCP, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cloud Services
            </span>
            <br />
            <span className="text-white">That Scale</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. From migration to management, 
            we provide the expertise and support you need to succeed in the cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with cloud experts who understand your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you design and implement the perfect cloud solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Your Cloud Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-0ca7
