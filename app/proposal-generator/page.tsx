'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import ProposalDocument from '../components/ProposalDocument';
import { servicesData } from '../data/servicesData';

export default function ProposalGeneratorPage() {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState<'monthly' | 'annual'>('monthly');
  const [selectedServices, setSelectedServices] = useState<
    Array<{ title: string; tier: 'basic' | 'pro' | 'enterprise'; price: number; frequency: 'monthly' | 'annual'; }>
  >([]);

  // Build lookup: title → { basic, pro, enterprise } prices (as numbers)
  const priceMap = useMemo(() => {
    const map: Record<string, Record<string, number>> = {};
    const all = servicesData.allServices;
    for (const svc of all) {
      map[svc.title] = {
        basic: Number(svc.pricing.basic),
        pro: Number(svc.pricing.pro),
        enterprise: Number(svc.pricing.enterprise),
      };
    }
    return map;
  }, []);

  const toggleService = useCallback((title: string) => {
    setSelectedServices(prev => {
      const exists = prev.find(s => s.title === title);
      if (exists) {
        return prev.filter(s => s.title !== title);
      }
      // Default to 'basic' tier price
      const price = priceMap[title]?.basic ?? 299;
      return [...prev, { title, tier: 'basic', price, frequency }];
    });
  }, [priceMap, frequency]);

  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const discountPercent = frequency === 'annual' ? 20 : 0;
  const total = subtotal * (1 - discountPercent / 100);

  const proposalData = useMemo(() => ({
    companyName,
    contactName,
    email,
    selectedServices,
    discountPercent,
    startDate: frequency === 'annual' ? 'Annual Billing' : 'Monthly Billing',
  }), [companyName, contactName, email, selectedServices, discountPercent, frequency]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Free Proposal Generator
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Create Your Custom Quote
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select any combination of our AI & IT services. Instantly generate a professional, branded proposal PDF to share with your team.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Service Selection */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Your Details
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2 mt-8">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Billing Frequency
              </h2>
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 px-4 border rounded-lg font-medium transition ${
                    frequency === 'monthly'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Monthly (+0%)
                </button>
                <button
                  onClick={() => setFrequency('annual')}
                  className={`flex-1 py-2 px-4 border rounded-lg font-medium transition ${
                    frequency === 'annual'
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Annual (20% off)
                </button>
              </div>
            </div>

            {/* Service grid */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Select Services
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {servicesData.allServices.map(svc => {
                  const isSelected = selectedServices.some(s => s.title === svc.title);
                  const price = priceMap[svc.title]?.basic ?? 299;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => toggleService(svc.title)}
                      className={`p-3 border rounded-lg text-left transition relative ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-blue-600" />
                      )}
                      <div className="text-2xl mb-1">{svc.icon}</div>
                      <div className="font-medium text-gray-900 text-sm leading-tight line-clamp-2">
                        {svc.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        ${price.toLocaleString()}/{frequency === 'annual' ? 'yr' : 'mo'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Preview */}
          <div className="md:sticky md:top-8 h-fit">
            <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Proposal Preview</h2>
                <span className="text-sm text-gray-500">
                  {selectedServices.length} service{selectedServices.length !== 1 ? 's' : ''} selected
                </span>
              </div>

              {/* Mini summary */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 mb-2">
                  <strong>{companyName || 'Your Company'}</strong>
                </div>
                {selectedServices.length === 0 ? (
                  <p className="text-sm text-gray-500 italic">
                    Select at least one service to generate proposal.
                  </p>
                ) : (
                  <div className="space-y-1">
                    {selectedServices.map(s => (
                      <div key={s.title} className="flex justify-between text-sm">
                        <span>{s.title}</span>
                        <span className="font-medium">${s.price.toLocaleString()}/{frequency === 'annual' ? 'yr' : 'mo'}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-sm mb-1 text-green-600">
                    <span>Annual discount (20%)</span>
                    <span>-${Math.round(subtotal * 0.20).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold mt-3 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toLocaleString()}/{frequency === 'annual' ? 'yr' : 'mo'}</span>
                </div>
                {frequency === 'annual' && (
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    Save ${Math.round(subtotal * 0.20).toLocaleString()} per year
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <PDFDownloadLink
                  document={<ProposalDocument data={proposalData} />}
                  fileName="zion-proposal.pdf"
                >
                  {({ loading }) => (
                    <button
                      disabled={selectedServices.length === 0 || loading}
                      className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition ${
                        selectedServices.length === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {loading ? (
                        <RefreshCw className="w-5 h-5 animate-spin" />
                      ) : (
                        <Download className="w-5 h-5" />
                      )}
                      {loading ? 'Generating PDF…' : 'Download Proposal PDF'}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-blue-900 text-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">Ready to get started?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Share this proposal with your team or contact us directly.
              </p>
              <div className="text-sm space-y-1">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br/>Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
