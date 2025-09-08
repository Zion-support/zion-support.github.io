import React from 'react';

  Zap,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  Target,
  BookOpen,
  Users,
  Star,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Eye,
  Award,
  Clock,
  Heart,
  Lightbulb,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Github,
  MessageCircle,
  MessageSquare,
  ArrowUp,
  ExternalLink,
  Building,
  Code,
  Database,
  Network,
  Server,
  Monitor,
  Smartphone,
  Camera,
  Gamepad2,
  Palette,
  Music,
  Film,
  BookOpenCheck,
  HelpCircle,
  FileText,
  Video,;
  Headphones,;} from 'lucide-react';import {
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, ;
  Video,
  Headphones,;} from 'lucide-react';import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 

  Brain, Atom, Shield, Rocket, Target, BookOpen, Users;
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare;
  ArrowUp, ExternalLink, Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2;
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  }
  return (
    <footer className='relative bg-black text-white overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black' />
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' />
        {/* Animated grid */}
        <motion.div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `
            backgroundSize: '200px 200px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px']
          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}
        />
      </div>
      <div className='relative z-10'>            ease: 'linear'
          }}
        />
      </div>
      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
            {/* Company Info */}
            <div className='lg:col-span-2'>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='space-y-6'        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='space-y-6'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center'>
                    <Brain className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                      Zion Tech Group
                    </h3>
                    <p className='text-sm text-gray-400'>
                      Revolutionary Technology Solutions
                    </p>
                  </div>
                </div>
                <p className='text-gray-300 leading-relaxed max-w-md'>
                  Leading the future with cutting-edge AI consciousness, quantum
                  computing, and innovative micro SAAS solutions. Transform your
                  business with our revolutionary technology.
                </p>
                {/* Contact Info */}
                <div className='space-y-3'>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className='flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                  >
                    <Phone className='w-4 h-4' />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200'
                  >
                    <Mail className='w-4 h-4' />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <MapPin className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.address}</span>                  </div>                </div>
                {/* Social Links */}                {/* Contact Info */}
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200'>;
                    <Mail className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </a>;
                  <div className='flex items-center gap-3 text-gray-300'>;
                    <MapPin className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.address}</span>                  </div>                </div>;
                <div className="space-y-3">;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">;
                    <Phone className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200">;
                    <Mail className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </a>;
                  <div className="flex items-center gap-3 text-gray-300">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;

                    <a
                      key={social && social.name}
                      href={social && social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"

                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

                  ))}
            {/* Footer Sections */}
            {footerSections && footerSections.map((section, index) => (;
              <motion&& motion.div
                key={section && section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

              >
                <div className='flex items-center gap-4'>
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110'                    >                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='space-y-4'
              >
                <div className='flex items-center gap-2'>
                  {section.icon}
                  <h4 className='font-semibold text-white'>{section.title}</h4>
                </div>
                <p className='text-sm text-gray-400'>{section.description}</p>
                <ul className='space-y-2'>
                  {section.links.map(link => (                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'                            : 'text-gray-400 hover:text-white'              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h4 className="font-semibold text-white">{section.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'                          link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'
                            : 'text-gray-400 hover:text-white'

                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-16 pt-8 border-t border-gray-800/50'
          >
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-sm text-gray-400'>
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className='flex items-center gap-6 text-sm text-gray-400'>
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors duration-200'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms'
                  className='hover:text-white transition-colors duration-200'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookies'
                  className='hover:text-white transition-colors duration-200'
                >                  Cookie Policy          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
              <button
                onClick={scrollToTop}
/* Animated grid */ 
  /* Animated grid */ 

}<motion.div > <div className="flex items-center gap-3" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center" > <Brain className="w-6 h-6 text-white" /> </div> <div> <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-gray-400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text-gray-300 leading-relaxed max-w-md" > Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {
  social.icon
}</a>) )
}</div> </motion.div> </div> {
  /* Footer Sections */
}{
  footerSections.map ( (section, index) => (<motion.div key= {
  section.title
}<li key= {
  link.name
}> <Link href= {
  link.href
}className= {
  `text-sm transition-colors duration-200 $ {
  link.featured ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-400 hover:text-white'
}`
}> </li>) )
}</ul> </motion.div>) )
}</div> {
  /* Animated grid */ ;
}<motion && motion.div > <div className="flex items-center gap-3" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center" > <Brain className="w-6 h-6 text-white" /> </div> <div> <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-gray-400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text-gray-300 leading-relaxed max-w-md" > Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {;
  social && social.icon ;
}</a>) ) ;
}</div> </motion && motion.div> </div> {;
  /* Footer Sections */ ;
}{;
  footerSections && footerSections.map ( (section, index) => (<motion&& motion.div key= {
  section && section.title 
}<li key= {
  link && link.name 
}> <Linkhref= {
  link && link.href 
}className= {
  `text-sm transition-colors duration-200 $ {
                <p className='text - gray - 300 leading - relaxed max - w-md'>;
                  Leading the future with cutting - edge AI consciousness, quantum;
                  computing, and innovative micro SAAS solutions. Transform your;
                  business with our revolutionary technology.;
                </p>;
                {/* Contact Info */}
                <div className='space - y-3'>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='flex items - center gap - 3 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200';
                  >;
                    <Phone className='w - 4 h - 4' />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='flex items - center gap - 3 text - gray - 300 hover:text - purple - 400 transition - colors duration - 200';
                  >;
                    <Mail className='w - 4 h - 4' />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className='flex items - center gap - 3 text - gray - 300'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.address}</span>                  </div>                </div>;
                {/* Social Links */}                {/* Contact Info */}
                <div className="space-y-3">;
                  <a href={`tel:${contact_info.mobile}`} className="flex items - center gap - 3 text - gray - 300 hover:text - cyan - 400 transition-colors duration-200">;
                    <Phone className="w-4 h-4" />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contact_info.email}`} className="flex items - center gap - 3 text - gray - 300 hover:text - purple - 400 transition-colors duration-200">;
                    <Mail className="w-4 h-4" />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className="flex items - center gap - 3 text-gray-300">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contact_info.address}</span>;
                  </div>;
                </div>;
                {/* Social Links */}
                <div className='flex items - center gap - 4'>;
                  {social_links.map (social => (
                    <a;
                      key={social.name}
                      href={social.href}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='p - 2 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration - 200 hover:scale - 110'                    >                <div className="flex items-center gap-4">;
                  {social_links.map ((social) => (
                    <a;
                      key={social.name}
                      href={social.href}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="p - 2 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration-200 hover:scale-110";
                      {social.icon}
                    </a>))}
                </div>;
              </motion.div>;
            </div>;
            {/* Footer Sections */}
            {footer_sections.map ((section, index) => (
              <motion.div;
                key={section.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='space - y-4';
              >;
                <div className='flex items - center gap - 2'>;
                  {section.icon}
                  <h4 className='font - semibold text - white'>{section.title}</h4>;
                </div>;
                <p className='text - sm text - gray - 400'>{section.description}</p>;
                <ul className='space - y-2'>;
                  {section.links.map (link => (                    <li key={link.name}>;
                      <Link;
                        href={link.href}
                        className={`text - sm transition - colors duration - 200 ${
                          link.featured;
                            ? 'text - cyan - 400 hover:text - cyan - 300'                            : 'text - gray - 400 hover:text - white'              >;
                <div className="flex items-center gap-2">;
                  {section.icon}
                  <h4 className="font-semibold text-white">{section.title}</h4>;
                </div>;
                <p className="text - sm text-gray-400">{section.description}</p>;
                <ul className="space-y-2">;
                  {section.links.map ((link) => (
                    <li key={link.name}>;
                      <Link;
                        href={link.href}
                        className={`text - sm transition - colors duration - 200 ${
                          link.featured;
                            ? 'text - cyan - 400 hover:text - cyan - 300'                          link.featured;
                            ? 'text - cyan - 400 hover:text - cyan - 300';
                            : 'text - gray - 400 hover:text - white';
                        }`}
                      >;
                        {link.name}
                      </Link>;
                    </li>))}
                </ul>;
              </motion.div>))}
          </div>;
          {/* Bottom Section */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt - 16 pt - 8 border - t border - gray - 800 / 50';
          >;
            <div className='flex flex - col md:flex - row items - center justify - between gap - 4'>;
              <div className='text - sm text - gray - 400'>;
                © 2025 Zion Tech Group. All rights reserved.;
              </div>;
              <div className='flex items - center gap - 6 text - sm text - gray - 400'>;
                <Link;
                  href='/privacy';
                  className='hover:text - white transition - colors duration - 200';
                >;
                  Privacy Policy;
                </Link>;
                <Link;
                  href='/terms';
                  className='hover:text - white transition - colors duration - 200';
                >;
                  Terms of Service;
                </Link>;
                <Link;
                  href='/cookies';
                  className='hover:text - white transition - colors duration - 200';
                >                  Cookie Policy          >;
            <div className="flex flex - col md:flex - row items - center justify-between gap-4">;
              <div className="text - sm text-gray-400">;
                © 2025 Zion Tech Group. All rights reserved.;
              </div>;
              <div className="flex items - center gap - 6 text - sm text-gray-400">;
                <Link href="/privacy" className="hover:text - white transition-colors duration-200">;
                  Privacy Policy;
                </Link>;
                <Link href="/terms" className="hover:text - white transition-colors duration-200">;
                  Terms of Service;
                </Link>;
                <Link href="/cookies" className="hover:text - white transition-colors duration-200">;
                  Cookie Policy;
                </Link>;
              </div>;
              <button;
                on_click={scrollToTop}
                className='p - 2 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration - 200 hover:scale - 110';
                aria - label='Scroll to top';
              >;
                <ArrowUp className='w - 5 h - 5' />              </button>                className="p - 2 bg - gray - 800 / 50 hover: bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration-200 hover:scale-110";
                aria - label="Scroll to top";
              >;
                <ArrowUp className="w-5 h-5" />;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </footer>);
}
;
/* Animated grid */;
}<motion.div > <div className="flex items-center gap-3" > <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - xl flex items-center justify-center" > <Brain className="w - 6 h-6 text-white" /> </div> <div> <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip-text text-transparent" > Zion Tech Group </h3> <p className="text - sm text-gray-400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text - gray - 300 leading-relaxed max-w-md" > Leading the future with cutting - edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {
  social.icon;
}</a>) );
}</div> </motion.div> </div> {
  /* Footer Sections */;
}{
  footer_sections.map ( (section, index) => (<motion.div key= {
  section.title;
}<li key= {
  link.name;
}> <Link href= {
  link.href;
}className= {
  `text - sm transition - colors duration - 200 $ {
  link.featured ? 'text - cyan - 400 hover:text - cyan - 300' : 'text - gray - 400 hover:text - white';
}`;
}> </li>) );
}</ul> </motion.div>) );
}</div> {
  /* Bottom Section */;
}<motion.div > <div className="flex flex - col md:flex - row items - center justify-between gap-4" > <div className="text - sm text-gray-400" > © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items - center gap - 6 text - sm text-gray-400" > <Link href="/privacy" className="hover:text - white transition-colors duration-200" > Privacy Policy </a> <Link href="/terms" className="hover:text - white transition-colors duration-200" > Terms of Service </a> <Link href="/cookies" className="hover:text - white transition-colors duration-200" > Cookie Policy </a> </div> <button aria - label="Scroll to top" w - 5 h - 5" /> </button> </div> </motion.div> </div> </div> </footer>);
}
export default UltraFuturisticFooter2035;
