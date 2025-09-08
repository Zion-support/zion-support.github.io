import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const Footer = () => {
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity' },']
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },']

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },']

import {
  // TODO: Implement
}
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap;
} from 'lucide-react';
const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();



    <footer className="bg-gray-900 text-white">"
</footer>"
      <div className="container mx-auto px-4 py-12">"
</div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">"
          <div className="lg:col-span-2">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">"
                <Code className="w-5 h-5 text-white" />"

              <span className="text-xl font-bold">Zion Tech Group</span>"
            <p className="text-gray-400 mb-6 max-w-sm">"
</p>
            </p>"
            <div className="space-y-3">"
              <div className="flex items-center space-x-3">"
                <Phone className="w-4 h-4 text-blue-400" />"
"
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">"
</a>
                <Mail className="w-4 h-4 text-blue-400" />"
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">"
                <MapPin className="w-4 h-4 text-blue-400" />"
                <span className="text-gray-400">"
</span>
                  364 E Main St STE 1008<br />
</br>
              </div>
                </span>;
              </div>;
                <a;
                  key={social && social.name}
                  href={social && social.href}"
                  target="_blank"""
                  rel="noopener noreferrer"""
                  className="text-gray-400 hover:text-blue-400 transition-colors""
                  aria-label={social && social.name}>;
</a>"
                  <social && social.icon className="h-5 w-5" />;"
</social>
                </a>;
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;""
            <ul className="space-y-2">;"
</ul>
                <li key={service && service.name}>;
</li>
                  <Link;
          {/* Solutions */}
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;""
                <li key={solution && solution.name}>;
                    href={solution && solution.href}"
                    className="text-gray-400 hover:text-white transition-colors">;"

                  ;
                </li>;
            </ul>;


          <div>
                <span className="text-white font-bold text-lg">Z</span>"
            <p className="text-gray-300 mb-4">"
            <div className="flex space-x-4">"
                  key={social.name}
                  href={social.href}"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />"
            <h3 className="text-lg font-semibold mb-4">Services</h3>""
            <ul className="space-y-2">"
                <li key={service.name}>
                    href={service.href}"
                    className="text-gray-300 hover:text-blue-400 transition-colors""

                  
            <h3 className="text-lg font-semibold mb-4">Company</h3>""
                <li key={item.name}>
                    href={item.href}"

                  
            <h3 className="text-lg font-semibold mb-4">Resources</h3>""
            <ul className="space-y-2 mb-6">"
                <li key={resource.name}>
                    href={resource.href}"

                  
            </ul>"
            <h3 className="text-lg font-semibold mb-4">Contact</h3>""
            <div className="space-y-2">"
              <div className="flex items-center text-gray-300">"
                <Mail className="h-4 w-4 mr-2" />"
                <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400">"
                <Phone className="h-4 w-4 mr-2" />"
                <a href="tel:+13024640950" className="hover:text-blue-400">"
              <div className="flex items-start text-gray-300">"
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />"

                <span>
                  123 Tech Street<br />


                <Facebook className="w-5 h-5" />"

                <Twitter className="w-5 h-5" />"

                <Linkedin className="w-5 h-5" />"

                <Instagram className="w-5 h-5" />"


            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>""
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</li>""
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</li>""
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</li>""
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</li>"

            <h4 className="text-lg font-semibold mb-4">Contact</h4>""
              <div className="flex items-center">"
                <Phone className="w-4 h-4 mr-2" />"
                <span className="text-gray-300">+1 302 464 0950</span>"
                <Mail className="w-4 h-4 mr-2" />"
                <span className="text-gray-300">kleber@ziontechgroup.com</span>"
        <div className="border-t border-gray-800 mt-8 pt-8">"
          <div className="flex flex-col md:flex-row justify-between items-center">"
            <p className="text-gray-400 text-sm">"
            <div className="flex space-x-6 mt-4 md:mt-0">"
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">"

              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">"

              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">"

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">"
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>"
            <div className="flex items-center mt-2 md:mt-0">"
              <span className="mr-2">Trusted by</span>""
              <span className="font-semibold text-white">500+</span>""
              <span className="ml-2">companies worldwide</span>"
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">"
          <p className="text-gray-400">"