import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
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
  Calendar,
  Award,
  Shield
} from 'lucide-react';

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
    { name: 'Privacy Policy', url: '/privacy', icon: Shield }
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
          <div className='mb-8'>
            <h1 className='text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4'>
              404
            </h1>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Page Not Found
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Button
              onClick={() => window.history.back()}
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Go Back
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center justify-center'
            >
              <Home className='w-5 h-5 mr-2' />
              Go Home
            </Button>
          </div>

          {/* Quick Links */}
          <Card className='bg-slate-800/50 border-slate-700 p-8'>
            <h3 className='text-2xl font-bold text-white mb-6'>
              Popular Pages
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className='flex flex-col items-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors group'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className='w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2' />
                  <span className='text-sm text-gray-300 group-hover:text-white text-center'>
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </Card>

          {/* Contact Information */}
          <div className='mt-12 text-center'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Need Help?
            </h3>
            <p className='text-gray-300 mb-6'>
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                href='tel:+13024640950'
                className='flex items-center text-blue-400 hover:text-blue-300 transition-colors'
              >
                <Phone className='w-5 h-5 mr-2' />
                +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='flex items-center text-blue-400 hover:text-blue-300 transition-colors'
              >
                <Mail className='w-5 h-5 mr-2' />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;