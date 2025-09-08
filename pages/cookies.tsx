import Link from 'next/link';
import Head from 'next/head';

export default function Cookies() {
const contact = { 
  phone: '+1 302 464 0950', 
  email: 'kleber@ziontechgroup.com', 
  address: '364 E Main St STE 1008 Middletown DE 19709', 
  site: 'https://ziontechgroup.com'
};

const cookieTypes = [
  {
    type: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    purpose: "Enable basic website functionality, security, and user authentication.",
    examples: [
      "Session management cookies",
      "Security and authentication cookies",
      "Load balancing cookies",
      "User interface customization cookies"
    ],
    retention: "Session or up to 1 year"
  },
  {
    type: "Analytics Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    purpose: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: [
      "Google Analytics cookies",
      "Page view tracking",
      "User behavior analysis",
      "Performance monitoring"
    ],
    retention: "Up to 2 years"
  },
  {
    type: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as videos and live chat.",
    purpose: "Provide enhanced features and personalization options for a better user experience.",
    examples: [
      "Language preference cookies",
      "Chat widget cookies",
      "Video player cookies",
      "Form data cookies"
    ],
    retention: "Up to 1 year"
  },
  {
    type: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
    purpose: "Show you relevant advertisements on other websites and measure the effectiveness of our marketing campaigns.",
    examples: [
      "Advertising network cookies",
      "Social media tracking cookies",
      "Remarketing cookies",
      "Conversion tracking cookies"
    ],
    retention: "Up to 2 years"
  }
  ];

const Page = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website, what types of cookies we use, and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website tracking, user preferences" />
        <link rel="canonical" href={`${contact.site}/cookies`} />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group | Cookie Usage & Management" />
        <meta property="og:description" content="Learn about how Zion Tech Group uses cookies on our website, what types of cookies we use, and how you can manage your cookie preferences." />
        <meta property="og:url" content={`${contact.site}/cookies`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem',
              fontWeight: 800, 
              marginBottom: 20,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Cookie Policy
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>
              Learn about how we use cookies and similar technologies on our website to enhance your experience.
            </p>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              What Are Cookies?
            </h2>
            <div style={{
              background: '#f8fafc',
              borderRadius: 12,
              padding: 30,
              border: '1px solid #e2e8f0',
              marginBottom: 30
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#94a3b8' }}>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
              Types of Cookies We Use
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              {cookieTypes.map((cookie, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  borderRadius: 12,
                  padding: 30,
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    fontWeight: 700, 
                    marginBottom: 15,
                    color: '#3b82f6'
                  }}>
                    {cookie.type}
                  </h3>
                  
                  <p style={{ 
                    color: '#666',
                    marginBottom: 20, 
                    lineHeight: 1.6,
                    fontSize: '1.1rem'
                  }}>
                    {cookie.description}
                  </p>
                  
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                      Purpose:
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5 }}>
                      {cookie.purpose}
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                      Examples:
                    </h4>
                    <ul style={{ color: '#666', paddingLeft: 20 }}>
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} style={{ marginBottom: 5 }}>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                      Retention Period:
                    </h4>
                    <p style={{ color: '#666' }}>
                      {cookie.retention}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Managing Your Cookie Preferences
            </h2>
            <div style={{
              background: '#f8fafc',
              borderRadius: 12,
              padding: 30,
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: 20 }}>
                You have the right to choose whether to accept or reject cookies. You can exercise your cookie rights by 
                setting your preferences in our cookie banner or by adjusting your browser settings.
              </p>
              
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                  Browser Settings:
                </h3>
                <p style={{ color: '#666', lineHeight: 1.5 }}>
                  Most web browsers allow you to control cookies through their settings preferences. You can set your 
                  browser to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, 
                  some features of our website may not function properly.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                  Cookie Banner:
                </h3>
                <p style={{ color: '#666', lineHeight: 1.5 }}>
                  When you first visit our website, you will see a cookie banner that allows you to accept or reject 
                  non-essential cookies. You can change your preferences at any time by clicking the cookie settings 
                  link in our website footer.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Third-Party Cookies
            </h2>
            <div style={{
              background: '#f8fafc',
              borderRadius: 12,
              padding: 30,
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: 20 }}>
                Some cookies on our website are set by third-party services that appear on our pages. These third parties 
                may use cookies to collect information about your online activities across different websites.
              </p>
              
              <div style={{ display: 'grid', gap: 15 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 6, height: 6, background: '#3b82f6', borderRadius: '50%' }} />
                  <span style={{ color: '#666' }}>Google Analytics - Website analytics and performance monitoring</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 6, height: 6, background: '#3b82f6', borderRadius: '50%' }} />
                  <span style={{ color: '#666' }}>Social Media Platforms - Social sharing and engagement tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 6, height: 6, background: '#3b82f6', borderRadius: '50%' }} />
                  <span style={{ color: '#666' }}>Advertising Networks - Targeted advertising and campaign measurement</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            background: '#f8fafc',
            borderRadius: 12,
            padding: 30,
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 15 }}>
              Questions About Our Cookie Policy?
            </h2>
            <p style={{ color: '#666', marginBottom: 20 }}>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us.
            </p>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: 8,
              fontSize: '1rem',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';
export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-blue-100">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website.
                  They help us provide you with a better experience by remembering your preferences and
                  enabling certain functionality.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Essential Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies are necessary for the website to function properly. They enable basic
                        functionality like page navigation and access to secure areas.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Analytics Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies help us understand how visitors interact with our website by collecting
                        and reporting information anonymously.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Functional Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies enable enhanced functionality and personalization, such as remembering
                        your preferences and settings.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Language preferences, theme settings, form data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Marketing Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies are used to track visitors across websites to display relevant and
                        engaging advertisements.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Advertising cookies, social media cookies, remarketing pixels
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Use Cookies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Website Functionality
                    </h3>
                    <p className="text-gray-600">
                      To ensure our website works properly and provide you with a seamless experience.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Performance Analysis
                    </h3>
                    <p className="text-gray-600">
                      To understand how our website is used and identify areas for improvement.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalization
                    </h3>
                    <p className="text-gray-600">
                      To remember your preferences and provide customized content and features.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Security
                    </h3>
                    <p className="text-gray-600">
                      To protect against fraud and ensure the security of our website and users.
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Third-Party Cookies
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    We may use third-party services that set their own cookies. These include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                    <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>
                    <li><strong>Customer Support:</strong> For providing chat and support functionality</li>
                  </ul>
                  <p className="text-gray-600">
                    These third parties have their own privacy policies and cookie practices. We recommend
                    reviewing their policies for more information.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    You have several options for managing cookies:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Browser Settings
                      </h3>
                      <p className="text-gray-600">
                        Most browsers allow you to control cookies through their settings. You can block or
                        delete cookies, or set preferences for specific websites.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Cookie Consent Banner
                      </h3>
                      <p className="text-gray-600">
                        When you first visit our website, you'll see a cookie consent banner where you can
                        choose which types of cookies to accept.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Opt-Out Tools
                      </h3>
                      <p className="text-gray-600">
                        You can use industry opt-out tools to manage advertising cookies and tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact of Disabling Cookies
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    Please note that disabling certain cookies may impact your experience on our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Some features may not work properly</li>
                    <li>You may need to re-enter information more frequently</li>
                    <li>Personalized content may not be available</li>
                    <li>We may not be able to remember your preferences</li>
                  </ul>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Updates to This Policy
                </h2>
                <p className="text-gray-600 mb-8">
                  We may update this Cookie Policy from time to time to reflect changes in our practices
                  or for other operational, legal, or regulatory reasons. We will notify you of any material
                  changes by posting the updated policy on our website.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
