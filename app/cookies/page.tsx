import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                  <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
                  <p>We use cookies to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality and user experience</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Ensure website security and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Functional Cookies</h3>
                      <p>These cookies enable enhanced functionality and personalization, such as remembering your language preference.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Cookies</h3>
                      <p>These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
                  <p>You can control and manage cookies in various ways:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Through your browser settings to block or delete cookies</li>
                    <li>By using our cookie consent banner when you first visit our website</li>
                    <li>By contacting us to update your preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
                  <p>Some cookies on our website are set by third-party services such as Google Analytics, social media platforms, and advertising networks. We do not control these cookies and recommend reviewing their respective privacy policies.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                  <p>If you have any questions about our use of cookies, please contact us at privacy@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;
