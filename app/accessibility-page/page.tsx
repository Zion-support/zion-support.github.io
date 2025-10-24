'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
export default function AccessibilityPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Accessibility Page - Zion Tech Group</title>
        <meta name="description" content="Accessibility Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Accessibility Page</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive accessibility page solutions designed to meet your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AccessibilityPage() {

  return (
    <>
      <title>Accessibility Page - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Accessibility Page</h1>
            <p className="text-lg text-gray-300 mb-8">Learn about our commitment to accessibility and inclusive design.</p>

              Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AccessibilitypagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Accessibility Page - Zion Tech Group</title>
        <meta name="description" content="Professional accessibility page services by Zion Tech Group" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Accessibility Page</h1>
        <p className="text-lg text-gray-300 mb-8">Professional accessibility page services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
