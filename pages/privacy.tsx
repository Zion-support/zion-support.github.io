import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta
          name='description'
          content="Zion Tech Group's privacy policy - learn how we collect, use, and protect your personal information."
        />
        <meta property='og:title' content='Privacy Policy | Zion Tech Group' />
        <meta
          property='og:description'
          content="Zion Tech Group's privacy policy - learn how we collect, use, and protect your personal information."
        />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        <main className='container mx-auto px-6 py-12'>
          <div className='max-w-4xl mx-auto'>
            <nav className='mb-8'>
              <Link
                href='/'
                className='text-cyan-400 hover:text-cyan-300 transition-colors'
              >
                ← Back to Home
              </Link>
            </nav>

            <header className='mb-12'>
              <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'>
                Privacy Policy
              </h1>
              <p className='text-lg text-white/80'>
                Last updated: January 17, 2025
              </p>
            </header>

            <article className='prose prose-invert prose-lg max-w-none'>
              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Introduction
                </h2>
                <p className='text-white/90 mb-4'>
                  Zion Tech Group (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website, use
                  our services, or interact with our autonomous technology
                  systems.
                </p>
                <p className='text-white/80'>
                  By using our services, you agree to the collection and use of
                  information in accordance with this policy.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Information We Collect
                </h2>

                <h3 className='text-xl font-semibold mb-3 text-cyan-400'>
                  Personal Information
                </h3>
                <p className='text-white/90 mb-4'>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className='space-y-2 text-white/80 mb-6'>
                  <li>• Contact us through our website forms</li>
                  <li>• Subscribe to our newsletter or blog</li>
                  <li>• Request information about our services</li>
                  <li>• Apply for employment opportunities</li>
                  <li>• Participate in surveys or feedback programs</li>
                </ul>

                <p className='text-white/90 mb-4'>
                  This information may include:
                </p>
                <ul className='space-y-2 text-white/80 mb-6'>
                  <li>• Name and contact information (email, phone number)</li>
                  <li>• Company name and job title</li>
                  <li>• Message content and inquiry details</li>
                  <li>• Preferences and interests</li>
                </ul>

                <h3 className='text-xl font-semibold mb-3 text-fuchsia-400'>
                  Automatically Collected Information
                </h3>
                <p className='text-white/90 mb-4'>
                  When you visit our website, we automatically collect certain
                  information about your device and usage:
                </p>
                <ul className='space-y-2 text-white/80 mb-6'>
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Operating system</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Referring website</li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  How We Use Your Information
                </h2>
                <p className='text-white/90 mb-4'>
                  We use the collected information for various purposes:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-cyan-400 mb-2'>
                      Service Provision
                    </h4>
                    <ul className='space-y-1 text-sm text-white/80'>
                      <li>• Respond to your inquiries</li>
                      <li>• Provide requested information</li>
                      <li>• Deliver our services</li>
                      <li>• Process transactions</li>
                    </ul>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-fuchsia-400 mb-2'>
                      Communication
                    </h4>
                    <ul className='space-y-1 text-sm text-white/80'>
                      <li>• Send newsletters and updates</li>
                      <li>• Respond to support requests</li>
                      <li>• Provide important notices</li>
                      <li>• Marketing communications</li>
                    </ul>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-purple-400 mb-2'>
                      Improvement
                    </h4>
                    <ul className='space-y-1 text-sm text-white/80'>
                      <li>• Analyze website usage</li>
                      <li>• Improve our services</li>
                      <li>• Develop new features</li>
                      <li>• Optimize user experience</li>
                    </ul>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-blue-400 mb-2'>
                      Security
                    </h4>
                    <ul className='space-y-1 text-sm text-white/80'>
                      <li>• Protect against fraud</li>
                      <li>• Ensure system security</li>
                      <li>• Comply with legal obligations</li>
                      <li>• Enforce our policies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Information Sharing and Disclosure
                </h2>
                <p className='text-white/90 mb-4'>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <ul className='space-y-2 text-white/80 mb-6'>
                  <li>
                    • <strong>Service Providers:</strong> We may share
                    information with trusted third-party service providers who
                    assist us in operating our website and providing services
                  </li>
                  <li>
                    • <strong>Legal Requirements:</strong> We may disclose
                    information when required by law or to protect our rights
                    and safety
                  </li>
                  <li>
                    • <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets, your information may
                    be transferred
                  </li>
                  <li>
                    • <strong>Consent:</strong> We may share information with
                    your explicit consent
                  </li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Data Security
                </h2>
                <p className='text-white/90 mb-4'>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information:
                </p>
                <div className='bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='font-semibold text-green-400 mb-3'>
                        Technical Measures
                      </h4>
                      <ul className='space-y-2 text-sm text-white/80'>
                        <li>• Encryption in transit and at rest</li>
                        <li>• Secure socket layer (SSL) technology</li>
                        <li>• Regular security assessments</li>
                        <li>• Access controls and authentication</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-semibold text-blue-400 mb-3'>
                        Organizational Measures
                      </h4>
                      <ul className='space-y-2 text-sm text-white/80'>
                        <li>• Employee training on data protection</li>
                        <li>• Limited access to personal information</li>
                        <li>• Regular policy reviews and updates</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Your Rights and Choices
                </h2>
                <p className='text-white/90 mb-4'>
                  You have certain rights regarding your personal information:
                </p>
                <div className='space-y-4'>
                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-cyan-400 mb-2'>
                      Access and Update
                    </h4>
                    <p className='text-white/80 text-sm'>
                      Request access to your personal information and update or
                      correct it if necessary.
                    </p>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-fuchsia-400 mb-2'>
                      Deletion
                    </h4>
                    <p className='text-white/80 text-sm'>
                      Request deletion of your personal information, subject to
                      certain legal obligations.
                    </p>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-purple-400 mb-2'>
                      Opt-out
                    </h4>
                    <p className='text-white/80 text-sm'>
                      Opt-out of marketing communications and certain data
                      processing activities.
                    </p>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 border border-white/20'>
                    <h4 className='font-semibold text-blue-400 mb-2'>
                      Portability
                    </h4>
                    <p className='text-white/80 text-sm'>
                      Request a copy of your personal information in a portable
                      format.
                    </p>
                  </div>
                </div>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Cookies and Tracking Technologies
                </h2>
                <p className='text-white/90 mb-4'>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website:
                </p>
                <ul className='space-y-2 text-white/80 mb-6'>
                  <li>
                    • <strong>Essential Cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    • <strong>Analytics Cookies:</strong> Help us understand how
                    visitors use our website
                  </li>
                  <li>
                    • <strong>Marketing Cookies:</strong> Used for targeted
                    advertising and content
                  </li>
                  <li>
                    • <strong>Preference Cookies:</strong> Remember your
                    settings and preferences
                  </li>
                </ul>
                <p className='text-white/80'>
                  You can control cookie settings through your browser
                  preferences. However, disabling certain cookies may affect
                  website functionality.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Children&apos;s Privacy
                </h2>
                <p className='text-white/90 mb-4'>
                  Our services are not intended for children under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If you believe we have collected such
                  information, please contact us immediately.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  International Data Transfers
                </h2>
                <p className='text-white/90 mb-4'>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and implement
                  appropriate safeguards.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Changes to This Policy
                </h2>
                <p className='text-white/90 mb-4'>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by:
                </p>
                <ul className='space-y-2 text-white/80 mb-6'>
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending email notifications to registered users</li>
                  <li>• Displaying prominent notices on our website</li>
                </ul>
                <p className='text-white/80'>
                  Your continued use of our services after such changes
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-white'>
                  Contact Us
                </h2>
                <p className='text-white/90 mb-4'>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className='bg-white/10 rounded-lg p-6 border border-white/20'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='font-semibold text-cyan-400 mb-3'>
                        Contact Information
                      </h4>
                      <div className='space-y-2 text-white/80'>
                        <p>
                          <strong>Email:</strong> privacy@ziontech.group
                        </p>
                        <p>
                          <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                        <p>
                          <strong>Address:</strong> Innovation District, Tech
                          Valley, CA 94000
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className='font-semibold text-fuchsia-400 mb-3'>
                        Data Protection Officer
                      </h4>
                      <div className='space-y-2 text-white/80'>
                        <p>
                          <strong>Email:</strong> dpo@ziontech.group
                        </p>
                        <p>
                          <strong>Response Time:</strong> Within 48 hours
                        </p>
                        <p>
                          <strong>Languages:</strong> English, Spanish
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            <div className='mt-12 text-center'>
              <Link
                href='/contact'
                className='bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300'
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">How We Use Your Information</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you relevant updates and newsletters</li>
                  <li>Analyze and improve our website performance</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Information Sharing</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Data Security</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Your Rights</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">You have the right to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cookies and Tracking</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-sm mt-4">You can control cookie settings through your browser preferences.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Contact Us</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong>Email:</strong> privacy@zion.tech<br/>
                    <strong>Address:</strong> Zion Tech Group, Global Operations<br/>
                    <strong>Response Time:</strong> We aim to respond within 48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-white/50">
              <p>This privacy policy is effective as of January 17, 2025 and will remain in effect except with respect to any changes in its provisions in the future.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
