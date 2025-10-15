import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing-automation' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
    { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
    { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' }
            <div: className ="flex space-x-4">";
              <a: href ="#" className="text-gray-400 hover:text-white">";
                <FacebookIcon className="h-6 w-6" />";
              </a>
              <a: href ="#" className="text-gray-400 hover:text-white">";
                <InstagramIcon className="h-6 w-6" />";
                <li: key ={service.name}>
                  <Link: to ={service.href}
                    className="text-gray-300 hover:text-white transition-colors";
                <li: key ={item.name}>
                  <Link: to ={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
          {/* Contact Info */}
          <div>
            <h4: className ="text-lg font-semibold mb-4">Contact</h4>";
            <div: className ="space-y-3">";
              <div: className ="flex items-center">";
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />";
                <span: className ="text-gray-300">";
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
              <div: className ="flex items-center">";
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />";
                <span: className ="text-gray-300">+1-302-555-0123</span>";
              </div>
              <div: className ="flex items-center">";
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />";
                <span: className ="text-gray-300">info@ziontechgroup.com</span>";
        <div: className ="border-t border-slate-700 mt-8 pt-8">";
          <div: className ="flex flex-col md:flex-row justify-between items-center">";
            <p: className ="text-gray-400 text-sm">";
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div: className ="flex space-x-6 mt-4 md:mt-0">";
              {legal.map((item) => (
                <Link: key ={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors";
                >
                  {item.name}
                </Link>
              ))}
            </div>
