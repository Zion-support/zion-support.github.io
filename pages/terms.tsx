import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our AI, cloud, and quantum computing services." />
        <meta name="keywords" content="terms of service, legal, terms and conditions, service agreement" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms and conditions for using Zion Tech Group services" />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service - Zion Tech Group" />
        <meta name="twitter:description" content="Terms and conditions for using our services" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-6">Last updated: January 15, 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using the services provided by Zion Tech Group ("Company," "we," "us," or "our"), 
                  including but not limited to our website, AI solutions, cloud services, and quantum computing platforms, 
                  you agree to be bound by these Terms of Service ("Terms").
                </p>
                <p className="text-gray-700">
                  If you do not agree to these Terms, you may not access or use our services. We reserve the right to 
                  modify these Terms at any time, with notice provided through our website or other means.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-700 mb-4">
                  Zion Tech Group provides cutting-edge technology solutions including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Artificial Intelligence and Machine Learning platforms</li>
                  <li>Cloud computing and infrastructure services</li>
                  <li>Cybersecurity solutions and consulting</li>
                  <li>Quantum computing applications and research</li>
                  <li>Data analytics and business intelligence tools</li>
                  <li>DevOps and automation services</li>
                  <li>Technical consulting and implementation services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <p className="text-gray-700 mb-4">
                  To access certain services, you may be required to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Providing accurate and complete information during registration</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Services are billed according to our pricing structure. Payment terms include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Payment is due upon receipt of invoice unless otherwise agreed</li>
                  <li>Late payments may result in service suspension</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to modify pricing with 30 days notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
                <p className="text-gray-700 mb-4">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit malicious code or engage in cyber attacks</li>
                  <li>Access or attempt to access unauthorized systems</li>
                  <li>Use services for illegal or unauthorized purposes</li>
                  <li>Interfere with service availability to other users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content, software, technology, and intellectual property rights related to our services 
                  remain the exclusive property of Zion Tech Group or our licensors. You retain ownership of 
                  your data and any custom solutions developed specifically for you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our data practices are governed by our Privacy Policy, 
                  which is incorporated into these Terms by reference. We implement appropriate security 
                  measures to protect your data in accordance with industry standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Service Level Agreements</h2>
                <p className="text-gray-700 mb-4">
                  Specific service level agreements may apply to certain services. These will be provided 
                  separately and will detail availability, performance metrics, and support response times.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZION TECH GROUP SHALL NOT BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
                  LIMITED TO LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL.
                </p>
                <p className="text-gray-700">
                  Our total liability shall not exceed the amount paid by you for the specific service 
                  giving rise to the claim in the 12 months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
                <p className="text-gray-700 mb-4">
                  You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, 
                  employees, and agents from and against any claims, damages, losses, liabilities, 
                  costs, and expenses arising from your use of our services or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate these Terms for convenience with 30 days written notice. 
                  We may terminate immediately for cause, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Material breach of these Terms</li>
                  <li>Non-payment of fees</li>
                  <li>Violation of acceptable use policy</li>
                  <li>Illegal or unauthorized use of services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of Delaware, without regard to its conflict of law principles. Any disputes 
                  shall be resolved in the courts of Delaware.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    Phone: +1 (302) 464-0950<br />
                    Email: kleber@ziontechgroup.com
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
