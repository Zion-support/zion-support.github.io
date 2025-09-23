import React from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield } from 'lucide-react'

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Enterprise AI, cloud, and micro‑SaaS solutions.'
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Advanced AI & Technology Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your business with cutting-edge AI, cloud infrastructure, and secure platforms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center">
              Explore Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center">
              Get Started
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-300 text-sm mb-3">Enterprise automation, agents, and decision intelligence.</p>
            <Link href="/services/ai" className="text-blue-300 text-sm inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Platform</h3>
            <p className="text-gray-300 text-sm mb-3">Scalable infrastructure, migration, and DevOps automation.</p>
            <Link href="/services/cloud" className="text-green-300 text-sm inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-300 text-sm mb-3">Zero-trust, monitoring, and incident response for AI systems.</p>
            <Link href="/services/security" className="text-red-300 text-sm inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></Link>
          </div>
        </section>
      </main>
    </div>
  )
}

