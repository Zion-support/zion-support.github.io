import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
// import { useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPolicy(): React.ReactElement {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  // const { trackClick } = useAnalytics();

  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us such as when you create an account contact us or use our services. This may include your name email address phone number company information and any other information you choose to provide.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide maintain and improve our services communicate with you process transactions and comply with legal obligations. We may also use your information to send you technical notices updates and promotional materials.'
    },
    {
      title: 'Information Sharing and Disclosure',
      content: 'We do not share or sell your personal information to third parties for their marketing purposes without your explicit consent. We may share information with service providers who perform services on our behalf or if required by law.'
    },
    {
      title: 'Data Security',
      content: 'We implement reasonable security measures to protect your information from unauthorized access disclosure alteration and destruction. However no method of transmission over the Internet or electronic storage is 100% secure.'
    },
    {
      title: 'Your Choices',
      content: 'You have the right to access update or delete your personal information. You can also opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions in those communications.'
    },
    {
      title: 'Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy please contact us at privacy@zionapp.com.'
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Priv a c y Pol i c y - Z i o n Ap p</title>
        <meta name="description" content="R e a d Z i o n Ap p's Priv a c y Pol i c y t o underst a n d ho w w e coll e c t us e an d prot e c t y o u r informat i o n." />
        <meta name="viewp o r t" content="wi d t h=dev i c e-wi d t h init i a l-sc a l e=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
          </header>

          <main className="bg-white rounded-2xl shadow-lg p-8">
            {sections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
            <p className="text-sm text-gray-500 mt-8">Last Updated: October 26 2025</p>
          </main>

          <section className="mt-16 text-center">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
              <p className="text-xl mb-6">Contact our privacy team for any concerns or inquiries.</p>
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}