import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import Link from 'next/link';
import {
  Home,
  ArrowLeft,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Users,
  BookOpen,
  DollarSign,
<<<<<<< HEAD
  Calendar,
=======
  Calendar,;
  Award,;
  Shield} from 'lucide-react';
const NotFound: React.FC = () => {
  const quickLinks = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'Team', url: '/team', icon: Award },
    { name: 'Webinars', url: '/webinars', icon: Calendar },
    { name: 'White Papers', url: '/white-papers', icon: FileText },
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d
  Award,
  Shield,
  Search
} from 'lucide-react';

export default function Custom404() {
  const quickLinks = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Solutions', url: '/solutions', icon: Award },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Careers', url: '/careers', icon: Briefcase },
    { name: 'Pricing Guide', url: '/pricing-guide', icon: DollarSign },
    { name: 'Help Center', url: '/help', icon: FileText },
    { name: 'Privacy Policy', url: '/privacy', icon: Shield }];

  return (
<:pages/404.tsx
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4'>
      <div className='max-w-4xl mx-auto text-center'>
=
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <SEO
        title="Page Not Found - Zion Tech Group"
        description="The page you are looking for does not exist. Find what you need with our helpful navigation and search options."
      />
      <div className="max-w-4xl mx-auto text-center">
>:pages/NotFound.tsx
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Error */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              404
            </h1>
          </motion.div>
          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
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
            <h2 className='text-4xl font-bold text-white mb-4'>Page Not Found</h2>
            <p className='text-xl text-gray-300 mb-6'>
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <p className='text-gray-400'>
              Don't worry, we'll help you find what you are looking for.
            </p>
          </motion.div>
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
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
              Go Home
            </Button>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group"
                  >
                    <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />
                    <span className="text-gray-300 group-hover:text-white text-sm text-center">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12"
          >
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-300 mb-6">
                If you can&apos;t find what you&apos;re looking for, our team is
                here to help.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
                  className='inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity'
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )};

export default NotFound;
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta
          name="description"
          content="The page you are looking for doesn't exist. Find what you need with our helpful navigation and search options."
        />
        '
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you are looking for doesn&apos;t exist or has been moved.
              ' Let&apos;s help you find what you need.'
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              <Link
                href="/search"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="bg-white/10 hover: bg-white/20 p-4 rounded-lg transition-all duration-300 group"
                >
                  <link.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300" />
                  <span className="text-white text-sm font-medium group-hover:text-blue-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )}
