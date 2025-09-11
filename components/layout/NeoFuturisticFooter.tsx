
export default function NeoFuturisticFooter() {


import { Phone, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
export default function NeoFuturisticFooter() {
  return (  website: 'https://ziontechgroup.com'
}
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
import { motion } from 'framer-motion';
export default function NeoFuturisticFooter() {

import {;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  Github,;
  Linkedin,;
  ExternalLink,;
} from 'lucide-react';import { Phone, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};
export default function NeoFuturisticFooter() {;
  return (  website: 'https://ziontechgroup && ziontechgroup.com';
};


export default function NeoFuturisticFooter() {;
  return (
import { motion } from 'framer-motion';
  Phone
  Mail
  MapPin
  Globe
  Github
  Linkedin
  ExternalLink;
} from 'lucide-react';import { Phone, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
  Phone,
  Mail,
  MapPin,
  Globe,
  Github,
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};
export default function NeoFuturisticFooter() {;
  return (  website: 'https://ziontechgroup && ziontechgroup.com';
};
export default function NeoFuturisticFooter() {;
  return (


              Productized AI, IT and micro SaaS solutions with transparent;
              pricing and fast onboarding. Built for outcomes, delivered with;
              reliability.;
            </p>;
          </div>;

            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/market-pricing'>;
              <ExternalLink className='w-4 h-4' /> Market Pricing;
            </a>;
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/services'>;
              <ExternalLink className='w-4 h-4' /> Services;
            </a>;
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/contact'>;
              <ExternalLink className='w-4 h-4' /> Contact;
            </a>;
            <div className='flex items-center gap-3 pt-2'>;
              <a
                aria-label='GitHub'
                href='https://github && github.com/Zion-Holdings'
                className='text-slate-400 hover:text-white'>;
                <Github className='w-5 h-5' />;
              </a>;
              <a
                aria-label='LinkedIn'
    <footer className="relative mt-20 border-t border-slate-800/60 bg-black/60 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-x-10 -top-32 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-neural-dots opacity-20 animate-shimmer" />
</div>
      <div className="relative container mx-auto px-4 py-12 text-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Zion Tech Group
            </motion.h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Productized AI, IT and micro SaaS solutions with transparent pricing and fast onboarding. Built for outcomes, delivered with reliability.
            </p>
          </div>
        </div>
          <div className="space-y-2 text-sm">
            <div className="font-semibold text-slate-100 mb-2">Resources</div>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/market-pricing"><ExternalLink className="w-4 h-4" /> Market Pricing</a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/services"><ExternalLink className="w-4 h-4" /> Services</a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/contact"><ExternalLink className="w-4 h-4" /> Contact</a>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="GitHub" href="https://github.com/Zion-Holdings" className="text-slate-400 hover:text-white"><Github className="w-5 h-5" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/zion-tech-group/" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
      <div className=&quot;relative container mx-auto px-4 py-12 text-slate-200&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-10&quot;>
          <div>
            <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className=&quot;text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3&quot;>
              Zion Tech Group
            </motion.h3>
            <p className=&quot;text-slate-400 text-sm leading-relaxed&quot;>
              Productized AI, IT and micro SaaS solutions with transparent pricing and fast onboarding. Built for outcomes, delivered with reliability.
            </p>
          </div>

          <div className=&quot;space-y-2 text-sm&quot;>
            <div className=&quot;font-semibold text-slate-100 mb-2&quot;>Contact</div>
            <div className=&quot;flex items-center gap-2 text-cyan-300&quot;><Phone className=&quot;w-4 h-4&quot; /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className=&quot;hover:underline&quot;>{contactInfo.mobile}</a></div>
            <div className=&quot;flex items-center gap-2 text-purple-300&quot;><Mail className=&quot;w-4 h-4&quot; /><a href={`mailto:${contactInfo.email}`} className=&quot;hover:underline&quot;>{contactInfo.email}</a></div>
            <div className=&quot;flex items-center gap-2 text-emerald-300&quot;><MapPin className=&quot;w-4 h-4&quot; /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:underline&quot;>{contactInfo.address}</a></div>
            <div className=&quot;flex items-center gap-2 text-sky-300&quot;><Globe className=&quot;w-4 h-4&quot; /><a href={contactInfo.website} className=&quot;hover:underline&quot;>ziontechgroup.com</a></div>
          </div>

          <div className=&quot;space-y-2 text-sm&quot;>
            <div className=&quot;font-semibold text-slate-100 mb-2&quot;>Resources</div>
            <a className=&quot;flex items-center gap-2 text-slate-300 hover:text-cyan-300&quot; href=&quot;/market-pricing&quot;><ExternalLink className=&quot;w-4 h-4&quot; /> Market Pricing</a>
            <a className=&quot;flex items-center gap-2 text-slate-300 hover:text-cyan-300&quot; href=&quot;/services&quot;><ExternalLink className=&quot;w-4 h-4&quot; /> Services</a>
            <a className=&quot;flex items-center gap-2 text-slate-300 hover:text-cyan-300&quot; href=&quot;/contact&quot;><ExternalLink className=&quot;w-4 h-4&quot; /> Contact</a>
            <div className=&quot;flex items-center gap-3 pt-2&quot;>
              <a aria-label=&quot;GitHub&quot; href=&quot;https://github.com/Zion-Holdings&quot; className=&quot;text-slate-400 hover:text-white&quot;><Github className=&quot;w-5 h-5&quot; /></a>
              <a aria-label=&quot;LinkedIn&quot; href=&quot;https://www.linkedin.com/company/zion-tech-group/&quot; className=&quot;text-slate-400 hover:text-white&quot;><Linkedin className=&quot;w-5 h-5&quot; /></a>

            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800/60 pt-6">
          <div className="text-xs text-slate-500 flex gap-4">
            <a href="/privacy" className="hover: text-slate-300">Privacy</a>
            <a href="/terms" className="hover:text-slate-300">Terms</a>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</div>
          <div className="text-xs text-slate-500 flex gap-4">
            <a href="/privacy" className="hover: text-slate-300">Privacy</a>
            <a href="/terms" className="hover:text-slate-300">Terms</a>

          </div>




  Linkedin,;
  ExternalLink,;
} from 'lucide-react';

} from 'lucide-react';import { Phone, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
export default function NeoFuturisticFooter() {
  return (  website: 'https://ziontechgroup.com'
}
  return (  website: 'https://ziontechgroup.com';
};

export default function NeoFuturisticFooter() {
  return (
    <footer className='relative mt-20 border-t border-slate-800/60 bg-black/60 backdrop-blur-xl overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -inset-x-10 -top-32 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl' />
        <div className='absolute inset-0 bg-neural-dots opacity-20 animate-shimmer' />
      <div className='relative container mx-auto px-4 py-12 text-slate-200'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3'
            >
              Zion Tech Group
            </motion.h3>
            <p className='text-slate-400 text-sm leading-relaxed'>
              Productized AI, IT and micro SaaS solutions with transparent
              pricing and fast onboarding. Built for outcomes, delivered with
              reliability.
            </p>
          </div>
          <div className='space-y-2 text-sm'>
            <div className='font-semibold text-slate-100 mb-2'>Contact</div>
            <div className='flex items-center gap-2 text-cyan-300'>
              <Phone className='w-4 h-4' />
              <a
                href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}
                className='hover:underline'
              >
                {contactInfo.mobile}
              </a>
            </div>
            <div className='flex items-center gap-2 text-purple-300'>
              <Mail className='w-4 h-4' />
              <a
                href={`mailto:${contactInfo.email}`}
                className='hover:underline'
              >
                {contactInfo.email}
              </a>
            </div>
            <div className='flex items-center gap-2 text-emerald-300'>
              <MapPin className='w-4 h-4' />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                {contactInfo.address}
              </a>
            </div>
            <div className='flex items-center gap-2 text-sky-300'>
              <Globe className='w-4 h-4' />
              <a href={contactInfo.website} className='hover:underline'>
                ziontechgroup.com
              </a>
            </div>
          </div>
          <div className='space-y-2 text-sm'>
            <div className='font-semibold text-slate-100 mb-2'>Resources</div>
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/market-pricing'
            >
              <ExternalLink className='w-4 h-4' /> Market Pricing
            </a>
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/services'
            >
              <ExternalLink className='w-4 h-4' /> Services
            </a>
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/contact'
            >
              <ExternalLink className='w-4 h-4' /> Contact
            </a>
            <div className='flex items-center gap-3 pt-2'>
              <a
                aria-label='GitHub'
                href='https://github.com/Zion-Holdings'
                className='text-slate-400 hover:text-white'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                aria-label='LinkedIn'
                href='https://www.linkedin.com/company/zion-tech-group/'
                className='text-slate-400 hover:text-white'
              >
                <Linkedin className='w-5 h-5' />
              </a>            </div>
          </div>
        </div>
          <div className="space-y-2 text-sm">
            <div className="font-semibold text-slate-100 mb-2">Resources</div>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/market-pricing"><ExternalLink className="w-4 h-4" /> Market Pricing</a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/services"><ExternalLink className="w-4 h-4" /> Services</a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/contact"><ExternalLink className="w-4 h-4" /> Contact</a>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="GitHub" href="https://github.com/Zion-Holdings" className="text-slate-400 hover:text-white"><Github className="w-5 h-5" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/zion-tech-group/" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div className='mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800/60 pt-6'>
          <div className='text-xs text-slate-500'>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </div>
          <div className='text-xs text-slate-500 flex gap-4'>
            <a href='/privacy' className='hover:text-slate-300'>
              Privacy
            </a>
            <a href='/terms' className='hover:text-slate-300'>
              Terms
            </a>          </div>        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800/60 pt-6">
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</div>
          <div className="text-xs text-slate-500 flex gap-4">
            <a href="/privacy" className="hover: text-slate-300">Privacy</a>
            <a href="/terms" className="hover:text-slate-300">Terms</a>
        </div>
      </div>
    </footer>;
  );
}

;
  return (

};

export default function NeoFuturisticFooter() {
  return (


