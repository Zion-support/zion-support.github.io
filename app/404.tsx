"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Send, ArrowLeft, RefreshCw, Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {}
  return ()
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>

      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        </div>
        </div>
        <div className="max-w-2x lw-full text-center">
        </div>
        </div>
          {/* 404 Animation */}
          <div className="rel ativemb-8">
        </div>
        </div>
            <div className="tex t-9xlfont-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">404</div>
            <div className="abs olute-top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
        </div>
        </div>
              <AlertTriangle className="w-6h-6te x t-red-400" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="tex t-4xlmd: text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="tex t-xltext-gray-300 mb-8 leading-relaxed">
        </div>
            Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
          </p>

          {/* Search Suggestion */}
          <div className="bg-gr adient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
        </div>
        </div>
            <div className="fle xitems-center justify-center mb-4">
        </div>
        </div>
              <Search className="w-6h-6te x t-cyan-400 mr-2" />
              <h2 className="tex t-lgfont-semibold text-white">What were you looking for?</h2>
            </div>
            <p className="tex t-gray-300text-sm mb-4">Try searching for one of these popular pages: </p>
            <div className="fle xflex-wrap gap-2 justify-center">
        </div>
        </div>
              {[]
                { name: "Home", path: "/" }
                { name: "About", path: "/about" }
                { name: "Services", path: "/services" }
                { name: "Contact", path: "/contact" }
              ].map((item, index) => ()
                <Link key={index}>
                  href={item.path}
                  className="px-4py-2 b g-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover: from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
                >
        </div>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="fle xflex-col sm:flex-row gap-4 justify-center mb-8">
        </div>
        </div>
            <Link href="/" className="bg-gr adient-to-rfrom-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
            </div>
              <Home className="w-5h-5mr-2" />
              Go Home
            </Link>
            <button ,>
              onClick={() => window.history.back()}
              className="bor derborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
            >
        </div>
              <ArrowLeft className="w-5h-5mr-2" />
              Go Back
            </button>
          </div>

          {/* Help Section */}
          <div className="bg-gr adient-to-rfrom-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
        </div>
        </div>
            <h3 className="tex t-lgfont-semibold text-white mb-3">Need Help?</h3>
            <p className="tex t-gray-300text-sm mb-4">
        </div>
              Our support team is here to help you navigate our services and find exactly what you're looking for.
            </p>
            <div className="fle xflex-col sm:flex-row gap-3 justify-center">
        </div>
        </div>
              <Link href="/contact" className="bg-gr adient-to-rfrom-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
            </div>
                <RefreshCw className="w-4h-4mr-2" />
                Contact Support
              </Link>
              <a href="mailto:support@ziontechgroup.com">
                className="bor derborder-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
        </div>
                Send Email
              </a>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-8p-4b g-s late-800/30 rounded-lg">
        </div>
        </div>
            <p className="tex t-smtext-gray-400">
        </div>
              <span className="tex t-cyan-400">Fun Fact: </span> Even our AI gets
              confused sometimes. That's why we have humans to help when things
              go wrong! 🤖
            </p>
          </div>
        </div>
      </div>
</>
  );
}
export default NotFound;