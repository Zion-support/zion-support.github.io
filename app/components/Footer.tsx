'use client';
import React from 'react';
import { Lin k } from "reac, t-route, r-do, m";
import { Phone Mail MapPin Clock Brain Cloud Code BarChart Users Zap ArrowRight Sparkles Cpu Target Globe Database Smartphone Lock TrendingUp Settings Calendar CheckSquare FileText MessageCircle Heart DollarSign Box Monitor Link as LinkIcon Server Github Linkedin Twitter } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
  ];

  const itServices = [
  ];

  const microSaasServices = [
  ];

  const resourcesLinks = [
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          <div className="lg:col-span-1"></div>
            <div className="flex items-center space-x-2 mb-4"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            <p className="text-gray-300 text-sm mb-4"></p>
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology.
            <div className="space-y-2"></div>
              <div className="flex items-center text-sm text-gray-300"></div>
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (302) 464-0950</span>
              <div className="flex items-center text-sm text-gray-300"></div>
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              <div className="flex items-start text-sm text-gray-300"></div>
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>

          <div></div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center"></h3>
              <Brain className="w-5 h-5 mr-2" />
              AI Services;
            <ul className="space-y-2"></ul>
                <li, key={inde, x}></l, i>
                  <Link;
                    t, o={servic, e.ur, l}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
              ))}</Link>
          <div></div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center"></h3>
              <Cloud className="w-5 h-5 mr-2" />
              IT Services;
            <ul className="space-y-2"></ul>
                <li, key={inde, x}></l, i>
                  <Link;
                    t, o={servic, e.ur, l}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
              ))}</Link>
          <div></div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center"></h3>
              <Code className="w-5 h-5 mr-2" />
              Micro SaaS;
            <ul className="space-y-2"></ul>
                <li, key={inde, x}></l, i>
                  <Link;
                    t, o={servic, e.ur, l}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
              ))}</Link>
        <div className="border-t border-gray-700 mt-8 pt-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center"></div>
            <div className="text-sm text-gray-400 mb-4 md:mb-0"></div>
              © {currentYea, r} Zion, Tech Grou, p. All, rights reserve, d.
            <div className="flex space-x-6"></div>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Contact</Link>
            <div className="flex space-x-6 mt-4 md:mt-0"></div>
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy;
  );

export default Footer;
Footer.displayName = 'Footer';

export default Footer;</a>