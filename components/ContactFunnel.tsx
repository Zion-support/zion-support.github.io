'use client';
import { useState } from 'react';
export default function ContactFunnel() {
  const [step, setStep] = useState(0);
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-950 to-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🚀 Get Started Today</h2>
        <p className="text-gray-300 mb-6">Contact us for a custom quote on any of our 2000+ services</p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {step === 0 && (
            <div className="space-y-4">
              <input placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea placeholder="What do you need?" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button onClick={() => setStep(1)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium">Send Request →</button>
            </div>
          )}
          {step === 1 && (
            <div>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-gray-300">We will respond within 24 hours.</p>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-400 mt-4">📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </section>
  );
}
