import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
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
  BarChart3,
} from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
<<<<<<< HEAD
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
=======
      type: 'Essential Cookies',
      icon: Shield,
      description:
        'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose:
        'They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.',
      examples: [
        'Session management',
        'Security features',
        'Load balancing',
        'User authentication',
      ],
      necessary: true,
    },
    {
      type: 'Analytics Cookies',
      icon: BarChart3,
      description:
        'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      purpose:
        'They help us to know which pages are the most and least popular and see how visitors move around the site.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring',
      ],
      necessary: false,
    },
    {
      type: 'Functional Cookies',
      icon: Settings,
      description:
        'These cookies enable the website to provide enhanced functionality and personalisation.',
      purpose:
        'They may be set by us or by third party providers whose services we have added to our pages.',
      examples: [
        'Language preferences',
        'Region settings',
        'User interface customization',
        'Chat widget functionality',
      ],
      necessary: false,
    },
    {
      type: 'Marketing Cookies',
      icon: Globe,
      description:
        'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      purpose:
        'They are used to deliver adverts more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.',
      examples: [
        'Social media integration',
        'Advertising networks',
        'Retargeting campaigns',
        'Interest-based advertising',
      ],
      necessary: false,
    },
>>>>>>> main
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '2 years',
      type: 'Analytics',
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics',
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      type: 'Analytics',
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential',
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user interface preferences',
      duration: '1 year',
      type: 'Functional',
    },
    {
      name: 'language',
      purpose: 'Stores user language preference',
      duration: '1 year',
      type: 'Functional',
    },
  ];
=======
import SEO from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Cookie, Shield, Eye, Settings } from 'lucide-react';
>>>>>>> main

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
<<<<<<< HEAD
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
<<<<<<< HEAD
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 27, 2025
            </p>
=======
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Cookie className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Cookie <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                This Cookie Policy explains how Zion Tech Group uses cookies and
                similar technologies when you visit our website. Learn about the
                types of cookies we use and how to manage your preferences.
              </p>
              <div className="text-sm text-gray-500">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
>>>>>>> main
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-16 bg-white">
<<<<<<< HEAD
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
=======
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What Are Cookies?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently and to provide
                  information to website owners.
                </p>
                <p className="mb-6">
                  Cookies allow a website to recognize a user&apos;s device and
                  remember information about their visit, ' such as their
                  preferred language and other settings. This can make your next
                  visit easier and the site more useful to you.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Eye className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        <strong>Important: </strong> Cookies do not harm your
                        computer or contain viruses. They are simply text files
                        that help us provide you with a better browsing
                        experience.
                      </p>
                    </div>
                  </div>
>>>>>>> main
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
<<<<<<< HEAD
            
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
=======

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-100 mr-4">
                      <cookie.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {cookie.type}
                      </h3>
                      {cookie.necessary && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Necessary
                        </span>
                      )}
                    </div>
>>>>>>> main
                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <p className="text-gray-600 mb-4">{cookie.purpose}</p>
                  <div>
<<<<<<< HEAD
                    <h4 className="font-semibold text-gray-900 mb-2">Examples: </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
=======
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Examples:{' '}
                    </h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li
                          key={exampleIndex}
                          className="flex items-center text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {example}
                        </li>
>>>>>>> main
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

<<<<<<< HEAD
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
=======
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cookie Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="hover: bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {cookie.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {cookie.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {cookie.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            cookie.type === 'Essential'
                              ? 'bg-green-100 text-green-800'
                              : cookie.type === 'Analytics'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Managing Cookies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Managing Your Cookie Preferences
              </h2>
>>>>>>> main

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
=======
      </Head>
"
      <div className="min-h-screen bg-gray-50 py-12">"
        <div className="max-w-4xl mx-auto px-4 sm: px-6 l,
    g:px-8">
          {/* Header */}"
          <div className="mb-8">
            <Link"
              href="/""
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >"
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>"
            <div className="flex items-center mb-4">"
              <Cookie className="h-8 w-8 text-blue-600 mr-3" />"
              <h1 className="text-3xl font-bold text-gray-900">
                Cookie Policy
              </h1>
            </div>"
            <p className="text-gray-600">
              Last update,
    d: {new Date().toLocaleDateString()}
            </p>
          </div>
"
          <div className="space-y-8">
            {/* Introduction */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>"
              <p className="text-gray-600 mb-4">"
                This Cookie Policy explains how Zion Tech Group ("we", "us", or"
                "our") uses cookies and similar technologies when you visit our"
                website https: //ziontechgroup.com (the "Service"). It explains
                what these technologies are and why we use them, as well as your
                rights to control our use of them.
              </p>"
              <p className="text-gray-600">
                In some cases we may use cookies to collect personal
                information, or information that becomes personal information if
                we combine it with other information.
              </p>
            </Card>

            {/* What are Cookies */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Are Cookies?
              </h2>"
              <p className="text-gray-600 mb-4">
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>"
              <p className="text-gray-600">
                Cookies set by the website owner (in this case, Zion Tech Group)"
                are called "first party cookies". Cookies set by parties other"
                than the website owner are called "third party cookies". Third
                party cookies enable third party features or functionality to be
                provided on or through the website (e.g. advertising,
                interactive content and analytics).
              </p>
            </Card>

            {/* Types of Cookies */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
"
              <div className="space-y-6">"
                <div className="flex items-start">"
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Essential Cookies
                    </h3>"
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function
                      and cannot be switched off in our systems. They are
                      usually only set in response to actions made by you which
                      amount to a request for services, such as setting your
                      privacy preferences, logging in or filling in forms.
                    </p>
                  </div>
                </div>
"
                <div className="flex items-start">"
                  <Eye className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Analytics Cookies
                    </h3>"
                    <p className="text-gray-600">
                      These cookies allow us to count visits and traffic sources
                      so we can measure and improve the performance of our site.
                      They help us to know which pages are the most and least
                      popular and see how visitors move around the site.
                    </p>
                  </div>
                </div>
"
                <div className="flex items-start">"
                  <Settings className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Functional Cookies
                    </h3>"
                    <p className="text-gray-600">
                      These cookies enable the website to provide enhanced
                      functionality and personalisation. They may be set by us
                      or by third party providers whose services we have added
                      to our pages.
                    </p>
                  </div>
>>>>>>> main
                </div>
              </div>
            </Card>

<<<<<<< HEAD
            {/* Your Rights */}"
            <Card className="p-6">"
=======
<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                If you have any questions about our use of cookies or this
                Cookie Policy, please don&apos;t hesitate to contact us.'
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
=======
            {/* Your Rights */}
            <Card className="p-6">
>>>>>>> main
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
                  <strong>Phon,
    e:</strong> +1 302 464 0950
                  <br />
                  <strong>Addres,
    s:</strong> 364 E Main St STE 1008, Middletown
                  DE 19709
                </p>
>>>>>>> main
              </div>
            </Card>
          </div>
<<<<<<< HEAD
        </section>
      </main>

      <Footer />
=======
        </div>
      </div>
>>>>>>> main
    </>
<<<<<<< HEAD
  )
}
=======
  );
}
"
>>>>>>> main
