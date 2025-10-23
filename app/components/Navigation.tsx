'use client'
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server } from 'lucide-react'
import { Phone, Mail, Zap, Brain, Cloud, ArrowRight } from 'lucide-react'
import { MapPin, Cpu } from 'lucide-react'

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Menu, X } from "lucide-react";
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
  
    consthandleResize= () => {
  
      if (windo w.innerWidth >=1024) {
        setIsOpen(false)
     }
    }
    consthandleScroll= () => {setIsScrolled(windo w.scrollY >50)
   }
    windo w.addEventListener('resize', handleResize)
    windo w.addEventListener('scroll', handleScroll)
    return () => {windo w.removeEventListener('resize', handleResize)
      windo w.removeEventListener('scroll', handleScroll)
   }
  }, [])
  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen)
  const toggleItServices = () => setItServicesOpen(!itServicesOpen)
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen)
  const closeAllMenus = () => {
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
    setIsOpen(false)
 }

  // ServicedataconstaiServices= [
    {name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights'},
    {name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows'},
    {name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations'},
    {name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management'},
    {name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection'},
    {name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights'},
    {name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions'},
    {name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology'}
  ]
  const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' },
    { name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' }
  ]
  const microSaasServices = [
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Financial tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated invoicing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Prospect identification' },
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Project coordination' }
  ]
  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' }
  ]
=======
=======
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'AI Solutions', href: '/ai-automation-platform' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              ></button>
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              ></button>
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              ></button>
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              ></button>
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            ></button>
=======
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                ></button>
                  <span className="flex items-center space-x-2"></span>
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="block text-sm text-gray-400 hover:text-cyan-400transition-colorsduration-300"
                        onClick={closeAllMenus}
                      >{service.name}
                    </Lin>))}
                 <Linkto="/ai-services"
                     className="block text-sm text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>
              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                ></button>
                  <span className="flex items-center space-x-2"></span>
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="block text-sm text-gray-400 hover:text-cyan-400transition-colorsduration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                ></button>
                  <span className="flex items-center space-x-2"></span>
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                       className="block text-sm text-gray-400 hover:text-cyan-400transition-colorsduration-300"
                        onClick={closeAllMenus}
                      >{service.name}
                    </Lin>))}
                 <Linkto="/micro-saas"
                     className="block text-sm text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mt-4">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
<<<<<<< HEAD
=======
                    >View All Micro SAAS →
                  </Lin></di>)}
            </di><Linkto="/about"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>About
            </Lin><Linkto="/services"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Services
            </Lin><Linkto="/pricing"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Pricing
            </Lin><Linkto="/blog"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Blog
            </Lin><Linkto="/contact"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Contact
            </Lin>{/* Mobile ContactInfo */}
            <divclassName="pt-4 border-t border-cyan-50 0/20space-y-2"><ahref="tel:+13024640950"
                 className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                ><PhoneclassName="w-4h-4" /><spa n>(302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                ><MailclassName="w-4h-4" /><spa n>kleber@ziontechgroup.com</spa></a><divclassName="flex items-center space-x-2text-gray-400"><MapPinclassName="w-4h-4" /><spanclassName="text-sm">364E Main St STE1008, Middletown DE19709</spa></di></di></di></di>)}
    </di></na>
  )
}

export default Navigation;
=======

export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
