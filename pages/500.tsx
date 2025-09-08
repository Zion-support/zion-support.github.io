 import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Zion Tech Group</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
              500
            </h1>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Server Error
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We&apos;re experiencing technical difficulties on our end. Our engineering team has been notified and is working to resolve the issue.
            </p>
          </div>

          {/* What Happened */}
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">What Happened?</h3>
            <p className="text-white/70 mb-4">
              Something went wrong on our servers while processing your request. This is not your fault - it&apos;s an issue on our end that we&apos;re actively working to fix.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <h4 className="font-semibold text-white mb-2">Common Causes:</h4>
                <ul className="text-white/60 space-y-1">
                  <li>• Server overload</li>
                  <li>• Database connection issues</li>
                  <li>• Third-party service failures</li>
                  <li>• Maintenance in progress</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white mb-2">What We&apos;re Doing:</h4>
                <ul className="text-white/60 space-y-1">
                  <li>• Investigating the issue</li>
                  <li>• Working on a fix</li>
                  <li>• Monitoring system health</li>
                  <li>• Preparing updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Refresh Page
            </button>
            
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Go Home
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}