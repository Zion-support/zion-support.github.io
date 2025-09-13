import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
        keywords="cookie policy, cookies, tracking, Zion Tech Group, privacy"
        canonical="https://ziontechgroup.com/cookies"
      />
      
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
              
              <h2>How We Use Cookies</h2>
              <p>
                We use cookies for several purposes:
              </p>
              <ul>
                <li>Essential cookies to ensure our website functions properly</li>
                <li>Analytics cookies to understand how visitors use our site</li>
                <li>Marketing cookies to deliver relevant advertisements</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              
              <h2>Types of Cookies We Use</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Settings className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                  <p className="text-gray-300">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Eye className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Settings className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are used to track visitors across websites for advertising purposes.
                  </p>
                </div>
              </div>
              
              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul>
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set cookie preferences</li>
              </ul>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cookies;