import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Shield } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    { title: 'Revenue AI Copilot', description: 'Multi-agent copilots for Sales and CS with guardrails and analytics.', icon: Brain, pricing: 'From $8k/mo', href: '/contact', color: 'from-blue-600 to-purple-600' },
    { title: 'Cloud FinOps Toolkit', description: 'Automated cost governance, rightsizing and savings plans.', icon: Cloud, pricing: 'From $3k/mo', href: '/contact', color: 'from-emerald-600 to-cyan-600' },
    { title: 'SOC-as-a-Service', description: '24/7 managed detection, response and compliance.', icon: Shield, pricing: 'From $3k/mo', href: '/contact', color: 'from-indigo-600 to-fuchsia-600' },
  ];

  return (
    <>
      <Head>
        <title>Our Products - Zion Tech Group</title>
      </Head>
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg max-w-2xl mx-auto">Innovative platforms to accelerate your roadmap.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className={`h-28 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                <product.icon className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-blue-600 font-semibold mb-4">{product.pricing}</p>
                <div className="flex gap-3">
                  <Link href={product.href}><span className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center">Learn More</span></Link>
                  <Link href="/contact"><span className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold text-center">Get Demo</span></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;

