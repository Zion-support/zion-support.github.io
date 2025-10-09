import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const microSaasApps = [
    {
      id: 1,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with AI-powered categorization and insights.',
      category: 'finance',
      icon: DollarSign,
      price: '$9.99/month',
      rating: 4.8,
      users: '2.5K',
      features: ['AI Categorization', 'Receipt Scanning', 'Budget Alerts', 'Analytics Dashboard'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing.',
      category: 'content',
      icon: FileText,
      price: '$19.99/month',
      rating: 4.9,
      users: '5.2K',
      features: ['Multiple Templates', 'SEO Optimization', 'Brand Voice', 'Bulk Generation'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'AI Project Manager',
      description: 'Intelligent project management with automated task assignment and tracking.',
      category: 'productivity',
      icon: Target,
      price: '$14.99/month',
      rating: 4.7,
      users: '3.8K',
      features: ['Smart Scheduling', 'Team Collaboration', 'Progress Tracking', 'Risk Analysis'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-powered content and scheduling.',
      category: 'marketing',
      icon: Share2,
      price: '$24.99/month',
      rating: 4.6,
      users: '4.1K',
      features: ['Auto Posting', 'Engagement Analysis', 'Content Calendar', 'Hashtag Optimization'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot for 24/7 customer support and lead generation.',
      category: 'support',
      icon: MessageSquare,
      price: '$29.99/month',
      rating: 4.8,
      users: '1.9K',
      features: ['Natural Language Processing', 'Multi-language Support', 'Lead Qualification', 'Analytics'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and predictions.',
      category: 'analytics',
      icon: BarChart,
      price: '$39.99/month',
      rating: 4.9,
      users: '2.3K',
      features: ['Real-time Data', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      image: '/api/placeholder/400/300'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Apps', icon: Globe },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: Share2 },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart }
  ];

  const filteredApps = activeTab === 'all' 
    ? microSaasApps 
    : microSaasApps.filter(app => app.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Apps - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS applications designed to solve specific business problems." />
        <meta name="keywords" content="micro SaaS, AI apps, business tools, productivity, automation" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Micro SaaS Apps
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover our collection of AI-powered micro SaaS applications designed to solve specific business problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Browse Apps
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Request Custom App
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApps.map((app) => (
                <div key={app.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <app.icon className="h-16 w-16 text-blue-600" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{app.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{app.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">{app.price}</span>
                      <span className="text-sm text-gray-500">{app.users} users</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Need a Custom Micro SaaS App?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We can build a custom micro SaaS application tailored to your specific business needs.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Custom App
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;
