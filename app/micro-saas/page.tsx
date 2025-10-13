import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Package, Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Camera, Mic } from 'lucide-react';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'meeting-transcriber',
      title: 'AI Meeting Transcriber',
      description: 'Real-time meeting transcription with AI-powered speaker identification and analysis',
      icon: Mic,
      href: '/zion-ai-meeting-transcriber',
      price: '$29/month',
      features: ['Real-time transcription', 'Speaker identification', 'Export capabilities']
    },
    {
      id: 'document-scanner',
      title: 'AI Document Scanner',
      description: 'Smart document scanning with OCR text extraction and intelligent data analysis',
      icon: Camera,
      href: '/zion-ai-document-scanner',
      price: '$19/month',
      features: ['OCR text extraction', 'Smart categorization', 'Data analysis']
    },
    {
      id: 'expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Intelligent expense tracking with receipt scanning and automated categorization',
      icon: DollarSign,
      href: '/zion-ai-expense-tracker',
      price: '$7/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Analytics dashboard']
    },
    {
      id: 'analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced business analytics with AI-powered insights and reporting',
      icon: BarChart3,
      href: '/zion-analytics-pro',
      price: '$49/month',
      features: ['Real-time analytics', 'AI insights', 'Custom reports']
    },
    {
      id: 'security-shield',
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection',
      icon: Shield,
      href: '/zion-security-shield',
      price: '$99/month',
      features: ['Threat detection', '24/7 monitoring', 'Incident response']
    },
    {
      id: 'cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage with advanced encryption and collaboration tools',
      icon: Cloud,
      href: '/zion-cloud-vault',
      price: '$15/month',
      features: ['Secure storage', 'File sharing', 'Version control']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions including AI meeting transcriber, document scanner, expense tracker, and more." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful, focused solutions that solve specific business problems with AI-powered intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <service.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg font-bold text-green-400">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.href}
                className="flex items-center justify-center space-x-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors group-hover:bg-green-600"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">
            Contact us to learn more about our micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
