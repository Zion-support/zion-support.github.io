import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">We typically respond within one business day.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Direct</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Mobile: +1 302 464 0950</li>
              <li>Email: <a href="mailto:kleber@ziontechgroup.com" className="underline text-blue-700 hover:text-blue-900">kleber@ziontechgroup.com</a></li>
              <li>Address: 364 E Main St STE 1008 Middletown DE 19709</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Request a quote</h2>
            <form className="mt-3 grid gap-4">
              <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Your name" />
              <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Email" type="email" />
              <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Company (optional)" />
              <textarea className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Tell us about your project" rows={4} />
              <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="button">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;