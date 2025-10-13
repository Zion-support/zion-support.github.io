'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon,
  ShieldCheckIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function CloudMigrationSpecialistPage() {
  const features = [
    "Comprehensive cloud assessment and planning",
    "Multi-cloud migration strategies",
    "Zero-downtime migration execution",
    "Cost optimization and monitoring",
    "Security and compliance implementation",
    "Performance optimization",
    "Disaster recovery planning",
    "24/7 migration support",
    "Post-migration optimization",
    "Training and documentation",
    "Custom integration solutions",
    "Ongoing cloud management"
  ];

  const benefits = [
    "50% reduction in infrastructure costs",
    "99.9% uptime guarantee",
    "40% improvement in performance",
    "Enhanced security and compliance",
    "Scalable and flexible infrastructure",
    "Reduced operational overhead"
  ];

  const useCases = [
    "Legacy system modernization",
    "Multi-cloud strategy implementation",
    "Disaster recovery setup",
    "Cost optimization initiatives",
    "Security compliance projects",
    "Performance improvement programs"
  ];

  const cloudProviders = [
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
    { name: "Azure", icon: "🔷", color: "from-blue-500 to-indigo-500" },
    { name: "Google Cloud", icon: "🌐", color: "from-green-500 to-emerald-500" },
    { name: "IBM Cloud", icon: "🔵", color: "from-blue-600 to-blue-700" },
    { name: "Oracle Cloud", icon: "🔴", color: "from-red-500 to-pink-500" },
    { name: "Alibaba Cloud", icon: "🟡", color: "from-yellow-500 to-orange-500" }
  ];

  const pricing = {
    assessment: {
      price: "$2,500",
      period: "one-time",
      features: [
        "Comprehensive cloud assessment",
        "Migration strategy planning",
        "Cost analysis and optimization",
        "Security evaluation",
        "Performance baseline",
        "Migration roadmap"
      ]
    },
    migration: {
      price: "$15,000",
      period: "project",
      features: [
        "Complete migration execution",
        "Zero-downtime migration",
        "Data migration and validation",
        "Application modernization",
        "Security implementation",
        "Testing and validation",
        "Go-live support",
        "30 days post-migration support"
      ]
    },
    managed: {
      price: "$3,500",
      period: "month",
      features: [
        "Ongoing cloud management",
        "24/7 monitoring and support",
        "Performance optimization",
        "Cost monitoring and optimization",
        "Security updates and patches",
        "Backup and disaster recovery",
        "Monthly reporting",
        "Dedicated account manager"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Cloud Migration Specialist - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services that reduce costs by 50% and improve performance by 40%. Zero-downtime migration with 99.9% uptime guarantee." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, cloud consulting, infrastructure modernization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CloudIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Specialist
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert cloud migration services for modern businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Our certified cloud migration specialists help businesses transition to the cloud with 
              zero downtime, reducing costs by 50% and improving performance by 40% while ensuring 99.9% uptime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Free Assessment
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View Case Studies
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration services deliver measurable improvements to your infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">50%</h3>
              <p className="text-xl text-gray-300">Reduction in Costs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">40%</h3>
              <p className="text-xl text-gray-300">Improvement in Performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">99.9%</h3>
              <p className="text-xl text-gray-300">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified experts in all major cloud platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${provider.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{provider.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{provider.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud migration services from assessment to ongoing management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service level that fits your migration needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div 
                key={plan}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan === 'migration' ? 'border-blue-500 relative' : 'border-slate-600'
                }`}
              >
                {plan === 'migration' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-400">{details.price}</span>
                  <span className="text-gray-400">/{details.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan === 'migration'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ideal for businesses looking to modernize their infrastructure and reduce costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join hundreds of businesses already using our cloud migration services to modernize their infrastructure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}