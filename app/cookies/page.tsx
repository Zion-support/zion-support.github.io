import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Enable basic functions like page navigation and access to secure areas of the website.",
      examples: [
        "Session cookies",
        "Authentication cookies",
        "Security cookies"
      ],
      retention: "Session or up to 1 year"
    },
    {
      name: "Analytics Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      purpose: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis"
      ],
      retention: "Up to 2 years"
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      purpose: "Remember choices you make and provide improved, more personal features.",
      examples: [
        "Language preferences",
        "Region settings",
        "User interface preferences"
      ],
      retention: "Up to 1 year"
    },
    {
      name: "Marketing Cookies",
      description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
      purpose: "Show you relevant adverts on other sites and measure the effectiveness of our advertising campaigns.",
      examples: [
        "Social media cookies",
        "Advertising network cookies",
        "Remarketing cookies"
      ],
      retention: "Up to 1 year"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Information about how we use cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 26, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="cyber-card">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies when you visit our website 
                at ziontechgroup.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </div>
          </section>

          {/* Cookie Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
            <div className="space-y-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="cyber-card">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{cookie.name}</h3>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Purpose:</h4>
                    <p className="text-gray-300">{cookie.purpose}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Retention Period:</h4>
                    <p className="text-gray-300">{cookie.retention}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="cyber-card hologram-card">
              <h2 className="text-2xl font-bold text-white mb-6">Your Cookie Choices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                  <p className="text-gray-300">
                    Most web browsers allow you to control cookies through their settings preferences. You can set your browser 
                    to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, some features 
                    of our website may not function properly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                  <p className="text-gray-300">
                    When you first visit our website, you will see a cookie consent banner. You can choose which types of cookies 
                    you want to allow. You can change your preferences at any time by clicking the "Cookie Settings" link in our footer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Opt-Out Links</h3>
                  <p className="text-gray-300">
                    For third-party cookies, you can opt out through the respective third-party websites:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300">Google Analytics Opt-out</a></li>
                    <li>Google Ads: <a href="https://adssettings.google.com/" className="text-cyan-400 hover:text-cyan-300">Google Ad Settings</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <div className="cyber-card">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                Some cookies on our website are set by third-party services. We have no control over these cookies and they are 
                subject to the respective third parties' privacy policies.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left text-white py-2">Service</th>
                      <th className="text-left text-white py-2">Purpose</th>
                      <th className="text-left text-white py-2">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="text-gray-300 py-2">Google Analytics</td>
                      <td className="text-gray-300 py-2">Website analytics</td>
                      <td className="text-gray-300 py-2">
                        <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300">Google Privacy Policy</a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="text-gray-300 py-2">Google Ads</td>
                      <td className="text-gray-300 py-2">Advertising</td>
                      <td className="text-gray-300 py-2">
                        <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300">Google Privacy Policy</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 py-2">Social Media</td>
                      <td className="text-gray-300 py-2">Social sharing</td>
                      <td className="text-gray-300 py-2">
                        <a href="#" className="text-cyan-400 hover:text-cyan-300">Respective policies</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center cyber-card">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?subject=Cookie Policy Questions"
                className="cyber-button"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 privacy@ziontechgroup.com
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