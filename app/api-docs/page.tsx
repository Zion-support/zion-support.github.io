import React, { useState } from 'react';
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-af41
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

=======
import { Link } from 'react-router-dom';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };
<<<<<<< HEAD
enhance-and-expand-ziontechgroup-com-services-and-site-caae
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-b494
const ApiDocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Api-docs</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under construction. Please check back soon for updates.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;
