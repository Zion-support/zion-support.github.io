import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PricingPage: React.FC = () => {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI, IT & Micro SaaS</title>
        <meta name="description" content="Transparent, flexible pricing for 340+ micro SaaS products, AI services, and IT solutions. Get custom quotes for quantum computing, edge computing, and enterprise solutions." />
        <meta name="keywords" content="pricing, micro SaaS pricing, AI services pricing, IT solutions pricing, quantum computing pricing, edge computing pricing" />
        <link rel="canonical" href={`${contact.site}/pricing`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Flexible pricing for 340+ innovative micro SaaS products, AI services, and IT solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We offer competitive pricing with transparent costs. All prices include setup, training, and ongoing support. 
              Contact us for custom enterprise solutions and volume discounts.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Starter Tier */}
              <div className="bg-slate-900/60 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Starter</h3>
                <div className="text-3xl font-bold mb-2">$99-499<span className="text-lg text-slate-400">/mo</span></div>
                <p className="text-slate-400 mb-6">Perfect for small businesses and startups</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Basic micro SaaS products</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>AI content generation</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Cloud cost optimization</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Email support</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Standard SLA</li>
                </ul>
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors">
                  Get Started
                </Link>
              </div>

              {/* Professional Tier */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Professional</h3>
                <div className="text-3xl font-bold mb-2">$499-1,999<span className="text-lg text-slate-400">/mo</span></div>
                <p className="text-slate-400 mb-6">Ideal for growing businesses and mid-market companies</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Advanced AI services</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Real-time analytics</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Cybersecurity solutions</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Priority support</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>99.9% SLA</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Custom integrations</li>
                </ul>
                <Link href="/contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors">
                  Get Started
                </Link>
              </div>

              {/* Enterprise Tier */}
              <div className="bg-slate-900/60 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Enterprise</h3>
                <div className="text-3xl font-bold mb-2">$1,999+<span className="text-lg text-slate-400">/mo</span></div>
                <p className="text-slate-400 mb-6">For large enterprises and complex requirements</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Quantum computing access</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Edge computing platform</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Zero trust security</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>24/7 dedicated support</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>99.99% SLA</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Custom solutions</li>
                </ul>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Service Categories Pricing */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-400 mb-4">340+ innovative software solutions</p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Cloud Cost Guard: $299-1,499/mo</li>
                  <li>• AI Content Generator: $199-999/mo</li>
                  <li>• Customer Churn Predictor: $299-1,499/mo</li>
                  <li>• API Rate Limiter: $199-1,299/mo</li>
                  <li>• Smart Document Processor: $399-2,499/mo</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-400 mb-4">200+ AI-powered solutions</p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• AI Customer Support: $2,000-8,000 setup</li>
                  <li>• Predictive Analytics: $4,000-20,000 project</li>
                  <li>• Computer Vision: $5,000-25,000 setup</li>
                  <li>• NLP Engine: $3,000-15,000 setup</li>
                  <li>• Fraud Detection: $8,000-40,000 setup</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-green-400">IT Services</h3>
                <p className="text-slate-400 mb-4">150+ comprehensive IT solutions</p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Cloud DevOps: $120-220/hour</li>
                  <li>• Cybersecurity: $5,000-40,000/project</li>
                  <li>• Cloud Migration: $10,000-150,000/project</li>
                  <li>• Enterprise Architecture: $150-300/hour</li>
                  <li>• Quantum Computing: $200-500/hour</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quantum Computing</h3>
                <p className="text-slate-400 mb-4">Cutting-edge quantum solutions</p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Quantum Platform: $4,999-14,999/mo</li>
                  <li>• Algorithm Development: $200-500/hour</li>
                  <li>• Quantum Consulting: $25,000-200,000/project</li>
                  <li>• Hybrid Solutions: Custom pricing</li>
                  <li>• Research Collaboration: $50,000+/project</li>
                </ul>
                <Link href="/quantum-computing" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Edge Computing</h3>
                <p className="text-slate-400 mb-4">Ultra-low latency solutions</p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Edge Platform: $1,299-3,499/mo</li>
                  <li>• IoT Management: $899-2,499/mo</li>
                  <li>• 5G Solutions: $30,000-200,000/project</li>
                  <li>• Real-time Processing: Custom pricing</li>
                  <li>• Global Edge Network: $50,000+/setup</li>
                </ul>
                <Link href="/cloud-devops" className="text-red-400 hover:text-red-300 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">Cybersecurity</h3>
                <p className="text-slate-400 mb-4">Advanced security solutions</p>
                <ul className="text-slate-300 space-y-2 mb-6">
                  <li>• Zero Trust Security: $999-2,499/mo</li>
                  <li>• Threat Intelligence: $1,299-3,499/mo</li>
                  <li>• Security Audit: $4,000-15,000/project</li>
                  <li>• Managed SOC: $3,000-8,000/mo</li>
                  <li>• Compliance Automation: Custom pricing</li>
                </ul>
                <Link href="/cybersecurity" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Contact our experts for a custom quote tailored to your specific needs. 
                  We offer flexible payment terms and volume discounts for enterprise clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Call {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Email {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default PricingPage;

