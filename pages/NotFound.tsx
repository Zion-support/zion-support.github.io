import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {   Home,
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
  Shield
} from 'lucide-react';

const NotFound: React.FC = () => {
  const quickLinks = [
    { name: 'Home', url: '/', icon: Home }, { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: Users }, { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Blog', url: '/blog', icon: BookOpen }, { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'Team', url: '/team', icon: Award }, { name: 'Webinars', url: '/webinars', icon: Calendar },
    { name: 'White Papers', url: '/white-papers', icon: FileText }, { name: 'Privacy Policy', url: '/privacy', icon: Shield }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4'>
      <SEO
        title='Page Not Found - Zion Tech Group'
        description='The page you are looking for does not exist. Find what you need with our helpful navigation and search options.'
      />
      <div className='max-w-4xl mx-auto text-center'>
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
            className='mb-8'
          >
            <h1 className='text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text'>
              404
            </h1>
          </motion.div>
          
          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mb-8'
          >
            <h2 className='text-4xl font-bold text-white mb-4'>Page Not Found</h2>
            <p className='text-xl text-gray-300 mb-6'>
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <p className='text-lg text-gray-400 mb-8'>
              Don't worry, we'll help you find what you need.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
          >
            <Button
              onClick={() => window.history.back()}
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Go Back
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              <Home className='w-5 h-5 mr-2' />
              Go Home
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mb-12'
          >
            <h3 className='text-2xl font-bold text-white mb-6'>Popular Pages</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <Card className='p-4 bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors cursor-pointer group'>
                    <a href={link.url} className='block'>
                      <link.icon className='w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors' />
                      <p className='text-sm text-gray-300 group-hover:text-white transition-colors'>
                        {link.name}
                      </p>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='bg-slate-800/50 rounded-lg p-6 border border-slate-700'
          >
            <h3 className='text-xl font-bold text-white mb-4'>Need Help?</h3>
            <p className='text-gray-300 mb-4'>
              If you can't find what you're looking for, our team is here to help.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors'
              >
                <Mail className='w-5 h-5 mr-2' />
                kleber@ziontechgroup.com
              </a>
              <a
                href='tel:+13024640950'
                className='flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors'
              >
                <Phone className='w-5 h-5 mr-2' />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;