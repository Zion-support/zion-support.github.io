'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

export default function Page() {
  const products = [
    {
      name: 'Zion AI Studio',
      description: 'One-click AI deployment for business teams. Deploy pre-trained AI models for content generation, data analysis, and customer service.',
      price: 'From $299/month',
      features: ['Pre-built integrations', 'Custom model training', '40+ AI models'],
    },
    {
      name: 'SecureVault Enterprise',
      description: 'Zero-trust security platform combining PAM, threat detection, and compliance automation for comprehensive protection.',
      price: 'From $499/month',
      features: ['Privileged access management', 'Real-time threat intel', 'Compliance reporting'],
    },
    {
      name: 'CloudPilot',
      description: 'Multi-cloud infrastructure management. Deploy and manage applications across AWS, Azure, and GCP from a single dashboard.',
      price: 'From $199/month',
      features: ['Infrastructure as code', 'Cost optimization', 'Automated failover'],
    },
    {
      name: 'DataFlow Engine',
      description: 'ETL/ELT automation platform for transforming and moving data between systems with no-code pipelines.',
      price: 'From $149/month',
      features: ['200+ connectors', 'Data quality monitoring', 'Real-time sync'],
    },
    {
      name: 'Automation Hub',
      description: 'Agentic workflow orchestration. Create autonomous workflows that adapt and optimize themselves using AI.',
      price: 'From $99/month',
      features: ['Visual workflow builder', 'AI decision making', '24/7 automation'],
    },
  ]

  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI and IT products: Zion AI Studio, SecureVault, CloudPilot, DataFlow Engine, Automation Hub." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Enterprise-grade solutions designed to accelerate your digital transformation.
          </p>
          
          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
                  <span className="text-purple-400 font-semibold">{product.price}</span>
                </div>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
              Get a Custom Quote
            </Link>
          </div>

          <Link href="/" className="inline-flex items-center mt-8 text-purple-400 hover:text-purple-300">
            <ArrowRight className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}