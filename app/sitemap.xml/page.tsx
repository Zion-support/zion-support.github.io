'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitemapXMLPage: React.FC  = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of all pages and services available on Zion Tech Group website." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>
          <div className="text-center mb-12"></div>
            <h1 className="text-4xl font-bold text-white mb-4"></h1>
              Sitemap
            </h1>
            <p className="text-xl text-gray-300"></p>
              Complete directory of all pages and services
            </p>
                </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"></div>
            <div className="text-center"></div>
              <p className="text-gray-300 mb-4"></p>
                This page provides a comprehensive sitemap of all available pages and services.
              </p>
              <p className="text-sm text-gray-400"></p>
                For the XML sitemap, please visit: <a href="/sitemap.xml" className="text-cyan-400 hover:text-cyan-300">/sitemap.xml</a>
                </p>
            </div>
                </div>
        </div>
                </div>
    </>
  );
};

export default SitemapXMLPage;