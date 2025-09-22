import React from 'react';
import {
import * as React from 'react';import {
import {}
import * as React from 'react';
import {
import React from 'react';
import * as React from 'react';import {
import * as React from 'react';
import {
  // TODO: Implement;
}
pr-12325
import React from 'react';
import { import * as React from 'react';import {Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,FileText,FileText;}
  FileText,HelpCircle } from 'lucide-react';
export default function EnhancedFooter() {const scrollToTop = (window.scrollTo({ \"top\": '0', \"behavior\": 'smooth' ) => {
  return $3;}
})}window.scrollTo({ \"top\": '0', \"behavior\": 'smooth' })}const currentYear = new Date().getFullYear()const footerLinks = {\"services\": [{ name: 'IT Services';, \"href\": '/services/it-services' },{ \"name\": 'Micro SaaS', \"href\": '/services/micro-saas' },{ \"name\": 'Web Development', \"href\": '/services/web-development' },{ \"name\": 'Cloud Services', \"href\": '/services/cloud-services' },{ \"name\": 'AI Development', \"href\": '/services/ai-development' }
      { \"name\": 'AI Development', \"href\": '/services/ai-development' }
      { \"name\": 'AI Development', \"href\": '/services/ai-development' }
    ],\"solutions\": [{ name: 'AI Content Creation';, \"href\": '/solutions/ai-content-creation' },{ \"name\": 'Customer Support', \"href\": '/solutions/customer-support' },{ \"name\": 'Email Automation', \"href\": '/solutions/email-automation' },{ \"name\": 'Event Management', \"href\": '/solutions/event-management' },{ \"name\": 'Project Management', \"href\": '/solutions/project-management' },{ \"name\": 'Workflow Automation', \"href\": '/solutions/workflow-automation' }
      { \"name\": 'Workflow Automation', \"href\": '/solutions/workflow-automation' }
      { \"name\": 'Workflow Automation', \"href\": '/solutions/workflow-automation' }
    ],\"company\": [{ name: 'About Us';, \"href\": '/about' },{ \"name\": 'Careers', \"href\": '/careers' },{ \"name\": 'Partners', \"href\": '/partners' },{ \"name\": 'Contact', \"href\": '/contact' },{ \"name\": 'Blog', \"href\": '/blog' }
      { \"name\": 'Blog', \"href\": '/blog' }
      { \"name\": 'Blog', \"href\": '/blog' }
    ],\"resources\": [{ name: 'Help Center';, \"href\": '/help' },{ \"name\": 'Pricing Guide', \"href\": '/pricing-guide' },{ \"name\": 'Search', \"href\": '/search' },{ \"name\": 'Sitemap', \"href\": '/sitemap' }
    ],\"legal\": [{ name: 'Privacy Policy';, \"href\": '/privacy' },{ \"name\": 'Terms of Service', \"href\": '/terms' },{ \"name\": 'Cookie Policy', \"href\": '/cookies' }
      { \"name\": 'Sitemap', \"href\": '/sitemap' }
    ],\"legal\": [{ name: 'Privacy Policy';, \"href\": '/privacy' },{ \"name\": 'Terms of Service', \"href\": '/terms' },{ \"name\": 'Cookie Policy', \"href\": '/cookies' }
      { \"name\": 'Sitemap', \"href\": '/sitemap' }
    ],\"legal\": [{ name: 'Privacy Policy';, \"href\": '/privacy' },{ \"name\": 'Terms of Service', \"href\": '/terms' },{ \"name\": 'Cookie Policy', \"href\": '/cookies' }
    ]}const socialLinks = [{ \"name\": 'Facebook', \"href\": '#', \"icon\": 'Facebook' },{ \"name\": 'Twitter', \"href\": '#', \"icon\": 'Twitter' },{ \"name\": 'LinkedIn', \"href\": '#', \"icon\": 'Linkedin' },{ \"name\": 'GitHub', \"href\": '#', \"icon\": 'Github' }
    { \"name\": 'GitHub', \"href\": '#', \"icon\": 'Github' }
  ];
  return (<footer className=\"bg-gray-900 text-white\" />;
      {' '};
      <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 py-12\" />;
        {' '}
        <div className=\"grid grid-cols-1 \"md\": grid-cols-2 lg:grid-cols-6 gap-8\" />;
          {' '}
          {}{' '}
          <div className=\"\"lg\": col-span-2\" />;
            {' '}
            <div className=\"flex items-center space-x-2 mb-4\" />;
              {' '}
              <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" />;
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
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
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  FileText,;
origin/cursor/integrate-build-improve-and-re-verify-c7b5

  FileText,
  FileText,
  HelpCircle} from 'lucide-react';
export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ "top": '0', "behavior": 'smooth' })
};

';
  HelpCircle} from 'lucide-react';
export default function EnhancedFooter() {}
  const scrollToTop = () => {';
    window.scrollTo({ "top": '0', "behavior": 'smooth' });
  };

  FileText,;
  FileText,

  FileText,
  HelpCircle} from 'lucide-react';
export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ "top": '0', "behavior": 'smooth' })
};
    window.scrollTo({ "top": '0', "behavior": 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const footerLinks = {'"
    "services": [{ name: 'IT Services', "href": '/services/it-services' },'"
      { "name": 'Micro SaaS', "href": '/services/micro-saas' },'"
      { "name": 'Web Development', "href": '/services/web-development' },'"
      { "name": 'Cloud Services', "href": '/services/cloud-services' },'"
      { "name": 'AI Development', "href": '/services/ai-development' },
    ],'"
    "solutions": [{ name: 'AI Content Creation', "href": '/solutions/ai-content-creation' },'"
      { "name": 'Customer Support', "href": '/solutions/customer-support' },'"
      { "name": 'Email Automation', "href": '/solutions/email-automation' },'"
      { "name": 'Event Management', "href": '/solutions/event-management' },'"
      { "name": 'Project Management', "href": '/solutions/project-management' },'"
      { "name": 'Workflow Automation', "href": '/solutions/workflow-automation' },
    ],'"
    "company": [{ name: 'About Us', "href": '/about' },'"
      { "name": 'Careers', "href": '/careers' },'"
      { "name": 'Partners', "href": '/partners' },'"
      { "name": 'Contact', "href": '/contact' },'"
      { "name": 'Blog', "href": '/blog' },
    ],'"
    "resources": [{ name: 'Help Center', "href": '/help' },'"
      { "name": 'Pricing Guide', "href": '/pricing-guide' },'"
      { "name": 'Search', "href": '/search' },'"
      { "name": 'Sitemap', "href": '/sitemap' },
    ],'"
    "legal": [{ name: 'Privacy Policy', "href": '/privacy' },'"
      { "name": 'Terms of Service', "href": '/terms' },'"
      { "name": 'Cookie Policy', "href": '/cookies' },
    ]};'"
  const socialLinks = [{ "name": 'Facebook', "href": '#', "icon": 'Facebook' },'"
    { "name": 'Twitter', "href": '#', "icon": 'Twitter' },'"
    { "name": 'LinkedIn', "href": '#', "icon": 'Linkedin' },'"
    { "name": 'GitHub', "href": '#', "icon": 'Github' },
  ];
return (
<footer className="bg-gray-900 text-white">
      {' '}
ursor/fix-syntax-push-and-merge-to-main-40de
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {' '}
          {}{' '}
          <div className="lg:col-span-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

      {' '}
    <footer className=\"bg-gray-900 text-white\" />
      {' '}

      <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-12">
      <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 py-12\" />
        {' '}
        <div className=\"grid grid-cols-1 \"md\": grid-cols-2 lg:grid-cols-6 gap-8\" />
          {' '}
          {}{' '}
          <div className=\"\"lg\": col-span-2\" />
            {' '}
<div className="flex items-center space-x-2 mb-4">
{' '}
              Empowering businesses with cutting-edge technology solutions. From;
              AI development to cloud services,we deliver innovation that drives'
              growth.{' '}'
            </p>{' '}'
            {}{' '}"
            <div className="space-y-3">'
              {' '}"
              <div className="flex items-center space-x-3">'
                {' '}'"
                <Mail className="h-4 w-4 text-blue-400" />{' '}"
                <span className="text-gray-300">
                  contact@ziontechgroup.com'
                </span>{' '}'
              </div>{' '}"
              <div className="flex items-center space-x-3">'
                {' '}'"
                <Phone className="h-4 w-4 text-blue-400" />{' '}'"
                <span className="text-gray-300">+1 (555) 123-4567</span>{' '}'
              </div>{' '}"
              <div className="flex items-center space-x-3">'
                {' '}'"
                <MapPin className="h-4 w-4 text-blue-400" />{' '}'"
                <span className="text-gray-300">San Francisco,CA</span>{' '}'
              </div>{' '}'
            </div>{' '}'
          </div>{' '}'
          {}{' '}
          <div>'
            {' '}'"
            <h3 className="text-lg font-semibold mb-4">Services</h3>{' '}"
            <ul className="space-y-2">'
              {' '}
              {footerLinks.services.map((link, index) => (
                <li key={index}>'
                  {' '}
                  <a;
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

                    className="text-gray-300 "hover": text-white transition-colors duration-200"
      {' '}                    className="text-gray-300 "hover": text-white transition-colors duration-200"
      {' '}                    className="text-gray-300 "hover": text-white transition-colors duration-200"
            <div className=\"flex items-center space-x-2 mb-4\" />
              {' '}
              <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" />
                {' '}
                <span className=\"text-white font-bold text-lg\" />Z</span>{' '}
              </div>{' '}
              <span className=\"text-xl font-bold\" />Zion Tech Group</span>{' '}
            </div>{' '}
            <p className=\"text-gray-300 mb-6 max-w-md\" />;
              {' '}
              Empowering businesses with cutting-edge technology solutions. From;
              AI development to cloud services,we deliver innovation that drives;
              growth.{' '}
            </p>{' '}
            {}{' '}
            <div className=\"space-y-3\" />;
              {' '}
              <div className=\"flex items-center space-x-3\" />;
                {' '}
                <Mail className=\"h-4 w-4 text-blue-400\" />{' '}
                <span className=\"text-gray-300\" />;
                  contact@ziontechgroup.com;
                </span>{' '}
              </div>{' '}
              <div className=\"flex items-center space-x-3\" />;
            <p className=\"text-gray-300 mb-6 max-w-md\" />
              {' '}
              Empowering businesses with cutting-edge technology solutions. From;
AI development to cloud services,we deliver innovation that drives;
growth.{' '}
            </p>{' '}
            {}{' '}
            <div className=\"space-y-3\" />
              {' '}
              <div className=\"flex items-center space-x-3\" />
                {' '}
                <Mail className=\"h-4 w-4 text-blue-400\" />{' '}
                <span className=\"text-gray-300\" />
                  contact@ziontechgroup.com;
                </span>{' '}
              </div>{' '}
              <div className=\"flex items-center space-x-3\" />
                {' '}
                <Phone className=\"h-4 w-4 text-blue-400\" />{' '}
                <span className=\"text-gray-300\" />+1 (555) 123-4567</span>{' '}
              </div>{' '}
              <div className=\"flex items-center space-x-3\" />;
              <div className=\"flex items-center space-x-3\" />
                {' '}
                <MapPin className=\"h-4 w-4 text-blue-400\" />{' '}
                <span className=\"text-gray-300\" />San Francisco,CA</span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          {}{' '}
          <div />;
            {' '}
            <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>{' '}
            <ul className=\"space-y-2\" />;
              {' '}
              {footerLinks.services.map((link, index) => (<li key={index} />;
                  {' '}
                  <a
                    href={link.href}

                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                  <a;
                    href={link.href};
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
    { \"name\": 'GitHub', \"href\": '#', \"icon\": 'Github' }
  ];
  return (<footer className=\"bg-gray-900 text-white\" />;
      {' '}                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
                  >;
          <div />
            {' '}
            <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>{' '}
            <ul className=\"space-y-2\" />
              {' '}
              {footerLinks.services.map((link, index) => (}
                <li key={index} />
                  {' '}
                  <a;
href={link.href}
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\"
                   />
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>;
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          {}{' '}
          <div />;
            {' '}
            <h3 className=\"text-lg font-semibold mb-4\" />Solutions</h3>{' '}
            <ul className=\"space-y-2\" />;
              {' '}
              {footerLinks.solutions.map((link, index) => (<li key={index} />;
                  {' '}
                  <a;
                    href={link.href};
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
                    href={link.href}                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
                   />;
                  <a;
href={link.href}
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\"
                   />
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>;
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          {}{' '}
          <div />;
            {' '}
            <h3 className=\"text-lg font-semibold mb-4\" />Company</h3>{' '}
            <ul className=\"space-y-2\" />;
              {' '}
              {footerLinks.company.map((link, index) => (<li key={index} />;
                  {' '}
                  <a;
                    href={link.href};
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
                   />;
                  <a;
href={link.href}
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\"
                   />
                    {' '}
                    {link.name}{' '}

"
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >'
                    {' '}'
                    {link.name}{' '}'
                  </a>{' '}
                </li>'
              ))}{' '}'
            </ul>{' '}'
          </div>{' '}'
          {}{' '}
<div>'
            {' '}'"
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '}"
            <ul className="space-y-2">'
              {' '}
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>'
                  {' '}
<a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                    href={link.href}                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                    href={link.href}                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                    href={link.href}

                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                  <a;
href={link.href}
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\"
                   />
                    {' '}
                    {link.name}{' '}
                  <a;
                    href={link.href}

"
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >'
                    {' '}'
                    {link.name}{' '}'
                  </a>{' '}
</li>'
              ))}{' '}'
            </ul>{' '}'
          </div>{' '}'
          {}{' '}
          <div>'
            {' '}'"
            <h3 className="text-lg font-semibold mb-4">Company</h3>{' '}"
            <ul className="space-y-2">'
              {' '}
              {footerLinks.company.map((link, index) => (
                <li key={index}>'
                  {' '}
<a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

                  <a;
                    href={link.href}

"
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >'
                    {' '}'
                    {link.name}{' '}'
                  </a>{' '}
                </li>'
              ))}{' '}'
            </ul>{' '}'
          </div>{' '}'
          {}{' '}
          <div>'
            {' '}'"
            <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '}"
            <ul className="space-y-2">'
              {' '}
              {footerLinks.resources.map((link, index) => (
                <li key={index}>'
                  {' '}
                  <a;
                    href={link.href}
className="text-gray-300 hover:text-white transition-colors duration-200"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                    href={link.href}                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                    href={link.href}                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                    href={link.href}

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

                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >
                    {' '}
                    {link.name}{' '}

"
                    className="text-gray-300 "hover": text-white transition-colors duration-200"
                  >'
                    {' '}'
                    {link.name}{' '}'
                  </a>{' '}
</li>'
              ))}{' '}'
            </ul>{' '}'
          </div>{' '}'
        </div>{' '}'
        {}{' '}"
        <div className="border-t border-gray-800 mt-12 pt-8">'
          {' '}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {' '}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

                </li>
                  <a;
                    href={link.href};
                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
                    href={link.href}                    className=\"text-gray-300 \"hover\": text-white transition-colors duration-200\";
                   />;
                    {' '}
                    {link.name}{' '}
                  </a>{' '}
                </li>;
              ))}{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
        {}{' '}
        <div className="border-t border-gray-800 mt-12 pt-8">
          {' '}

          <div className="flex flex-col "md": flex-row justify-between items-center">
        <div className=\"border-t border-gray-800 mt-12 pt-8\" />;
          {' '};
          <div className=\"flex flex-col \"md\": flex-row justify-between items-center\" />;
            {' '}
            <div className=\"flex flex-col \"md\": flex-row items-center space-y-4 md:space-y-0 md:space-x-6\" />;
              {' '}
              <p className=\"text-gray-400\" />;
                {' '}
                © {currentYear} Zion Tech Group. All rights reserved.{' '}
              </p>{' '}
<div className="flex space-x-6">
                {' '}
                {footerLinks.legal.map((link, index) => (
                  <a;
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


"
                    className="text-gray-400 "hover": text-white transition-colors duration-200"
                  >'
                    {' '}'
                    {link.name}{' '}
                  </a>'
                ))}{' '}'
              </div>{' '}'
            </div>{' '}'
            {}{' '}
<div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

            <div className="flex items-center space-x-4 mt-4 "md": mt-0">
                    href={link.href}            <div className="flex items-center space-x-4 mt-4 "md": mt-0">
                    href={link.href}            <div className="flex items-center space-x-4 mt-4 "md": mt-0">

"
            <div className="flex items-center space-x-4 mt-4 "md": mt-0">'
              <div className=\"flex space-x-6\" />;
                {' '}
                {footerLinks.legal.map((link, index) => (<a;}
                    key={index}
                    href={link.href};
                    className=\"text-gray-400 \"hover\": text-white transition-colors duration-200\";
                   />;
                    {' '}
                    {link.name}{' '}
                  </a>;
                ))}{' '}
              </div>{' '}
            </div>{' '}
            {}{' '};
            <div className=\"flex items-center space-x-4 mt-4 \"md\": mt-0\" />;
                    href={link.href}            <div className=\"flex items-center space-x-4 mt-4 \"md\": mt-0\" />;
                    href={link.href}

                    className="text-gray-400 "hover": text-white transition-colors duration-200"
                    className=\"text-gray-400 \"hover\": text-white transition-colors duration-200\"
                  >
                    {' '}
                    {link.name}{' '}
                  </a>
                ))}{' '}
              </div>{' '}
            </div>{' '}
            {}{' '}

            <div className="flex items-center space-x-4 mt-4 "md": mt-0">
              {' '}
              {socialLinks.map((social, index) => (
                <a;
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


"
                  className="text-gray-400 "hover": text-white transition-colors duration-200"
                  href={social.href}                  className="text-gray-400 "hover": text-white transition-colors duration-200"
                  href={social.href}                  className="text-gray-400 "hover": text-white transition-colors duration-200"
            <div className=\"flex items-center space-x-4 mt-4 \"md\": mt-0\" />
              {' '}
              {socialLinks.map((social, index) => (<a;}
                  key={index}
                  href={social.href};
                  className=\"text-gray-400 \"hover\": text-white transition-colors duration-200\";
                  href={social.href}                  className=\"text-gray-400 \"hover\": text-white transition-colors duration-200\";
                  href={social.href}

                  className="text-gray-400 "hover": text-white transition-colors duration-200"
                  aria-label={social.name}
                >'
                  {' '}'"
                  <social.icon className="h-5 w-5" />{' '}
                </a>'
              ))}{' '}'
            </div>{' '}'
          </div>{' '}'
        </div>{' '}'
        {}{' '}"
        <div className="mt-8 text-center">'
          {' '}
<button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

          <button;
            onClick={scrollToTop}

"
            className="inline-flex items-center space-x-2 text-gray-400 "hover": text-white transition-colors duration-200"
          >'
            {' '}'
            <span>Back to top</span>{' '}
            <svg"
              className="h-4 w-4""
              fill="none""
              viewBox="0 0 24 24""
              stroke="currentColor"
            >'
              {' '}
              <path"
                strokeLinecap="round""
                strokeLinejoin="round"
                strokeWidth={2}"
                d="M5 10l7-7m0 0l7 7m-7-7v18"'
              />{' '}'
            </svg>{' '}'
          </button>{' '}'
        </div>{' '}'
      </div>{' '}
    </footer>
  );
}


import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
}
'"
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
'"
import * as React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

            onClick={scrollToTop}}
            onClick={scrollToTop}
            onClick={scrollToTop}}
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0';,behavior: 'smooth' ;})}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services';,href: '/services/it-services' ;},{ name: 'Micro SaaS';,href: '/services/micro-saas' ;},{ name: 'Web Development';,href: '/services/web-development' ;},{ name: 'Cloud Services';,href: '/services/cloud-services' ;},{ name: 'AI Development';,href: '/services/ai-development' ;},],solutions: [ { name: 'AI Content Creation';,href: '/solutions/ai-content-creation' ;},{ name: 'Customer Support';,href: '/solutions/customer-support' ;},{ name: 'Email Automation';,href: '/solutions/email-automation' ;},{ name: 'Event Management';,href: '/solutions/event-management' ;},{ name: 'Project Management';,href: '/solutions/project-management' ;},{ name: 'Workflow Automation';,href: '/solutions/workflow-automation' ;},],company: [ { name: 'About Us';,href: '/about' ;},{ name: 'Careers';,href: '/careers' ;},{ name: 'Partners';,href: '/partners' ;},{ name: 'Contact';,href: '/contact' ;},{ name: 'Blog';,href: '/blog' ;},],resources: [ { name: 'Help Center';,href: '/help' ;},{ name: 'Pricing Guide';,href: '/pricing-guide' ;},{ name: 'Search';,href: '/search' ;},{ name: 'Sitemap';,href: '/sitemap' ;},],legal: [ { name: 'Privacy Policy';,href: '/privacy' ;},{ name: 'Terms of Service';,href: '/terms' ;},{ name: 'Cookie Policy';,href: '/cookies' ;},],}; const socialLinks = [ { name: 'Facebook';,href: '#';,icon: 'Facebook' ;},{ name: 'Twitter';,href: '#';,icon: 'Twitter' ;},{ name: 'LinkedIn';,href: '#';,icon: 'Linkedin' ;},{ name: 'GitHub';,href: '#';,icon: 'Github' ;},]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12"> {' ';} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8"> {' ';} {}{' '} <div className="lg: col-span-2"> {' ';} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md: flex-row justify-between items-center"> {' ';} <div className="flex flex-col md: flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' ';} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md: mt-0"> {' ';} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover: text-white transition-colors duration-200" aria-label={social.name;} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover: text-white transition-colors duration-200" > {' ';} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
import * as React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0';,behavior: 'smooth' ;})}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services';,href: '/services/it-services' ;},{ name: 'Micro SaaS';,href: '/services/micro-saas' ;},{ name: 'Web Development';,href: '/services/web-development' ;},{ name: 'Cloud Services';,href: '/services/cloud-services' ;},{ name: 'AI Development';,href: '/services/ai-development' ;},],solutions: [ { name: 'AI Content Creation';,href: '/solutions/ai-content-creation' ;},{ name: 'Customer Support';,href: '/solutions/customer-support' ;},{ name: 'Email Automation';,href: '/solutions/email-automation' ;},{ name: 'Event Management';,href: '/solutions/event-management' ;},{ name: 'Project Management';,href: '/solutions/project-management' ;},{ name: 'Workflow Automation';,href: '/solutions/workflow-automation' ;},],company: [ { name: 'About Us';,href: '/about' ;},{ name: 'Careers';,href: '/careers' ;},{ name: 'Partners';,href: '/partners' ;},{ name: 'Contact';,href: '/contact' ;},{ name: 'Blog';,href: '/blog' ;},],resources: [ { name: 'Help Center';,href: '/help' ;},{ name: 'Pricing Guide';,href: '/pricing-guide' ;},{ name: 'Search';,href: '/search' ;},{ name: 'Sitemap';,href: '/sitemap' ;},],legal: [ { name: 'Privacy Policy';,href: '/privacy' ;},{ name: 'Terms of Service';,href: '/terms' ;},{ name: 'Cookie Policy';,href: '/cookies' ;},],}; const socialLinks = [ { name: 'Facebook';,href: '#';,icon: 'Facebook' ;},{ name: 'Twitter';,href: '#';,icon: 'Twitter' ;},{ name: 'LinkedIn';,href: '#';,icon: 'Linkedin' ;},{ name: 'GitHub';,href: '#';,icon: 'Github' ;},]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12"> {' ';} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8"> {' ';} {}{' '} <div className="lg: col-span-2"> {' ';} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md: flex-row justify-between items-center"> {' ';} <div className="flex flex-col md: flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' ';} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover: text-white transition-colors duration-200" > {' ';} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md: mt-0"> {' ';} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover: text-white transition-colors duration-200" aria-label={social.name;} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover: text-white transition-colors duration-200" > {' ';} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
    { "name": 'GitHub', "href": '#', "icon": 'Github' },']
  ];
  return (
    <footer className="bg-gray-900 text-white">"
</footer>"
      <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 py-12">"
</div>"
        <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-6 gap-8">"
          <div className=""lg": col-span-2">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>{' '}
              </div>{' '}
              <span className="text-xl font-bold">Zion Tech Group</span>{' '}
            <p className="text-gray-300 mb-6 max-w-md">"
</p>"
            </p>{' '}
            <div className="space-y-3">"
              <div className="flex items-center space-x-3">"
                <Mail className="h-4 w-4 text-blue-400" />{' '}

                <span className="text-gray-300">"
</span>"
                </span>{' '}
                <Phone className="h-4 w-4 text-blue-400" />{' '}
)
                <span className="text-gray-300">+1 (555) 123-4567</span>{' '}
                <MapPin className="h-4 w-4 text-blue-400" />{' '}

            className="inline-flex items-center space-x-2 text-gray-400 "hover": text-white transition-colors duration-200"
          >
            {' '}
                <span className="text-gray-300">San Francisco,CA</span>{' '}
          <div>
</div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>{' '}
            <ul className="space-y-2">"
</ul>
                <li key={index}>
</li>
                  <a;
                    href={link.href}"
                    className="text-gray-300 "hover": text-white transition-colors duration-200""
                  >
</a>"
                  </a>{' '}
            </ul>{' '}
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '}
            <h3 className="text-lg font-semibold mb-4">Company</h3>{' '}
            <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '}
        <div className="border-t border-gray-800 mt-12 pt-8">"
          <div className="flex flex-col "md": flex-row justify-between items-center">"
            <div className="flex flex-col "md": flex-row items-center space-y-4 md:space-y-0 md:space-x-6">"
              <p className="text-gray-400">"
              <div className="flex space-x-6">"
                    key={index}
                    className="text-gray-400 "hover": text-white transition-colors duration-200""
</a>
            <div className="flex items-center space-x-4 mt-4 "md": mt-0">"
                  href={social.href}"
                  aria-label={social.name}
                  <social.icon className="h-5 w-5" />{' '}
</social>
        <div className="mt-8 text-center">"
          <button;
            onClick={scrollToTop}"
            className="inline-flex items-center space-x-2 text-gray-400 "hover": text-white transition-colors duration-200""
</button>"
            <span>Back to top</span>{' '}
            <svg;
              className="h-4 w-4"""
              fill="none"""
              viewBox="0 0 24 24"""
              stroke="currentColor""
</svg>
              <path;"
                strokeLinecap="round"""
                strokeLinejoin="round""
                strokeWidth={2}"
                d="M5 10l7-7m0 0l7 7m-7-7v18"""
              />{' '}
</path>
            </svg>{' '}
          </button>{' '}
    </footer>
pr-12325
          <button;
            onClick={scrollToTop};
            className=\"inline-flex items-center space-x-2 text-gray-400 \"hover\": text-white transition-colors duration-200\";
           />;
            {' '}
            <span />Back to top</span>{' '}
            <svg;
              className=\"h-4 w-4\";
              fill=\"none\";
              viewBox=\"0 0 24 24\";
              stroke=\"currentColor\";
             />;
              {' '}
              <path;
                strokeLinecap=\"round\";
                strokeLinejoin=\"round\";
                strokeWidth={2}
                d=\"M5 10l7-7m0 0l7 7m-7-7v18\";
          <button;
onClick={scrollToTop}
            className=\"inline-flex items-center space-x-2 text-gray-400 \"hover\": text-white transition-colors duration-200\"
           />
            {' '}
            <span />Back to top</span>{' '}
            <svg;
className=\"h-4 w-4\"
              fill=\"none\"
              viewBox=\"0 0 24 24\"
              stroke=\"currentColor\"
             />
              {' '}
              <path;
strokeLinecap=\"round\"
                strokeLinejoin=\"round\"
                strokeWidth={2}
                d=\"M5 10l7-7m0 0l7 7m-7-7v18\"
              />{' '}
            </svg>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </footer>;
  );
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = ( window.scrollTo({ top: '0';
  behavior: 'smooth' ) => {
  return $3;}
})}const currentYear = new Date().getFullYear()const footerLinks = { services: [ { name: 'IT Services';,}
  href: '/services/it-services' ;},{ name: 'Micro SaaS';,}
  href: '/services/micro-saas' ;},{ name: 'Web Development';,}
  href: '/services/web-development' ;},{ name: 'Cloud Services';,}
  href: '/services/cloud-services' ;},{ name: 'AI Development';,}
  href: '/services/ai-development' ;}],solutions: [ { name: 'AI Content Creation';,}
  href: '/solutions/ai-content-creation' ;},{ name: 'Customer Support';,}
  href: '/solutions/customer-support' ;},{ name: 'Email Automation';,}
  href: '/solutions/email-automation' ;},{ name: 'Event Management';,}
  href: '/solutions/event-management' ;},{ name: 'Project Management';,}
  href: '/solutions/project-management' ;},{ name: 'Workflow Automation';,}
  href: '/solutions/workflow-automation' ;}],company: [ { name: 'About Us';,}
  href: '/about' ;},{ name: 'Careers';,}
  href: '/careers' ;},{ name: 'Partners';,}
  href: '/partners' ;},{ name: 'Contact';,}
  href: '/contact' ;},{ name: 'Blog';,}
  href: '/blog' ;}],resources: [ { name: 'Help Center';,}
  href: '/help' ;},{ name: 'Pricing Guide';,}
  href: '/pricing-guide' ;},{ name: 'Search';,}
  href: '/search' ;},{ name: 'Sitemap';,}
  href: '/sitemap' ;}],legal: [ { name: 'Privacy Policy';,}
  href: '/privacy' ;},{ name: 'Terms of Service';,}
  href: '/terms' ;},{ name: 'Cookie Policy';,}
  href: '/cookies' ;}]}const socialLinks = [ { name: 'Facebook';,}
  href: '#';,icon: 'Facebook' ;},{ name: 'Twitter';,}
  href: '#';,icon: 'Twitter' ;},{ name: 'LinkedIn';,}
  href: '#';,icon: 'Linkedin' ;},{ name: 'GitHub';,}
  href: '#';,icon: 'Github' ;}]; return ( <footer className=\"bg-gray-900 text-white\" /> {' '} <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12\" /> {' ';} <div className=\"grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8\" /> {' ';} {}{' '} <div className=\"lg: col-span-2\" /> {' ';} <div className=\"flex items-center space-x-2 mb-4\" /> {' '} <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" /> {' '} <span className=\"text-white font-bold text-lg\" />Z</span>{' '} </div>{' '} <span className=\"text-xl font-bold\" />Zion Tech Group</span>{' '} </div>{' '} <p className=\"text-gray-300 mb-6 max-w-md\" /> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className=\"space-y-3\" /> {' '} <div className=\"flex items-center space-x-3\" /> {' '} <Mail className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" /> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <Phone className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />+1 (555) 123-4567</span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <MapPin className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.services.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Solutions</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Company</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.company.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.resources.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"border-t border-gray-800 mt-12 pt-8\" /> {' '} <div className=\"flex flex-col md: flex-row justify-between items-center\" /> {' ';} <div className=\"flex flex-col md: flex-row items-center space-y-4 md:space-y-0 md:space-x-6\" /> {' ';} <p className=\"text-gray-400\" /> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className=\"flex space-x-6\" /> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"flex items-center space-x-4 mt-4 md: mt-0\" /> {' ';} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\" aria-label={social.name;}  /> {' '} <social.icon className=\"h-5 w-5\" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"mt-8 text-center\" /> {' '} <button onClick={scrollToTop} className=\"inline-flex items-center space-x-2 text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} <span />Back to top</span>{' '} <svg className=\"h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"  /> {' '} <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M5 10l7-7m0 0l7 7m-7-7v18\" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}import * as React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = ( window.scrollTo({ top: '0';
  behavior: 'smooth' ) => {
  return $3;}
})}const currentYear = new Date().getFullYear()const footerLinks = { services: [ { name: 'IT Services';,}
  href: '/services/it-services' ;},{ name: 'Micro SaaS';,}
  href: '/services/micro-saas' ;},{ name: 'Web Development';,}
  href: '/services/web-development' ;},{ name: 'Cloud Services';,}
  href: '/services/cloud-services' ;},{ name: 'AI Development';,}
  href: '/services/ai-development' ;}],solutions: [ { name: 'AI Content Creation';,}
  href: '/solutions/ai-content-creation' ;},{ name: 'Customer Support';,}
  href: '/solutions/customer-support' ;},{ name: 'Email Automation';,}
  href: '/solutions/email-automation' ;},{ name: 'Event Management';,}
  href: '/solutions/event-management' ;},{ name: 'Project Management';,}
  href: '/solutions/project-management' ;},{ name: 'Workflow Automation';,}
  href: '/solutions/workflow-automation' ;}],company: [ { name: 'About Us';,}
  href: '/about' ;},{ name: 'Careers';,}
  href: '/careers' ;},{ name: 'Partners';,}
  href: '/partners' ;},{ name: 'Contact';,}
  href: '/contact' ;},{ name: 'Blog';,}
  href: '/blog' ;}],resources: [ { name: 'Help Center';,}
  href: '/help' ;},{ name: 'Pricing Guide';,}
  href: '/pricing-guide' ;},{ name: 'Search';,}
  href: '/search' ;},{ name: 'Sitemap';,}
  href: '/sitemap' ;}],legal: [ { name: 'Privacy Policy';,}
  href: '/privacy' ;},{ name: 'Terms of Service';,}
  href: '/terms' ;},{ name: 'Cookie Policy';,}
  href: '/cookies' ;}]}const socialLinks = [ { name: 'Facebook';,}
  href: '#';,icon: 'Facebook' ;},{ name: 'Twitter';,}
  href: '#';,icon: 'Twitter' ;},{ name: 'LinkedIn';,}
  href: '#';,icon: 'Linkedin' ;},{ name: 'GitHub';,}
  href: '#';,icon: 'Github' ;}]; return ( <footer className=\"bg-gray-900 text-white\" /> {' '} <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12\" /> {' ';} <div className=\"grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8\" /> {' ';} {}{' '} <div className=\"lg: col-span-2\" /> {' ';} <div className=\"flex items-center space-x-2 mb-4\" /> {' '} <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" /> {' '} <span className=\"text-white font-bold text-lg\" />Z</span>{' '} </div>{' '} <span className=\"text-xl font-bold\" />Zion Tech Group</span>{' '} </div>{' '} <p className=\"text-gray-300 mb-6 max-w-md\" /> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className=\"space-y-3\" /> {' '} <div className=\"flex items-center space-x-3\" /> {' '} <Mail className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" /> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <Phone className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />+1 (555) 123-4567</span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <MapPin className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.services.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Solutions</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Company</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.company.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.resources.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"border-t border-gray-800 mt-12 pt-8\" /> {' '} <div className=\"flex flex-col md: flex-row justify-between items-center\" /> {' ';} <div className=\"flex flex-col md: flex-row items-center space-y-4 md:space-y-0 md:space-x-6\" /> {' ';} <p className=\"text-gray-400\" /> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className=\"flex space-x-6\" /> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"flex items-center space-x-4 mt-4 md: mt-0\" /> {' ';} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\" aria-label={social.name;}  /> {' '} <social.icon className=\"h-5 w-5\" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"mt-8 text-center\" /> {' '} <button onClick={scrollToTop} className=\"inline-flex items-center space-x-2 text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} <span />Back to top</span>{' '} <svg className=\"h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"  /> {' '} <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M5 10l7-7m0 0l7 7m-7-7v18\" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}ursor/fix-syntax-push-and-merge-to-main-40de;
};
}
            onClick={scrollToTop}}
    </footer>
  );

import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

}
import React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
import * as React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle,} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = () => { window.scrollTo({ top: '0',behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services',href: '/services/it-services' },{ name: 'Micro SaaS',href: '/services/micro-saas' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Cloud Services',href: '/services/cloud-services' },{ name: 'AI Development',href: '/services/ai-development' },],solutions: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Customer Support',href: '/solutions/customer-support' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' },],company: [ { name: 'About Us',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Partners',href: '/partners' },{ name: 'Contact',href: '/contact' },{ name: 'Blog',href: '/blog' },],resources: [ { name: 'Help Center',href: '/help' },{ name: 'Pricing Guide',href: '/pricing-guide' },{ name: 'Search',href: '/search' },{ name: 'Sitemap',href: '/sitemap' },],legal: [ { name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' },{ name: 'Cookie Policy',href: '/cookies' },],}; const socialLinks = [ { name: 'Facebook',href: '#',icon: 'Facebook' },{ name: 'Twitter',href: '#',icon: 'Twitter' },{ name: 'LinkedIn',href: '#',icon: 'Linkedin' },{ name: 'GitHub',href: '#',icon: 'Github' },]; return ( <footer className="bg-gray-900 text-white"> {' '} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {' '} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> {' '} {}{' '} <div className="lg:col-span-2"> {' '} <div className="flex items-center space-x-2 mb-4"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-lg">Z</span>{' '} </div>{' '} <span className="text-xl font-bold">Zion Tech Group</span>{' '} </div>{' '} <p className="text-gray-300 mb-6 max-w-md"> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className="space-y-3"> {' '} <div className="flex items-center space-x-3"> {' '} <Mail className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300"> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <Phone className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">+1 (555) 123-4567</span>{' '} </div>{' '} <div className="flex items-center space-x-3"> {' '} <MapPin className="h-4 w-4 text-blue-400" />{' '} <span className="text-gray-300">San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Services</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.services.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Solutions</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Company</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.company.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div> {' '} <h3 className="text-lg font-semibold mb-4">Resources</h3>{' '} <ul className="space-y-2"> {' '} {footerLinks.resources.map((link,index) => ( <li key={index}> {' '} <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className="border-t border-gray-800 mt-12 pt-8"> {' '} <div className="flex flex-col md:flex-row justify-between items-center"> {' '} <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"> {' '} <p className="text-gray-400"> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className="flex space-x-6"> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200" > {' '} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className="flex items-center space-x-4 mt-4 md:mt-0"> {' '} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.name} > {' '} <social.icon className="h-5 w-5" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className="mt-8 text-center"> {' '} <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200" > {' '} <span>Back to top</span>{' '} <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {' '} <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}

'"

}
  behavior: 'smooth' ) => {
  return $3;}
})}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services';,}
  href: '/services/it-services' ;},{ name: 'Micro SaaS';,}
  href: '/services/micro-saas' ;},{ name: 'Web Development';,}
  href: '/services/web-development' ;},{ name: 'Cloud Services';,}
  href: '/services/cloud-services' ;},{ name: 'AI Development';,}
  href: '/services/ai-development' ;}],solutions: [ { name: 'AI Content Creation';,}
  href: '/solutions/ai-content-creation' ;},{ name: 'Customer Support';,}
  href: '/solutions/customer-support' ;},{ name: 'Email Automation';,}
  href: '/solutions/email-automation' ;},{ name: 'Event Management';,}
  href: '/solutions/event-management' ;},{ name: 'Project Management';,}
  href: '/solutions/project-management' ;},{ name: 'Workflow Automation';,}
  href: '/solutions/workflow-automation' ;}],company: [ { name: 'About Us';,}
  href: '/about' ;},{ name: 'Careers';,}
  href: '/careers' ;},{ name: 'Partners';,}
  href: '/partners' ;},{ name: 'Contact';,}
  href: '/contact' ;},{ name: 'Blog';,}
  href: '/blog' ;}],resources: [ { name: 'Help Center';,}
  href: '/help' ;},{ name: 'Pricing Guide';,}
  href: '/pricing-guide' ;},{ name: 'Search';,}
  href: '/search' ;},{ name: 'Sitemap';,}
  href: '/sitemap' ;}],legal: [ { name: 'Privacy Policy';,}
  href: '/privacy' ;},{ name: 'Terms of Service';,}
  href: '/terms' ;},{ name: 'Cookie Policy';,}
  href: '/cookies' ;}]}; const socialLinks = [ { name: 'Facebook';,}
  href: '#';,icon: 'Facebook' ;},{ name: 'Twitter';,}
  href: '#';,icon: 'Twitter' ;},{ name: 'LinkedIn';,}
  href: '#';,icon: 'Linkedin' ;},{ name: 'GitHub';,}
  href: '#';,icon: 'Github' ;}]; return ( <footer className=\"bg-gray-900 text-white\" /> {' '} <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12\" /> {' ';} <div className=\"grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8\" /> {' ';} {}{' '} <div className=\"lg: col-span-2\" /> {' ';} <div className=\"flex items-center space-x-2 mb-4\" /> {' '} <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" /> {' '} <span className=\"text-white font-bold text-lg\" />Z</span>{' '} </div>{' '} <span className=\"text-xl font-bold\" />Zion Tech Group</span>{' '} </div>{' '} <p className=\"text-gray-300 mb-6 max-w-md\" /> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className=\"space-y-3\" /> {' '} <div className=\"flex items-center space-x-3\" /> {' '} <Mail className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" /> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <Phone className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />+1 (555) 123-4567</span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <MapPin className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.services.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Solutions</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Company</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.company.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.resources.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"border-t border-gray-800 mt-12 pt-8\" /> {' '} <div className=\"flex flex-col md: flex-row justify-between items-center\" /> {' ';} <div className=\"flex flex-col md: flex-row items-center space-y-4 md:space-y-0 md:space-x-6\" /> {' ';} <p className=\"text-gray-400\" /> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className=\"flex space-x-6\" /> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"flex items-center space-x-4 mt-4 md: mt-0\" /> {' ';} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\" aria-label={social.name;}  /> {' '} <social.icon className=\"h-5 w-5\" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"mt-8 text-center\" /> {' '} <button onClick={scrollToTop} className=\"inline-flex items-center space-x-2 text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} <span />Back to top</span>{' '} <svg className=\"h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"  /> {' '} <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M5 10l7-7m0 0l7 7m-7-7v18\" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
import * as React from 'react'; import { Mail,Phone,MapPin,Facebook,Twitter,Linkedin,Github,FileText,HelpCircle} from 'lucide-react'; export default function EnhancedFooter() { const scrollToTop = ( window.scrollTo({ top: '0';
  behavior: 'smooth' ) => {
  return $3;}
})}; const currentYear = new Date().getFullYear(); const footerLinks = { services: [ { name: 'IT Services';,}
  href: '/services/it-services' ;},{ name: 'Micro SaaS';,}
  href: '/services/micro-saas' ;},{ name: 'Web Development';,}
  href: '/services/web-development' ;},{ name: 'Cloud Services';,}
  href: '/services/cloud-services' ;},{ name: 'AI Development';,}
  href: '/services/ai-development' ;}],solutions: [ { name: 'AI Content Creation';,}
  href: '/solutions/ai-content-creation' ;},{ name: 'Customer Support';,}
  href: '/solutions/customer-support' ;},{ name: 'Email Automation';,}
  href: '/solutions/email-automation' ;},{ name: 'Event Management';,}
  href: '/solutions/event-management' ;},{ name: 'Project Management';,}
  href: '/solutions/project-management' ;},{ name: 'Workflow Automation';,}
  href: '/solutions/workflow-automation' ;}],company: [ { name: 'About Us';,}
  href: '/about' ;},{ name: 'Careers';,}
  href: '/careers' ;},{ name: 'Partners';,}
  href: '/partners' ;},{ name: 'Contact';,}
  href: '/contact' ;},{ name: 'Blog';,}
  href: '/blog' ;}],resources: [ { name: 'Help Center';,}
  href: '/help' ;},{ name: 'Pricing Guide';,}
  href: '/pricing-guide' ;},{ name: 'Search';,}
  href: '/search' ;},{ name: 'Sitemap';,}
  href: '/sitemap' ;}],legal: [ { name: 'Privacy Policy';,}
  href: '/privacy' ;},{ name: 'Terms of Service';,}
  href: '/terms' ;},{ name: 'Cookie Policy';,}
  href: '/cookies' ;}]}; const socialLinks = [ { name: 'Facebook';,}
  href: '#';,icon: 'Facebook' ;},{ name: 'Twitter';,}
  href: '#';,icon: 'Twitter' ;},{ name: 'LinkedIn';,}
  href: '#';,icon: 'Linkedin' ;},{ name: 'GitHub';,}
  href: '#';,icon: 'Github' ;}]; return ( <footer className=\"bg-gray-900 text-white\" /> {' '} <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12\" /> {' ';} <div className=\"grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8\" /> {' ';} {}{' '} <div className=\"lg: col-span-2\" /> {' ';} <div className=\"flex items-center space-x-2 mb-4\" /> {' '} <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" /> {' '} <span className=\"text-white font-bold text-lg\" />Z</span>{' '} </div>{' '} <span className=\"text-xl font-bold\" />Zion Tech Group</span>{' '} </div>{' '} <p className=\"text-gray-300 mb-6 max-w-md\" /> {' '} Empowering businesses with cutting-edge technology solutions. From AI development to cloud services,we deliver innovation that drives growth.{' '} </p>{' '} {}{' '} <div className=\"space-y-3\" /> {' '} <div className=\"flex items-center space-x-3\" /> {' '} <Mail className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" /> {' '} contact@ziontechgroup.com{' '} </span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <Phone className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />+1 (555) 123-4567</span>{' '} </div>{' '} <div className=\"flex items-center space-x-3\" /> {' '} <MapPin className=\"h-4 w-4 text-blue-400\" />{' '} <span className=\"text-gray-300\" />San Francisco,CA</span>{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.services.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Solutions</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.solutions.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Company</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.company.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} {}{' '} <div /> {' '} <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3>{' '} <ul className=\"space-y-2\" /> {' '} {footerLinks.resources.map((link,index) => ( <li key={index} /> {' '} <a href={link.href} className=\"text-gray-300 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a>{' '} </li> ))}{' '} </ul>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"border-t border-gray-800 mt-12 pt-8\" /> {' '} <div className=\"flex flex-col md: flex-row justify-between items-center\" /> {' ';} <div className=\"flex flex-col md: flex-row items-center space-y-4 md:space-y-0 md:space-x-6\" /> {' ';} <p className=\"text-gray-400\" /> {' '} © {currentYear} Zion Tech Group. All rights reserved.{' '} </p>{' '} <div className=\"flex space-x-6\" /> {' '} {footerLinks.legal.map((link,index) => ( <a key={index} href={link.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} {link.name}{' '} </a> ))}{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"flex items-center space-x-4 mt-4 md: mt-0\" /> {' ';} {socialLinks.map((social,index) => ( <a key={index} href={social.href} className=\"text-gray-400 hover: text-white transition-colors duration-200\" aria-label={social.name;}  /> {' '} <social.icon className=\"h-5 w-5\" />{' '} </a> ))}{' '} </div>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"mt-8 text-center\" /> {' '} <button onClick={scrollToTop} className=\"inline-flex items-center space-x-2 text-gray-400 hover: text-white transition-colors duration-200\"  /> {' ';} <span />Back to top</span>{' '} <svg className=\"h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"  /> {' '} <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M5 10l7-7m0 0l7 7m-7-7v18\" />{' '} </svg>{' '} </button>{' '} </div>{' '} </div>{' '} </footer> )}
