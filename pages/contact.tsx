import type { NextPage } from 'next';
import Head from 'next/head';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Call, email, or visit our office." />
      </Head>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">We typically reply within one business day.</p>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a className="text-gray-800 hover:text-blue-700" href="tel:+13024640950">+1 302 464 0950</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a className="text-gray-800 hover:text-blue-700" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-800">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

