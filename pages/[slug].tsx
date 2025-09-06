import React, { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Mail, MapPin, Phone } from 'lucide-react';

// Mock service data
const mockServices = [
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation',
    description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
    tagline: 'Transform your content strategy with AI',
    price: '$299',
    period: '/month',
    features: [
      'Natural Language Processing',
      'SEO Optimization',
      'Multi-language Support',
      'Brand Voice Consistency',
      'Content Templates',
      'Automated Publishing'
    ],
    integrations: [
      'WordPress',
      'Shopify',
      'HubSpot',
      'Mailchimp',
      'Social Media Platforms'
    ]
  }
];

type Service = typeof mockServices[0];

function toSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function getStaticPaths() {
  const paths = mockServices.map((service) => ({
    params: { slug: toSlug(service.id) }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');
  const service = mockServices.find((s) => toSlug(s.id) === incomingSlug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service }
  };
}

export default function ServiceDetailPage({ service }: { service: Service }) {
  const canonical = `https://ziontechgroup.com/${toSlug(service.id)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        <link rel="canonical" href={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              description: service.tagline || service.description,
              url: canonical,
              provider: {
                "@type": "Organization",
                name: "Zion Tech Group",
                url: "https://ziontechgroup.com"
              },
              offers: {
                "@type": "Offer",
                price: (service.price || '').replace(/[^0-9.]/g, ''),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {(service.features || []).slice(0, 12).map((f: string) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
              <h3 className="text-white text-lg font-semibold mb-4">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {(service.integrations || []).slice(0, 12).map((i: string) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{i}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
              <div className="text-3xl font-bold text-white">{service.price} <span className="text-base text-gray-400">{service.period}</span></div>
              <p className="text-gray-400 text-sm mt-1">Transparent pricing with market references</p>
              <div className="mt-4 space-y-3">
                <a href="tel:+13024640950" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <Phone className="w-4 h-4" /> +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <Mail className="w-4 h-4" /> kleber@ziontechgroup.com
                </a>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1" /> 364 E Main St STE 1008 Middletown DE 19709
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}