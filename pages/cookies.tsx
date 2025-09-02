import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Cookies: NextPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar technologies when you visit our website.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze how our website is used</li>
                <li>To improve our website's performance and user experience</li>
                <li>To provide personalized content and advertisements</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="text-gray-600 mb-6">
                These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-6">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cookies;