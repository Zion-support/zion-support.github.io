import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Users, BarChart3, CheckCircle, AlertTriangle } from 'lucide-react';

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled",
    icon: Shield,
    purpose: "Website functionality",
    examples: [
      "User authentication and login sessions",
      "Shopping cart and checkout processes",
      "Security and fraud prevention",
      "Load balancing and performance optimization"
    ],
    retention: "Session or up to 1 year",
    required: true
  },
  {
    title: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website",
    icon: BarChart3,
    purpose: "Website analytics and performance",
    examples: [
      "Page views and user behavior tracking",
      "Traffic sources and referral data",
      "Performance monitoring and optimization",
      "A/B testing and user experience improvements"
    ],
    retention: "Up to 2 years",
    required: false
  },
  {
    title: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization",
    icon: Settings,
    purpose: "Enhanced user experience",
    examples: [
      "Language and region preferences",
      "User interface customization",
      "Remembering form data and preferences",
      "Social media integration features"
    ],
    retention: "Up to 1 year",
    required: false
  },
  {
    title: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements and track campaign performance",
    icon: Users,
    purpose: "Advertising and marketing",
    examples: [
      "Targeted advertising based on interests",
      "Social media advertising tracking",
      "Email marketing campaign tracking",
      "Conversion tracking and attribution"
    ],
    retention: "Up to 2 years",
    required: false
  }
];

const thirdPartyServices = [
  {
    name: "Google Analytics",
    purpose: "Website analytics and performance monitoring",
    cookies: ["_ga", "_gid", "_gat"],
    privacy: "https://policies.google.com/privacy"
  },
  {
    name: "Google Ads",
    purpose: "Advertising and conversion tracking",
    cookies: ["_gcl_au", "_gcl_aw", "_gcl_dc"],
    privacy: "https://policies.google.com/privacy"
  },
  {
    name: "Facebook Pixel",
    purpose: "Social media advertising and analytics",
    cookies: ["_fbp", "_fbc"],
    privacy: "https://www.facebook.com/privacy/explanation"
  },
  {
    name: "LinkedIn Insight",
    purpose: "Professional network advertising",
    cookies: ["_li_ses", "_li_oid"],
    privacy: "https://www.linkedin.com/legal/privacy-policy"
  }
];

const yourRights = [
  {
    title: "Cookie Consent",
    description: "You can accept or decline non-essential cookies through our cookie banner",
    icon: CheckCircle
  },
  {
    title: "Cookie Settings",
    description: "Manage your cookie preferences at any time through our settings panel",
    icon: Settings
  },
  {
    title: "Browser Controls",
    description: "Use your browser settings to control and delete cookies",
    icon: Shield
  },
  {
    title: "Opt-Out",
    description: "Opt out of targeted advertising through industry opt-out tools",
    icon: AlertTriangle
  }
];

const browserInstructions = [
  {
    browser: "Google Chrome",
    steps: [
      "Click the three dots menu in the top right",
      "Select 'Settings' and then 'Privacy and security'",
      "Click 'Cookies and other site data'",
      "Choose your preferred cookie settings"
    ]
  },
  {
    browser: "Mozilla Firefox",
    steps: [
      "Click the hamburger menu in the top right",
      "Select 'Settings' and then 'Privacy & Security'",
      "Under 'Cookies and Site Data', click 'Manage Data'",
      "Choose your preferred cookie settings"
    ]
  },
  {
    browser: "Safari",
    steps: [
      "Click 'Safari' in the menu bar",
      "Select 'Preferences' and then 'Privacy'",
      "Under 'Cookies and website data', choose your settings",
      "Click 'Manage Website Data' for more options"
    ]
  },
  {
    browser: "Microsoft Edge",
    steps: [
      "Click the three dots menu in the top right",
      "Select 'Settings' and then 'Cookies and site permissions'",
      "Click 'Cookies and site data'",
      "Choose your preferred cookie settings"
    ]
  }
];

const contactInfo = {
  email: "privacy@ziontechgroup.com",
  phone: "+1 302 464 0950",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand cookie types, purposes, and how to manage your cookie preferences."
      keywords="cookie policy, cookies, tracking, privacy, data collection, website analytics"
      canonical="https://ziontechgroup.com/cookies"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                This policy explains how Zion Tech Group uses cookies and similar technologies 
                on our website to enhance your experience and provide our services.
              </p>
              <div className="mt-8 text-sm text-blue-200">
                Last updated: January 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content and advertisements.
              </p>
              <p className="text-lg text-gray-600">
                We use both first-party cookies (set by us) and third-party cookies (set by other services) 
                to enhance functionality and provide analytics. You can control which cookies you accept 
                through your browser settings or our cookie consent banner.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. Here's what each type does.
              </p>
            </motion.div>

            <div className="space-y-8">
              {cookieTypes.map((cookieType, index) => {
                const IconComponent = cookieType.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-50 p-6 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {cookieType.title}
                            </h3>
                            <p className="text-gray-600 mt-1">
                              {cookieType.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            cookieType.required 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {cookieType.required ? 'Required' : 'Optional'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                          <p className="text-gray-600 mb-4">{cookieType.purpose}</p>
                          
                          <h4 className="font-semibold text-gray-900 mb-2">Retention Period:</h4>
                          <p className="text-gray-600">{cookieType.retention}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {cookieType.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use third-party services that may set their own cookies on our website.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {thirdPartyServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.purpose}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.cookies.map((cookie, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {cookie}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={service.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    View Privacy Policy →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Cookie Rights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                You have control over cookies and can manage your preferences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yourRights.map((right, index) => {
                const IconComponent = right.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {right.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {right.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Browser Instructions */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Managing Cookies in Your Browser
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                You can control cookies through your browser settings. Here's how for popular browsers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {browserInstructions.map((browser, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {browser.browser}
                  </h3>
                  <ol className="space-y-2">
                    {browser.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              If you have any questions about our use of cookies or this cookie policy, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Cookie className="w-6 h-6 mr-2" />
                <span>Cookie Management</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 mr-2" />
                <span>Privacy Protection</span>
              </div>
              <div className="flex items-center justify-center">
                <Settings className="w-6 h-6 mr-2" />
                <span>Customizable Settings</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call Us
              </a>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>Email: {contactInfo.email}</p>
              <p>Phone: {contactInfo.phone}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}