import React from 'react';
import Head from 'next/head';
import { ArrowRight, CheckCircle, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function ServicesAdvertisingPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const benefits = [
    '1000% ROI target with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations'
  ];

  const anchors = [
    { title: 'AI & Data', href: '/services#ai' },
    { title: 'Cloud & FinOps', href: '/services#cloud' },
    { title: 'Observability', href: '/services#observability' },
    { title: 'Developer Tools', href: '/services#developer-tools' },
    { title: 'Quality & Monitoring', href: '/services#quality' }
  ];

  const pricingRefs = [
    {
      title: 'AI Platforms',
      links: [
        { name: 'OpenAI', href: 'https://openai.com/api/pricing' },
        { name: 'Anthropic', href: 'https://www.anthropic.com/pricing' },
        { name: 'Langfuse', href: 'https://langfuse.com/pricing' },
        { name: 'Groq', href: 'https://wow.groq.com/pricing' },
        { name: 'OpenRouter', href: 'https://openrouter.ai/models' }
      ],
      note: 'SMB budgets: $100–$2,000/mo.'
    },
    {
      title: 'Security & Compliance',
      links: [
        { name: 'Wiz', href: 'https://www.wiz.io/pricing' },
        { name: 'Prisma Cloud', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' },
        { name: 'HashiCorp Vault', href: 'https://www.hashicorp.com/products/vault/pricing' },
        { name: 'Cloudflare Zero Trust', href: 'https://www.cloudflare.com/products/zero-trust/pricing/' }
      ],
      note: 'SMB budgets: $200–$5,000/mo.'
    },
    {
      title: 'Vector & Search',
      links: [
        { name: 'Pinecone', href: 'https://www.pinecone.io/pricing/' },
        { name: 'Weaviate', href: 'https://weaviate.io/pricing' },
        { name: 'Qdrant', href: 'https://qdrant.tech/pricing/' }
      ],
      note: 'SMB budgets: $50–$1,000/mo.'
    },
    {
      title: 'Cloud & Edge',
      links: [
        { name: 'AWS Calculator', href: 'https://calculator.aws' },
        { name: 'Azure', href: 'https://azure.microsoft.com/pricing' },
        { name: 'Cloudflare', href: 'https://www.cloudflare.com/plans/' },
        { name: 'Netlify', href: 'https://www.netlify.com/pricing/' }
      ],
      note: 'SMB budgets: $200–$10,000/mo.'
    }
  ];

  return (
    <>
      <Head>
        <title>Services Advertising | Zion Tech Group</title>
        <meta name="description" content="Features, benefits, and market references for Zion Tech Group services" />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
        <main className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services Advertising
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the features, benefits, and market references for our comprehensive service offerings
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {anchors.map((anchor, index) => (
                <a
                  key={index}
                  href={anchor.href}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <span className="text-white font-semibold">{anchor.title}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Pricing References */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Market Pricing References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingRefs.map((ref, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">{ref.title}</h3>
                  <div className="space-y-2 mb-4">
                    {ref.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-white/60">{ref.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and discover how our services can transform your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-mono">{contact.mobile}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-green-400">{contact.email}</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400 text-sm">{contact.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}