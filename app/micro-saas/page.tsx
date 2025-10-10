'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, BarChart3, Calendar, Mail, DollarSign, Box, Users, Monitor } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: FileText,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, articles, and marketing materials.',
      href: '/micro-saas/ai-content-writer'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Business intelligence tools for data visualization and insights.',
      href: '/micro-saas/analytics-dashboard'
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduler',
      description: 'Booking and scheduling system for businesses and professionals.',
      href: '/micro-saas/appointment-scheduler'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Email campaign management and automation tools.',
      href: '/micro-saas/email-marketing'
    },
    {
      icon: DollarSign,
      title: 'Expense Tracker',
      description: 'Financial tracking and expense management tools.',
      href: '/micro-saas/expense-tracker'
    },
    {
      icon: Box,
      title: 'Inventory Management',
      description: 'Stock and asset tracking for businesses.',
      href: '/micro-saas/inventory-management'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Team productivity and collaboration tools.',
      href: '/micro-saas-collaboration'
    },
    {
      icon: Monitor,
      title: 'Performance Monitoring',
      description: 'System performance tracking and monitoring tools.',
      href: '/micro-saas-monitoring'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - ready-to-use business tools that can be deployed quickly and efficiently." />
        <meta name="keywords" content="micro SaaS, business tools, ready-to-use, AI content writer, analytics dashboard, appointment scheduler, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use business tools that can be deployed quickly and efficiently.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Micro SaaS Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed for specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-purple-500 hover:text-purple-600 font-medium"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;