<<<<<<< HEAD
'use client';
import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Intelligent process automation with AI-powered decision making and exception handling.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">AI-Powered Automation</h2>
            <p className="text-gray-300 mb-6">
              Transform your business processes with intelligent automation that learns and adapts to your needs.
            </p>
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Service Coming Soon
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              This service is currently under development
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              We're working hard to bring you this amazing service. Contact us to learn more about our development timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
>>>>>>> origin/main
