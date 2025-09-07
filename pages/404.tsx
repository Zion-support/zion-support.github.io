<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

const Page = () => {
  return (
    <MainLayout
      title="404 - Page Not Found"
      description="Page not found"
    >
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

<<<<<<< HEAD
export default Page;
=======
export default NotFound;
=======
import React from 'react'

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>

  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
