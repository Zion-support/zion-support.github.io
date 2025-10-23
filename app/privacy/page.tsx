<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
export default function PagePage() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPage: React.FC = () => {
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced page solutions by Zion Tech Group"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for
              updates.
=======
        <title>Privacy Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about how Zion Tech Group protects your privacy and handles your data."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when
              you create an account, use our services, or contact us for
              support.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, and communicate with
              you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default PrivacyPage;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
