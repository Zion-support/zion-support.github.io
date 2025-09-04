import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-4 text-sm">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Zion Tech Group</h4>
          <p className="text-gray-600">364 E Main St STE 1008 Middletown DE 19709</p>
          <p className="text-gray-600 mt-2">
            <a className="text-blue-700 hover:underline" href="tel:+13024640950">+1 302 464 0950</a>
          </p>
          <p className="text-gray-600">
            <a className="text-blue-700 hover:underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
          <ul className="space-y-1 text-gray-600">
            <li><a className="hover:underline" href="/services">Micro SaaS</a></li>
            <li><a className="hover:underline" href="/solutions">IT Solutions</a></li>
            <li><a className="hover:underline" href="/services#ai">AI Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
          <ul className="space-y-1 text-gray-600">
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/pricing">Pricing</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
          <ul className="space-y-1 text-gray-600">
            <li><a className="hover:underline" href="https://ziontechgroup.com/privacy">Privacy Policy</a></li>
            <li><a className="hover:underline" href="https://ziontechgroup.com/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
          <a className="text-blue-700 hover:underline" href="https://ziontechgroup.com">ziontechgroup.com</a>
        </div>
      </div>
    </footer>
  );
}

