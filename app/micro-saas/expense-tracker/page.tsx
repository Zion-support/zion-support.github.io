<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

const ExpenseTrackerPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Expense Tracker - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Expense Tracker solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Expense Tracker</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive expense tracker solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
        <meta name="description" content="Smart expense tracking and management tool." />
        <meta name="keywords" content="expense, tracker, finance, management" />
=======
    <React.Fragment>
      <Helmet>
        <title>{title} | Zion Tech Group - Micro SaaS Solutions</title>
        <meta name="description" content={`Powerful ${title.toLowerCase()} micro SaaS solution for modern businesses.`} />
        <link rel="canonical" href={`https: //ziontechgroup.com/micro-saas/${serviceName,}`} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expense Tracker
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Smart expense tracking and management tool.
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
<<<<<<< HEAD
      <Footer />
    </>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default ExpenseTrackerPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function ExpensetrackerPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Expense Tracker - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Expense Tracker</h1>
        <p className="text-lgtext-gray-300mb-8">Professional expense tracker services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
