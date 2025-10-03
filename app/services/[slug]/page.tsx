import React from 'react';
import { Link } from 'react-router-dom';
import { getServiceBySlug } from '../data';

type Params = { params: { slug: string } };

export default function ServiceDetailPage({ params }: Params) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-2">Service not found</h1>
        <p className="text-gray-600 mb-6">We couldn't find this service. Browse all services instead.</p>
        <Link to="/services" className="text-blue-600 hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
          <p className="text-gray-700 mb-6">{service.headline}</p>
          <p className="text-gray-600 mb-8">{service.description}</p>

          <h2 className="text-xl font-semibold mb-3">Capabilities</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            {service.features.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-3">Business Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            {service.benefits.map(b => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-3">References</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            {service.externalLinks.map(l => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <h3 className="font-semibold mb-4">Pricing</h3>
              <div className="space-y-4">
                {service.pricing.map(p => (
                  <div key={p.plan} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-baseline justify-between">
                      <div className="font-medium">{p.plan}</div>
                      <div className="text-gray-900 font-semibold">
                        {typeof p.pricePerMonthUsd === 'number' ? `$${p.pricePerMonthUsd}/mo` : 'Custom'}
                      </div>
                    </div>
                    <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
                      {p.includes.map(i => <li key={i}>{i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <a href="tel:+13024640950" className="block w-full text-center bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700">Call +1 302 464 0950</a>
                <a href="mailto:kleber@ziontechgroup.com" className="block w-full text-center mt-2 bg-gray-900 text-white rounded-lg py-2 font-medium hover:bg-black">Email kleber@ziontechgroup.com</a>
              </div>
              <div className="mt-3 text-xs text-gray-500 text-center">364 E Main St STE 1008, Middletown DE 19709</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <div className="font-medium mb-2">Explore more</div>
              <ul className="text-sm space-y-2">
                <li><Link to="/services" className="text-blue-600 hover:underline">All Services</Link></li>
                <li><Link to="/case-studies" className="text-blue-600 hover:underline">Case Studies</Link></li>
                <li><Link to="/blog" className="text-blue-600 hover:underline">Blog & Insights</Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
