import React from "react";
import { Helmet } from "react-helmet-async";

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Cookie Policy for Zion Tech Group's website and services."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we use cookies and similar technologies
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Are Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit our website. They are widely used to
              make websites work more efficiently and to provide information to
              website owners.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies to improve your experience on our website, analyze
              site traffic, and personalize content. We may also use cookies to
              remember your preferences and settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Essential Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies are necessary for the website to function and
                cannot be switched off in our systems.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Analytics Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies allow us to count visits and traffic sources so we
                can measure and improve the performance of our site.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Functional Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                These cookies enable the website to provide enhanced
                functionality and personalization.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Managing Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your computer and you can set most
              browsers to prevent them from being placed.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies, please contact
              us at privacy@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
