import React from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { useAuth } from '@/hooks/useAuth';
import { ErrorProvider } from '@/context/ErrorContext';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import dynamic from 'next/dynamic';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import {

import type { AppProps } from 'next/app';
import '../styles/globals.css';


        <Link href="/" style={{ 
        }}>Zion Tech Group</Link>
        
          <Link href="/" style={{ 
          }}>Home</Link>
          <Link href="/services" style={{ 
          }}>All Services</Link>
          <Link href="/micro-saas" style={{ 
          }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ 
          }}>AI Services</Link>
          <Link href="/it-services" style={{ 
          }}>IT Services</Link>
          <Link href="/services-catalog" style={{ 
          }}>Catalog</Link>
          <Link href="/services-overview" style={{ 
          }}>Overview</Link>
          <Link href="/services-comparison" style={{ 
          }}>Compare</Link>
          <Link href="/pricing" style={{ 
          }}>Pricing</Link>
          <Link href="/about" style={{ 
          }}>About</Link>
          <Link href="/contact" style={{ 
          }}>Contact</Link>

          <Link href="/contact" style={{ 
          }}>Contact</Link>
      
          <Link href="/" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>All Services</Link>
          <Link href="/micro-saas" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
          <Link href="/it-services" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
          <Link href="/services-catalog" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
          <Link href="/services-overview" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>Overview</Link>
          <Link href="/services-comparison" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>Compare</Link>
          <Link href="/pricing" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/about" style={{ 
          }} onClick={() => setMobileMenuOpen(false)}>About</Link>


            <Link href="/solutions" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Solutions</Link>
            <Link href="/solutions" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Solutions</Link>
            <Link href="/solutions/enterprise" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Enterprise Solutions</Link>
            <Link href="/solutions/enterprise" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Enterprise Solutions</Link>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Services</Link>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Micro SaaS Products</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Services</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IT Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IT Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>

            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud Cost Optimization</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud Cost Optimization</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Automation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Automation</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Digital Transformation</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Digital Transformation</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Process Automation</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Process Automation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Predictive Analytics</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Predictive Analytics</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Content Creation</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Content Creation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Customer Support</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Customer Support</Link>

            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <Link href="/careers" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Careers</Link>
            <Link href="/careers" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Careers</Link>
            <Link href="/docs" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Documentation</Link>
            <Link href="/docs" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Documentation</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>

            <Link href="/contact" style={{ 
            }}>Request Quote</Link>
      
          <Link href="/privacy" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Privacy Policy</Link> | 
          <Link href="/privacy" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Privacy Policy</Link> | 
          <Link href="/terms" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Terms of Service</Link>
          <Link href="/terms" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Terms of Service</Link>

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
