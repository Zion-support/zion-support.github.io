<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need with our helpful navigation and search options." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-400 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 mb-8">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Services
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Get Help
            </Link>
          </div>
        </div>
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
  Home,;,"});,"})
  ArrowLeft,;,"});,"})
  Phone,;,"});,"})
  Mail,;,"});,"})
  FileText,;,"});,"})
  Briefcase,;,"});,"})
  Users,;,"});,"})
  BookOpen,;,"});,"})
  DollarSign,;,"});,"})
  Calendar,;,"});,"})
  Award,;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
const NotFound: React.FC = () => {;,"});,"})
  const quickLinks = [;,"});,"})
    { name: 'Home', url: '/', icon: Home },;,"});,"})
    { name: 'Services', url: '/services', icon: Briefcase },;,"});,"})
    { name: 'About', url: '/about', icon: Users },;,"});,"})
    { name: 'Contact', url: '/contact', icon: Phone },;,"});,"})
    { name: 'Blog', url: '/blog', icon: BookOpen },;,"});,"})
    { name: 'Pricing', url: '/pricing', icon: DollarSign },;,"});,"})
    { name: 'Team', url: '/team', icon: Award },;,"});,"})
    { name: 'Webinars', url: '/webinars', icon: Calendar },;,"});,"})
    { name: 'White Papers', url: '/white-papers', icon: FileText },;,"});,"})
    { name: 'Privacy Policy', url: '/privacy', icon: Shield },;,"});,"})
  ];,"});,"})
;,"});,"})
  return (;,"});,"})
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      />;,"});,"})
      <div className="max-w-4xl mx-auto text-center">;,"});,"})
        <motion.div;,"});,"})
          initial={{ opacity: 0, y: 20 }}"});,"})
          animate={{ opacity: 1, y: 0 }}"});,"})
          transition={{ duration: 0.6 }}"});,"})
        >;,"});,"})
          {/* 404 Error */}"});,"})
          <motion.div;,"});,"})
            initial={{ scale: 0.5 }}"});,"})
            animate={{ scale: 1 }}"});,"})
            transition={{ duration: 0.8, delay: 0.2 }}"});,"})
            className="mb-8";,"});,"})
          >;,"});,"})
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">;,"});,"})
              404;,"});,"})
            </h1>;,"});,"})
          </motion.div>;,"});,"})
          {/* Error Message */}"});,"})
          <motion.div;,"});,"})
            initial={{ opacity: 0, y: 20 }}"});,"})
            animate={{ opacity: 1, y: 0 }}"});,"})
            transition={{ duration: 0.6, delay: 0.4 }}"});,"})
            className="mb-8";,"});,"})
          >;,"});,"})
            <h2 className="text-4xl font-bold text-white mb-4">;,"});,"})
              Page Not Found;,"});,"})
            </h2>;,"});,"})
            <p className="text-xl text-gray-300 mb-6">;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
            </p>;,"});,"})
          </motion.div>;,"});,"})
          {/* Action Buttons */}"});,"})
          <motion.div;,"});,"})
            initial={{ opacity: 0, y: 20 }}"});,"})
            animate={{ opacity: 1, y: 0 }}"});,"})
            transition={{ duration: 0.6, delay: 0.6 }}"});,"})
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12";,"});,"})
          >;,"});,"})
            <Button;,"});,"})
              size="lg";,"});,"})
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white";,"});,"})
              onClick={() => window.history.back()}"});,"})
            >;,"});,"})
              <ArrowLeft className="w-5 h-5 mr-2" />;,"});,"})
              Go Back;,"});,"})
            </Button>;,"});,"})
            <Button;,"});,"})
              size="lg";,"});,"})
              variant="outline";,"});,"})
              onClick={() => (window.location.href = '/')}"});,"})
            >;,"});,"})
              <Home className="w-5 h-5 mr-2" />;,"});,"})
              Go Home;,"});,"})
            </Button>;,"});,"})
          </motion.div>;,"});,"})
          {/* Quick Links */}"});,"})
          <motion.div;,"});,"})
            initial={{ opacity: 0, y: 20 }}"});,"})
            animate={{ opacity: 1, y: 0 }}"});,"})
            transition={{ duration: 0.6, delay: 0.8 }}"});,"})
          >;,"});,"})
            <Card className="p-8">;,"});,"})
              <h3 className="text-2xl font-bold text-white mb-6">;,"});,"})
                Popular Pages;,"});,"})
              </h3>;,"});,"})
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">;,"});,"})
                {quickLinks.map((link, index) => (;,"});,"})
                  <motion.a;,"});,"})
                    key={link.url}"});,"})
                    href={link.url}"});,"})
                    initial={{ opacity: 0, y: 20 }}"});,"})
                    animate={{ opacity: 1, y: 0 }}"});,"})
                    transition={{ duration: 0.6, delay: 0.1 * index }}"});,"})
                    className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group";,"});,"})
                  >;,"});,"})
                    <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />;,"});,"})
                    <span className="text-gray-300 group-hover:text-white text-sm text-center">;,"});,"})
                      {link.name}"});,"})
                    </span>;,"});,"})
                  </motion.a>;,"});,"})
                ))}"});,"})
              </div>;,"});,"})
            </Card>;,"});,"})
          </motion.div>;,"});,"})
          {/* Help Section */}"});,"})
          <motion.div;,"});,"})
            initial={{ opacity: 0, y: 20 }}"});,"})
            animate={{ opacity: 1, y: 0 }}"});,"})
            transition={{ duration: 0.6, delay: 1.0 }}"});,"})
            className="mt-12";,"});,"})
          >;,"});,"})
            <div className="bg-slate-800/50 rounded-lg p-8">;,"});,"})
              <h3 className="text-2xl font-bold text-white mb-4">;,"});,"})
                Still Need Help?;,"});,"})
              </h3>;,"});,"})
              <p className="text-gray-300 mb-6">;,"});,"})
                If you can&apos;t find what you&apos;re looking for, our team is;,"});,"})
                here to help.;,"});,"})
              </p>;,"});,"})
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;,"});,"})
                <a;,"});,"})
                  href="/contact";,"});,"})
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity";,"});,"})
                >;,"});,"})
                  <Phone className="w-5 h-5 mr-2" />;,"});,"})
                  Contact Support;,"});,"})
                </a>;,"});,"})
                <a;,"});,"})
                  href="mailto:support@ziontechgroup.com";,"});,"})
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors";,"});,"})
                >;,"});,"})
                  <Mail className="w-5 h-5 mr-2" />;,"});,"})
                  Email Us;,"});,"})
                </a>;,"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
          </motion.div>;,"});,"})
        </motion.div>;,"});,"})
      </div>;,"});,"})
    </div>;,"});,"})
  );,"});,"})
};,"});,"})
;,"});,"})
export default NotFound;,"});,"})
;,"});,"})
=======
const React = dynamic(() => import('react'), { ssr: false });;
import { motion } from 'framer-motion';
<<<<<<<< HEAD:pages/404.tsx

========
const SEO = dynamic(() => import('../components/SEO'), { ssr: false });;
>>>>>>>> main:pages/NotFound.tsx
import { Button } from '../components/ui/Button';
<<<<<<< HEAD
import { Card } from '../components/ui/Card;';
import {   Home,
=======
import { Card } from '../components/ui/Card';
<<<<<<< HEAD
import {   Home,;
  ArrowLeft,;
  Phone,;
  Mail,;
  FileText,;
  Briefcase,;
  Users,;
  BookOpen,;
  DollarSign,;
  Calendar,;
  Award,;
  Shield;
} from 'lucide-react';
const NotFound: React.FC = () => {;
  const quickLinks = [;
    { name: 'Home', url: '/', icon: Home }, { name: 'Services', url: '/services', icon: Briefcase },;
    { name: 'About', url: '/about', icon: Users }, { name: 'Contact', url: '/contact', icon: Phone },;
    { name: 'Blog', url: '/blog', icon: BookOpen }, { name: 'Pricing', url: '/pricing', icon: DollarSign },;
    { name: 'Team', url: '/team', icon: Award }, { name: 'Webinars', url: '/webinars', icon: Calendar },;
    { name: 'White Papers', url: '/white-papers', icon: FileText }, { name: 'Privacy Policy', url: '/privacy', icon: Shield }
  ];
;
  return (;
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4'>;
      <SEO;
        title='Page Not Found - Zion Tech Group';
        description='The page you are looking for does not exist. Find what you need with our helpful navigation and search options.';
      />;
      <div className='max-w-4xl mx-auto text-center'>;
        <motion.div;
=======
import {
  Home,
>>>>>>> main
  ArrowLeft,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  Award,
<<<<<<< HEAD
  Shield
} from 'lucide-react;';
const: NotFound: React.FC: = () => ,{,
  const quickLinks = [;
    { name: 'Home,', url: '/,', icon: Home, }, { name: 'Services,', url: '/services,', icon: Briefcase, },;
    { name: 'About,', url: '/about,', icon: Users, }, { name: 'Contact,', url: '/contact,', icon: Phone, },;
    { name: 'Blog,', url: '/blog,', icon: BookOpen, }, { name: 'Pricing,', url: '/pricing,', icon: DollarSign, },;
    { name: 'Team,', url: '/team,', icon: Award, }, { name: 'Webinars,', url: '/webinars,', icon: Calendar, },;
    { name: 'White: Papers,', url: '/white-papers,', icon: FileText, }, { name: 'Privacy: Policy,', url: '/privacy,', icon: Shield, };
=======
<<<<<<< HEAD
  Shield'
=======
  Shield,
>>>>>>> main
} from 'lucide-react';
const NotFound: React.FC = () => {
<<<<<<< HEAD
  const quickLinks = ['
    { nam,
    e: 'Home', url: '/', icon: Home }, '
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: Users }, '
    { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Blog', url: '/blog', icon: BookOpen }, '
    { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'Team', url: '/team', icon: Award }, '
    { name: 'Webinars', url: '/webinars', icon: Calendar },
    { name: 'White Papers', url: '/white-papers', icon: FileText }, '
    { name: 'Privacy Policy', url: '/privacy', icon: Shield }
  ];

  return ('
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4'>
      <SEO'
        title='Page Not Found - Zion Tech Group''
        description="The page you are looking for doesn't exist. Find what you need with our helpful navigation and search options."
      />"
=======
  const quickLinks = [
<<<<<<< HEAD
    { name: 'Home', url: '/', icon: Home }, { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: Users }, { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Blog', url: '/blog', icon: BookOpen }, { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'Team', url: '/team', icon: Award }, { name: 'Webinars', url: '/webinars', icon: Calendar },
    { name: 'White Papers', url: '/white-papers', icon: FileText }, { name: 'Privacy Policy', url: '/privacy', icon: Shield }
  ]
=======
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'Team', url: '/team', icon: Award },
    { name: 'Webinars', url: '/webinars', icon: Calendar },
    { name: 'White Papers', url: '/white-papers', icon: FileText },
    { name: 'Privacy Policy', url: '/privacy', icon: Shield },
>>>>>>> main
  ];
>>>>>>> main

  return (
<<<<<<< HEAD
    <div: className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4'>;
      <SEO: title='Page Not Found - Zion Tech Group';
        description='The: page you are looking for does not exist. Find what you need with our helpful navigation and search options.';
      />
      <div: className='max-w-4xl mx-auto text-center'>;
        <motion.div: initial={{ opacity:  ,0, y: 20, }}
          animate={{ opacity:  ,1, y: 0, }}
          transition={{ duration: 0.6, }}
        >
          {/* 404: Error */}
          <motion.div
            initial={{ scale: 0.5, }}
            animate={{ scale: 1, }}
            transition={{ duration: 0.,8, delay: 0.2, }}
            className='mb-8';
          >
            <h1: className='text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text'>;
              404: </h1>
=======
<<<<<<<< HEAD:pages/404.tsx
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4'>
>>>>>>> main
      <div className='max-w-4xl mx-auto text-center'>
========
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <SEO
        title="Page Not Found - Zion Tech Group"
        description="The page you are looking for does not exist. Find what you need with our helpful navigation and search options."
      />
      <div className="max-w-4xl mx-auto text-center">
>>>>>>>> main:pages/NotFound.tsx
        <motion.div
>>>>>>> main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >;
          {/* 404 Error */}
          <motion.div;
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
            className='mb-8'
          >'
            <h1 className='text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text'>
=======
<<<<<<< HEAD
            className='mb-8';
          >;
            <h1 className='text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text'>;
              404;
            </h1>;
          </motion.div>;
=======
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
>>>>>>> main
              404
            </h1>
>>>>>>> main
          </motion.div>
>>>>>>> main
          {/* Error Message */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity:  ,0, y: 20, }}
            animate={{ opacity:  ,1, y: 0, }}
            transition={{ duration: 0.,6, delay: 0.4, }}
            className='mb-8';
          >
            <h2: className='text-4xl font-bold text-white mb-4'>Page Not Found</h2>;
            <p: className='text-xl text-gray-300 mb-6'>;
              Sorry, the: page you are looking for doesn&apos;t: exist or has been moved.
            </p>
            <p className='text-gray-400'>;
              Don&apos;t: worry, we&apos;ll: help you find what you are looking for.
=======
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
            className='mb-8'
          >'
            <h2 className='text-4xl font-bold text-white mb-4'>Page Not Found</h2>'
            <p className='text-xl text-gray-300 mb-6>
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>'
            <p className='text-gray-400>
              Don't worry, we'll help you find what you're looking for.
=======
<<<<<<< HEAD
            className='mb-8';
          >;
            <h2 className='text-4xl font-bold text-white mb-4'>Page Not Found</h2>;
            <p className='text-xl text-gray-300 mb-6'>;
              Sorry, the page you are looking for doesn't exist or has been moved.;
            </p>;
            <p className='text-gray-400'>;
              Don't worry, we'll help you find what you are looking for.;
            </p>;
          </motion.div>;
=======
            className="mb-8"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved.
            </p>
            <p className="text-gray-400">
              Don&apos;t worry, we&apos;ll help you find what you are looking
              for.
=======
            <h2 className='text-4xl font-bold text-white mb-4'>Page Not Found</h2>
            <p className='text-xl text-gray-300 mb-6'>
<<<<<<< HEAD
              Sorry, the page you are looking for doesn&apost exist or has been moved.
            </p>
            <p className='text-gray-400'>
              Don&apos;t worry, we&aposll help you find what you are looking for.
=======
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <p className='text-gray-400'>
              Don't worry, we'll help you find what you are looking for.
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </p>
          </motion.div>
>>>>>>> main
          {/* Action Buttons */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity:  ,0, y: 20, }}
            animate={{ opacity:  ,1, y: 0, }}
            transition={{ duration: 0.,6, delay: 0.6, }}
            className='flex: flex-col sm: flex-row: gap-4 justify-center mb-12'',;,;
          >
            <Button: size='lg';
              className='bg-gradient-to-r: from-blue-500 to-purple-600 text-white';
              onClick={() => window.history.back()}
            >
              <ArrowLeft: className='w-5 h-5 mr-2' />;
              Go: Back
            </Button>
            <Button
              size='lg';
              variant='outline';
              onClick={() => window.location.href: = '/'};
            >
              <Home: className='w-5 h-5 mr-2' />;
              Go: Home
=======
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD
            className='flex flex-col sm:flex-row gap-4 justify-center mb-12';
          >;
            <Button;
              size='lg';
              className='bg-gradient-to-r from-blue-500 to-purple-600 text-white';
              onClick={() => window.history.back()}
            >;
              <ArrowLeft className='w-5 h-5 mr-2' />;
              Go Back;
            </Button>;
            <Button;
              size='lg';
              variant='outline';
              onClick={() => window.location.href = '/'}
            >;
              <Home className='w-5 h-5 mr-2' />;
              Go Home;
            </Button>;
          </motion.div>;
=======
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
<<<<<<< HEAD
            <Button'
              size='lg''
              className='bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              onClick={() => window.history.back()}
            >'
              <ArrowLeft className='w-5 h-5 mr-2' />
              Go Back
            </Button>
            <Button'
              size='lg''
              variant='outline''
              onClick={() => window.location.href = '/'}
            >'
              <Home className='w-5 h-5 mr-2' />
=======
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = '/')}
            >
              <Home className="w-5 h-5 mr-2" />
>>>>>>> main
              Go Home
>>>>>>> main
            </Button>
          </motion.div>
>>>>>>> main
          {/* Quick Links */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity:  ,0, y: 20, }}
            animate={{ opacity:  ,1, y: 0, }}
            transition={{ duration: 0.,6, delay: 0.8, }}
          >
            <Card: className='p-8'>;
              <h3: className='text-2xl font-bold text-white mb-6'>Popular Pages</h3>;
              <div: className='grid grid-cols-2 md: grid-cols-5: gap-4'>',;,;
                {quickLinks.map((link, index) => (
                  <motion.a: key={link.url}
                    href={link.url}
                    initial={{ opacity:  ,0, y: 20, }}
                    animate={{ opacity:  ,1, y: 0, }}
                    transition={{ duration: 0.,6, delay: 0.1: * index, }}
                    className='flex flex-col items-center p-4 rounded-lg bg-slate-700 hover: bg-slate-600: transition-colors group'',;,;
                  >
                    <link.icon: className='w-6 h-6 text-blue-400 group-hover: text-blue-300: mb-2' />',;,;
                    <span: className='text-gray-300 group-hover: text-white: text-sm text-center'>',;,;
=======
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
<<<<<<< HEAD
          >'
            <Card className='p-8>
              <h3 className='text-2xl font-bold text-white mb-6'>Popular Pages</h3>'
              <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
=======
<<<<<<< HEAD
          >;
            <Card className='p-8'>;
              <h3 className='text-2xl font-bold text-white mb-6'>Popular Pages</h3>;
              <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>;
                {quickLinks.map((link, index) => (;
                  <motion.a;
=======
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
>>>>>>> main
                {quickLinks.map((link, index) => (
                  <motion.a
>>>>>>> main
                    key={link.url}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
<<<<<<< HEAD
                    className='flex flex-col items-center p-4 rounded-lg bg-slate-700 hover: bg-slate-600 transition-colors group'
                  >;
                    <link.icon className='w-6 h-6 text-blue-400 group-hove,
    r:text-blue-300 mb-2' />
                    <span className='text-gray-300 group-hove,
    r:text-white text-sm text-center'>
=======
<<<<<<< HEAD
                    className='flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group';
                  >;
                    <link.icon className='w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2' />;
                    <span className='text-gray-300 group-hover:text-white text-sm text-center'>;
=======
                    className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group"
                  >
                    <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />
                    <span className="text-gray-300 group-hover:text-white text-sm text-center">
>>>>>>> main
>>>>>>> main
>>>>>>> main
                      {link.name}
                    </span>;
                  </motion.a>;
                ))}
<<<<<<< HEAD
              </div>
            </Card>
          </motion.div>
          {/* Help: Section */}
          <motion.div
            initial={{ opacity:  ,0, y: 20, }}
            animate={{ opacity:  ,1, y: 0, }}
            transition={{ duration: 0.,6, delay: 1.0, }}
            className='mt-12';
          >
            <div: className='bg-slate-800/50 rounded-lg p-8'>;
              <h3: className='text-2xl font-bold text-white mb-4'>Still Need Help?</h3>;
              <p: className='text-gray-300 mb-6'>;
                If: you can&apos;t: find what you&apos;re: looking for, our team is here to help.
              </p>
              <div className='flex flex-col sm: flex-row: gap-4 justify-center'>',;,;
                <Link: href='/contact';
                  className='inline-flex: items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: opacity-90: transition-opacity'',;,;
                >
                  <Phone: className='w-5 h-5 mr-2' />;
                  Contact: Support
                </Link>
                <a
                  href='mailto: kleber@ziontechgroup.com'',;,;
                  className='inline-flex: items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover: bg-slate-700: transition-colors'',;,;
                >
                  <Mail: className='w-5 h-5 mr-2' />;
                  Email: Us
=======
              </div>;
            </Card>;
          </motion.div>;
          {/* Help Section */}
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
<<<<<<< HEAD
            className='mt-12';
          >;
<<<<<<< HEAD
            <div className='bg-slate-800/50 rounded-lg p-8>
              <h3 className='text-2xl font-bold text-white mb-4'>Still Need Help?</h3>'
              <p className='text-gray-300 mb-6'>
<<<<<<< HEAD
                If you can&apos;t find what you&aposre looking for, our team is here to help.
=======
                If you can&apos;t find what you&apos;re looking for, our team is here to help.;
              </p>'
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                <a'
                  href='/contact''
=======
            <div className='bg-slate-800/50 rounded-lg p-8'>;
              <h3 className='text-2xl font-bold text-white mb-4'>Still Need Help?</h3>;
              <p className='text-gray-300 mb-6'>;
                If you can&apos;t find what you&apos;re looking for, our team is here to help.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                <a;
                  href='/contact';
                  className='inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity';
                >;
                  <Phone className='w-5 h-5 mr-2' />;
                  Contact Support;
                </a>;
                <a;
                  href='mailto:kleber@ziontechgroup.com';
                  className='inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors';
                >;
                  <Mail className='w-5 h-5 mr-2' />;
                  Email Us;
                </a>;
              </div>;
            </div>;
          </motion.div>;
        </motion.div>;
      </div>;
    </div>;
  );
};
;
export default NotFound;
=======
            className="mt-12"
          >
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-300 mb-6">
                If you can&apos;t find what you&apos;re looking for, our team is
                here to help.
>>>>>>> main
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
=======
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
>>>>>>> main
                  className='inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity'
>>>>>>> main
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
<<<<<<< HEAD
                <a'
                  href='mailt,
    o:support@ziontechgroup.com''
                  className='inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hove,
    r:bg-slate-700 transition-colors'
                >;
                  <Mail className='w-5 h-5 mr-2' />
                  Email Us;
=======
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
>>>>>>> main
>>>>>>> main
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
>>>>>>> main
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
export default NotFound
=======
export default NotFound;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
