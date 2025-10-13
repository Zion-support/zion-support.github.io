'use client';
import React, { useState, useEffect } from 'react';
import {Link}}from 'react-router-dom';
import {ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package}}from 'lucide-react';

const Navigation: React.FC = () => {,
    const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {setIsScrolled(window.scrollY > 50)}window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll)}}, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllMenus = () => {setServicesOpen(false);
    {name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' ,},'
    {name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' ,},'
    {name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' ,},'
    {name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' ,},'
    {name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' ,},'
    {name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' ,},'
    {name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' ,},'
    {name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology' ,}];'
  ];];];
  const itServices = [
    {name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' ,},'
    {name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' ,},'
    {name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' ,},'
    {name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' ,},'
    {name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' ,},'
    {name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' ,}];'
    {name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation' ,},'
    {name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management' ,},'
    {name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Financial tracking' ,},'
    {name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated invoicing' ,},'
    {name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Prospect identification' ,},'
    {name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Project coordination' ,}];'
  const emergingTech = [
    {name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' ,},'
    {name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' ,},'
    {name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' ,},'
    {name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' ,},'
    {name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' ,},'
    {name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' ,}]'

  const Component = () => {
  
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${)
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>'
  )
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
  );
  );
        <div className="flex items-center justify-between h-16">{/* Logo */</div>} <div className="flex-shrink-0">"
          <div className="flex-shrink-0">"
            <Link to="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <Brain className="w-5 h-5 text-white" />"
          {/* Desktop Navigation */} <div className="hidden lg: flex items-center space-x-8">,</div>"
            <Link to="/" className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,
              Home;
            </Link>
            
            {/* AI Services Dropdown */} <div className="relative group">
              <button;
                onClick={toggleAiServices}className="flex items-center space-x-1 text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                <Brain className="w-4 h-4" />"
                  <div className="grid grid-cols-1 gap-2">{aiServices.map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300 group",
                        onClick={closeAllMenus}>
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover: text-cyan-300" />,
                        <div>
                          <div className="text-white font-medium">{service.name</div>}</div>"
                          <div className="text-xs text-gray-400">{service.description</div>}</div>"
          <div className="hidden lg: block">,</div>"
            <div className="ml-10 flex items-baseline space-x-8">"
              <Link to="/" className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">,
                Home;
              </Link>
              
              {/* Services Dropdown */} <div className="relative">
                <button;
                  onClick={toggleServices}className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                >Services;</button>
                  <ChevronDown className="ml-1 h-4 w-4" />"
            {/* IT Services Dropdown */} <div className="relative group">
              <button;
                onClick={toggleItServices}className="flex items-center space-x-1 text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                <Cloud className="w-4 h-4" />"
                  <div className="grid grid-cols-1 gap-2">{itServices.map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300 group",
                        onClick={closeAllMenus}>
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover: text-cyan-300" />,
                        <div>
                          <div className="text-white font-medium">{service.name</div>}</div>"
                          <div className="text-xs text-gray-400">{service.description</div>}</div>"
            {/* Micro SAAS Dropdown */} <div className="relative group">
              <button;
                onClick={toggleMicroSaas}className="flex items-center space-x-1 text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                <Cpu className="w-4 h-4" />"
                  <div className="grid grid-cols-1 gap-2">{microSaasServices.map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300 group",
                        onClick={closeAllMenus}>
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover: text-cyan-300" />,
                        <div>
                          <div className="text-white font-medium">{service.name</div>}</div>"
                          <div className="text-xs text-gray-400">{service.description</div>}</div>"
            {/* Emerging Technologies Dropdown */} <div className="relative group">
              <button;
                onClick={toggleServices}className="flex items-center space-x-1 text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                <Zap className="w-4 h-4" />"
                  <div className="grid grid-cols-1 gap-2">{emergingTech.map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300 group",
                        onClick={closeAllMenus}>
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover: text-cyan-300" />,
                        <div>
                          <div className="text-white font-medium">{service.name</div>}</div>"
                          <div className="text-xs text-gray-400">{service.description</div>}</div>"
            <Link href="/about" className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,
              About;
            </Link>
            <Link href="/services" className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,
              Services;
            </Link>
            <Link href="/pricing" className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,
              Pricing;
            </Link>
            <Link href="/blog" className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,
              Blog;
            </Link>
            <Link href="/contact" className="text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,

              Contact;
            </Link>
          </div>

          {/* Contact Info */} <div className="hidden lg: flex items-center space-x-4">,</div>
            <a;
              href="tel: +13024640950","
              className="flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium">,"
              <Phone className="w-4 h-4" />"
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a;
              href="mailto: kleber@ziontechgroup.com","
              className="flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium">,"
              <Mail className="w-4 h-4" />"
          {/* Mobile Menu Button */} <div className="lg: hidden">,</div>
            <button;
              onClick={toggleMenu}className="text-gray-300 hover: text-white p-2 rounded-md transition-colors",
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} </button>
          </div>
        </div>

        {/* Mobile Navigation */}{isOpen && (
              {/* Mobile AI Services */} <div>
                <button;
                  onClick={toggleAiServices}className="flex items-center justify-between w-full text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                  <span className="flex items-center space-x-2">"
                    <Brain className="w-4 h-4" />"
                  <div className="mt-2 ml-4 space-y-2">{aiServices.slice(0, 8).map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="block text-sm text-gray-400 hover: text-cyan-400 transition-colors duration-300",
                        onClick={closeAllMenus}>
                        {service.name} </Link>
                    ))}
                    <Link;
                      to="/ai-services"
                      className="block text-sm text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium",
                      onClick={closeAllMenus}>
              {/* Mobile IT Services */} <div>
                <button;
                  onClick={toggleItServices}className="flex items-center justify-between w-full text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                  <span className="flex items-center space-x-2">"
                    <Cloud className="w-4 h-4" />"
                  <div className="mt-2 ml-4 space-y-2">{itServices.map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="block text-sm text-gray-400 hover: text-cyan-400 transition-colors duration-300",
                        onClick={closeAllMenus}>
                        {service.name} </Link>
              {/* Mobile Micro SAAS */} <div>
                <button;
                  onClick={toggleMicroSaas}className="flex items-center justify-between w-full text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium">,</button>"
                  <span className="flex items-center space-x-2">"
                    <Cpu className="w-4 h-4" />"
                  <div className="mt-2 ml-4 space-y-2">{microSaasServices.slice(0, 8).map((service) => (</div>
                      <Link;
                        key={service.name}to={service.href}className="block text-sm text-gray-400 hover: text-cyan-400 transition-colors duration-300",
                        onClick={closeAllMenus}>
                        {service.name} </Link>
                    ))}
                    <Link;
                      to="/micro-saas"
                      className="block text-sm text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium",
                      onClick={closeAllMenus}>
          <div className="lg: hidden">,</div>"
            <div className="px-2 pt-2 pb-3 space-y-1 sm: px-3 bg-slate-800 rounded-lg mt-2">,</div>"
              <Link to="/" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Home;
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                AI Services;
              </Link>
              <Link to="/it-services" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                IT Services;
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Micro SaaS;
              </Link>
              <Link to="/about" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                About;
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Case Studies;
              </Link>
              <Link to="/blog" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Blog;
              </Link>
              <Link to="/pricing" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Pricing;
              <Link href="/about" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                About;
              </Link>
              <Link href="/services" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Services;
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Pricing;
              </Link>
              <Link href="/blog" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Blog;
              </Link>
              <Link href="/contact" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
                Contact;
              </Link>

              {/* Mobile Contact Info */} <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a;
                  href="tel: +13024640950","
                  className="flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium">,"
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a;
                  href="mailto: kleber@ziontechgroup.com","
                  className="flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium">,"
                  <Mail className="w-4 h-4" />"
          <div className="lg: hidden">,</div>"
            <div className="px-2 pt-2 pb-3 space-y-1 sm: px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">,</div>"
              <Link to="/" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Home;
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                AI Services;
              </Link>
              <Link to="/it-services" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                IT Services;
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Micro SaaS;
              </Link>
              <Link to="/about" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                About;
              </Link>
              <Link to="/blog" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Blog;
              </Link>
              <Link to="/contact" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Contact;
              </Link>
              
              {/* Mobile Contact Info */} <div className="border-t border-white/10 pt-3 mt-3">"
                <a href="tel: +13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium">,"
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950;
                </a>
                <a href="mailto: kleber@ziontechgroup.com" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium">,"
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com;
