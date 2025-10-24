"use client"

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Digital Transformation</h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with our digital transformation solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>;
  );
import React from 'react';
import Head from "next/head";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DigitalTransformationPage() {
  return (
    <>
<<<<<<< HEAD:all-pages-backup/digital-transformation/page.tsx
      <title>DigitalTransformation - Zion Tech Group</title>
        <meta name="description" content="Professional digitaltransformation services by Zion Tech Group." />
:app/digital-transformation/page.tsx
      
      
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="con tainermx-auto px-4 py-16">
          <h1 className="tex t-4xlfont-bold text-white mb-6">DigitalTransformation</h1>
          <p className="tex t-lgtext-gray-300 mb-8">Professional digitaltransformation services by Zion Tech Group.</p>
          
          <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="ml-2h-4w-4" />
          </Link>
        </div>
      </div>
</>;
  )}