#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class WorkingPagesCreator {
  constructor() {
    this.projectRoot = process.cwd()}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  createWorkingPricingGuide() {
    const filePath = path.join(this.projectRoot, 'pages/pricing-guide.tsx');

    const content = `import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Shield, Globe, TrendingUp, Brain, Cloud, Network, Phone, Mail } from 'lucide-react';
import { Layout } from '../components/Layout';

export default function PricingGuide() {
  const costSavingTips = [
    {
      question: 'Can I change my plan at any time?', 
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    }, {
      question: 'Is there a free trial available?', 
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    }, {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
    }, {
      question: 'Do you offer discounts for annual subscriptions?',
      answer: 'Yes, we offer up to 20% discount for annual subscriptions compared to monthly billing.'
    }
  ];

  const pricingFactors = [
    {
      factor: 'Project Complexity',
      description: 'The complexity of your project directly impacts development time and resources required.',
      details: [
        'Simple websites: 1-2 weeks',
        'E-commerce platforms: 4-8 weeks',
        'Custom applications: 8-16 weeks',
        'Enterprise solutions: 16+ weeks'
      ]
    }, {
      factor: 'Team Size',
      description: 'The number of developers and specialists needed for your project.',
      details: [
        'Solo developer: $75-125/hour',
        'Small team (2-3): $100-150/hour',
        'Medium team (4-6): $125-175/hour',
        'Large team (7+): $150-200/hour'
      ]
    }, {
      factor: 'Technology Stack',
      description: 'The technologies and frameworks used in your project.',
      details: [
        'Standard web technologies: Base rate',
        'Modern frameworks (React, Vue): +15%',
        'Mobile development: +25%',
        'AI/ML integration: +50%'
      ]
    }
  ];

  return (
    <Layout
      title="Pricing Guide - Zion Tech Group"
      description="Understand our pricing structure and get transparent estimates for your technology projects."
    >
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}Pricing Guide
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Understand our pricing structure and get accurate estimates for your technology projects. 
              No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Affects Pricing?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Several factors influence the cost of your project. Here's how we calculate pricing:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {factor.factor}
                    </h3>
                    <p className="text-gray-300">
                      {factor.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {factor.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {costSavingTips.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a personalized quote based on your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Quote
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )}`;

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Created working pricing-guide.tsx');
    return true}

  createWorkingSitemap() {
    const filePath = path.join(this.projectRoot, 'pages/sitemap.tsx');

    const content = `import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sitemap, ExternalLink, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', description: 'Main landing page' }, { name: 'About', url: '/about', description: 'Learn about our company' }, { name: 'Services', url: '/services', description: 'Our technology services' }, { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    }, {
      title: 'Services',
      links: [
        { name: 'AI Development', url: '/ai-services', description: 'Artificial Intelligence solutions' }, { name: 'Web Development', url: '/web-development', description: 'Custom web applications' }, { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud infrastructure and migration' }, { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' }
      ]
    }, {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and updates' }, { name: 'Case Studies', url: '/case-studies', description: 'Success stories and examples' }, { name: 'Documentation', url: '/docs', description: 'Technical documentation' }, { name: 'Support', url: '/support', description: 'Help and support center' }
      ]
    }, {
      title: 'Company',
      links: [
        { name: 'Careers', url: '/careers', description: 'Join our team' }, { name: 'Privacy Policy', url: '/privacy', description: 'Privacy and data protection' }, { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' }, { name: 'Sitemap', url: '/sitemap', description: 'Complete site navigation' }
      ]
    }
  ];

  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete overview of all pages and sections on the Zion Tech Group website."
    >
      <Head>
        <title>Sitemap - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Site
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}Navigation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete overview of all pages and sections on the Zion Tech Group
              website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Sitemap className="h-5 w-5 mr-2 text-blue-600" />
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <a
                            href={link.url}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {link.name}
                          </a>
                          <p className="text-sm text-gray-600">{link.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )}`;

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Created working sitemap.tsx');
    return true}

  async createWorkingPages() {
    this.log('🔧 Creating working pages...');

    let createdCount = 0;

    if (this.createWorkingPricingGuide()) createdCount++;
    if (this.createWorkingSitemap()) createdCount++;

    this.log(`🎉 Created ${createdCount} working pages!`);
    return createdCount > 0}
}

// Run the creator
const creator = new WorkingPagesCreator();
creator
  .createWorkingPages()
  .then(success => {
    if (success) {
      console.log('✅ Working pages created successfully!');
      process.exit(0)} else {
      console.log('❌ No pages were created.');
      process.exit(0)}
  })
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});
