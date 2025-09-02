import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../components/Layout&apos;;
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from &apos;lucide-react&apos;;

const Terms: NextPage = () => {
  return (
    <Layout
      title=&quot;Terms of Service - Zion Tech Group&quot;
      description=&quot;Read Zion Tech Group&apos;s Terms of Service to understand the terms and conditions for using our website and services.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Terms of
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Service</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Please read these terms carefully before using our website and services.
          </p>
          <p className=&quot;text-sm text-gray-300&quot;>
            Last updated: January 15, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4 max-w-4xl&quot;>
          <div className=&quot;prose prose-lg max-w-none&quot;>
            {/* Introduction */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <FileText className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Agreement to Terms
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                These Terms of Service (&quot;Terms&quot;) govern your use of the Zion Tech Group website located at ziontechgroup.com and our services. By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
              <p className=&quot;text-gray-600&quot;>
                If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Services Description */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Our Services</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Zion Tech Group provides technology consulting and development services, including but not limited to:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>AI and Machine Learning Development</li>
                <li>Cloud Services and Architecture</li>
                <li>Web and Mobile Application Development</li>
                <li>Blockchain Solutions</li>
                <li>IoT Platform Development</li>
                <li>Cybersecurity Services</li>
                <li>Technology Consulting</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <Shield className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                User Responsibilities
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                When using our services, you agree to:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any illegal or harmful activities</li>
                <li>Maintain the confidentiality of any credentials provided</li>
                <li>Notify us of any security breaches or unauthorized access</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <XCircle className=&quot;w-8 h-8 mr-3 text-red-600&quot; />
                Prohibited Uses
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                You may not use our services for any of the following purposes:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Violating any applicable laws or regulations</li>
                <li>Transmitting malicious code or viruses</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with the proper functioning of our services</li>
                <li>Collecting user information without consent</li>
                <li>Engaging in fraudulent or deceptive practices</li>
                <li>Infringing on intellectual property rights</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Intellectual Property Rights</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                All content, trademarks, and intellectual property on our website and in our services are owned by Zion Tech Group or our licensors. You may not:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our intellectual property</li>
              </ul>
            </div>

            {/* Service Availability */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Service Availability</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We strive to maintain high availability of our services, but we cannot guarantee uninterrupted access. We reserve the right to:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Modify or discontinue services with reasonable notice</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Suspend services for security or legal reasons</li>
                <li>Update or upgrade our systems</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Payment Terms</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                For paid services, the following terms apply:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices may change with reasonable notice</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <AlertTriangle className=&quot;w-8 h-8 mr-3 text-yellow-600&quot; />
                Limitation of Liability
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Personal injury or property damage</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Indemnification</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit</li>
              </ul>
            </div>

            {/* Termination */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Termination</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Your right to use our services will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding obligations</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <Scale className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Governing Law
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Changes to Terms</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Posting the updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our services</li>
              </ul>
              <p className=&quot;text-gray-600&quot;>
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Contact Information</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className=&quot;bg-gray-50 rounded-lg p-6&quot;>
                <p className=&quot;text-gray-700 mb-2&quot;><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p className=&quot;text-gray-700 mb-2&quot;><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p className=&quot;text-gray-700 mb-2&quot;><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className=&quot;mb-12 bg-blue-50 border-l-4 border-blue-400 p-6&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <CheckCircle className=&quot;w-6 h-6 text-blue-600 mr-2&quot; />
                <h3 className=&quot;text-lg font-semibold text-blue-800&quot;>Acknowledgment</h3>
              </div>
              <p className=&quot;text-blue-700&quot;>
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Questions About Our Terms?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            We&apos;re here to help clarify any questions you may have about our Terms of Service.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Contact Us
            </Link>
            <a href=&quot;/contact&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;