import React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';

export default function CookiePolicyPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website, what types of cookies we use, and how you can manage your cookie preferences."
      keywords="cookie policy, cookies, privacy, data protection, website tracking"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Learn about how we use cookies on our website and how you can 
                manage your cookie preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Are Cookies?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="mb-6">
                  This Cookie Policy explains what cookies we use, why we use them, and how you can 
                  control your cookie preferences. By continuing to use our website, you consent to 
                  our use of cookies as described in this policy.
                </p>
                <p className="mb-8">
                  We are committed to protecting your privacy and being transparent about our data 
                  practices. If you have any questions about our use of cookies, please contact us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please don't hesitate to contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Us
                  </span>
                </Link>
                <Link href="/privacy">
                  <span className="bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Privacy Policy
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}