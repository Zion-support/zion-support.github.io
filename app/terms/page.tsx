import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Terms of Service for Zion Tech Group - Our terms and conditions for using our AI and IT services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Zion Tech Group provides enterprise-grade AI, micro SaaS, and IT solutions including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>AI Services & Solutions</li>
            <li>Micro SaaS Development</li>
            <li>IT Services & Infrastructure</li>
            <li>Cloud Migration Services</li>
            <li>DevOps and SRE Solutions</li>
            <li>Cybersecurity Services</li>
            <li>Enterprise Software Development</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily access and use our services for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a 
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained in the service</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Use the services in compliance with applicable laws</li>
            <li>Not engage in any unlawful or prohibited activities</li>
            <li>Respect intellectual property rights</li>
            <li>Not interfere with the proper functioning of our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Uses</h2>
          <p className="text-gray-700 mb-4">
            You may not use our services:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
            <li>To upload or transmit viruses or any other type of malicious code</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
          <p className="text-gray-700 mb-4">
            We strive to provide continuous service availability, but we do not guarantee that our 
            services will be available at all times. We may experience downtime for maintenance, 
            updates, or due to circumstances beyond our control.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The service and its original content, features, and functionality are and will remain 
            the exclusive property of Zion Tech Group and its licensors. The service is protected 
            by copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs 
            your use of the service, to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
            suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
            or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
            or other intangible losses, resulting from your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The information on this service is provided on an "as is" basis. To the fullest extent 
            permitted by law, Zion Tech Group excludes all representations, warranties, conditions 
            and terms relating to our service and the use of this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws 
            of Delaware, United States, and you irrevocably submit to the exclusive jurisdiction 
            of the courts in that state or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these terms at any 
            time. If a revision is material, we will try to provide at least 30 days notice prior 
            to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account and bar access to the service immediately, 
            without prior notice or liability, under our sole discretion, for any reason whatsoever 
            and without limitation, including but not limited to a breach of the terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Zion Tech Group</strong><br />
              364 E Main St STE 1008<br />
              Middletown, DE 19709
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> kleber@ziontechgroup.com<br />
              <strong>Phone:</strong> +1 302 464 0950
            </p>
          </div>
        </section>
      </div>
=======
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Terms of service and usage agreement for Zion Tech Group services.',
  keywords: 'terms of service, terms and conditions, service agreement',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group provides AI, micro SaaS, and IT services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Artificial Intelligence and Machine Learning solutions</li>
              <li>Micro SaaS application development</li>
              <li>IT services and infrastructure management</li>
              <li>Cloud migration and DevOps services</li>
              <li>Consulting and implementation services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              Users are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of their accounts</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Not using our services for illegal or unauthorized purposes</li>
              <li>Respecting intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability but do not guarantee uninterrupted access. 
              We reserve the right to modify or discontinue services with reasonable notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content, trademarks, and intellectual property on our platform are owned by 
              Zion Tech Group or our licensors and are protected by copyright and other laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
              indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms are specified in individual service agreements. All fees are non-refundable 
              unless otherwise specified in writing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate services with written notice. Upon termination, 
              all rights and obligations shall cease except for those that by their nature should survive.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms shall be governed by and construed in accordance with the laws of Delaware, 
              United States.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a>
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help clarify any questions about our terms of service.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7
    </div>
  );
}