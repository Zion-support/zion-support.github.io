import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function AccessibilityScannerPage() {
  return (
    <Layout
      title="Accessibility Scanner - Zion Tech Group"
      description="Automated WCAG scanning and remediation guidance for web accessibility compliance."
      canonical="/accessibility-scanner"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
                Accessibility Scanner
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Continuously scan your sites and apps for accessibility issues and prioritize fixes with our automated WCAG compliance tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Automated Scanning</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive automated scans that check for WCAG 2.1 AA compliance issues across your entire website.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Color contrast analysis</li>
                  <li>• Keyboard navigation testing</li>
                  <li>• Screen reader compatibility</li>
                  <li>• Alt text validation</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Detailed Reports</h3>
                <p className="text-gray-300 mb-4">
                  Get detailed reports with specific recommendations for fixing accessibility issues and improving user experience.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Priority-based issue ranking</li>
                  <li>• Code-level remediation guides</li>
                  <li>• Progress tracking over time</li>
                  <li>• Compliance score monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Continuous Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Set up continuous monitoring to catch accessibility regressions as your site evolves and grows.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Real-time monitoring</li>
                  <li>• Automated alerts</li>
                  <li>• Integration with CI/CD</li>
                  <li>• Historical trend analysis</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold hover:from-cyan-700 hover:to-blue-800 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services" 
                  className="px-8 py-3 rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-800 transition-all duration-300"
                >
                  Explore All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}