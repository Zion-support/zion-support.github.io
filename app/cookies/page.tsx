import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text">
            Cookie Policy
          </h1>
          
          <div className="cyber-card hologram-card p-8">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">What Are Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">How We Use Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Essential cookies to ensure our website functions properly</li>
                  <li>Analytics cookies to understand how visitors use our website</li>
                  <li>Preference cookies to remember your settings and preferences</li>
                  <li>Marketing cookies to provide relevant content and advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                    <p className="text-gray-300 text-sm">
                      These cookies are necessary for the website to function and cannot be switched off. 
                      They are usually only set in response to actions made by you which amount to a request for services.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300 text-sm">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                    <p className="text-gray-300 text-sm">
                      These cookies enable the website to provide enhanced functionality and personalization.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Managing Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Through your browser settings to block or delete cookies</li>
                  <li>By using our cookie preference center (if available)</li>
                  <li>By opting out of specific cookie categories</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  Some cookies on our site are set by third-party services that appear on our pages. 
                  We do not control these cookies and recommend checking the third-party websites for more information about their cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    privacy@ziontechgroup.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
