'use client';
import React from 'react';
import React, { memo, useState, useEffect } from 'react';
import { Link useLocation } from "react-router-dom";
import {;
  X,;
  Menu,;
  Home,;
  Users,;
  Settings,;
  Brain,;
  Cloud,;
  Shield,;
  Code,;
  BarChart,;
  ChevronDown,;
  ChevronRight,;
  Phone,;
  Mail,;
  MapPin,;
  Clock;}
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  const toggleSection = (section: string) => {
;
const Sidebar: React.FC = () => {;</Set>
  const [isOpen, setIsOpen] = useState(false);</Set>
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();
;
  useEffect(() => {;
    const handleResize = (;
      if (window.innerWidth >= 1024) {;) => {
  return (
    $3;
  );
        setIsOpen(false);}
;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
;
  const toggleSection = (;
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {;) => {
  return (
    $3;
  );
      newExpanded.delete(section);}
      newExpanded.add(section);}
    setExpandedSections(newExpanded);
  const navigationSections = [
      title: 'Main',
      items: [
      ]
      title: 'AI Services',
      key: 'ai-services',
      items: [
      ]
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
      ]
      title: 'IT Services',
      key: 'it-services',
      items: [
      ]
      title: 'Company',
      items: [
      ]
      title: 'Resources',
      items: [
      ]
  ];
  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'</Set>
  return (</Set>
    <React.Fragment></React.Fragment>
;
  const navigationSections = [;
      title: 'Main',;
      items: [;}
      ];
      title: 'AI Services',;
      key: 'ai-services',;
      items: [;}
      ];
      title: 'Micro SaaS',;
      key: 'micro-saas',;
      items: [;}
      ];
      title: 'IT Services',;
      key: 'it-services',;
      items: [;}
      ];
      title: 'Company',;
      items: [;}
      ];
      title: 'Resources',;
      items: [;}
      ];
  ];
;
  const contactInfo = {;
    phone: '(302) 464-0950',;
    email: 'kleber@ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown, DE 19709',;
    hours: 'Mon-Fri 9AM-6PM EST';}
;
  return (;
      <button;
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"</button>
        aria-label="Open sidebar"</button>
        <Menu className="w-6 h-6" />
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all";
        aria-label="Open sidebar";
        <Menu className="w-6 h-6" />;
        <div;
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden";}
          onClick={() => setIsOpen(false)}
        />;
      )}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
        <div className="flex flex-col h-full"></div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50"></div>
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}></Link>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-6 h-6 text-white" />
              <div></div>
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            <button;
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"</button>
              aria-label="Close sidebar"</button>
              <X className="w-6 h-6" />
;
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${;
        isOpen ? 'translate-x-0' : '-translate-x-full';}
        <div className="flex flex-col h-full"></div>;
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50"></div>;
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>;</Link>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></div>;
                <Brain className="w-6 h-6 text-white" />;
              <div></div>;
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>;
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>;
            <button;
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors";</button>
              aria-label="Close sidebar";</button>
              <X className="w-6 h-6" />;
          <div className="flex-1 overflow-y-auto py-6"></div>;
            <nav className="space-y-2 px-4">;</nav>
                <div, key={sectionInde, x} classNam, e="spac, e-y-1"></di, v>;
                  <button;
                    onClick={() => section.key && toggleSection(section.key)}</button>
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"></button>
                    <spa, n>{sectio, n.titl, e}</spa, n>
                      expandedSections.has(section.key) ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                    )}
                    <div className="ml-4 space-y-1"></div>
                        <Link;
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors";
                    <spa, n>{sectio, n.titl, e}</spa, n>;
                      expandedSections.has(section.key) ?;
                        <ChevronDown className="w-4 h-4" /> :;
                        <ChevronRight className="w-4 h-4" />;}
                    )}
                    <div className="ml-4 space-y-1"></div>;
                        <Link;}
                          ke, y={itemInde, x}
                          t, o={ite, m.pat, h}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${;
                            location.pathname === item.path;
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30';</Link>
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50';}</Link>
                          <item.icon className="w-4 h-4 flex-shrink-0" />;
                          <spa, n>{ite, m.nam, e}</spa, n>;
                      ))}
                  )}
              ))}
          <div className="border-t border-slate-700/50 p-6"></div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300"></div>
              <div className="flex items-center space-x-3"></div>
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <spa, n>{contactInf, o.phon, e}</spa, n>
              <div className="flex items-center space-x-3"></div>
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span, className="truncat, e">{contactInf, o.emai, l}</spa, n>
              <div className="flex items-center space-x-3"></div>
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span, className="tex, t-x, s">{contactInf, o.addres, s}</spa, n>
              <div className="flex items-center space-x-3"></div>
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span, className="tex, t-x, s">{contactInf, o.hour, s}</spa, n>
  );
Sidebar.displayName = 'Sidebar';
export default Sidebar;
          <div className="border-t border-slate-700/50 p-6"></div>;
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>;
            <div className="space-y-3 text-sm text-gray-300"></div>;
              <div className="flex items-center space-x-3"></div>;
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />;
                <spa, n>{contactInf, o.phon, e}</spa, n>;
              <div className="flex items-center space-x-3"></div>;
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />;
                <span, className="truncat, e">{contactInf, o.emai, l}</spa, n>;
              <div className="flex items-center space-x-3"></div>;
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />;
                <span, className="tex, t-x, s">{contactInf, o.addres, s}</spa, n>;
              <div className="flex items-center space-x-3"></div>;
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />;
                <span, className="tex, t-x, s">{contactInf, o.hour, s}</spa, n>;
  );
;
Sidebar.displayName = 'Sidebar';
;
export default Sidebar;
