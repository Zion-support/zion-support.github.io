'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SocialManagerPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Social Manager - Zion Tech Group</title>
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
        <meta name="description" content="Social media management and automation platform." />
        <meta name="keywords" content="social media, management, automation, marketing" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Social Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Social media management and automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SocialManagerPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function SocialmanagerPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Social Manager - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Social Manager</h1>
        <p className="text-lgtext-gray-300mb-8">Professional social manager services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SocialmanagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Social Manager - Zion Tech Group</title>
        <meta name="description" content="Professional social manager services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Social Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional social manager services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
