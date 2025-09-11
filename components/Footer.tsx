

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
import React from "react";
import Link from "next/link";
import {;
  Phone,;
  Mail,;
  MapPin,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  ArrowRight,;
<<<<<<< HEAD
} from "lucide-react";
import React from 'react;';
import Link from 'next/link';
export default function Footer() {;
import React from 'react';
import Link from 'next/link';
ursor/integrate-build-improve-and-re-verify-8f7d
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

<<<<<<< HEAD
import React from "react";
import Link from "next/link";
import {
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,;
} from "lucide-react";
import React from 'react;';
import Link from 'next/link';

=======

} from "lucide-react";

import React from 'react;';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import Link from './next / link';
import {
=======

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
import React from "react";
import Link from "next/link";
import {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
export default function Footer() {
=======
export default function Footer() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [

import React from './react';
import Link from './next / link';
import {
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,;
} from "lucide-react";
origin/main
import React from 'react;';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
origin/automation-improvements-final

export default function Footer() {
export default function Footer() {;
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: "AI Services", href: "/ai-services" },
      { name: "IT Services", href: "/it-services" },
      { name: "Micro SaaS", href: "/micro-saas" },
=======
  ArrowRight,
} from './lucide-react';
;
export default /**
 * Footer - Function description
 */
function Footer() {
  const current_year = new Date ().getFullYear ();
;
  const footer_links = {
    services: [;
      { name: "AI Services", href: "/ai - services" },
      { name: "IT Services", href: "/it - services" },
      { name: "Micro SaaS", href: "/micro - saas" },

<<<<<<< HEAD
origin/main
import React from 'react;';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
origin/automation-improvements-final

export default function Footer() {
export default function Footer() {;
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: "AI Services", href: "/ai-services" },
      { name: "IT Services", href: "/it-services" },
      { name: "Micro SaaS", href: "/micro-saas" },
      { name: "Blockchain", href: "/blockchain" },
      { name: "IoT Solutions", href: "/iot" },
      { name: "Cybersecurity", href: "/cybersecurity" },
    ],


      { name: "AI Services", href: "/ai-services" }
      { name: "IT Services", href: "/it-services" }
      { name: "Micro SaaS", href: "/micro-saas" }
      { name: "Blockchain", href: "/blockchain" }
      { name: "IoT Solutions", href: "/iot" }
      { name: "Cybersecurity", href: "/cybersecurity" }
    ]
    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise" }
      { name: "Startup Solutions", href: "/startup" }
      { name: "E-commerce", href: "/ecommerce" }
      { name: "Healthcare", href: "/industries/healthcare" }
      { name: "Finance", href: "/industries/finance" }
      { name: "Education", href: "/industries/education" }
    ]
    company: [
      { name: "About Us", href: "/about" }
      { name: "Our Team", href: "/team" }
      { name: "Careers", href: "/careers" }
      { name: "Case Studies", href: "/case-studies" }
      { name: "News", href: "/news" }
      { name: "Contact", href: "/contact" }
    ]
    resources: [
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise" },
      { name: "Startup Solutions", href: "/startup" },
      { name: "E - commerce", href: "/ecommerce" },
      { name: "Healthcare", href: "/industries / healthcare" },
      { name: "Finance", href: "/industries / finance" },
      { name: "Education", href: "/industries / education" },
    ],
    company: [;
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Case Studies", href: "/case - studies" },
      { name: "News", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [;

      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "White Papers", href: "/white - papers" },
      { name: "Support", href: "/support" },
    ],


      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Blockchain', href: '/blockchain' },
      { name: 'IoT Solutions', href: '/iot' },
      { name: 'Cybersecurity', href: '/cybersecurity' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/enterprise' },
      { name: 'Startup Solutions', href: '/startup' },
      { name: 'E-commerce', href: '/ecommerce' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Education', href: '/industries/education' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Support', href: '/support' }
    ]
<<<<<<< HEAD
export default function Footer() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function Footer() {;
  const currentYear = new Date().getFullYear();
  const footerLinks = {;
    services: [;
      { name: "AI Services", href: "/ai-services" },;
      { name: "IT Services", href: "/it-services" },;
      { name: "Micro SaaS", href: "/micro-saas" },;
      { name: "Blockchain", href: "/blockchain" },;
      { name: "IoT Solutions", href: "/iot" },;
      { name: "Cybersecurity", href: "/cybersecurity" },;
    ],;
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise" },;
      { name: "Startup Solutions", href: "/startup" },;
      { name: "E-commerce", href: "/ecommerce" },;
      { name: "Healthcare", href: "/industries/healthcare" },;
      { name: "Finance", href: "/industries/finance" },;
      { name: "Education", href: "/industries/education" },;
    ],;
    company: [;
      { name: "About Us", href: "/about" },;
      { name: "Our Team", href: "/team" },;
      { name: "Careers", href: "/careers" },;
      { name: "Case Studies", href: "/case-studies" },;
      { name: "News", href: "/news" },;
      { name: "Contact", href: "/contact" },;
    ],;
    resources: [;
      { name: "Blog", href: "/blog" },;
      { name: "Documentation", href: "/docs" },;
      { name: "API Reference", href: "/api" },;
      { name: "Tutorials", href: "/tutorials" },;
      { name: "White Papers", href: "/white-papers" },;
      { name: "Support", href: "/support" },;
    ],;

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };

  };
origin/automation-improvements-final
  };

      { name: "Blog", href: "/blog" }
      { name: "Documentation", href: "/docs" }
      { name: "API Reference", href: "/api" }
      { name: "Tutorials", href: "/tutorials" }
      { name: "White Papers", href: "/white-papers" }
      { name: "Support", href: "/support" }
    ]
  }
  return (
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}
<<<<<<< HEAD
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Zion Tech Group
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <div className="lg:col-span-2">;
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">;
              Zion Tech Group;
            </Link>;
            <p className="text-gray-300 mb-6 max-w-md">;
              Leading technology solutions provider specializing in AI,;
              cybersecurity, cloud infrastructure, quantum computing,;
              blockchain, IoT, and digital transformation services.;
            </p>;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            

<<<<<<< HEAD
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, quantum computing,
              blockchain, IoT, and digital transformation services.
            </p>

              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            
origin/automation-improvements-final
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>
<<<<<<< HEAD
            {/* Contact Info */}
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Contact Info */}



                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
<<<<<<< HEAD
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
=======
=======


                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from lucide-react';
const Footer: React.FC = () => {
  const services = {
    'AI Solutions': [
      { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
      { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
      { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
      { name: 'Natural Language Processing', href: '/ai-services#nlp' },
      { name: 'Machine Learning Models', href: '/ai-services#machine-learning' },
      { name: 'AI Analytics Platform', href: '/ai-services#ai-analytics' }
=======
      { name: "Blockchain", href: "/blockchain" },
      { name: "IoT Solutions", href: "/iot" },
      { name: "Cybersecurity", href: "/cybersecurity" },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ],
      { name: "AI Services", href: "/ai-services" }
      { name: "IT Services", href: "/it-services" }
      { name: "Micro SaaS", href: "/micro-saas" }
      { name: "Blockchain", href: "/blockchain" }
      { name: "IoT Solutions", href: "/iot" }
      { name: "Cybersecurity", href: "/cybersecurity" }
    ]
    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise" }
      { name: "Startup Solutions", href: "/startup" }
      { name: "E-commerce", href: "/ecommerce" }
      { name: "Healthcare", href: "/industries/healthcare" }
      { name: "Finance", href: "/industries/finance" }
      { name: "Education", href: "/industries/education" }
    ]
    company: [
      { name: "About Us", href: "/about" }
      { name: "Our Team", href: "/team" }
      { name: "Careers", href: "/careers" }
      { name: "Case Studies", href: "/case-studies" }
      { name: "News", href: "/news" }
      { name: "Contact", href: "/contact" }
    ]
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "White Papers", href: "/white - papers" },
      { name: "Support", href: "/support" },
    ],
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Blockchain', href: '/blockchain' },
      { name: 'IoT Solutions', href: '/iot' },
      { name: 'Cybersecurity', href: '/cybersecurity' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/enterprise' },
      { name: 'Startup Solutions', href: '/startup' },
      { name: 'E-commerce', href: '/ecommerce' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Education', href: '/industries/education' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Support', href: '/support' }
    ]

export default function Footer() {;
  const currentYear = new Date().getFullYear();
  const footerLinks = {;
    services: [;
      { name: "AI Services", href: "/ai-services" },;
      { name: "IT Services", href: "/it-services" },;
      { name: "Micro SaaS", href: "/micro-saas" },;
      { name: "Blockchain", href: "/blockchain" },;
      { name: "IoT Solutions", href: "/iot" },;
      { name: "Cybersecurity", href: "/cybersecurity" },;
    ],;
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise" },;
      { name: "Startup Solutions", href: "/startup" },;
      { name: "E-commerce", href: "/ecommerce" },;
      { name: "Healthcare", href: "/industries/healthcare" },;
      { name: "Finance", href: "/industries/finance" },;
      { name: "Education", href: "/industries/education" },;
    ],;
    company: [;
      { name: "About Us", href: "/about" },;
      { name: "Our Team", href: "/team" },;
      { name: "Careers", href: "/careers" },;
      { name: "Case Studies", href: "/case-studies" },;
      { name: "News", href: "/news" },;
      { name: "Contact", href: "/contact" },;
    ],;
    resources: [;
      { name: "Blog", href: "/blog" },;
      { name: "Documentation", href: "/docs" },;
      { name: "API Reference", href: "/api" },;
      { name: "Tutorials", href: "/tutorials" },;
      { name: "White Papers", href: "/white-papers" },;
      { name: "Support", href: "/support" },;
    ],;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  };
      { name: "Blog", href: "/blog" }
      { name: "Documentation", href: "/docs" }
      { name: "API Reference", href: "/api" }
      { name: "Tutorials", href: "/tutorials" }
      { name: "White Papers", href: "/white-papers" }
      { name: "Support", href: "/support" }
    ]
  }
  return (
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}

          <div className="lg:col-span-2">;
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">;
              Zion Tech Group;
            </Link>;
            <p className="text-gray-300 mb-6 max-w-md">;
              Leading technology solutions provider specializing in AI,;
              cybersecurity, cloud infrastructure, quantum computing,;
              blockchain, IoT, and digital transformation services.;
            </p>;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            
origin/automation-improvements-final
              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center">
                <MapPin className=w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>


=======
=======
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(),
  const services = {
    'AI Solutions: [
      { name: 'AI-Powered Email Responder', href: /ai-services#ai-email-responder' },
      { name: 'AI Content Generation, href: '/ai-services#ai-content-generation' },
      { name: Computer Vision Solutions', href: '/ai-services#computer-vision },
      { name: 'Natural Language Processing', href: /ai-services#nlp' },
      { name: 'Machine Learning Models, href: '/ai-services#machine-learning' },
      { name: AI Analytics Platform', href: '/ai-services#ai-analytics }
    ],
    'IT Services': [
      { name: Cloud Migration', href: '/it-services#cloud-migration },
      { name: 'Cybersecurity Solutions', href: /it-services#cybersecurity' },
      { name: 'DevOps Automation, href: '/it-services#devops' },
      { name: Infrastructure Management', href: '/it-services#infrastructure },
      { name: 'Data Analytics', href: /it-services#data-analytics' },
      { name: 'Network Security, href: '/it-services#network-security' }
    ],
    Micro SAAS': [
      { name: 'CRM Solutions, href: '/micro-saas#crm' },
      { name: Project Management', href: '/micro-saas#project-management },
      { name: 'Email Marketing', href: /micro-saas#email-marketing' },
      { name: 'AI Content Tools, href: '/micro-saas#ai-content-tools' },
      { name: Analytics Dashboard', href: '/micro-saas#analytics-dashboard },
      { name: 'Automation Tools', href: /micro-saas#automation-tools' }
    ]
  };
  const company = [
    { name: 'About Us, href: '/about' },
    { name: Our Team', href: '/team },
    { name: 'Careers', href: /careers' },
    { name: 'Case Studies, href: '/case-studies' },
    { name: Blog', href: '/blog },
    { name: 'Press', href: /press' }
  ];
  const resources = [
    { name: 'Documentation, href: '/docs' },
    { name: API Reference', href: '/api-docs },
    { name: 'Tutorials', href: /tutorials' },
    { name: 'Support, href: '/support' },
    { name: FAQ', href: '/faq },
    { name: 'Contact', href: /contact' }
  ];
  const socialLinks = [
    { name: 'LinkedIn, href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: Twitter', href: 'https://twitter.com/ziontechgroup, icon: Twitter },
    { name: 'GitHub', href: https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook, href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];
  return (
    <footer className="bg-gray-900 text-white>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2>
            <div className="flex items-center mb-4">
              <div className=w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl>Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className=text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md>
              Leading provider of AI solutions, cloud services, and technology consulting.
              Transforming businesses through innovation and cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className=flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400 />
                <a href="tel:+13024640950" className=hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center>
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href=mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className=w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>

<<<<<<< HEAD
<<<<<<< HEAD
origin/main
origin/automation-improvements-final
=======
=======

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
<<<<<<< HEAD
                  <Link 
                    href={link.href} 

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Link
                    href={link.href}
                  <Link 
                    href={link.href} 
origin/automation-improvements-final
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>

<<<<<<< HEAD
<<<<<<< HEAD

              ))}
            </ul>
          </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h3 className="text-lg font-semibold mb-6>Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1>
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

              ))}
            </ul>
          </div>
<<<<<<< HEAD
=======



=======

>>>>>>> origin/automation-improvements-final
=======
            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              ))}
            </ul>
          </div>
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              ))}
            </ul>
          </div>
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

origin/main
origin/automation-improvements-final


=======

>>>>>>> origin/automation-improvements-final
=======
            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final

=======
=======
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
          {/* Company */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3>
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
<<<<<<< HEAD
<<<<<<< HEAD



origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======

=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

=======
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
<<<<<<< HEAD

=======
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Resources */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3>
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
<<<<<<< HEAD
<<<<<<< HEAD



origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======

=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD


<<<<<<< HEAD

ursor/integrate-build-improve-and-re-verify-8f7d
            
origin/main
origin/automation-improvements-final
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
            <h3 className="text-lg font-semibold mb-4">Resources</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.resources.map((link) => (;
                <li key={link && link.name}>;
                  <Link
<<<<<<< HEAD
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
;
  return (
    <footer className="bg - gray - 900 text - white">;
      {/* Main Footer Content */}
      <div className="container mx - auto px - 4 py - 12">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 5 gap - 8">;
          {/* Company Info */}
          <div className="lg:col - span - 2">;
            <Link href="/" className="text - 2xl font - bold text - white mb - 4 block">;
              Zion Tech Group;
            </Link>;
            <p className="text - gray - 300 mb - 6 max - w-md">;
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, quantum computing,
              blockchain, IoT, and digital transformation services.;
            </p>;
            {/* Contact Info */}
            <div className="space - y-3">;
              <div className="flex items - center text - gray - 300">;
                <Phone className="w - 4 h - 4 mr - 3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items - center text - gray - 300">;
                <Mail className="w - 4 h - 4 mr - 3" />;
                <span > kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items - start text - gray - 300">;
                <MapPin className="w - 4 h - 4 mr - 3 mt - 1 flex - shrink - 0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Services</h3>;
            <ul className="space - y-2">;
              {footer_links.services.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Solutions */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Solutions</h3>;
            <ul className="space - y-2">;
              {footer_links.solutions.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Company & Resources */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Company</h3>;
            <ul className="space - y-2 mb - 6">;
              {footer_links.company.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
            <h3 className="text - lg font - semibold mb - 4">Resources</h3>;
            <ul className="space - y-2">;
              {footer_links.resources.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </ul>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">;
                Subscribe;
                <ArrowRight className="w-4 h-4 ml-2" />;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
<<<<<<< HEAD
      <div className="border-t border-gray-800">;
        <div className="container mx-auto px-4 py-6">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <div className="text-gray-400 text-sm mb-4 md:mb-0">;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">;
              <a
                href="https://linkedin && linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a
                href="https://twitter && twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a
                href="https://facebook && facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Facebook className="w-5 h-5" />;
              </a>;
              <a
                href="https://instagram && instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
=======
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
<<<<<<< HEAD
<<<<<<< HEAD
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">


=======
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Social Links */}
            <div className=mt-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3>Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target=_blank"
                    rel="noopener noreferrer
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className=h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className=text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm>
              <Link href="/privacy" className=text-gray-400 hover:text-white transition-colors">
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >

<<<<<<< HEAD
<<<<<<< HEAD
origin/main
origin/automation-improvements-final
=======
=======

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Privacy Policy
              </Link>
                className="text-gray-400 hover:text-white transition-colors">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link
                href="/cookies"
<<<<<<< HEAD
                className="text-gray-400 hover:text-white transition-colors">;
      {/* Newsletter Signup */}
      <div className="border - t border - gray - 800">;
        <div className="container mx - auto px - 4 py - 8">;
          <div className="max - w-2xl mx - auto text - center">;
            <h3 className="text - xl font - semibold mb - 2">Stay Updated</h3>;
            <p className="text - gray - 300 mb - 4">;
              Get the latest technology insights and company updates delivered;
              to your inbox.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 3 max - w-md mx - auto">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex - 1 px - 4 py - 2 bg - gray - 800 border border - gray - 700 rounded - md text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500";
              />;
              <button className="px - 6 py - 2 bg - blue - 600 text - white rounded - md hover:bg - blue - 700 transition - colors flex items - center justify - center">;
                Subscribe;
                <ArrowRight className="w - 4 h - 4 ml - 2" />;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
      <div className="border - t border - gray - 800">;
        <div className="container mx - auto px - 4 py - 6">;
          <div className="flex flex - col md:flex - row justify - between items - center">;
            <div className="text - gray - 400 text - sm mb - 4 md:mb - 0">;
              © {current_year} Zion Tech Group. All rights reserved.;
            </div>;
            {/* Social Links */}
            <div className="flex space - x-4 mb - 4 md:mb - 0">;
              <a;
                href="https://linkedin.com / company / zion - tech - group";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Linkedin className="w - 5 h - 5" />;
              </a>;
              <a;
                href="https://twitter.com / ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Twitter className="w - 5 h - 5" />;
              </a>;
              <a;
                href="https://facebook.com / ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Facebook className="w - 5 h - 5" />;
              </a>;
              <a;
                href="https://instagram.com / ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Instagram className="w - 5 h - 5" />;
              </a>;
            </div>;
            {/* Legal Links */}
            <div className="flex space - x-6 text - sm">;
              <Link;
                href="/privacy";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                Privacy Policy;
              </Link>;
              <Link;
                href="/terms";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                Terms of Service;
              </Link>;
              <Link;
                href="/cookies";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
}
    </footer>);
}


                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}
};
export default Footer;
}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
}
=======

<<<<<<< HEAD

=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
    </footer>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default Footer;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
