import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const CustomerRelationshipManagerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Customer Relationship Manager - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="Professional customer relationship manager services and solutions. Expert implementation and support for your business needs." />
        <meta name="keywords" content="customer relationship manager, professional services, business solutions, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
=======
import { ArrowRight, CheckCircle, Users, Phone, Mail, Calendar, BarChart3, Target, Zap, Shield, Cloud, Settings } from 'lucide-react';

const CustomerRelationshipManagerPage = () => {
  const features = [
    {
      title: "Contact Management",
      description: "Centralized database of all customer interactions and contact information",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Unified contact view", "Interaction history", "Custom fields", "Data import/export"]
    },
    {
      title: "Sales Pipeline",
      description: "Visual sales pipeline to track deals from lead to close",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Deal tracking", "Stage management", "Forecasting", "Conversion analytics"]
    },
    {
      title: "Communication Hub",
      description: "Integrated communication tools for emails, calls, and meetings",
      icon: <Phone className="w-8 h-8" />,
      benefits: ["Email integration", "Call logging", "Meeting scheduler", "Auto-responses"]
    },
    {
      title: "Task Management",
      description: "Organize and track follow-ups, appointments, and customer tasks",
      icon: <Calendar className="w-8 h-8" />,
      benefits: ["Task automation", "Reminder system", "Team collaboration", "Priority levels"]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights into sales performance and customer behavior",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Sales reports", "Performance metrics", "Custom dashboards", "Data visualization"]
    },
    {
      title: "Integration Hub",
      description: "Connect with your existing tools and services for seamless workflow",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["API integrations", "Third-party apps", "Data sync", "Custom connectors"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Customer Relationship Manager - Zion Tech Group | CRM Software</title>
        <meta name="description" content="Powerful CRM software for managing customer relationships, sales pipelines, and team collaboration. Boost your sales performance with our comprehensive CRM solution." />
        <meta name="keywords" content="CRM software, customer relationship management, sales pipeline, contact management, sales automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              Customer Relationship Manager
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
<<<<<<< HEAD
            Professional customer relationship manager services and solutions. Expert implementation and support for your business needs.
=======
            Streamline your sales process, manage customer relationships, and boost revenue with our 
            comprehensive CRM platform designed for modern businesses.
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
<<<<<<< HEAD
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
=======
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                description: "Expert customer relationship manager solutions tailored to your business needs.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure excellence.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for your peace of mind.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((service, index) => (
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Manage Customer Relationships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive CRM features designed to help you build stronger relationships and close more deals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
<<<<<<< HEAD
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
=======
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to discuss your customer relationship manager requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
=======
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how our CRM can help you build stronger relationships and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Micro SAAS
            </Link>
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default CustomerRelationshipManagerPage;
=======
export default CustomerRelationshipManagerPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
