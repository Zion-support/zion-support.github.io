import React from 'react';

export const metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Zion Tech Group terms of service and user agreement.',
  keywords: 'terms of service, user agreement, legal terms, conditions',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the Zion Tech Group website (https://ziontechgroup.com) and our services, 
            you accept and agree to be bound by the terms and provision of this agreement. If you do not 
            agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Zion Tech Group provides AI and IT solutions, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Artificial Intelligence and Machine Learning Services</li>
            <li>Cloud Infrastructure and DevOps Solutions</li>
            <li>Enterprise Software Development</li>
            <li>Data Analytics and Business Intelligence</li>
            <li>Cybersecurity Solutions</li>
            <li>Micro SaaS Platform Development</li>
            <li>Digital Transformation Consulting</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
          <p className="mb-4">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information when requested</li>
            <li>Use our services in compliance with applicable laws and regulations</li>
            <li>Not attempt to gain unauthorized access to our systems or data</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
            <li>Respect intellectual property rights</li>
            <li>Maintain the confidentiality of any login credentials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
          <p className="mb-4">
            All content, trademarks, service marks, trade names, logos, and other intellectual property 
            displayed on this website are the property of Zion Tech Group or their respective owners. 
            You may not use, reproduce, or distribute any content without our prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Availability</h2>
          <p className="mb-4">
            We strive to provide continuous service availability, but we do not guarantee uninterrupted 
            access to our services. We reserve the right to modify, suspend, or discontinue any part of 
            our services at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including but not limited to loss of 
            profits, data, or business opportunities, arising from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, 
            and agents from any claims, damages, losses, or expenses arising from your use of our services 
            or violation of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
            of our services, to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Confidentiality</h2>
          <p className="mb-4">
            Any confidential information shared between parties shall be kept confidential and not disclosed 
            to third parties without prior written consent, except as required by law or court order.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to our services immediately, without prior notice or 
            liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>
          <p className="mb-4">
            Any disputes arising from these Terms or your use of our services shall be resolved through 
            binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
          <p className="mb-4">
            If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions 
            shall remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will notify users of any material 
            changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>Zion Tech Group</strong></p>
            <p>364 E Main St STE 1008</p>
            <p>Middletown DE 19709</p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
            <p>Phone: <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}