import Link from 'next/link';
import Head from 'next/head';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Get started with Zion Tech Group services. Learn how to set up and use our micro SaaS products, AI services, and IT solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/getting-started" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Getting Started
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Welcome to Zion Tech Group! This guide will help you get up and running with our services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Quick Start Guide</h2>
              
              <div className="space-y-8">
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">1. Choose Your Service</h3>
                  <p className="text-slate-300 mb-4">
                    Browse our comprehensive catalog of services:
                  </p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300">Micro SaaS Products</Link> - 120+ specialized tools</li>
                    <li>• <Link href="/ai-services" className="text-purple-400 hover:text-purple-300">AI Services</Link> - 80+ AI-powered solutions</li>
                    <li>• <Link href="/it-services" className="text-green-400 hover:text-green-300">IT Services</Link> - 80+ enterprise solutions</li>
                  </ul>
                </div>

                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">2. Get a Quote</h3>
                  <p className="text-slate-300 mb-4">
                    Contact our team to discuss your specific needs and get a customized quote.
                  </p>
                  <Link href="/contact" className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                    Request Quote
                  </Link>
                </div>

                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">3. Implementation</h3>
                  <p className="text-slate-300 mb-4">
                    Our team will work with you to implement the solution and provide training.
                  </p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Dedicated project manager</li>
                    <li>• Custom configuration</li>
                    <li>• Training and documentation</li>
                    <li>• Ongoing support</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">Popular Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Cloud Cost Guard</h3>
                  <p className="text-slate-300 mb-4">
                    FinOps assistant for AWS, Azure, and GCP with anomaly detection and cost optimization.
                  </p>
                  <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Learn More →
                  </Link>
                </div>

                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">AI Code Review</h3>
                  <p className="text-slate-300 mb-4">
                    Automated code review with AI-powered suggestions and security scanning.
                  </p>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Need Help?</h3>
                <p className="text-slate-300 mb-4">
                  Our support team is here to help you get started. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                    Contact Support
                  </Link>
                  <Link href="/faq" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}