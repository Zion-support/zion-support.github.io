import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security measures throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Performance Optimization',
      description: 'Optimize your applications for cloud-native performance and scalability'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-400" />,
      title: 'Compliance Ready',
      description: 'Ensure compliance with industry standards and regulations'
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and migration requirements"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom migration strategy tailored to your business needs and goals"
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Seamless migration with minimal downtime and maximum security"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Post-migration optimization and ongoing support for your cloud infrastructure"
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$4,999',
      period: '/project',
      description: 'Perfect for small businesses migrating to cloud',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security measures',
        'Email support'
      ]
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/project',
      description: 'Comprehensive migration for large organizations',
      features: [
        'Up to 100 servers',
        'Advanced migration strategy',
        'Enhanced security & compliance',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Custom',
      price: 'Quote',
      period: '',
      description: 'Tailored solutions for complex requirements',
      features: [
        'Unlimited servers',
        'Custom migration approach',
        'Full compliance suite',
        'Dedicated team',
        'White-label options'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamless, secure migration to AWS, Azure, and Google Cloud with zero downtime." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Cloud Migration Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
                Zero downtime, maximum security, and optimized performance.
              </p>
              <FuturisticButton href="#features" className="bg-blue-600 hover:bg-blue-700">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Migration Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional cloud migration with enterprise-grade security and performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Migration Process Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 4-step process for successful cloud migration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for cloud migration projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'border border-gray-600 hover:bg-gray-800'}`}
                    >
                      Get Started
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Migrate to the Cloud?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our experts handle your cloud migration with zero downtime and maximum security.
                </p>
                <FuturisticButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Migration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationProPage;
