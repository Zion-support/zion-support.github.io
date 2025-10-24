"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Home, ArrowLeft, Brain, Zap, Shield, Target, TrendingUp, CheckCircle, Star, Clock, Globe, Database, Users, Settings } from 'lucide-react';

const Page = () => {
  return (
    <>
      <Head>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Advanced page solution for modern businesses" />
        <meta name="keywords" content="AI, artificial intelligence, page, AI solutions, intelligent automation" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge page technology and AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;