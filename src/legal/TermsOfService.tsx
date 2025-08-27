import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-zion-slate-light text-lg">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 leading-relaxed">
          By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
      </section>

      <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Zion Tech Group provides technology consulting, software development, cloud services, cybersecurity solutions, and related technology services. Our services are subject to change or termination at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed">
              When creating an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password. Zion Tech Group cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. You may not attempt to gain unauthorized access to any part of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Service Level Agreements</h2>
            <p className="text-gray-300 leading-relaxed">
              Service level agreements (SLAs) are provided as part of our service offerings. These SLAs outline the performance standards and remedies available if we fail to meet these standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data</h2>
            <p className="text-gray-300 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Disclaimers</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are provided "as is" and "as available" without any warranties of any kind. Zion Tech Group disclaims all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these terms. Upon termination, your right to use our services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zion Tech Group operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com or through our contact form on our website.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="text-indigo-400 hover:text-indigo-300 font-medium">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;