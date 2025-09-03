import React from 'react';
import Layout from '../components/Layout';

export default function RequestQuote() {
  return (
    <Layout title="Request a Quote | Zion Tech Group">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Request a Quote</h1>
        <p className="text-gray-700 mb-6">Tell us about your project. We respond within 1 business day.</p>
        <div className="space-y-2 text-sm text-gray-600 mb-6">
          <div><strong>Mobile:</strong> +1 302 464 0950</div>
          <div><strong>Email:</strong> kleber@ziontechgroup.com</div>
          <div><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
        <form className="space-y-4">
          <input className="w-full border rounded px-4 py-2" placeholder="Name" />
          <input className="w-full border rounded px-4 py-2" placeholder="Email" type="email" />
          <textarea className="w-full border rounded px-4 py-2" placeholder="Project details" rows={6} />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
        </form>
      </section>
    </Layout>
  );
}

