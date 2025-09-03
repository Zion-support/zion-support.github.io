import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our innovative micro SaaS products, AI services, and IT solutions." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-slate-300 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Go Home
            </Link>
            
            <div className="text-slate-400">
              <p className="mb-4">Or explore our services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  All Services
                </Link>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Micro SaaS
                </Link>
                <Link href="/ai-services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  AI Services
                </Link>
                <Link href="/it-services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  IT Services
                </Link>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}