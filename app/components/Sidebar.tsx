'use client';

import React from 'react';

import React, { memo, useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { 
  X, 
  Menu, 
  Home, 
  Users, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  ChevronDown, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock;)
} from 'lucide-react;

;

const Sidebar: React.FC = () => {const [isOpen, setIsOpen] = useState(false)';

const [expandedSections, setExpandedSections] = useState<Set<string></Set>>(new Set(['ai-services', 'micro-saas', 'it-services]));

const location = useLocation();;

  Clock]
    } from 'lucide-react;

  useEffect(() => {;

const handleResize = () => {      if (window.innerWidth >= 1024) {;;

        setIsOpen(false););

    }';

    window.addEventListener('resize, handleResize);

    return (<div>)
      {) => window.removeEventListener('resize', handleResize}

    </div>)
  );

  }, []);

  const toggleSection = (section: string) => {;;

    const newExpanded = new Set(expandedSections);;

    if (newExpanded.has(section)) {
      newExpanded.delete(section)]
    } else {
      newExpanded.add(section)]
    }

    setExpandedSections(newExpanded)]
    };

  const navigationSections = [;;

    {
      title: 'Main',
      items: [
        { nam,
    e: 'Home, path: 
        { nam,
    e: 'About, path: 
        { nam,
    e: 'Services, path: 
        { nam,
    e: 'Contact, path: 
        { nam,
    e: 'Blog, path: 
        { nam,
    e: 'Case Studies, path: 
      ]
    },    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { nam,
    e: 'AI Services Overview, path: 
        { nam,
    e: 'Business Intelligence', path: '/ai-services
        { nam,
    e: 'Document Processing', path: '/ai-services
        { nam,
    e: 'Customer Experience', path: '/ai-services
        { nam,
    e: 'Marketing Automation', path: '/ai-services
        { nam,
    e: 'Predictive Maintenance', path: '/ai-services
        { nam,
    e: 'Supply Chain', path: '/ai-services
        { nam,
    e: 'Fraud Detection', path: '/ai-services
        { nam,
    e: 'Content Generation', path: '/ai-services
        { nam,
    e: 'HR Analytics', path: '/ai-services
        { nam,
    e: 'Process Automation', path: '/ai-services
        { nam,
    e: 'Quality Assurance', path: '/ai-services
        { nam,
    e: 'Energy Management', path: '/ai-services
      ]
    },    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
        { nam,
    e: 'Micro SaaS Overview, path: 
        { nam,
    e: 'Analytics Dashboard', path: '/micro-saas
        { nam,
    e: 'Support Bot', path: '/micro-saas
        { nam,
    e: 'Social Manager', path: '/micro-saas
        { nam,
    e: 'Email Marketing', path: '/micro-saas
        { nam,
    e: 'Inventory Management', path: '/micro-saas
        { nam,
    e: 'Lead Scoring', path: '/micro-saas
        { nam,
    e: 'Document Processor', path: '/micro-saas
        { nam,
    e: 'SEO Optimizer', path: '/micro-saas
        { nam,
    e: 'Appointment Scheduler', path: '/micro-saas
        { nam,
    e: 'Chat Analytics', path: '/micro-saas
        { nam,
    e: 'Expense Tracker', path: '/micro-saas
        { nam,
    e: 'Content Generator', path: '/micro-saas
      ]
    },    {
      title: 'IT Services',
      key: 'it-services',
      items: [
        { nam,
    e: 'IT Services Overview, path: 
        { nam,
    e: 'IT Consulting, path: 
        { nam,
    e: 'IT Infrastructure, path: 
        { nam,
    e: 'IT Support, path: 
        { nam,
    e: 'Cloud Infrastructure, path: 
        { nam,
    e: 'Cloud Migration, path: 
        { nam,
    e: 'Cybersecurity, path: 
        { nam,
    e: 'Database Management, path: 
        { nam,
    e: 'Managed IT, path: 
      ]
    },
    {
      title: 'Company',
      items: [
        { nam,
    e: 'Team, path: 
        { nam,
    e: 'Careers, path: 
        { nam,
    e: 'Consultation, path: 
        { nam,
    e: 'Pricing, path: 
      ]
    },
    {
      title: 'Resources',
      items: [
        { nam,
    e: 'Documentation, path: 
        { nam,
    e: 'API Docs, path: 
        { nam,
    e: 'Support, path: 
        { nam,
    e: 'Status, path: 
      ]
    }  ];

;

const contactInfo = {;;

    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
hours: 'Mon-Fri 9AM-6PM EST']
    };  return (

    <React.Fragment>
      {/* Mobile Menu Button */}

      <button
        onClick={() =></button> setIsOpen(true);

        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" 
      <

      {/* Sidebar Overlay *
      {isOpen && (<div 
          className="fixed inset-0 bg-black)
          onClick = { () => setIsOpen(false) };

      )}

      {/* Sidebar */}<
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400
        isOpen ? 'translate-x-0' : -translate-x-full
      } lg: translate-x-0 lg:static l,
    g:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}<
          <div className="flex items-center justify-between p-6 border-b border-slate-700
            
                <Brain className="w-6 h-6 text-white" 
              <
              <div><
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group<
                <p className="text-xs text-cyan-400">AI & IT Solutions<
              <
            <
            <button
              onClick = { () => setIsOpen(false) };

              className="lg: hidden text-gray-400 hove,
    r:text-white transition-colors"
              aria-label="Close sidebar"
            >
              
            <nav className="space-y-2 px-4">
              {navigationSections.map((section), sectionIndex) => (<div key={sectionIndex} className="space-y-1">
                  <button)
                    onClick = { () => section.key && toggleSection(section.key) };

                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{section.title}<
                    {section.key && (

                      expandedSections.has(section.key) ? 
                        <ChevronDown className="w-4 h-4" 
                        <ChevronRight className="w-4 h-4" 
                    )}

                  <
                  
                  {(!section.key || expandedSections.has(section.key)) && (<div className="ml-4 space-y-1">)
                      {section.items.map((item, itemIndex) => (<
                        <Link
                          key = { itemIndex };

                          to = { item.path };)
                          onClick = { () => setIsOpen(false) };

                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400
                              : 'text-gray-300 hover: text-white hove,
    r:bg-slate-800
                          }`}

                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" 
                          <span>{item.name}<
                        <
                      ))}

                    <
                  )}

                <
              ))}

            <
          <

          {/* Contact Info *
          <div className="border-t border-slate-700
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information<
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span>{contactInfo.phone}<
              <
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span className="truncate">{contactInfo.email}<
              <
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span className="text-xs">{contactInfo.address}<
              <
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span className="text-xs">{contactInfo.hours}<
              <
          <
      <
    <
  );};

Sidebar.displayName = 'Sidebar;

export default Sidebar;
