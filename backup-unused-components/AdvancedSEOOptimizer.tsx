import React from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import { Search, Eye } from 'lucide-react';
'use client';

interface SEOSettings {
  metaTags: boolean;
  structuredData: boolean;
  sitemap: boolean;
  robotsTxt: boolean;
  canonicalUrls: boolean;
  altTexts: boolean;
}

interface SEOMetrics {
  titleLength: number | null;
  descriptionLength: number | null;
  headingStructure: string | null;
  imageAltTexts: number | null;
  internalLinks: number | null;
  externalLinks: number | null;
}

const AdvancedSEOOptimizer: React.FC = () => {
  const [settings, setSettings] = useState<SEOSettings>({
//     metaTags: false,
//     structuredData: false,
//     sitemap: false,
//     robotsTxt: false,
//     canonicalUrls: false,
//     altTexts: false
  });

  const [metrics, setMetrics] = useState<SEOMetrics>({
//     titleLength: null,
//     descriptionLength: null,
//     headingStructure: null,
//     imageAltTexts: null,
//     internalLinks: null,
//     externalLinks: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Analyze title length
    const title = document.title;
    setMetrics(prev => ({ ...prev, titleLength: title.length }));

    // Analyze meta description
    const metaDescription = document.querySelector('meta[name="description"fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"Open SEO optimizer"w-6 h-6"fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 w-80 z-50"flex items-center justify-between mb-4"text-lg font-semibold text-gray-900 dark:text-white flex items-center"w-5 h-5 mr-2"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"Close SEO optimizer"
//         >
//           ×
</button>
</div>

      {/* SEO Metrics */}
      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
          <Eye className="space-y-2 text-xs">
          <div className="text-gray-600 dark:text-gray-400">Title Length:</span>
            <span className={getScoreColor(metrics.titleLength, { good: 60, poor: 70 })}>
              {metrics.titleLength ? `${metrics.titleLength}/60` : 'N/A'}
</span>
</div>
          <div className="text-gray-600 dark:text-gray-400">Description Length:</span>
            <span className={getScoreColor(metrics.descriptionLength, { good: 160, poor: 200 })}>
              {metrics.descriptionLength ? `${metrics.descriptionLength}/160` : 'N/A'}
</span>
</div>
          <div className="text-gray-600 dark:text-gray-400">Images with Alt:</span>
            <span className="flex justify-between">
            <span className="text-gray-900 dark:text-white">
              {metrics.internalLinks || 'N/A'}
</span>
</div>
          <div className="text-gray-600 dark:text-gray-400">External Links:</span>
            <span className="space-y-4">
        <h4 className="flex items-center justify-between">
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {feature.description}
</p>
</div>
//             <button
              onClick={() => toggleSetting(feature.key)}
              className={`ml-3 relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
//                 settings[feature.key]
//                   ? 'bg-green-600'
//                   : 'bg-gray-200 dark:bg-gray-700'
              }`}
              aria-label={`Toggle ${feature.title}`}
//             >
//               <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
//                   settings[feature.key] ? 'translate-x-5' : 'translate-x-1'
                }`}
//               />
</button>
</div>
        ))}
</div>

      {/* Optimize Button */}
      <div className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//         >
          {isOptimizing ? (
//             <>
              <div className="w-4 h-4 mr-2" />
//               Optimize SEO
//             </>
          )}
</button>
</div>
</div>
  );
