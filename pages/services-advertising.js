import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AnimatedCard } from '../components/ui/AnimatedCard.jsx';
import GradientButton from '../components/ui/GradientButton.jsx';
import { SEOHead } from '../components/ui/SEOHead.jsx';

export default function ServicesAdvertisingPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    {
      title: "AI & Machine Learning Solutions",
      description: "Transform your business with intelligent automation, predictive analytics, and AI-driven decision making.",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision", "Robotic Process Automation"],
      icon: "🤖"
    },
    {
      title: "Enterprise IT Services",
      description: "Comprehensive IT infrastructure, cloud migration, and digital transformation solutions.",
      features: ["Cloud Architecture", "Infrastructure Migration", "System Integration", "Performance Optimization", "Disaster Recovery"],
      icon: "☁️"
    },
    {
      title: "Micro SaaS Development",
      description: "Rapid development of scalable software-as-a-service applications with modern tech stacks.",
      features: ["MVP Development", "Scalable Architecture", "API Development", "User Authentication", "Payment Integration"],
      icon: "🚀"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with cutting-edge security technologies and compliance frameworks.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Threat Detection", "Incident Response"],
      icon: "🛡️"
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development workflows, CI/CD pipelines, and automated deployment solutions.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Container Orchestration", "Performance Monitoring"],
      icon: "⚙️"
    },
    {
      title: "Data Analytics & BI",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      features: ["Data Visualization", "ETL Pipelines", "Real-time Analytics", "Machine Learning Models", "Dashboard Development"],
      icon: "📊"
    }
  ];

  const benefits = [
    '1000% ROI target with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations'
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$5,000",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: ["Basic AI Integration", "Cloud Setup", "Security Assessment", "Email Support", "Monthly Reporting"],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "month",
      description: "Ideal for growing companies",
      features: ["Advanced AI Solutions", "Full IT Infrastructure", "Custom SaaS Development", "Priority Support", "Weekly Reporting"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for large organizations",
      features: ["Complete Digital Transformation", "Dedicated Team", "24/7 Support", "Custom SLAs", "Quarterly Business Reviews"],
      popular: false
    }
  ];

  return (
    <div>
      <SEOHead
        title="AI, IT and Micro SaaS Services | Zion Tech Group"
        description="Comprehensive AI solutions, enterprise IT services, and micro SaaS development. 1000% ROI target with proven architectures and 24/7 support."
        keywords="AI services, IT solutions, micro SaaS, machine learning, cloud infrastructure, DevOps, enterprise technology, pricing, contact"
        canonicalUrl="https://ziontechgroup.com/services-advertising"
      />

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                  Zion Tech Group
                </span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</span>
                </Link>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </div>
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto space-y-16">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Services That Ship Outcomes
            </h1>
            <p className="text-gray-300 text-lg mb-8">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="tel:+13024640950" size="lg">
                Call Now: +1 302 464 0950
              </GradientButton>
              <GradientButton variant="outline" size="lg" href="mailto:kleber@ziontechgroup.com">
                Email Us
              </GradientButton>
            </div>
          </header>

          {/* Services Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedCard key={index} delay={index * 150} className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <AnimatedCard key={index} delay={index * 200} className={`p-8 relative ${tier.popular ? 'border-2 border-cyan-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {tier.price}
                      {tier.period !== 'quote' && <span className="text-lg text-gray-400">/{tier.period}</span>}
                    </div>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <GradientButton href="tel:+13024640950" className="w-full">
                    Get Started
                  </GradientButton>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedCard key={index} delay={index * 100} className="p-6">
                  <p className="text-gray-200 text-center">{benefit}</p>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Ready to Get Started?</h2>
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 flex items-center gap-3 transition-all duration-300">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="text-cyan-400 font-semibold">Call Us</div>
                    <span className="text-gray-200">{contact.mobile}</span>
                  </div>
                </a>
                <a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 flex items-center gap-3 transition-all duration-300">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-purple-400 font-semibold">Email Us</div>
                    <span className="text-gray-200 text-sm">{contact.email}</span>
                  </div>
                </a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 flex items-center gap-3 transition-all duration-300">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-emerald-400 font-semibold">Visit Us</div>
                    <span className="text-gray-200 text-sm">{contact.address}</span>
                  </div>
                </a>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-6">Get a free consultation and discover how we can transform your business</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GradientButton href="tel:+13024640950" size="lg">
                    Call Now for Free Consultation
                  </GradientButton>
                  <GradientButton variant="outline" size="lg" href="mailto:kleber@ziontechgroup.com">
                    Send Email
                  </GradientButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}