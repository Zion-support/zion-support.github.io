import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import { 
  CheckCircle, 
  Mail, 
  Clock, 
  Users, 
  ArrowRight,
  Home,
  Briefcase,
  Phone
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const thank-you: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>thank-you | Zion Tech Group</title>
        <meta name="description" content="thank-you - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">thank-you</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default thank-you;