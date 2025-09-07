import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* 404 Icon */}
            <motion.div
              className="mb-8"
              variants={fadeInUp}
            >
              <div className="relative">
                <motion.div
                  className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <AlertCircle className="w-16 h-16 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-sm font-bold">!</span>
                </motion.div>
              </div>
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              404
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white mb-6"
              variants={fadeInUp}
            >
              Page Not Found
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-md mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Link href="/">
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </motion.button>
              </Link>

              <motion.button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors duration-200 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </motion.button>

              <Link href="/search">
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5" />
                  Search
                </motion.button>
              </Link>
            </motion.div>

            {/* Help Text */}
            <motion.div
              className="mt-12 text-center"
              variants={fadeInUp}
            >
              <p className="text-gray-400 text-sm">
                Need help?{' '}
                <a
                  href="mailto:support@ziontechgroup.com" 
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  contact our support team
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page;




ursor/fix-website-loading-errors-and-merge-6662

          </Link>
        </main>
      </div>
    </>
  );

);
import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Custom404 - Function description
 */
function Custom404() {

}


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextPage } from 'next';
import Head from 'next/head';
const NotFoundPage: NextPage = () => {

  return (
    <>;
      <Head>;
          </Link>;
        </div>;

}


      </div>;
    </>);
}
import Head from 'next/head';
import Link from 'next/link';
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-2xl px-4">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-8">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Go Back Home
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          >
            Go Home




          </Link>
        </main>
import {
  Home, ArrowLeft,
  Phone, Mail,
  FileText, Briefcase,
  Users, BookOpen,
  DollarSign, Award,
  Shield, Search,
} from 'lucide-react';

export default function Custom404() {
  const quickLinks = [
    { name: 'Home', url: '/', icon: Home }, { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Solutions', url: '/solutions', icon: Award }, { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone }, { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Careers', url: '/careers', icon: Briefcase }, { name: 'Pricing Guide', url: '/pricing-guide', icon: DollarSign },
    { name: 'Help Center', url: '/help', icon: FileText }, { name: 'Privacy Policy', url: '/privacy', icon: Shield },
  ];

  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta
          name="description"
          content="The page you are looking for doesn&apos;t exist. Find what you need with our helpful navigation and search options."'
        />
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
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      </div>
</>
  );
import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Custom404 - Function description
 */
function Custom404() {

}


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextPage } from 'next';
import Head from 'next/head';
const NotFoundPage: NextPage = () => {
  return (
    <>;
      <Head>;
        <title>404 - Page Not Found | Zion Tech Group</title>;
        <meta name="description" content="The page you're looking for doesn't exist." />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      </Head>;
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text-6xl font-bold mb-4">404</h1>;
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>;
          <p className="text-slate-300 mb-8">;
            The page you're looking for doesn't exist.;
          </p>;
          <Link;
            href="/";
            className="px-6 py-3 bg-blue-600: hover:bg-blue-700 rounded-lg font-semibold transition-colors";
          >;
            Go Home;
          </Link>;
        </div>;
      </main>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


ursor/fix-website-loading-errors-and-merge-6662
}
}

}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
export default NotFound;
