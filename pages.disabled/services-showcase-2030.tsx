import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { revolutionary2030AIServices } from '../data/revolutionary-2030-ai-services';
import { revolutionary2030MicroSaasServices } from '../data/revolutionary-2030-micro-saas';
import { revolutionary2030ITServices } from '../data/revolutionary-2030-it-services';

export default function ServicesShowcase2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<any[]>([]);

  const allServices = [
    ...revolutionary2030AIServices,
    ...revolutionary2030MicroSaasServices,
    ...revolutionary2030ITServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai', name: 'AI Services', count: revolutionary2030AIServices.length },
    { id: 'micro-saas', name: 'Micro SaaS', count: revolutionary2030MicroSaasServices.length },
    { id: 'it', name: 'IT Services', count: revolutionary2030ITServices.length }
  ];

  useEffect(() => {
    let filtered = allServices;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (activeCategory === 'ai') return revolutionary2030AIServices.includes(service);
        if (activeCategory === 'micro-saas') return revolutionary2030MicroSaasServices.includes(service);
        if (activeCategory === 'it') return revolutionary2030ITServices.includes(service);
        return true;
      });
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [activeCategory, searchTerm]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group 2030 Services Showcase - Revolutionary AI, Micro SaaS & IT Solutions</title>
        <meta name="description" content="Explore our revolutionary 2030 services including Quantum AI Neural Interfaces, Autonomous AI Business Ecosystems, Holographic Collaboration, and cutting-edge IT infrastructure solutions." />
        <meta name="keywords" content="AI services 2030, micro SaaS 2030, IT services 2030, quantum computing, neural interfaces, autonomous business, holographic collaboration" />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase-2030" />
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
                <Link href="/services" className="text-zion-cyan hover:text-white transition-colors">Services</Link>
                <Link href="/pricing" className="text-zion-cyan hover:text-white transition-colors">Pricing</Link>
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
              Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Revolutionary AI, Micro SaaS, and IT solutions that define the future of technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan text-black shadow-neon'
                      : 'border-zion-cyan/50 text-zion-cyan hover:border-zion-cyan hover:shadow-neon'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="relative max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-black/40 border-2 border-zion-cyan/50 rounded-full text-white placeholder-zion-cyan/70 focus:border-zion-cyan focus:outline-none focus:shadow-neon transition-all"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                🔍
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-black/40 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan hover:shadow-neon transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-zion-cyan/80 mb-4 text-sm">
                    {service.tagline}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-zion-cyan/70">{service.period}</span>
                  </div>
                  
                  <p className="text-zion-cyan/70 mb-4 text-sm line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">Category</span>
                    <p className="text-zion-cyan font-semibold">{service.category}</p>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">Target Audience</span>
                    <p className="text-zion-cyan/80 text-sm">{service.targetAudience}</p>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">ROI</span>
                    <p className="text-green-400 font-semibold text-sm">{service.roi}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-xs text-zion-cyan/60 uppercase tracking-wide">Key Features</span>
                    <ul className="mt-2 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-zion-cyan/80 text-sm flex items-center">
                          <span className="text-zion-cyan mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white ml-1">{service.rating}</span>
                      </div>
                      <span className="text-zion-cyan/60">({service.reviews} reviews)</span>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="bg-zion-cyan hover:bg-zion-cyan-light text-black px-6 py-2 rounded-lg font-semibold transition-colors hover:shadow-neon"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-cyan/70">Try adjusting your search criteria or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20 bg-black/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan mb-12 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our revolutionary 2030 services
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
                  <li><Link href="/services#ai" className="hover:text-zion-cyan transition-colors">AI Services</Link></li>
                  <li><Link href="/services#micro-saas" className="hover:text-zion-cyan transition-colors">Micro SaaS</Link></li>
                  <li><Link href="/services#it" className="hover:text-zion-cyan transition-colors">IT Services</Link></li>
                  <li><Link href="/services#quantum" className="hover:text-zion-cyan transition-colors">Quantum Computing</Link></li>
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