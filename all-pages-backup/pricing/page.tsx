"use client"

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">
            Flexible pricing plans designed to fit your budget and requirements.
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

export default function PricingPage() {
  return (
    <>
