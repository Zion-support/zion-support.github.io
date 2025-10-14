import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Code, Globe, Smartphone, Database, Shield, Zap, Clock } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,400/month',
      features: ['Node.js/Python', 'RESTful APIs', 'GraphQL', 'Microservices'],
      color: 'text-green-400'
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,000/month',
      features: ['End-to-End Development', 'Database Design', 'Cloud Integration', 'DevOps'],
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom Stores', 'Payment Integration', 'Inventory Management', 'Analytics'],
      color: 'text-orange-400'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques',
      icon: Zap,
      price: '$800/month',
      features: ['Page Speed Optimization', 'SEO Enhancement', 'CDN Setup', 'Caching'],
      color: 'text-yellow-400'
    },
    {
      title: 'Security Implementation',
      description: 'Secure your web applications with enterprise-grade security',
      icon: Shield,
      price: '$1,000/month',
      features: ['SSL Certificates', 'Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'text-red-400'
    },
    {
      title: 'Analytics Integration',
      description: 'Advanced analytics and tracking for your web applications',
      icon: BarChart,
      price: '$600/month',
      features: ['Google Analytics', 'Custom Dashboards', 'User Tracking', 'Conversion Optimization'],
      color: 'text-cyan-400'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
      color: 'text-gray-400'
    }
  ];

export default function WebDevelopment() {
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Professional web development services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Web Development</h1>
          <p className="text-lg text-gray-300 mb-8">Professional web development services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
=======
>>>>>>> origin/main
>>>>>>> origin/main
