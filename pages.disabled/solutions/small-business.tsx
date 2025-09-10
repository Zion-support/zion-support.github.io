import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, DollarSign, Target, Cloud } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const SmallBusiness: NextPage = () => {;
  const solutions = [;
    {;
      title: 'Affordable Cloud Solutions',
      description: 'Cost-effective cloud infrastructure designed for small businesses',
      features: ['Scalable hosting', 'Data backup', 'Security monitoring', '24/7 support'],
      icon: Cloud,
      price: 'Starting at $99/month';
},
    {;
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation tools',
      features: ['Workflow automation', 'Email marketing', 'Customer management', 'Reporting'],
      icon: Zap,
      price: 'Starting at $49/month';
},
    {;
      title: 'Digital Marketing Suite',
      description: 'Complete digital marketing tools for growth',
      features: ['SEO optimization', 'Social media management', 'Analytics dashboard', 'Content creation'],
      icon: Target,
      price: 'Starting at $79/month';
},
    {;
      title: 'E-commerce Platform',
      description: 'Professional online store with payment processing',
      features: ['Online store setup', 'Payment integration', 'Inventory management', 'Order tracking'],
      icon: Globe,
      price: 'Starting at $129/month';
}
  ];
  const benefits = [;
    {;
      title: 'Cost-Effective',
      description: 'Affordable solutions that fit your budget',
      icon: DollarSign;
},
    {;
      title: 'Quick Setup',
      description: 'Get up and running in days, not months',
      icon: Clock;
},
    {;
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business',
      icon: TrendingUp;
},
    {;
      title: 'Expert Support',
      description: 'Dedicated support team for small businesses',
      icon: Users;
}
  ];
  return (;
    <MainLayout;
      title="Small Business Solutions - Zion Tech Group";
      description="Affordable technology solutions designed specifically for small businesses. Get professional-grade tools without the enterprise price tag.";
      keywords="small business solutions, affordable technology, business automation, cloud solutions, digital marketing">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">;
        <div className="absolute inset-0 bg-black opacity-10"></div>;
        <div className="container mx-auto px-4 text-center relative z-10">;
          <motion.h1 ;
            className="text-5xl md:text-6xl font-bold mb-6";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Small Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>;
          </motion.h1>;
          <motion.p ;
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Professional technology solutions designed specifically for small businesses. ;
            Get enterprise-grade tools without the enterprise price tag.;
          </motion.p>;
          <motion.div ;
            className="flex flex-col sm:flex-row justify-center gap-4";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <Link;
              href="/contact";
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">;
              Get Started Today;
            </Link>;
            <Link;
              href="/solutions";
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">;
              View All Solutions;
            </Link>;
          </motion.div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Small Business Solutions?</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We understand the unique challenges small businesses face and have designed solutions ;
              that address your specific needs while staying within your budget.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;