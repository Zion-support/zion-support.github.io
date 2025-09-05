import React from 'react';
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../pages/components/Layout';
import {;
  Brain;
  Cloud;
  Shield
  BarChart3
  CheckCircle
  ArrowRight
  Clock
  Star
  DollarSign
  Award
  Globe
  Lock
  Cpu
  Bot
  FileText
  Video
  Mic
  Code
  Settings
  Monitor
  Smartphone
  Server
  Network
  Car
  Rocket
  Heart
  Building
  Sprout
  Mail
  Search
  Target
  TrendingUp
  Package
  Calendar
  BookOpen
  ShoppingCart
  Home
  Trash2
  Camera
  HardDrive
  Database
  Phone
  MapPin
  Zap
  Users
} from 'lucide-react'
const allServices = [
  {
    id: 1
    title: 'AI Services'
    description: 'Cutting-edge artificial intelligence solutions including machine learning, computer vision, and NLP.'
    icon: Brain
    category: 'AI & ML'
    href: '/ai-services'
    color: 'purple'
    services: ['Machine LearningComputer VisionNLPPredictive AnalyticsAI Chatbots']
  }
  {
    id: 2
    title: 'IT Services'
    description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, and DevOps.'
    icon: Server
    category: 'Information Technology'
    href: '/it-services'
    color: 'green'
    services: ['Cloud MigrationCybersecurityDevOpsDatabase ManagementIT Support']
  }
  {
    id: 3
    title: 'Micro SaaS'
    description: 'Innovative micro SaaS solutions designed to solve specific business challenges.'
    icon: Cloud
    category: 'Software as a Service'
    href: '/micro-saas'
    color: 'blue'
    services: ['Analytics DashboardDocument ProcessingCustomer ExperienceInventory ManagementProject Management']
  };
];
export default function ServicesPage() {;
  return (;
    <Layout;
      title="Our Services - Zion Tech Group";
      description="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses.";
      keywords="services, AI services, IT services, micro SaaS, technology solutions, business automation";
    >;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl md: text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8 }};
              >
                Our Comprehensive Services
              </motion.h1>
              <motion.p
                className="text-xl md: text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.2 }};
              >
                From AI-powered solutions to IT infrastructure and micro SaaS platforms
                we provide end-to-end technology services to transform your business.
              </motion.p>
              <motion.div
                className="flex flex-col sm: flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.4 }};
              >
                <Link href="/contact" className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>
              {/* Stats */};
              <motion.div
                className="grid md: grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.6 }};
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">235+</div>
                  <div className="text-gray-300">Services & Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1,200+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">95+</div>
                  <div className="text-gray-300">Expert Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Services Overview */};
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive technology services across three main categories
                each designed to address specific business needs and challenges.
              </p>
            </div>
            <div className="grid md: grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id};
                  className="bg-white rounded-lg shadow-lg hover: shadow-xl transition-shadow duration-300 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                >
                  <div className="p-8">
                    {/* Header */};
                    <div className="flex items-center mb-6">;
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>;
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />;
                      </div>;
                      <div>;
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>;
                        <p className="text-gray-500">{service.category}</p>;
                      </div>;
                    </div>;
                    {/* Description */};
                    <p className="text-gray-600 mb-6">{service.description}</p>;
                    {/* Services List */};
                    <div className="mb-6">;
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>;
                      <ul className="space-y-2">;
                        {service.services.map((item, idx) => (;
                          <li key={idx} className="flex items-center text-sm text-gray-600">;
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />;
                            {item};
                          </li>))};
                      </ul>
                    </div>
                    {/* CTA */};
                    <Link;
                      href={service.href};
                      className={`w-full bg-${service.color}-600 hover: bg-${service.color}-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center`};
                    >
                      Explore {service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                </motion.div>;
              ))};
            </div>;
          </div>;
        </section>;
        {/* Why Choose Us */};
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: 0.1 }};
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and monitoring</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: 0.2 }};
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-gray-600">Enterprise-grade security and compliance</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: 0.3 }};
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                <p className="text-gray-600">Transparent pricing with no hidden costs</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* CTA Section */};
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our expert services and discover how we can accelerate your business growth.
            </p>
            <div className="flex flex-col sm: flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};