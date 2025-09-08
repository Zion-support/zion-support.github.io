import Head from 'next/head';
import Link from 'next/link';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'Micro SaaS Products',
      description: 'Innovative, focused software solutions for specific business needs',
      count: 150,
      color: 'blue',
      services: [
        'AI-Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi-Language Website Translator',
        'Predictive Inventory Optimizer',
        'Real-Time Analytics Dashboard',
        'Automated Content Generator',
        'Blockchain Transaction Monitor'
      ]
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      count: 100,
      color: 'purple',
      services: [
        'Autonomous AI Agents',
        'AI-Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI-Powered Voice Analytics',
        'AI-Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ]
    },
    {
      title: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      count: 100,
      color: 'green',
      services: [
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High-Performance Computing Solutions',
        'Cloud Migration & Optimization',
        'Cybersecurity & Compliance',
        'Infrastructure as Code'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity" />
        <link rel="canonical" href={`${contact.site}/services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                350+ Innovative Technology Solutions
              </p>
              <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
                From micro SaaS products to enterprise AI solutions, we provide comprehensive 
                technology services to help your business thrive in the digital age.
              </p>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <div 
                    key={category.title}
                    className={`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-${category.color}-500/40 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-bold text-${category.color}-400`}>
                        {category.title}
                      </h3>
                      <span className={`text-3xl font-bold text-${category.color}-400`}>
                        {category.count}+
                      </span>
                    </div>
                    <p className="text-slate-300 mb-6">
                      {category.description}
                    </p>
                    <ul className="text-slate-400 space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>• {service}</li>
                      ))}
                    </ul>
                    <Link 
                      href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`text-${category.color}-400 hover:text-${category.color}-300 font-semibold`}
                    >
                      View All {category.title} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts to discuss your project requirements and discover 
                how our innovative solutions can drive your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Email {contact.email}
                </a>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}