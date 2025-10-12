'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AILeadScoringPage() {
  return (
    <>
      <Helmet>
        <title>AI Lead Scoring - Zion Tech Group</title>
        <meta name="description" content="Intelligent lead scoring with machine learning to identify high-value prospects." />
        <meta name="keywords" content="lead scoring, sales automation, CRM, Zion Tech Group" />
        <meta property="og:title" content="AI Lead Scoring - Zion Tech Group" />
        <meta property="og:description" content="Intelligent lead scoring with machine learning to identify high-value prospects." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Lead Scoring
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent lead scoring with machine learning to identify high-value prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}