import React from 'react';
import { Shield, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Activity, BarChart3 } from 'lucide-react';
;
export default function AIInsurance() {};
  return null;
}
    { name: 'Starter', price: '$399/mo', details: ['Basic automation', 'Email support', 'Up to 1,000 policies'] },;
    { name: 'Professional', price: '$999/mo', details: ['Advanced features', 'Priority support', 'Up to 10,000 policies'] },;
    { name: 'Enterprise', price: '$2,999/mo', details: ['Full suite', '24/7 support', 'Unlimited policies', 'Custom integration'] }
  ];

  return (;
    <div className="min-h-screen bg-white">;
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 py-20 text-center">;
        <div className="max-w-5xl mx-auto px-6">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
            <Shield className="w-4 h-4 mr-2" />;
            AI-Powered Insurance Intelligence;
          </div>;
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Insurance Platform</h1>;
          <p className="text-green-100 text-xl">Transform your insurance operations with AI-powered automation that streamlines processes, reduces costs, and enhances customer experience.</p>;
        </div>;
      </section>;

      <section className="py-16 max-w-6xl mx-auto px-6">;
        <div className="grid md:grid-cols-2 gap-10">;
          <div>;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Insurance Features</h2>;
            <ul className="space-y-3">;
              {};
                <li key={f} className="flex items-start">;
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                  <span className="text-gray-700">{f}</span>;
                </li>;
              ))}
            </ul>;
            <div className="mt-6 text-sm text-gray-600">;
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.;
            </div>;
          </div>;
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">;
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>;
            <div className="grid md:grid-cols-3 gap-4">;
              {};
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors">;
                  <div className="text-lg font-semibold mb-1">{t.name}</div>;
                  <div className="text-2xl font-bold text-green-600 mb-2">{t.price}</div>;
                  <ul className="text-sm text-gray-600 space-y-1">;
                    {};
                      <li key={d}>{d}</li>;
                    ))}
                  </ul>;
                </div>;
              ))}
            </div>;
            <div className="mt-6 flex flex-wrap gap-3">;
              <a href="/pricing" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">;
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />;
              </a>;
              <a href="https://calendly.com/zion-tech-group" className="px-5 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center">;
                Schedule Demo <Phone className="w-4 h-4 ml-2" />;
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}