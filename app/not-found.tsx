<<<<<<< HEAD
'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const NotFoundPage: React.FC = () => {
  return (
    <>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Not Found
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Not Found services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Not Found solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
=======
import Link from 'next/link';
import {Home, ArrowLeft, RefreshCw} from 'lucide-react';
export default function NotFound() {return(<div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>)
      <div className="max-w-mdw-fullbg-gray-800rounded-xl shadow-2xl p-8 text-center"></div>
        <div className="flexjustify-centermb-6"></div>
          <div className="w-16h-16bg-red-500/20rounded-full flex items-center justify-center"></div>
            <span className="text-4xl">404</span>
          </div>
        </div>
        <h1>Page Not Found;</h1>
        </h1>
        <p>Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.</p>
        </p>
        <div className="flexflex-colsm:flex-row gap-3"></div>,
          <Link>
            </Link><Home>
            Go Home,
          </Link>
          <button}onClick={() =>window.history.back()</button>}className="flexitems-centerjustify-centerpx-6 py-3 border-2 border-gray-600 text-gray-300 hover: bg-gray-700 font-medium rounded-lg transition-colors",
          >
            </button><ArrowLeft>
            Go Back,
          </button>
        </div>
        <div className="mt-6text-smtext-gray-400" / /></div>
          If you believe this is an error, please contact our support team.
        </div>
      </div>
    </div>

  )
}
  </button>
  </Link>
  </h1>
import Link from 'next/link'
import { Home, ArrowLeft, RefreshCw } from 'lucide-react'
export default function NotFound() {
  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-mdw-fullbg-gray-800rounded-xl shadow-2xl p-8 text-center">
        <div className="flexjustify-centermb-6">
          <div className="w-16h-16bg-red-500/20rounded-full flex items-center justify-center">
            <span className="text-4xl">404
        <h1 className="text-2xlfont-boldtext-whitemb-4">Page Not Found
        <p className="text-gray-300mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        <div className="flexflex-colsm:flex-rowgap-3">
          <$2 />
            href="/"
            className="flexitems-centerjustify-centerpx-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
            <Home className="w-4h-4mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back(</div>
            className="flexitems-centerjustify-centerpx-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4h-4mr-2" />
            Go Back
        <div className="mt-6text-smtext-gray-400">
          If you believe this is an error, please contact our support team.
  )
}</div></div></div></span></p></h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
