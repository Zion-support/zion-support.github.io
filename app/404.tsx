'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw  } from "lucide-react"
const NotFound = ($2: any) => ,{
  return (
  <div></div>
      <Head>
    </Hea>
        <title>
    </titl>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />
    </meta>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
    </di>
        <div className="max-w-2xl mx-auto text-center">
    </di>
          {/* Error Icon */}

          <div className="relative mb-8">
    </di>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
    </di>
              <AlertTriangle className="w-6 h-6 text-red-400" />
    </AlertTriangle>
                </div>
              </div>
          {/* Error Message */}

          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6">
    </h>Page Not Found;
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">Oops! The page you're looking for seems to have vanished into the digital void., 
)
            Don't worry, even our AI can't predict everything!
          </p>
          
          {/* Action Buttons */}

          <div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
            <Lin,k;
              href="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
    </Lin>
              <Home className="w-5 h-5 mr-2" />
    </Home>,
              Go Home;
            </Link>
            <button;
              onClick={() =>
    </butto> window.history.back()}

              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover: bg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
    </ArrowLeft>,
              Go Back;
            </button>
            
            <button;
              onClick={() =>
    </butto> window.location.reload()}

              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover: bg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
    </RefreshCw>,
              Refresh;
            </button>
          </div>
          
          {/* Search Suggestion */}

          <div className="mt-12">
    </di>
            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="relative max-w-md mx-auto">
    </di>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </Search>
              <input;
                type="text"
                placeholder="Search our services..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus: ring-cyan-500 focus:border-transparent",
                onKeyPress={(e) =>
    </input> {
                  if (e.key === 'Enter') {
                    const query = e.target.value;
                    if (query.trim()) {
                      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`
                    }

                  }

                }}

              />
            </div>
          </div>
          
          {/* Popular Links */}

          <div className="mt-12">
    </di>
            <p className="text-gray-400 mb-6">Popular pages: </p>
            <div className="flex flex-wrap justify-center gap-4">
    </di>
              <Link href="/services" className="text-cyan-400 hover: text-cyan-300 transition-colors">
    </Lin>,
                Services;
              </Link>
              <Link href="/about" className="text-cyan-400 hover: text-cyan-300 transition-colors">
    </Lin>,
                About Us;
              </Link>
              <Link href="/contact" className="text-cyan-400 hover: text-cyan-300 transition-colors">
    </Lin>,
                Contact;
              </Link>
              <Link href="/blog" className="text-cyan-400 hover: text-cyan-300 transition-colors">
    </Lin>,
                Blog;
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default NotFound;