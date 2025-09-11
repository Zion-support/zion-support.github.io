import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ;

import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Code } from 'lucide-react';
const services = [];
const applications = [];
const solutions = [];
  Menu, ;
  X, ;
  ChevronDown, ;
  Globe, ;
  Brain, ;
  Cloud, ;
  Shield, ;
  Zap, ;
  Users, ;
  Phone, ;
  Mail, ;
  MapPin,;
  Code,;
  Database,;
  Settings,;
  BarChart3,;
  Target,;
  Lock,;
  Wifi,;
  Network,;
  FileText,;
  Calendar,;
  Smartphone,;
  Eye,;
  Bot,;
  Cpu,;
  Truck,;
  TreePine,;
  Home;
} from "lucide-react";
const _EnhancedNavigation = ("props": "any) => {;
  const [isOpen", setIsOpen] = useStateg<div>(false);
  const [isScrolled, setIsScrolled] = useStateg<div>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {;
    const _handleScroll = ("props": "any) => {;
      setIsScrolled(window.scrollY > 20);
    "}
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const _navigationItems = [;
    {;
      "name": "Services",;
      "href": "/services",;
      "dropdown": "[;
        {;
          "name": "AI Services"",;
          "href": "/ai-services",;
          "description": "Machine learning, NLP, computer vision",;
          "icon": "Brai n;
        "},;
        {;
          "name": "Micro SaaS",;
          "href": "/micro-saas",;
          "description": "Custom software solutions",;
          "icon": "Cod e;
        "},;
        {;
          "name": "IT Services",;
          "href": "/it-services",;
          "description": "Cloud, cybersecurity, infrastructure",;
          "icon": "Clou d;
        "},;
        {;
          "name": "Innovative Services",;
          "href": "/innovative-services",;
          "description": "Cutting-edge technology solutions",;
          "icon": "Za p;
        "}
      ];
    },;
    {;
      "name": "Solutions",;
      "href": "/solutions",;
      "dropdown": "[;
        {;
          "name": "Cloud & DevOps"",;
          "href": "/cloud-devops",;
          "description": "Infrastructure and deployment",;
          "icon": "Clou d;
        "},;
        {;
          "name": "Cybersecurity",;
          "href": "/cybersecurity",;
          "description": "Security and compliance",;
          "icon": "Shiel d;
        "},;
        {;
          "name": "Data Analytics",;
          "href": "/data-analytics",;
          "description": "Business intelligence and insights",;
          "icon": "BarChart 3;
        "},;
        {;
          "name": "IoT Solutions",;
          "href": "/iot-solutions",;
          "description": "Internet of Things platforms",;
          "icon": "Wif i;
        "}
      ];
    },;
    {;
      "name": "Products",;
      "href": "/products",;
      "dropdown": "[;
        {;
          "name": "AI-Powered Tools"",;
          "href": "/ai-tools",;
          "description": "Intelligent automation tools",;
          "icon": "Bo t;
        "},;
        {;
          "name": "Blockchain Solutions",;
          "href": "/blockchain-solutions",;
          "description": "Decentralized applications",;
          "icon": "Networ k;
        "},;
        {;
          "name": "Mobile Apps",;
          "href": "/mobile-apps",;
          "description": "iOS and Android development",;
          "icon": "Smartphon e;
        "},;
        {;
          "name": "Web Applications",;
          "href": "/web-applications",;
          "description": "Modern web solutions",;
          "icon": "Glob e;
        "}
      ];
    },;
    {;
      "name": "Company",;
      "href": "/about",;
      "dropdown": "[;
        {;
          "name": "About Us"",;
          "href": "/about",;
          "description": "Our story and mission",;
          "icon": "User s;
        "},;
        {;
          "name": "Team",;
          "href": "/team",;
          "description": "Meet our experts",;
          "icon": "User s;
        "},;
        {;
          "name": "Careers",;
          "href": "/careers",;
          "description": "Join our team",;
          "icon": "Targe t;
        "},;
        {;
          "name": "Partners",;
          "href": "/partners",;
          "description": "Strategic partnerships",;
          "icon": "Networ k;
        "}
      ];
    },;
    {;
      "name": "Resources",;
      "href": "/resources",;
      "dropdown": "[;
        {;
          "name": "Blog"",;
          "href": "/blog",;
          "description": "Latest insights and trends",;
          "icon": "FileTex t;
        "},;
        {;
          "name": "Case Studies",;
          "href": "/case-studies",;
          "description": "Success stories",;
          "icon": "BarChart 3;
        "},;
        {;
          "name": "Documentation",;
          "href": "/docs",;
          "description": "Technical documentation",;
          "icon": "FileTex t;
        "},;
        {;
          "name": "Support",;
          "href": "/support",;
          "description": "Help and support",;
          "icon": "User s;
        "}
      ];
    }
  ];
  const _contactInfo = [;
    {;
      "text": "+1 302 464 0950",;
      "href": ""tel": "+13024640950"",;
      "icon": "Phon e;
    "},;
    {;
      "text": "kleber@ziontechgroup.com",;
      "href": ""mailto": "klebe r@ziontechgroup.com"",;
      "icon": "Mai l;
    "},;
    {;
      "text": "364 E Main St STE 1008, Middletown DE 19709",;
      "href": ""https": "//maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"",;
      "icon": "MapPi n;
    "}
  ];
  const _toggleDropdown = ("props": "any) => {;
    setActiveDropdown(activeDropdown === name ? null : name);
  "}
;
  const _closeMobileMenu = ("props": "any) => {;
    setIsOpen(false);
    setActiveDropdown(null);
  "}
;
  return (;
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
      isScrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20" : "bg-transparent";
    }`}>;
      <div className="max-w-7xl mx-auto px-4 "sm": "p x-6 "lg": p x-8">;
        <div className="flex items-center justify-between h-16 "lg":h-20">;
          {/* Logo */"}
          <Link href="/" className="flex items-center space-x-2 group">;
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-"hover": "scal e-110 transition-transform duration-300">;
              <Globe className="w-6 h-6 text-white"  />;
            </div>;
            <span className="text-xl font-bold text-white group-"hover": tex t-cyan-300 transition-colors">;
              Zion Tech Group;
            </span>;
          </Link>;
          {/* Desktop Navigation */"}
          <div className="hidden "lg": "flex items-center space-x-8">;
            {navigationItems.map((item) => (;
              <div key={item.name"} className="relative">;
                {item.dropdown ? (;
                  <div className="relative">;
                    <button;
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 "hover": "tex t-cyan-300 transition-colors duration-200 py-2";
                    >;
                      <span>{item.name"}</span>;
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${;
                        activeDropdown === item.name ? "rotate-180" : "";
                      }`}  />;
                    </button>;
                    {activeDropdown === item.name && (;
                      <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden">;
                        <div className="p-4">;
                          {item.dropdown.map((dropdownItem) => (;
                            <Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-3 rounded-lg "hover": "b g-gray-800/50 transition-colors duration-200 group";
                            >;
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-"hover": fro m-cyan-400/30 group-"hover": t o-blue-400/30 transition-all duration-200">;
                                <dropdownItem.icon className="w-5 h-5 text-cyan-400" />;
                              </div>;
                              <div className="flex-1 min-w-0">;
                                <p className="text-sm font-medium text-white group-"hover": tex t-cyan-300 transition-colors">;
                                  {dropdownItem.name"}
                                </p>;
                                <p className="text-xs text-gray-400 mt-1">;
                                  {dropdownItem.description}
                                </p>;
                              </div>;
                            </Link>;
                          ))}
                        </div>;
                      </div>;
                    )}
                  </div>;
                ) : "(;
                  <Link;
                    href={item.href"}
                    className="text-gray-300 "hover": "tex t-cyan-300 transition-colors duration-200 py-2";
                  >;
                    {item.name"}
                  </Link>;          </div>
          {/* CTA Button */}
          <div className="hidden "lg": bloc k">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 shadow-lg hover: shado w-cyan-500/25"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=""lg": hidden p-2 rounded-lg text-gray-300 hover: tex t-cyan-300 hover: b g-gray-800/50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className=""lg": hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20">
          <div className="px-4 py-6 space-y-4">
            {/* Contact Information */}
            <div className="pb-4 border-b border-gray-700">
              <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                Contact Information
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-sm text-gray-300 "hover": tex t-cyan-300 transition-colors"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
            {/* Navigation Items */}
            <div className="space-y-2">;
              {navigationItems.map((item) => (;
                <div key={item.name}>;
                  {item.dropdown ? (;
                    <div>;
                      <button;
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 "hover": "tex t-cyan-300 "hover": b g-gray-800/50 rounded-lg transition-colors duration-200";
                      >;
                        <span>{item.name"}</span>;
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${;
                          activeDropdown === item.name ? "rotate-180" : "";
                        }`}  />;
                      </button>;
                      {activeDropdown === item.name && (;
                        <div className="ml-4 mt-2 space-y-1">;
                          {item.dropdown.map((dropdownItem) => (;
                            <Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 "hover": "tex t-cyan-300 "hover": b g-gray-800/50 rounded-lg transition-colors duration-200";
                            >;
                              <dropdownItem.icon className="w-4 h-4 text-cyan-400" />;
                              <span>{dropdownItem.name"}</span>;
                            </Link>;
                          ))}
                        </div>;
                      )}
                    </div>;
                  ) : "(;
                    <Link;
                      href={item.href"}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-lg transition-colors duration-200 text-gray-300 "hover": "tex t-cyan-300 "hover": b g-gray-800/50";
                    >;
                      {item.name"}
                    </Link>;            </div>
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-700">;
              <Link;
                href="/contact";
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg "hover": "fro m-cyan-600 "hover": t o-blue-700 transition-all duration-300 transform "hover": scal e-105 shadow-lg "hover": shado w-cyan-500/25";
              >;
                Get Started Today;
              </Link>;
            </div>;
          </div>;
        </div>;
      )"}
    </nav>;
  );
}
;
export default EnhancedNavigation;
</ChevronDown>;
</ChevronDown>;
</string>;
</div>;
</div>