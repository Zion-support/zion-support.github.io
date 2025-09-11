import * as React from 'react';import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
<<<<<<< HEAD
  FileText,
ursor/fix-syntax-push-and-merge-to-main-40de
  HelpCircle,
} from 'lucide-react';
export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: 'IT Services', href: '/services/it-services' },
      { name: 'Micro SaaS', href: '/services/micro-saas' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
      { name: 'AI Development', href: '/services/ai-development' },
    ],
    solutions: [
      { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
      { name: 'Customer Support', href: '/solutions/customer-support' },
      { name: 'Email Automation', href: '/solutions/email-automation' },
      { name: 'Event Management', href: '/solutions/event-management' },
      { name: 'Project Management', href: '/solutions/project-management' },
      { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Pricing Guide', href: '/pricing-guide' },
      { name: 'Search', href: '/search' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'Facebook' },
    { name: 'Twitter', href: '#', icon: 'Twitter' },
    { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { name: 'GitHub', href: '#', icon: 'Github' },

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  FileText,;

  FileText,;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  FileText,;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  HelpCircle} from 'lucide-react';
export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ "top": '0', "behavior": 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    "services": [{ name: 'IT Services', "href": '/services/it-services' },
      { "name": 'Micro SaaS', "href": '/services/micro-saas' },
      { "name": 'Web Development', "href": '/services/web-development' },
      { "name": 'Cloud Services', "href": '/services/cloud-services' },
      { "name": 'AI Development', "href": '/services/ai-development' },
    ],
    "solutions": [{ name: 'AI Content Creation', "href": '/solutions/ai-content-creation' },
      { "name": 'Customer Support', "href": '/solutions/customer-support' },
      { "name": 'Email Automation', "href": '/solutions/email-automation' },
      { "name": 'Event Management', "href": '/solutions/event-management' },
      { "name": 'Project Management', "href": '/solutions/project-management' },
      { "name": 'Workflow Automation', "href": '/solutions/workflow-automation' },
    ],
    "company": [{ name: 'About Us', "href": '/about' },
      { "name": 'Careers', "href": '/careers' },
      { "name": 'Partners', "href": '/partners' },
      { "name": 'Contact', "href": '/contact' },
      { "name": 'Blog', "href": '/blog' },
    ],
    "resources": [{ name: 'Help Center', "href": '/help' },
      { "name": 'Pricing Guide', "href": '/pricing-guide' },
      { "name": 'Search', "href": '/search' },
      { "name": 'Sitemap', "href": '/sitemap' },
    ],
    "legal": [{ name: 'Privacy Policy', "href": '/privacy' },
      { "name": 'Terms of Service', "href": '/terms' },
      { "name": 'Cookie Policy', "href": '/cookies' },
    ]};
  const socialLinks = [{ "name": 'Facebook', "href": '#', "icon": 'Facebook' },
    { "name": 'Twitter', "href": '#', "icon": 'Twitter' },
    { "name": 'LinkedIn', "href": '#', "icon": 'Linkedin' },
    { "name": 'GitHub', "href": '#', "icon": 'Github' },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      {' '}
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {' '}
          {}{' '}
          <div className="lg:col-span-2">

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-12">
        {' '}
        <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-6 gap-8">
          {' '}
          {}{' '}
          <div className=""lg": col-span-2">
            {' '}
            <div className="flex items-center space-x-2 mb-4">
              {' '}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                {' '}
                <span className="text-white font-bold text-lg">Z</span>{' '}
              </div>{' '}
              <span className="text-xl font-bold">Zion Tech Group</span>{' '}
            </div>{' '}
            <p className="text-gray-300 mb-6 max-w-md">
              {' '}
              Empowering businesses with cutting-edge technology solutions. From
              AI development to cloud services,we deliver innovation that drives
              growth.{' '}
            </p>{' '}
            {}{' '}
            <div className="space-y-3">
              {' '}
              <div className="flex items-center space-x-3">
                {' '}
                <Mail className="h-4 w-4 text-blue-400" />{' '}
                <span className="text-gray-300">
                  contact@ziontechgroup.com
                </span>{' '}
              </div>{' '}
              <div className="flex items-center space-x-3">
                {' '}
                <Phone className="h-4 w-4 text-blue-400" />{' '}
                <span className="text-gray-300">+1 (555) 123-4567</span>{' '}
              </div>{' '}
              <div className="flex items-center space-x-3">
                {' '}
                <MapPin className="h-4 w-4 text-blue-400" />{' '}
                <span className="text-gray-300">San Francisco,CA</span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          {}{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Services</h3>{' '}
            <ul className="space-y-2">
              {' '}
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  {' '}
                  <a
                    href={link.href}

<<<<<<< HEAD
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          {}{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '}
            <ul className="space-y-2">
              {' '}
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  {' '}
                  <a
                    href={link.href}

<<<<<<< HEAD
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          {}{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Company</h3>{' '}
            <ul className="space-y-2">
              {' '}
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {' '}
                  <a
                    href={link.href}

<<<<<<< HEAD
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          {}{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '}
            <ul className="space-y-2">
              {' '}
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {' '}
                  <a
                    href={link.href}

<<<<<<< HEAD
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
        {}{' '}
        <div className="border-t border-gray-800 mt-12 pt-8">
          {' '}

<<<<<<< HEAD
          <div className="flex flex-col md:flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="flex flex-col "md": flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col "md": flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              {' '}
              <p className="text-gray-400">
                {' '}
                © {currentYear} Zion Tech Group. All rights reserved.{' '}
              </p>{' '}
              <div className="flex space-x-6">
                {' '}
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}

<<<<<<< HEAD
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="text-gray-400 "hover": text-white transition-colors duration-200"
          <div className="flex flex-col md:flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">                    className="text-gray-400 "hover": text-white transition-colors duration-200"                  >
                    {' '}
                    {link.name}{' '}
                  </a>
                ))}{' '}
              </div>{' '}
            </div>{' '}
            {}{' '}

<<<<<<< HEAD
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="flex items-center space-x-4 mt-4 "md": mt-0">
              {' '}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}

<<<<<<< HEAD
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className="text-gray-400 "hover": text-white transition-colors duration-200"
            <div className="flex items-center space-x-4 mt-4 md:mt-0">                  className="text-gray-400 "hover": text-white transition-colors duration-200"                  aria-label={social.name}
                >
                  {' '}
                  <social.icon className="h-5 w-5" />{' '}
                </a>
              ))}{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        {}{' '}
        <div className="mt-8 text-center">
          {' '}
          <button
            onClick={scrollToTop}

<<<<<<< HEAD
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="inline-flex items-center space-x-2 text-gray-400 "hover": text-white transition-colors duration-200"
          >
            {' '}
            <span>Back to top</span>{' '}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />{' '}
            </svg>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </footer>
  );



import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

<<<<<<< HEAD
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
}

origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
