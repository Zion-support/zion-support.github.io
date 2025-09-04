import React from 'react';
import { SEO } from '../../components/SEO';
import { ShoppingCart, CheckCircle, BarChart3, Link as LinkIcon, Zap } from 'lucide-react';

export default function AffiliateTrackingPlatform() {
  return (
    <>
      <SEO title="Affiliate Tracking Platform" description="Micro SaaS for affiliate tracking, attribution, payouts, and fraud detection." />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white mb-4">
              <ShoppingCart className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Affiliate Tracking Platform</h1>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">Easy attribution, link management, payouts, fraud checks, and real-time analytics. Deployable as a micro SaaS with transparent pricing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[{title:'Attribution & Links',desc:'UTM, deep links, coupons, first/last touch',icon:LinkIcon},{title:'Analytics & Dashboards',desc:'Real-time KPIs, cohort views, ROI',icon:BarChart3},{title:'Automation',desc:'Payouts, invoices, fraud rules',icon:Zap}].map(({title,desc,icon:Icon})=> (
              <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <Icon className="w-6 h-6 text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Included</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Partner portal and link builder',
                  'Pixel, webhooks, and API integrations',
                  'Fraud heuristics and IP/device checks',
                  'Automated monthly payouts and invoices'
                ].map((item)=> (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li><strong>Starter</strong>: $99/month – up to 5k clicks</li>
                <li><strong>Growth</strong>: $299/month – up to 50k clicks</li>
                <li><strong>Enterprise</strong>: custom – SSO, SLAs</li>
              </ul>
              <div className="space-y-2">
                <a href="/contact" className="inline-flex justify-center w-full px-4 py-2 rounded-lg text-white bg-orange-600 hover:bg-orange-700">Start Free Trial</a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-orange-200 text-orange-700 hover:bg-white">Email: kleber@ziontechgroup.com</a>
                <a href="tel:+13024640950" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-orange-200 text-orange-700 hover:bg-white">Call: +1 302 464 0950</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

