import React from 'react'
import Head from 'next/head'

const quickLinks = [
  { title: 'API Documentation', href: '/docs/api' },
  { title: 'Video Tutorials', href: '/tutorials' },
  { title: 'Download Resources', href: '/downloads' },
  { title: 'Community Forum', href: '/community' }
]

const faqs = [
  { question: 'How do I get started with your AI services?', answer: 'Create an account and start a free trial to explore our AI capabilities.' },
  { question: 'What programming languages do you support?', answer: 'We support Python, JavaScript, Java, C#, Go, and more.' },
  { question: 'How secure is my data?', answer: 'We use encryption, follow SOC 2 and GDPR, and apply strict access controls.' }
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Help Center - Zion Tech Group</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Help Center</h1>
        <p className="text-gray-600 mb-10">Find answers, guides, and support.</p>

        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="font-medium">{link.title}</div>
              <div className="text-sm text-gray-500">{link.href}</div>
            </a>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="font-medium mb-1">{f.question}</div>
              <div className="text-gray-600 text-sm">{f.answer}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}