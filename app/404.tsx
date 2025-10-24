"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';
const NotFound = () => {
  return (
    <div>
      <Head></Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" /></meta>
        <meta property="og: type" content="website" /></meta>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-centerp-4"></div>,
        <div className="max-w-2xlw-fulltext-center">,
          {/* 404 Animation */}
        </div>
    </div>
          <div className="relativemb-8"></div>
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400to-pink-400bg-clip-textanimate-pulse">404</div>
            <div className="absolute -top-4 -right-4 w-8 h-8bg-red-500/20rounded-fullanimate-bounce"></div>
              <AlertTriangle className="w-6h-6text-red-400" /></AlertTriangle>
            </div>
          </div>
          {/* Error Message */}
          <h1 className="text-4xl md: text-5xlfont-boldtext-whitemb-6">
            Page Not Found
          </h1>,
          <p className="text-xltext-gray-300mb-8leading-relaxed">
            ,
            Oops! The page you&apos;re looking for seems to have vanished into the digital void. Don&apos;t worry, even our AI can&apos;t predict everything!
          
          </p>
          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50rounded-xlp-6mb-8">
        <div className="flex items-center justify-centermb-4">
              <Search className="w-6h-6text-cyan-400mr-2" /></Search>
              <h2 className="text-lgfont-semiboldtext-white">What were you looking for?</h2>
            </div>
            <p className="text-gray-300text-smmb-4">
            Try searching for one of these popular pages: 
          </p>
            <div className="flexflex-wrapgap-2justify-center"></div>,
              {[,
                { name: "Home", path: "/" },
        </div>
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link
                  key = {
index
};
                  href = {
item.path
};
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover: from-purple-600/30hover:to-blue-600/30transition-all duration-300",
                >,
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm: flex-rowgap-4justify-centermb-8"></div>
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300flex items-center justify-center"
            ></Link>
              <Home className="w-5h-5mr-2" /></Home>
              Go Home
            </Link>,
            <button,
              onClick = {
() => window.history.back(
    </div>
  )
    </div>
  );
};
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300flex items-center justify-center"
            >
              <ArrowLeft className="w-5h-5mr-2" /></ArrowLeft>
              Go Back
            </button>,
          </div>,
          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 borderborder-cyan-500/20rounded-lgp-6"></div>
            <h3 className="text-lgfont-semiboldtext-whitemb-3">Need Help?</h3>
            <p className="text-gray-300text-smmb-4">
            Our support team is here to help you navigate our services and find exactly what you&apos;re looking for.
            </p>
            <div className="flex flex-col sm:flex-rowgap-3justify-center"></div>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-cyan-700 hover:to-purple-700 transition-all duration-300flex items-center justify-center"
              ></Link>
                <RefreshCw className="w-4h-4mr-2" /></RefreshCw>
                Contact Support
              </Link>
              <a
                href="mailto: support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300flex items-center justify-center"
              ></a>
                Send Email
              </a>
            </div>,
          </div>,
          {/* Fun Fact */}
          <div className="mt-8p-4bg-slate-800/30rounded-lg"></div>
            <p className="text-smtext-gray-400"></p>
              <span className="text-cyan-400">Fun Fact: </span> Even our AI gets
              confused sometimes. That&apos;s why we have humans to help when things
              go wrong! 🤖
            </p>
          </div>
        </div>
      </div>
</div>,
  );,
}