'use client';
import React from 'react';

<<<<<<< HEAD
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe } from 'lucide-react';
=======
export const dynamic = 'force-dynamic';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Volume2, Keyboard, Mouse, CheckCircle, Shield, Brain, BarChart, Target, Globe, Code } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe

const AccessibilityPage: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive support for users with visual impairments through screen readers, high contrast modes, and scalable text.',
      benefits: ['Screen reader compatibility', 'High contrast themes', 'Scalable fonts', 'Color-blind friendly palettes']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
    },
    {
      icon: Keyboard,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments through alternative input methods.',
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']
    },
    {
      icon: Mouse,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation and simplified interfaces to support users with cognitive differences.',
      benefits: ['Clear language', 'Consistent navigation', 'Progress indicators', 'Error prevention']
    },
    {
      icon: Globe,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']
    },
    {
      icon: Shield,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products to identify accessibility barriers and compliance gaps.',
      features: ['WCAG compliance testing', 'User testing with disabled users', 'Detailed remediation reports', 'Priority recommendations']
    },
    {
      icon: Code,
      title: 'Implementation Support',
      description: 'Technical implementation of accessibility features and best practices in your applications.',
      features: ['ARIA implementation', 'Semantic HTML structure', 'Focus management', 'Screen reader optimization']
    },
    {
      icon: BarChart,
      title: 'Training & Education',
      description: 'Comprehensive training programs for your team on accessibility best practices and inclusive design.',
      features: ['Developer workshops', 'Design guidelines', 'Testing methodologies', 'Ongoing support']
    },
    {
      icon: Target,
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring and maintenance of accessibility compliance as your products evolve.',
      features: ['Automated testing', 'Regular audits', 'Performance tracking', 'Compliance reporting']
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Navigation />
      
      <main className="min-h-screenbg-gradient-to-brfrom-green-50to-blue-100">
        {/* Hero Section */}
        <section className="pt-20pb-16px-4">
          <div className="containermx-automax-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xlmd:text-6xlfont-boldtext-gray-900 mb-6">
                Accessibility Solutions
              </h1>
              <p className="text-xltext-gray-600mb-8max-w-3xl mx-auto">
                Making technology accessible to everyone. Our comprehensive accessibility 
                solutions ensure your digital products work for users of all abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600text-whitepx-8py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="borderborder-green-600text-green-600px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
                  View Demo
                </button>
              </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Accessibility
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Learn More
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-16px-4bg-white">
          <div className="containermx-automax-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-boldtext-gray-900mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xltext-gray-600max-w-2xlmx-auto">
                Our solutions cover all aspects of digital accessibility
              </p>
            </div>

            <div className="gridmd:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50p-6rounded-xlhover:shadow-lg transition-shadow">
                  <div className="w-12h-12bg-green-100rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  </div>
                  <h3 className="text-xlfont-semiboldtext-gray-900mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flexitems-centertext-smtext-gray-600">
                        <CheckCircle className="w-4h-4text-green-500mr-2" />
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */}
        <section className="py-16px-4bg-gray-50">
          <div className="containermx-automax-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-boldtext-gray-900mb-4">
                Accessibility Pricing
              </h2>
              <p className="text-xltext-gray-600">
                Choose the plan that fits your accessibility needs
              </p>
            </div>

            <div className="gridmd:grid-cols-3gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-green-500text-whitetext-smfont-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xlfont-boldtext-gray-900mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-boldtext-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flexitems-centertext-gray-600">
                        <CheckCircle className="w-5h-5text-green-500mr-3" />
=======
        {/* Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16px-4bg-green-600">
          <div className="containermx-automax-w-4xltext-center">
            <h2 className="text-4xl font-boldtext-whitemb-6">
              Ready to Make Your Products Accessible?
            </h2>
            <p className="text-xltext-green-100mb-8">
              Join thousands of businesses already providing inclusive digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-whitetext-green-600px-8py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                Contact Sales
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Your Products Accessible?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s work together to create inclusive digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Contact Us
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default AccessibilityPage;