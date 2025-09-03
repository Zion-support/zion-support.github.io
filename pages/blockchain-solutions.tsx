import React from 'react';

import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import {
  Shield,
  Zap,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle } from 'lucide-react';

export default function BlockchainSolutions() {
  const features = [
  {
      icon: Shield,
      title: 'Smart Contracts',
      description:
        'Automated, secure, and transparent contract execution without intermediaries' }, {
      icon: Lock,
      title: 'Cryptocurrency Development',
      description:
        'Custom digital currencies and tokenization solutions for your business' }, {
      icon: Globe,
      title: 'DeFi Platforms',
      description:
        'Decentralized finance applications for lending, trading, and yield farming' }, {
      icon: Zap,
      title: 'NFT Marketplaces',
      description:
        'Non-fungible token platforms for digital assets and collectibles' } ];

  const benefits = [

  ];

  const useCases = [
  {
      title: 'Supply Chain Management',
      description:
        'Track products from origin to consumer with complete transparency' }, {
      title: 'Financial Services',
      description: 'Secure payments, lending, and investment platforms' }, {
      title: 'Healthcare',
      description: 'Secure patient data management and medical record sharing' }, {
      title: 'Real Estate',
      description: 'Property tokenization and automated property transactions' } ];

  return (
    <>
      <Head>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge blockchain solutions. Smart contracts, DeFi platforms, cryptocurrency development, and NFT marketplaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https: //ziontechgroup.com/blockchain-solutions"
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Blockchain Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage the power of blockchain technology to create secure,
                transparent, and decentralized solutions for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive blockchain development and consulting services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Blockchain?
              </h2>
              <p className="text-lg text-gray-600">
                Transform your business with blockchain technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-lg text-gray-600">
                Blockchain solutions across various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Implement Blockchain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how blockchain technology can transform your
              business operations.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )}
