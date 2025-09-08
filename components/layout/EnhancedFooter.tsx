

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";



const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();




  const company = null;
  ];
  const resources = null;
  ];
  const socialLinks = null;
const EnhancedFooter: React.FC = () => {const currentYear = new Date().getFullYear();
import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Globe
  Twitter, Linkedin, Facebook, Instagram
  ArrowRight, Rocket, Brain, Cpu, Shield
  Star, Users, TrendingUp, Zap
} from 'lucide-react'
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: 'Next-Generation AI'
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' }
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' }
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  }
  {
    title: 'Cutting-Edge IT'
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' }
      { name: '5G Private Networks', href: '/5g-private-network-solutions' }
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    ]
  }
  {
    title: 'Innovative SaaS'
    services: [
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' }
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' }
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' }
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' }
    ]
  }
]
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Case Studies', href: '/case-studies' }
  { name: 'Blog', href: '/blog' }
  { name: 'Resources', href: '/resources' }
]
const supportLinks = [
  { name: 'Contact Support', href: '/contact' }
  { name: 'Documentation', href: '/docs' }
  { name: 'API Reference', href: '/api' }
  { name: 'Status Page', href: '/status' }
  { name: 'Security', href: '/security' }
  { name: 'Privacy Policy', href: '/privacy' }
]
const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin }
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe }]
export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Services', href: '/ai-services' }
    { name: 'IT Services', href: '/it-services' }
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Security', href: '/security' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },;
    { name: 'Security', href: '/security' },;
    { name: 'Case Studies', href: '/case-studies' },;
  ];
  const company = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'News', href: '/news' }
    { name: 'Partners', href: '/partners' }
  ];
  const resources = [
    { name: 'Blog', href: '/blog' }
    { name: 'Documentation', href: '/docs' }
    { name: 'Support', href: '/support' }
    { name: 'FAQ', href: '/faq' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin }
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github }
  ];


  return (



const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe;
  Twitter, Linkedin, Facebook, Instagram;
  ArrowRight, Rocket, Brain, Cpu, Shield;
  Star, Users, TrendingUp, Zap
 } from 'lucide-react';
const contactInfo = null;
  ];


      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12'    />;
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'    />;
          {/* Company Info */}

          {/* Services */}
          <div    />
            <h3 className='text-lg font-semibold mb-4'    />Services</h3>
            <ul className='space-y-2'    />
              <li    />
                <Link href='/services/ai-services' className='text-gray-300 hover:text-white transition-colors'    />
                  AI Services
                </Link>              </li>
              <li    />
                <Link href='/services/it-services' className='text-gray-300 hover:text-white transition-colors'    />
                  IT Services
                </Link>
              </li>
              <li    />
                <Link href='/services/micro-saas' className='text-gray-300 hover:text-white transition-colors'    />
                  Micro SaaS
                </Link>
              </li>
              <li    />
                <Link href='/services/ai-ops-copilot' className='text-gray-300 hover:text-white transition-colors'    />
                  AI Ops Copilot
                </Link>
              </li>
              <li    />
                <Link href='/services/security-copilot' className='text-gray-300 hover:text-white transition-colors'    />
                  Security Copilot
                </Link>
              </li>
              <li    />
                <Link href='/services/data-platform' className='text-gray-300 hover:text-white transition-colors'    />
                  Data Platform
                </Link>
              </li>
              <li    />
                <Link href='/services/martech-automation' className='text-gray-300 hover:text-white transition-colors'    />
                  MarTech Automation
                </Link>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div    />
            <h3 className='text-lg font-semibold mb-4'    />Solutions</h3>
            <ul className='space-y-2'    />
              <li    />
                <Link href='/solutions/enterprise' className='text-gray-300 hover:text-white transition-colors'    />
                  Enterprise Solutions
                </Link>              </li>
              <li    />
                <Link href='/solutions/small-business' className='text-gray-300 hover:text-white transition-colors'    />
                  Small Business
                </Link>
              </li>
              <li    />
                <Link href='/solutions/startups' className='text-gray-300 hover:text-white transition-colors'    />
                  Startups
                </Link>
              </li>
              <li    />
                <Link href='/solutions' className='text-gray-300 hover:text-white transition-colors'    />
                  Solutions Overview
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div    />
            <h3 className='text-lg font-semibold mb-4'    />Company</h3>
            <ul className='space-y-2 mb-6'    />
              <li    />
                <Link href='/about' className='text-gray-300 hover:text-white transition-colors'    />
                  About Us
                </Link>              </li>
              <li    />
                <Link href='/careers' className='text-gray-300 hover:text-white transition-colors'    />
                  Careers
                </Link>
              </li>
              <li    />
                <Link href='/blog' className='text-gray-300 hover:text-white transition-colors'    />
                  Blog
                </Link>
              </li>
              <li    />
                <Link href='/products' className='text-gray-300 hover:text-white transition-colors'    />
                  Products
                </Link>
              </li>
            </ul>
            <h3 className='text-lg font-semibold mb-4'    />Contact</h3>
            <div className='space-y-3'    />
              <div className='flex items-center space-x-2'    />
                <Mail className='w-4 h-4 text-blue-400'    />
                <a href='mailto:info@ziontechgroup.com' className='text-gray-300 hover:text-white transition-colors'    />
                  info@ziontechgroup.com
                </a>
              </div>
              <div className='flex items-center space-x-2'    />
                <Phone className='w-4 h-4 text-blue-400'    />
                <span className='text-gray-300'    />+1 (555) 123-4567</span>
              </div>
              <div className='flex items-start space-x-2'    />
                <MapPin className='w-4 h-4 text-blue-400 mt-1'    />
                <span className='text-gray-300'    />123 Tech Street<br    />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>
      {/* Newsletter Section */}
      <div className='border-t border-gray-700 py-8'    />
        <div className='container mx-auto px-4'    />
          <div className='text-center'    />
            <h3 className='text-lg font-semibold mb-2'    />Stay Updated</h3>
            <p className='text-gray-300 mb-4'    />Subscribe to our newsletter for the latest tech insights and updates.</p>
            <div className='flex max-w-md mx-auto'    />
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500'
                 />
              <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors'    />
                Subscribe
              </button>
            </div>          </div>
        </div>
      </div>
      {/* Bottom Footer */}


                  Web Development;
                </Link>;
              </li>;
              <li    />;
                  Mobile Apps;
                </Link>;
              </li>;
              <li    />;
                  AI Solutions;
                </Link>;
              </li>;
              <li    />;

                  Cloud Services;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Company */}


                  Contact;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Contact Info */}


              © {current_year} Zion Tech Group. All rights reserved.;
            </p>;"
            <div className=\"flex space - x-6 mt-4 md:mt-0\"    />;
              <Link;"
                href=\'/privacy\';"
                className=\"text - gray - 400 hover:text - white text-sm transition-colors\"    />

                Privacy Policy;
              </Link>;

              <Link;
                href="/terms";
                className="text - gray - 400 hover:text - white text - sm transition - colors";
              >;

                Terms of Service;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;



}


export default EnhancedFooter;"



};

export default EnhancedFooter;






