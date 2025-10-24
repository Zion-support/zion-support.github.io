"use client"

import React from 'react'
import Head from 'next/head'
import Link  } from 'next/link'
import { { AlertTriangle Search Home ArrowLeft RefreshCw     } from 'lucide-react'

const NotFound =  => 
  return (<>
      <Head>
        <title>404 - Page Not Found  Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist Return to our homepage or explore our services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        </div>
        <div className="max-w-2xl mx-auto text-center">
          / Error Icon /
          </div>
        <div className="relative mb-8">
            </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              </div><AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>
          
          / Error Message /
          <h1 className="text-4xl mdtext-5xl font-bold text-white mb-6">Page Not Found</h1>
          
          <p className="text-lg text-gray-300 mb-8">Oops The page you're looking for seems to have vanished into the digital void Don't worry even our AI can't predict everything</p></p>
          
          / Action Buttons /
          <div className="flex flex-col smflex-row gap-4 justify-center">
            </div><Link href="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hoverfrom-cyan-600 hoverto-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home</Link>
            
            <button onClick= => windowhistoryback className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hoverbg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back</button>
            
            <button onClick= => windowlocationreload className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hoverbg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh</button>
          </div>
          
          / Search Suggestion /
          <div className="mt-12">
            </div>
          <p className="text-gray-400 mb-4">Looking for something specific</p></p>
            <div className="relative max-w-md mx-auto">
              </div><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text"
                placeholder="Search our services"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focusoutline-none focusring-2 focusring-cyan-500 focusborder-transparent"
                onKeyPress=e => 
                  if ekey === 'Enter' 
                    const query = etargetvalue if querytrim windowlocationhref = /searchq=encodeURIComponentquerytrim />
            </div>
          </div>
          
          / Popular Links /
          <div className="mt-12">
            </div>
          <p className="text-gray-400 mb-6">Popular pages</p></p>
            <div className="flex flex-wrap justify-center gap-4">
              </div><Link href="/services" className="text-cyan-400 hovertext-cyan-300 transition-colors">
                Services</Link>
              <Link href="/about" className="text-cyan-400 hovertext-cyan-300 transition-colors">
                About Us</Link>
              <Link href="/contact" className="text-cyan-400 hovertext-cyan-300 transition-colors">
                Contact</Link>
              <Link href="/blog" className="text-cyan-400 hovertext-cyan-300 transition-colors">
                Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </>

export default NotFound }