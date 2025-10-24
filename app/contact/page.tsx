<<<<<<< HEAD
'use client';

import React, { memo } from 'react';
import EnhancedSEOHead from '../components/EnhancedSEOHead';
import { useForm } from '../hooks/useForm';

export const dynamic = 'force-dynamic';

const ContactPage: React.FC = memo(() => {
  const {
    data: formData,
    isSubmitting,
    submitStatus,
    errors,
    handleInputChange,
    handleSubmit,
  } = useForm({
    initialData: {
      name: '',
      email: '',
      message: ''
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            contact services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">Contact Us<ArrowRight className="ml-2 h-4 w-4" />
          </Link>
>>>>>>> origin/main
        </div>
      </div>
      <Footer />
    </div>);
}