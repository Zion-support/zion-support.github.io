import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Home from '@/pages/Home';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ErrorBanner } from '@/components/talent/ErrorBanner';
import { ErrorBanner } from '@/components/talent/ErrorBanner';
import { logWarn, logError } from '@/utils/productionLogger';
    <Layout
const IndexPage: React.FC<HomePageProps> = (props) => {
          <ErrorBanner msg={props.errorMessage || t('home_page_load_error')} />
              <Link href="/services">
                  <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            
                <Cloud className="w-6 h-6 text-white" />
                <Zap className="w-6 h-6 text-white" />
                <Link
                </Link>
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {



      <Head>
      </Head>

                <Link href="/" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/services" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/services" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/about" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/about" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/contact" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link href="/contact" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>

                      <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10">
                      </Link>
                      <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-300 bg-blue-900/20 hover:bg-blue-900/30 md:py-4 md:text-lg md:px-10">
                      </Link>


                  <Link href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  </Link>

                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
