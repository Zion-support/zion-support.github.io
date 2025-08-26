import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Shield, Info, CheckCircle } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cookie className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies to recognize you when you visit our website. 
                It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-6 h-6 text-blue-600 mr-3" />
                What Are Cookies?
              </h2>
              <p className="text-gray-600 mb-6">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
                as well as to provide reporting information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Settings className="w-6 h-6 text-blue-600 mr-3" />
                How We Use Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, 
                and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target 
                the interests of our users to enhance the experience on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies are essential to provide you with services available through our website and to enable you to use some of its features.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Authentication and security cookies</li>
                    <li>• Load balancing and session cookies</li>
                    <li>• User interface customization cookies</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics and Performance Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies allow us to analyze how our website is being accessed and used, enabling us to improve performance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Analytics cookies</li>
                    <li>• Performance monitoring cookies</li>
                    <li>• Error tracking cookies</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies allow our website to remember choices you make when you use our website.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Language preference cookies</li>
                    <li>• Theme preference cookies</li>
                    <li>• Form data cookies</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 mb-6">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our website, 
                deliver advertisements on and through our website, and so on. These third-party cookies are used for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Website analytics and performance monitoring</li>
                <li>Social media integration and sharing</li>
                <li>Advertising and marketing purposes</li>
                <li>Customer support and chat functionality</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Control Cookies</h2>
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your 
                preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies 
                you accept or reject.
              </p>
              <p className="text-gray-600 mb-6">
                Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Controls</h2>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to manage cookies through their settings preferences. However, if you limit the ability 
                of websites to set cookies, you may worsen your overall user experience. Some features of our website may not function 
                properly if cookies are disabled.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="text-gray-600 mb-6">
                The length of time a cookie will stay on your computer or mobile device depends on whether it is a "persistent" or "session" cookie. 
                Session cookies will only stay on your device until you stop browsing. Persistent cookies stay on your computer or mobile device 
                until they expire or are deleted.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or 
                for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay 
                informed about our use of cookies and related technologies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies or other technologies, please contact us:
              </p>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Zion Tech Group, Privacy Team
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Manage Your Cookie Preferences
          </h2>
          <p className="text-gray-600 mb-6">
            Take control of your privacy and cookie settings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
              <CheckCircle className="w-5 h-5 inline mr-2" />
              Accept All Cookies
            </button>
            <Link
              to="/privacy"
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}