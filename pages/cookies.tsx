import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const CookiePolicy: NextPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website."
      keywords="cookie policy, cookies, tracking, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> January 27, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and enabling certain 
                  functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>User preference storage</li>
                  <li>Security and fraud prevention</li>
                  <li>Marketing and advertising (with consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting 
                  information anonymously.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Preference Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies remember your choices and preferences to provide a more personalized experience.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver relevant advertisements and track the effectiveness of our 
                  marketing campaigns.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Cookie consent banner: Use our cookie consent tool to manage preferences</li>
                  <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that set their own cookies, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Customer support tools</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    Email: kleber@ziontechgroup.com<br />
                    Phone: +1 302 464 0950
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CookiePolicy;