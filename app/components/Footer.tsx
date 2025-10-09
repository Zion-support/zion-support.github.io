import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">⚡</span>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of AI-powered enterprise solutions, digital transformation, and cutting-edge technology services.
            </p>
            <div className="text-sm text-gray-400">
              <p>Phone: (302) 600-9898</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Middletown, DE 19709</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
              <li><Link href="/quantum-computing" className="text-gray-300 hover:text-white">Quantum Computing</Link></li>
              <li><Link href="/autonomous-systems" className="text-gray-300 hover:text-white">Autonomous Systems</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}