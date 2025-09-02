import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Cookie, Shield, Eye, Settings } from 'lucide-react';
export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
        keywords="cookie policy, privacy, data protection, cookies, tracking"
      />
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4">
              <Cookie className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                Cookie Policy
              </h1>
            </div>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                This Cookie Policy explains how Zion Tech Group ("we", "us", or
                "our") uses cookies and similar technologies when you visit our
                website https: //ziontechgroup.com (the "Service"). It explains
                what these technologies are and why we use them, as well as your
                rights to control our use of them.
              </p>
              <p className="text-gray-600">
                In some cases we may use cookies to collect personal
                information, or information that becomes personal information if
                we combine it with other information.
              </p>
            </Card>

            {/* What are Cookies */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 mb-4">
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>
              <p className="text-gray-600">
                Cookies set by the website owner (in this case, Zion Tech Group)
                are called "first party cookies". Cookies set by parties other
                than the website owner are called "third party cookies". Third
                party cookies enable third party features or functionality to be
                provided on or through the website (e.g. advertising,
                interactive content and analytics).
              </p>
            </Card>

            {/* Types of Cookies */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Essential Cookies
                    </h3>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function
                      and cannot be switched off in our systems. They are
                      usually only set in response to actions made by you which
                      amount to a request for services, such as setting your
                      privacy preferences, logging in or filling in forms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Eye className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-600">
                      These cookies allow us to count visits and traffic sources
                      so we can measure and improve the performance of our site.
                      They help us to know which pages are the most and least
                      popular and see how visitors move around the site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Settings className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-gray-600">
                      These cookies enable the website to provide enhanced
                      functionality and personalisation. They may be set by us
                      or by third party providers whose services we have added
                      to our pages.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. The Cookie Consent
                Manager allows you to select which categories of cookies you
                accept or reject.
              </p>
              <p className="text-gray-600 mb-4">
                Essential cookies cannot be rejected as they are strictly
                necessary to provide you with services.
              </p>
              <p className="text-gray-600">
                If you choose to reject cookies, you may still use our website
                though your access to some functionality and areas of our
                website may be restricted.
              </p>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or other
                technologies, please contact us at:{' '}
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                  <br />
                  <strong>Phone:</strong> +1 302 464 0950
                  <br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown
                  DE 19709
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
