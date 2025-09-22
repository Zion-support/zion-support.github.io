import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Writer | Zion Tech Group',
  description: 'Professional AI content writing for all your needs.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Content Writer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional AI content writing for all your needs._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Writing</h3>
            <p className="text-gray-300 mb-4">
              High-quality content that matches professional standards.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Professional Writing.1</li>
              <li>• Professional Writing.2</li>
              <li>• Professional Writing.3</li>
              <li>• Professional Writing.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Multiple Formats</h3>
            <p className="text-gray-300 mb-4">
              Support for various content formats and styles.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Multiple Formats.1</li>
              <li>• Multiple Formats.2</li>
              <li>• Multiple Formats.3</li>
              <li>• Multiple Formats.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Customization</h3>
            <p className="text-gray-300 mb-4">
              Fully customizable content to match your needs.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Customization.1</li>
              <li>• Customization.2</li>
              <li>• Customization.3</li>
              <li>• Customization.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}