'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  Youtube, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Target, 
  BarChart, 
  Settings, 
  HelpCircle, 
  Star, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  Server, 
  Lock, 
  Key, 
  Wifi, 
  MessageSquare, 
  ShoppingCart} from 'lucide-react'

const Footer: React.FC = () => {
  
  return (
    <footer className="bg-slate-900 text-white">
      <div>
          <div>
          {/* Company Info */}

          <div>
          <div>
              <div>
                <Brain />
              </div><span className="text-xl font-bold">Zion Tech Group</span>
            </div><p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, transforming businesses through innovative technology and expert consulting.
            </p>
            <div>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Brain />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Cloud />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Code />
              </a>
            </div></div>{/* Services */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>{/* Solutions */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/enterprise-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/blockchain" className="text-gray-300 hover:text-cyan-400 transition-colors">Blockchain</Link></li>
              <li><Link to="/iot" className="text-gray-300 hover:text-cyan-400 transition-colors">IoT</Link></li>
              <li><Link to="/robotics" className="text-gray-300 hover:text-cyan-400 transition-colors">Robotics</Link></li>
            </ul>
          </div>{/* Contact */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div>
          <div>
                <Phone />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div><div>
                <Mail />
                <span className="text-gray-300">info@ziontech.com</span>
              </div><div>
                <MapPin />
                <span className="text-gray-300">123 Tech Street, Innovation City</span>
              </div></div></div></div>{/* Bottom Section */}

        <div>
          <div>
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div>
              <Link to="/legal/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/legal/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div></div></div></div></footer>
  );
};

export default Footer