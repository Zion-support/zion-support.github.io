"use client";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team to discuss your AI and IT needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}