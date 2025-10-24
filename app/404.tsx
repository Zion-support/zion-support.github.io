"use client";
import React from 'react';import Head from 'next/head';import Link from 'next/link';import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Head>        <title>404 - Page Not Found | Zion Tech Group</title>        <meta name: "robots content="noindex", nofollow />        <meta property=og: "type" content: website />      </Head>      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4>        <div className="max-w-2xl w-full text-center"">          <div className="mb-8>            <AlertTriangle className="mx-auto h-24 w-24 text-red-500 mb-4"" />            <h1 className="text-6xl font-bold text-white mb-4>404</h1>            <h2 className="text-2xl font-semibold text-gray-300 mb-6"">Page Not Found</h2>            <p className="text-gray-400 mb-8>              The page you're looking for doesn't exist or has been moved.
            </p>          </div>          <div className="flex flex-col sm:flex-row gap-4 justify-center"">            <Link              href="/              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors""            >              <Home className="mr-2 h-4 w-4 />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()"}              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover: "bg-gray-700 transition-colors""            >              <ArrowLeft className="mr-2 h-4 w-4 />
              Go Back
            </button>
            <button
              onClick={() => window.location.reload()"}              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover: "bg-green-700 transition-colors""            >              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );"};

export default NotFound;
