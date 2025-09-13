import React, { useState } from 'react';

import React from 'react';
import Link from 'next / link';


import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 


  Instagram,;} from 'lucide-react';import { ;


} from 'lucide-react';

const EnhancedFooter2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail('');
    // Show success message
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { number: "500+", label: "Clients Worldwide", icon: Users, color: "from-cyan-500 to-blue-500" },
    { number: "50+", label: "Industry Awards", icon: Award, color: "from-yellow-500 to-orange-500" },
    { number: "24/7", label: "Support Available", icon: Clock, color: "from-purple-500 to-pink-500" },
    { number: "50+", label: "Countries Served", icon: Globe, color: "from-emerald-500 to-teal-500" }
  ];

  const socialLinks = [
    { href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
    { href: "https://twitter.com/ziontechgroup", icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
    { href: "https://github.com/ziontechgroup", icon: Github, label: "GitHub", color: "hover:bg-gray-700" },
    { href: "https://youtube.com/@ziontechgroup", icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
    { href: "https://facebook.com/ziontechgroup", icon: Facebook, label: "Facebook", color: "hover:bg-blue-700" },
    { href: "https://instagram.com/ziontechgroup", icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: 'Innovative 2025 Showcase', href: '/innovative-2025-services-showcase' },
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'Cloud Infrastructure', href: '/cloud-platform' },
        { label: 'Data Analytics', href: '/data-analytics' },
        { label: 'Process Automation', href: '/process-automation' },
        { label: 'Micro SAAS Solutions', href: '/micro-saas' }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <HeartIcon className="w-4 h-4" /> },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cog className="w-4 h-4" /> },
        { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: <Target className="w-4 h-4" /> },
        { name: 'Government Solutions', href: '/government-technology-solutions', icon: <ShieldCheck className="w-4 h-4" /> }
      ]
    },
    {
      title: "Company",
      links: [
        { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <TargetIcon className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/leadership', icon: <Users className="w-4 h-4" /> },
        { name: 'Company Culture', href: '/culture', icon: <HeartIcon className="w-4 h-4" /> },
        { name: 'Our Values', href: '/values', icon: <StarIcon className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'News & Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
        { name: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <BarChart className="w-4 h-4" /> },
        { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
        { name: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Events', href: '/events-webinars', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Training', href: '/training', icon: <Lightbulb className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> },
    { name: 'Status Page', href: '/status', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Developer Resources', href: '/developer-resources', icon: <Code className="w-4 h-4" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

                <Rocket className="w-7 h-7 text-white" />
              
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />

                  {section.title === 'Services' && <Rocket className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Solutions' && <Target className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Company' && <Building className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-cyan-400 mr-2" />}
                      <Link
                      </Link>

            
                <Phone className="w-4 h-4 text-cyan-400" />
                <Mail className="w-4 h-4 text-cyan-400" />
                <MapPin className="w-4 h-4 text-cyan-400" />
                <Globe className="w-4 h-4 text-cyan-400" />

                    <Link
                    </Link>

                  <Globe className="w-5 h-5 text-cyan-400 mr-2" />

                  <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                    <ArrowRight className="w-4 h-4" />

                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />

export default EnhancedFooter2025;
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {





                    <Link


                    <Link

                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <MapPin className='w - 4 h - 4 text - pink - 400' />;
                  <Star className="w - 7 h - 7 text - white" />;
                  <Phone className="w - 4 h - 4 text - cyan - 400" />;
                  <Mail className="w - 4 h - 4 text - purple - 400" />;
                  <MapPin className="w - 4 h - 4 text - pink - 400" />;
                    <Link;
                    <Link;











                  <Link

                  <Link
                    </Link>))}
                  <Link;
                  <Link;










                  <Link


                  </Link>














                  </Link>))}
                  <Link;
                  <Link;
                  </Link>))}

























export default EnhancedFooter2025;


export default EnhancedFooter2025);
export default EnhancedFooter2025;



