import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Code, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function AdditionalServices() {
  const title = 'Expanded Services Catalog — Zion Tech Group';
  const description = 'New micro SaaS, IT, and AI solutions added to our production-ready catalog with transparent pricing and fast delivery.';

  const sections = [
    {
      id: 'micro-saas',
      title: 'Micro SaaS — New Products',
      icon: Code,
      color: 'orange',
      items: [
        {
          name: 'Cloud Cost Guard (FinOps Assistant)',
          blurb: 'Automated cloud cost anomaly detection, budget alerts, rightsizing, and savings recommendations.',
          price: '$299 - $1,499/month',
          eta: '1-2 weeks',
          bullets: [
            'Anomaly detection across AWS/Azure/GCP bills',
            'Automated rightsizing and idle resource cleanup',
            'Forecasting and budget guardrails with alerts',
            'Exec-ready savings reports and benchmarks'
          ],
          link: '/micro-saas'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Services — New Capabilities',
      icon: Brain,
      color: 'blue',
      items: [
        {
          name: 'RAG Platform-in-a-Box',
          blurb: 'End-to-end retrieval augmented generation stack with governance and analytics.',
          price: '$4,000 - $18,000/month',
          eta: '4-8 weeks',
          bullets: [
            'Connectors for docs, tickets, CRM, and data lakes',
            'Chunking/embedding strategy and vector stores',
            'Citations, feedback loops, and analytics',
            'PII scrubbers and policy guardrails'
          ],
          link: '/ai-services'
        }
      ]
    }
  ];

  const phoneHref = 'tel:+13024640950';
  const emailHref = 'mailto:kleber@ziontechgroup.com';

  return (
    <PageTransition>
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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              New Services We Now Offer
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              We regularly add pragmatic, production-grade services to maximize ROI. 
              Explore our latest micro SaaS, AI, and IT solutions below, then contact us to get a tailored proposal.
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <a href={phoneHref} className="text-blue-700 hover:text-blue-600 font-semibold">
                +1 302 464 0950
              </a>
              <span className="text-gray-400">•</span>
              <a href={emailHref} className="text-blue-700 hover:text-blue-600 font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {sections.map((section) => (
              <div key={section.id} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${section.color}-600`}>
                    <section.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="group relative rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.blurb}</p>
                      <ul className="space-y-2 mb-4">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className={`h-4 w-4 text-${section.color}-600`} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-700">
                          <span className="font-semibold">{item.price}</span>
                          <span className="text-gray-400 ml-2">•</span>
                          <span className="ml-2">{item.eta} delivery</span>
                        </div>
                        <Link href={item.link} className={`inline-flex items-center font-semibold text-${section.color}-600 hover:text-${section.color}-500`}>
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}