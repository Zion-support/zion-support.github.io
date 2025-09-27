import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPolicy(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and any other information you choose to provide.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and comply with legal obligations. We may also use your information to send you technical notices, updates, and promotional materials.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.'
    },
    {
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences, but disabling cookies may affect the functionality of our services.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@zionapp.com or through our contact form.'
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Privacy Policy - Zion App</title>
        <meta name="description" content="Learn about how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: January 2024
            </p>
          </header>

          <main>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At Zion App, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This privacy policy explains how we collect, use, and safeguard your information when you use our services.
                  </p>
                </div>

                <div className="space-y-12">
                  {sections.map((section, index) => (
                    <section key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </section>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions About This Policy?</h3>
                  <p className="text-gray-600">
                    If you have any questions about this privacy policy or our privacy practices, 
                    please don't hesitate to contact us. We're here to help.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}