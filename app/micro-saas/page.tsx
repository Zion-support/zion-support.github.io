'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Globe, 
  Cpu,
  Database,
  BarChart,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: Zap,
      title: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI',
      features: [
        'Blog post generation',
        'Social media content',
        'Email templates',
        'SEO optimization'
      ],
      price: '$29/month',
      users: '1,000+'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics for your business metrics',
      features: [
        'Custom dashboards',
        'Real-time data',
        'Export reports',
        'Team collaboration'
      ],
      price: '$49/month',
      users: '500+'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Streamline customer relationships and support',
      features: [
        'Contact management',
        'Support tickets',
        'Communication history',
        'Automated workflows'
      ],
      price: '$39/month',
      users: '800+'
    },
    {
      icon: Shield,
      title: 'Security Monitor',
      description: 'Monitor and protect your digital assets',
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Incident response'
      ],
      price: '$59/month',
      users: '300+'
    },
    {
      icon: Database,
      title: 'Data Backup',
      description: 'Automated backup solutions for your data',
      features: [
        'Automated backups',
        'Cloud storage',
        'Version control',
        'Recovery tools'
      ],
      price: '$19/month',
      users: '1,200+'
    },
    {
      icon: Globe,
      title: 'Website Monitor',
      description: 'Monitor website performance and uptime',
      features: [
        'Uptime monitoring',
        'Performance tracking',
        'Alert notifications',
        'Detailed reports'
      ],
      price: '$24/month',
      users: '900+'
    }
  ];

  const benefits = [
    'Quick setup and deployment',
    'Affordable pricing for small businesses',
    'No long-term contracts',
    'Regular updates and improvements',
    '24/7 customer support',
    'Easy integration with existing tools'
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Products' },
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | Small Business Solutions</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed for small businesses. Affordable, easy-to-use solutions for your specific needs." />
        <meta name="keywords" content="micro SaaS, small business software, SaaS products, business tools, affordable software, Zion Tech Group" />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of specialized micro SaaS products designed 
              for small businesses. Affordable, easy-to-use solutions for your 
              specific needs.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Micro SaaS Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                  <div className="text-sm text-gray-400">{product.users} users</div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Try Free
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Choose from our collection of micro SaaS products or contact us 
              to discuss custom solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse Products
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;