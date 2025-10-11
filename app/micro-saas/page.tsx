'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, Phone, Search, Filter, Award, Lightbulb, Gauge, Rocket, Lock, Wifi, MessageSquare, ShoppingCart, Workflow, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  category: string;
  popular: boolean;
  icon: React.ComponentType<any>;
  users: string;
  setupTime: string;
  freeTrial: boolean;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$99/month',
      marketPrice: '$299/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integration',
        'Mobile app access'
      ],
      benefits: [
        'Increase data-driven decisions by 300%',
        'Reduce reporting time by 90%',
        'Predict trends 6 months ahead',
        'Save $50K+ annually on BI tools'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart,
      users: 'Up to 25 users',
      setupTime: '5 minutes',
      freeTrial: true,
      link: '/zion-analytics-pro'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs with competitive pricing." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, automation, productivity" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <section className="text-center mb-16 relative">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  🚀 50+ Ready-to-Use AI Tools
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Micro <span className="block text-6xl md:text-8xl mt-2">SaaS Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, focused AI tools that solve specific business problems. 
                Each tool is designed to deliver immediate value with minimal setup and competitive pricing.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MicroSaasPage;
