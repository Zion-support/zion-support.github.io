import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-700 mb-6">We respond within 1 business day.</p>
        <div className="space-y-2">
          <p className="text-gray-800"><span className="font-semibold">Mobile:</span> +1 302 464 0950</p>
          <p className="text-gray-800"><span className="font-semibold">E-mail:</span> <a className="text-blue-600 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
          <p className="text-gray-800"><span className="font-semibold">Address:</span> 364 E Main St STE 1008 Middletown DE 19709</p>
          <p className="text-gray-800"><span className="font-semibold">Website:</span> <a className="text-blue-600 underline" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a></p>
        </div>
      </main>
    </div>
  );
};

export default Contact;