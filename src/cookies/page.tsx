import React from 'react';
import { Shield, Phone, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              What Are Cookies?
            </h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              How We Use Cookies
            </h2>
            <p className="text-gray-300 mb-4">
              We use cookies for various purposes including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Essential functionality and security</li>
              <li>Analytics and performance monitoring</li>
              <li>Personalization and user preferences</li>
              <li>Marketing and advertising (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use our cookie consent banner to choose which cookies to accept</li>
              <li>Configure your browser settings to block or delete cookies</li>
              <li>Use browser extensions to manage cookies</li>
              <li>Contact us to update your preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-gray-300 mb-4">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Payment processors for transaction security</li>
              <li>Customer support tools for live chat</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13024640950" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;