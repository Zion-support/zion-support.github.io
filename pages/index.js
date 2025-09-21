import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Zion Tech Group - AI-Powered Technology Solutions</title>
        <meta name="description" content="Leading provider of AI-powered technology solutions, cloud automation, and innovative digital services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Zion Tech Group
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            AI-Powered Technology Solutions for the Future
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href="/services" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
            <p className="text-gray-300">Cutting-edge artificial intelligence solutions tailored to your business needs.</p>
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Cloud Automation</h3>
            <p className="text-gray-300">Streamline your operations with intelligent cloud automation systems.</p>
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Pioneering the future of technology with innovative solutions.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-200 mb-6">Let's discuss how our AI-powered solutions can drive your success.</p>
          <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Journey
          </Link>
        </div>
      </main>
    </div>
  );
}