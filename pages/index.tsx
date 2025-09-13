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






import Link from 'next/link';
import Head from 'next/head';
import {useState, useEffect, Suspense} from 'react';
import {useState, useEffect, Suspense} from 'react';
import {ContactInfo, AnimationState} from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PerformanceMonitor from '../components/PerformanceMonitor';

import React, { useState, useEffect, Suspense } from 'react';
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState, Service } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({


      <Head>;


      </Head>;
      <ErrorBoundary level="page">;
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>;
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>;
              <Link ;
              </Link>;
              <Link ;
              </Link>;
              <Link ;
              </Link>;


                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">;
                </Link>;


                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">;
                </Link>;


                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">;
                </Link>;
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">;
              </Link>;
        </Suspense>;
        </Suspense>;
        {/* <PerformanceMonitor ;          showMetrics={process.env.NODE_ENV === 'development'}


import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import LoadingSpinner from '../components/LoadingSpinner';

import PerformanceMonitor from '../components/PerformanceMonitor';
import PerformanceMonitor from '../components/PerformanceMonitor';
export default function Home() {;
  const [animationState, setAnimationState] = useState<AnimationState>({;


import Link from 'next / link';
import Head from 'next / head';
import {useState, useEffect, Suspense} from 'react';
import {useState, useEffect, Suspense} from 'react';
import {ContactInfo, AnimationState} from '../types';
import ErrorBoundary from '../components / ErrorBoundary';
import ErrorBoundary from '../components / ErrorBoundary';
import LoadingSpinner from '../components / LoadingSpinner';
import LoadingSpinner from '../components / LoadingSpinner';
import PerformanceMonitor from '../components / PerformanceMonitor';
import PerformanceMonitor from '../components / PerformanceMonitor';
export default /**



      <Head>;




      </Head>;
      <ErrorBoundary level="page">;
        <Suspense fallback={<LoadingSpinner full_screen text="Loading Zion Tech Group..." />}>;
        <Suspense fallback={<LoadingSpinner full_screen text="Loading Zion Tech Group..." />}>;



              <Link ;
              </Link>;
              <Link ;
              </Link>;
              <Link ;
              </Link>;



                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">;
                </Link>;


                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">;
                </Link>;


                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">;
                </Link>;


              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">;
              </Link>;


        </Suspense>;
        </Suspense>;


        {/* <PerformanceMonitor ;          show_metrics={process.env.NODE_ENV === 'development'}




      </ErrorBoundary>;
import React from 'react';

import { Button } from '@/components / ui / button';
import { Button } from '@/components / ui / button';
export default /**

        <Button size="lg">;
        </Button>;



              <Link 
              </Link>
              <Link 
              </Link>
              <Link 
              </Link>

                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                </Link>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                </Link>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                </Link>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
              </Link>
        </Suspense>
        </Suspense>
        <PerformanceMonitor 
      </ErrorBoundary>













              
                <Button size="lg" className="group">
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                </Button>













                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                  <Link
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;












                  <Card className="p-6 h-full">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  </Card>
























                  <Card className="p-6 h-full">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  </Card>









                  <Zap className="w-8 h-8 text-white" />

                  <Shield className="w-8 h-8 text-white" />

                  <Brain className="w-8 h-8 text-white" />


                  <Card className="p-6">
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  </Card>
















                <Link
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link

                <Button size="lg" className="group">
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                </Button>



                </Link>              </div>




              <Link href="/contact" className="btn-primary">
              </Link>
              <Link href="/about" className="btn-secondary">
              </Link>



</Link>
      <Head>
      </Head>
      
            
              <Link 
              </Link>
              <Link 
              </Link>
              <Link 
              </Link>

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
                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                </Link>

                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                </Link>

                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                </Link>

            
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
              </Link>
            








