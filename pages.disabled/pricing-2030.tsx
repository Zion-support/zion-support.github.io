import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { revolutionary2030AIServices } from '../data/revolutionary-2030-ai-services';
import { revolutionary2030MicroSaasServices } from '../data/revolutionary-2030-micro-saas';
import { revolutionary2030ITServices } from '../data/revolutionary-2030-it-services';

export default function Pricing2030() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...revolutionary2030AIServices,
    ...revolutionary2030MicroSaasServices,
    ...revolutionary2030ITServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', services: allServices },
    { id: 'ai', name: 'AI Services', services: revolutionary2030AIServices },
    { id: 'micro-saas', name: 'Micro SaaS', services: revolutionary2030MicroSaasServices },
    { id: 'it', name: 'IT Services', services: revolutionary2030ITServices }
  ];

  const currentServices = categories.find(cat => cat.id === selectedCategory)?.services || allServices;

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace('$', '').replace(',', ''));
    const annualPrice = price * 12 * 0.8; // 20% discount for annual
    return `$${Math.round(annualPrice).toLocaleString()}`;
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group 2030 Pricing - Revolutionary AI, Micro SaaS & IT Solutions</title>
        <meta name="description" content="Explore our competitive 2030 pricing for revolutionary AI services, micro SaaS solutions, and cutting-edge IT infrastructure. Get 20% off with annual billing." />
        <meta name="keywords" content="AI pricing 2030, micro SaaS pricing, IT services pricing, quantum computing cost, neural interface pricing, autonomous business pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2030" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-mesh opacity-20 animate-gradient-shift"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-zion-cyan/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-gradient">
                Zion Tech Group
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-zion-cyan hover:text-white transition-colors">Home</Link>
                <Link href="/services-showcase-2030" className="text-zion-cyan hover:text-white transition-colors">Services</Link>
                <Link href="/pricing-2030" className="text-zion-cyan hover:text-white transition-colors">Pricing</Link>
                <Link href="/contact" className="text-zion-cyan hover:text-white transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-white transition-colors">
                  {contactInfo.mobile}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-4 py-2 rounded-lg transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient animate-fade-in">
              Pricing 2030
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Revolutionary technology solutions at competitive prices. Save 20% with annual billing.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-zion-cyan/60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingPeriod === 'annual' ? 'bg-zion-cyan' : 'bg-zion-cyan/30'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingPeriod === 'annual' ? 'transform translate-x-8' : 'transform translate-x-1'
                }`} />
              </button>
              <span className={`text-lg ${billingPeriod === 'annual' ? 'text-white' : 'text-zion-cyan/60'}`}>
                Annual (20% off)
              </span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan text-black shadow-neon'
                      : 'border-zion-cyan/50 text-zion-cyan hover:border-zion-cyan hover:shadow-neon'
                  }`}
                >
                  {category.name} ({category.services.length})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan hover:shadow-neon transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold shadow-neon-purple">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zion-cyan/80 mb-4">
                      {service.tagline}
                    </p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        {billingPeriod === 'annual' ? getAnnualPrice(service.price) : service.price}
                      </span>
                      <span className="text-zion-cyan/70">
                        {billingPeriod === 'annual' ? '/year' : service.period}
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className="text-green-400 text-sm">
                        Save ${Math.round(parseInt(service.price.replace('$', '').replace(',', '')) * 12 * 0.2).toLocaleString()}/year
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <li key={idx} className="text-zion-cyan/80 text-sm flex items-start">
                          <span className="text-zion-cyan mr-2 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6 space-y-3">
                    <div>
                      <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">Category</span>
                      <p className="text-zion-cyan font-semibold">{service.category}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">Setup Time</span>
                      <p className="text-zion-cyan/80">{service.setupTime}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">Trial</span>
                      <p className="text-zion-cyan/80">{service.trialDays} days free</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">ROI & Market Position</h4>
                    <div className="bg-zion-slate/50 rounded-lg p-3">
                      <p className="text-green-400 font-semibold text-sm mb-2">{service.roi}</p>
                      <p className="text-zion-cyan/80 text-xs">{service.marketPosition}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Link
                      href={service.link}
                      className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-black px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-neon block"
                    >
                      Get Started
                    </Link>
                    <p className="text-zion-cyan/60 text-sm mt-2">
                      {service.trialDays}-day free trial • No credit card required
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison Table */}
        <section className="relative z-10 py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
              Service Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-black/40 backdrop-blur-md rounded-2xl border border-zion-cyan/20">
                <thead>
                  <tr className="border-b border-zion-cyan/20">
                    <th className="text-left p-6 text-zion-cyan font-semibold">Service</th>
                    <th className="text-center p-6 text-zion-cyan font-semibold">Price</th>
                    <th className="text-center p-6 text-zion-cyan font-semibold">Category</th>
                    <th className="text-center p-6 text-zion-cyan font-semibold">Trial</th>
                    <th className="text-center p-6 text-zion-cyan font-semibold">Setup</th>
                    <th className="text-center p-6 text-zion-cyan font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {currentServices.map((service, index) => (
                    <tr key={service.id} className={`border-b border-zion-cyan/10 ${index % 2 === 0 ? 'bg-black/20' : ''}`}>
                      <td className="p-6">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <h4 className="font-semibold text-white">{service.name}</h4>
                            <p className="text-zion-cyan/70 text-sm">{service.tagline}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-6">
                        <div className="text-xl font-bold text-white">
                          {billingPeriod === 'annual' ? getAnnualPrice(service.price) : service.price}
                        </div>
                        <div className="text-zion-cyan/70 text-sm">
                          {billingPeriod === 'annual' ? '/year' : service.period}
                        </div>
                      </td>
                      <td className="text-center p-6">
                        <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                          {service.category}
                        </span>
                      </td>
                      <td className="text-center p-6">
                        <span className="text-green-400 font-semibold">{service.trialDays} days</span>
                      </td>
                      <td className="text-center p-6">
                        <span className="text-zion-cyan/80">{service.setupTime}</span>
                      </td>
                      <td className="text-center p-6">
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-cyan/60 text-sm">({service.reviews})</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-zion-cyan mb-12 max-w-3xl mx-auto">
              Need custom enterprise solutions or volume discounts? Our team will create a tailored package for your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Integration</h3>
                <p className="text-zion-cyan/70">Tailored solutions that integrate with your existing infrastructure</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                <p className="text-zion-cyan/70">24/7 dedicated support team and account management</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">Volume Discounts</h3>
                <p className="text-zion-cyan/70">Significant savings for enterprise deployments</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon"
              >
                Call Sales: {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
              >
                Email Sales Team
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20 bg-black/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-zion-cyan mb-12 max-w-3xl mx-auto">
              Our team is here to help you choose the right services for your business needs
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors hover:shadow-neon"
              >
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
              >
                Email {contactInfo.email}
              </a>
            </div>
            <div className="text-zion-cyan/70">
              <p>{contactInfo.address}</p>
              <p className="mt-2">
                <a href={contactInfo.website} className="hover:text-zion-cyan transition-colors">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-black/40 border-t border-zion-cyan/20">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-cyan/70">
                  Revolutionary technology solutions for the future
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-zion-cyan/70">
                  <li><Link href="/services-showcase-2030#ai" className="hover:text-zion-cyan transition-colors">AI Services</Link></li>
                  <li><Link href="/services-showcase-2030#micro-saas" className="hover:text-zion-cyan transition-colors">Micro SaaS</Link></li>
                  <li><Link href="/services-showcase-2030#it" className="hover:text-zion-cyan transition-colors">IT Services</Link></li>
                  <li><Link href="/services-showcase-2030#quantum" className="hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-zion-cyan/70">
                  <li><Link href="/about" className="hover:text-zion-cyan transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-zion-cyan transition-colors">Careers</Link></li>
                  <li><Link href="/news" className="hover:text-zion-cyan transition-colors">News</Link></li>
                  <li><Link href="/partners" className="hover:text-zion-cyan transition-colors">Partners</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-cyan/70">
                  <p>{contactInfo.mobile}</p>
                  <p>{contactInfo.email}</p>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-zion-cyan/20 mt-8 pt-8 text-center text-zion-cyan/60">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}