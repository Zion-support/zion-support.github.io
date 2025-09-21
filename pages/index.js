import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced IT Solutions & Innovation</title>
        <meta name="description" content="Leading provider of cutting-edge IT solutions, AI automation, cybersecurity, and digital transformation services. Transform your business with our innovative technology solutions." />
        <meta name="keywords" content="IT solutions, AI automation, cybersecurity, digital transformation, cloud services, software development, technology consulting" />
        <meta property="og:title" content="Zion Tech Group - Advanced IT Solutions & Innovation" />
        <meta property="og:description" content="Leading provider of cutting-edge IT solutions, AI automation, cybersecurity, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zion.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced IT Solutions & Innovation" />
        <meta name="twitter:description" content="Leading provider of cutting-edge IT solutions, AI automation, cybersecurity, and digital transformation services." />
        <link rel="canonical" href="https://zion.app" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced IT Solutions & Innovation for the Digital Future
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI automation, cybersecurity solutions, 
                cloud services, and digital transformation expertise. We deliver innovative 
                technology solutions that drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <a className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Explore Services
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Automation</h3>
                <p className="text-gray-400">
                  Leverage artificial intelligence to automate processes, reduce costs, 
                  and improve efficiency across your organization.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-400">
                  Protect your business with advanced security solutions, threat detection, 
                  and comprehensive security assessments.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
                <p className="text-gray-400">
                  Migrate to the cloud with confidence. We provide scalable, secure, 
                  and cost-effective cloud infrastructure solutions.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Software Development</h3>
                <p className="text-gray-400">
                  Custom software solutions built with modern technologies and best 
                  practices to meet your specific business needs.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-400">
                  Transform your business processes with digital solutions that improve 
                  efficiency, customer experience, and competitive advantage.
                </p>
              </div>

              <div className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Consulting</h3>
                <p className="text-gray-400">
                  Get strategic guidance from our team of experienced consultants 
                  who understand your industry and technology challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our innovative solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Project
                </a>
              </Link>
              <Link href="/about">
                <a className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More About Us
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}