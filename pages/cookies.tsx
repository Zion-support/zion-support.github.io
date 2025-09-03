import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import {
  Shield,
  Settings,
  Eye,
  Lock,
  CheckCircle,
  AlertCircle,
  Cookie,
  Database,
  Globe,
  BarChart3
} from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      icon: Cookie, title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.', examples: ['Authentication', 'Security', 'Load balancing']
    }, {
      icon: Settings,
      title: 'Functional Cookies', description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['User preferences', 'Language settings', 'Customization']
    }, {
      icon: Eye,
      title: 'Analytics Cookies', description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics']
    }, {
      icon: Database,
      title: 'Marketing Cookies', description: 'These cookies are used to deliver relevant advertisements and marketing campaigns.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion measurement']
    }
  ];

  const cookieFeatures = [
    {
      icon: Shield, title: 'Cookie Consent',
      description: 'We obtain your consent before setting non-essential cookies.'
    }, {
      icon: Settings,
      title: 'Cookie Management', description: 'You can manage your cookie preferences at any time.'
    },
    {
      icon: CheckCircle, title: 'Transparency',
      description: 'We provide clear information about the cookies we use.'
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
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      type: 'Analytics'
    }
    {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential'
    }
    {
      name: 'user_preferences',
      purpose: 'Stores user interface preferences',
      duration: '1 year',
      type: 'Functional'
    }
    {
      name: 'language',
      purpose: 'Stores user language preference',
      duration: '1 year',
      type: 'Functional'
    }
  ];

export default function CookiePolicy() {
  return (
    <>
      <SEO'
        title="Cookie Policy - Zion Tech Group""
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience.""
        keywords="cookie policy, privacy, data protection, cookies, tracking"
      />
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about how Zion Tech Group uses cookies and similar technologies to improve your browsing experience and analyze website traffic."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/cookies" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 27, 2025
            </p>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cookie Commitment</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to transparency and giving you control over your cookie preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              {cookieFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover: shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600">
                We use different types of cookies for various purposes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <p className="text-gray-600 mb-4">{cookie.purpose}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples: </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cookie Details
              </h2>
              <p className="text-lg text-gray-600">
                Detailed information about the cookies we use
              </p>
            </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for several purposes: </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used</li>
                  <li>To improve our services and user experience</li>
                  <li>To provide personalized content and advertisements</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-gray-700 mb-4">
                  You have several options for managing cookies:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Use our cookie consent banner to choose which cookies to accept</li>
                  <li>Modify your browser settings to block or delete cookies</li>
                  <li>Use browser extensions or plugins to manage cookies</li>
                  <li>Contact us to discuss your cookie preferences</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Browser Settings</h2>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can set your browser to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, some features of our website may not function properly.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may also use third-party cookies from trusted partners to enhance our services. 
                  These may include: </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Analytics services (Google Analytics, etc.)</li>
                  <li>Social media platforms</li>
                  <li>Advertising networks</li>
                  <li>Customer support tools</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this cookie policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or this cookie policy, please contact us: </p>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Manage Your Cookie Preferences</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Take control of your privacy by managing your cookie preferences.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">
              Cookie Settings
            </button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Browser Settings
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their
                    settings preferences. You can set your browser to refuse
                    cookies or delete certain cookies.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Note:</strong> If you choose to delete or
                          refuse cookies, some features of our website may not
                          function properly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Cookie Consent
                  </h3>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you&apos;ll see a cookie
                    consent banner. ' You can choose which types of cookies you
                    want to accept.
                  </p>
                  <p className="text-gray-600 mb-4">
                    You can change your cookie preferences at any time by
                    clicking the cookie settings link in our website footer or
                    by contacting us directly.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Third-Party Cookies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Some cookies on our website are set by third-party services.
                    These include analytics services like Google Analytics and
                    social media platforms.
                  </p>
                  <p className="text-gray-600">
                    To manage these cookies, you can visit the respective
                    third-party websites or use browser extensions designed to
                    block tracking cookies.
                  </p>
                </div>
              </div>
            </Card>

            {/* Your Rights */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>"
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. The Cookie Consent
                Manager allows you to select which categories of cookies you
                accept or reject.
              </p>"
              <p className="text-gray-600 mb-4">
                Essential cookies cannot be rejected as they are strictly
                necessary to provide you with services.
              </p>"
              <p className="text-gray-600">
                If you choose to reject cookies, you may still use our website
                though your access to some functionality and areas of our
                website may be restricted.
              </p>
            </Card>

            {/* Contact */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>"
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or other"
                technologies, please contact us at:{' '}
              </p>'
              <div className="bg-gray-100 p-4 rounded-lg">"
                <p className="text-gray-800">
                  <strong>Email: </strong> kleber@ziontechgroup.com
                  <br />
                  <strong>Phon
    e:</strong> +1 302 464 0950
                  <br />
                  <strong>Addres
    s:</strong> 364 E Main St STE 1008, Middletown
                  DE 19709
                </p>

              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
