
import React from 'react',
import React from 'react';
=======

import React from 'react';

=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion } from 'framer-motion';

import {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Star,
  Shield,
  Brain,
  DollarSign,
  Dna,
  Rocket,
  Users,
  Award,
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,;
  Github,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield, ;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Brain, DollarSign, Dna, Rocket, Users, Award, Zap;
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
{
  name: 'AI Predictive Enterprise Analytics', href: '/ai-predictive-enterprise-analytics'
}
{
  name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success'
}
{
  name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator'
}
{
  name: 'AI Autonomous Sales Intelligence', href: '/ai-autonomous-sales-intelligence'
}]
}
{
  title: 'Cybersecurity & Quantum', services: [ {
  name: 'Quantum Encryption Platform', href: '/quantum-encryption-platform'
}
{
  name: 'AI Autonomous Threat Hunter', href: '/ai-autonomous-threat-hunter'
}
{
  name: 'Quantum Zero Trust Security', href: '/quantum-zero-trust-security'
}
{
  name: 'AI Autonomous Vulnerability Scanner', href: '/ai-autonomous-vulnerability-scanner'
}
{
  name: 'Quantum Secure Communication', href: '/quantum-secure-communication'
}]
}
{
  title: 'Fintech & Blockchain', services: [ {
  name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform'
}
{
  name: 'AI Autonomous Wealth Management', href: '/ai-autonomous-wealth-management'
}
{
  name: 'Quantum Blockchain Finance', href: '/quantum-blockchain-finance'
}
{
  name: 'AI Autonomous Insurance Platform', href: '/ai-autonomous-insurance-platform'
}
{
  name: 'Quantum Payment Processing', href: '/quantum-payment-processing'
}]
}
{
  title: 'Healthcare & Biotech', services: [ {
  name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics'
}
{
  name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform'
}
{
  name: 'AI Autonomous Patient Care', href: '/ai-autonomous-patient-care'
}
{
  name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis'
}
{
  name: 'AI Autonomous Clinical Trials', href: '/ai-autonomous-clinical-trials'
}]
}];
{
  /* Background Effects */
}<div className="absolute inset-0 overflow-hidden" > <div className="absolute inset-0 bg-[radial-gradient (circle at 30% 20%, rgba (6, 182, 212, 0.05), transparent 50%) ]" ></div> <div className="absolute inset-0 bg-[radial-gradient (circle at 70% 80%, rgba (139, 92, 246, 0.05), transparent 50%) ]" ></div> </div> <motion.div initial= {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';


  {
    title: 'AI & Automation'
    services: [
      {
        name: 'AI Autonomous Business Processor'
        href: '/ai-autonomous-business-processor'
      }
      {
        name: 'AI Predictive Enterprise Analytics'
        href: '/ai-predictive-enterprise-analytics'
      }
      {
        name: 'AI Autonomous Customer Success'
        href: '/ai-autonomous-customer-success'
      }
      {
        name: 'AI Autonomous Marketing Orchestrator'
        href: '/ai-autonomous-marketing-orchestrator'
      }
      {
        name: 'AI Autonomous Sales Intelligence'
        href: '/ai-autonomous-sales-intelligence'
      }
    ]
  }
  {
    title: 'Cybersecurity & Quantum'
    services: [
      {
        name: 'Quantum Encryption Platform'
        href: '/quantum-encryption-platform'
      }
      {
        name: 'AI Autonomous Threat Hunter'
        href: '/ai-autonomous-threat-hunter'
      }
      {
        name: 'Quantum Zero Trust Security'
        href: '/quantum-zero-trust-security'
      }
      {
        name: 'AI Autonomous Vulnerability Scanner'
        href: '/ai-autonomous-vulnerability-scanner'
      }
      {
        name: 'Quantum Secure Communication'
        href: '/quantum-secure-communication'
      }
    ]
  }
  {
    title: 'Fintech & Blockchain'
    services: [
      {
        name: 'Quantum Financial Trading Platform'
        href: '/quantum-financial-trading-platform'
      }
      {
        name: 'AI Autonomous Wealth Management'
        href: '/ai-autonomous-wealth-management'
      }
      {
        name: 'Quantum Blockchain Finance'
        href: '/quantum-blockchain-finance'
      }
      {
        name: 'AI Autonomous Insurance Platform'
        href: '/ai-autonomous-insurance-platform'
      }
      {
        name: 'Quantum Payment Processing'
        href: '/quantum-payment-processing'
      }
    ]
  }
  {
    title: 'Healthcare & Biotech'
    services: [
      {
        name: 'AI Autonomous Medical Diagnostics'
        href: '/ai-autonomous-medical-diagnostics'
      }
      {
        name: 'Quantum Drug Discovery Platform'
        href: '/quantum-drug-discovery-platform'
      }
      {
        name: 'AI Autonomous Patient Care'
        href: '/ai-autonomous-patient-care'
      }
      { name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis' }
      {
  {
    title: 'Cybersecurity & Quantum',
    services: [;
      { name: 'Quantum Encryption Platform', href: '/quantum - encryption - platform' },
      { name: 'AI Autonomous Threat Hunter', href: '/ai - autonomous - threat - hunter' },
      { name: 'Quantum Zero Trust Security', href: '/quantum - zero - trust - security' },
      { name: 'AI Autonomous Vulnerability Scanner', href: '/ai - autonomous - vulnerability - scanner' },
      { name: 'Quantum Secure Communication', href: '/quantum - secure - communication' }
    ];
  }
  {
    title: 'Fintech & Blockchain',
    services: [;
      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading - platform' },
      { name: 'AI Autonomous Wealth Management', href: '/ai - autonomous - wealth - management' },
      { name: 'Quantum Blockchain Finance', href: '/quantum - blockchain - finance' },
      { name: 'AI Autonomous Insurance Platform', href: '/ai - autonomous - insurance - platform' },
      { name: 'Quantum Payment Processing', href: '/quantum - payment - processing' }
    ];
  }
  {
    title: 'Healthcare & Biotech',
    services: [;
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai - autonomous - medical - diagnostics' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum - drug - discovery - platform' },
      { name: 'AI Autonomous Patient Care', href: '/ai - autonomous - patient - care' },
      { name: 'Quantum Genomic Analysis', href: '/quantum - genomic - analysis' },
      { name: 'AI Autonomous Clinical Trials', href: '/ai - autonomous - clinical - trials' }
    ];

];


]

const _serviceCategories = [
  {_title: 'AI & Automation', _services: [
      { name: 'AI Autonomous Business Processor', _href: '/ai-autonomous-business-processor'},
      {_name: 'AI Predictive Enterprise Analytics', _href: '/ai-predictive-enterprise-analytics'},
      {_name: 'AI Autonomous Customer Success', _href: '/ai-autonomous-customer-success'},
      {_name: 'AI Autonomous Marketing Orchestrator', _href: '/ai-autonomous-marketing-orchestrator'},
      {_name: 'AI Autonomous Sales Intelligence', _href: '/ai-autonomous-sales-intelligence'}
    ]
  },
  {_title: 'Cybersecurity & Quantum', _services: [
      { name: 'Quantum Encryption Platform', _href: '/quantum-encryption-platform'},
      {_name: 'AI Autonomous Threat Hunter', _href: '/ai-autonomous-threat-hunter'},
      {_name: 'Quantum Zero Trust Security', _href: '/quantum-zero-trust-security'},
      {_name: 'AI Autonomous Vulnerability Scanner', _href: '/ai-autonomous-vulnerability-scanner'},
      {_name: 'Quantum Secure Communication', _href: '/quantum-secure-communication'}
    ]
  },
  {_title: 'Fintech & Blockchain', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform'},
      {_name: 'AI Autonomous Wealth Management', _href: '/ai-autonomous-wealth-management'},
      {_name: 'Quantum Blockchain Finance', _href: '/quantum-blockchain-finance'},
      {_name: 'AI Autonomous Insurance Platform', _href: '/ai-autonomous-insurance-platform'},
      {_name: 'Quantum Payment Processing', _href: '/quantum-payment-processing'}
    ]
  },
  {_title: 'Healthcare & Biotech', _services: [
      { name: 'AI Autonomous Medical Diagnostics', _href: '/ai-autonomous-medical-diagnostics'},
      {_name: 'Quantum Drug Discovery Platform', _href: '/quantum-drug-discovery-platform'},
      {_name: 'AI Autonomous Patient Care', _href: '/ai-autonomous-patient-care'},
      {_name: 'Quantum Genomic Analysis', _href: '/quantum-genomic-analysis'},
      {_name: 'AI Autonomous Clinical Trials', _href: '/ai-autonomous-clinical-trials'}
    ]
  }
],

const companyLinks = [

  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Service Categories */}
          {serviceCategories && serviceCategories.map((category, index) => (;
            <motion&& motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      href={service.href}
                      className="text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 text - sm flex items - center group";
                    >;
                      <ArrowRight className="w - 3 h - 3 mr - 2 group - hover:translate - x-1 transition - transform duration - 300" />;
                      {service.name}
                      href={service && service.href}
                      className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group'>;
                      <ArrowRight className='w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300' />                      {service && service.name}                {category && category.title}
              </h4>;
              <ul className="space-y-2">;
                {category && category.services.map((service, serviceIndex) => (;
                  <li key={serviceIndex}>;
                    <Link
                      href={service && service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group">;
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />;
                      {service && service.name}
                    </Link>;
                  </li>;


=======
=======

        {/* Additional Links */}


          {/* Company Links */}
          <motion&& motion.div
        {/* Additional Links */}


          {/* Company Links */}
          <motion&& motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>          {/* Company Links */}

          {/* Company Links */}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}


                    href={link && link.href}
                    className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm'>              Company;
            </h4>;
            <ul className="space-y-2">;
              {companyLinks && companyLinks.map((link, index) => (;
                <li key={index}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}


=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Resources */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href={link.href}
                    className="text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 text - sm";
                  >;
                    {link.name}
                    href={link && link.href}
                    className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm'>              Resources;
            </h4>;
            <ul className="space-y-2">;
              {resourceLinks && resourceLinks.map((link, index) => (;
                <li key={index}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}


=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Social Media */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}



                </Link>


              ))}

            </div>;
          </motion && motion.div>;
        </div>;





        {/* Newsletter Signup */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
=======                  className='w-12 h-12 bg-gray-800 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group'
                >
                  <social.icon className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300' />                  className="w-12 h-12 bg-gray-800 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>

=======

                </Link>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </div>
          </motion.div>
        </div>

        >
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Stay Updated with Latest Innovations
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Get exclusive access to our latest AI, quantum computing, and
              emerging technology insights. Be the first to know about
              breakthrough solutions and industry trends.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>


=======


=======


                </Link>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ))}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </motion && motion.div>;
        </div>;


=======



=======
          transition={{ duration: 0.6, delay: 0.5 }}
          className='bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12'


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12"
        >

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                Subscribe;
              </button>;
            </div>;
          </div>;

=======


        {/* Bottom Bar */}
        <motion&& motion.div
        </motion.div>;
        {/* Bottom Bar */}
        <motion.div;
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}

=======


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Bottom Bar */}
        <motion&& motion.div
=======
        </motion.div>;
        {/* Bottom Bar */}
        <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='border-t border-gray-800 pt-8'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>
              © 2026 Zion Tech Group. All rights reserved.
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='border-t border-gray-800 pt-8'

        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>
              © 2026 Zion Tech Group. All rights reserved.
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300 ml-2'>;
                Privacy Policy;
              </Link>;
              <span className='mx-2'>|</span>;
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300'>;
<<<<<<< HEAD
<<<<<<< HEAD
    </footer>
=======
=======                Terms of Service;
              </Link>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <div className='flex items-center text-gray-400 text-sm'>;
                <Star className='w-4 h-4 text-yellow-400 mr-1' />;
                Trusted by 2500+ Companies;
              </div>;
              <div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></div>;
              <div className='text-cyan-400 text-sm font-semibold'>                99 && 99.9% Uptime        >;
          <div className="flex flex-col md: flex-row justify-between items-center">;
            <div className="text-gray-400 text-sm mb-4 md:mb-0">;
              © 2026 Zion Tech Group. All rights reserved. | ;
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">;
                Privacy Policy;
              </Link>;
              <span className="mx-2">|</span>;
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">;
                Terms of Service;
              </Link>;
            </div>;
            <div className="flex items-center space-x-2">;
              <div className="flex items-center text-gray-400 text-sm">;
                <Star className="w-4 h-4 text-yellow-400 mr-1" />;
                Trusted by 2500+ Companies;
              </div>;
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>;
              <div className="text-cyan-400 text-sm font-semibold">;
                99 && 99.9% Uptime;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;
      </div>;
    </footer>;
  );
}

=======
  );


    </footer>
  );

}
<<<<<<< HEAD

}
}
}
    </footer>
  );
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  );
=======

}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
