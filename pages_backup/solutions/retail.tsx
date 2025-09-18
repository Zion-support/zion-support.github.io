import React from 'react';
<<<<<<< HEAD
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
=======

const retail: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">retail</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default retail;
