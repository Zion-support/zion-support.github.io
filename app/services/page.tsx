'use client';
import React, { useState } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  ArrowRight,
  Search,
  Filter;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services;
      id: 1,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      category: 'AI',
      price: 'Starting at $2 999/month',
      features: ['Machine Learning Models', 'NLP Processing', 'Computer Vision', 'Predictive Analytics']
      id: 2,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure solutions for modern businesses with high availability and security.',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $1 999/month',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure compliance.',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $3 999/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
      id: 4,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and visualization tools.',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $2 499/month',
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards']
      id: 5,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with modern technologies and best practices.',
      icon: Code,
      category: 'Development',
      price: 'Starting at $4 999/month',
      features: ['Custom Applications', 'API Development', 'Mobile Apps', 'Web Development']
      id: 6,
      title: 'Database Services',
      description: 'Comprehensive database management and optimization services for improved performance and reliability.',
      icon: Database,
      category: 'Database',
      price: 'Starting at $1 499/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services']
      id: 7,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $3 499/month',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization']
      id: 8,
      title: 'IT Consulting',
      description: 'Strategic IT consulting services to help you make informed technology decisions and optimize your infrastructure.',
      icon: Users,
      category: 'Consulting',
      price: 'Starting at $1 999/month',
      features: ['Technology Strategy', 'Architecture Review', 'Cost Optimization', 'Digital Transformation']
      id: 9,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation solutions that reduce manual work.',
      icon: Zap,
      category: 'AI',
      price: 'Starting at $2 999/month',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services']
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Analytics', 'Development', 'Database', 'Consulting'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Our</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Services;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Comprehensive AI and IT solutions designed to transform your business and drive growth.

      <section className="py-10 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
            <div className="flex-1"></div>
              <div className="relative"></div>
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Comprehensive AI and IT solutions designed to transform your business;
              and drive growth.

        <section className="py-10 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
              <div className="relative flex-1"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search services..."
                  valu, e={searchTer, m}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
            <div className="flex items-center space-x-2"></div>
              <Filter className="w-5 h-5 text-gray-400" />
              <select;
                valu, e={selectedCategor, y}
                onChange={(e) => setSelectedCategory(e.target.value)}</select>
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"</select>
                  <option, key={categor, y} valu, e={categor, y} classNam, e="capitaliz, e">
                ))}</option>
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div, key={servic, e.i, d} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-300, group"></di, v>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  <h3, className="tex, t-xl, font-semibold, text-whit, e">{servic, e.titl, e}</h, 3>
                
                <p, className="tex, t-gra, y-300, mb-6">{servic, e.descriptio, n}</p>
                
                <div className="mb-6"></div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2"></ul>
              <div className="relative"></div>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select;
                  valu, e={selectedCategor, y}
                  onChange={(e) => setSelectedCategory(e.target.value)}</select>
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"</select>
                    <option, key={categor, y} valu, e={categor, y} classNam, e="b, g-slat, e-80, 0">
                  ))}</option>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div, key={servic, e.i, d} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, border borde, r-whit, e/20, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <service.icon className="w-8 h-8 text-white" />
                  <h3, className="tex, t-xl, font-bold, text-white, mb-3">{servic, e.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-4">{servic, e.descriptio, n}</p>
                  <ul className="space-y-2 mb-6"></ul>
                      <li, key={inde, x} classNam, e="flex, items-center, text-sm, text-gra, y-30, 0"></l, i>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    ))}
                
                <div className="mb-6"></div>
                  <div, className="tex, t-lg, font-semibold, text-cya, n-40, 0">{servic, e.pric, e}</di, v>
                
                <div className="flex space-x-3"></div>
                  <Link;
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    Get Started;
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center"></button>
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-1" />
            ))}

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8"></p>
              Let's discuss your project and find the perfect solution for your business needs.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              <Link;
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
                  <div className="flex items-center justify-between"></div>
                    <span, className="tex, t-blu, e-400, font-semibol, d">{servic, e.pric, e}</spa, n>
                    <button className="flex items-center text-white hover:text-blue-400 transition-colors"></button>
                      Learn More;
                      <ArrowRight className="w-4 h-4 ml-1" />
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Get Started?
              <p className="text-xl text-gray-300 mb-8"></p>
                Contact our experts to discuss your requirements and get a customized solution.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Get Quote;
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Contact Us;
      <Footer />
  );

export default ServicesPage;