import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '../../../data/servicesData';
import type { Service } from '../../../data/servicesData';
import { FileText, CheckCircle, ArrowRight, Sparkles, DollarSign } from 'lucide-react';

// Generate static params for all services at build time
export async function generateStaticParams() {
  const params = [];
  const all = servicesData.allServices;
  for (const svc of all) {
    const category = svc.category;
    const slug = svc.id;
    params.push({ category, slug });
  }
  return params;
}

// Resolve service by category + slug
function getService(category: string, slug: string): Service | undefined {
  const all = servicesData.allServices;
  return all.find(s => s.category === category && s.id === slug);
}

// Related services: same category, exclude current, max 3
function getRelated(svc: Service) {
  return servicesData.allServices
    .filter(s => s.id !== svc.id && s.category === svc.category)
    .slice(0, 3);
}

// Dynamic metadata per service
export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const svc = getService(category, slug);
  if (!svc) return { title: 'Service Not Found' };

  const title = `${svc.title} | ZionTechGroup AI & IT Services`;
  const description = svc.description;
  const url = `https://ziontechgroup.com/services/${category}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'}/og-service-${slug}.png`], // fallback
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const svc = getService(category, slug);
  if (!svc) notFound();

  const related = getRelated(svc);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.description,
    provider: {
      '@type': 'Organization',
      name: 'ZionTechGroup',
      url: 'https://ziontechgroup.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        email: 'kleber@ziontechgroup.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '364 E Main St STE 1008',
          addressLocality: 'Middletown',
          addressRegion: 'DE',
          postalCode: '19709',
          addressCountry: 'US',
        },
      },
    },
    serviceOutput: 'AI & IT solutions',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: (Number(svc.pricing.basic) * 12).toString(),
      highPrice: (Number(svc.pricing.enterprise) * 12).toString(),
      priceCurrency: 'USD',
      offerCount: 1,
    },
    areaServed: 'Worldwide',
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-indigo-600">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-indigo-600">Services</Link>
              </li>
              <li>/</li>
              <li>
                <span className="capitalize text-gray-900">{category}</span>
              </li>
              <li>/</li>
              <li>
                <span className="text-gray-900 font-medium">{svc.title}</span>
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{svc.icon}</span>
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium uppercase tracking-wide mb-2">
                  {category}
                </span>
                <h1 className="text-4xl font-bold text-gray-900">{svc.title}</h1>
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{svc.description}</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <div className="text-gray-500 text-sm font-medium mb-2">Standard</div>
              <div className="text-3xl font-bold text-indigo-700 mb-1">{svc.pricing.basic}<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Core feature set</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Email support</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 99.5% SLA</li>
              </ul>
            </div>
            <div className="border-2 border-indigo-500 rounded-xl p-6 bg-gradient-to-b from-indigo-50 to-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">Most Popular</div>
              <div className="text-gray-500 text-sm font-medium mb-2">Premium</div>
              <div className="text-3xl font-bold text-indigo-700 mb-1">{svc.pricing.pro}<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> All Standard features</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Priority support</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 99.9% SLA</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Advanced integrations</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <div className="text-gray-500 text-sm font-medium mb-2">Enterprise</div>
              <div className="text-3xl font-bold text-indigo-700 mb-1">{svc.pricing.enterprise}<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> All Premium features</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Dedicated account manager</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom SLA</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> On-premise deployment</li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {svc.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {svc.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-green-100 rounded-lg bg-green-50">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA + Related */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-indigo-100 mb-6 max-w-xl">
                  Generate a custom proposal with detailed pricing, SLA terms, and next steps — tailored to your needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/proposal-generator?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition"
                  >
                    <FileText className="w-4 h-4" />
                    Generate Proposal
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition"
                  >
                    📞 +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
              <div className="space-y-3">
                {related.map(r => (
                  <Link
                    key={r.id}
                    href={`/services/${r.category}/${r.id}`}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition group"
                  >
                    <span className="text-2xl">{r.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 group-hover:text-indigo-700 text-sm">{r.title}</div>
                      <div className="text-xs text-gray-500">From {r.pricing.basic}/mo</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p className="mb-2">
              Need help choosing? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-600 font-medium">kleber@ziontechgroup.com</a> or <a href="tel:+13024640950" className="text-indigo-600 font-medium">+1 302 464 0950</a>.
            </p>
            <p className="text-sm">364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </>
  );
}
