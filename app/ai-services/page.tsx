import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable business insights',
      price: '$2,499/month',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Natural Language Queries',
        'Automated Report Generation',
        'Custom Dashboard Creation',
        'Multi-Data Source Integration',
        'Advanced Machine Learning Models',
        '24/7 Monitoring & Alerts'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for all marketing needs',
      price: '$899/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing Copy',
        'Video Script Writing',
        'SEO Optimization',
        'Multi-Language Support',
        'Brand Voice Training',
        'Content Calendar Management'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Content Creation',
      popular: true,
      rating: 4.8,
      users: '2,500+',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      name: 'AI Customer Support Automation',
      description: 'Intelligent customer service solution with 24/7 automated support capabilities',
      price: '$1,299/month',
      features: [
        'Natural Language Processing',
        'Multi-Channel Support',
        'Sentiment Analysis',
        'Escalation Management',
        'Knowledge Base Integration',
        'Real-time Analytics',
        'Custom Bot Training',
        'API Integration'
      ],
      icon: <Headphones className="w-8 h-8" />,
      category: 'Customer Service',
      popular: false,
      rating: 4.7,
      users: '800+',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions. 
            From analytics to automation, we provide the tools you need to stay ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
                {service.popular && (
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(service.rating) ? 'fill-current' : ''
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {service.rating} ({service.users} users)
                </span>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {service.price}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your AI needs and get a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/demo"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;