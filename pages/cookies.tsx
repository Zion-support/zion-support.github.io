import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Cookies: NextPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized content."
      keywords="cookie policy, cookies, tracking, privacy, data collection"
    >
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer or mobile device when you visit 
                  our website. They are widely used to make websites work more efficiently and to provide 
                  information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Zion Tech Group uses cookies for several purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how visitors use our website</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To improve our services and user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function and cannot be switched off. 
                      They are usually only set in response to actions made by you which amount to a request 
                      for services, such as setting your privacy preferences or filling in forms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600">
                      These cookies allow us to count visits and traffic sources so we can measure and 
                      improve the performance of our site. They help us to know which pages are the most 
                      and least popular and see how visitors move around the site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                    <p className="text-gray-600">
                      These cookies enable the website to provide enhanced functionality and personalization. 
                      They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-600">
                      These cookies may be set through our site by our advertising partners to build a 
                      profile of your interests and show you relevant adverts on other sites.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-600 mb-4">
                  We may also use third-party cookies from trusted partners such as:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Advertising networks for targeted advertising</li>
                  <li>Customer support tools for live chat functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-600 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Cookie consent: Use our cookie consent banner to manage preferences</li>
                  <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                  <li>Browser extensions: Install privacy-focused browser extensions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Browser-Specific Instructions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chrome</h3>
                    <p className="text-gray-600">
                      Go to Settings > Privacy and security > Cookies and other site data
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Firefox</h3>
                    <p className="text-gray-600">
                      Go to Options > Privacy & Security > Cookies and Site Data
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Safari</h3>
                    <p className="text-gray-600">
                      Go to Preferences > Privacy > Manage Website Data
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge</h3>
                    <p className="text-gray-600">
                      Go to Settings > Cookies and site permissions > Cookies and site data
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
                <p className="text-gray-600">
                  If you choose to disable cookies, some features of our website may not function properly. 
                  This may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Inability to remember your preferences</li>
                  <li>Reduced functionality of interactive features</li>
                  <li>Less personalized content and recommendations</li>
                  <li>Potential issues with form submissions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any 
                  material changes by posting the updated policy on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Zion Tech Group</strong><br />
                    Email: kleber@ziontechgroup.com<br />
                    Phone: +1 302 464 0950<br />
                    Address: 364 E Main St STE 1008, Middletown DE 19709
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

export default Cookies;