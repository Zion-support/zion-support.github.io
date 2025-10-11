<<<<<<< HEAD
// Next.js type declarations

import { NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { Router } from 'next/router';

// Extend Next.js types
declare module 'next' {
  interface NextPageContext {
    query: {
      [key: string]: string | string[] | undefined;
    };
    pathname: string;
    asPath: string;
    req?: any;
    res?: any;
    err?: any;
  }
}

declare module 'next/app' {
  interface AppProps {
    Component: NextPage;
    router: Router;
    pageProps: any;
  }
}

// Custom page props
export interface PageProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// API route types
export interface APIRequest extends Request {
  query: {
    [key: string]: string | string[] | undefined;
  };
  body: any;
  method: string;
  headers: Headers;
}

export interface APIResponse {
  status: number;
  data?: any;
  message?: string;
  error?: string;
}

// Middleware types
export interface MiddlewareRequest extends Request {
  nextUrl: URL;
  geo?: {
    country?: string;
    region?: string;
    city?: string;
    latitude?: string;
    longitude?: string;
  };
  ip?: string;
  ua?: string;
}

export interface MiddlewareResponse extends Response {
  next(): void;
  rewrite(url: string): void;
  redirect(url: string): void;
}

// Image optimization types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Link types
export interface LinkProps {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Head types
export interface HeadProps {
  children: React.ReactNode;
}

// Document types
export interface DocumentProps {
  html: string;
  head?: React.ReactNode;
  main?: React.ReactNode;
  nextScripts?: React.ReactNode;
}

// Error types
export interface ErrorProps {
  statusCode?: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

// GetServerSideProps types
export interface GetServerSidePropsContext {
  params?: {
    [key: string]: string | string[];
  };
  query: {
    [key: string]: string | string[] | undefined;
  };
  req: any;
  res: any;
  resolvedUrl: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

export interface GetServerSidePropsResult<T = any> {
  props?: T;
  redirect?: {
    destination: string;
    permanent: boolean;
  };
  notFound?: boolean;
}

// GetStaticProps types
export interface GetStaticPropsContext {
  params?: {
    [key: string]: string | string[];
  };
  preview?: boolean;
  previewData?: any;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

export interface GetStaticPropsResult<T = any> {
  props?: T;
  revalidate?: number | false;
  redirect?: {
    destination: string;
    permanent: boolean;
  };
  notFound?: boolean;
}

// GetStaticPaths types
export interface GetStaticPathsContext {
  locales?: string[];
  defaultLocale?: string;
}

export interface GetStaticPathsResult {
  paths: Array<{
    params: {
      [key: string]: string | string[];
    };
    locale?: string;
  }>;
  fallback: boolean | 'blocking';
}

// Environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_SENTRY_DSN?: string;
      DATABASE_URL?: string;
      NEXTAUTH_SECRET?: string;
      NEXTAUTH_URL?: string;
    }
  }
}

export {};
=======
<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

=======


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
const NextPage: React.FC = () => {
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
>>>>>>> origin/main
const Next.dPage: React.FC = () => {
>>>>>>> origin/main
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]
<<<<<<< HEAD

=======
>>>>>>> origin/main
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Next.d | Zion Tech Group</title>
        <meta name="description" content="Professional Next.d services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="next.d, AI solutions, IT services, Zion Tech Group, next.d" />
      </Helmet>
  description?: string;
  keywords?: string[]
  authors?: Array<{ name: string; url?: string }> | string[]
  creator?: string;
  publisher?: string;
  formatDetection?: {
    email?: boolean;
    address?: boolean;
    telephone?: boolean;
  }
  metadataBase?: URL;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
<<<<<<< HEAD
  };
=======
  }
>>>>>>> origin/main
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string,
      width?: number;
      height?: number;
      alt?: string;
    }>;
    locale?: string;
    type?: string;
    authors?: Array<{ name: string; url?: string }> | string[]
    publishedTime?: string;
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    images?: string[]
  }
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number;
    }
  }
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>;
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Next.d | Zion Tech Group
        <meta name="description" content="Professional Next.d services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="next.d, AI solutions, IT services, Zion Tech Group, next.d" />
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Next.d?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our next.d solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}
            ))}
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your next.d needs and get a customized solution.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
  )
}
export default Next.dPage
// Type definitions for Next.js compatibility in Vite
export interface Metadata {
  title?: string
  description?: string
  keywords?: string[]
  authors?: Array<{ name: string; url?: string }> | string[]
  creator?: string
  publisher?: string
  formatDetection?: {
    email?: boolean
    address?: boolean
    telephone?: boolean
  }
  metadataBase?: URL
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: Array<{
      url: string,
      width?: number
      height?: number
      alt?: string
    }>
    locale?: string
    type?: string
    authors?: Array<{ name: string; url?: string }> | string[]
    publishedTime?: string
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
    creator?: string
    title?: string
    description?: string
    images?: string[]
  }
  robots?: {
    index?: boolean
    follow?: boolean
    googleBot?: {
      index?: boolean
      follow?: boolean
      'max-video-preview'?: number
      'max-image-preview'?: 'none' | 'standard' | 'large'
      'max-snippet'?: number
    }
  }
  verification?: {
    google?: string
    yandex?: string
    yahoo?: string
    other?: Record<string, string>
>>>>>>> origin/main
  }
}

export interface MetadataRoute {
  url: string,
<<<<<<< HEAD
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
=======
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
>>>>>>> origin/main
}

export interface MetadataRouteSitemap extends MetadataRoute {
  url: string,
<<<<<<< HEAD
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
=======
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
>>>>>>> origin/main
}

// Custom Next.js types
export interface NextPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

<<<<<<< HEAD
export interface MetadataRouteSitemap extends MetadataRoute {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
=======
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Next.d
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced next.d solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

{/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Next.d?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our next.d solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            )</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our next.d solutions for your business.
            </p>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            )</div>
          </div>
        ))
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your next.d needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        ))
      </section>
    </div>
  );
>>>>>>> origin/main
}

<<<<<<< HEAD
export default Next.dPage;
=======
export default NextPage;

// Client components types
export interface ClientComponentProps {
  children?: React.ReactNode;
  className?: string;
=======
// API route types
export interface ApiRouteHandler {
  (req: Request): Promise<Response>
}

// Server components types
export interface ServerComponentProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Client components types
export interface ClientComponentProps {
  children?: React.ReactNode
  className?: string
>>>>>>> origin/main
}

// Route handlers
export interface RouteHandler {
  GET?: (req: Request) => Promise<Response>
  POST?: (req: Request) => Promise<Response>
  PUT?: (req: Request) => Promise<Response>
  DELETE?: (req: Request) => Promise<Response>
  PATCH?: (req: Request) => Promise<Response>
}

// Dynamic route types
export interface DynamicRoute {
  params: { [key: string]: string }
}

// Static generation types
export interface StaticProps {
  props: { [key: string]: any }
<<<<<<< HEAD
  revalidate?: number;
  notFound?: boolean;
=======
  revalidate?: number
  notFound?: boolean
>>>>>>> origin/main
}

// ISR types
export interface ISRConfig {
<<<<<<< HEAD
  revalidate: number;
=======
  revalidate: number
>>>>>>> origin/main
  tags?: string[]
}

// Edge runtime types
export interface EdgeRuntime {
<<<<<<< HEAD
  runtime: 'edge';
=======
  runtime: 'edge'
>>>>>>> origin/main
}

// Node.js runtime types
export interface NodeRuntime {
<<<<<<< HEAD
  runtime: 'nodejs';
=======
  runtime: 'nodejs'
>>>>>>> origin/main
}

// Extend Next.js types
declare module 'next' {
  interface NextApiRequest {
    user?: {
<<<<<<< HEAD
      id: string;
      email: string;
      name?: string;
=======
      id: string
      email: string
      name?: string
>>>>>>> origin/main
    }
  }
}

<<<<<<< HEAD
export {}
>>>>>>> main
=======
export {}</div></div></div></div></div></div></div></div></button></button></p></p></p></h2></h2></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
