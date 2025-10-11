'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, MessageSquare, FileText, Users, CheckCircle, ArrowRight, Search, Filter, Shield, Cloud, Code, Target, Mail, Calendar, Package, Settings, Monitor, Globe, Heart, DollarSign, Zap, Eye, Cpu, Database, Lock, Mic, Video, Image, Phone, Star, Award, Clock, Wifi, Smartphone, Laptop, Server, Headphones, Camera, Music, ShoppingCart, Rocket, Sparkles, TrendingUp } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      category: 'Analytics',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      popular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS | Zion Tech Group - Specialized Software Solutions</title>
        <meta name="description" content="Discover our comprehensive micro SaaS products designed for specific business needs." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MicroSaasPage;
