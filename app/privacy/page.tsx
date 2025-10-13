'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}