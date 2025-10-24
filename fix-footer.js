import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud    } from 'lucide-react'
import React from "react";
import { Link  } from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud    } from "lucide-react";
const fs = require('fs');
;
const footerContent = `'use client';
;
const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear();
  const aiServices = [;
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },;
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },;
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },;
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },;
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },;
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },;
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },;
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }
  ];
;
  const itServices = [;
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },;
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },;
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },;
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },;
    { name: 'DevOps', url: '/devops', description: 'Development operations' },;
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },;
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },;
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ];
;
  const company = [;
    { name: 'About Us', url: '/about' },;
    { name: 'Our Team', url: '/team' },;
    { name: 'Careers', url: '/careers' },;
    { name: 'Contact', url: '/contact' }
  ];
;
  const resources = [;
    { name: 'Documentation', url: '/docs' },;
    { name: 'API Reference', url: '/api' },;
    { name: 'Blog', url: '/blog' },;
    { name: 'Case Studies', url: '/case-studies' }
  ];
;
  const legal = [;
    { name: 'Privacy Policy', url: '/privacy' },;
    { name: 'Terms of Service', url: '/terms' },;
    { name: 'Cookie Policy', url: '/cookies' },;
    { name: 'GDPR Compliance', url: '/gdpr' }
  ];
;
  return (<footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}"
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white"  />;";
const fs = require("fs");
const footerContent = `"use client";
const Footer: React.FC = () => {;
const currentYear = new Date().getFullYear();
const aiServices = [{ name: "AI Analytics & BI", url: "/ai-analytics", description: "Business intelligence" }

  const aiServices = [""
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence" },"'"
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation" },"'"
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI" },"'"
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content" },"'"
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security" },"'"
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition" },"'"
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting" },"'"
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology" }
  ];"

  const itServices = ["'"
    { name: 'Web Development', url: '/web-development', description: 'Custom websites" },"'"
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps" },"'"
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions" },"'"
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services" },"'"
    { name: 'DevOps', url: '/devops', description: 'Development operations" },"'"
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights" },"'"
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things" },"'"
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology" }
  ];"

  const company = ["'"
    { name: 'About Us', url: '/about" },"'"
    { name: 'Our Team', url: '/team" },"'"
    { name: 'Careers', url: '/careers" },"'"
    { name: 'Contact', url: '/contact" }
  ];"

  const resources = ["'"
    { name: 'Documentation', url: '/docs" },"'"
    { name: 'API Reference', url: '/api" },"'"
    { name: 'Blog', url: '/blog" },"'"
    { name: 'Case Studies', url: '/case-studies" }
  ];"

  const legal = ["'"
    { name: 'Privacy Policy', url: '/privacy" },"'"
    { name: 'Terms of Service', url: '/terms" },"'"
    { name: 'Cookie Policy', url: '/cookies" },"'"
    { name: 'GDPR Compliance', url: '/gdpr" }
  ];"

    { name: "Predictive Analytics", url: "/predictive-analytics", description: "Forecasting" }

    { name: "Speech & Voice AI", url: "/ai-voice-assistant", description: "Voice technology" }
  ];
const itServices = [{ name: "Web Development", url: "/web-development", description: "Custom websites" }

    { name: "Mobile Development", url: "/mobile-development", description: "iOS & Android apps" }

    { name: "Cloud Migration", url: "/cloud-migration", description: "Cloud solutions" }

    { name: "Cybersecurity", url: "/cybersecurity", description: "Security services" }

    { name: "DevOps", url: "/devops", description: "Development operations" }

    { name: "Data Analytics", url: "/data-analytics", description: "Data insights" }

    { name: "IoT Solutions", url: "/iot-solutions", description: "Internet of Things" }

    { name: "Blockchain", url: "/blockchain", description: "Blockchain technology" }
  ];
const company = [{ name: "About Us", url: "/about" }

    { name: "Our Team", url: "/team" }

    { name: "Careers", url: "/careers" }

    { name: "Contact", url: "/contact" }
  ];
const resources = [{ name: "Documentation", url: "/docs" }

    { name: "API Reference", url: "/api" }

    { name: "Blog", url: "/blog" }

    { name: "Case Studies", url: "/case-studies" }
  ];
const legal = [{ name: "Privacy Policy", url: "/privacy" }

    { name: "Terms of Service", url: "/terms" }

    { name: "Cookie Policy", url: "/cookies" }

    { name: "GDPR Compliance", url: "/gdpr" }
  ]
  return (<footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info*/}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"> <Brain className="w-5 h-5 text-white" />
              </div>
              <span className=text-xl font-bold>Zion Tech Group</span>
            </div>
            <p className=text-gray-300 text-sm>
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology."
            </p>
            <div className=flex space-x-4>
              <a href="# className="text-gray-400 hover:text-white transition-colors">"
                <Github className=w-5 h-5 />
              </a>
              <a href=# className=text-gray-400 hover:text-white transition-colors>
                <Linkedin className=w-5 h-5 />
              </a>
              <a href=# className=text-gray-400 hover:text-white transition-colors>
                <Twitter className=w-5 h-5 />
              </a>
            </div>
          </div>
          {/* AI Services */}"
          <div className="space-y-4">
            <h3 className=text-lg font-semibold flex items-center>
              <Brain className="w-5 h-5 mr-2 text-purple-400 /">"
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"> <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
          {/* IT Services */}"
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-cyan-400"  />;
              IT Services;"
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (<li key={index}>
                  <Link;"
                    href={service.url}"
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">"
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"  />;
          </div>

          {/* IT Services*/}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center"> <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"> <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
          {/* Company & Resources */}"
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item, index) => (<li key={index}>
                    <Link 
                      href={item.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm">;
                      {item.name}
                    </Link>
                  </li>);
                ))}
              </ul>
            </div>
            <div>
              <h3 className=text-lg font-semibold mb-4>Resources</h3>
              <ul className=space-y-2>
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link "
                      href={item.url}"
                {resources.map((item, index) => (<li key={index}>
                    <Link 
                      href={item.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm">;
                      {item.name}
                    </Link>
                  </li>);
                ))}
              </ul>
            </div>
            <div>
              <h3 className=text-lg font-semibold mb-4>Legal</h3>
              <ul className=space-y-2>
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link "
                      href={item.url}"
                {legal.map((item, index) => (<li key={index}>
                    <Link 
                      href={item.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm">;
                      {item.name}
                    </Link>
                  </li>);
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className=border-t border-gray-700 mt-8 pt-8>
          <div className=flex flex-col md:flex-row justify-between items-center>
            <div className="text-gray-400 text-sm">"
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className=flex items-center text-gray-400 text-sm>
                <Mail className="w-4 h-4 mr-2 /">"
                <a href=mailto:contact@ziontechgroup.com>contact@ziontechgroup.com</a>
              </div>
              <div className=flex items-center text-gray-400 text-sm>
                <Phone className="w-4 h-4 mr-2 /">
                <a href=tel:+1234567890>+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;` fs.writeFileSync("./app/components/Footer.tsx", footerContent) console.log("Footer component rewritten successfully!")
}}}})))