import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: Brain,
      href: '/services/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services',
      icon: Network,
      href: '/services/it-services'
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions',
      icon: Cloud,
      href: '/services/micro-saas'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with proven track records'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Empowering businesses with cutting-edge AI, cloud solutions, cybersecurity, and innovative technology services. Expert IT consulting and digital transformation." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, IT consulting, digital transformation, blockchain, IoT, machine learning, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Navigation */}
      <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link href="/" className="text-zion-slate-light hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-zion-slate-light hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-zion-slate-light hover:text-white transition-colors">Contact</Link>
              <a href="tel:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Businesses with
                <span className="text-zion-cyan"> AI & Technology</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with cutting-edge AI solutions, cloud infrastructure, 
                and innovative technology services. We deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                      <div className="text-sm text-zion-slate-light">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-zion-blue-light/20 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-zion-slate-light text-sm mb-4 max-w-md">
                Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/ai-services" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">AI Services</Link></li>
                <li><Link href="/services/it-services" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">IT Services</Link></li>
                <li><Link href="/services/cloud" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/services/cybersecurity" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zion-blue-light/30 mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}