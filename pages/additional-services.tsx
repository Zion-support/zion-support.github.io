import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

export default function AdditionalServices() {
  const title = 'Additional Services - Zion Tech Group';
  const description = 'Explore our expanded catalog of micro SaaS, AI, and IT solutions. Get fast quotes and tailored proposals for your business needs.';

  const phoneHref = 'tel:+13024640950';
  const emailHref = 'mailto:kleber@ziontechgroup.com';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/additional-services" />
      </Head>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Expanded Catalog</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">New Services We Now Offer</h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              We regularly add pragmatic, production-grade services to maximize ROI. Explore our latest micro SaaS, AI, and IT solutions below, then contact us to get a tailored proposal.
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <a href={phoneHref} className="text-blue-700 hover:text-blue-600 font-semibold">+1 302 464 0950</a>
              <span className="text-gray-400">•</span>
              <a href={emailHref} className="text-blue-700 hover:text-blue-600 font-semibold">kleber@ziontechgroup.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Additional Services</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Custom Development</h3>
                  <p className="text-sm text-gray-600 mb-3">Tailored solutions for your specific business needs</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Custom web applications</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>API development</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Database design</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-700">
                      <span className="font-semibold">Starting at $5,000</span>
                      <span className="text-gray-400 ml-2">•</span>
                      <span className="ml-2">2-4 weeks delivery</span>
                    </div>
                    <Link href="/contact" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-500">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-blue-50 border border-blue-200 p-6">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Fast Quotes</h4>
                <p className="text-blue-800">Most engagements start with a 30–60 minute call and a fixed-price proposal within 48 hours.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Contact</h4>
                <p className="text-blue-800">Phone: <a className="hover:underline" href={phoneHref}>+1 302 464 0950</a><br />Email: <a className="hover:underline" href={emailHref}>kleber@ziontechgroup.com</a></p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Address</h4>
                <p className="text-blue-800">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

