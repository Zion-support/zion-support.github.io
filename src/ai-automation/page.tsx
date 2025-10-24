import React from 'react';
import { Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Automation Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Automate your business processes with AI-powered solutions
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Get Started
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
