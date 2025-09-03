const React = dynamic(() => import('react'), { ssr: false });;
import { motion } from 'framer-motion';
<<<<<<<< HEAD:pages/404.tsx

========
const SEO = dynamic(() => import('../components/SEO'), { ssr: false });;
>>>>>>>> main:pages/NotFound.tsx
import { Button } from '../components/ui/Button';
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
  ];

  return (
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
          </motion.div>
>>>>>>> main
          {/* Error Message */}
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
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <p className='text-gray-400'>
              Don't worry, we'll help you find what you are looking for.
>>>>>>> main
>>>>>>> main
            </p>
          </motion.div>
>>>>>>> main
          {/* Action Buttons */}
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
            </Button>
          </motion.div>
>>>>>>> main
          {/* Quick Links */}
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
                      {link.name}
                    </span>;
                  </motion.a>;
                ))}
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
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
>>>>>>> main
