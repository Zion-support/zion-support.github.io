import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../components/Layout&apos;;
import { Shield, Eye, Lock, Database, UserCheck, FileText } from &apos;lucide-react&apos;;

const Privacy: NextPage = () => {
  return (
    <Layout
      title=&quot;Privacy Policy - Zion Tech Group&quot;
      description=&quot;Learn how Zion Tech Group protects your privacy and handles your personal information. Our commitment to data security and privacy protection.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Privacy
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Policy</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className=&quot;text-sm text-gray-300&quot;>
            Last updated: January 15, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4 max-w-4xl&quot;>
          <div className=&quot;prose prose-lg max-w-none&quot;>
            {/* Introduction */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Introduction</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Zion Tech Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ziontechgroup.com or use our services.
              </p>
              <p className=&quot;text-gray-600&quot;>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <Database className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Information We Collect
              </h2>
              
              <h3 className=&quot;text-2xl font-semibold text-gray-800 mb-4&quot;>Personal Information</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Register for an account or use our services</li>
                <li>Contact us through our website or email</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Request a quote or consultation</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>

              <h3 className=&quot;text-2xl font-semibold text-gray-800 mb-4&quot;>Automatically Collected Information</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device identifiers</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <Eye className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                How We Use Your Information
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We use the information we collect for various purposes, including:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and delivering products</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <UserCheck className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Information Sharing and Disclosure
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>With trusted service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <Lock className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Data Security
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage and backup systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <Shield className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Your Rights and Choices
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className=&quot;list-disc list-inside text-gray-600 mb-6 space-y-2&quot;>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Cookies and Tracking Technologies</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Third-Party Links</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Children&apos;s Privacy */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Children&apos;s Privacy</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6&quot;>Changes to This Privacy Policy</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            {/* Contact Information */}
            <div className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-6 flex items-center&quot;>
                <FileText className=&quot;w-8 h-8 mr-3 text-blue-600&quot; />
                Contact Us
              </h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className=&quot;bg-gray-50 rounded-lg p-6&quot;>
                <p className=&quot;text-gray-700 mb-2&quot;><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p className=&quot;text-gray-700 mb-2&quot;><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p className=&quot;text-gray-700 mb-2&quot;><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Questions About Your Privacy?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            We&apos;re here to help. Contact us if you have any questions about how we handle your personal information.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Contact Us
            </Link>
            <a href=&quot;/contact&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;