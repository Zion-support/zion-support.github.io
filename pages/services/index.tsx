import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';

const ServicesIndex: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Micro-SaaS, IT, and AI services by Zion Tech Group" />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Productizing delivery with transparent pricing, fast timelines, and proven tech.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesCatalog.map((svc) => (
            <div key={svc.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-sm text-blue-700 font-semibold">{svc.category}</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">{svc.title}</h2>
              <p className="mt-2 text-gray-600">{svc.description}</p>
              <div className="mt-4 text-gray-800">
                <div><span className="font-medium">Starting at:</span> {svc.startingPriceUSD}</div>
                <div><span className="font-medium">Typical timeline:</span> {svc.typicalTimeline}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {svc.references?.map((ref) => (
                  <a key={ref.url} href={ref.url} target="_blank" rel="noopener noreferrer" className="text-sm underline text-blue-700 hover:text-blue-900">
                    {ref.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link href={svc.link} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Learn more
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50">
                  Get a quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesIndex;