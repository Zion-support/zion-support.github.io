<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from 'lucide-react';
;
const Accessibility: React.FC = () => {;
  const features = [;
    {;
      title: 'Visual Accessibility',;
      icon: Eye,;
      description: 'Support for users with visual impairments',;
      features: [;
        'High contrast mode support',;
        'Screen reader compatibility',;
        'Text scaling and zoom functionality',;
        'Alternative text for images',;
        'Keyboard navigation support';
      ]},;
    {;
      title: 'Motor Accessibility',;
      icon: MousePointer,;
      description: 'Support for users with motor impairments',;
      features: [;
        'Keyboard-only navigation',;
        'Voice control compatibility',;
        'Large click targets',;
        'Customizable interaction timeouts',;
        'Switch control support';
      ]},;
    {;
      title: 'Cognitive Accessibility',;
      icon: AccessibilityIcon,;
      description: 'Support for users with cognitive differences',;
      features: [;
        'Clear and simple language',;
        'Consistent navigation patterns',;
        'Error prevention and recovery',;
        'Progress indicators',;
        'Help and support resources';
      ]},;
    {;
      title: 'Auditory Accessibility',;
      icon: Ear,;
      description: 'Support for users with hearing impairments',;
      features: [;
        'Visual indicators for audio content',;
        'Captions and transcripts',;
        'Text-based alternatives',;
        'Visual alerts and notifications',;
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function Accessibility() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Accessibility - Zion Tech Group" description="Professional Accessibility services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Accessibility</h1>
        <p className="text-gray-300 text-lg">
          Professional Accessibility services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import { motion } from &apos;framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from &apos;lucide-react';&apos;&apos;
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';""
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from 'lucide-react';
""
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';"
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> main

const Accessibility: React.FC = () => {}
  const;const;const features = [
    {
<<<<<<< HEAD
      title: &apos;Visual Accessibility&apos;,
      icon: Eye,
      description: &apos;Support for users with visual impairments&apos;,
      features: [;
        &apos;High contrast mode support&apos;,
        &apos;Screen reader compatibility&apos;,
        &apos;Text scaling and zoom&apos;} functionality&apos;,
        &apos;Alternative text for images&apos;,
        &apos;Keyboard navigation support';
      ]},
    {
      title: &apos;Motor Accessibility&apos;,
      icon: MousePointer,
      description: &apos;Support for users with motor impairments&apos;,
      features: [
        &apos;Keyboard-only navigation&apos;,
        &apos;Voice control compatibility&apos;,
        &apos;Large click targets&apos;,
        &apos;Customizable interaction timeouts&apos;,
        &apos;Switch control support';
      ]},
    {
      title: &apos;Cognitive Accessibility&apos;,
      icon: AccessibilityIcon,
      description: &apos;Support for users with cognitive differences&apos;,
      features: [
        &apos;Clear and simple language&apos;,
        &apos;Consistent navigation patterns&apos;,
        &apos;Error prevention and recovery&apos;,
        &apos;Progress indicators&apos;,
        &apos;Help and support resources';
      ]},
    {
      title: &apos;Auditory Accessibility&apos;,
      icon: Ear,
      description: &apos;Support for users with hearing impairments&apos;,
      features: [
        &apos;Visual indicators for audio content&apos;,
        &apos;Captions and transcripts&apos;,
        &apos;Text-based alternatives&apos;,
        &apos;Visual alerts and notifications&apos;,
        &apos;Sign language support where applicable';
=======
      title: 'Visual Accessibility', icon: Eye,
      description: 'Support for users with visual impairments', features: [;
        'High contrast mode support', 'Screen reader compatibility',
        'Text scaling and zoom functionality', 'Alternative text for images',
        'Keyboard navigation support';
      ]}, {
      title: 'Motor Accessibility',
      icon: MousePointer, description: 'Support for users with motor impairments',
      features: [
        'Keyboard-only navigation', 'Voice control compatibility',
        'Large click targets', 'Customizable interaction timeouts',
        'Switch control support';
      ]}, {
      title: 'Cognitive Accessibility',
      icon: AccessibilityIcon, description: 'Support for users with cognitive differences',
      features: [
        'Clear and simple language', 'Consistent navigation patterns',
        'Error prevention and recovery', 'Progress indicators',
        'Help and support resources';
      ]}, {
      title: 'Auditory Accessibility',
      icon: Ear, description: 'Support for users with hearing impairments',
      features: [
        'Visual indicators for audio content', 'Captions and transcripts',
        'Text-based alternatives', 'Visual alerts and notifications',
>>>>>>> main
        'Sign language support where applicable';
>>>>>>> main
      ]}
<<<<<<< HEAD
  ];
  const standards = [;
    'WCAG 2.1 AA compliance',;
    'Section 508 compliance',;
    'ADA compliance',;
    'EN 301 549 compliance',;
    'ISO/IEC 40500 compliance';
  ];
  return(;
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>;
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        {/* Header */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'>;
          <div className='flex items-center justify-center mb-4'>;
            <AccessibilityIcon className='h-8 w-8 text-blue-600 mr-3' />;
            <h1 className='text-4xl font-bold text-gray-900'>Accessibility Statement</h1>;
          </div>;
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>;
            We are committed to making our website accessible to all users, including those with disabilities.;
          </p>;
          <p className='text-sm text-gray-500 mt-4'>;
            Last updated: {new Date().toLocaleDateString()}
          </p>;
        </motion.div>;
=======
  ];&apos;&apos;
  const standards = [
<<<<<<< HEAD
    &apos;WCAG 2.1 AA compliance&apos;,
    &apos;Section 508 compliance&apos;,
    &apos;ADA compliance&apos;,
    &apos;EN 301 549 compliance&apos;,
    &apos;ISO/IEC 40500 compliance';
  ]
  return(&apos;&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>
        {/* Header */}&apos;
=======
    'WCAG 2.1 AA compliance', 'Section 508 compliance',
    'ADA compliance', 'EN 301 549 compliance',
    'ISO/IEC 40500 compliance';
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        {/* Header */}
>>>>>>> main
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;'
          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;'
            <AccessibilityIcon className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Accessibility Statement&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            We are committed to making our website accessible to all users, including those with disabilities.&apos;
          </p>
          <p className=&apos;text-sm text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos;
          </p>
        </motion.div>
>>>>>>> main
        {/* Introduction */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Our Accessibility Commitment</h2>;
          <p className='text-gray-600 leading-relaxed mb-4'>;
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities.;
            We are continually improving the user experience for everyone and applying the relevant;
            accessibility standards to ensure we provide equal access to all users.;
          </p>;
          <p className='text-gray-600 leading-relaxed'>;
            Our goal is to make our website and services accessible to all users, regardless of their;
            abilities or the technology they use to access the internet.;
          </p>;
        </motion.div>;
=======
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Our Accessibility Commitment&apos;</h2>
          <p className=&apos;text-gray-600 leading-relaxed mb-4&apos;>
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities.;
            We are continually improving the user experience for everyone and applying the relevant;
            accessibility standards to ensure we provide equal access to all users.&apos;
          </p>
          <p className=&apos;text-gray-600 leading-relaxed&apos;>
            Our goal is to make our website and services accessible to all users, regardless of their;
            abilities or the technology they use to access the internet.&apos;
          </p>
        </motion.div>
>>>>>>> main
        {/* Accessibility Features */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Accessibility Features</h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
            {features.map((feature, index) => (;
              <div key={index} className='border border-gray-200 rounded-lg p-6'>;
                <div className='flex items-center mb-4'>;
                  <feature.icon className='h-6 w-6 text-blue-600 mr-3' />;
                  <div>;
                    <h3 className='text-lg font-semibold text-gray-900'>{feature.title}</h3>;
                    <p className='text-gray-600 text-sm'>{feature.description}</p>;
                  </div>;
                </div>;
                <ul className='space-y-1'>;
                  {feature.features.map((item, itemIndex) => (;
                    <li key={itemIndex} className='flex items-start'>;
                      <span className='text-blue-600 mr-2 mt-1'>•</span>;
                      <span className='text-gray-600 text-sm'>{item}</span>;
                    </li>;
=======
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-6&apos;>Accessibility Features&apos;</h2>
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-6&apos;>
            {features.map((feature, index) => (&apos;}
              <div key={index} className=&apos;border border-gray-200 rounded-lg p-6&apos;>&apos;'
                <div className=&apos;flex items-center mb-4&apos;>&apos;'
                  <feature.icon className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
                  <div>
                    <h3 className=&apos;text-lg font-semibold text-gray-900&apos;>{feature.title}&apos;</h3>
                    <p className=&apos;text-gray-600 text-sm&apos;>{feature.description}&apos;</p>
                  </div>
                </div>
                <ul className=&apos;space-y-1&apos;>
                  {feature.features.map((item, itemIndex) => (&apos;}
                    <li key={itemIndex} className=&apos;flex items-start&apos;>&apos;'
                      <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                      <span className=&apos;text-gray-600 text-sm&apos;>{item}&apos;</span>
                    </li>
>>>>>>> main
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </motion.div>;
        {/* Standards Compliance */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Standards Compliance</h2>;
          <p className='text-gray-600 mb-4'>;
            We strive to meet or exceed the following accessibility standards:;
          </p>;
          <ul className='space-y-2'>;
            {standards.map((standard, index) => (;
              <li key={index} className='flex items-start'>;
                <span className='text-green-600 mr-2 mt-1'>✓</span>;
                <span className='text-gray-600'>{standard}</span>;
              </li>;
=======
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Standards Compliance&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            We strive to meet or exceed the following accessibility standards:&apos;
          </p>
          <ul className=&apos;space-y-2&apos;>
            {standards.map((standard, index) => (&apos;}
              <li key={index} className=&apos;flex items-start&apos;>&apos;'
                <span className=&apos;text-green-600 mr-2 mt-1&apos;>✓&apos;</span>
                <span className=&apos;text-gray-600&apos;>{standard}&apos;</span>
              </li>
>>>>>>> main
            ))}
          </ul>;
        </motion.div>;
        {/* Keyboard Navigation */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>;
          <div className='flex items-center mb-4'>;
            <Keyboard className='h-6 w-6 text-blue-600 mr-3' />;
            <h2 className='text-2xl font-bold text-gray-900'>Keyboard Navigation</h2>;
          </div>;
          <p className='text-gray-600 mb-4'>;
            Our website can be navigated entirely using a keyboard. Here are the key navigation shortcuts:;
          </p>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>General Navigation</h3>;
              <ul className='space-y-1'>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Tab</span>;
                  <span className='text-gray-500'>Move to next element</span>;
                </li>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Shift + Tab</span>;
                  <span className='text-gray-500'>Move to previous element</span>;
                </li>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Enter/Space</span>;
                  <span className='text-gray-500'>Activate buttons/links</span>;
                </li>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Escape</span>;
                  <span className='text-gray-500'>Close modals/menus</span>;
                </li>;
              </ul>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Page Navigation</h3>;
              <ul className='space-y-1'>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Home</span>;
                  <span className='text-gray-500'>Go to top of page</span>;
                </li>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>End</span>;
                  <span className='text-gray-500'>Go to bottom of page</span>;
                </li>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Page Up/Down</span>;
                  <span className='text-gray-500'>Scroll page</span>;
                </li>;
                <li className='flex justify-between'>;
                  <span className='text-gray-600'>Alt + M</span>;
                  <span className='text-gray-500'>Skip to main content</span>;
                </li>;
              </ul>;
            </div>;
          </div>;
        </motion.div>;
=======
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <div className=&apos;flex items-center mb-4&apos;>&apos;'
            <Keyboard className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
            <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>Keyboard Navigation&apos;</h2>
          </div>
          <p className=&apos;text-gray-600 mb-4&apos;>
            Our website can be navigated entirely using a keyboard. Here are the key navigation shortcuts:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>General Navigation&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;'
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Tab&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Move to next element&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Shift + Tab&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Move to previous element&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Enter/Space&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Activate buttons/links&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Escape&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Close modals/menus&apos;</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Page Navigation&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;'
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Home&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Go to top of page&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>End&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Go to bottom of page&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Page Up/Down&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Scroll page&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Alt + M&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Skip to main content&apos;</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
>>>>>>> main
        {/* Mobile Accessibility */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>;
          <div className='flex items-center mb-4'>;
            <Smartphone className='h-6 w-6 text-blue-600 mr-3' />;
            <h2 className='text-2xl font-bold text-gray-900'>Mobile Accessibility</h2>;
          </div>;
          <p className='text-gray-600 mb-4'>;
            Our website is optimized for mobile devices and includes the following accessibility features:;
          </p>;
          <ul className='space-y-2'>;
            <li className='flex items-start'>;
              <span className='text-blue-600 mr-2 mt-1'>•</span>;
              <span className='text-gray-600'>Responsive design that works on all screen sizes</span>;
            </li>;
            <li className='flex items-start'>;
              <span className='text-blue-600 mr-2 mt-1'>•</span>;
              <span className='text-gray-600'>Touch-friendly interface with appropriate target sizes</span>;
            </li>;
            <li className='flex items-start'>;
              <span className='text-blue-600 mr-2 mt-1'>•</span>;
              <span className='text-gray-600'>Voice control and screen reader compatibility</span>;
            </li>;
            <li className='flex items-start'>;
              <span className='text-blue-600 mr-2 mt-1'>•</span>;
              <span className='text-gray-600'>Zoom functionality up to 200% without horizontal scrolling</span>;
            </li>;
            <li className='flex items-start'>;
              <span className='text-blue-600 mr-2 mt-1'>•</span>;
              <span className='text-gray-600'>High contrast mode support</span>;
            </li>;
          </ul>;
        </motion.div>;
=======
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <div className=&apos;flex items-center mb-4&apos;>&apos;'
            <Smartphone className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
            <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>Mobile Accessibility&apos;</h2>
          </div>
          <p className=&apos;text-gray-600 mb-4&apos;>
            Our website is optimized for mobile devices and includes the following accessibility features:&apos;
          </p>
          <ul className=&apos;space-y-2&apos;>&apos;'
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Responsive design that works on all screen sizes&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Touch-friendly interface with appropriate target sizes&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Voice control and screen reader compatibility&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Zoom&apos; functionality up to 200% without horizontal scrolling</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>High contrast mode support&apos;</span>
            </li>
          </ul>
        </motion.div>
>>>>>>> main
        {/* Feedback and Support */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
<<<<<<< HEAD
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>;
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Feedback and Support</h2>;
          <p className='text-gray-600 mb-4'>;
            We welcome your feedback on the accessibility of our website. If you encounter any;
            accessibility barriers or have suggestions for improvement, please contact us:;
          </p>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Accessibility Contact</h3>;
              <p className='text-gray-600'>accessibility@ziontechgroup.com</p>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>General Contact</h3>;
              <p className='text-gray-600'>kleber@ziontechgroup.com</p>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>;
              <p className='text-gray-600'>+1 302 464 0950</p>;
            </div>;
            <div>;
              <h3 className='font-semibold text-gray-900 mb-2'>Response Time</h3>;
              <p className='text-gray-600'>We aim to respond within 2 business days</p>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
=======
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Feedback and Support&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            We welcome your feedback on the accessibility of our website. If you encounter any;
<<<<<<< HEAD
            accessibility barriers or have suggestions for improvement, please contact us:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
=======
            accessibility barriers or have suggestions for improvement, please contact us: </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
>>>>>>> main
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Accessibility Contact&apos;</h3>
              <p className=&apos;text-gray-600&apos;>accessibility@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>General Contact&apos;</h3>
              <p className=&apos;text-gray-600&apos;>kleber@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Phone&apos;</h3>
              <p className=&apos;text-gray-600&apos;>+1 302 464 0950&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Response Time&apos;</h3>
              <p className=&apos;text-gray-600&apos;>We aim to respond within 2 business days&apos;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
>>>>>>> main
  )}
;
export default Accessibility
=======
=======
import { motion } from 'framer-motion
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from 'lucide-react
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
