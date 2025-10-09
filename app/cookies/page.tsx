import React from 'react';
import { Shield, Settings, Eye, Lock } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cookie Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              What Are Cookies?
            </h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>
          </div>

          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-purple-400" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-300">These cookies are necessary for the website to function properly and cannot be disabled.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                <p className="text-gray-300">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                <p className="text-gray-300">These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
              </div>
            </div>
          </div>

          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-400" />
              How We Use Cookies
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>• To remember your preferences and settings</li>
              <li>• To analyze website traffic and usage patterns</li>
              <li>• To improve website performance and user experience</li>
              <li>• To provide personalized content and recommendations</li>
              <li>• To ensure website security and prevent fraud</li>
            </ul>
          </div>

          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-red-400" />
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking 
              cookies can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                <p className="text-gray-300">Most browsers allow you to refuse or accept cookies through their settings.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                <p className="text-gray-300">You can manage your cookie preferences using our cookie consent tool.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              For more information about our privacy practices, please read our Privacy Policy.
            </p>
            <a 
              href="/privacy"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              View Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
