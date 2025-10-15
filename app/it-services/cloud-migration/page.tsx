'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  CogIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const CloudMigrationPage: React.FC = () => {
  const features = [
    "Zero-downtime migration",
    "Automated migration tools",
    "Data integrity verification",
    "Performance optimization",
    "Security compliance",
    "Cost optimization",
    "Disaster recovery setup",
    "24/7 monitoring",
    "Rollback capabilities",
    "Post-migration support"
  ];

  const benefits = [
    "Reduce infrastructure costs by 40%",
    "Improve scalability and flexibility",
    "Enhanced security and compliance",
    "Better disaster recovery",
    "Reduced maintenance overhead",
    "Improved performance"
  ];

  const migrationSteps = [
    {
      step: "Assessment",
      title: "Infrastructure Analysis",
      description: "Comprehensive analysis of your current infrastructure, applications, and data to create a migration strategy."
    },
    {
      step: "Planning",
      title: "Migration Strategy",
      description: "Detailed migration plan with timelines, resource allocation, and risk mitigation strategies."
    },
    {
      step: "Migration",
      title: "Seamless Transfer",
      description: "Execute the migration with minimal downtime using automated tools and expert oversight."
    },
    {
      step: "Optimization",
      title: "Post-Migration Tuning",
      description: "Optimize performance, security, and costs after successful migration completion."
    }
  ];

  const pricing = [
    {
      plan: "Small Business",
      price: "Starting at $5,000",
      features: ["Up to 10 servers", "Basic migration", "Email support"],
      popular: false
    },
    {
      plan: "Enterprise",
      price: "Starting at $25,000",
      features: ["Unlimited servers", "Advanced migration", "Dedicated support", "Custom solutions"],
      popular: true
    },
    {
      plan: "Custom",
      price: "Contact Us",
      features: ["Tailored solutions", "Complex migrations", "White-glove service", "Ongoing support"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services for seamless transition to AWS, Azure, or GCP with zero downtime and enhanced security." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, cloud services, infrastructure migration" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
              We ensure zero downtime, enhanced security, and optimized performance for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Migration Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Migration Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Cloud Migration Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <StarIcon className="w-6 h-6 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Migration Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white border-2 rounded-lg p-8 ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you migrate to the cloud with confidence and zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Free Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationPage;