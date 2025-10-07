import { ArrowRight, Code, ExternalLink, Shield, Zap } from 'lucide-react';
import React from 'react';

import { Link } from 'react-router-dom';
      response: 'JSON array of content objects',
      description: 'Authenticate user credentials',
      response: 'JSON array of content objects',
      description: 'Authenticate user credentials',
>>>>>>> origin/merge-fixes-20251005-193002
      description: 'Get analytics and metrics',
      parameters: ['date_range', 'metrics'],
      response: 'Analytics data object',
    },
>>>>>>> origin/merge-fixes-20251005-193002
    <div className='min-h-screen bg-gray-50'>
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md: text-5xl font-bold mb-4'>
            API{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'>
              Documentation
            </span>
>>>>>>> origin/merge-fixes-20251005-193002
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Code className='w-8 h-8 text-blue-600' />
>>>>>>> origin/merge-fixes-20251005-193002
      <div className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            API Endpoints
          </h2>
          <div className='space-y-6'>
>>>>>>> origin/merge-fixes-20251005-193002
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Getting Started
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Ready to integrate with our APIs? Get your API key and start
              building amazing applications.
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300'
              >
                Get API Key
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
              <Link
                href='/docs'
                className='inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300'
              >
                View Full Documentation
                <ExternalLink className='ml-2 w-5 h-5' />
              </Link>