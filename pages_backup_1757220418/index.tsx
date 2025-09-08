<<<<<<< HEAD
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect, Suspense } from 'react'
import { ContactInfo, AnimationState } from '../types'
import ErrorBoundary from '../components/ErrorBoundary'
import LoadingSpinner from '../components/LoadingSpinner'
import PerformanceMonitor from '../components/PerformanceMonitor'
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }))
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    )
  }
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https: //ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href={contact.site} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og: title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og: description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og: url" content={contact.site} />
        <meta property="og: type" content="website" />
        <meta property="og: site_name" content="Zion Tech Group" />
        <meta property="og: locale" content="en_US" />
        <meta name="twitter: card" content="summary_large_image" />
        <meta name="twitter: title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter: description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="twitter: site" content="@ziontechgroup" />
        <meta name="twitter: creator" content="@ziontechgroup" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https: //schema.org",
              "@type": "Organization",
              name: "Zion Tech Group",
              url: contact.site,
              logo: `${contact.site}/favicon.svg`,
              description: "Leading provider of micro SaaS products, AI services, and IT solutions",
              address: {
                "@type": "PostalAddress",
                streetAddress: "364 E Main St STE 1008",
                addressLocality: "Middletown",
                addressRegion: "DE",
                postalCode: "19709",
                addressCountry: "US"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: contact.phone,
                contactType: "customer service",
                email: contact.email
              },
              sameAs: [contact.site]
            })
          }}
        />
      </Head>
      <ErrorBoundary level="page">
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto">
            <h1
              id="hero-title"
              className={`text-5xl md: text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Zion Tech Group
            </h1>
            <p className={`text-xl md: text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We deliver cutting-edge technology solutions with 150+ micro SaaS products,
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization
              to AI automation, quantum computing to blockchain solutions, we help businesses scale
              efficiently and securely in the digital age.
            </p>
            <div className={`flex flex-col sm: flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">
              <Link
                href="/services"
                className="px-8 py-3 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover: scale-105 focus: outline-none focus: ring-2 focus: ring-blue-500 focus: ring-offset-2 focus: ring-offset-slate-900 focus: visible"
                aria-label="View all our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
                onClick={() => handleButtonClick('click', 'view-services-button')}
              >
                View All Services
              </Link>
              <Link
                href="/services-catalog"
                className="px-8 py-3 bg-purple-600 hover: bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover: scale-105 focus: outline-none focus: ring-2 focus: ring-purple-500 focus: ring-offset-2 focus: ring-offset-slate-900 focus: visible"
                aria-label="Browse our services catalog"
                tabIndex={animationState.isLoaded ? 0 : -1}
                onClick={() => handleButtonClick('click', 'services-catalog-button')}
              >
                Services Catalog
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover: scale-105 focus: outline-none focus: ring-2 focus: ring-slate-500 focus: ring-offset-2 focus: ring-offset-slate-900 focus: visible"
                aria-label="Get a quote for our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
                onClick={() => handleButtonClick('click', 'get-quote-button')}
              >
                Get Quote
              </Link>
            </div>
            <div className={`grid md: grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover: border-blue-500/40 transition-all duration-300 hover: scale-105">
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover: border-purple-500/40 transition-all duration-300 hover: scale-105">
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover: border-green-500/40 transition-all duration-300 hover: scale-105">
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Overview */}
        <section className="py-16 px-4" role="main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md: text-4xl font-bold text-center mb-12" id="service-categories">
              Our Service Categories
            </h2>
            <div className="grid md: grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover: border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Innovative, focused software solutions including AI-Powered Video Clip Maker,
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover: text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover: border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents,
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover: text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover: border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions,
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover: text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel: ${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto: ${contact.email}`} className="px-6 py-3 bg-purple-600 hover: bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover: text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        <PerformanceMonitor
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded: ', metrics)
          }}
        />
      </ErrorBoundary>
    </>
  )
}
=======
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
    icon: '🤖',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    href: '/services/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
    icon: '💻',
    features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    href: '/services'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    href: '/services'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
    icon: '🔒',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    href: '/services'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    icon: '📊',
    features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
    href: '/services'
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
    icon: '🚀',
    features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
    href: '/services'
  }
];

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Team Members', value: '50+' }
];

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Lightning Fast',
    description: 'Optimized performance and rapid deployment'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: 'Award Winning',
    description: 'Recognized for excellence in technology solutions'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success'
  }
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Leading the future of technology with AI, blockchain, and innovative solutions that transform businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Start Your Project
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations and our productivity has increased by 300%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Client {i}</div>
                    <div className="text-gray-500">CEO, Company {i}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
