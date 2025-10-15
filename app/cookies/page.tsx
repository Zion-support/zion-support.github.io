import React from "react";
import { Helmet } from "react-helmet-async";

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about how Zion Tech Group uses cookies to improve your experience."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we use cookies to enhance your experience
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Are Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit our website. They help us provide you
              with a better experience by remembering your preferences and
              settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies to analyze site traffic, personalize content, and
              improve our services. We also use cookies to remember your
              preferences and settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Managing Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies through your browser settings.
              However, please note that disabling cookies may affect the
              functionality of our website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
