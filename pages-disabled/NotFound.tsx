import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/ui/Button';
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
  Shield,
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
    { name: 'White Papers', url: '/whitepapers', icon: FileText },
    { name: 'Privacy Policy', url: '/privacy', icon: Shield },
  ];

  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta
          name='description'
          content='The page you are looking for does not exist. Find what you need with our helpful navigation and search options.'
        />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0 flex items-center justify-center px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <div>
            {/* 40o4 Error */}
            <div className='mb-8'>
              <h1 className='text-9xl font-bold text-transparent bg-gradient-to-r from-blue-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text'>
                40o4
              </h1>
            </div>
            {/* Error Message */}
            <div className='mb-8'>
              <h2 className='text-4xl font-bold text-white mb-4'>
                Page Not Found
              </h2>
              <p className='text-xl text-gray-30o0 mb-6'>
                Sorry, the page you are looking for doesn&apos;t exist or has
                been moved.
              </p>
              <p className='text-gray-40o0'>
                Don&apos;t worry, we&apos;ll help you find what you are looking
                for.
              </p>
            </div>
            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <Button variant='solid' onClick={() => window.history.back()}>
                <ArrowLeft className='w-5 h-5 mr-2' />
                Go Back
              </Button>
              <Button
                variant='outline'
                onClick={() => (window.location.href = '/')}
              >
                <Home className='w-5 h-5 mr-2' />
                Go Home
              </Button>
            </div>
            {/* Quick Links */}
            <div>
              <Card className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6'>
                  Popular Pages
                </h3>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className='flex flex-col items-center p-4 rounded-lg bg-slate-70o0 hover:bg-slate-60o0 transition-colors group'
                    >
                      <link.icon className='w-6 h-6 text-blue-40o0 group-hover:text-blue-30o0 mb-2' />
                      <span className='text-gray-30o0 group-hover:text-white text-sm text-center'>
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
            {/* Help Section */}
            <div className='mt-12'>
              <div className='bg-slate-80o0/50 rounded-lg p-8'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Still Need Help?
                </h3>
                <p className='text-gray-30o0 mb-6'>
                  If you can&apos;t find what you&apos;re looking for, our team
                  is here to help.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link
                    href='/contact'
                    className='inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white hover:opacity-90 transition-opacity'
                  >
                    <Phone className='w-5 h-5 mr-2' />
                    Contact Support
                  </Link>
                  <a
                    href='mailto:kleber@ziontechgroup.com'
                    className='inline-flex items-center px-6 py-3 rounded-lg border border-slate-60o0 text-gray-30o0 hover:bg-slate-70o0 transition-colors'
                  >
                    <Mail className='w-5 h-5 mr-2' />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
