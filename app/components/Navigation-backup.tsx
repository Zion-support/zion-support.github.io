'use client'.
import React, { useState, useEffect } from 'react'.
import {Link}}from 'react-router-dom'.
import {ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package}}from 'lucide-react'.

const Navigation: React.FC = () => {,
    const [isOpen, setIsOpen] = useState(false).
  const [servicesOpen, setServicesOpen] = useState(false).
  const [aiServicesOpen, setAiServicesOpen] = useState(false).
  const [itServicesOpen, setItServicesOpen] = useState(false).
  const [microSaasOpen, setMicroSaasOpen] = useState(false).
  const [isScrolled, setIsScrolled] = useState(false).

    const handleScroll = () => {setIsScrolled(window.scrollY > 50)}window.addEventListener('resize', handleResize).
    window.addEventListener('scroll', handleScroll).

    return () => {window.removeEventListener('resize', handleResize).
      window.removeEventListener('scroll', handleScroll)}}, []).

  const toggleMenu = () => setIsOpen(!isOpen).
  const toggleServices = () => setServicesOpen(!servicesOpen).
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen).
  const toggleItServices = () => setItServicesOpen(!itServicesOpen).
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen).

  const closeAllMenus = () => {setServicesOpen(false).
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

              {/* Services Dropdown */} <div className="relative">
                <button.
                  onClick={toggleServices}className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
              onClick={toggleMenu}className="text-gray-300 hover: text-white p-2 rounded-md transition-colors",
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        {/* Mobile Navigation */}{isOpen && (
                        key={service.name}to={service.href}className="block text-sm text-gray-400 hover: text-cyan-400 transition-colors duration-300",
                        onClick={closeAllMenus}>
                        {service.name}
                    ))}
                    <Link.
                      to="/ai-services"
                      className="block text-sm text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium",
                      onClick={closeAllMenus}>
                        key={service.name}to={service.href}className="block text-sm text-gray-400 hover: text-cyan-400 transition-colors duration-300",
                        onClick={closeAllMenus}>
                        {service.name}
                    ))}
                    <Link.
                      to="/micro-saas"
                      className="block text-sm text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium",
                      onClick={closeAllMenus}>
              <Link to="/pricing" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,
                Pricing.
              <Link href="/about" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
              {/* Mobile Contact Info */} <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a.
                  href="tel: +13024640950","
                  className="flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 transition-colors duration-300 font-medium">,"
                  <Phone className="w-4 h-4" />
