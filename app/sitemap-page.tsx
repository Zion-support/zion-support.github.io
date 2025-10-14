import React from 'react';

interface SitemapPageProps {
  className?: string;
}

export default function SitemapPage({ className = '' }: SitemapPageProps) {
  return (
    <div className={`min-h-screen bg-gray-900 text-white py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <p className="text-gray-300 text-lg mb-8">
          Find all our pages and services in one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Main Pages</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/ai-services" className="hover:text-white">AI Services</a></li>
              <li><a href="/ai-marketing" className="hover:text-white">AI Marketing</a></li>
              <li><a href="/ai-automation" className="hover:text-white">AI Automation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/it-services" className="hover:text-white">IT Services</a></li>
              <li><a href="/cloud-services" className="hover:text-white">Cloud Services</a></li>
              <li><a href="/cybersecurity" className="hover:text-white">Cybersecurity</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}