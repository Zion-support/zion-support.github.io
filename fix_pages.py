import os

# Fix contact page
contact = """'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13026009898" className="text-indigo-600">(302) 600-9898</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-600">kleber@ziontechgroup.com</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}"""

with open('/workspace/app/contact/page.tsx', 'w') as f:
    f.write(contact)

# Fix enterprise page
enterprise = """'use client';
import React from 'react';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Enterprise Solutions</h1>
        <section className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 mb-8 text-center">
            Scale your business with our enterprise-grade AI solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p>Solutions that grow with your business</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p>Enterprise-grade security and compliance</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p>24/7 dedicated enterprise support</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}"""

with open('/workspace/app/enterprise/page.tsx', 'w') as f:
    f.write(enterprise)

# Fix not-found page
notfound = """'use client';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <div className="text-6xl mb-8">🔍</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}"""

with open('/workspace/app/not-found.tsx', 'w') as f:
    f.write(notfound)

print("Fixed all pages")
