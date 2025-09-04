import Link from 'next/link';
import Head from 'next/head';

export default function APIQuickStart() {
  return (
    <>
      <Head>
        <title>API Quick Start - Documentation - Zion Tech Group</title>
        <meta name="description" content="Quick start guide for using our APIs and getting up and running quickly." />
        <meta name="keywords" content="API quick start, documentation, getting started, API guide" />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api-quick-start" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API Quick Start</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get up and running with our APIs in minutes
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Getting Started</h2>
            <p className="text-slate-300 mb-6">
              Follow these simple steps to start using our APIs:
            </p>

            <ol className="text-slate-300 mb-6 space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                <div>
                  <strong>Get Your API Key</strong>
                  <p className="text-slate-400">Sign up for an account and generate your API key from the dashboard.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                <div>
                  <strong>Make Your First Request</strong>
                  <p className="text-slate-400">Use our REST API to make your first request and get data.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                <div>
                  <strong>Explore the Documentation</strong>
                  <p className="text-slate-400">Browse our comprehensive API documentation for all available endpoints.</p>
                </div>
              </li>
            </ol>

            <h2 className="text-2xl font-bold mb-4 text-green-400">Example Request</h2>
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <pre className="text-slate-300">
{`curl -X GET "https://api.ziontechgroup.com/v1/data" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-purple-400">Next Steps</h2>
            <p className="text-slate-300 mb-6">
              Once you've made your first request, explore our full API documentation to discover all available features.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/docs" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4">
              Back to Documentation
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
              Get Help
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}