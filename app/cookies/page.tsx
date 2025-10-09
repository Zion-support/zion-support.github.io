import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Shield, Settings, Info, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      required: true,
      examples: ['Authentication', 'Security', 'Load balancing'],
      icon: Shield
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      required: false,
      examples: ['Google Analytics', 'User behavior tracking', 'Performance metrics'],
      icon: Settings
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      required: false,
      examples: ['Language preferences', 'Theme settings', 'User preferences'],
      icon: Settings
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      required: false,
      examples: ['Ad targeting', 'Social media integration', 'Remarketing'],
      icon: Settings
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional'
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks marketing consent status',
      duration: '1 year',
      type: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Cookie className="w-16 h-16 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cookie <span className="text-cyan-400">Policy</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies on our website.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: January 15, 2024
          </div>
        </div>

        {/* What Are Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What Are Cookies?</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and enabling certain 
              functionality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to analyze how our website is used, improve its performance, 
              and provide personalized content and advertisements. This policy explains what cookies we use and how 
              you can control them.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                      {type.required && (
                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-semibold">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-gray-400 text-sm flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Specific Cookies We Use</h2>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4">
                        <code className="text-cyan-400 font-mono text-sm">{cookie.name}</code>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-gray-300">{cookie.duration}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          cookie.type === 'Essential' ? 'bg-red-500/20 text-red-400' :
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                          cookie.type === 'Functional' ? 'bg-green-500/20 text-green-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 text-cyan-400 mr-2" />
                Browser Settings
              </h3>
              <p className="text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. 
                You can set your browser to refuse cookies or delete certain cookies.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Chrome: Settings > Privacy and security > Cookies and other site data</li>
                <li>• Firefox: Options > Privacy & Security > Cookies and Site Data</li>
                <li>• Safari: Preferences > Privacy > Manage Website Data</li>
                <li>• Edge: Settings > Cookies and site permissions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 text-cyan-400 mr-2" />
                Cookie Consent
              </h3>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner. 
                You can choose which types of cookies to accept or reject.
              </p>
              <p className="text-gray-300 mb-4">
                You can change your preferences at any time by clicking the cookie settings 
                link in our website footer.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Manage Cookie Settings
              </button>
            </div>
          </div>
        </section>

        {/* Third Party Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Some cookies on our site are set by third-party services that appear on our pages. 
              These include:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. 
                  This helps us improve our content and user experience.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Social Media:</strong> We may include social media buttons that set cookies when you interact with them.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Advertising Partners:</strong> We work with advertising partners who may set cookies to show you relevant ads.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Cookies?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about our use of cookies or this cookie policy, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CookiesPage;