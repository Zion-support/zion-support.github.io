import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Terms: NextPage = () => {
  return (
    <MainLayout 
      title="Terms of Service - Zion Tech Group"
      description="Zion Tech Group's terms of service outlining the terms and conditions for using our services."
    >
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>AI and machine learning solutions</li>
                <li>Web and mobile application development</li>
                <li>Cloud architecture and migration</li>
                <li>Cybersecurity services</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using our services for illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, trademarks, and intellectual property rights in our services are owned by 
                Zion Tech Group or our licensors. You may not use our intellectual property without 
                our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Zion Tech Group be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if you 
                breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be interpreted and governed by the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Address:</strong> 123 Technology Drive, Innovation District, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;