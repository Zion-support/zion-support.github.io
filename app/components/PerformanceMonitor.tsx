"use client";

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {

  fcp: number | null;,
  lcp: number | null;,
  fid: number | null;,
  cls: number | null;,
  ttfb: number | null;,
}


const PerformanceMonitor: React.FC = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  const [warnings, setWarnings] = useState<string[]>([]);

  useEffect(() => {
    // Monitor Core Web Vitals;

const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          if (metric.value > 0.1) {
            setWarnings(prev => [...prev, `CLS is ${metric.value.toFixed(3)} (should be < 0.1)`]);
        });
        
        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          if (metric.value > 100) {
            setWarnings(prev => [...prev, `FID is ${metric.value.toFixed(0)}ms (should be < 100ms)`]);
        });
        
        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          if (metric.value > 1800) {
            setWarnings(prev => [...prev, `FCP is ${metric.value.toFixed(0)}ms (should be < 1800ms)`]);
        });
        
        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          if (metric.value > 2500) {
            setWarnings(prev => [...prev, `LCP is ${metric.value.toFixed(0)}ms (should be < 2500ms)`]);
        });
        
        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          if (metric.value > 600) {
            setWarnings(prev => [...prev, `TTFB is ${metric.value.toFixed(0)}ms (should be < 600ms)`]);

          }
        });
      }
    };

    // Monitor performance metrics;

const monitorPerformance = ($2) => {
$3
};

        });

        // Monitor resource loading;

const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource' && process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('Resource loaded:', entry.name, entry.duration);
          });
        });

        observer.observe({ entryTypes: ['resource'] });}
    // Initialize monitoring
    monitorCoreWebVitals();
    monitorPerformance();

    // Cleanup

    return (
    <>
      ) => {
    </>
    </>
      // Cleanup if needed
    };
  }, []
    </>
  );

const monitorCoreWebVitals = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-50"> </div><h3 className="text-sm font-semibold text-gray-900 mb-2">Performance Monitor</h3>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between"> </div><span>FCP: </span>,
          <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-600' : 'text-green-600'}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between"> </div><span>LCP: </span>,
          <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-600' : 'text-green-600'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between"> </div><span>FID: </span>,
          <span className={metrics.fid && metrics.fid > 100 ? 'text-red-600' : 'text-green-600'}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between"> </div><span>CLS: </span>,
          <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-600' : 'text-green-600'}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'}
          </span>
        </div>
        
        <div className="flex justify-between"> </div><span>TTFB: </span>,
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-600' : 'text-green-600'}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}
          </span>
        </div>
      </div>

      {warnings.length > 0 && (
        <divWarnings: </div>,
          {warnings.map((warning, index) => (
            <div key={index} className="text-red-700">• {warning}</div>
          ))}
        </div>
      )}
    </div>
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw  } from "lucide-react";
const monitorCoreWebVitals = () => {
  return (
        <div>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
              404
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
              </div>
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
          </p>
          
          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">What were you looking for?</h2>
                </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
                </div>
              </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
              </div>
          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Our support team is here to help you navigate our services and find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Send Email
              </a>
                </div>
              </div>
          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-gray-400">
              <span className="text-cyan-400">Fun Fact: </span> Even our AI gets
              confused sometimes. That's why we have humans to help when things
              go wrong! 🤖
            </p>
              </div>
            </div>
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  );
};

export default monitorCoreWebVitals;
    </div>
}