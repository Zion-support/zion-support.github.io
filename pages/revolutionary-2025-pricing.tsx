import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, TrendingUp } from 'lucide-react';

import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
// import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services';
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure';
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas';

export default function Revolutionary2025Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices
  ];

  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: revolutionaryAI2025Services.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas', name: 'Micro SaaS', icon: Zap, count: revolutionary2025MicroSaasServices.length }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? allRevolutionaryServices 
    : allRevolutionaryServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing');
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative');
        return true;
      });

  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(',', ''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  // Pricing tiers for comparison
  const pricingTiers = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      description: 'Revolutionary artificial intelligence and machine learning services',
      features: ['Custom AI Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Consulting'],
      price: 'Custom',
      rating: 5,
      customers: 50
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Next-generation security solutions and threat protection',
      features: ['Threat Detection', 'Zero Trust Architecture', 'Security Audits', 'Incident Response', 'Compliance'],
      price: 'Custom',
      rating: 5,
      customers: 75
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation solutions',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Monitoring', 'Scalability'],
      price: 'Custom',
      rating: 5,
      customers: 60
    }
  ];

  return (
    <>
      <Head>
        <title>Revolutionary 2025 Pricing — Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2025 pricing for cutting-edge technology solutions including AI, cybersecurity, and cloud services." />
        <meta property="og:title" content="Revolutionary 2025 Pricing — Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary 2025 pricing for cutting-edge technology solutions including AI, cybersecurity, and cloud services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary 2025 Pricing
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Revolutionary pricing for our cutting-edge technology solutions. Get the best value for your investment in AI, cybersecurity, and cloud services.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our Service Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{service.name}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(service.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-white/60 text-sm">{service.customers}+ customers</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
                Get Custom Quote
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 text-lg">
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );

export async function getServerSideProps() {
  return {
    props: {}
  };
}
}