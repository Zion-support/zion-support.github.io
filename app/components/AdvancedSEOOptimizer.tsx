'use client';
import React, {useEffect, useState, useCallback}from 'react';
import {Helmet}}from 'react-helmet-async';

interface SEOOptimizerProps {title?: string;}
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode;
}

        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        {/* Structured Data */})
        <script type="application/ld+json">)
          {JSON.stringify(generateStructuredData())}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
        </script>
      </Helmet>
      
    </Helmet>
    {children} </>
  );
};

export default AdvancedSEOOptimizer;
