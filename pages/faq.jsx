import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive IT and AI services including cloud infrastructure, cybersecurity, DevOps automation, data analytics, machine learning solutions, and technology consulting. Our services are designed to help businesses transform digitally and scale efficiently."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the project."
    },
    {
      id: 3,
      question: "Do you provide 24/7 support?",
      answer: "Yes, we offer 24/7 monitoring and support for all our managed services. Our team is available around the clock to ensure your systems are running smoothly and to address any issues that may arise."
    },
    {
      id: 4,
      question: "What industries do you serve?",
      answer: "We serve clients across various industries including healthcare, finance, e-commerce, manufacturing, education, and government sectors. Our solutions are tailored to meet the specific needs and compliance requirements of each industry."
    },
    {
      id: 5,
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security measures including encryption, multi-factor authentication, regular security audits, and compliance with frameworks like SOC 2, HIPAA, and GDPR. Our team follows best practices for data protection and privacy."
    },
    {
      id: 6,
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migrations to AWS, Azure, and Google Cloud Platform. Our team handles the entire process from assessment and planning to migration execution and optimization, ensuring minimal downtime and maximum efficiency."
    },
    {
      id: 7,
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based, retainer, and managed service agreements. Pricing depends on the scope of work, timeline, and level of support required. We provide transparent quotes with no hidden fees."
    },
    {
      id: 8,
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. We understand that small businesses have unique needs and budget constraints, so we offer scalable solutions that grow with your business."
    },
    {
      id: 9,
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern technologies including AI/ML frameworks, cloud platforms (AWS, Azure, GCP), containerization (Docker, Kubernetes), CI/CD pipelines, monitoring tools, and various programming languages and frameworks."
    },
    {
      id: 10,
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us through our contact form or schedule a consultation. We'll discuss your needs, assess your current infrastructure, and provide a customized proposal with recommendations and next steps."
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>FAQ — Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's IT and AI services, pricing, support, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white hover:text-purple-300 transition-colors">About</Link>
              <Link href="/services" className="text-white hover:text-purple-300 transition-colors">Services</Link>
              <Link href="/blog" className="text-white hover:text-purple-300 transition-colors">Blog</Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help transform your business.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/20 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                  <div className={`text-purple-400 text-2xl transition-transform duration-200 ${openFAQ === faq.id ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Get in touch with us and we&apos;ll provide personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                  Contact Us
                </Link>
                <Link href="/services" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}