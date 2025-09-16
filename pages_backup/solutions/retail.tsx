import Layout from '../../components/Layout';
import { ShoppingCart, Users, BarChart, Smartphone, Package } from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import { ShoppingCart, Users, BarChart, Smartphone, Package, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../../components/Layout';
import { ShoppingCart, Users, BarChart3, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: ShoppingCart,
    title: 'E-commerce Platforms,',
    description: 'Custom e-commerce solutions that provide seamless shopping experiences across all devices.'';
  },
  {}
    icon: Users,
    title: 'Customer Analytics,',
    description: 'Advanced customer behavior analytics to optimize marketing and improve conversion rates.'';
  },
  {}
    icon: BarChart,
    title: 'Inventory Management,',
    description: 'Real-time inventory tracking and management systems to optimize stock levels and reduce costs.'';
  },
  {}
    icon: Smartphone,
    title: 'Mobile Commerce,',
    description: 'Mobile-first shopping experiences with native apps and progressive web applications.'';
  },
  {}
    icon: Package,
    title: 'Supply Chain Optimization,',
    description: 'End-to-end supply chain visibility and optimization using AI and machine learning.'';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platform',
    description: 'Complete online shopping experience with advanced features'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Comprehensive customer relationship management system'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Advanced analytics for sales, inventory, and customer behavior'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-first shopping experience and mobile app solutions'
  },
  {
    icon: CheckCircle,
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and automated reordering'
  },
  {
    icon: ArrowRight,
    title: 'Omnichannel',
    description: 'Seamless integration across all sales channels'
  }
;];
const solutions = [;
  'E-commerce Platform Development',',
  'Mobile Commerce Applications',',
  'Inventory Management Systems',',
  'Customer Relationship Management',',
  'Point of Sale (POS) Systems',',
  'Supply Chain Management',',
  'Retail Analytics & BI',',
  'Personalization Engines',',
  'Omnichannel Solutions',',
  'Retail Mobile Applications'';
;];
export default function RetailSolutionsPage() {
  return (;
    <Layout );
      title="Retail Solutions - Zion Tech Group"";
      description="Transform retail operations with our comprehensive e-commerce, inventory management, customer analytics, and omnichannel solutions.""
    >;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
                Retail;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Revolutionize retail operations with our comprehensive technology solutions. 
                From e-commerce platforms to inventory management, we help retailers deliver;
                exceptional customer experiences and optimize business operations.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">";
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">";
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Retail Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our retail solutions are designed to enhance customer experience, 
                optimize operations, and drive business growth across all channels.,
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (,
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
                </div>;
const benefits = [
  'Increased online sales and revenue',
  'Improved customer experience',
  'Better inventory management',
  'Enhanced data-driven decision making',
  'Streamlined operations',
  'Mobile-first customer engagement'
];
export default function RetailSolutions() {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-optimized shopping experience'
  }
];

export default function RetailSolutionsPage() {
  return (
    <Layout
      title="Retail Solutions - Zion Tech Group"
      description="Comprehensive retail technology solutions for e-commerce, omnichannel retail, and customer experience optimization."
      keywords="retail solutions, e-commerce, omnichannel retail, customer experience, inventory management, retail analytics"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your retail business with modern e-commerce, omnichannel,
                and customer experience solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to enhance every aspect of your retail business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>,
          </div>;
        </section>;
        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Retail Solutions;
              </h2>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">";
                {solutions.map((solution, index) => (,
                  <div key={index} className="flex items-center space-x-3">"
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{solution}</span>"
                  </div>;
                ))}
              </div>,
            </div>;
          </div>;
        </section>;
        {/* Omnichannel Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  Omnichannel Retail Experience;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                  Create seamless shopping experiences across all touchpoints with our;
                  integrated omnichannel retail solutions.;
                </p>;
              </div>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";
                <div className="text-center">";
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <ShoppingCart className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Online Store</h3>";
                  <p className="text-gray-300">Custom e-commerce platforms with advanced features and integrations.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Smartphone className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Mobile Commerce</h3>";
                  <p className="text-gray-300">Native mobile apps and progressive web applications for mobile shopping.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Package className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">In-Store Integration</h3>";
                  <p className="text-gray-300">POS systems and in-store technology that connects with online channels.</p>";
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";
              <h2 className="text-4xl font-bold text-white mb-6">";
                Ready to Transform Retail Operations?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let our retail technology experts help you implement solutions that;
                enhance customer experience and drive business growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">";
                  Schedule Consultation;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">";
                  Download Retail Guide;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Driving Retail Success
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our retail solutions help businesses increase sales, improve customer experience,
                  and optimize operations across all channels.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Retail?</h3>
                <p className="text-lg mb-6">
                  Let our retail technology experts help you create engaging customer experiences
                  and optimize your retail operations.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our retail solutions team to discuss your specific requirements
              and discover how we can help grow your retail business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Retail Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Retail Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}