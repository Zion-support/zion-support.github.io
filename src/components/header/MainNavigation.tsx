<<<<<<< HEAD
import React { useState } from 'react';,"});,"})
import { Link } from 'react-router-dom';,"});,"})
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';,"});,"})
;,"});,"})
export function MainNavigation({ className = '' }) {,"});,"})
  const [isServicesOpen, setIsServicesOpen] = useState(false);,"});,"})
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);,"});,"})
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);,"});,"})
  return (;,"});,"})
    <nav className={`flex items-center space-x-8 ${className}`}>;,"});,"})
      {/* Home */}"});,"})
      <Link;,"});,"})
        to="/";,"});,"})
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
      >;,"});,"})
        Home;,"});,"})
      </Link>;,"});,"})
      {/* Services Dropdown */}"});,"})
      <div className="relative group">;,"});,"})
        <button;,"});,"})
          onMouseEnter={() => setIsServicesOpen(true)}"});,"})
          onMouseLeave={() => setIsServicesOpen(false)}"});,"})
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors";,"});,"})
          <Zap className="w-4 h-4" />;,"});,"})
          <span>Services</span>;,"});,"})
          <ChevronDown className="w-3 h-3" />;,"});,"})
        </button>;,"});,"})
        {isServicesOpen && (;,"});,"})
          <div;,"});,"})
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";,"});,"})
            <div className="p-4">;,"});,"})
              <div className="grid grid-cols-3 gap-4">;,"});,"})
                <div>;,"});,"})
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;,"});,"})
                    <Zap className="w-4 h-4 mr-2" />;,"});,"})
                    Micro SAAS;,"});,"})
                  </h4>;,"});,"})
                  <ul className="space-y-2 text-sm">;,"});,"})
                    <li>;,"});,"})
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        All Services;,"});,"})
                    </li>;,"});,"})
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Sales Copilot;,"});,"})
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cloud FinOps Optimizer;,"});,"})
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Compliance Assistant;,"});,"})
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Business Intelligence;,"});,"})
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Customer Support;,"});,"})
                      <Link to="/services/ai-content-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Content Generator;,"});,"})
                      <Link to="/services/smart-inventory-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Smart Inventory Management;,"});,"})
                  </ul>;,"});,"})
                </div>;,"});,"})
                    <Shield className="w-4 h-4 mr-2" />;,"});,"})
                    IT Services;,"});,"})
                      <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Quantum Computing;,"});,"})
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cloud & DevOps;,"});,"})
                      <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cybersecurity;,"});,"})
                      <Link to="/services/cloud-migration-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Cloud Migration Services;,"});,"})
                      <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Digital Transformation;,"});,"})
                      <Link to="/services/healthcare-tech" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Healthcare Tech;,"});,"})
                      <Link to="/services/iot-edge-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        IoT & Edge Computing;,"});,"})
                    <Brain className="w-4 h-4 mr-2" />;,"});,"})
                    AI Solutions;,"});,"})
                      <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Services;,"});,"})
                      <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                      <Link to="/services/ai-cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Cybersecurity;,"});,"})
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Healthcare;,"});,"})
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Supply Chain;,"});,"})
                      <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Quantum Hybrid;,"});,"})
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;,"});,"})
                  to="/services";,"});,"})
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center";,"});,"})
                  View All Services;,"});,"})
                  <TrendingUp className="w-4 h-4 ml-2" />;,"});,"})
        )}"});,"})
      {/* Solutions Dropdown */}"});,"})
          onMouseEnter={() => setIsSolutionsOpen(true)}"});,"})
          onMouseLeave={() => setIsSolutionsOpen(false)}"});,"})
          <Brain className="w-4 h-4" />;,"});,"})
          <span>Solutions</span>;,"});,"})
        {isSolutionsOpen && (;,"});,"})
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";,"});,"})
              <div className="grid grid-cols-2 gap-4">;,"});,"})
                    <Users className="w-4 h-4 mr-2" />;,"});,"})
                    Talent;,"});,"})
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Find Experts;,"});,"})
                      <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        AI Hiring;,"});,"})
                        Skill Matching;,"});,"})
                        Project Teams;,"});,"})
                    <HardDrive className="w-4 h-4 mr-2" />;,"});,"})
                    Resources;,"});,"})
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Enterprise Solutions;,"});,"})
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Industry Solutions;,"});,"})
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Case Studies;,"});,"})
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                        Marketplace;,"});,"})
                  to="/request-quote";,"});,"})
                  Get Custom Quote;,"});,"})
      {/* Company Dropdown */}"});,"})
          onMouseEnter={() => setIsCompanyOpen(true)}"});,"})
          onMouseLeave={() => setIsCompanyOpen(false)}"});,"})
          <Building2 className="w-4 h-4" />;,"});,"})
          <span>Company</span>;,"});,"})
        {isCompanyOpen && (;,"});,"})
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";,"});,"})
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    About Us;,"});,"})
                  <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Our Team;,"});,"})
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Careers;,"});,"})
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    News;,"});,"})
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Events;,"});,"})
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Partners;,"});,"})
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">;,"});,"})
                    Contact;,"});,"})
      {/* Resources */}"});,"})
        to="/resources";,"});,"})
      {/* Blog */}"});,"})
        to="/blog";,"});,"})
        Blog;,"});,"})
      {/* Pricing */}"});,"})
        to="/pricing";,"});,"})
        Pricing;,"});,"})
    </nav>;,"});,"})
  );,"});,"})
}"});,"})
import React { useState } from 'react';';
import { Link } from 'react-router-dom';';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';';

export: function MainNavigation({ className = '' }) {';';
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  return(
    <nav: className={`flex items-center space-x-8 ${className}`}>` {/* Home: */}
      <Link
        to='/';';
        className='text-sm: font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
        Home: </Link>
      {/* Services Dropdown */}
      <div className='relative group'>';';
        <button;
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className='flex: items-center space-x-1 text-sm font-medium text-zion-slate-light hover: text-zion-cyan: transition-colors'',;,';
        >
          <Zap: className='w-4 h-4' />';';
          <span>Services</span>
          <ChevronDown: className='w-3 h-3' />';';
        </button>
        {isServicesOpen: && (
          <div;
            className='absolute: top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'';';
            <div: className='p-4'>';';
              <div: className='grid grid-cols-3 gap-4'>';';
                <div>
                  <h4: className='text-zion-cyan font-semibold mb-3 flex items-center'>';';
                    <Zap: className='w-4 h-4 mr-2' />';';
                    Micro: SAAS
                  </h4>
                  <ul className='space-y-2 text-sm'>';';
                    <li>
                      <Link: to='/services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        All: Services
                      </Link>
                    </li>
                      <Link to='/services/ai-sales-copilot' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Sales Copilot
                      <Link to='/services/cloud-finops-optimizer' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Cloud: FinOps Optimizer
                      <Link to='/services/ai-compliance-assistant' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Compliance Assistant
                      <Link to='/services/ai-business-intelligence' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Business Intelligence
                      <Link to='/services/ai-customer-support-automation' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Customer Support
                      <Link to='/services/ai-content-generator' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Content Generator
                      <Link to='/services/smart-inventory-management' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Smart: Inventory Management
import React { useState } from 'react';""
import { Link } from 'react-router-dom';""
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';
import React { useState } from 'react';
import { Link} from 'react-router-dom';
;
export function MainNavigation({ className = ' }) {
import React {useState } from 'react';"
import {Link } from 'react-router-dom';"
import {ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';
export function MainNavigation({className='' }) {
import React { useState } from 'react';"
import { Link } from 'react-router-dom';"
import React { useState } from &apos;
import Link from &apos;next/link';react';
import { Link } from &apos;react-router-dom';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from &apos;lucide-react';&apos;&apos;

export function MainNavigation({ className = &apos;&apos}) {&apos}&apos;
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';""
import React { useState } from 'react
import { Link } from 'react-router-dom
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react
export function MainNavigation({ className = '' }) {
  return(;
    <nav className={`flex items-center space-x-8 ${className}`}> {/* Home */}
      <Link;
        to='/';
        className='text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors'>;
        Home;
      </Link> {/* Services Dropdown */}
      <div className='relative group'>;
          className='flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors';
        >;
          <Zap className='w-4 h-4' />;
          <span>Services</span>;
          <ChevronDown className='w-3 h-3' />;
        </button> {isServicesOpen && (;
            className='absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50';
            <div className='p-4'>;
              <div className='grid grid-cols-3 gap-4'>;
                <div>;
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>;
                    <Zap className='w-4 h-4 mr-2' />;
                    Micro SAAS;
                  </h4>;
                  <ul className='space-y-2 text-sm'>;
                    <li>;
                      <Link to='/services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        All Services;
                      </Link>;
                    </li>;
                      <Link to='/services/ai-sales-copilot' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Sales Copilot;
                      <Link to='/services/cloud-finops-optimizer' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cloud FinOps Optimizer;
                      <Link to='/services/ai-compliance-assistant' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Compliance Assistant;
                      <Link to='/services/ai-business-intelligence' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Business Intelligence;
                      <Link to='/services/ai-customer-support-automation' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Customer Support;
                      <Link to='/services/ai-content-generator' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Content Generator;
                      <Link to='/services/smart-inventory-management' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Smart Inventory Management;
                  </ul>;
                </div>;
                    <Shield className='w-4 h-4 mr-2' />;
                    IT Services;
                      <Link to='/services/quantum-computing' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Quantum Computing;
                      <Link to='/services/cloud-devops' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cloud & DevOps;
                      <Link to='/services/cybersecurity' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cybersecurity;
                      <Link to='/services/cloud-migration-services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Cloud Migration Services;
                      <Link to='/services/digital-transformation' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Digital Transformation;
                      <Link to='/services/healthcare-tech' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Healthcare Tech;
                      <Link to='/services/iot-edge-computing' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        IoT & Edge Computing;
                    <Brain className='w-4 h-4 mr-2' />;
                    AI Solutions;
                      <Link to='/services/ai-services' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Services;
                      <Link to='/services/ai-solutions' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                      <Link to='/services/ai-cybersecurity' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Cybersecurity;
                      <Link to='/services/ai-healthcare-platform' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Healthcare;
                      <Link to='/services/ai-supply-chain-optimization' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Supply Chain;
                      <Link to='/services/ai-quantum-hybrid-platform' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Quantum Hybrid;
              <div className='mt-4 pt-4 border-t border-zion-purple/20'>;
                  to='/services';
                  className='text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>;
                  View All Services;
                  <TrendingUp className='w-4 h-4 ml-2' />;
        to=&apos;/';
        className=&apos;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
        Home&apos;&apos;
        className='text-sm font-medium text-zion-slate-light hover: text-zion-cyan transition-colors'>
        Home
      <div className=&apos;relative group&apos;>&apos;'
          className=&apos;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;
        >&apos;
          <Zap className=&apos;w-4 h-4&apos; />&apos;
          className='flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover: text-zion-cyan transition-colors'
          <Zap className='w-4 h-4' />
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        {isServicesOpen && (}
            className=&apos;absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
            <div className=&apos;p-4&apos;>&apos;'
              <div className=&apos;grid grid-cols-3 gap-4&apos;>&apos;'
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;'
                    <Zap className=&apos;w-4 h-4 mr-2&apos; />
                    Micro SAAS&apos;
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                      <Link to=&apos;/services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        All Services&apos;
                      <Link to='/services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>
                        All Services
                      <Link to=&apos;/services/ai-sales-copilot&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Sales Copilot&apos;
                      <Link to=&apos;/services/cloud-finops-optimizer&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud FinOps Optimizer&apos;
                      <Link to=&apos;/services/ai-compliance-assistant&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Compliance Assistant&apos;
                      <Link to=&apos;/services/ai-business-intelligence&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Business Intelligence&apos;
                      <Link to=&apos;/services/ai-customer-support-automation&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Customer Support&apos;
                      <Link to=&apos;/services/ai-content-generator&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Content Generator&apos;
                      <Link to=&apos;/services/smart-inventory-management&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Smart Inventory Management&apos;
                  </ul>
                </div>
                  <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>';';
                    <Shield: className='w-4 h-4 mr-2' />';';
                    IT: Services
                      <Link: to='/services/quantum-computing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Quantum: Computing
                      <Link to='/services/cloud-devops' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Cloud: & DevOps
                      <Link to='/services/cybersecurity' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Cybersecurity: </Link>
                      <Link to='/services/cloud-migration-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Cloud: Migration Services
                      <Link to='/services/digital-transformation' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Digital: Transformation
                      <Link to='/services/healthcare-tech' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Healthcare: Tech
                      <Link to='/services/iot-edge-computing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        IoT: & Edge Computing
                    <Shield className=&apos;w-4 h-4 mr-2&apos; />
                    IT Services&apos;
                      <Link to=&apos;/services/quantum-computing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Quantum Computing&apos;
                      <Link to=&apos;/services/cloud-devops&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud & DevOps&apos;
                      <Link to=&apos;/services/cybersecurity&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cybersecurity&apos;
                      <Link to=&apos;/services/cloud-migration-services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud Migration Services&apos;
                      <Link to=&apos;/services/digital-transformation&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Digital Transformation&apos;
                      <Link to=&apos;/services/healthcare-tech&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Healthcare Tech&apos;
                      <Link to=&apos;/services/iot-edge-computing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        IoT & Edge Computing&apos;
                    <Brain: className='w-4 h-4 mr-2' />';';
                    AI: Solutions
                      <Link: to='/services/ai-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Services
                      <Link to='/services/ai-solutions' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                      <Link to='/services/ai-cybersecurity' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Cybersecurity
                      <Link to='/services/ai-healthcare-platform' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Healthcare
                      <Link to='/services/ai-supply-chain-optimization' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Supply Chain
                      <Link to='/services/ai-quantum-hybrid-platform' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Quantum Hybrid
                    <Brain className=&apos;w-4 h-4 mr-2&apos; />
                    AI Solutions&apos;
                      <Link to=&apos;/services/ai-services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Services&apos;
                      <Link to=&apos;/services/ai-solutions&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                      <Link to=&apos;/services/ai-cybersecurity&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Cybersecurity&apos;
                      <Link to=&apos;/services/ai-healthcare-platform&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Healthcare&apos;
                      <Link to=&apos;/services/ai-supply-chain-optimization&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Supply Chain&apos;
                      <Link to=&apos;/services/ai-quantum-hybrid-platform&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Quantum Hybrid&apos;
              <div className='mt-4 pt-4 border-t border-zion-purple/20'>';';
                <Link: to='/services';';
                  className='text-zion-cyan: hover: text-zion-cyan-light: transition-colors text-sm font-medium flex items-center justify-center'>',;,';
                  View: All Services
                  <TrendingUp className='w-4 h-4 ml-2' />';';
              <div className=&apos;mt-4 pt-4 border-t border-zion-purple/20&apos;>&apos;'
                  to=&apos;/services';
                  className=&apos;text-zion-cyan hove,r:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&apos;>
                  View All Services&apos;&apos;
                  <TrendingUp className=&apos;w-4 h-4 ml-2&apos; />&apos;
                  className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>
                  View All Services
                  <TrendingUp className='w-4 h-4 ml-2' />
        )}
      {/* Solutions: Dropdown */}
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          <Brain: className='w-4 h-4' />';';
          <span>Solutions</span>
        {isSolutionsOpen: && (
            className='absolute: top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'';';
              <div: className='grid grid-cols-2 gap-4'>';';
                    <Users: className='w-4 h-4 mr-2' />';';
                    Talent: </h4>
                      <Link: to='/talent' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Find: Experts
                      <Link to='/zion-hire-ai' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        AI: Hiring
                      <Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Skill: Matching
                        Project: Teams
      </div> {/* Solutions Dropdown */}
          <Brain className='w-4 h-4' />;
          <span>Solutions</span>;
        </button> {isSolutionsOpen && (;
            className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50';
              <div className='grid grid-cols-2 gap-4'>;
                    <Users className='w-4 h-4 mr-2' />;
                    Talent;
                      <Link to='/talent' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Find Experts;
                      <Link to='/zion-hire-ai' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        AI Hiring;
                        Skill Matching;
                        Project Teams;
                    <HardDrive className='w-4 h-4 mr-2' />;
                    Resources;
                      <Link to='/enterprise' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Enterprise Solutions;
                      <Link to='/solutions' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Industry Solutions;
                      <Link to='/case-studies' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Case Studies;
                      <Link to='/marketplace' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                        Marketplace;
                  to='/request-quote';
                  Get Custom Quote;
          <Brain className=&apos;w-4 h-4&apos; />&apos;
          <Brain className='w-4 h-4' />
        {isSolutionsOpen && (}
            className=&apos;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
              <div className=&apos;grid grid-cols-2 gap-4&apos;>&apos;'
                    <Users className=&apos;w-4 h-4 mr-2&apos; />
                    Talent&apos;
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Find Experts&apos;
                      <Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>
                        Find Experts
                      <Link to=&apos;/zion-hire-ai&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Hiring&apos;
                        Skill Matching&apos;
                        Project Teams&apos;
                    <HardDrive: className='w-4 h-4 mr-2' />';';
                    Resources: </h4>
                      <Link: to='/enterprise' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Enterprise: Solutions
                      <Link to='/solutions' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Industry: Solutions
                      <Link to='/case-studies' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Case: Studies
                      <Link to='/marketplace' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                        Marketplace: </Link>
                    <HardDrive className=&apos;w-4 h-4 mr-2&apos; />
                    Resources&apos;
                      <Link to=&apos;/enterprise&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Enterprise Solutions&apos;
                      <Link to=&apos;/solutions&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Industry Solutions&apos;
                      <Link to=&apos;/case-studies&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Case Studies&apos;
                      <Link to=&apos;/marketplace&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Marketplace&apos;
                <Link: to='/request-quote';';
                  Get: Custom Quote
                  to=&apos;/request-quote';
                  Get Custom Quote&apos;&apos;
                  Get Custom Quote
      {/* Company: Dropdown */}
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          <Building2: className='w-4 h-4' />';';
          <span>Company</span>
        {isCompanyOpen: && (
            className='absolute: top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'';';
              <ul: className='space-y-2 text-sm'>';';
                  <Link: to='/about' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    About: Us
                  <Link to='/team' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    Our: Team
                  <Link to='/careers' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    Careers: </Link>
                  <Link to='/news' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    News: </Link>
                  <Link to='/events' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    Events: </Link>
                  <Link to='/partners' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    Partners: </Link>
                  <Link to='/contact' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>',;,';
                    Contact: </Link>
      </div> {/* Company Dropdown */}
          <Building2 className='w-4 h-4' />;
          <span>Company</span>;
        </button> {isCompanyOpen && (;
            className='absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50';
                  <Link to='/about' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    About Us;
                  <Link to='/team' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    Our Team;
                  <Link to='/careers' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    Careers;
                  <Link to='/news' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    News;
                  <Link to='/events' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    Events;
                  <Link to='/partners' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    Partners;
                  <Link to='/contact' className='text-zion-slate-light hover:text-zion-cyan transition-colors'>;
                    Contact;
          <Building2 className=&apos;w-4 h-4&apos; />&apos;
          <Building2 className='w-4 h-4' />
        {isCompanyOpen && (}
            className=&apos;absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
                  <Link to=&apos;/about&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    About Us&apos;
                  <Link to='/about' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>
                    About Us
                  <Link to=&apos;/team&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Our Team&apos;
                  <Link to=&apos;/careers&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Careers&apos;
                  <Link to=&apos;/news&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    News&apos;
                  <Link to=&apos;/events&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Events&apos;
                  <Link to=&apos;/partners&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Partners&apos;
                  <Link to=&apos;/contact&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>
                    Contact&apos;
      </div> {/* Resources */}
        to='/resources';';
        Resources: </Link>
      {/* Blog */}
        to='/blog';';
        Blog: </Link>
      {/* Pricing */}
        to='/pricing';';
        Pricing: </Link>
        to='/resources';
        to=&apos;/resources';
        Resources&apos;&apos;
        to=&apos;/blog';
        Blog&apos;&apos;
        to=&apos;/pricing';
        Pricing&apos;&apos;
        Resources
        to='/blog';
        Blog;
        Blog
        to='/pricing';
        Pricing;
    </nav>;
        Pricing
    </nav>
  const [isCompOpen, setIsCompOpen] = useState(false);
""
}
"
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Rocket,
  Server,
  Cloud,
  Lock,
  Workflow,
  Database,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Handshake,
  Monitor,
  GraduationCap,
  Lightbulb,
  Code,
  Activity,
  Target
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className = '' }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Home */}
      <Link 
        to="/" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Home
      </Link>

      {/* Services Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          <Zap className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isServicesOpen && (
          <div 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        All Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Sales Copilot
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud FinOps Optimizer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Compliance Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Customer Support
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum Neural Network
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Autonomous Operations
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Asset Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Enhanced Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Onsite Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud & DevOps
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Supply Chain
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Quantum Hybrid
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/services" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          <Brain className="w-4 h-4" />
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isSolutionsOpen && (
          <div 
            onMouseEnter={() => setIsSolutionsOpen(true)} 
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Find Experts
                      </Link>
                    </li>
                    <li>
                      <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Hiring
                      </Link>
                    </li>
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Skill Matching
                      </Link>
                    </li>
                    <li>
                      <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Project Teams
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2" />
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Enterprise Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Industry Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Marketplace
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/request-quote" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isCompanyOpen && (
          <div 
            onMouseEnter={() => setIsCompanyOpen(true)} 
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Resources */}
      <Link 
        to="/resources" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Resources
      </Link>

      {/* Blog */}
      <Link 
        to="/blog" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Blog
      </Link>

      {/* Contact */}
      <Link 
        to="/contact" 
        className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
} 
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
