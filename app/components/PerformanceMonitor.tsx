<<<<<<< HEAD
import React, { useEffect, createContext, useContext } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceData {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceContext = createContext<PerformanceData>({
  cls: null,
  fid: null,
  fcp: null,
  lcp: null,
  ttfb: null,
});

export const usePerformanceMonitor = () => useContext(PerformanceContext);

const PerformanceMonitor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [performanceData, setPerformanceData] = React.useState<PerformanceData>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        onCLS((metric) => {
          setPerformanceData(prev => ({ ...prev, cls: metric.value }));
        });
        
        onINP((metric) => {
          setPerformanceData(prev => ({ ...prev, fid: metric.value }));
        });
        
        onFCP((metric) => {
          setPerformanceData(prev => ({ ...prev, fcp: metric.value }));
        });
        
        onLCP((metric) => {
          setPerformanceData(prev => ({ ...prev, lcp: metric.value }));
        });
        
        onTTFB((metric) => {
          setPerformanceData(prev => ({ ...prev, ttfb: metric.value }));
        });
      }
    };

    monitorCoreWebVitals();
  }, []);

  return (
    <PerformanceContext.Provider value={performanceData}>
      {children}
    </PerformanceContext.Provider>
  );
};

export default PerformanceMonitor;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
